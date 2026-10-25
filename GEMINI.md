# GEMINI.md — Binary Sequence Technological Art Operational Agent Protocol

> **Canonical Repository Root:** `G:\binarysequence_techart\`  
> **Status:** Active Project Governance Protocol  
> **Applies to:** All Gemini & Antigravity AI coding sessions across the repository  

---

## 1. Project Identity & Core Principles

Binary Sequence Technological Art is an independent, founder-led technological art and product engineering studio.

* **Foundational Proposition:** *"Everyone deserves an enterprise solution."*
* **Engineering Thesis:** *"Complexity should be absorbed by architecture, not transferred to the user."*
* **Studio Ethos:** *"Enterprise engineering. Human experience."*
* **Artifact Character:** Dignity, stillness, structural honesty, mathematical precision, absence of marketing hyperbole.
* **Precedence Principle:** Philosophy and approved strategy govern architecture; architecture governs contracts; contracts govern code. Code is evidence of current behavior, not an override of approved requirements.

---

## 2. Canonical Workspace & Boundary Invariants

1. **Canonical Root:** All operations must resolve strictly to `G:\binarysequence_techart\`. The former directory `G:\binarysequence_technologicalart` is obsolete and permanently eliminated.
2. **Path Security:** Operations are strictly confined to `G:\binarysequence_techart\`. Never inspect or modify user profiles or system directories outside this workspace.
3. **No Assumptions:** Never treat an unverified assumption, placeholder, or default as an approved requirement. If an ambiguity arises, record it in `docs/contracts/DISCREPANCY_REGISTER.md` (or discovery register).
4. **No Silent Overwrites:** Foundational Level 1 strategy documents must never be rewritten or modified.
5. **Evidence-Based Completion:** No task may be reported as complete without concrete terminal evidence (passing tests, clean diffs, verified file hashes, or reproducible build outputs).

---

## 3. Source-of-Truth Precedence Hierarchy

When evaluating requirements, resolving ambiguities, or modifying files, strictly observe the 6-level precedence hierarchy:

```text
LEVEL 1: FOUNDATIONAL STRATEGY & IDENTITY (Read-only, immutable)
  ├── initial thought and plan.md
  ├── foundational identity, founder website vision & strategic playbook - version 1.0.0.md
  └── Binary_Sequence_Technological_Art_Final_Master_v1.1.md
        │ Governs
        ▼
LEVEL 2: AUDIENCE-FACING CONTENT SPECIFICATIONS
  └── audience_facing_content_specification_v1_1.md
        │ Dictates
        ▼
LEVEL 3: INFORMATION ARCHITECTURE & SENSORY CONTRACTS
  ├── Binary_Sequence_Information_Architecture_v2.0.md
  └── binary_sequence_screen_layout_ia_motion_loading_contract_final.md
        │ Informs
        ▼
LEVEL 4: ARCHITECTURAL METHODOLOGY & BOUNDARIES (DDD)
  └── Binary_Sequence_DDD_Architectural_Methodological_Guidelines_v1.0.md
        │ Constrains
        ▼
LEVEL 5: MACHINE-READABLE CONTRACTS & SCHEMAS
  ├── docs/contracts/*.toml (or ai_contract_bootstrap/docs/*.toml)
  ├── docs/schemas/*.json (or ai_contract_bootstrap/docs/schemas/*.json)
  └── src/**/docs/*.toml
        │ Verifies
        ▼
LEVEL 6: IMPLEMENTATION & RUNTIME EVIDENCE
  └── Actual application code, tests, build outputs, and execution logs
```

**Implementation vs. Requirement Rule:** Implementation is evidence of what the software currently does; it does not automatically override an approved requirement. When implementation and requirements disagree, record the discrepancy and seek founder resolution.

---

## 4. Parent-to-Target Knowledge Retrieval Sequence

To eliminate hallucinations and avoid context saturation, agents must never load the entire documentation tree indiscriminately. For every new task, follow this exact logical retrieval chain:

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

### Retrieval Steps
1. **Read Root Governance:** Read this `GEMINI.md` to load active operational constraints.
2. **Read Session State:** Read [`docs/ACTIVE_SESSION_STATE.md`](file:///G:/binarysequence_techart/docs/ACTIVE_SESSION_STATE.md) to inspect the current phase, active task, recent commits, and handoff notes.
3. **Consult Index:** Read [`docs/discovery/SOURCE_OF_TRUTH_INDEX.md`](file:///G:/binarysequence_techart/docs/discovery/SOURCE_OF_TRUTH_INDEX.md) to locate the governing parent document.
4. **Consult AI-Readable Reference:** Read the compact reference card in `docs/references/` (e.g. `REF-01` through `REF-04`) to evaluate constraints and token-dense requirements without loading massive prose files.
5. **Inspect Authoritative Source:** When precise phrasing, trade-offs, or exact verbatim copy matters, read the specific sections of the authoritative Level 1–4 document.
6. **Retrieve Bounded Contracts:** Follow explicit references to load only relevant common and feature-specific contracts (`FEATURE_SPEC.toml`, `UI_UX_WIREFRAME.toml`). Never load contracts of unrelated features.
7. **Inspect Implementation Evidence:** Inspect actual source files, tests, and Git status before proposing modifications.
8. **Verify Existence:** Confirm that referenced paths, schemas, and files physically exist on disk before using them.
9. **Identify Missing Context:** If required information is missing, document the gap in `docs/contracts/DISCREPANCY_REGISTER.md` instead of guessing.

---

## 5. Mandatory Change Classification

Before modifying any file, classify the requested change into one or more of these 8 categories:

* `COMMON`: Applies across multiple features or alters a shared capability, rule, contract, or convention.
* `FEATURE-SPECIFIC`: Applies strictly to a single feature and preserves shared contracts intact.
* `COMMON + FEATURE-SPECIFIC`: Changes a shared capability and mandates feature-level adaptations.
* `CROSS-CUTTING`: Impacts architecture, security, privacy, accessibility, data integrity, or deployment across multiple areas.
* `CLARIFICATION`: Clarifies founder intent without altering approved requirements.
* `CORRECTION`: Fixes an error, inconsistency, or bug in documentation or implementation.
* `PROPOSAL`: A recommended modification awaiting founder evaluation and approval.
* `UNRESOLVED`: An open ambiguity requiring external data, credentials, or explicit founder direction.

### Impact Checklist for Every Task
For every task, explicitly document:
1. Requested change and its classification.
2. Authoritative source document governing it.
3. Common capabilities involved.
4. Affected feature-specific specifications.
5. Relevant implementation and test files.
6. Dependent downstream documents and contracts.
7. Potential conflicts with existing approved decisions.
8. Unresolved questions requiring founder input.

---

## 6. Mandatory Common-to-Feature Dependency Analysis

For every `COMMON` or `COMMON + FEATURE-SPECIFIC` change:

1. Identify the common source of truth.
2. Search for existing common definitions before introducing new tokens or rules.
3. Identify all features that inherit, implement, or depend on the capability.
4. Read the dependent feature specifications.
5. Determine whether each dependent feature:
   - Already complies;
   - Needs a specification update;
   - Needs an implementation update;
   - Needs test suite extensions;
   - Requires a documented exception; or
   - Is provably unaffected (citing evidence).
6. Update common sources and affected feature specs within authorized scope.
7. Maintain explicit references from subordinate specs back to the common source.
8. Check for duplicated or conflicting definitions.
9. Verify that resulting implementation and tests conform to the approved common rule.

---

## 7. No-Unnecessary-Documents Rule

* **Default Action:** Update existing authoritative documents in place. Do not create new documents for updates, extensions, or clarifications.
* **Strict Creation Criteria:** A new document is permitted **only** when it serves a distinct bounded context, independent domain contract, or formal deliverable that cannot be cleanly integrated into an existing file.
* **Justification Requirement:** If a new document is proposed, the agent must document:
  1. Why existing documents are insufficient;
  2. Its intended precedence level; and
  3. Its inbound and outbound dependency links.
* **Anti-Sprawl Rules:**
  - Never create versioned duplicates (e.g. `doc_v2.md` alongside `doc_v1.md`) unless authorized as an immutable baseline snapshot.
  - Never create parallel summaries that become desynchronized alternative sources of truth.
  - Never delete historical or audit records without explicit authorization.

---

## 8. Documentation Change Propagation Protocol

When a material requirement changes, systematically propagate updates across the dependency chain:

```
[Authoritative Master Document]
        │
        ├──> [Referencing Specifications & Contracts]
        │         ├──> Common Shared Contracts (e.g. Design Tokens, Routing)
        │         └──> Feature-Specific Specs (e.g. Feature Specs, Wireframes)
        │
        ├──> [Validation Schemas & Tooling]
        │
        ├──> [Implementation & Test Suites]
        │
        └──> [Navigation & State Ledgers]
                  ├──> SOURCE_OF_TRUTH_INDEX.md
                  ├──> DISCREPANCY_REGISTER.md
                  └──> docs/ACTIVE_SESSION_STATE.md
```

* **Stale Requirement Elimination:** When a requirement is superseded, mark it clearly as `SUPERSEDED` or update the text directly so contradictory guidance does not persist.
* **Scope Discipline:** If the change propagation exceeds the current task's scope, produce a documented migration plan. Never report a task as complete while leaving dependent contracts inconsistent.

---

## 9. 7-Phase Execution Workflow

For every substantive engineering or documentation task, execute through these 7 phases:

* **Phase A — Inspect:** Read relevant root instructions, session state, and authoritative documents. Inspect actual filesystem and Git status.
* **Phase B — Analyze:** Classify the change, perform dependency analysis, and detect conflicts.
* **Phase C — Plan:** Present the exact files to create/edit, acceptance criteria, and verification steps.
* **Phase D — Approval:** Request approval when the change alters architecture, introduces a shared contract, resolves an open product decision, or expands scope. Follow pre-approved authorizations directly.
* **Phase E — Execute:** Apply authorized modifications carefully, respecting existing structure and comments.
* **Phase F — Verify:** Execute terminal verification (tests, lint, hash checks, diff reviews).
* **Phase G — Handoff:** Update [`docs/ACTIVE_SESSION_STATE.md`](file:///G:/binarysequence_techart/docs/ACTIVE_SESSION_STATE.md) with completed work, verified evidence, and recommended next steps.

---

## 10. Session Continuity & Living Handoff Protocol

At the end of every substantive task, update [`docs/ACTIVE_SESSION_STATE.md`](file:///G:/binarysequence_techart/docs/ACTIVE_SESSION_STATE.md) in-place:
* Active project phase.
* Task objective and change classification.
* Authoritative documents referenced.
* Approved decisions applied.
* Files inspected, created, modified, or verified.
* Verification evidence obtained (command outputs, commit hashes).
* Known discrepancies or unresolved blockers.
* Explicit recommended next action.

Never create separate, versioned handoff files. Maintain one canonical living ledger.

---

## 11. Long-Prompt & Complex Task Execution Protocol

When a prompt is lengthy, multi-step, or contains multiple dependent requirements:

1. **Preserve Prompt:** Store the complete original prompt in a temporary task file (`.task_<name>.tmp` or scratch directory).
2. **Decompose to Unique Step Identifiers:** Create an ordered checklist mapping every requirement to a unique, stable alphanumeric identifier (e.g. `REQ-01`, `REQ-02`, `REQ-03`).
3. **Map Boundaries & Acceptance Criteria:** Map each identifier to its governing parent document, exact target files/sections, explicit dependencies, and measurable acceptance criteria. Every original requirement must map to one or more execution steps or be explicitly identified as blocked, awaiting approval, out of scope, or unresolved.
4. **Lifecycle State Vocabulary:** Track each step explicitly using standard statuses:
   - `NOT_STARTED` — Defined but work has not begun.
   - `IN_PROGRESS` — Currently under active execution.
   - `BLOCKED` — Execution is obstructed by external tooling, environment, or dependency.
   - `AWAITING_APPROVAL` — Change requires founder sign-off before proceeding.
   - `COMPLETED` — Work finished, but acceptance criteria not yet empirically verified.
   - `VERIFIED` — Concrete empirical evidence (passing tests, clean diffs, verified hashes) confirms acceptance criteria are met. Work must never be marked `VERIFIED` without evidence.
5. **Dependency Execution Order:** Execute tasks in strict dependency order. Never jump to implementation before governing contracts and specs are validated.
6. **Periodic Reassessment:** Re-evaluate the entire requirement set before and after significant steps.
7. **Empirical Evidence:** Record concrete command outputs, file hashes, and test results for completed items.
8. **Final Audit Against Original Prompt:** Audit the final result against the *complete original prompt*, not merely the derived checklist. Never claim completion if any required deliverable remains unverified.
9. **Safe Cleanup:** Retain the temporary task file if work is blocked, incomplete, or awaiting approval. Delete it only after the entire task is audited, permanent records are preserved in Git, no further work depends on it, and deletion is verified safe.
10. **Simplicity Exception:** Do not create temporary files for simple tasks that can be executed and verified reliably in a single turn.

---

## 12. AI-Readable Associative Reference System

For every large or complex authoritative document (Levels 1–4), maintain an associated concise AI-readable reference card in `docs/references/` (e.g. `REF-01` through `REF-04`):

* **Purpose:** Acts as a high-density, token-efficient comprehension and navigation aid.
* **Content Preserved:** Source path, approval status, mandatory constraints, key decisions, parent/child relationships, dependencies, and superseded requirements.
* **Authority Relationship:** Reference cards are subordinate navigation aids, not competing sources of truth. When exact nuance or verbatim text matters, consult the primary source document.
* **Synchronization Mandate:** Whenever an authoritative document is modified, its corresponding reference card and knowledge index entries must be synchronized in the same task.

