---
project: mspproof.com
prd_version: 2
project_version: v2.B
status: in-progress
owner: Vijo
last_updated: 2026-10-28
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
- **Current priority (2026-10-28): expand the SEO impressions surface.**
  Trust, capture and gated assets are down-funnel and wait until the
  contractor cluster (v2) is live.
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
- `cui marking` (880/mo, KD 13) — too close to the `what is cui` reader; skipped
  2026-11-07.

## 4. Versions

Two-level versioning convention (canonical: `sites/portfolio/AI_AGENTS.md`):

- `vN` = major capability tier; SemVer-MAJOR semantics.
- `vN.X` = phase letter within a tier; internal slicing.

| Version | Theme | Acceptance |
|---|---|---|
| v0 | scaffold | local builds, CF wrangler.jsonc + public/_headers in place, repo initialized |
| v1 | trust + conversion | site passes a compliance buyer's sniff test (legal, security, named contact, honest preview labels); email capture works; gated sample packet live |
| v2 | contractor-side content cluster | Level 2 requirements hub + Level 1, assessment/SPRS and rules/scope spokes live (v2.B–v2.E), all linking up to the hub, each with an MSP-side CTA; roundup linked into the cluster |
| v3 | product-evidence moat | M365 CMMC pillar, GCC High page, gated SSP/POA&M templates, one control-evidence page per control the scanner actually covers |

## 5. Phases

Cadence rule for all content phases: 2–3 pages/week, never a bulk dump.
Anything citing CMMC rule phases/dates is re-checked at publish time.

Execution order (2026-10-28): v2 runs next, ahead of the rest of v1. v1.B
remainder, v1.C and v1.D's sample packet are deferred as down-funnel.
Numbering kept as-is so shipped `v1.B` commits still match their rows.

| Phase | Theme | Features | Status |
|---|---|---|---|
| **v0.A** | scaffolded | `portfolio new bootstrap` ran; standard files written; git initialized | ✅ |
| **v1.A** | planning lock | decide named entity vs faceless; CertHorizon separate vs shared content spine; confirm framing of DoD's CMMC Phase 2 rollout suspension; confirm scanner/product status | ✅ all four answered (see §6) |
| **v1.B** | trust gates | Pilot form delivers via Web3Forms (7e734b0); homepage presents product as in development, dashboard as illustrative preview (fc301c4); Terms, Contact pages (footer links are dead `#` today) — faceless, reading site identity from the config added in v2.B; security / data-handling page (*planned* Graph scopes, residency, retention, deletion); repoint "View sample report" off the mockup | partial — form + homepage relabel shipped; rest deferred (down-funnel), needs planned Graph scopes + data policy |
| **v1.C** | capture backend | email gate on CF Workers (form → storage → delivery) for gated assets | deferred (down-funnel) — needs backend choice |
| **v1.D** | gated sample packet | sample evidence packet page, gated PDF, fictional tenant clearly labeled, by control family. (CMMC rollout-status page and SPRS calculator moved to v2.B / v2.C, 2026-10-28) | deferred — needs v1.C, real packet output |
| **v2.A** | planning | lock cluster slugs, hub/spoke linking, MSP-side CTA pattern; site-identity config shape (faceless now, credibility layers — named entity, About, team, credentials — addable later without rewriting pages) | ✅ locked 2026-10-28 (decisions below the table) |
| **v2.B** | hub + first spokes | hub: CMMC Level 2 requirements, all 110 controls (800/mo, KD 0); spokes: CMMC certification cost incl. C3PAO cost (350, KD 4); CMMC self-assessment + SPRS posting (300, KD 1); CMMC rollout-status page on DoD's suspended Phase 2 (`cmmc phase 2` 200/mo; fold in `cmmc deadline 2026`); Privacy page, faceless, reading the site-identity config (pilot form already collects emails) | in progress — built 2026-10-28: `src/lib/site.ts`, `GuideLayout`, `ClusterCta`, roundup migrated (article/meta/JSON-LD unchanged), Privacy (commitments confirmed 2026-11-07, indexable), hub; certification-cost spoke 2026-11-07 (DoD RIA figures, linked from hub #assessment); self-assessment/SPRS spoke 2026-11-07 (linked from hub #assessment + cost page). CMMC rollout-status spoke `/cmmc/phase-2/` 2026-11-07 (linked from hub #status + cost page; re-check when DoW publishes the task force report). All v2.B pages built |
| **v2.C** | Level 1 pages + roundup back-link | CMMC Level 1 requirements / FAR 52.204-21 (`cmmc level 1 requirements` 590, KD 10; `far 52.204-21` 1600, KD 6; `cmmc level 1` 1600); CMMC Level 1 vs Level 2 (170, KD 0); Level 1 self-assessment + annual affirmation (`cmmc level 1 self assessment` 320, KD 2; `cmmc level 1 checklist` 260); NIST 800-171 / Level 2 checklist as anchor section on the hub, not a page (70, KD 3); link `/guides/best-cmmc-compliance-software/` back to the hub | planned — needs v2.B |
| **v2.D** | assessment + SPRS pages | C3PAO: what it is, how to find one (`c3pao` 1900, KD 0; `cmmc marketplace` 170); SPRS score explained, absorbing the score calculator (`sprs score` 720, KD 0; `sprs` 3600; calculator alone 30 — no standalone page); CMMC Level 2 assessment process (`cmmc level 2 assessment guide` 590, KD 13; `how to get cmmc certified` 210); POA&M explainer (`what is a poam` 720, KD 0; `poam template` 390 — template itself stays v3.B) | planned — needs v2.C |
| **v2.E** | rules + scope pages | DFARS 7012/7019/7020/7021 explained (`dfars 7012` 880, KD 11; `dfars 7021` 210; `dfars 7020` 140; `dfars 7019` 90); CMMC scoping guide (170, KD 3); FCI vs CUI (`what is fci` 880, KD 2; `fci vs cui` 210); NIST 800-171 Rev 2 vs Rev 3 (`nist 800 171 rev 3` 480, KD 13); NIST 800-171 vs 800-53 (210, KD 0); CMMC enclave (210, KD 0) | planned — needs v2.D |
| **v3.A** | planning | inventory scanner control coverage; control-evidence page template (Graph query → artifact → what an assessor wants) | planned |
| **v3.B** | M365 pillar + templates | Microsoft 365 CMMC compliance pillar (60/mo); GCC High vs commercial for CMMC; SSP and POA&M templates, gated | planned — templates need v1.C |
| **v3.C** | control-evidence pages | one page per scanner-covered control, starting with: IA.L2-3.5.3 MFA; AU.L2-3.3.1 audit log; AC.L2-3.1.12 Conditional Access; AC.L2-3.1.3 external sharing; AC.L2-3.1.5 privileged roles / PIM; AC.L2-3.1.1 inactive / stale accounts; plus mailbox forwarding, encryption config, risky sign-ins, device compliance. Extend as coverage grows | planned — needs real scanner output |

**v2.A decisions (locked 2026-10-28):**

- **URLs.** Cluster lives under `/cmmc/`: hub `/cmmc/level-2-requirements/`;
  spokes `/cmmc/certification-cost/`, `/cmmc/self-assessment/`,
  `/cmmc/phase-2/`, `/cmmc/scoping/`, `/cmmc/level-1-vs-level-2/`,
  `/cmmc/sprs-score-calculator/`. Privacy at `/privacy/`. The roundup stays at
  `/guides/best-cmmc-compliance-software/` (indexed — don't move).
- **Linking.** Every spoke links up to the hub in its intro and in a
  Home › CMMC › page breadcrumb (visible + BreadcrumbList JSON-LD). The hub
  links to each spoke from its relevant section, not a link dump. Spokes
  cross-link only where the topic connects. Hub and certification-cost page
  link to the roundup; the roundup links back to the hub.
- **CTA.** One shared end-of-page component, two audiences: contractors →
  forward the page to their IT provider; MSPs → apply to the pilot
  (`/#pilot-form`). Same honest pre-launch wording as the roundup.
- **Site identity.** `src/lib/site.ts` holds name, URL and contact method;
  `legalName`, `about`, `team`, `credentials` exist but stay empty and render
  nothing until set. Organization JSON-LD and the trust pages read from it.
- **Privacy contact.** Web3Forms form on `/privacy/` (same
  `PUBLIC_WEB3FORMS_KEY` as the pilot form), no email alias.
- **Shared layout.** Extract the roundup's head/header/footer/guide styles
  into one guide layout; v2.B migrates the roundup onto it with no content
  change and points the homepage footer's dead Privacy link at `/privacy/`.

Already shipped outside this table: `/guides/best-cmmc-compliance-software/`
(item #1 of the operator's 2026-10-03 strategy brief) — live and indexed 2026-09-26; operator
wording review still open in `lamill.toml`.

Keyword figures for v1.D–v2.B rows: Ahrefs, US, pulled 2026-09-22 (from the operator's
2026-10-03 strategy brief).

## 6. Open questions

- *(append-only log; mark answered with date but never delete)*
- 2026-10-03 — **DoD CMMC Phase 2 date conflict.** Strategy brief says DoD's Phase 2 lands
  ~2026-11-10; the live guide (sourced) says DoD suspended Phase 2 on
  2026-07-13 pending the Reform Task Force review. v1.D page must reflect
  current status at publish time.
  **Answered 2026-10-03:** suspension still in force. Task Force report
  delivered to DoW CIO ~2026-09-11, not published; Phase 1 obligations
  unchanged. Guide's status section still accurate. v1.D = "CMMC rollout status" page.
- 2026-10-03 — "~431 orgs certified vs ~80,000 needing Level 2" (brief, citing
  Oct 2025 CyberAB town hall) — unsourced in repo; do not publish without a
  citeable source.
- 2026-10-03 — Named entity vs faceless? Gates v1.B. (v1.A)
  **Answered 2026-10-28:** faceless for now. Site identity lives in one
  config the trust pages read, so credibility layers (named entity, About,
  team, credentials) can be added later without rewriting pages.
- 2026-10-03 — Does the scanner produce real Graph output today? Gates the v1.D
  sample packet and all of v3.C. (v1.A)
  **Answered 2026-10-04:** no — scanner doesn't exist yet. Consequences:
  v1.D sample packet and all of v3.C blocked until it does; v1.B security
  page can only state *planned* Graph scopes/data handling; homepage copy
  that presents a working product ("LIVE SCAN", "connects to Microsoft 365,
  pulls…", "12 tenants · last sync 2 min ago", "sample report on call #1")
  must be relabeled as preview / pilot intent (v1.B).
  2026-10-04: homepage relabeled ahead of the rest of v1.B; guarded by
  `src/__tests__/homepage-claims.test.js`.
- 2026-10-03 — CertHorizon: separate property or shared content spine? (v1.A)
  2026-10-04: CertHorizon is now pqhorizon.com (live) — a post-quantum crypto
  readiness scanner sold to in-house CISOs at 50–500-person companies. Overlap
  with mspproof is only its defense-subcontractor ring. Recommendation: keep
  separate; cross-link only where a topic genuinely spans both (e.g. FIPS
  cryptography under SC.L2-3.13.11).
  **Answered 2026-10-04:** keep separate; cross-link only where topics span both.
- 2026-10-03 — FutureFeed: partner/MSP-oriented → nearest competitor? Check
  before guide wording review closes.
  **Answered 2026-10-03:** yes. Partner program targets 10+ client
  relationships; 2024 feature sheet lists "Multi-Tenant" + partner-branded
  dashboard. Nearest competitor. Guide corrected (commit 5221fe8).
- 2026-10-03 — r/CMMC: does it tolerate vendor presence?
- 2026-10-03 — **Pilot form delivers nothing.** `LeadForm` in
  `LandingPage.tsx` only sets client-side state (see `src/lib/server-todo.md`);
  any pilot application submitted to date was lost. Fold into v1.C, or ship
  ahead of it as the first v1.B item?
  **Answered 2026-10-03:** shipped ahead of v1.C — Web3Forms, key in
  `PUBLIC_WEB3FORMS_KEY`. v1.C still owns gated-asset capture.
- 2026-10-03 — Distribution is the first job, not in any phase: outbound to the
  Cyber AB RPO directory, MSP communities, r/CMMC. Needs an owner outside the PRD.
- 2026-10-28 — **Priority set: expand SEO impressions surface.** v2 runs next;
  v1.B remainder / v1.C / v1.D packet deferred as down-funnel. Basis: GSC
  2026-09-30..10-28 — roundup earns 121 of 129 site impressions at avg position
  68, 0 clicks; top query `cmmc compliance software` (22 imp, pos 87).
- 2026-11-07 — **Rest of v2 planned (operator chose option A).** v2.C/v2.D/v2.E
  added from treg keyword research: DataForSEO Labs keyword_overview (US),
  SE Ranking keywords/export (US) as second opinion, pulled 2026-11-07. Volumes
  in v2.C–v2.E rows are DataForSEO; providers disagree widely on KD (DFS often
  0 where SE Ranking gives 20–60). Re-checked: `cmmc level 2 requirements` 590
  (Ahrefs had 800), `cmmc certification cost` 170 and declining (350),
  `cmmc self assessment` 210 (300), `sprs score calculator` 30 (100) — the
  standalone calculator was dropped into the v2.D SPRS score page.
