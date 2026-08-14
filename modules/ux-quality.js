// modules/ux-quality.js
// Base para UX/UI, acceso y calidad de experiencia del sprint 27–30 y 32–33.

export const UX_CHECKLIST = {
    ui: [
        'Hierarchy and clarity for each screen',
        'Progress indicator with status and feedback',
        'Accessible cards and action patterns',
        'Consistent spacing and contrast across views'
    ],
    mobile: [
        '320px+ layout support',
        'Buttons with touch-friendly targets',
        'Readable text blocks in narrow screens',
        'No important controls hidden behind hover-only states'
    ],
    accessibility: [
        'Keyboard navigation support',
        'Visible focus states',
        'Semantic structure and labels',
        'Color not used as the only signaling channel'
    ],
    performance: [
        'No unnecessary dependencies',
        'No oversized assets',
        'Lazy load content when possible',
        'Lightweight modules and local resources'
    ],
    qa: [
        'Test flow smoke pass',
        'Review answer save and continue',
        'Check progress and final score rendering',
        'Validate empty/edge response states'
    ]
};

export function getUxChecklist() {
    return UX_CHECKLIST;
}

export function getAccessibilityAudit() {
    return [
        { rule: 'semantic html', status: 'ready' },
        { rule: 'focus outlines', status: 'ready' },
        { rule: 'keyboard navigation', status: 'planned' },
        { rule: 'screen reader labels', status: 'ready' }
    ];
}

export function getQAMatrix() {
    return [
        { area: 'welcome screen', status: 'pass' },
        { area: 'level selection', status: 'pass' },
        { area: 'assessment flow', status: 'pass' },
        { area: 'results screen', status: 'pass' },
        { area: 'mobile layout', status: 'planned' },
        { area: 'keyboard use', status: 'planned' }
    ];
}
