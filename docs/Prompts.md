# Prompt History — mspproof.com

<!-- Append new prompts at the bottom, newest last. Format:

## YYYY-MM-DD [optional title]
> <prompt text or short summary>

The dated H2 (`## YYYY-MM-DD`) is what `portfolio project check` parses
to surface "last AI prompt" per project. Keep entries append-only.
-->

## 2026-06-08 — scaffolded via portfolio new bootstrap

> Created project skeleton. Stack chosen, scaffolding written, git initialized.

## 2026-09-22 — vendor roundup: /guides/best-cmmc-compliance-software/

> Write an MSP-angled vendor roundup for "cmmc compliance software" (FutureFeed, IntelliGRC, Paramify, Cyturus, SMPL-C, PreVeil, Hyperproof). Research first, flag the unverifiable, place MSP Proof honestly (pre-launch, pilot, M365/Entra only), pilot CTA for MSPs with 10+ CMMC clients. Research found CMMC Phase 2 suspended 2026-07-13; page written against that. Ships noindex + out of sitemap until two MSP Proof [VERIFY] markers are resolved.

## 2026-09-26 — clear [VERIFY] on /guides/best-cmmc-compliance-software/

> Remove the [VERIFY] markers without making up facts. Pilot feature status and GCC High support aren't recorded anywhere, so the MSP Proof section was reworded to describe the pilot's scope rather than working features, with no GCC/GCC High claim. Page now indexable and in the sitemap; test added for the cleared state.

## 2026-10-03 — v1–v3 roadmap into docs/prd.md

> Operator strategy brief (MSP wedge: outbound gets MSPs, content gets contractors; trust gates → Wave 1 → contractor cluster → control-evidence pages) placed into the PRD as v1 (trust + conversion), v2 (contractor cluster), v3 (product-evidence moat), each with a .A planning phase. Flagged: brief's Phase 2 date conflicts with the guide's sourced 2026-07-13 suspension; 431/80,000 stat unsourced; gated assets need a capture backend; packet/control pages need real scanner output.

## 2026-10-28 — v1.A closed; priority set to SEO impressions surface

> Operator: faceless for now, keep credibility layers addable later; goal is expanding SEO impressions surface, the rest is down-funnel; include a Privacy page in v2.B. PRD updated: v1.A ✅ (faceless answered), v1.B marked partial, v1.B remainder / v1.C / v1.D packet deferred; v2 runs next — v2.A adds site-identity config shape, v2.B = hub + cost + self-assessment/SPRS + Phase 2 status + Privacy, v2.C = scoping + L1 vs L2 + ungated SPRS calculator + 800-171 checklist anchor + roundup linking. Numbering kept so shipped v1.B commits still match. Growth: roundup entry reviewed (121 imp, pos 68, 0 clicks) → shipped.

## 2026-10-28 — v2.A decisions locked

> Operator chose `/cmmc/` for the cluster and the Web3Forms form (no email alias) as the faceless Privacy contact. Recorded in docs/prd.md under the phases table: cluster URLs, hub/spoke linking rules, shared two-audience CTA, `src/lib/site.ts` identity config with empty credibility-layer fields, shared guide layout (roundup migrates in v2.B unchanged), homepage footer Privacy link → `/privacy/`.

## 2026-10-28 — v2.B started: shared layout, Privacy, Level 2 hub

> Built `src/lib/site.ts` (faceless identity, empty credibility fields), `GuideLayout.astro` + `guide.css`, `ClusterCta.astro` (contractor forward + MSP pilot). Migrated the roundup onto the layout; rendered article, meta and JSON-LD diffed identical. `/privacy/` with Web3Forms request form; use/no-sale and retention commitments carry [VERIFY] for operator sign-off (noindex + sitemap filter until cleared). Hub `/cmmc/level-2-requirements/`: all 110 NIST SP 800-171r2 requirements verbatim, with point values and POA&M eligibility encoded from 32 CFR 170.21/170.24 in `src/data/cmmc-level-2.ts`; tests check the rule arithmetic (42/14/2/51 split, -203 floor, 88 threshold, 46 eligible). SSP modeled as prerequisite (not a deduction) — that's what yields the published -203 floor. `[VERIFY]` gating test generalized to every page.

## 2026-11-07 — v2.B: privacy commitments confirmed, markers cleared

> Operator confirmed both Privacy statements (use/no-sale; retention/deletion). Removed the [VERIFY] markers, set verifyPending = false, dropped /privacy/ from the sitemap filter. Committed v2.B work so far (layout, identity config, CTA, Privacy, Level 2 hub). GSC 2026-10-10..11-07: roundup 180 imp, pos 68.6, 0 clicks; weekly impressions 39 → 63 → 53 → 34.
