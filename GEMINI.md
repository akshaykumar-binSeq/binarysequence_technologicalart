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

## 4. Bounded-Context Knowledge Retrieval Sequence

To eliminate hallucinations and avoid context saturation, agents must never load the entire documentation tree indiscriminately. For every new task, follow this exact retrieval sequence:

1. **Read Root Governance:** Read this `GEMINI.md` to load active operational constraints.
2. **Read Session State:** Read [`docs/ACTIVE_SESSION_STATE.md`](file:///G:/binarysequence_techart/docs/ACTIVE_SESSION_STATE.md) to inspect the current phase, active task, recent commits, and handoff notes.
3. **Consult Index:** Read [`docs/discovery/SOURCE_OF_TRUTH_INDEX.md`](file:///G:/binarysequence_techart/docs/discovery/SOURCE_OF_TRUTH_INDEX.md) to locate authoritative documents relevant to the task.
4. **Retrieve Bounded Contracts:** Follow explicit references to load only the relevant common and feature-specific contracts (e.g. `FEATURE_SPEC.toml`, `UI_UX_WIREFRAME.toml`). Never load contracts of unrelated features.
5. **Inspect Implementation:** Inspect actual files, tests, and Git status before proposing any modifications.
6. **Verify Existence:** Confirm that referenced documents, schemas, and paths physically exist on disk before using them.
7. **Identify Missing Context:** If required information is missing, document the gap instead of inventing requirements.

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
