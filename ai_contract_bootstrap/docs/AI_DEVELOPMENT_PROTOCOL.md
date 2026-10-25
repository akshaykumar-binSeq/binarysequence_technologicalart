# AI Development Protocol

## Purpose

Provide bounded, repeatable implementation tasks while retaining enough repository context to avoid locally correct but systemically broken changes.

## Context selection

Load the smallest authoritative context sufficient for the task. Minimum context is task-specific; it is not a universal three-file limit. Read existing source and tests when integration, debugging, or behavior verification requires them.

## Task lifecycle

1. Identify the active feature, task, authorized paths, and expected deliverables.
2. Inspect repository ground truth and current tests before editing.
3. Load relevant machine contracts and Markdown rationale.
4. Record contradictions in `docs/DISCREPANCY_REGISTER.md`; do not silently resolve material conflicts.
5. Propose the smallest implementation consistent with approved contracts.
6. Modify only authorized paths by default. Shared contracts, the app shell, or other features require an impact assessment and explicit authorization.
7. Run applicable specification, boundary, token, type, test, and build checks that exist in the repository.
8. Update living documentation only when changes are approved and supported by implementation evidence.
9. Report files changed, commands run, results, known gaps, and unresolved decisions.
10. Stop at the approved sprint/phase boundary and wait for sign-off.

## Safety and quality rules

- A TOML contract is not proof that a behavior is implemented.
- A passing schema validator does not replace unit, integration, accessibility, or visual tests.
- Never claim zero CLS; measure layout shift in representative conditions.
- Do not invent content, product availability, operational guarantees, or mailbox behavior.
- Do not make cross-feature imports to bypass public contracts.
- Do not generate all future feature contracts before pilot validation.
