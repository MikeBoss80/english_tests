import assert from 'node:assert/strict';
import { getPracticeSet, getPracticeTopics, getPracticeModes } from '../modules/practice-engine.js';

assert.ok(getPracticeSet('A1').length > 0);
assert.ok(getPracticeTopics('B1').includes('technology'));
assert.ok(getPracticeModes().includes('multiple_choice'));
console.log('practice-engine tests passed');
