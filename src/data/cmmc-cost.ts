// src/data/cmmc-cost.ts
//
// DoD's per-entity cost estimates for CMMC assessments and affirmations, from
// the regulatory impact analysis of the 32 CFR Part 170 final rule
// (89 FR 83092, Oct 15, 2024, pp. 83181-83186), read 2026-11-07.
// 2023 base-year dollars. Assumes the security requirements are already
// implemented: no remediation, tooling or licensing is included.
//
// Line items are copied as published; totals are DoD's stated totals, which
// differ from the line-item sums by up to $1 of rounding. Tested in
// src/__tests__/cmmc-cost.test.js.

export type Size = "small" | "other";

export interface Estimate {
  key: string;
  label: string;
  size: Size;
  /** How often the assessment recurs. */
  cycle: "annual" | "triennial";
  phases: { name: string; cost: number }[];
  /** Fee paid to the C3PAO, separate from the contractor's own labor. */
  c3pao: { team: number; hours: number; cost: number } | null;
  initialAffirmation: number;
  annualAffirmation: number;
  /** DoD's stated assessment-year total. */
  total: number;
  /** DoD's stated three-year total (triennial assessments only). */
  threeYear: number | null;
}

/** Blended hourly rate DoD used for both ESP and C3PAO labor. */
export const ESP_RATE = 260.28;

export const estimates: Estimate[] = [
  {
    key: "l1-small",
    label: "Level 1 self-assessment",
    size: "small",
    cycle: "annual",
    phases: [
      { name: "Plan and prepare", cost: 1803 },
      { name: "Conduct the self-assessment", cost: 2705 },
      { name: "Report results in SPRS", cost: 909 },
    ],
    c3pao: null,
    initialAffirmation: 560,
    annualAffirmation: 560,
    total: 5977,
    threeYear: null,
  },
  {
    key: "l2-self-small",
    label: "Level 2 self-assessment",
    size: "small",
    cycle: "triennial",
    phases: [
      { name: "Plan and prepare", cost: 14426 },
      { name: "Conduct the self-assessment", cost: 15542 },
      { name: "Report results in SPRS", cost: 2851 },
    ],
    c3pao: null,
    initialAffirmation: 1459,
    annualAffirmation: 1459,
    total: 34277,
    threeYear: 37196,
  },
  {
    key: "l2-c3pao-small",
    label: "Level 2 certification (C3PAO)",
    size: "small",
    cycle: "triennial",
    phases: [
      { name: "Plan and prepare", cost: 20699 },
      { name: "Support the assessment", cost: 45509 },
      { name: "Report results", cost: 2851 },
    ],
    c3pao: { team: 3, hours: 120, cost: 31234 },
    initialAffirmation: 1459,
    annualAffirmation: 1459,
    total: 101752,
    threeYear: 104670,
  },
  {
    key: "l2-self-other",
    label: "Level 2 self-assessment",
    size: "other",
    cycle: "triennial",
    phases: [
      { name: "Plan and prepare", cost: 18015 },
      { name: "Conduct the self-assessment", cost: 19964 },
      { name: "Report results in SPRS", cost: 2712 },
    ],
    c3pao: null,
    initialAffirmation: 2712,
    annualAffirmation: 2712,
    total: 43403,
    threeYear: 48827,
  },
  {
    key: "l2-c3pao-other",
    label: "Level 2 certification (C3PAO)",
    size: "other",
    cycle: "triennial",
    phases: [
      { name: "Plan and prepare", cost: 26264 },
      { name: "Support the assessment", cost: 28600 },
      { name: "Report results", cost: 2712 },
    ],
    c3pao: { team: 5, hours: 200, cost: 52056 },
    initialAffirmation: 2712,
    annualAffirmation: 2712,
    total: 112345,
    threeYear: 117768,
  },
];

export const estimate = (key: string): Estimate => {
  const e = estimates.find((x) => x.key === key);
  if (!e) throw new Error(`unknown estimate ${key}`);
  return e;
};

/** Sum of published line items (may differ from `total` by rounding). */
export const lineItemSum = (e: Estimate) =>
  e.phases.reduce((s, p) => s + p.cost, 0) + (e.c3pao?.cost ?? 0) + e.initialAffirmation;

/**
 * External service provider (MSP / consultant) hours DoD assumed a small
 * entity buys, by estimate, summed across the three phases. Each line is
 * published as ESP hours x ESP_RATE.
 */
export const smallEntityEspHours: Record<string, number> = {
  "l1-small": 4 + 6 + 2,
  "l2-self-small": 32 + 48 + 8,
  "l2-c3pao-small": 40 + 128 + 8,
};

/** Published ESP line items for the small-entity Level 2 C3PAO estimate. */
export const SMALL_C3PAO_ESP_COST = 10411 + 33316 + 2082;

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
