// modules/release-plan.js
// Plan de entrega para GitHub Pages y public release del proyecto.

export const RELEASE_STEPS = [
    {
        step: 1,
        title: 'Clean project state',
        description: 'Ensure the app boots without console errors and all validation tests pass.'
    },
    {
        step: 2,
        title: 'Static hosting setup',
        description: 'Prepare the repository to run directly from GitHub Pages with static assets only.'
    },
    {
        step: 3,
        title: 'Base metadata',
        description: 'Add title, description, theme color, and favicon for a polished landing experience.'
    },
    {
        step: 4,
        title: 'Public product page',
        description: 'Expose the purpose, levels, test flow and privacy statement clearly to users.'
    },
    {
        step: 5,
        title: 'Analytics and feedback',
        description: 'Add simple, privacy-safe tracking or feedback entry points only if required.'
    },
    {
        step: 6,
        title: 'Launch checklist',
        description: 'Validate responsive layout, accessibility basics, saved progress and result export.'
    }
];

export function getReleaseSteps() {
    return [...RELEASE_STEPS];
}

export function getLaunchChecklist() {
    return [
        'App loads under GitHub Pages',
        'No local-only dependencies required',
        'All modules pass smoke tests',
        'Results can be printed or downloaded',
        'Progress persists in localStorage',
        'Landing page explains the product clearly'
    ];
}
