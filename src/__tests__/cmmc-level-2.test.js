// src/__tests__/cmmc-level-2.test.js
// Guards the CMMC Level 2 data against the rule text it encodes
// (32 CFR 170.14, 170.21, 170.24). If one of these fails, the hub page is
// publishing a wrong number.

import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import {
  families, requirements, points, poam, PARTIAL, POAM_EXCLUDED, PREREQUISITE,
  MAX_SCORE, MIN_SCORE, CONDITIONAL_MIN_SCORE,
} from '../data/cmmc-level-2';

const src = readFileSync(join(process.cwd(), 'src', 'data', 'cmmc-level-2.ts'), 'utf8');
const ids = new Set(requirements.map((r) => r.id));

describe('CMMC Level 2 requirement set', () => {
  it('has 110 requirements in 14 families (NIST SP 800-171 Rev 2)', () => {
    expect(requirements).toHaveLength(110);
    expect(families).toHaveLength(14);
    expect(ids.size).toBe(110);
    for (const f of families) expect(requirements.some((r) => r.family === f.code)).toBe(true);
  });

  it('every ID named in a scoring or POA&M list exists', () => {
    const named = [...src.matchAll(/"([A-Z]{2}\.L2-3\.\d+\.\d+)"/g)].map((m) => m[1]);
    for (const id of named) expect(ids, id).toContain(id);
  });

  it('point counts match 32 CFR 170.24: 42 five-point, 14 three-point, 2 partial-credit, 51 one-point + SSP', () => {
    const five = requirements.filter((r) => points(r.id) === 5 && !PARTIAL.has(r.id));
    const three = requirements.filter((r) => points(r.id) === 3);
    expect(five).toHaveLength(42);
    expect(three).toHaveLength(14);
    expect(PARTIAL.size).toBe(2);
    expect(requirements.filter((r) => points(r.id) === 1)).toHaveLength(51);
    expect(points(PREREQUISITE)).toBe(0);
  });

  it('scores range from -203 to 110, conditional at 88', () => {
    expect(MAX_SCORE).toBe(110);
    expect(MIN_SCORE).toBe(-203);
    expect(CONDITIONAL_MIN_SCORE).toBe(88);
  });

  it('POA&M: 6 excluded, 46 eligible, plus SC.L2-3.13.11 when encryption is not FIPS-validated', () => {
    expect(POAM_EXCLUDED.size).toBe(6);
    for (const id of POAM_EXCLUDED) if (id !== PREREQUISITE) expect(points(id)).toBe(1);
    expect(requirements.filter((r) => poam(r.id) === 'yes')).toHaveLength(46);
    expect(poam('SC.L2-3.13.11')).toBe('partial');
    expect(poam('IA.L2-3.5.3')).toBe('no');
  });
});

describe('hub worked examples (src/pages/cmmc/level-2-requirements/)', () => {
  it('105: five 1-point POA&M-eligible gaps', () => {
    const gaps = ['AC.L2-3.1.8', 'AC.L2-3.1.10', 'AU.L2-3.3.4', 'IA.L2-3.5.6', 'MP.L2-3.8.4'];
    expect(MAX_SCORE - gaps.reduce((s, id) => s + points(id), 0)).toBe(105);
    for (const id of gaps) expect(poam(id)).toBe('yes');
  });

  it('107: partial MFA costs 3 and cannot be deferred', () => {
    expect(MAX_SCORE - 3).toBe(107);
    expect(PARTIAL.has('IA.L2-3.5.3')).toBe(true);
    expect(poam('IA.L2-3.5.3')).toBe('no');
  });

  it('109: missing visitor log is 1 point but excluded', () => {
    expect(MAX_SCORE - points('PE.L2-3.10.4')).toBe(109);
    expect(poam('PE.L2-3.10.4')).toBe('no');
  });
});
