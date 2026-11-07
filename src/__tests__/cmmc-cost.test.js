// src/__tests__/cmmc-cost.test.js
// Guards the DoD cost figures on /cmmc/certification-cost/ against the
// arithmetic in the 32 CFR 170 regulatory impact analysis (89 FR 83092).

import { describe, it, expect } from 'vitest';
import { estimates, estimate, lineItemSum, ESP_RATE, smallEntityEspHours, SMALL_C3PAO_ESP_COST } from '../data/cmmc-cost';

describe('DoD CMMC cost estimates', () => {
  it('line items add up to DoD totals within $1 rounding', () => {
    for (const e of estimates) expect(Math.abs(lineItemSum(e) - e.total), e.key).toBeLessThanOrEqual(1);
  });

  it('three-year totals = assessment year + two annual affirmations (within $1)', () => {
    for (const e of estimates.filter((x) => x.threeYear !== null)) {
      expect(Math.abs(e.total + 2 * e.annualAffirmation - e.threeYear), e.key).toBeLessThanOrEqual(1);
    }
  });

  it('C3PAO fees = team hours x the ESP rate', () => {
    for (const e of estimates.filter((x) => x.c3pao)) {
      expect(Math.abs(e.c3pao.hours * ESP_RATE - e.c3pao.cost), e.key).toBeLessThan(1);
    }
  });

  it('page arithmetic: small-entity C3PAO route costs $67,474 more over three years than self-assessment', () => {
    expect(estimate('l2-c3pao-small').threeYear - estimate('l2-self-small').threeYear).toBe(67474);
  });

  it('page arithmetic: C3PAO fee is under a third of the small-entity assessment year', () => {
    const e = estimate('l2-c3pao-small');
    expect(e.total - e.c3pao.cost).toBe(70518);
    expect(Math.round((e.c3pao.cost / e.total) * 100)).toBe(31);
  });

  it('page arithmetic: small entity pays its ESP more than the C3PAO', () => {
    expect(smallEntityEspHours['l2-c3pao-small']).toBe(176);
    expect(SMALL_C3PAO_ESP_COST).toBe(45809);
    expect(Math.abs(176 * ESP_RATE - SMALL_C3PAO_ESP_COST)).toBeLessThan(2);
    expect(SMALL_C3PAO_ESP_COST).toBeGreaterThan(estimate('l2-c3pao-small').c3pao.cost);
  });
});
