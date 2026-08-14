import assert from 'node:assert/strict';
import { getUxChecklist, getAccessibilityAudit, getQAMatrix } from '../modules/ux-quality.js';

assert.ok(getUxChecklist().ui.length > 0);
assert.ok(getAccessibilityAudit().length > 0);
assert.ok(getQAMatrix().length > 0);
console.log('ux-quality tests passed');
