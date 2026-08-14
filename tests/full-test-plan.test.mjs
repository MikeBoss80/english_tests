import assert from 'node:assert/strict';
import { getAllLevelTestPlans, getLevelTestPlan } from '../modules/full-test-plan.js';

const plans = getAllLevelTestPlans();
assert.equal(plans.length, 6, 'Debe haber configuración para A1 a C2');
assert.ok(plans.every(plan => ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(plan.level)));
assert.ok(getLevelTestPlan('A1'));
assert.ok(getLevelTestPlan('C2'));
console.log('full-test-plan tests passed');
