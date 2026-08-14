// modules/practice-engine.js
// Motor independiente para práctica de vocabulario y actividades guiadas.

export const PRACTICE_MODES = {
    MULTIPLE_CHOICE: 'multiple_choice',
    MATCHING: 'matching',
    FILL_BLANK: 'fill_blank',
    ORDERING: 'ordering',
    FLASHCARD: 'flashcard'
};

export const VOCABULARY_TOPICS = {
    A1: ['family', 'food', 'numbers', 'colors', 'home', 'school', 'daily routine'],
    A2: ['travel', 'shopping', 'work', 'health', 'weather', 'hobbies'],
    B1: ['work', 'education', 'technology', 'environment', 'relationships', 'phrasal verbs'],
    B2: ['collocations', 'idioms', 'abstract vocabulary', 'professional vocabulary'],
    C1: ['academic vocabulary', 'nuance', 'register', 'advanced collocations'],
    C2: ['idiomatic language', 'precision', 'register shift', 'complex lexical sets']
};

export const PRACTICE_LIBRARY = {
    A1: [
        { id: 'a1-1', level: 'A1', topic: 'family', type: PRACTICE_MODES.MULTIPLE_CHOICE, prompt: 'Choose the correct word: My mother is my ____.', answer: 'mother', options: ['father', 'mother', 'brother', 'friend'], explanation: 'Mother is the female parent.' },
        { id: 'a1-2', level: 'A1', topic: 'food', type: PRACTICE_MODES.FILL_BLANK, prompt: 'I eat breakfast in the ____.', answer: 'morning', explanation: 'Morning is the time we usually eat breakfast.' },
        { id: 'a1-3', level: 'A1', topic: 'daily routine', type: PRACTICE_MODES.ORDERING, prompt: 'Put the actions in order.', answer: ['wake up', 'brush teeth', 'have breakfast'], words: ['wake up', 'have breakfast', 'brush teeth'], explanation: 'Daily routine flows naturally from waking up to breakfast.' }
    ],
    A2: [
        { id: 'a2-1', level: 'A2', topic: 'travel', type: PRACTICE_MODES.MULTIPLE_CHOICE, prompt: 'Choose the best option: I need to ____ my flight.', answer: 'book', options: ['book', 'drink', 'drive', 'study'], explanation: 'Book is used with flights and reservations.' },
        { id: 'a2-2', level: 'A2', topic: 'shopping', type: PRACTICE_MODES.MATCHING, prompt: 'Match the item to the place.', answer: { bread: 'bakery', milk: 'supermarket' }, pairs: [{ left: 'bread', right: 'bakery' }, { left: 'milk', right: 'supermarket' }], explanation: 'Words match different shopping contexts.' }
    ],
    B1: [
        { id: 'b1-1', level: 'B1', topic: 'technology', type: PRACTICE_MODES.MULTIPLE_CHOICE, prompt: 'Choose the correct collocation: to ____ a software update.', answer: 'install', options: ['install', 'make', 'borrow', 'raise'], explanation: 'Install is the standard collocation for software updates.' },
        { id: 'b1-2', level: 'B1', topic: 'phrasal verbs', type: PRACTICE_MODES.FILL_BLANK, prompt: 'Please ____ your homework before the meeting.', answer: 'look over', explanation: 'Look over means review carefully.' }
    ],
    B2: [
        { id: 'b2-1', level: 'B2', topic: 'idioms', type: PRACTICE_MODES.MULTIPLE_CHOICE, prompt: 'Choose the meaning of “on the same page”.', answer: 'agreeing about the situation', options: ['very tired', 'having the same information', 'arguing intensely', 'waiting for a meeting'], explanation: 'It means being aligned and sharing the same understanding.' }
    ],
    C1: [
        { id: 'c1-1', level: 'C1', topic: 'academic vocabulary', type: PRACTICE_MODES.MULTIPLE_CHOICE, prompt: 'Choose the best synonym for “to assess”.', answer: 'evaluate', options: ['decrease', 'ignore', 'evaluate', 'delay'], explanation: 'Assess and evaluate are close in meaning in academic contexts.' }
    ],
    C2: [
        { id: 'c2-1', level: 'C2', topic: 'precision', type: PRACTICE_MODES.FILL_BLANK, prompt: 'The report was so detailed that it left no room for ____.', answer: 'ambiguity', explanation: 'Ambiguity is the opposite of precision and clarity.' }
    ]
};

export function getPracticeSet(level, topic = null) {
    const key = String(level || '').toUpperCase();
    const items = PRACTICE_LIBRARY[key] || [];
    if (!topic) return items;
    return items.filter(item => item.topic === topic);
}

export function getPracticeTopics(level) {
    return VOCABULARY_TOPICS[String(level || '').toUpperCase()] || [];
}

export function getPracticeModes() {
    return Object.values(PRACTICE_MODES);
}
