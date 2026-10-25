# Core Gateway Contracts

Gateway summaries are lightweight, immutable descriptions that let the Home screen and navigation expose other features without importing their internal modules. A gateway is navigation metadata, not a way to invoke another feature's domain logic.

## Boundary rules

- A feature may export its own screen and its own gateway summary from its root `index.ts`.
- The application shell may compose public feature exports.
- Home may consume gateway DTOs/registry output but must not import foreign feature internals.
- Gateway registry composition belongs in `src/core/gateways/` or application composition, not inside a feature's private implementation.
- `src/core/shared-kernel/` should remain small, stable, and framework-independent.

## Canonical data contract

Exact field names, allowed values, and validation constraints are declared in `CORE_GATEWAY_CONTRACTS.toml`. TypeScript types should be generated from or validated against that contract where practical. Do not independently redefine the same schema in multiple locations.

## Availability semantics

Availability values describe the content/product state shown to visitors. They must be evidence-based and reviewed before publication. `available` must not be used merely because a route or component exists locally.
