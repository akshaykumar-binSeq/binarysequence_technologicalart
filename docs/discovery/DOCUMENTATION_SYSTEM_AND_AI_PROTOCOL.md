# Documentation-System Design, Persistent Decision System & AI Prompt Protocol

**Project:** Binary Sequence Technological Art  
**Phase:** Phase 0 — Workspace Discovery and Documentation-System Assessment  
**Document Index:** Document 6 of 6 (Discovery Series)  
**Date:** 2026-10-25  
**Assessor:** Antigravity (AI Assistant)  
**Status:** Complete  

---

## 1. Executive Summary

This document fulfills the core architectural investigations mandated in **Sections 4.D, 4.E, and 4.F** of the Phase 0 objective:
1. **Documentation-System Design (Section 4.D):** Evaluation of proposed documentation structures, elimination of competing canonical directories, and recommendation of the minimal coherent single-source-of-truth hierarchy.
2. **Persistent Decision System (Section 4.E):** Formal schema and operational rules for a machine-readable Decision Registry and Discrepancy Register tracking confirmed, proposed, unresolved, and implemented decisions.
3. **Future AI Prompt Protocol (Section 4.F):** A bounded-context protocol ensuring that future AI tasks operate with strict scope limits, prevent silent assumption adoption, and require verification evidence before completion.

---

## 2. Documentation-System Design (Section 4.D)

### 2.1 Critical Assessment of the Proposed Structure
The original bootstrap concept proposed the following directory layout:
```text
master_documents/
final_docs/
docs/
docs/ARCHITECTURE_DECISIONS/
docs/schemas/
src/app/docs/
src/core/
src/features/<feature>/docs/
```

#### Structural Flaws Identified:
1. **Multiple Competing Canonical Copies:** Maintaining `master_documents/`, `final_docs/`, and `docs/` simultaneously guarantees documentation drift. When a decision changes, updating one folder leaves the others stale, making it impossible for humans or AI to determine which document is authoritative.
2. **Scattered Architecture Decisions:** Housing architecture decisions under `docs/ARCHITECTURE_DECISIONS/` while feature-level specs live under `src/features/<feature>/docs/` without an overarching index creates blind spots during bounded-context retrieval.
3. **Premature Folder Sprawl:** Creating empty documentation folders for all 11 future features before the core repository and V1 baseline exist creates maintenance overhead without delivering value.

### 2.2 The Smallest Coherent Documentation Hierarchy (Recommended)
To satisfy the single-source-of-truth mandate, all project documentation must be organized into a consolidated, non-competing structure under `docs/`:

```text
G:\binarysequence_techart\
├── docs/
│   ├── discovery/                  # Phase 0 Discovery Reports (Documents 1–6)
│   │   ├── WORKSPACE_DISCOVERY_REPORT.md
│   │   ├── SOURCE_OF_TRUTH_INDEX.md
│   │   ├── REQUIREMENTS_AND_DISCREPANCIES.md
│   │   ├── BOOTSTRAP_ASSESSMENT.md
│   │   ├── DEVELOPMENT_READINESS_CHECKLIST.md
│   │   └── DOCUMENTATION_SYSTEM_AND_AI_PROTOCOL.md
│   │
│   ├── foundational/               # Immutable reference documents (Read-only Level 1)
│   │   ├── initial_thought_and_plan.md
│   │   ├── foundational_identity_playbook_v1.0.0.md
│   │   └── FINAL_MASTER_v1.1.md
│   │
│   ├── specifications/             # Approved human specifications (Level 2–4)
│   │   ├── AUDIENCE_CONTENT_SPECIFICATION_v1.1.md
│   │   ├── INFORMATION_ARCHITECTURE_v2.0.md
│   │   └── DDD_ARCHITECTURAL_GUIDELINES_v1.0.md
│   │
│   ├── contracts/                  # Canonical machine contracts (Level 5)
│   │   ├── ARCHITECTURE_INDEX.toml # Master system registry & feature index
│   │   ├── CORE_GATEWAY_CONTRACTS.toml
│   │   ├── GLOBAL_DESIGN_SYSTEM.toml
│   │   ├── DECISION_REGISTRY.toml  # Machine-readable persistent decision log
│   │   └── DISCREPANCY_REGISTER.md # Living human-readable discrepancy table
│   │
│   ├── decisions/                  # Engineering Decision Records (EDRs)
│   │   └── EDR-001-template.md
│   │
│   └── schemas/                    # JSON Schemas enforcing TOML contract validity
│       ├── architecture-index.schema.json
│       ├── core-gateway.schema.json
│       ├── design-system.schema.json
│       ├── decision-registry.schema.json
│       ├── feature-spec.schema.json
│       └── ui-wireframe.schema.json
│
└── src/
    ├── app/
    │   └── docs/                   # App shell routing contracts
    │       ├── APP_SHELL_ROUTING.md
    │       └── APP_SHELL_ROUTING.toml
    └── features/
        └── <feature-name>/         # Active feature (e.g. home)
            └── docs/               # Colocated feature contracts & wireframes
                ├── FEATURE_SPEC.md
                ├── FEATURE_SPEC.toml
                ├── UI_UX_WIREFRAME.md
                └── UI_UX_WIREFRAME.toml
```

### 2.3 The Dual Markdown + TOML Operational Model
Documentation serves two distinct consumers with different requirements:
- **Markdown (`.md`):** Authoritative for **human understanding**. Explains design philosophy, user empathy, strategic trade-offs, editorial guidelines, and rationale.
- **TOML (`.toml`):** Authoritative for **machine validation**. Defines strict, unambiguous, schema-backed data structures: allowed state transitions, color primitives, spacing tokens, route paths, API boundaries, and test fixture expectations.
- **Rule of Authority:** TOML contracts must never contradict approved Markdown rationale. If a discrepancy occurs, it must be recorded in `docs/contracts/DISCREPANCY_REGISTER.md` and resolved against the strategic source documents before code generation.

---

## 3. Persistent Decision System (Section 4.E)

### 3.1 Registry Structure & Vocabulary
To ensure that requirements, architectural choices, and technical trade-offs are permanently tracked and auditable, the project adopts a machine-readable `docs/contracts/DECISION_REGISTRY.toml` paired with `docs/contracts/DISCREPANCY_REGISTER.md`.

#### Standard Status Vocabulary:
1. **`CONFIRMED`** — Approved by the founder or established in the Level 1 master sources. Active requirement.
2. **`PROPOSED`** — Recommended by architecture or development analysis; awaiting founder sign-off.
3. **`UNRESOLVED`** — Open question or ambiguity requiring external input, credentials, or policy text.
4. **`IMPLEMENTED`** — Present in code, verified by automated tests, and validated against acceptance criteria.
5. **`SUPERSEDED`** — Replaced by a subsequent confirmed decision (must link to replacing Decision ID).
6. **`REJECTED`** — Evaluated and deliberately discarded, with recorded rationale.

### 3.2 Canonical Machine Schema (`docs/schemas/decision-registry.schema.json`)
Every decision record in `DECISION_REGISTRY.toml` must conform to the following schema:

```toml
[[decisions]]
id = "DEC-001"
title = "Canonical Public Contact Email"
status = "CONFIRMED"
precedence_tier = "LEVEL_2_CONTENT"
category = "CONTENT_AND_INFRASTRUCTURE"
date_recorded = "2026-10-25"
author = "Founder / IA v2.0"
summary = "Designate binarysequence.techart@gmail.com as the sole public contact address."
rationale = "Custom domain email (@binarysequence.art) lacks verified DNS/MX records. Gmail address is operational."
affected_contracts = [
  "docs/contracts/ARCHITECTURE_INDEX.toml",
  "docs/specifications/AUDIENCE_CONTENT_SPECIFICATION_v1.1.md",
  "docs/specifications/INFORMATION_ARCHITECTURE_v2.0.md"
]
verification_evidence = "Inbox access and delivery testing required before public launch."
```

### 3.3 Active Decisions Inventory (Phase 0 Baseline)

| Decision ID | Title | Status | Category | Resolution / Current Baseline |
|---|---|---|---|---|
| **DEC-001** | Public Contact Email | `CONFIRMED` | Content / Infrastructure | Use `binarysequence.techart@gmail.com` across all copy and forms. |
| **DEC-002** | System Verification Register | `CONFIRMED` | IA / Routing | Defer from V1. Omit from sitemap, routes, and footer. |
| **DEC-003** | Sequence Scrubber Scope | `CONFIRMED` | Presentation / UX | Implement static, accessible 11-step sequence for V1; interactive scrubber deferred. |
| **DEC-004** | Response SLA Language | `CONFIRMED` | Editorial / Governance | Remove fixed turnaround claims (e.g. 48h); state capacity-based review. |
| **DEC-005** | Onboarding Gate Disposition | `PROPOSED` | Architecture / UX | Direct landing on Home hero; modal gate (`FEAT-01-ONB`) deferred or optional. |
| **DEC-006** | Primary Framework (V1) | `PROPOSED` | Architecture / Tech Stack | Recommend Astro + TypeScript + CSS (Minimum Appropriate Technology). |
| **DEC-007** | Canonical Repo Directory | `CONFIRMED` | Workspace | Canonical root is `G:\binarysequence_techart`. |
| **DEC-008** | Documentation Architecture | `PROPOSED` | Governance | Unified `docs/` tree eliminating `master_documents/` and `final_docs/`. |

---

## 4. Future AI Prompt Protocol (Section 4.F)

### 4.1 Bounded-Context Loading Protocol
To prevent context saturation and eliminate hallucinations, AI agents must **never** load the entire documentation tree for a single task. Agents must strictly adhere to the following bounded-context retrieval sequence:

```
┌────────────────────────────────────────────────────────────────────────┐
│ STEP 1: LOAD ARCHITECTURAL INDEX & PROTOCOL                            │
│ - Read docs/contracts/ARCHITECTURE_INDEX.toml                          │
│ - Identify active feature, dependencies, and authorized paths          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ STEP 2: LOAD SPECIFIC FEATURE CONTRACTS ONLY                           │
│ - Read src/features/<feature>/docs/FEATURE_SPEC.toml & .md             │
│ - Read src/features/<feature>/docs/UI_UX_WIREFRAME.toml & .md          │
│ - Read relevant shared kernel contracts from docs/contracts/           │
│ - DO NOT load contracts of unrelated features                          │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ STEP 3: GROUND IN ACTUAL CODE & VERIFICATION EVIDENCE                  │
│ - Inspect existing source code, tests, and build state                 │
│ - Check docs/contracts/DISCREPANCY_REGISTER.md for known blockers      │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ STEP 4: PRODUCE IMPLEMENTATION PLAN & OBTAIN CONFIRMATION              │
│ - State files to change, exact acceptance criteria, and tests to run   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ STEP 5: EXECUTE, VERIFY & RECORD EVIDENCE                              │
│ - Limit modifications strictly to authorized feature boundary          │
│ - Run verification scripts (typecheck, lint, boundary, token tests)    │
│ - Update documentation only when supported by implementation evidence  │
└────────────────────────────────────────────────────────────────────────┘
```

### 4.2 Invariant AI Governance Rules

1. **No Assumptions as Facts:** An AI assistant must never treat an unverified assumption or bootstrap default as an approved requirement. If an ambiguity arises, it must be logged in `DISCREPANCY_REGISTER.md`.
2. **No Silent Overwrites:** Never silently modify, delete, or rewrite foundational documents (`initial thought and plan.md`, `version 1.0.0.md`, `Final Master v1.1.md`).
3. **No Unilateral Architecture Changes:** Adding external packages, changing the primary framework, altering routing conventions, or creating cross-feature imports requires explicit founder authorization via an EDR.
4. **Boundary Isolation:** Code within `src/features/<feature>/` must never import internal paths of another feature. Cross-feature integration must happen solely through public gateways exported from feature root `index.ts`.
5. **Evidence-Based Completion:** No task may be reported as complete without terminal evidence (passing tests, clean linting, reproducible build output, or verified file contents).

### 4.3 Mandatory Change Classification Protocol

Whenever a change, requirement, clarification, or enhancement is introduced, it must be formally classified before file edits begin:

* **`COMMON`:** Applies across multiple features or changes a shared capability, token, or convention.
* **`FEATURE-SPECIFIC`:** Restricted to a single feature and leaves common contracts intact.
* **`COMMON + FEATURE-SPECIFIC`:** Changes a common rule and mandates feature-level adaptations.
* **`CROSS-CUTTING`:** Affects architecture, security, privacy, accessibility, data integrity, or deployment across the system.
* **`CLARIFICATION`:** Clarifies founder intent without altering approved requirements.
* **`CORRECTION`:** Fixes inconsistent documentation or code defects.
* **`PROPOSAL`:** A recommendation awaiting founder sign-off before adoption.
* **`UNRESOLVED`:** An open question requiring external data or founder decision.

### 4.4 Common-to-Feature Dependency Analysis

For every `COMMON` or `COMMON + FEATURE-SPECIFIC` change:
1. Identify the common source of truth.
2. Search for existing common definitions before adding new ones.
3. Identify all features that inherit, implement, or depend on the capability.
4. Read dependent feature specifications.
5. Determine whether each dependent feature: complies, needs spec update, needs implementation update, needs test extensions, requires documented exception, or is unaffected (supported by evidence).
6. Update common sources and affected feature specs within authorized scope.
7. Maintain explicit references from subordinate specs back to the common source.
8. Check for duplicated or conflicting definitions.
9. Verify resulting implementation and tests conform to approved common rules.

### 4.5 No-Unnecessary-Documents Rule

* **Default Action:** Update existing authoritative documents in place.
* **Creation Threshold:** A new document is permitted only when it represents a genuinely distinct domain boundary, independent contract, or formal deliverable that cannot be cleanly integrated into an existing file.
* **Justification Required:** The author must document why existing documents are insufficient, the document's authority tier, and inbound/outbound references.

### 4.6 7-Phase Execution Workflow

Substantive engineering tasks execute through 7 phases:
* **Phase A — Inspect:** Read root instructions (`GEMINI.md`), session state (`docs/ACTIVE_SESSION_STATE.md`), and authoritative documents.
* **Phase B — Analyze:** Classify change, analyze dependencies, and detect conflicts.
* **Phase C — Plan:** Present exact file edits, acceptance criteria, and verification steps.
* **Phase D — Approval:** Request approval for architectural changes, new shared contracts, or scope expansions.
* **Phase E — Execute:** Apply authorized edits carefully.
* **Phase F — Verify:** Execute terminal verification (tests, lint, hash checks, diff reviews).
* **Phase G — Handoff:** Update `docs/ACTIVE_SESSION_STATE.md` in place.

### 4.7 Parent-to-Target Knowledge Retrieval Sequence

Agents must navigate the established documentation hierarchy systematically rather than executing arbitrary text searches:

```
Project Instructions (GEMINI.md)
       │
       ▼
Living Session State (docs/ACTIVE_SESSION_STATE.md)
       │
       ▼
Knowledge Index (docs/discovery/SOURCE_OF_TRUTH_INDEX.md)
       │
       ▼
AI-Readable Associative Reference (docs/references/REF-*.md)
       │
       ▼
Governing Parent Source Document (Levels 1–4)
       │
       ▼
Referenced Subdocuments & Contracts (Level 5 *.toml / *.schema.json)
       │
       ▼
Exact Authoritative Target Specification
       │
       ▼
Affected Dependent Features & Common Contracts
       │
       ▼
Implementation Evidence & Tests (Level 6)
```

### 4.8 Long-Prompt & Complex Task Execution Protocol

When a task prompt contains multiple dependent requirements or deliverables:
1. **Preserve Prompt:** Store the complete original prompt in a temporary task file (`.task_<name>.tmp` or scratch directory).
2. **Decompose to Checklist:** Map each requirement to its parent document, exact target, dependencies, and acceptance criteria.
3. **Track Lifecycle State:** Use explicit statuses (`NOT_STARTED`, `IN_PROGRESS`, `BLOCKED`, `COMPLETED`, `VERIFIED`).
4. **Dependency Execution Order:** Execute in logical order; never jump ahead to code before specifications are locked.
5. **Periodic Reassessment:** Re-evaluate the entire requirement set before and after significant steps.
6. **Empirical Evidence:** Record concrete command outputs, file hashes, and test results.
7. **Final Audit:** Audit against the original prompt before declaring completion.
8. **Safe Cleanup:** Delete the temporary file only after all records are updated and deletion is verified safe.

### 4.9 AI-Readable Associative Reference System

For large Level 1–4 foundational specifications, maintain compact structured reference cards under `docs/references/` (e.g. `REF-01` through `REF-04`):
* Preserves core invariants, rules, decisions, and dependencies.
* Reduces context consumption while maintaining 100% fidelity to governing constraints.
* Subordinate to primary source documents; synchronized whenever source files are updated.

---

## 5. Handoff to Phase 1: Documentation System & Architecture Setup

With the completion of **Documents 1 through 6**, Phase 0 Discovery is fully achieved:

* [Document 1: WORKSPACE_DISCOVERY_REPORT.md](file:///G:/binarysequence_techart/docs/discovery/WORKSPACE_DISCOVERY_REPORT.md)
* [Document 2: SOURCE_OF_TRUTH_INDEX.md](file:///G:/binarysequence_techart/docs/discovery/SOURCE_OF_TRUTH_INDEX.md)
* [Document 3: REQUIREMENTS_AND_DISCREPANCIES.md](file:///G:/binarysequence_techart/docs/discovery/REQUIREMENTS_AND_DISCREPANCIES.md)
* [Document 4: BOOTSTRAP_ASSESSMENT.md](file:///G:/binarysequence_techart/docs/discovery/BOOTSTRAP_ASSESSMENT.md)
* [Document 5: DEVELOPMENT_READINESS_CHECKLIST.md](file:///G:/binarysequence_techart/docs/discovery/DEVELOPMENT_READINESS_CHECKLIST.md)
* [Document 6: DOCUMENTATION_SYSTEM_AND_AI_PROTOCOL.md](file:///G:/binarysequence_techart/docs/discovery/DOCUMENTATION_SYSTEM_AND_AI_PROTOCOL.md)

**Phase 0 is complete. The system is paused and awaiting founder review and instructions before initiating Phase 1.**
