// modules/scoring-engine.js
// Calcula la puntuación global, por sección y por tema, y clasifica el nivel.

function normalize(value) {
    if (value === null || value === undefined) return '';
    return String(value).trim().toLowerCase().replace(/\s+/g, ' ');
}

export class ScoringEngine {
    constructor(questions, answers) {
        this.questions = questions;
        this.answers = answers || {};
    }

    isCorrect(question) {
        const userAnswer = this.answers[question.id];
        if (userAnswer === undefined || userAnswer === null || userAnswer === '') {
            return null; // no respondida
        }

        switch (question.type) {
            case 'ordering': {
                const expected = question.answer.map(normalize).join('|');
                const given = (Array.isArray(userAnswer) ? userAnswer : []).map(normalize).join('|');
                return given === expected;
            }
            case 'matching': {
                const pairs = question.pairs || [];
                const given = userAnswer || {};
                return pairs.every(p => normalize(given[p.left]) === normalize(p.right));
            }
            case 'fill_blank': {
                return normalize(userAnswer) === normalize(question.answer);
            }
            default: {
                return normalize(userAnswer) === normalize(question.answer);
            }
        }
    }

    calculateScore() {
        const results = {
            overall: 0,
            bySection: {},
            byTopic: {},
            totalCorrect: 0,
            totalQuestions: this.questions.length,
            details: []
        };

        const groups = this.groupQuestions();

        // Por sección
        for (const [section, questionList] of Object.entries(groups.sections)) {
            const stats = this.scoreGroup(questionList);
            results.bySection[section] = stats;
            results.totalCorrect += stats.correct;
        }

        // Por tema
        for (const [topic, questionList] of Object.entries(groups.topics)) {
            results.byTopic[topic] = this.scoreGroup(questionList);
        }

        if (results.totalQuestions > 0) {
            results.overall = Math.round((results.totalCorrect / results.totalQuestions) * 100);
        }

        // Detalle por pregunta (para tabla final)
        results.details = this.questions.map(q => ({
            id: q.id,
            section: q.section,
            topic: q.topic,
            type: q.type,
            question: q.question,
            explanation: q.explanation,
            correct: this.isCorrect(q)
        }));

        return results;
    }

    scoreGroup(questionList) {
        let correct = 0;
        let answered = 0;
        for (const q of questionList) {
            const res = this.isCorrect(q);
            if (res === null) continue;
            answered++;
            if (res) correct++;
        }
        return {
            correct,
            total: questionList.length,
            answered,
            percentage: questionList.length === 0 ? 0 : Math.round((correct / questionList.length) * 100)
        };
    }

    groupQuestions() {
        const sections = {};
        const topics = {};
        for (const question of this.questions) {
            if (!sections[question.section]) sections[question.section] = [];
            sections[question.section].push(question);
            if (!topics[question.topic]) topics[question.topic] = [];
            topics[question.topic].push(question);
        }
        return { sections, topics };
    }

    determineLevel(score) {
        if (score >= 80) return { label: 'Consolidated', value: 'Consolidated' };
        if (score >= 60) return { label: 'Developing', value: 'Developing' };
        return { label: 'Beginning', value: 'Beginning' };
    }
}