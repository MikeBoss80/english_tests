// modules/media-assets.js
// Gestión de audio e imágenes para los sprints de listening e image architecture.

export const ASSET_REGISTRY = [
    {
        asset_id: 'audio-a1-intro',
        filename: 'a1-intro.mp3',
        type: 'audio',
        source: 'original',
        original_url: 'local',
        creator: 'English Tests',
        license: 'internal',
        download_date: '2026-08-14',
        modifications: 'none',
        notes: 'Introductory A1 audio sample for listening practice.'
    },
    {
        asset_id: 'audio-a2-travel',
        filename: 'a2-travel.mp3',
        type: 'audio',
        source: 'original',
        original_url: 'local',
        creator: 'English Tests',
        license: 'internal',
        download_date: '2026-08-14',
        modifications: 'none',
        notes: 'Travel conversation for A2 listening tasks.'
    },
    {
        asset_id: 'audio-b1-interview',
        filename: 'b1-interview.mp3',
        type: 'audio',
        source: 'original',
        original_url: 'local',
        creator: 'English Tests',
        license: 'internal',
        download_date: '2026-08-14',
        modifications: 'none',
        notes: 'Interview-style listening task for B1.'
    },
    {
        asset_id: 'image-hero',
        filename: 'hero.jpg',
        type: 'image',
        source: 'original',
        original_url: 'local',
        creator: 'English Tests',
        license: 'internal',
        download_date: '2026-08-14',
        modifications: 'none',
        notes: 'General hero illustration used for image-based tasks.'
    },
    {
        asset_id: 'image-restaurant',
        filename: 'restaurant.jpg',
        type: 'image',
        source: 'original',
        original_url: 'local',
        creator: 'English Tests',
        license: 'internal',
        download_date: '2026-08-14',
        modifications: 'none',
        notes: 'Restaurant scene for description and context tasks.'
    }
];

export const AUDIO_LIBRARY = {
    A1: [
        { id: 'audio-a1-intro', file: '/assets/audio/a1/a1-intro.mp3', level: 'A1', accent: 'neutral', speakers: 1, topic: 'daily routines', duration: 32 },
        { id: 'audio-a1-family', file: '/assets/audio/a1/a1-family.mp3', level: 'A1', accent: 'neutral', speakers: 2, topic: 'family', duration: 40 }
    ],
    A2: [
        { id: 'audio-a2-travel', file: '/assets/audio/a2/a2-travel.mp3', level: 'A2', accent: 'neutral', speakers: 2, topic: 'travel', duration: 52 },
        { id: 'audio-a2-school', file: '/assets/audio/a2/a2-school.mp3', level: 'A2', accent: 'neutral', speakers: 2, topic: 'school', duration: 48 }
    ],
    B1: [
        { id: 'audio-b1-interview', file: '/assets/audio/b1/b1-interview.mp3', level: 'B1', accent: 'neutral', speakers: 2, topic: 'interview', duration: 75 },
        { id: 'audio-b1-story', file: '/assets/audio/b1/b1-story.mp3', level: 'B1', accent: 'neutral', speakers: 1, topic: 'storytelling', duration: 82 }
    ],
    B2: [
        { id: 'audio-b2-debate', file: '/assets/audio/b2/b2-debate.mp3', level: 'B2', accent: 'neutral', speakers: 2, topic: 'debate', duration: 96 }
    ],
    C1: [
        { id: 'audio-c1-lecture', file: '/assets/audio/c1/c1-lecture.mp3', level: 'C1', accent: 'neutral', speakers: 1, topic: 'academic lecture', duration: 110 }
    ],
    C2: [
        { id: 'audio-c2-discussion', file: '/assets/audio/c2/c2-discussion.mp3', level: 'C2', accent: 'neutral', speakers: 3, topic: 'complex discussion', duration: 125 }
    ]
};

export const IMAGE_LIBRARY = {
    'image-hero': {
        id: 'image-hero',
        file: '/assets/images/hero.jpg',
        type: 'image_choice',
        level: 'A1',
        description: 'Hero illustration used for general visual context tasks.'
    },
    'image-restaurant': {
        id: 'image-restaurant',
        file: '/assets/images/restaurant.jpg',
        type: 'image_description',
        level: 'A1',
        description: 'Restaurant scene for describing people, actions and food.'
    }
};

export function getAudioAssetsForLevel(level) {
    return AUDIO_LIBRARY[String(level).toUpperCase()] || [];
}

export function getImageAssetById(id) {
    return IMAGE_LIBRARY[id] || null;
}

export function getAssetRegistry() {
    return [...ASSET_REGISTRY];
}
