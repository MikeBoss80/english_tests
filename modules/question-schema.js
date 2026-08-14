// modules/question-schema.js
// Esquema operativo para preguntas dinámicas y variadas siguiendo el Sprint 2.

export const QUESTION_TYPE_META = {
    multiple_choice: {
        label: 'Multiple choice',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'options', 'answer']
    },
    select_correct: {
        label: 'Select correct',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'options', 'answer']
    },
    true_false: {
        label: 'True / false',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'options', 'answer']
    },
    fill_blank: {
        label: 'Fill in the blank',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'answer']
    },
    matching: {
        label: 'Matching',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'pairs', 'answer']
    },
    ordering: {
        label: 'Ordering',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'words', 'answer']
    },
    image_choice: {
        label: 'Image choice',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'image', 'options', 'answer']
    },
    image_description: {
        label: 'Image description',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'image', 'answer']
    },
    image_context: {
        label: 'Image context',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'image', 'options', 'answer']
    },
    open_answer: {
        label: 'Open answer',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'answer']
    },
    reading: {
        label: 'Reading',
        requires: ['id', 'section', 'topic', 'difficulty', 'type', 'question', 'passage', 'options', 'answer']
    }
};

export const QUESTION_SCHEMA = {
    required: ['id', 'section', 'topic', 'difficulty', 'type', 'question'],
    optional: ['subtopic', 'image', 'options', 'answer', 'pairs', 'words', 'passage', 'passageTitle', 'explanation', 'metadata'],
    supportedTypes: Object.keys(QUESTION_TYPE_META),
    notes: {
        language: 'Free of external videos/audio by default; images are local and descriptive.',
        noVideoByDefault: true,
        imageStyle: 'Use an illustration or photo with a clear prompt and grounded context; never decorative-only.'
    }
};

export function validateQuestion(question) {
    if (!question || typeof question !== 'object') return { valid: false, errors: ['Question is missing.'] };
    const errors = [];
    for (const field of QUESTION_SCHEMA.required) {
        if (question[field] === undefined || question[field] === null || question[field] === '') {
            errors.push(`Missing required field: ${field}`);
        }
    }

    if (!QUESTION_SCHEMA.supportedTypes.includes(question.type)) {
        errors.push(`Unsupported question type: ${question.type}`);
    }

    const meta = QUESTION_TYPE_META[question.type];
    if (meta) {
        for (const field of meta.requires) {
            if (question[field] === undefined || question[field] === null || question[field] === '') {
                errors.push(`Missing required field for ${question.type}: ${field}`);
            }
        }
    }

    return { valid: errors.length === 0, errors };
}

export function normalizeQuestion(question) {
    if (!question || typeof question !== 'object') return null;
    return {
        ...question,
        id: String(question.id || `q-${Date.now()}`),
        section: String(question.section || 'grammar'),
        topic: String(question.topic || 'general'),
        difficulty: Number(question.difficulty || 1),
        type: question.type || 'multiple_choice',
        metadata: question.metadata || {
            source: 'manual',
            created: new Date().toISOString()
        }
    };
}
