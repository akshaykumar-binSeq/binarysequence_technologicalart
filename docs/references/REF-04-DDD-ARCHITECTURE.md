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

---

## 4. Engineering Constitution & SOLID Summary

* **Axiom 1:** *Complexity should be absorbed by architecture, not transferred to the user.*
* **Axiom 2:** *Reuse should reduce complexity and maintenance—not relocate complexity into a shared abstraction.*
* **SOLID Principles:**
  - **S (Single Responsibility):** One reason to change; split for boundaries and testability, not micro-classes.
  - **O (Open/Closed):** Extension via composition, slots, and strategy patterns; no speculative plugin frameworks.
  - **L (Liskov Substitution):** Implementations preserve base contract semantics, error behavior, and invariants.
  - **I (Interface Segregation):** Narrow, role-specific interfaces; no monolithic "god" contracts.
  - **D (Dependency Inversion):** High-level policy depends on abstractions (ports); zero framework/browser leaks in `domain/`.
* **Component Reuse:** 10-step evidence-based extraction; UI presentation may be shared while business logic remains within feature boundaries; no cross-feature logic in shared widgets (`src/core/`).
* **Sequence Core Rules:** Evidence-driven admission only; 7 horizontal layers; product domain models remain independently governed.

---

## 5. Architectural Quality Gates (ARCH-01 through ARCH-15)

Every implementation task must evaluate against these 15 quality gates:
1. `ARCH-01 Requirement Traceability` — Supported by Level 1–4 specs; zero unauthorized scope.
2. `ARCH-02 Domain Integrity` — Business invariants enforced in pure domain layer.
3. `ARCH-03 Separation of Concerns` — Distinct Domain, Application, Infra, and Presentation boundaries.
4. `ARCH-04 SOLID Compliance` — S, O, L, I, D satisfied without speculative abstraction.
5. `ARCH-05 Dependency Direction` — Inward dependencies only (`Presentation → App → Domain`; `Infra → Ports`).
6. `ARCH-06 Feature Isolation` — Public gateways (`index.ts`) only; zero cross-feature internal imports.
7. `ARCH-07 Reuse Audit` — Existing components/tokens audited before adding new abstractions.
8. `ARCH-08 Abstraction Quality` — Clear single responsibility and proven benefit for every abstraction.
9. `ARCH-09 Shared Component Safety` — Generic widgets do not own feature business rules or domain models.
10. `ARCH-10 Data Ownership` — Single authoritative owner per entity; explicit boundary mapping.
11. `ARCH-11 Error Boundaries` — Errors translated at boundaries; graceful degraded states provided.
12. `ARCH-12 Testability` — Core business behavior testable in memory without full-app launch.
13. `ARCH-13 Regression Protection` — Existing verified behavior and test suites remain passing.
14. `ARCH-14 Documentation Alignment` — TOML contracts, schemas, and session state match code.
15. `ARCH-15 Verification Evidence` — Claims supported by terminal outputs, tests, or diffs.

