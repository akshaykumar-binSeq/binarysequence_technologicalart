# Binary Sequence Technological Art — Architecture Index

**Version:** 1.1.0 (confirmed baseline)  
**Status:** Confirmed baseline — approved by founder decisions `DEC-DR03` (Technology Stack) and `DEC-DR04` (Direct Home Landing).

## Purpose

This index is the entry point for developers and AI agents working on the Binary Sequence website. It maps bounded contexts, their public surfaces, route ownership, and authoritative contracts.

## Authority

- Machine contracts (`.toml`) are authoritative for structured, testable facts: IDs, routes, states, transitions, token values, dependencies, and signatures.
- Markdown is authoritative for rationale, trade-offs, editorial direction, and contextual explanation.
- Where narrative text mentions a testable fact, it must reference the canonical machine-contract identifier or be generated from the machine contract.
- Existing code is evidence of current behavior, not authority to silently override approved requirements. Record discrepancies before changing it.
- The live repository, framework version, scripts, and deployment configuration must be inspected before this baseline is treated as implemented.

## Feature inventory

There are eleven feature bounded contexts: `FEAT-02-HOME` is the primary V1 implementation target (`/`), mapping directly to the Home hero without gate obstruction per `DEC-DR04`. `FEAT-01-ONB` is deferred as a blocking experience; any future onboarding must be non-blocking and optional. The remaining nine features map to the approved public screen inventory. See `ARCHITECTURE_INDEX.toml` for IDs, paths, routes, status, and exports.

## Key contracts

- `GLOBAL_DESIGN_SYSTEM.toml`: canonical design token values.
- `CORE_GATEWAY_CONTRACTS.toml`: public gateway DTO contract.
- `AI_DEVELOPMENT_PROTOCOL.toml`: task scoping and lifecycle.
- `src/app/docs/APP_SHELL_ROUTING.toml`: route-to-feature mapping.
- Feature-local `FEATURE_SPEC.toml` and `UI_UX_WIREFRAME.toml`: feature behavior and structure.

## Dependency policy

Features do not import another feature's internal modules. Cross-feature composition uses public root exports or shared gateway contracts. Domain code has no dependency on application, infrastructure, presentation, framework, or browser APIs. Infrastructure implements ports; it does not define domain policy.

## Status vocabulary

`planned`, `in_development`, `experimental`, `available`, `deferred`, `retired`. A status is not evidence of production availability; verify against the repository and deployment before publishing it.

## Implementation rule

Treat this package as a contract bootstrap, not proof that the current application already matches it. First inventory the repository and record differences in `docs/DISCREPANCY_REGISTER.md`.
