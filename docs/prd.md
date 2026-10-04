---
project: mspproof.com
prd_version: 2
project_version: v0.A
status: planned
owner: Vijo
last_updated: 2026-10-03
---

# mspproof.com — PRD

## 1. Problem

MSPs supporting small defense contractors lose billable time manually
collecting Microsoft 365 / Entra evidence (screenshots, exports) for each
client's CMMC / NIST 800-171 readiness. Every tool ranking for "cmmc
compliance software" sells to the contractor directly; nothing is positioned
as the tool an MSP uses to deliver CMMC across a book of client tenants.

## 2. Users

- **Buyer:** MSPs / MSSPs managing 10+ defense contractor clients needing
  CMMC Level 1 or Level 2 readiness; also vCISOs and CMMC consultants. They
  don't arrive by search (MSP-side terms are 30–40/mo) — reached by outbound.
- **Reader:** the contractors themselves. They search heavily, pressure their
  MSP, and forward what they read. Content targets them, with an MSP-side CTA.

## 3. Goals & non-goals

**Goals:**
- Win pilot usage from 5–10 CMMC-focused MSPs and validate which evidence
  outputs survive assessor or consultant review.
- Convert accepted report formats into repeatable white-label evidence packages.
- Build search presence on the contractor-side CMMC cluster (KD 0–4) that
  feeds MSP-side conversion.

**Non-goals:**
- Guaranteed-certification language anywhere. Assessors certify; tools prepare.
- Fabricated product output (screenshots, packets, scan results) presented as real.
- Page targets for zero-search-volume terms (cmmc evidence collection, gcc high
  msp, Entra/Graph terms) — keep those as landing/outbound copy.
- `what is cui` (6.2K, KD 43, $0.35 CPC) — wrong reader, no money.

## 4. Versions

Two-level versioning convention (canonical: `sites/portfolio/AI_AGENTS.md`):

- `vN` = major capability tier; SemVer-MAJOR semantics.
- `vN.X` = phase letter within a tier; internal slicing.

| Version | Theme | Acceptance |
|---|---|---|
| v0 | scaffold | local builds, CF wrangler.jsonc + public/_headers in place, repo initialized |
| v1 | trust + conversion | site passes a compliance buyer's sniff test (legal, security, named contact, honest preview labels); email capture works; Wave 1 pages + gated sample packet live |
| v2 | contractor-side content cluster | Level 2 requirements hub + 5 spoke pages live, all linking up to the hub, each with an MSP-side CTA |
| v3 | product-evidence moat | M365 CMMC pillar, GCC High page, gated SSP/POA&M templates, one control-evidence page per control the scanner actually covers |

## 5. Phases

Cadence rule for all content phases: 2–3 pages/week, never a bulk dump.
Anything citing CMMC rule phases/dates is re-checked at publish time.

| Phase | Theme | Features | Status |
|---|---|---|---|
| **v0.A** | scaffolded | `portfolio new bootstrap` ran; standard files written; git initialized | ✅ |
| **v1.A** | planning lock | decide named entity vs faceless; CertHorizon separate vs shared content spine; confirm Phase 2 framing; confirm scanner/product status | planned |
| **v1.B** | trust gates | Privacy, Terms, Contact pages (footer links are dead `#` today); security / data-handling page (Graph scopes, residency, retention, deletion); label dashboard as product preview; repoint "View sample report" off the mockup | planned — needs entity + contact, real Graph scopes + data policy |
| **v1.C** | capture backend | email gate on CF Workers (form → storage → delivery) for gated assets | planned — needs backend choice |
| **v1.D** | Wave 1 content | CMMC Phase 2 status page (`cmmc phase 2` 200/mo; fold in `cmmc deadline 2026`); SPRS score calculator, email-gated (`sprs score calculator` 100/mo, KD 0; reuse calcengine/washcalc pattern); sample evidence packet page, gated PDF, fictional tenant clearly labeled, by control family | planned — needs v1.C, real packet output |
| **v2.A** | planning | lock cluster slugs, hub/spoke linking, MSP-side CTA pattern | planned |
| **v2.B** | Wave 2 content | hub: CMMC Level 2 requirements, all 110 controls (800/mo, KD 0); spokes: CMMC self-assessment + SPRS posting (300, KD 1); CMMC scoping guide (200, KD 0); CMMC certification cost incl. C3PAO cost (350, KD 4); CMMC Level 1 vs Level 2 (200); NIST 800-171 checklist with Level 2 checklist as anchor section — not a separate page (100, KD 1) | planned |
| **v3.A** | planning | inventory scanner control coverage; control-evidence page template (Graph query → artifact → what an assessor wants) | planned |
| **v3.B** | Wave 3 content | Microsoft 365 CMMC compliance pillar (60/mo); GCC High vs commercial for CMMC; SSP and POA&M templates, gated | planned — templates need v1.C |
| **v3.C** | control-evidence pages | one page per scanner-covered control, starting with: IA.L2-3.5.3 MFA; AU.L2-3.3.1 audit log; AC.L2-3.1.12 Conditional Access; AC.L2-3.1.3 external sharing; AC.L2-3.1.5 privileged roles / PIM; AC.L2-3.1.1 inactive / stale accounts; plus mailbox forwarding, encryption config, risky sign-ins, device compliance. Extend as coverage grows | planned — needs real scanner output |

Already shipped outside this table: `/guides/best-cmmc-compliance-software/`
(Wave 1 #1 of the 2026-10-03 plan) — live and indexed 2026-09-26; operator
wording review still open in `lamill.toml`.

Keyword figures above: Ahrefs, US, pulled 2026-09-22 (from the operator's
2026-10-03 strategy brief).

## 6. Open questions

- *(append-only log; mark answered with date but never delete)*
- 2026-10-03 — **Phase 2 date conflict.** Strategy brief says Phase 2 lands
  ~2026-11-10; the live guide (sourced) says DoD suspended Phase 2 on
  2026-07-13 pending the Reform Task Force review. v1.D page must reflect
  current status at publish time.
- 2026-10-03 — "~431 orgs certified vs ~80,000 needing Level 2" (brief, citing
  Oct 2025 CyberAB town hall) — unsourced in repo; do not publish without a
  citeable source.
- 2026-10-03 — Named entity vs faceless? Gates v1.B. (v1.A)
- 2026-10-03 — Does the scanner produce real Graph output today? Gates the v1.D
  sample packet and all of v3.C. (v1.A)
- 2026-10-03 — CertHorizon: separate property or shared content spine? (v1.A)
- 2026-10-03 — FutureFeed: partner/MSP-oriented → nearest competitor? Check
  before guide wording review closes.
- 2026-10-03 — r/CMMC: does it tolerate vendor presence?
- 2026-10-03 — Distribution is the first job, not in any phase: outbound to the
  Cyber AB RPO directory, MSP communities, r/CMMC. Needs an owner outside the PRD.
