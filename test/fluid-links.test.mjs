import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FLUID_GROUP_DAY_PASS,
  FLUID_INDIVIDUAL_DAY_PASS,
} from '../src/lib/constants.js';

test('Day Pass CTAs use the approved individual and group Fluid plans', () => {
  assert.equal(
    FLUID_INDIVIDUAL_DAY_PASS,
    'https://trosky.fluidpb.com/become-a-member?planId=0aa7e7db-5f9a-41f7-8bce-1f60e34e9a03',
  );
  assert.equal(
    FLUID_GROUP_DAY_PASS,
    'https://trosky.fluidpb.com/become-a-member?planId=cfba0fad-d2b6-48c2-88df-691fa06ac675',
  );
});
