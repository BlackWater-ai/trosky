import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FLUID_GROUP_DAY_PASS,
  FLUID_INDIVIDUAL_DAY_PASS,
} from '../src/lib/constants.js';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

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

test('homepage reflects the approved VIP membership prices', () => {
  const home = readFileSync(resolve('src/pages/Home.jsx'), 'utf8');

  assert.match(home, /VIP Individual', price: '\$299\.99 \/ month'/);
  assert.match(home, /VIP Family', price: '\$499\.99 \/ month'/);
});

test('production app includes Vercel Analytics', () => {
  const app = readFileSync(resolve('src/App.jsx'), 'utf8');
  const packageJson = readFileSync(resolve('package.json'), 'utf8');

  assert.match(app, /import \{ Analytics \} from '@vercel\/analytics\/react';/);
  assert.match(app, /<Analytics \/>/);
  assert.match(packageJson, /"@vercel\/analytics"/);
});
