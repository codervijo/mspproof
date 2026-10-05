// src/__tests__/homepage-claims.test.js
// The scanner doesn't exist yet (PRD, answered 2026-10-04). The homepage must
// present the dashboard as an illustrative preview and the product as in
// development — never as a working, live product.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const page = readFileSync(join(process.cwd(), 'src', 'components', 'LandingPage.tsx'), 'utf8');
const head = readFileSync(join(process.cwd(), 'src', 'pages', 'index.astro'), 'utf8');

describe('homepage product claims', () => {
  it('drops live-product signals', () => {
    for (const claim of ['LIVE SCAN', 'last sync', 'in hours', 'from day one', 'sample report on call', 'View sample report']) {
      expect(page).not.toContain(claim);
      expect(head).not.toContain(claim);
    }
  });

  it('labels the mock data as an illustrative preview', () => {
    expect(page).toContain('PREVIEW · ILLUSTRATIVE DATA');
    expect(page).toContain('Illustrative data · fictional tenants');
    expect(page).toMatch(/fictional examples, not customer data/);
  });

  it('states the product is in development', () => {
    expect(page).toContain('In development · MSP pilot open');
    expect(page).toMatch(/MSP Proof is being built to scan/);
  });
});
