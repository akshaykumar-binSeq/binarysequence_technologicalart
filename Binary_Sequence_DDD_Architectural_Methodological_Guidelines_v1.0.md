# Binary Sequence Technological Art

## Domain-Driven Design (DDD) Architectural & Methodological Evaluation

**Document type:** Architecture and implementation guideline  
**Version:** 1.0  
**Status:** Guideline baseline for implementation planning; repository verification is still required  
**Primary public artifact:** Binary Sequence Technological Art website  
**Method:** Feature-first modular architecture informed by Domain-Driven Design (DDD), with an eight-sprint lifecycle applied to each feature

---

## 1. Purpose and scope

This document defines the architectural and methodological guidelines for building the Binary Sequence Technological Art website as a coherent public-facing technological artifact. It connects the approved audience-facing information architecture to implementation boundaries, feature ownership, the Shared Kernel, gateway contracts, accessibility, verification, and a repeatable eight-sprint feature lifecycle.

The objective is not to impose enterprise ceremony on a relatively small website. The objective is to make complexity manageable, preserve the clarity of the public experience, and let the implementation evolve without coupling unrelated parts of the site.

### Governing principle

> **Complexity should stay inside the architecture, not be transferred to the user.**

Supporting positioning:

- **Enterprise engineering. Human experience.**
- Everyone deserves an enterprise solution.
- Technology engineered with the precision of art.

The architecture should protect those principles rather than become an end in itself.

### Scope

This guideline covers:

- Feature-first repository organization.
- DDD-inspired separation of domain, application, infrastructure, and presentation concerns.
- Feature dependency rules and the Shared Kernel.
- Route and public-screen mapping.
- Feature gateway summaries and the composition boundary.
- The repeatable eight-sprint lifecycle.
- Phase 01: Onboarding feature (DEFERRED as a blocking gate per DEC-DR04).
- Phase 02: Home feature (PRIMARY V1 IMPLEMENTATION TARGET per DEC-DR04).
- Accessibility, SEO, performance, resilience, security, testing, and living documentation.
- Implementation readiness and sign-off criteria.

This document does **not** prove that the architecture or features already exist in code, that a performance target has been achieved, or that any implementation has passed testing. Those claims require repository inspection and recorded verification evidence.

---

## 2. Source precedence and change control

Use the following precedence when making implementation decisions:

1. **Foundational identity, founder website vision, and strategic playbook** — governing purpose, positioning, values, and non-negotiable principles.
2. **Audience-Facing Content Specification v1.1** — approved public-screen naming, content responsibilities, and audience-facing commitments.
3. **Information Architecture v1.0** — routes, navigation, screen hierarchy, user journeys, and launch scope.
4. **This DDD Architectural & Methodological Guideline** — implementation boundaries and delivery method, subordinate to the approved content and strategy.
5. **Existing repository and runtime behaviour** — evidence of what is currently implemented; inspect before modifying.
6. **Implementation proposals** — may clarify details but must not silently override the sources above.

If the source documents disagree, record the discrepancy in a **Discrepancy Register**. Do not silently invent a resolution. Resolve it against the higher-precedence source, or request an explicit decision if the sources do not settle the issue.

### Status vocabulary

Use explicit status labels in documentation and reviews:

- **Implemented** — present in code and verified against acceptance criteria.
- **Partially implemented** — some required behaviour exists; remaining gaps are listed.
- **Planned** — agreed but not yet implemented.
- **Experimental** — under evaluation and not a stable public commitment.
- **Deferred** — deliberately postponed, with rationale.
- **Unverified** — claimed or observed but not yet supported by sufficient evidence.

Do not label a feature “complete” merely because its folder or initial UI exists.

---

## 3. Architectural approach

### 3.1 Feature-first modularity informed by DDD

Organize the application around cohesive features and their responsibilities, rather than creating a single global folder for every component of the same technical type.

Target shape:

```text
src/
  app/
    routing/
    providers/
    composition/
  core/
    navigation/
    gateways/
    accessibility/
    configuration/
    errors/
    logging/
    shared-kernel/
  features/
    <feature-name>/
      domain/
      application/
      infrastructure/
      presentation/
      docs/
      index.ts
```

This is a target structure, not permission to restructure the existing repository blindly. First inspect the current tree, build setup, route implementation, and dependency graph. Preserve working conventions unless a change is justified and approved.

### 3.2 Four feature layers

#### `domain/`
Owns business concepts and rules that are meaningful independently of UI frameworks and persistence.

May contain:
- Entities, when identity and lifecycle matter.
- Value Objects, when a value has meaningful validation or semantics.
- Domain services, when a rule does not naturally belong to one entity or value object.
- Domain events, only where a real event-driven need exists.
- Domain-level invariants and pure validation.

Must not depend on React, routing libraries, browser storage, network clients, or other feature internals.

Do not create entities, aggregates, repositories, or value objects merely to satisfy a DDD checklist. Use the simplest model that accurately represents the domain.

#### `application/`
Coordinates use cases and application workflows.

May contain:
- Use-case functions or application services.
- Input/output DTOs where they clarify boundaries.
- Ports/interfaces for persistence, clocks, browser capabilities, or external services.
- Application-level orchestration and error mapping.

It should depend on the domain and on abstractions for external capabilities, not directly on concrete browser or network details when those details can be isolated behind ports.

#### `infrastructure/`
Implements technical capabilities and ports.

May contain:
- Browser storage adapters.
- HTTP/API adapters.
- Analytics or telemetry adapters, if approved and privacy-appropriate.
- Serialization, environment access, and integration-specific code.

Infrastructure is replaceable. Its details must not leak into domain rules.

#### `presentation/`
Owns the user-facing rendering and interaction for the feature.

May contain:
- Pages, components, view models, hooks, and feature-specific UI state.
- Accessibility semantics and interaction behaviour.
- Presentation-only formatting and animation.

Presentation may invoke application use cases. It should not independently reimplement domain rules or access another feature's internal files.

### 3.3 Dependency direction

Prefer the following dependency direction:

```text
presentation  ──► application ──► domain
infrastructure ────────────────► application ports / domain types
app composition ──► public feature entry points and core contracts
```

The exact imports will depend on the existing stack, but the governing constraints remain stable:

- Domain rules do not depend on presentation or infrastructure.
- Application workflows do not depend on concrete UI components.
- Infrastructure implements ports instead of becoming the owner of business rules.
- A feature exposes only the public contracts intentionally exported from its root `index.ts`.

---

## 4. Feature boundaries and the Shared Kernel

### 4.1 Strict feature isolation

A feature must **never import another feature's internal files**. For example, code inside `features/home` must not import `features/products/presentation/...` or `features/sequence-blueprint/domain/...` directly.

Allowed cross-feature communication should use an intentionally published contract, such as:

- A small immutable gateway summary.
- A public feature API exported from the feature root.
- A route or navigation contract owned by the application composition layer.
- A narrowly defined shared domain concept, only if it is genuinely common and stable.

Do not use a public export as a loophole for exposing a feature's entire internal implementation. Keep each feature's public surface small.

### 4.2 Shared Kernel

The Shared Kernel lives in `src/core/shared-kernel/` and contains only genuinely shared, stable concepts whose meaning is agreed across consuming features.

Candidates might include small primitives or common result/error types, but only when there is a concrete need. A utility does not belong in the Shared Kernel merely because two components currently use it.

Rules:

1. Keep the Shared Kernel small and dependency-light.
2. Do not place feature-specific business rules in it.
3. Avoid importing UI components into it.
4. Record changes that affect multiple features.
5. If a concept has different meanings in different features, keep separate models rather than forcing a false common abstraction.

### 4.3 Feature root exports

Each feature may provide a root `index.ts` that exports the intended public surface only. Examples include a gateway configuration or a deliberately public type. Internal entities, adapters, page components, and implementation details should remain private unless another module has a documented reason to consume them.

### 4.4 Architecture checks

Where practical, add lint rules, dependency-boundary checks, or automated tests to prevent imports that cross into another feature's internal directories. A written rule alone is not sufficient if the repository can enforce it mechanically.

---

## 5. Feature gateway and home-page composition

### 5.1 Purpose

The Home screen needs to summarize and link to major areas without importing their internal implementation. A small `FeatureGatewaySummary` contract supports this separation and helps maintain **two-scroll scannability**: users can understand the core proposition quickly, while deeper material remains available on dedicated screens.

Place the contract in a core-owned location such as:

```text
src/core/gateways/FeatureGatewaySummary.ts
```

Keep gateway registration/composition in `src/core/gateways/` or the application composition layer. Choose one canonical owner after inspecting the repository; avoid duplicate registries.

### 5.2 Illustrative contract

```ts
export type FeatureGatewaySummary = Readonly<{
  id: string;
  title: string;
  summary: string;
  href: string;
  tier: "commercial" | "exploratory" | "utility";
  availability: "available" | "planned" | "hidden";
}>;
```

This is a suggested contract, not a claim that these exact fields already exist. Confirm naming and routing conventions against the repository before adopting it. Add fields only where a real consumer requires them.

### 5.3 Ownership and consumption

- The core contract defines the shape.
- Each feature can expose a lightweight immutable gateway configuration from its public entry point.
- The application composition layer collects approved gateway configurations and supplies them to Home/navigation.
- Home consumes gateway data, not another feature's internal components or domain model.
- Gateway `availability` must reflect verified product/content status. Do not advertise a planned or unverified feature as available.
- The registry must not create circular imports between `core`, `app`, and `features`.

### 5.4 Home screen boundary

Home should provide a concise entry point to the studio and its work, not become a monolithic dumping ground for every detailed explanation.

Home may contain:
- A clear title and concise supporting statement.
- A short, scannable explanation of the studio's approach.
- A limited set of gateway summaries.
- A restrained interactive preview of the sequence method.
- Lightweight modals or overlays such as `sequence-scrubber` or `complexity-toggle`, if supported by the approved design and implemented accessibly.
- Clear route buttons to the dedicated screens.

Home should not absorb:
- The full Sequence Method explanation.
- The complete Sequence Blueprint sales/engagement detail.
- The full product documentation catalogue.
- The engineering notebook or research archive.
- Governance, privacy, and service-boundary documents.

Interactive previews must have a meaningful static fallback, keyboard operation, visible focus, reduced-motion support, and a usable mobile presentation. Do not make essential content available only after an animation or interaction.

---

## 6. Canonical public-screen and feature mapping

The public-screen names below follow the Audience-Facing Content Specification v1.1. Internal feature names may be more concise, but they must remain traceable to the canonical screen names.

| Screen | Canonical public responsibility | Suggested feature directory | Notes |
|---|---|---|---|
| 01 | Home | `src/features/home/` | Main public entry point; concise proposition and gateways. |
| 02 | Studio & Philosophy | `src/features/studio/` or `src/features/studio-philosophy/` | Choose one canonical directory name after checking the existing repository; do not create both for the same responsibility. |
| 03 | Products & Systems | `src/features/products/` | Product summaries and verified availability/status. |
| 04 | How We Work — The Sequence Method | `src/features/sequence-method/` | Canonical name; avoid using `solutions` as the implementation name for this screen. |
| 05 | Sequence Blueprint — Start an Idea (Phase 0 Engagement) | `src/features/sequence-blueprint/` | Describe scope and deliverables accurately; avoid implying unapproved guarantees. |
| 06 | Contact & Project Inquiry | `src/features/contact/` | Inquiry entry point and contact routes. |
| 07 | Engineering & Field Notebook | `src/features/engineering-notebook/` | Technical writing and field notes. |
| 08 | Research & Experiments | `src/features/research-experiments/` | Distinguish research, experiments, and stable product commitments. |
| 09 | Founder — Akshay Kumar VJ | `src/features/studio-founder/` | Founder profile and practice; credentials and claims must be verified. |
| 10 | Trust, Governance & Operational Continuity | `src/features/continuity-trust/` | Privacy, boundaries, ownership/access, backup and handover information as approved. |

**Onboarding** is an implementation feature (`src/features/onboarding/`), not automatically an additional public screen in the ten-screen information architecture. Its experience must support the public content rather than block access to it.

### 6.1 Primary and exploratory tiers

**Primary/commercial path (Tier 1):**
- Home
- Studio & Philosophy
- Products & Systems
- How We Work — The Sequence Method
- Sequence Blueprint — Start an Idea
- Contact & Project Inquiry

**Exploratory path (Tier 2):**
- Engineering & Field Notebook
- Research & Experiments
- Founder Practice
- Trust, Governance & Operational Continuity

**Utility/governance destinations:**
- Privacy Notice
- Terms & Service Boundaries

Treat these tiers as different depths of exploration within one coherent website, not separate websites. Final labels, route slugs, footer placement, and navigation details must remain consistent with the approved IA and actual routing implementation.

---

## 7. Standard eight-sprint feature lifecycle

Every feature uses the same eight-sprint lifecycle, scaled proportionately to its complexity. “Sprint” denotes a defined work stage in this method; it does not imply a fixed duration unless the project separately agrees one.

### Sprint 01 — Domain Alignment & Entity Specification

**Purpose:** Understand the feature's real responsibility before designing its implementation.

Activities:
- Read the relevant source sections and existing code.
- Define the feature's responsibility and explicit non-responsibilities.
- Identify meaningful entities, value objects, invariants, and state transitions where justified.
- Identify application use cases and external capabilities.
- Map dependencies and expected public contracts.
- Record assumptions, unresolved questions, and discrepancies.

Exit evidence:
- Feature scope and domain notes.
- Initial feature specification.
- Proposed dependency map.
- Acceptance criteria and initial test strategy.
- Explicit list of decisions requiring approval.

### Sprint 02 — UI & Functional Slice

**Purpose:** Deliver the smallest coherent end-to-end slice of the feature.

Activities:
- Implement the necessary application use case(s).
- Add ports and adapters only where required.
- Build the presentation and interaction.
- Connect routing/composition through approved boundaries.
- Include loading, empty, failure, dismissal, and fallback states as relevant.

Exit evidence:
- A working slice connected to the application.
- Tests for the main behaviour and important failure paths.
- No avoidable dependency-boundary violations.

### Sprint 03 — Domain Verification & Enhancement Suggestions

**Purpose:** Check that the implementation reflects the intended domain and identify improvements without silently expanding scope.

Activities:
- Compare behaviour to acceptance criteria and source documents.
- Test domain rules and state transitions.
- Review user journeys and edge cases.
- List improvements as accepted, rejected, or deferred proposals.
- Ask for a decision when an enhancement changes the approved experience or commitment.

Exit evidence:
- Verification results.
- Prioritized gap/enhancement list.
- Explicit decisions for any scope-changing proposal.

### Sprint 04 — Rebuild to “Mark the Point” (Complete Decoupling)

**Purpose:** Consolidate the feature around its intended boundaries after the functional slice reveals real dependencies.

Activities:
- Remove direct imports of other feature internals.
- Move cross-feature integration to public contracts or composition.
- Separate domain rules from UI and infrastructure details.
- Remove accidental duplication and circular dependencies.
- Rebuild and run architecture checks.

Exit evidence:
- Dependency boundary review.
- Successful build and relevant tests.
- Recorded exceptions, if any, with rationale and owner.

“Complete decoupling” means enforcing the agreed feature boundaries; it does not mean eliminating all legitimate collaboration through explicit contracts.

### Sprint 05 — Quality & Performance Profiling

**Purpose:** Verify usability, accessibility, type safety, and measured performance.

Activities:
- Run static analysis, type checks, and tests.
- Inspect layout shifts and rendering behaviour using measurements.
- Test keyboard operation, focus, semantics, contrast, zoom/reflow, and reduced motion.
- Inspect mobile and narrow viewport behaviour.
- Check loading and fallback behaviour.

Exit evidence:
- Test and accessibility results.
- Measured performance evidence where a metric is claimed.
- Known limitations and remediation tasks.

### Sprint 06 — Security Hardening & Resilience

**Purpose:** Reduce avoidable risk and ensure failures degrade safely.

Activities, where relevant to the feature:
- Validate external and persisted input.
- Handle storage denial, corruption, and quota errors.
- Avoid unsafe HTML injection and unsafe URL handling.
- Check permissions and data collection boundaries.
- Avoid exposing secrets or sensitive data in client code/logs.
- Verify failure states and safe fallbacks.

Exit evidence:
- Security/resilience checklist.
- Tests for relevant failure cases.
- Documented risks or items that need specialist review.

This stage is not a penetration test or formal security certification unless that work is separately scoped and performed.

### Sprint 07 — Living Feature Specification

**Purpose:** Keep implementation and documentation aligned.

Canonical location:

```text
src/features/<feature-name>/docs/FEATURE_SPEC.md
```

The name `FEATURE_DOMAIN_AND_TECHNICAL_SPEC.md` is also acceptable if the repository adopts it consistently. Do not maintain two competing files with the same purpose.

The specification should include:
- Feature purpose and non-goals.
- Domain concepts and invariants, if any.
- Use cases and state transitions.
- Public contracts and dependencies.
- Layer responsibilities and important files.
- User-facing states and accessibility expectations.
- Persistence/integration behaviour.
- Acceptance criteria and test evidence.
- Security, privacy, and performance considerations.
- Current status, known gaps, and deferred work.
- Relevant ADRs and source-document references.

### Sprint 08 — Phase Commit

**Purpose:** Record a verifiable checkpoint before starting the next feature phase.

Activities:
- Run the agreed verification suite.
- Confirm the feature spec reflects the code.
- Review scope, boundary, accessibility, and resilience acceptance criteria.
- Record remaining issues and whether they block progression.
- Commit the completed phase with the agreed message convention.

For Phase 01, the proposed commit message is:

```text
feat(onboarding): complete phase 01 lock
```

Use this message only when the phase actually satisfies its agreed acceptance criteria. A commit message is not itself proof of completion.

---

## 8. Phase 01 — Onboarding feature (DEFERRED)

**Feature path:** `src/features/onboarding/`  
**Status:** **Deferred from V1 Launch (`DEC-DR04`).**  
> **GOVERNANCE NOTICE (DEC-DR04):** Per confirmed founder decision `DEC-DR04`, mandatory onboarding is deferred as a blocking gate. Route `/` maps directly to `FEAT-02-HOME`. Visitors must see the Home hero immediately upon entering the site. Any future onboarding experience must be purely optional, dismissible, and non-blocking. Essential Home content must never depend on completing an introduction.

### 8.1 Responsibility

Onboarding should provide a lightweight, optional introduction to the site's experience where useful. It must not become a gate that prevents access to the essential public content. The precise content, trigger, dismissal behaviour, and return-visit behaviour must be verified against the existing implementation and approved experience before implementation.

### 8.2 Domain and state model

Do not assume that onboarding requires a complex domain model. First determine whether the behaviour is adequately represented by a small state model, such as:

- Not evaluated.
- Eligible to show.
- Visible.
- Dismissed/completed for the relevant visit or persistence scope.

The exact states and transitions must match the approved behaviour. If no meaningful domain invariant exists, a simple application/presentation state may be more appropriate than an artificial entity or aggregate.

### 8.3 Persistence and fallback

If the onboarding preference must persist, define a small application port and a browser-storage adapter. Do not access `localStorage` directly from domain logic.

Required resilience considerations:

- `localStorage` may be unavailable, blocked, or throw an exception.
- Storage access can fail in privacy-restricted contexts or during server rendering.
- Stored data may be missing, malformed, or from an older version.
- Storage quota errors must not break the page.
- When persistence fails, fall back to in-memory state for the current runtime/session where feasible.
- Onboarding failure must not block the core page content.

Use the smallest persistence mechanism that satisfies the agreed requirement. Do not add cookies, analytics, or remote tracking merely to record onboarding completion.

### 8.4 Accessibility and SEO

- Respect `prefers-reduced-motion: reduce` by avoiding or simplifying non-essential motion.
- Make dismissal and navigation keyboard-accessible, with visible focus and correct semantics.
- Ensure overlays, if used, manage focus appropriately and return focus when closed.
- Keep essential public content present in server-rendered or initial HTML where the stack supports it; progressive enhancement should add interaction rather than hide the site's core proposition.
- Search-engine access must not depend on a client-side onboarding interaction.
- Bot-specific bypass logic is not the primary SEO strategy. If any bot detection is retained, document why it is needed and test it. Do not rely on fragile user-agent detection to make essential content indexable.
- Do not trap keyboard users or force visitors through an animation before they can reach the site.

### 8.5 Performance and layout stability

A CSS-only transition does **not** guarantee `CLS = 0`. Layout shifts depend on the geometry and timing of rendered content, not merely on whether JavaScript is used for animation.

Guidelines:
- Reserve the necessary layout space where practical.
- Prefer opacity/transform animations that do not unexpectedly alter document flow.
- Avoid injecting large blocks above already-visible content without reserved space.
- Measure Cumulative Layout Shift using suitable tooling and representative scenarios.
- Report measured results, not assumed results.

A useful target is **CLS < 0.05** for the relevant page experience, subject to the site's measurement method and agreed performance criteria. Do not claim absolute zero without repeatable evidence and a clear definition of the test conditions.

### 8.6 Phase 01 sprint plan

| Sprint | Focus | Required output |
|---|---|---|
| 01.1 | Domain Alignment & Entity Specification | Scope, state/domain model where justified, dependency map, acceptance criteria, discrepancy register. |
| 01.2 | UI & Functional Slice | Working onboarding behaviour, application/persistence port if needed, adapter, presentation, tests. |
| 01.3 | Domain Verification & Enhancement Suggestions | Verified state transitions, edge cases, and documented enhancement decisions. |
| 01.4 | Rebuild to “Mark the Point” | Feature boundary review, removal of direct cross-feature internal imports, successful build/tests. |
| 01.5 | Quality & Performance Profiling | Accessibility/type/test results and measured layout/performance evidence. |
| 01.6 | Security Hardening | Storage failure/quota handling, malformed-state validation, injection and unsafe-input review where applicable. |
| 01.7 | Living Feature Document Lock | Updated `src/features/onboarding/docs/FEATURE_SPEC.md`. |
| 01.8 | Phase Commit | Acceptance review, issue register, and commit `feat(onboarding): complete phase 01 lock` when criteria are met. |

### 8.7 Phase 01 acceptance checklist

- [ ] Existing implementation inspected before changes.
- [ ] Behaviour agrees with the approved content/IA and any explicit onboarding decision.
- [ ] Essential page content remains accessible if onboarding is skipped, fails, or is unavailable.
- [ ] Reduced-motion preference is respected.
- [ ] Keyboard and focus behaviour are usable.
- [ ] Persistence failure degrades to a safe in-memory/current-session fallback where applicable.
- [ ] Stored values are validated and failures do not crash the page.
- [ ] No cross-feature internal imports are introduced.
- [ ] Type checks, relevant tests, and production build pass.
- [ ] Performance statements are backed by measurement.
- [ ] Living feature specification matches the code.
- [ ] Remaining gaps and deferred items are recorded.

---

## 9. Phase 02 — Home feature (PRIMARY V1 IMPLEMENTATION TARGET)

**Feature path:** `src/features/home/`  
**Status:** **Primary V1 Implementation Target (`DEC-DR04`).**  
> **GOVERNANCE NOTICE (DEC-DR04):** Per confirmed founder decision `DEC-DR04`, `FEAT-02-HOME` is the primary V1 implementation target. Route `/` maps directly to this feature. Visitors see the Home hero immediately upon entry without any gate obstruction. All essential Home content is available in the initial rendered HTML. Technology baseline is Next.js App Router + TypeScript + Firebase (`DEC-DR03`).

### 9.1 Responsibility

Home communicates the studio's central proposition and provides clear paths to the rest of the site. It should be commercially legible first and allow deeper exploration without forcing every visitor through the same level of detail.

### 9.2 Required boundaries

- Home owns its own page composition and presentation behaviour.
- Home reads gateway summaries through the approved contract/registry.
- Home does not import product pages, sequence-method internals, blueprint internals, notebook internals, or founder-page internals.
- Detailed content remains owned by the relevant feature.
- Route changes are handled through the application's routing boundary.
- Gateway availability must be based on verified content/product status.

### 9.3 Suggested functional slice

The initial slice should be deliberately small:

1. A clear title and concise supporting statement.
2. A short statement of what Binary Sequence Technological Art does.
3. A small set of approved gateways with accurate availability labels.
4. Clear paths to the Sequence Method, Sequence Blueprint, Products & Systems, and Contact.
5. Optional interactive method preview only if it can be implemented without obscuring essential information.

The precise copy and visual treatment must follow the approved content specification and design decisions. Do not invent metrics, product outcomes, customer logos, case studies, or claims that are not supported by source material.

### 9.4 Two-scroll scannability

“Two-scroll scannability” is a content-design goal, not a guarantee that every screen or device will fit an identical amount of content. Verify it on representative viewport sizes and devices.

Evaluate:
- Can a visitor quickly identify what the studio offers?
- Is the next action clear?
- Are detailed explanations deferred to dedicated pages?
- Do interactive previews remain optional?
- Does the mobile layout preserve hierarchy and legibility?

### 9.5 Phase 02 sprint plan

Apply the standard eight-sprint lifecycle:

- **02.1 Domain Alignment & Entity Specification:** define Home's responsibility, gateway data needs, content boundaries, and route contracts.
- **02.2 UI & Functional Slice:** implement the page composition and gateway display using approved contracts.
- **02.3 Domain Verification & Enhancement Suggestions:** validate the visitor journey, status accuracy, and scannability; log proposed changes.
- **02.4 Rebuild to “Mark the Point”:** remove direct feature-internal dependencies and consolidate composition.
- **02.5 Quality & Performance Profiling:** test responsiveness, accessibility, layout stability, loading behaviour, and type safety.
- **02.6 Security Hardening:** validate any user-controlled inputs and URLs; avoid exposing private configuration or unsafe HTML.
- **02.7 Living Feature Document Lock:** update `src/features/home/docs/FEATURE_SPEC.md`.
- **02.8 Phase Commit:** verify acceptance criteria, document remaining gaps, and commit only after the phase is genuinely complete.

### 9.6 Phase 02 acceptance checklist

- [ ] Home reflects approved positioning and content hierarchy.
- [ ] Gateway content comes through the approved public contract.
- [ ] Home does not import another feature's internal files.
- [ ] Product and feature availability is verified and accurately represented.
- [ ] Primary commercial routes are discoverable.
- [ ] Exploratory content remains accessible without crowding the primary path.
- [ ] Any interactive preview has a static, accessible fallback.
- [ ] Keyboard, reduced-motion, mobile, and focus behaviour are tested.
- [ ] Scannability is checked on representative viewports.
- [ ] Build, type checks, tests, and relevant performance checks pass.
- [ ] Home feature specification and status are current.

---

## 10. Verification strategy

Verification should be proportional to risk and feature complexity. Tests should prove meaningful behaviour, not merely mirror the folder structure.

### 10.1 Domain tests

Where domain logic exists, test:
- Invariants and validation rules.
- State transitions.
- Boundary conditions.
- Invalid inputs and expected failures.

Domain tests should normally be fast and independent of the browser or network.

### 10.2 Application tests

Test:
- Use-case orchestration.
- Port interactions and error handling.
- Correct decisions for success, failure, missing data, and persistence failure.
- That application workflows do not depend on presentation implementation.

### 10.3 Infrastructure tests

Test adapters against their actual responsibilities:
- Storage reads/writes and exceptions.
- Serialization and malformed data.
- Network/error mapping, if applicable.
- Environment-specific assumptions.

Use integration tests where a mocked unit test cannot adequately prove the adapter's behaviour.

### 10.4 Presentation and end-to-end tests

Test the user-visible paths that matter:
- Initial load and navigation.
- Keyboard operation and focus.
- Dismissal/return behaviour for onboarding, if applicable.
- Responsive layouts and essential content visibility.
- Error/fallback behaviour.
- Route and gateway accuracy.

Automated accessibility checks are useful but do not replace manual keyboard and assistive-technology review where appropriate.

### 10.5 Architecture verification

Use static rules or tests where feasible to detect:
- Cross-feature imports into internal directories.
- Circular dependencies.
- Domain imports from presentation or infrastructure.
- Duplicate gateway registries or competing feature specs.

Document any exception explicitly rather than allowing it to become an untracked convention.

---

## 11. Living documentation and architectural decisions

### 11.1 Feature specification

Each feature should own one canonical living specification:

```text
src/features/<feature-name>/docs/FEATURE_SPEC.md
```

The document must be updated as part of Sprint 07 and reviewed at the phase commit. Avoid maintaining a separate document that contradicts the code or duplicates the same information without a clear purpose.

### 11.2 Architecture Decision Records (ADRs)

Record decisions that are difficult to reverse or that affect multiple features, such as:
- Route and gateway ownership.
- Shared Kernel changes.
- Persistence choices with user-experience implications.
- Cross-feature contracts.
- Significant performance or accessibility trade-offs.

Each ADR should briefly capture context, decision, alternatives considered, consequences, status, and date. A lightweight format is sufficient; do not create ADRs for trivial implementation details.

### 11.3 Discrepancy Register

Maintain a register when documentation, current code, and proposed implementation differ. Suggested fields:

| Field | Meaning |
|---|---|
| ID | Stable reference. |
| Area | Feature, route, content, architecture, or governance. |
| Source expectation | Exact expectation and source document/section. |
| Current evidence | What repository inspection or testing shows. |
| Gap | The difference between expectation and current behaviour. |
| Proposed resolution | Smallest safe resolution. |
| Decision/status | Open, approved, rejected, deferred, or verified. |

This prevents silent content or architecture changes during implementation.

---

## 12. Security, privacy, and operational continuity

The architecture must support responsible claims; it must not be used to imply guarantees that have not been tested or agreed.

### Security and privacy

- Keep secrets out of client-side source and browser storage.
- Collect only data needed for an explicit purpose.
- Validate user-controlled inputs and external URLs at the relevant boundary.
- Avoid unsafe HTML injection.
- Do not introduce analytics or tracking without an approved purpose and appropriate disclosure.
- Document third-party integrations and relevant data flows where they exist.
- Do not claim “100% secure,” “zero bugs,” or equivalent absolute assurances.
- Do not describe routine feature testing as a formal security audit or penetration test.

### Operational continuity

The site and its public commitments should be realistic about independent practice and future maintenance. Where relevant, document:
- Source-code ownership and repository access.
- Deployment and environment access.
- Backup and recovery responsibilities.
- How another developer could understand and hand over the implementation.
- Maintenance and support boundaries.
- What is included in a specific engagement and what is not.

Documentation can improve continuity, but it cannot guarantee uninterrupted availability or support. State only what can actually be delivered.

### Sequence Blueprint boundaries

Sequence Blueprint may be presented as a paid Phase 0 discovery/architecture engagement if that matches the approved commercial decision. Scope, deliverables, fee, timeline, ownership/IP, revision limits, and exclusions should be agreed explicitly. Do not imply that it automatically includes penetration testing, legal advice, a fixed implementation quote, or guaranteed future costs unless those are expressly included and substantiated.

---

## 13. V1 scope discipline

The first release should favour a clear, trustworthy, maintainable public experience over speculative complexity.

Prioritize:
- Approved public screens and routes.
- Accurate product and service information.
- Reliable navigation and contact/inquiry flow.
- Accessible core content and interactions.
- Responsive presentation.
- Clear privacy and service boundaries.
- Feature isolation and living documentation.
- Verified builds, tests, and measured claims.

Defer features that do not serve an approved visitor need or cannot be verified in the current scope. Examples may include elaborate interactive visualizations, unapproved analytics, complex persistence, speculative backend integrations, or an extensive CMS—unless the source documents or repository establish a concrete requirement.

Do not use DDD as a reason to over-engineer a static content page. A feature may legitimately have a very small domain layer or no domain entities at all.

---

## 14. Implementation readiness and first action

The DDD blueprint and eight-sprint lifecycle may be treated as the **approved structural direction for planning**, but this approval is not evidence that the existing repository already conforms to it. Before implementation begins, inspect the actual repository and compare it with the approved documents.

> **GOVERNANCE NOTICE (DEC-DR04):** Sprint 01 (Onboarding) is **DEFERRED** as a blocking gate per confirmed founder decision `DEC-DR04`. The primary implementation sequence begins directly with **Phase 02 / Sprint 02: Home Feature (`FEAT-02-HOME`)** using Next.js App Router, TypeScript, and Firebase (`DEC-DR03`).

### Required first action: Sprint 02.1 — Home Feature Setup & Baseline

1. Inspect the current repository structure, framework, route system, build commands, tests, and current onboarding behaviour.
2. Read the relevant sections of Audience-Facing Content Specification v1.1, Information Architecture v1.0, and the foundational strategy documents.
3. Report what exists, what is missing, and what is uncertain. Do not infer implementation status from a document alone.
4. Create or update `src/features/onboarding/docs/FEATURE_SPEC.md` with the feature purpose, current behaviour, proposed state model where justified, dependency map, acceptance criteria, and test plan.
5. Create a Discrepancy Register for any mismatch between approved documents and the code.
6. Identify only the minimal files and changes required for Sprint 01.1.
7. Stop for review before moving to Sprint 01.2 if the domain model, onboarding behaviour, or architectural boundary requires an unresolved decision.

### Sprint 01.1 deliverables

- Current-state repository summary.
- Onboarding scope and non-goals.
- State/domain model, only where justified.
- Dependency map and boundary assessment.
- Draft living feature specification.
- Acceptance criteria and initial verification plan.
- Discrepancy Register and unresolved questions.
- Explicit list of proposed changes for Sprint 01.2, without implementing them prematurely.

Do not begin Phase 02 merely because Phase 01 files exist. Begin it after the agreed Phase 01 acceptance criteria have been verified and the phase status has been recorded.

---

## 15. Final architectural rule

> **The architecture exists to protect the product's clarity, not to make the product serve the architecture.**

Use DDD where it clarifies domain meaning, feature boundaries, and change ownership. Use the Shared Kernel only for genuinely shared concepts. Keep cross-feature communication explicit. Keep public content aligned with the approved information architecture. Measure performance instead of promising it. Document what exists, what is planned, and what remains uncertain.

The intended outcome is a website whose engineering is disciplined and whose experience remains calm, direct, accessible, and human.

---

## 16. Engineering Constitution: SOLID, Clean Separation, and Reusable Components

### 16.1 Governing Philosophy and Ten Mandates

When designing, modifying, or reviewing software across the studio's projects, engineers and AI coding agents must follow two governing axioms:

> **Complexity should be absorbed by architecture, not transferred to the user.**  
> **Reuse should reduce complexity and maintenance—not relocate complexity into a shared abstraction.**

The objective is not to maximize the count of layers, interfaces, abstractions, packages, or base classes, but to protect business rules from unnecessary infrastructure churn, maintain clean separation of responsibilities, reuse proven capabilities appropriately, and ensure future modifications do not trigger cascading breaks in unrelated subsystems.

The ten mandatory engineering objectives are:
1. **Domain-Driven Design (DDD):** Model the actual business domain rather than merely organizing directories.
2. **SOLID Principles:** Applied pragmatically according to actual responsibilities and change patterns.
3. **Clean Separation of Concerns:** Strict layer separation across Domain, Application, Infrastructure, and Presentation.
4. **Dependency Inversion:** Explicit abstractions at architectural boundaries; high-level policy never depends on low-level detail.
5. **High Cohesion and Controlled Coupling:** Modules change together for coherent reasons; cross-feature coupling is tightly governed.
6. **Reusable Common Components:** Extracted only when supported by concrete evidence of repeated use and stable contracts.
7. **Consistent Shared Foundations:** Centralized semantic tokens and shared interaction primitives.
8. **Testability & Maintainability:** Business behavior testable in total isolation from UI and database runtimes.
9. **Explicit Architectural Contracts:** Strict schemas and gateways governing layer interactions and bounded context boundaries.
10. **Evidence-Based Abstraction:** Concrete operational need precedes abstraction; speculative generalization is prohibited.

---

### 16.2 SOLID Principles in Concrete Practice

SOLID must be demonstrated through code structure, dependency direction, and test verification—not merely asserted:

* **S — Single Responsibility Principle (SRP):**  
  A module, class, function, or component must have one coherent responsibility and one primary reason to change.
  - A repository handles persistence operations, not UI rendering.
  - A widget renders a visual presentation responsibility, not an entire business workflow.
  - A use case coordinates a single meaningful application transaction or user action.
  - A mapper translates between explicit data representations across boundaries.
  - A storage adapter manages media uploads, not the overarching domain lifecycle.
  *Boundary Rule:* Do not split cohesive code into micro-classes for every individual statement; split when doing so establishes a meaningful boundary, enhances testability, or isolates change propagation.

* **O — Open/Closed Principle (OCP):**  
  Design extension points where genuine variability exists without editing stable core logic.
  - Provide repository interfaces capable of supporting multiple legitimate persistence adapters.
  - Use strategy patterns for distinct, evolving business or pricing policies.
  - Support reusable UI components via explicit slots, composable children, and typed configuration objects.
  *Boundary Rule:* Prohibit speculative plugin frameworks or multi-level inheritance hierarchies created for hypothetical changes. Prefer direct composition and explicit contracts.

* **L — Liskov Substitution Principle (LSP):**  
  Subtypes and implementations must strictly honor the behavioral contracts, invariants, error specifications, and guarantees of their abstractions.
  - A test mock or secondary storage adapter must adhere to the exact promise and failure semantics of the production contract.
  - Prohibit inheritance hierarchies where child classes break or override the semantic guarantees of the base class.

* **I — Interface Segregation Principle (ISP):**  
  Keep interfaces focused on the specific capabilities consumers actually require.
  - Avoid monolithic, "god" repository or service interfaces that force consumers to depend on operations they never invoke.
  - Favor narrow, role-oriented contracts (e.g. read-only query interfaces segregated from mutation commands).
  *Boundary Rule:* Do not fragment a small, cohesive interface into dozens of single-method interfaces that add friction without decoupling benefits.

* **D — Dependency Inversion Principle (DIP):**  
  High-level business policy must never depend directly on low-level technical implementation details.
  - High-level use cases and domain models depend on abstractions (ports).
  - Low-level infrastructure adapters implement those abstractions.
  - Concrete dependencies are wired at the composition root (e.g. app entry point or test harness).
  *Prohibited Patterns:* Direct database SDK calls in domain models; framework/browser imports (`window`, `localStorage`, `next/*`, `react`) in the domain layer; service locators used to bypass explicit constructor injection; hidden global singletons making tests order-dependent.

---

### 16.3 Common Components, Widgets, and Reusable Capabilities

#### 16.3.1 Reuse Criteria
Inspect existing capabilities before authoring new ones. If an existing component satisfies the requirement, reuse or extend it. However, **reuse must reduce overall maintenance burden**. If sharing a component forces complex conditional branches and boolean flags, keep the implementations independent.

#### 16.3.2 Separation of Shared UI from Shared Business Logic
A shared widget may render a consistent interaction pattern across multiple screens, but the underlying business rules must remain within their respective feature boundaries:
* A shared confirmation dialog renders the prompt; the specific business operation confirmed remains inside the feature's application use case.
* A shared loading skeleton renders placeholder geometry; the feature manages its own data loading lifecycle and fallback state.
* A shared form input renders validation styling; domain-specific business validation rules remain in the feature's domain model.
* A shared data table renders rows; authorization, data filtering, and entity mutations remain strictly owned by the originating feature context.
* **Prohibition:** Never use a shared UI component as a back door for cross-feature domain logic.

#### 16.3.3 The 10-Step Evidence-Based Extraction Process
When extracting reusable capabilities, execute through these 10 steps:
1. Identify the recurring requirement in real project work.
2. Inspect existing implementations across features.
3. Determine whether implementations share genuine behavior, rather than superficial visual resemblance.
4. Define the stable common contract (inputs, outputs, events, accessibility requirements).
5. Identify legitimate variations and design extension points.
6. Separate shared presentation behavior from feature-specific domain rules.
7. Author or extend the smallest suitable abstraction.
8. Test the shared component across variants, loading states, empty states, error states, and keyboard/screen-reader accessibility.
9. Migrate consumers incrementally with verified regression checks.
10. Verify that the abstraction reduces total duplication without introducing unwanted coupling.

#### 16.3.4 Composition Over Complex Configuration
* Prefer composing reusable components from smaller, focused elements rather than authoring monolithic components governed by dozens of boolean switches.
* Prohibit exposing private internal implementation details as public component APIs.

#### 16.3.5 Centralized Semantic Design System
Centralize presentation foundations in semantic design tokens:
* Color roles (surface, primary text, subtle text, border, accent, focus ring).
* Spatial scales (8pt grid tokens: 4px, 8px, 16px, 24px, 32px, 48px, 64px, 96px).
* Typography primitives (fluid scale formulas, line heights, font families).
* Motion and physics parameters (easing curves, duration limits, reduced-motion overrides).
* Breakpoints (360px Mobile Portrait, 568px Landscape, 768px Tablet, 1280px Desktop, 1536px Ultra-Wide).
* *Rule:* Always use semantic design tokens rather than scattering hardcoded hex literals or ad-hoc pixel values across components.

#### 16.3.6 Feature Isolation in Component Libraries
A generic component library (`src/core/` or `shared/`) must **never** import internal modules or domain logic from individual features:
`src/core/ui → src/features/<feature>/domain` is strictly prohibited. Generic components receive data, callbacks, and configuration via typed props.

---

### 16.4 Shared Engineering Capabilities & Sequence Core Platform Rules

In accordance with Master Strategy v1.1 Change 02 and Change 03:
1. **Private Evolving Platform:** Sequence Core is a private, evolving repository of reusable engineering foundations and operational capabilities—not a mandatory universal framework or all-at-once dependency.
2. **Admission Rule:** A capability enters Sequence Core **only when repeated use in real products demonstrates a measurable, clearly evidenced benefit**. "Potentially reusable" is never sufficient admission criteria.
3. **Seven Capability Layers:**
   * *1. Engineering Foundations:* Conventions, architecture templates, test patterns, documentation, quality checks.
   * *2. Identity and Access:* Authentication adapters, authorization patterns, permission schemas.
   * *3. Data Infrastructure:* Database conventions, migration patterns, data authority definitions, backups.
   * *4. Integration:* API conventions, webhook processing, idempotency patterns, external adapters.
   * *5. Application Experience:* Design tokens, reusable UI components, accessibility patterns.
   * *6. Delivery:* Build pipelines, CI/CD templates, environment configuration, release automation.
   * *7. Operations:* Logging, monitoring, alerting, incident handling, runbooks.
4. **Domain Independence Invariant:** Each product's domain model and business rules must remain independently governed. Never force distinct products to share a single unified domain model or fixed database stack.

---

### 16.5 Data Ownership, Validation, and Error Handling

#### 16.5.1 Authoritative Data Ownership
Every business entity and data attribute must have a single authoritative owner context. Cross-context updates must occur via explicit application commands, domain events, or public gateway DTOs.
Explicitly distinguish:
* Domain entities and value objects (pure domain invariants).
* Application command and query models (use-case payloads).
* Persistence models (database schemas).
* API / Gateway DTOs (external network payloads).
* Presentation viewmodels (UI rendering state).
* *Rule:* Never use a single universal data model across all layers merely to reduce file count. Map explicitly at boundaries where isolation is protected.

#### 16.5.2 Multi-Tier Validation Boundaries
Enforce validation at the correct architectural tier:
* *Presentation Tier:* Immediate user feedback, form field masking, client-side syntax checks.
* *Application Tier:* Use-case preconditions, authorization rules, command payload validation.
* *Domain Tier:* Business invariants, state transition validity, entity lifecycle rules.
* *Infrastructure Tier:* Database constraints, foreign keys, network transport contracts.
* *Invariant:* Client-side presentation validation must never be treated as the sole enforcement of business invariants or security checks.

#### 16.5.3 Resilient Error Handling
* Distinguish expected business failures (e.g. invalid submission, duplicate resource) from unexpected infrastructure faults (e.g. network timeout, disk failure) and defect assertions.
* Translate low-level technical exceptions into typed domain/application outcomes at infrastructure boundaries.
* Never expose raw database stack traces, internal paths, or credentials to end users.
* Never silently swallow exceptions without logging or controlled fallback states.

---

### 16.6 Testability as an Architectural Requirement

Architecture that cannot be tested without launching the complete end-to-end application runtime is structurally defective:
* **Domain Unit Tests:** Verify pure business invariants, calculation logic, and state transitions in memory with zero dependencies on frameworks, databases, or browsers.
* **Application Use-Case Tests:** Verify workflow coordination, authorization gates, and domain event triggering using mock/in-memory port adapters.
* **Contract Tests:** Validate public gateways, DTO serializations, and schema compliance against JSON schemas.
* **Infrastructure Adapter Tests:** Verify database queries, external API clients, and storage adapters against contract specifications or local test containers.
* **Component Presentation Tests:** Verify shared UI components across visual states (default, hover, active, focus, disabled), loading states, error fallbacks, and screen-reader accessibility tags.
* *Rule:* Test behavioral outcomes and invariant contracts, not internal private implementation mechanics.

---

### 16.7 The 15 Architectural Quality Gates (ARCH-01 through ARCH-15)

Prior to declaring any feature or implementation task complete, evaluate the implementation against the 15 Quality Gates. Record each gate as `PASS`, `FAIL`, `BLOCKED`, or `NOT_APPLICABLE` with concise empirical evidence:

| Gate ID | Quality Gate | Passing Condition | Verification Method |
| :--- | :--- | :--- | :--- |
| **ARCH-01** | Requirement Traceability | Implementation is fully supported by authoritative Level 1–4 requirements; zero unauthorized scope. | Inspection against Master v1.1, Content Spec, IA v2.0, and Feature Specs. |
| **ARCH-02** | Domain Integrity | Business invariants are strictly enforced within pure domain boundaries without framework leaks. | Static analysis and unit test inspection of `src/features/*/domain/`. |
| **ARCH-03** | Separation of Concerns | Distinct boundaries maintained across Domain, Application, Infrastructure, and Presentation layers. | File tree inspection and layer boundary linting. |
| **ARCH-04** | SOLID Compliance | S, O, L, I, and D principles are satisfied without introducing unnecessary speculative abstractions. | Code review of interfaces, classes, and component compositions. |
| **ARCH-05** | Dependency Direction | Dependencies point strictly inward (`Presentation → Application → Domain`; `Infra → Ports`). | Import graph analysis; zero circular or forbidden outward dependencies. |
| **ARCH-06** | Feature Isolation | Features communicate exclusively through public gateways (`index.ts`); zero internal imports. | Automated boundary check (`validate-feature-boundaries.mjs` B-01, B-03). |
| **ARCH-07** | Reuse Audit | Existing components and capabilities were audited before introducing new abstractions. | Catalog inspection of `src/core/` and design token tables. |
| **ARCH-08** | Abstraction Quality | New abstractions possess clear, single responsibilities with proven benefits over direct code. | Review for premature generalization, excessive wrappers, or dead abstractions. |
| **ARCH-09** | Shared Component Safety | Generic components do not own feature-specific business rules or private domain entities. | Inspection of `src/core/` imports; zero cross-feature imports. |
| **ARCH-10** | Data Ownership | Clear authoritative ownership for every entity; explicit mapping between layer models. | Schema inspection and persistence ownership audit. |
| **ARCH-11** | Error Boundaries | Errors are translated at boundaries; graceful degraded states provided for all failure paths. | Inspection of error handlers, state machines, and UI fallback components. |
| **ARCH-12** | Testability | Core business logic and use cases can be executed and verified independently in memory. | Test suite execution and coverage verification without full-app launch. |
| **ARCH-13** | Regression Protection | Existing verified behavior, contracts, and test suites remain intact and passing. | Full test suite execution and git diff verification. |
| **ARCH-14** | Documentation Alignment | Machine contracts (`*.toml`), schemas, reference cards, and session states match implementation. | Automated contract validation (`validate-specs.mjs`) and link audits. |
| **ARCH-15** | Verification Evidence | All compliance claims are supported by concrete terminal outputs, test runs, or diffs. | Terminal execution logs and reproducible verification output. |

---

### 16.8 Architectural Anti-Patterns to Avoid

The following anti-patterns are strictly prohibited unless supported by an approved Engineering Decision Record (`EDR`):
1. **Business logic in UI widgets:** Domain calculations, state transitions, or validation logic placed inside presentation components.
2. **Direct persistence calls from UI:** Database SDK queries or API network calls made directly from presentation templates without use-case orchestration.
3. **Framework leaks in domain:** Imports of UI frameworks (`react`, `astro`), browser globals (`window`, `localStorage`), or database drivers inside `domain/`.
4. **Monolithic "god" classes:** Single services or components managing multiple unrelated use cases, state trees, or lifecycles.
5. **Universal repositories:** Single repository interfaces containing dozens of unrelated queries across multiple bounded contexts.
6. **Speculative base classes:** Generic abstract base classes authored to avoid a few repeated lines without a genuine polymorphic boundary.
7. **Single-use interfaces without boundary benefit:** Authoring an interface for an internal class that has only one implementation and provides no decoupling or testing value.
8. **Forwarding wrapper classes:** Classes that merely forward every method invocation to another class without adding validation, translation, or policy.
9. **Cross-feature internal imports:** Importing private files from another feature rather than using its public gateway (`index.ts`).
10. **Domain logic in shared UI components:** Embedding feature-specific workflows or business rules inside reusable widgets.
11. **Global mutable state shortcuts:** Global stores used to bypass explicit parameter passing or dependency injection.
12. **Circular dependencies:** Circular references between modules, packages, or architectural layers.
13. **Premature Sequence Core extraction:** Moving a capability into Sequence Core before repeated production use has proven its contract and benefit.
14. **Overly generic components:** Authoring a single mega-widget with dozens of optional boolean flags to handle disparate UI needs.
15. **Unnecessary layer overhead:** Forcing a trivial static display change through complex enterprise layers when no business invariants or domain boundaries exist.

