// modules/diagnostic-engine.js
// Genera el diagnóstico por temas: fortalezas, debilidades y recomendaciones.

import { TOPIC_LABELS } from '../data/question-bank.js';

const RECOMMENDATIONS = {
    verb_to_be: 'Practice the conjugation of "to be" (am, is, are) with different subjects.',
    present_simple: 'Review the third person singular (-s/-es) and auxiliaries do / does.',
    present_continuous: 'Practice the -ing form and when to use it (actions happening now).',
    past_simple: 'Study irregular verbs and the rules for regular verbs (-ed).',
    future: 'Review "will" and "be going to" and the difference between plans and predictions.',
    articles: 'Review when to use a / an / the and when to omit the article.',
    plurals: 'Practice the rules for making plurals (-s, -es, -ies, irregular).',
    possessives: 'Review possessive adjectives (my, your, his, her, its, our, their).',
    prepositions: 'Study common prepositions of place and time (in, on, at, under).',
    question_words: 'Practice question words: what, where, when, who, why, how.',
    there_is_are: 'Review there is / there are with singular and plural nouns.',
    comparatives: 'Study comparatives (-er / more) and superlatives (-est / most).',
    personal_info: 'Practice describing name, age, occupation and basic personal details.',
    clothing: 'Review vocabulary for clothes and everyday items you wear.',
    social: 'Practice common greetings, introductions and polite expressions.',
    shopping: 'Review vocabulary for buying: prices, sizes, shops and requests.',
    restaurant: 'Practice ordering food and using polite expressions in a restaurant.',
    emergency: 'Learn vocabulary for emergencies: police, doctor, help, phone.',
    present_perfect: 'Review have / has + past participle with ever, never, already, yet, for, since.',
    past_continuous: 'Practice was / were + -ing for actions in progress in the past.',
    future_forms: 'Review the difference between will and be going to.',
    comparatives_superlatives: 'Study comparatives (-er / more) and superlatives (-est / most).',
    modals: 'Practice obligation and advice verbs: must, should, have to, can.',
    conditionals: 'Review the first and second conditional structures.',
    countable_uncountable: 'Practice much / many and a lot of with countable and uncountable nouns.',
    relative_clauses: 'Review who, which, where, that in relative clauses.',
    passive: 'Practice the passive voice: be + past participle in present, past and future.',
    gerunds_infinitives: 'Review when to use the gerund (-ing) and the infinitive (to + verb).',
    past_perfect: 'Review the past perfect (had + past participle) for actions before a past moment.',
    reported_speech: 'Practice reporting what people say: tense changes and pronouns.',
    third_conditional: 'Study the third conditional: if + past perfect, would have + past participle.',
    future_continuous: 'Practice the future continuous (will be + -ing) for actions in progress.',
    future_perfect: 'Study the future perfect (will have + past participle) for actions completed before a future moment.',
    present_perfect_continuous: 'Review has/have been + -ing for actions that started in the past and continue.',
    modals_perfect: 'Practice modal perfects: should have, might have, must have + past participle.',
    wish_structures: 'Review "I wish" + past simple for unreal or wished situations.',
    idioms: 'Learn common English idioms and their meanings.',
    personality: 'Expand your vocabulary to describe personality traits.',
    problem_solving: 'Practice vocabulary for describing and solving problems.',
    office_language: 'Learn professional expressions for emails, calls and everyday office tasks.',
    reading_b1: 'Practice reading longer texts and understanding opinions and conclusions.',
    everyday: 'Practice everyday expressions for shopping, travel, meals and directions.',
    professional: 'Learn polite professional language: emails, phone calls and meetings.',
    family: 'Review vocabulary for family members (uncle, cousin, grandmother...).',
    numbers: 'Practice numbers, dates and basic counting.',
    colors: 'Review and practice common colors in context.',
    daily_routines: 'Practice daily routine verbs and frequency adverbs.',
    food: 'Review food vocabulary and the verbs used with food and drinks.',
    clothes: 'Practice vocabulary for clothes and shopping.',
    home: 'Review vocabulary for rooms and objects in the house.',
    weather: 'Practice wind, rain, sun, temperature and weather descriptions.',
    time: 'Review how to tell the time and time expressions.',
    jobs: 'Practice vocabulary for jobs and workplaces.',
    travel: 'Learn vocabulary for travel: passport, luggage, ticket, reservation.',
    work: 'Practice vocabulary for work and the office environment.',
    health: 'Review vocabulary for health and going to the doctor.',
    education: 'Practice vocabulary for school, university and study spaces.',
    technology: 'Practice vocabulary for devices and digital tools.',
    feelings: 'Review adjectives to describe emotions.',
    environment: 'Review vocabulary about recycling and protecting the planet.',
    money: 'Practice vocabulary for money, banks, wages and savings.',
    phrasal_verbs: 'Study common phrasal verbs and their meanings.',
    reading_basic: 'Practice reading short texts and looking for specific details.',
    reading_intermediate: 'Read longer texts and practice identifying the main ideas.',
    context: 'Practice choosing vocabulary based on the context or situation.',
    everyday_english: 'Practice common expressions and polite language for daily life.',
    error_identification: 'Practice finding grammar mistakes in sentences.',
    sentence_order: 'Practice building correct sentences from word groups.'
};

export class DiagnosticEngine {
    constructor(scores) {
        this.scores = scores;
    }

    labelFor(topic) {
        return TOPIC_LABELS[topic] || topic.replace(/_/g, ' ');
    }

    getTopicStatus(percentage) {
        if (percentage >= 80) return { key: 'strong', label: 'Strong', emoji: '🟢' };
        if (percentage >= 60) return { key: 'developing', label: 'Developing', emoji: '🟡' };
        if (percentage >= 40) return { key: 'needs_work', label: 'Needs work', emoji: '🟠' };
        return { key: 'weak', label: 'Weak', emoji: '🔴' };
    }

    generateDiagnostic() {
        const byTopic = this.scores.byTopic || {};
        const topics = Object.keys(byTopic).sort();

        const topicAnalysis = topics.map((topic) => {
            const data = byTopic[topic];
            const status = this.getTopicStatus(data.percentage);
            return {
                topic,
                label: this.labelFor(topic),
                ...data,
                ...status
            };
        });

        const strong = topicAnalysis.filter(t => t.key === 'strong');
        const developing = topicAnalysis.filter(t => t.key === 'developing').sort((a, b) => a.percentage - b.percentage);
        const needsWork = topicAnalysis.filter(t => t.key === 'needs_work' || t.key === 'weak')
            .sort((a, b) => a.percentage - b.percentage);

        const recommendations = needsWork
            .map(t => ({
                topic: t.topic,
                label: t.label,
                percentage: t.percentage,
                text: RECOMMENDATIONS[t.topic] || `Practice ${t.label.toLowerCase()} to improve this area.`
            }));

        return {
            topicAnalysis,
            strong,
            developing,
            needsWork,
            recommendations
        };
    }
}