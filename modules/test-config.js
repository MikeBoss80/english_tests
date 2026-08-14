// modules/test-config.js
// Configuración de tests y construcción de pruebas según el roadmap del README.

export const TEST_CONFIGS = {
    diagnostic: {
        id: 'diagnostic',
        type: 'diagnostic',
        level: 'mixed',
        label: 'Diagnostic',
        sections: ['grammar', 'vocabulary', 'reading', 'language_use'],
        description: 'Balanced quick assessment covering the major skills for a level estimate.'
    },
    'a1-full': {
        id: 'a1-full',
        type: 'level_test',
        level: 'A1',
        label: 'A1 Full Test',
        sections: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        description: 'Formal A1 assessment for a complete level evaluation.'
    },
    'a2-full': {
        id: 'a2-full',
        type: 'level_test',
        level: 'A2',
        label: 'A2 Full Test',
        sections: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        description: 'A2 evaluation with more structure, reading and listening variety.'
    },
    'b1-full': {
        id: 'b1-full',
        type: 'level_test',
        level: 'B1',
        label: 'B1 Full Test',
        sections: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        description: 'Intermediate formal assessment focused on inference and production.'
    },
    'b2-full': {
        id: 'b2-full',
        type: 'level_test',
        level: 'B2',
        label: 'B2 Full Test',
        sections: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        description: 'Upper-intermediate assessment with more complex texts and nuance.'
    },
    'c1-full': {
        id: 'c1-full',
        type: 'level_test',
        level: 'C1',
        label: 'C1 Full Test',
        sections: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        description: 'Advanced assessment emphasizing precision and argumentation.'
    },
    'c2-full': {
        id: 'c2-full',
        type: 'level_test',
        level: 'C2',
        label: 'C2 Full Test',
        sections: ['grammar', 'vocabulary', 'use_of_english', 'reading', 'listening', 'writing'],
        description: 'Proficient-level challenge centered on nuance, register and precision.'
    }
};

export function normalizeTestConfig(configOrId) {
    if (!configOrId) return TEST_CONFIGS.diagnostic;
    if (typeof configOrId === 'string') {
        return TEST_CONFIGS[configOrId] || TEST_CONFIGS.diagnostic;
    }
    return configOrId;
}

export function buildTestConfig({ level, mode, sections = null } = {}) {
    const configId = mode === 'diagnostic' ? 'diagnostic' : `${String(level).toLowerCase()}-full`;
    const base = normalizeTestConfig(configId);
    return {
        ...base,
        ...(sections ? { sections } : {}),
        level: level || base.level,
        mode
    };
}

export function getAllTestConfigs() {
    return Object.values(TEST_CONFIGS);
}

export function getAvailableLevels() {
    return ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
}
