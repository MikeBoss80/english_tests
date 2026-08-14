import assert from 'node:assert/strict';
import { getReleaseSteps, getLaunchChecklist } from '../modules/release-plan.js';

assert.ok(getReleaseSteps().length >= 4);
assert.ok(getLaunchChecklist().length >= 4);
console.log('release-plan tests passed');
