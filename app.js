// app.js
// Aplicación principal: orquesta motores, datos y UI.

import { QUESTION_BANK } from './data/question-bank.js';
import { AssessmentEngine, getSavedProgress, buildDiagnosticQuestions, MODES } from './modules/assessment-engine.js';
import { ScoringEngine } from './modules/scoring-engine.js';
import { DiagnosticEngine } from './modules/diagnostic-engine.js';
import { UIController } from './modules/ui-controller.js';

class App {
    constructor() {
        this.ui = new UIController(document.getElementById('app'), {
            selectLevel: (level) => this.selectLevel(level),
            beginMode: (level, mode) => this.beginMode(level, mode),
            continueMode: (level, mode) => this.continueMode(level, mode),
            startOver: (level, mode) => this.startOver(level, mode),
            beginAssessment: () => this.renderQuestion(),
            lastQuestionKey: null,
            setAnswer: (id, value) => this.setAnswer(id, value),
            getAnswer: (id) => this.getAnswer(id),
            orderingAdd: (word) => this.orderingAdd(word),
            orderingRemove: (word) => this.orderingRemove(word),
            orderingClear: (id) => this.orderingClear(id),
            previous: () => this.previous(),
            next: () => this.next(),
            review: () => this.review(),
            backToTest: () => this.backToTest(),
            submit: () => this.submit(),
            restart: () => this.restart(),
            goHome: () => this.goHome()
        });
        this.engine = null;
        this.currentLevel = null;
    }

    init() {
        initTheme();
        this.ui.renderWelcome();
    }

    // ------------------------------------------------------------
    // Ciclo de vida de la evaluación
    // ------------------------------------------------------------
    selectLevel(level) {
        this.currentLevel = level;
        this.ui.renderModeSelect(level);
    }

    beginMode(level, mode) {
        this.currentLevel = level;
        const questions = mode === MODES.DIAGNOSTIC
            ? buildDiagnosticQuestions(QUESTION_BANK[level])
            : QUESTION_BANK[level];
        this.engine = new AssessmentEngine(level, questions, mode);
        const progress = getSavedProgress(level, mode);
        if (progress && progress.answers && Object.keys(progress.answers).length > 0) {
            // Hay progreso guardado del mismo modo: comenzar de cero (startOver para borrar)
            this.engine.clear(level, mode);
        }
        this.ui.renderInstructions(level, mode, this.engine.getTotal());
    }

    continueMode(level, mode) {
        this.currentLevel = level;
        const questions = mode === MODES.DIAGNOSTIC
            ? buildDiagnosticQuestions(QUESTION_BANK[level])
            : QUESTION_BANK[level];
        this.engine = new AssessmentEngine(level, questions, mode);
        const data = this.engine.load(level, mode);
        if (data && data.answers && Object.keys(data.answers).length > 0) {
            this.ui.renderQuestion(
                this.engine.getCurrentQuestion(),
                this.engine.currentIndex,
                this.engine.getProgress(),
                this.engine.getAnswer(this.engine.getCurrentQuestion().id)
            );
        } else {
            this.ui.renderInstructions(level, mode, this.engine.getTotal());
        }
    }

    startOver(level, mode) {
        this.currentLevel = level;
        const questions = mode === MODES.DIAGNOSTIC
            ? buildDiagnosticQuestions(QUESTION_BANK[level])
            : QUESTION_BANK[level];
        this.engine = new AssessmentEngine(level, questions, mode);
        this.engine.clear(level, mode);
        this.ui.renderInstructions(level, mode, this.engine.getTotal());
    }

    renderQuestion() {
        const question = this.engine.getCurrentQuestion();
        const selected = this.engine.getAnswer(question.id);
        this.ui.renderQuestion(
            question,
            this.engine.currentIndex,
            this.engine.getProgress(),
            selected
        );
    }

    // ------------------------------------------------------------
    // Respuestas
    // ------------------------------------------------------------
    setAnswer(id, value) {
        this.engine.submitAnswer(id, value);
    }

    getAnswer(id) {
        return this.engine.getAnswer(id);
    }

    orderingAdd(word) {
        const question = this.engine.getCurrentQuestion();
        const current = Array.isArray(this.engine.getAnswer(question.id))
            ? this.engine.getAnswer(question.id).slice()
            : [];
        if (current.includes(word)) return;
        current.push(word);
        this.engine.submitAnswer(question.id, current);
        this.renderQuestion();
    }

    orderingRemove(word) {
        const question = this.engine.getCurrentQuestion();
        const current = this.engine.getAnswer(question.id);
        if (!Array.isArray(current)) return;
        const next = current.filter(w => w !== word);
        this.engine.submitAnswer(question.id, next);
        this.renderQuestion();
    }

    orderingClear(id) {
        this.engine.submitAnswer(id, []);
    }

    // ------------------------------------------------------------
    // Navegación
    // ------------------------------------------------------------
    previous() {
        if (this.engine.previous()) this.renderQuestion();
    }

    next() {
        if (this.engine.next()) this.renderQuestion();
    }

    review() {
        const progress = this.engine.getProgress();
        const unanswered = progress.total - progress.answered;
        this.ui.renderReview(progress, unanswered);
    }

    backToTest() {
        this.renderQuestion();
    }

    submit() {
        const engine = new ScoringEngine(this.engine.questions, this.engine.answers);
        const scores = engine.calculateScore();
        const diagnostic = new DiagnosticEngine(scores).generateDiagnostic();
        const levelInfo = engine.determineLevel(scores.overall);
        const mode = this.engine.mode;
        const level = this.currentLevel;
        this.engine.clear(level, mode);
        this.ui.renderResults(level, mode, scores, diagnostic, levelInfo);
    }

    // ------------------------------------------------------------
    // Reset y home
    // ------------------------------------------------------------
    restart() {
        this.currentLevel = null;
        this.engine = null;
        this.ui.renderWelcome();
    }

    goHome() {
        if (this.engine && this.currentLevel) {
            this.engine.save();
        }
        this.currentLevel = null;
        this.engine = null;
        this.ui.renderWelcome();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.app = new App();
    window.app.init();
});

// ------------------------------------------------------------
// Tema claro / oscuro
// ------------------------------------------------------------
const THEME_KEY = 'english_assessment_theme';

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌓';
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch (e) { /* ignore */ }
}

function initTheme() {
    let theme = null;
    try {
        theme = localStorage.getItem(THEME_KEY);
    } catch (e) { /* ignore */ }
    if (!theme) {
        theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
    }
    applyTheme(theme);
}

window.toggleTheme = function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    applyTheme(current === 'dark' ? 'light' : 'dark');
};