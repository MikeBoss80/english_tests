// modules/full-test-plan.js
// Plan de Full Tests A1–C2 para el sprint 17–22 del roadmap.

export const LEVEL_TEST_PLANS = {
    A1: {
        level: 'A1',
        label: 'A1 Full Test',
        focus: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        complexity: 'basic',
        target: 'Foundational communication and everyday accuracy.',
        content: {
            grammar: ['verb to be', 'present simple', 'present continuous', 'past simple', 'there is/are', 'prepositions'],
            vocabulary: ['family', 'food', 'travel', 'daily routine', 'shopping'],
            reading: ['short texts', 'everyday notices', 'simple descriptions'],
            listening: ['short introductions', 'family conversations', 'simple directions'],
            writing: ['sentence completion', 'short personal description', 'basic message']
        }
    },
    A2: {
        level: 'A2',
        label: 'A2 Full Test',
        focus: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        complexity: 'elementary',
        target: 'Independent communication in familiar situations.',
        content: {
            grammar: ['past continuous', 'must/can/should', 'comparatives', 'countable/uncountable', 'relative clauses'],
            vocabulary: ['travel', 'work', 'health', 'weather', 'hobbies'],
            reading: ['short articles', 'messages', 'simple narrative'],
            listening: ['appointments', 'school tasks', 'daily conversations'],
            writing: ['short email', 'plans and opinions', 'event description']
        }
    },
    B1: {
        level: 'B1',
        label: 'B1 Full Test',
        focus: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        complexity: 'intermediate',
        target: 'Clear communication with some nuance and support.',
        content: {
            grammar: ['past perfect', 'reported speech', 'third conditional', 'future perfect', 'modal perfects'],
            vocabulary: ['technology', 'education', 'environment', 'relationships', 'idioms'],
            reading: ['informative articles', 'opinion texts', 'narrative excerpts'],
            listening: ['interviews', 'discussions', 'stories'],
            writing: ['formal email', 'opinion paragraph', 'short argument']
        }
    },
    B2: {
        level: 'B2',
        label: 'B2 Full Test',
        focus: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        complexity: 'upper-intermediate',
        target: 'Flexible communication with argumentation and inference.',
        content: {
            grammar: ['complex conditionals', 'passives', 'inversion', 'subordination', 'nuanced modality'],
            vocabulary: ['collocations', 'abstract nouns', 'professional language', 'phrasal verbs'],
            reading: ['debates', 'reports', 'editorials'],
            listening: ['debates', 'reports', 'natural conversations'],
            writing: ['argumentative essay', 'report', 'proposal']
        }
    },
    C1: {
        level: 'C1',
        label: 'C1 Full Test',
        focus: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        complexity: 'advanced',
        target: 'Precision, nuance and sustained reasoning in complex contexts.',
        content: {
            grammar: ['highly nuanced use of tense', 'register control', 'complex cohesion', 'subtle modality'],
            vocabulary: ['academic vocabulary', 'register variation', 'idiomatic nuance', 'collocations'],
            reading: ['lectures', 'analytical documents', 'complex arguments'],
            listening: ['lectures', 'wide-ranging discussions', 'implicit meaning'],
            writing: ['formal review', 'critical response', 'structured analysis']
        }
    },
    C2: {
        level: 'C2',
        label: 'C2 Full Test',
        focus: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        complexity: 'proficient',
        target: 'Sophisticated, precise and highly flexible language use.',
        content: {
            grammar: ['precision under pressure', 'complex register shifts', 'ambiguity management', 'deep cohesion'],
            vocabulary: ['advanced academic lexical sets', 'nuance and register', 'idioms and phrasal complexity'],
            reading: ['dense academic texts', 'editorials', 'specialised material'],
            listening: ['complex lectures', 'abstract conversations', 'multispeaker dialogues'],
            writing: ['analytical essay', 'summary and synthesis', 'high-register response']
        }
    }
};

export function getLevelTestPlan(level) {
    const normalized = String(level || '').toUpperCase();
    return LEVEL_TEST_PLANS[normalized] || null;
}

export function getAllLevelTestPlans() {
    return Object.keys(LEVEL_TEST_PLANS).map(level => LEVEL_TEST_PLANS[level]);
}

export function getLevelProgression() {
    return ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
}
