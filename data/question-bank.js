// data/question-bank.js
// Combina los bancos A1 y A2 y "aplana" las lecturas: cada sub-pregunta de
// un pasaje de lectura se convierte en una pregunta individual que comparte el pasaje.

import { A1_RAW } from './a1-questions.js';
import { A2_RAW } from './a2-questions.js';
import { B1_RAW } from './b1-questions.js';

function flattenReading(questions) {
    const flat = [];
    for (const q of questions) {
        if (q.type === 'reading') {
            q.questions.forEach((sub, i) => {
                flat.push({
                    ...sub,
                    id: `${q.id}-Q${i + 1}`,
                    section: q.section,
                    topic: q.topic,
                    difficulty: q.difficulty,
                    type: 'reading',
                    passage: q.passage,
                    passageTitle: q.passageTitle,
                    explanation: sub.explanation || ''
                });
            });
        } else {
            flat.push(q);
        }
    }
    return flat;
}

export const QUESTION_BANK = {
    A1: flattenReading(A1_RAW.questions),
    A2: flattenReading(A2_RAW.questions),
    B1: flattenReading(B1_RAW.questions)
};

export const SECTION_LABELS = {
    grammar: 'Grammar',
    vocabulary: 'Vocabulary',
    reading: 'Reading',
    language_use: 'Language Use / Context'
};

export const TOPIC_LABELS = {
    verb_to_be: 'Verb to be',
    present_simple: 'Present Simple',
    present_continuous: 'Present Continuous',
    past_simple: 'Past Simple',
    future: 'Future Forms',
    articles: 'Articles',
    plurals: 'Plurals',
    possessives: 'Possessives',
    prepositions: 'Prepositions',
    question_words: 'Question Words',
    there_is_are: 'There is / There are',
    comparatives: 'Comparatives & Superlatives',
    present_perfect: 'Present Perfect',
    past_continuous: 'Past Continuous',
    future_forms: 'Future Forms',
    comparatives_superlatives: 'Comparatives & Superlatives',
    modals: 'Modals',
    conditionals: 'Conditionals',
    countable_uncountable: 'Countable & Uncountable',
    relative_clauses: 'Relative Clauses',
    passive: 'Passive Voice',
    gerunds_infinitives: 'Gerunds & Infinitives',
    past_perfect: 'Past Perfect',
    reported_speech: 'Reported Speech',
    third_conditional: 'Third Conditional',
    future_continuous: 'Future Continuous',
    future_perfect: 'Future Perfect',
    present_perfect_continuous: 'Present Perfect Continuous',
    modals_perfect: 'Modal Perfects',
    wish_structures: 'Wish & Unreal Situations',
    idioms: 'Idioms',
    personality: 'Personality',
    problem_solving: 'Problems & Solutions',
    office_language: 'Office Language',
    reading_b1: 'B1 Reading',
    personal_info: 'Personal Information',
    family: 'Family',
    numbers: 'Numbers',
    colors: 'Colors',
    daily_routines: 'Daily Routines',
    food: 'Food',
    clothes: 'Clothes',
    clothing: 'Clothing',
    home: 'Home',
    weather: 'Weather',
    time: 'Time',
    jobs: 'Jobs',
    travel: 'Travel',
    work: 'Work',
    health: 'Health',
    education: 'Education',
    technology: 'Technology',
    feelings: 'Feelings',
    environment: 'Environment',
    money: 'Money',
    phrasal_verbs: 'Phrasal Verbs',
    reading_basic: 'Basic Reading',
    reading_intermediate: 'Intermediate Reading',
    context: 'Real-Life Context',
    everyday_english: 'Everyday English',
    social: 'Social Language',
    shopping: 'Shopping',
    restaurant: 'Restaurant',
    emergency: 'Emergency',
    everyday: 'Everyday Situations',
    professional: 'Professional Contexts',
    error_identification: 'Error Identification',
    sentence_order: 'Sentence Order'
};