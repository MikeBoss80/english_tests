import assert from 'node:assert/strict';
import { validateQuestion, normalizeQuestion, QUESTION_SCHEMA } from '../modules/question-schema.js';
import { getTemplatesForType } from '../modules/question-templates.js';

const validQuestion = {
  id: 'demo-1',
  section: 'grammar',
  topic: 'present_simple',
  difficulty: 1,
  type: 'multiple_choice',
  question: 'She ___ coffee every morning.',
  options: ['drink', 'drinks', 'drinking', 'drank'],
  answer: 'drinks'
};

assert.equal(validateQuestion(validQuestion).valid, true);
assert.ok(QUESTION_SCHEMA.supportedTypes.includes('image_choice'));
assert.ok(getTemplatesForType('image_choice'));
assert.equal(normalizeQuestion({ section: 'vocabulary' }).section, 'vocabulary');
console.log('question-schema tests passed');
