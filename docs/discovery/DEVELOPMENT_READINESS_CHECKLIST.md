# Development Readiness Checklist

**Project:** Binary Sequence Technological Art  
**Phase:** Phase 0 — Workspace Discovery and Documentation-System Assessment  
**Date:** 2026-10-25  
**Assessor:** Antigravity (AI Assistant)  
**Status:** Complete  

---

## 1. Overview

Before proceeding from **Phase 0 (Discovery)** to **Phase 1 (Documentation System & Architecture Setup)** or beginning any website implementation, the following decisions, documentation structures, architectural agreements, and tooling verifications must be established.

No code generation or feature implementation should take place while blocking items remain unresolved.

---

## 2. Readiness Sign-Off Matrix

| Item ID | Category | Requirement / Decision | Current Status | Blocker / Reason | Dependencies | Completion Evidence Required |
|---|---|---|---|---|---|---|
| **DR-01** | **Workspace** | Canonical Workspace Directory Alignment | **Ready for Confirmation** | Files are in `G:\binarysequence_techart`; active workspace is `G:\binarysequence_technologicalart`. | Phase 0 Discovery | User confirmation to populate `G:\binarysequence_technologicalart` as canonical repo. |
| **DR-02** | **Tooling** | Host Node.js & Package Manager Runtime Path | **Blocked (Environment)** | `node`, `npm`, `pnpm` are not exposed in the active shell PATH inside the sandbox. | User PATH / NVM setup | Successful terminal execution of `node -v` and `pnpm -v` (or `npm -v`) in workspace. |
| **DR-03** | **Architecture** | Technology Stack Selection (Astro vs. Next.js) | **Pending Founder Decision** | Bootstrap proposes Next.js + Firebase; Master v1.1 mandates Minimum Appropriate Technology rule evaluating Astro + CSS. | Master v1.1 Change 15 | Formal decision recorded in an Engineering Decision Record (EDR-001). |
| **DR-04** | **Scope** | V1 Launch Scope: Direct Landing vs. Onboarding Gate | **Pending Founder Decision** | Content Spec v1.1 specifies direct Home hero landing; Bootstrap has modal Onboarding Gate (`FEAT-01-ONB`). | IA v2.0 & Content Spec | Written approval of direct-landing baseline with Onboarding deferred or optional. |
| **DR-05** | **Documentation** | Canonical Documentation Hierarchy Structure | **Proposed (Ready to Create)** | Competing proposed trees (`master_documents/`, `final_docs/`) must be consolidated into a lean single-source tree. | Source of Truth Index | Creation of canonical `docs/` tree in workspace preserving all 3 foundational docs. |
| **DR-06** | **Contracts** | Machine-Readable Contract Integration | **Proposed (Ready to Adapt)** | Bootstrap TOML files must be reconciled with approved IA v2.0 (removing Next.js assumptions and updating contact email). | DR-03, DR-04 | Reconciled `ARCHITECTURE_INDEX.toml` and `CORE_GATEWAY_CONTRACTS.toml` committed. |
| **DR-07** | **Validation** | Contract Validation Tooling Overhaul | **Proposed (Pending Tooling)** | Bootstrap validation scripts require `@iarna/toml`, hardcode single features, and use fragile regex. | DR-02, DR-03 | Generic, runnable test scripts verifying schemas and boundaries without crashes. |
| **DR-08** | **Infrastructure** | Contact Form Destination & Protocol | **Pending Decision** | Email `binarysequence.techart@gmail.com` confirmed, but backend intake mechanism (API, Formspree, Resend, mailto) is unconfigured. | IA v2.0 Section 11.6 | Documented form handling mechanism and verified inbox delivery. |
| **DR-09** | **Content** | Legal & Governance Route Content | **Pending Authoring** | Routes `/privacy` and `/service-boundaries` exist in sitemap, but specific legal copy is unwritten. | Content Spec v1.1 | Drafted and approved markdown copy for Privacy Notice and Service Boundaries. |
| **DR-10** | **Source Control** | Git Repository Initialization | **Pending Phase 1** | Workspace has no `.git` repository initialized. | DR-01 | `git init` executed, `.gitignore` created, initial commit of canonical docs recorded. |

---

## 3. Detailed Breakdown of Blockers & Required Decisions

### 3.1 Decision 1: Primary Technology Stack (Astro vs. Next.js)
- **Context:** The bootstrap package configured `Next.js App Router` and `Firebase`. However, Section 69 of `Binary_Sequence_Technological_Art_Final_Master_v1.1.md` mandates:
  > *"A proposed stack such as Astro and vanilla CSS may be suitable for website V1, but it is a candidate rather than a permanent identity commitment... Technology decisions must follow requirements and constraints, not branding or a desire to standardize everything."*
- **Comparison:**
  - **Astro (Recommended for V1):** Zero client-side JavaScript by default, optimal Core Web Vitals (sub-50ms load, guaranteed low CLS), native Markdown/Content Collections for Engineering Notebook and Product case studies, lower hosting complexity/cost.
  - **Next.js App Router:** Ideal if dynamic authenticated customer portals, live dashboards, or server-side session management are required in V1.
- **Evidence for Completion:** Approved EDR-001 recording the chosen framework and rationale.

### 3.2 Decision 2: Onboarding Feature Disposition
- **Context:** `FEAT-01-ONB` is included in the bootstrap package as a state-machine modal gate. Both `Audience-Facing Content Specification v1.1` and `Information Architecture v2.0` prioritize immediate, unobstructed commercial access and two-scroll scannability.
- **Recommendation:** Implement direct landing on the Home page hero as the primary V1 experience. Defer `FEAT-01-ONB` or implement it as a subtle, non-blocking visual embellishment that respects reduced-motion preferences.
- **Evidence for Completion:** Decision recorded in `docs/contracts/DISCREPANCY_REGISTER.md` confirming whether `FEAT-01-ONB` is active, deferred, or re-scoped.

### 3.3 Environmental Blocker: Node.js / Package Manager in Shell
- **Context:** Node.js v22 is present on the host system (as demonstrated by hook executions), but running `node` or `pnpm` in PowerShell fails because the binaries are not exposed in the environment PATH for this session.
- **Action Required:** Verify and update the shell PATH (or NVM configuration) so that the active shell can run Node, pnpm/npm, and execute build/validation commands.
- **Evidence for Completion:** Successful execution of `node -v` returning `>= 20.0.0` and package manager check in workspace terminal.

---

## 4. Phase 0 Completion Declaration

Phase 0 discovery is complete. All 5 required assessment reports are authored and stored under `docs/discovery/`:
1. `docs/discovery/WORKSPACE_DISCOVERY_REPORT.md`
2. `docs/discovery/SOURCE_OF_TRUTH_INDEX.md`
3. `docs/discovery/REQUIREMENTS_AND_DISCREPANCIES.md`
4. `docs/discovery/BOOTSTRAP_ASSESSMENT.md`
5. `docs/discovery/DEVELOPMENT_READINESS_CHECKLIST.md`

**No implementation or Phase 1 tasks will commence until these findings, decisions, and readiness items are reviewed and approved by the founder.**
