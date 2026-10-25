# INDIVIDUAL FEATURE SCREENS & INTERACTION CONTRACTS

**Document Type:** Sub-Specification — Individual Feature Bounded Contexts, Screen Layouts, Overlays & State Lifecycles  
**Derived From:** `binary_sequence_screen_layout_ia_motion_loading_contract_final.md` (Part IX & X)  
**Scope:** All 11 Feature Bounded Contexts (`src/features/*`), Screen Overlays, Gateway Contracts & Acceptance Checklists  
**Authority:** Canonical Implementation Contract for Individual Feature Contexts  
**Status:** Approved Canonical Baseline  

---

## 1. Scope & Architectural Discipline

Each feature bounded context (`src/features/<feature-name>/`) inherits all global rules from the Core App Shell and Common Shared contracts, applying the explicit screen specifications, interaction mechanics, and error/loading overlays defined below.

### Anti-Monolith Isolation Rule
A feature must **never** import internal domain logic, components, or styles from another feature folder. High-level views consume lightweight public gateway summaries exported from `src/core/gateways/` and feature root `index.ts`.

---

## 2. Phase-by-Phase Feature Specifications

### 2.1 Phase 01: `src/features/onboarding` (Onboarding Perceptual Gate)
- **Role:** Optional first-visit perceptual introduction (`Binary → Sequence → Technology → Experience`), never a permanent obstacle.
- **Viewport & Elevation:** Fixed full-screen overlay (`min-height: 100dvh; z-index: var(--z-modal, 400); background: var(--color-obsidian-carbon)`).
- **Mandatory Invariants:**
  1. `ONB-INV-001`: If `prefers-reduced-motion: reduce` is active $\rightarrow$ Bypass overlay immediately (`SKIPPED`).
  2. `ONB-INV-002`: If user-agent is a bot/crawler or SSR initial HTML $\rightarrow$ Core Home content remains rendered and indexable in the DOM underneath.
  3. `ONB-INV-003`: Pressing `Escape` at any millisecond $\rightarrow$ Immediately dismiss overlay and persist `SKIPPED` state.
  4. `ONB-INV-004`: Storage access failures (`localStorage`) degrade safely to session in-memory state without unhandled exceptions.
- **Landscape Mobile Override:** Convert vertical intro stack into a compact 2-column horizontal split so "Enter the studio" and "Skip introduction" buttons remain visible without scrolling at $360\text{px}$ height.

---

### 2.2 Phase 02: `src/features/home` (Home Screen `/`)
- **Role:** Primary Tier 1 orientation, democratized enterprise proposition (*"Everyone deserves an enterprise solution"*), Complexity Absorption demonstration, and Feature Gateway navigation.
- **Scannability Constraint:** Strictly bounded to **6 compact sections** scannable within 2–3 desktop viewport scrolls (`~2000px–3000px` total height).
- **Gateway Integration:** Consumes immutable `FeatureGatewaySummary` DTOs from `src/core/gateways/` to render preview cards for Studio, Products, Method, and Blueprint. Zero foreign internal imports.
- **Interactive Preview Modals:** Gateway preview triggers (Complexity Toggle, Sequence Scrubber preview) open in accessible modal dialogs (`--z-modal`) with immediate static text fallbacks for screen readers and reduced-motion modes.

---

### 2.3 Phase 03: `src/features/studio` (Studio & Philosophy `/studio`)
- **Role:** Explain `Binary → Sequence → Technology → Art`, the democratized enterprise thesis, the 7 Pillars of Software Quality, and Single-Practitioner Continuity reassurance.
- **Layout Flow:** Hybrid Z-pattern header transitioning into an F-pattern reading layout.
- **Typography & Grid:**
  - Long-form reflections set in `--font-editorial` (`Newsreader`) constrained to `65ch` max-width.
  - 7 Pillars of Quality displayed in a responsive 12-column bento grid (4 columns per card on desktop, 4 columns full-width on mobile).

---

### 2.4 Phase 04: `src/features/products` (Products & Systems Directory `/products`)
- **Role:** Categorized directory of the 3 ecosystem clusters:
  1. *Utility & Enterprise Software:* `Time`, `Alert Wave`, `HREWEMS`, `Supermarket`.
  2. *Community & Places:* `Resonance`, `Just Breathe Valley`.
  3. *Public Artifacts:* `Binary Sequence Studio Website V1`.
- **Mandatory Monospace Status Badges:** Every product card must render a high-contrast status badge (`[STATUS: LIVE]`, `[STATUS: IN DEVELOPMENT]`, `[STATUS: CONCEPT / PROTOTYPE]`) pairing color with explicit text (Color Independence Rule).
- **Dead-End Prevention:** Cards for products without an active public URL must render an accessible inline `"Project Overview"` disclosure drawer rather than an unclickable or broken external link.

---

### 2.5 Phase 05: `src/features/sequence-method` (Sequence Method `/method`)
- **Role:** Inspectable walkthrough of the 11-stage engineering lifecycle (`01. OBSERVE` $\rightarrow$ `11. EVOLVE`) and the *Inspectable by Design* audit trail.
- **V1 Baseline (Mandatory):** Render all 11 stages as a clean, semantic, keyboard-navigable ordered list (`<ol>`) with expandable detail panels. Fully accessible without horizontal scrolling or complex gesture logic.
- **Interactive Scrubber (Enhancement):** On desktop/tablet, support `ArrowLeft`/`ArrowRight`/`Home`/`End` keyboard scrubbing and `cursor: grab` track interaction, maintaining `CLS = 0` by reserving fixed height for the active stage inspector card.

---

### 2.6 Phase 06: `src/features/sequence-blueprint` (Sequence Blueprint `/blueprint`)
- **Role:** Present the standalone 2–3 week paid discovery engagement, list the 6 tangible deliverables, and host the **3-Question Diagnostic Intake Form**.
- **Form Ergonomics:**
  - Persistent top labels + explicit helper text + concrete industry placeholders for the 3 core questions (*System Purpose*, *Core Problem*, *Five-Year Horizon*).
  - Automatically buffer unsaved responses to `sessionStorage` on field blur.
  - Submit button implements the **Inline Button Loader** contract (`disabled`, `aria-busy="true"`, locked width) with deterministic confirmation or actionable recovery fallback.
- **Print Readiness:** The 6 Blueprint Deliverables section must format cleanly under `@media print` so prospective clients can export the scope sheet to PDF for internal procurement.

---

### 2.7 Phase 07: `src/features/contact` (Contact & Project Inquiry `/contact`)
- **Role:** Low-friction communication gateway separating Phase 0 Blueprint intakes from Existing-System consultations, Architecture Reviews, and direct email inquiries.
- **Pathway Selector:** Accessible radio-card / tab group (`New Product Build`, `Existing System / Modernization`, `Architecture Review`, `General / Collaboration`) that dynamically adjusts form fields and guidance copy without shifting outer layout geometry.
- **Form Validation:** Validate fields `onBlur`; reward users by clearing errors immediately `onChange`; shift focus to top Error Summary on submission failures.

---

### 2.8 Phase 08: `src/features/engineering-notebook` (Engineering Notebook `/notebook`)
- **Role:** Public repository of Engineering Decision Records (`[EDR]`), Empirical Benchmarks (`[TELEMETRY]`), Field Observations (`[ANALYSIS]`), and Open Questions (`[HYPOTHESIS]`).
- **Reading Ergonomics:** F-pattern reading layout (`65ch` prose column) paired with monospace metadata headers (`Date`, `Category`, `Verification Status`) and horizontally scrollable `<pre><code>` blocks (`tabindex="0"`).
- **Draft Safeguard:** Candidate entries that are undergoing empirical verification must display `[STATUS: DRAFT IN VERIFICATION]` rather than appearing as completed studies.
- **Archival Print:** Full `@media print` exportability for offline engineering reviews.

---

### 2.9 Phase 09: `src/features/research-experiments` (Living Laboratory `/research`)
- **Role:** Exploratory showcase of AI/local inference, electronics & hardware signals, sound physics/acoustic frequency, and cinematography/natural observation.
- **Empirical Safeguard Banner:** Prominent structural callout stating that entries represent active research and experimental prototypes, not commercial SLA guarantees.
- **Dynamic Media Contrast:** Field photography and cinematography stills must implement the **Background-Aware Dynamic Foreground System** (`protected-scrim` or adaptive contrast) for any overlaid captions or telemetry metadata.

---

### 2.10 Phase 10: `src/features/studio-founder` (Founder Practice `/founder`)
- **Role:** Multidisciplinary biography, technical specializations, Flutter/Dart & DDD architecture authorship boundaries, and creative practice (cinematography, wildlife photography, mobile studio).
- **Visual Discipline:** Balanced editorial prose (`--font-editorial`) paired with structured competency matrices (`--font-technical`) and aspect-ratio-locked galleries (`aspect-ratio: 16 / 9` or `4 / 3`, `CLS = 0`).

---

### 2.11 Phase 11: `src/features/continuity-trust` (Continuity & Trust `/continuity`)
- **Role:** Mitigate single-practitioner operational risk via the **4 Pillars of Continuity** (Client Code Ownership, IaC Account Isolation, Encrypted Backups & Runbooks, Handover/Escrow Compatibility) and Maintenance vs. SLA boundaries.
- **Layout & Print:** High-clarity specification layout with structured comparison tables (Vital Stewardship Maintenance vs. Contractual SLA) and full `@media print` exportability.

---

## 3. Verification & Governance Gates

### 3.1 Pre-Implementation Checklist (Sprint 01 Gate)
Before authoring presentation code for any feature:
- [ ] Primary purpose, Tier 1 / Tier 2 role, and route slug are verified in `ARCHITECTURE_INDEX.toml`.
- [ ] Content elements are classified into Priority 1 (Essential), Priority 2 (Important), Priority 3 (Exploratory).
- [ ] Responsive transformations (Mobile Portrait, Landscape Mobile `< 420px`, Tablet, 4:3 Desktop) are defined.
- [ ] Dynamic background contrast strategy (`fixed`, `adaptive`, or `scrim`) is declared if media is present.
- [ ] All 8 component lifecycle states are specified.

### 3.2 Post-Implementation Verification Gate (Sprint 05–08 Sign-Off)
Before committing a completed feature phase:
- [ ] **Container & Measure:** Content stays within `1280px–1440px` max-width; prose stays within `45–75 CPL`.
- [ ] **Landscape Mobile:** Tested at `667px × 375px` and `844px × 390px`; sticky bars collapse; modals scroll cleanly.
- [ ] **Touch & Pointer:** Interactive targets meet $\ge 44\text{px} \times 44\text{px}$; cursors match interaction semantics.
- [ ] **Keyboard & DOM Order:** Focus indicator (`2px solid #D97706`) is visible; DOM order matches visual reading order.
- [ ] **Contrast & Color Independence:** Text meets $\ge 4.5:1$ contrast; status badges include explicit text labels.
- [ ] **Motion & Layout Stability:** Only `transform` and `opacity` are animated; `prefers-reduced-motion` is honored; `CLS < 0.05`.
- [ ] **Loaders & Forms:** Loaders debounce for 200ms and time out at 15s; forms validate `onBlur` and preserve drafts.
- [ ] **Archival Print:** Formatted cleanly under `@media print`; dark backgrounds invert to white; chrome is hidden.
- [ ] **Boundary Isolation:** Zero cross-feature internal imports confirmed.
