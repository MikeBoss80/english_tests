// modules/question-templates.js
// Plantillas de preguntas variadas para sprint de contenidos: dinámicas, con imagen, matching, ordering, open-answer.

export const QUESTION_TEMPLATES = {
    multiple_choice: {
        id: 'template-multiple-choice',
        type: 'multiple_choice',
        prompt: 'Choose the correct answer.',
        example: {
            question: 'I ___ breakfast at 8 a.m.',
            options: ['eat', 'eats', 'eating', 'ate'],
            answer: 'eat',
            explanation: 'Use the base form with I in the present simple.'
        }
    },
    true_false: {
        id: 'template-true-false',
        type: 'true_false',
        prompt: 'Decide if the statement is true or false.',
        example: {
            question: 'School starts at night in most countries.',
            options: ['True', 'False'],
            answer: 'False',
            explanation: 'School usually starts during the day.'
        }
    },
    fill_blank: {
        id: 'template-fill-blank',
        type: 'fill_blank',
        prompt: 'Complete the sentence with one word.',
        example: {
            question: 'My brother ___ very tired after work.',
            answer: 'is',
            explanation: 'Use the verb to be with singular third person.'
        }
    },
    matching: {
        id: 'template-matching',
        type: 'matching',
        prompt: 'Match each word with its meaning.',
        example: {
            question: 'Match the vocabulary.',
            pairs: [
                { left: 'weather', right: 'the state of the atmosphere' },
                { left: 'sick', right: 'not well' }
            ],
            answer: { weather: 'the state of the atmosphere', sick: 'not well' },
            explanation: 'Vocabulary review with meaning-based pairing.'
        }
    },
    ordering: {
        id: 'template-ordering',
        type: 'ordering',
        prompt: 'Put the words in the correct order to make a sentence.',
        example: {
            question: 'Arrange the sentence.',
            words: ['usually', 'she', 'coffee', 'drinks', 'morning'],
            answer: ['she', 'usually', 'drinks', 'coffee', 'in', 'the', 'morning'],
            explanation: 'Word order in English follows a clear pattern.'
        }
    },
    image_choice: {
        id: 'template-image-choice',
        type: 'image_choice',
        prompt: 'Look at the picture and choose the best answer.',
        example: {
            question: 'What is the person doing?',
            image: 'local-image:person-reading-book',
            options: ['Reading a book', 'Driving a car', 'Cooking dinner', 'Sleeping'],
            answer: 'Reading a book',
            explanation: 'The image shows an activity in context.'
        }
    },
    image_description: {
        id: 'template-image-description',
        type: 'image_description',
        prompt: 'Describe what you see in the image.',
        example: {
            question: 'Describe the scene in 2-3 sentences.',
            image: 'local-image:family-at-table',
            answer: 'A family is sitting at a table and eating dinner together.',
            explanation: 'The image provides clear situational context for a simple descriptive answer.'
        }
    },
    image_context: {
        id: 'template-image-context',
        type: 'image_context',
        prompt: 'Use the image to choose the best context.',
        example: {
            question: 'What situation is shown?',
            image: 'local-image:restaurant-scene',
            options: ['Buying food in a market', 'Having lunch in a restaurant', 'Waiting for a bus', 'Studying at school'],
            answer: 'Having lunch in a restaurant',
            explanation: 'The visual context makes the situation clear.'
        }
    },
    open_answer: {
        id: 'template-open-answer',
        type: 'open_answer',
        prompt: 'Write a short answer in your own words.',
        example: {
            question: 'What do you usually do after school?',
            answer: 'I usually do my homework and then relax with my family.',
            explanation: 'Open answers allow personalization and realistic use of language.'
        }
    }
};

export function getTemplatesForType(type) {
    return QUESTION_TEMPLATES[type] || null;
}

export function getAllTemplates() {
    return Object.values(QUESTION_TEMPLATES);
}
