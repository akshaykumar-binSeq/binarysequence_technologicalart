# REF-04: Domain-Driven Architectural Guidelines Reference

* **Source Document:** [`Binary_Sequence_DDD_Architectural_Methodological_Guidelines_v1.0.md`](file:///G:/binarysequence_techart/Binary_Sequence_DDD_Architectural_Methodological_Guidelines_v1.0.md)
* **Authority Level:** **LEVEL 4: Architectural Methodology & Boundaries**
* **Approval Status:** CONFIRMED & ACTIVE
* **Parent Relationships:** Subordinate to Level 2 Content Spec and Level 3 IA.
* **Child Relationships:** Directs structural organization of `src/` code and Level 5 TOML contracts.

---

## 1. Clean Architecture Layering

Every feature bounded context conforms to 4 strictly ordered horizontal layers:

```text
┌────────────────────────────────────────────────────────────────────────┐
│ 4. PRESENTATION LAYER (UI Components, ViewModels, Route Hooks)         │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Depends on
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 3. APPLICATION LAYER (Use Cases, Ports, Orchestration, Gateway DTOs)   │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │ Depends on
                                    ▼
┌────────────────────────────────────────────────────────────────────────┐
│ 2. DOMAIN LAYER (Pure Business Entities, Invariants, Value Objects)     │
│    Zero dependencies on UI, browser APIs, frameworks, or persistence  │
└────────────────────────────────────────────────────────────────────────┘
                                    ▲
                                    │ Implements Ports
┌───────────────────────────────────┴────────────────────────────────────┐
│ 1. INFRASTRUCTURE LAYER (Persistence, Adapters, Network, Framework)    │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Invariant Boundary Rules

1. **Zero Cross-Feature Internal Imports:** Code within `src/features/<feature_a>/` must **never** import internal modules from `src/features/<feature_b>/`.
2. **Public Gateway Isolation:** If `feature_a` requires services or data from `feature_b`, it must interact exclusively through the public gateway exported from `src/features/<feature_b>/index.ts`.
3. **Shared Kernel Discipline:** Shared primitives (design tokens, global typography, base error types) live in `src/core/` (or common shared contracts). Common code must never import from a feature.
4. **Framework Isolation:** Domain models must remain pure TypeScript/JavaScript. No React, Astro, or Next.js imports inside `domain/`.

---

## 3. 8-Sprint Feature Implementation Lifecycle

Features advance through eight sequential verification gates:

1. **Sprint 1: Discovery:** Requirements mapping and bounded context definition.
2. **Sprint 2: Architecture:** Port definitions and machine contract draft (`FEATURE_SPEC.toml`).
3. **Sprint 3: Domain:** Pure domain entities and unit test verification.
4. **Sprint 4: Application:** Use-case handlers and orchestration ports.
5. **Sprint 5: Infrastructure:** Adapters, data loaders, and network services.
6. **Sprint 6: Presentation:** Responsive components, dark-surface styling, and accessibility.
7. **Sprint 7: Verification:** Contract tests, boundary linting, token compliance.
8. **Sprint 8: Documentation:** Living documentation synchronization and changelog.
