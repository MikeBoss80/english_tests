// modules/assessment-engine.js
// Gestiona el estado de la evaluación: navegación, respuestas y guardado local.

const STORAGE_PREFIX = 'english_assessment_';

export const MODES = {
    FULL: 'full',
    DIAGNOSTIC: 'diagnostic'
};

export const MODE_LABELS = {
    full: 'Full Test',
    diagnostic: 'Diagnostic Test'
};

// Construye un subconjunto balanceado y determinista para el test rápido:
// al menos 1 pregunta por (sección+tema) y el resto repartido de forma pareja,
// preservando después el orden original del banco.
export function buildDiagnosticQuestions(questions, ratio = 0.3) {
    const total = questions.length;
    const target = Math.max(8, Math.min(total, Math.round(total * ratio)));
    if (target >= total) return questions;

    // Agrupar preguntas por sección
    const sectionsMap = new Map();
    for (const q of questions) {
        if (!sectionsMap.has(q.section)) sectionsMap.set(q.section, []);
        sectionsMap.get(q.section).push(q);
    }

    const picked = [];
    // Repartir el cupo proporcionalmente entre secciones, mínimo 1 por sección presente
    for (const [section, sectionQuestions] of sectionsMap) {
        const quota = Math.max(1, Math.round(target * (sectionQuestions.length / total)));
        picked.push(...sampleBalanced(sectionQuestions, quota, total));
    }

    // Restaurar el orden original del banco
    const order = new Map(questions.map((q, i) => [q.id, i]));
    picked.sort((a, b) => order.get(a.id) - order.get(b.id));
    return picked.slice(0, target);
}

// Muestra "quota" preguntas de una sección de forma balanceada y determinista:
// al menos 1 por grupo de tema (o pasaje en lecturas) y el resto repartido parejo.
function sampleBalanced(questions, quota) {
    if (quota >= questions.length) return [...questions];

    const groups = [];
    const byGroup = new Map();
    for (const q of questions) {
        const key = q.type === 'reading'
            ? `reading::${String(q.id).replace(/-\d+$/, '')}`
            : `${q.section}::${q.topic}`;
        if (!byGroup.has(key)) {
            byGroup.set(key, []);
            groups.push(byGroup.get(key));
        }
        byGroup.get(key).push(q);
    }

    const picked = [];
    const cursor = groups.map(() => 0);

    // Ronda 1: una pregunta por grupo de tema/pasaje
    for (let i = 0; i < groups.length && picked.length < quota; i++) {
        picked.push(groups[i][0]);
        cursor[i] = 1;
    }

    // Ronda 2: repartir el resto de forma pareja entre los grupos
    let gi = 0;
    let guard = 0;
    while (picked.length < quota && guard < questions.length + groups.length) {
        const list = groups[gi];
        if (cursor[gi] < list.length) {
            picked.push(list[cursor[gi]]);
            cursor[gi]++;
        }
        gi = (gi + 1) % groups.length;
        guard++;
    }

    // Mantener el orden interno de la sección
    const order = new Map(questions.map((q, i) => [q.id, i]));
    picked.sort((a, b) => order.get(a.id) - order.get(b.id));
    return picked;
}

export function storageKeyFor(level, mode) {
    return `${STORAGE_PREFIX}${level}_${mode}`;
}

export class AssessmentEngine {
    constructor(level, questions, mode = MODES.FULL) {
        this.level = level;
        this.mode = mode;
        this.questions = questions;
        this.answers = {};            // { questionId: answerValue }
        this.currentIndex = 0;
        this.startedAt = null;
        this.submitted = false;
    }

    get storageKey() {
        return storageKeyFor(this.level, this.mode);
    }

    getCurrentQuestion() {
        return this.questions[this.currentIndex] || null;
    }

    getTotal() {
        return this.questions.length;
    }

    getProgress() {
        const total = this.getTotal();
        const answered = Object.keys(this.answers).length;
        return {
            total,
            answered,
            percentage: total === 0 ? 0 : Math.round((answered / total) * 100)
        };
    }

    submitAnswer(questionId, value) {
        this.answers[questionId] = value;
        this.save();
    }

    hasAnswer(questionId) {
        return Object.prototype.hasOwnProperty.call(this.answers, questionId);
    }

    getAnswer(questionId) {
        return this.answers[questionId];
    }

    next() {
        if (this.currentIndex < this.questions.length - 1) {
            this.currentIndex++;
            return true;
        }
        return false;
    }

    previous() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
            return true;
        }
        return false;
    }

    goTo(index) {
        if (index >= 0 && index < this.questions.length) {
            this.currentIndex = index;
        }
    }

    save() {
        const data = {
            level: this.level,
            mode: this.mode,
            answers: this.answers,
            currentIndex: this.currentIndex,
            startedAt: this.startedAt || new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
        this.startedAt = data.startedAt;
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(data));
        } catch (e) {
            console.warn('No se pudo guardar el progreso', e);
        }
    }

    load(level, mode = MODES.FULL) {
        try {
            const raw = localStorage.getItem(storageKeyFor(level, mode));
            if (!raw && mode === MODES.FULL) {
                // Compatibilidad con progreso guardado antes de existir los modos
                const legacy = localStorage.getItem(STORAGE_PREFIX + level);
                if (legacy) {
                    const data = JSON.parse(legacy);
                    if (data && data.answers) {
                        this.level = level;
                        this.mode = MODES.FULL;
                        this.answers = data.answers;
                        this.currentIndex = typeof data.currentIndex === 'number' ? data.currentIndex : 0;
                        this.startedAt = data.startedAt || new Date().toISOString();
                        return data;
                    }
                }
                return null;
            }
            if (!raw) return null;
            const data = JSON.parse(raw);
            if (!data || !data.answers) return null;
            this.level = level;
            this.mode = data.mode || mode;
            this.answers = data.answers;
            this.currentIndex = typeof data.currentIndex === 'number' ? data.currentIndex : 0;
            this.startedAt = data.startedAt || null;
            return data;
        } catch (e) {
            return null;
        }
    }

    clear(level = this.level, mode = this.mode) {
        try {
            localStorage.removeItem(storageKeyFor(level, mode));
        } catch (e) { /* ignore */ }
    }
}

export function getSavedProgress(level, mode = MODES.FULL) {
    try {
        const raw = localStorage.getItem(storageKeyFor(level, mode));
        if (!raw && mode === MODES.FULL) {
            const legacy = localStorage.getItem(STORAGE_PREFIX + level);
            return legacy ? JSON.parse(legacy) : null;
        }
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

export function clearAllProgress() {
    try {
        for (const level of ['A1', 'A2', 'B1']) {
            for (const mode of Object.values(MODES)) {
                localStorage.removeItem(storageKeyFor(level, mode));
            }
            localStorage.removeItem(STORAGE_PREFIX + level);
        }
    } catch (e) { /* ignore */ }
}