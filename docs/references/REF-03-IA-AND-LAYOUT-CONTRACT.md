# REF-03: Information Architecture, Viewport, Motion, Layout Science & Content Reveal Contract Reference

* **Source Documents:** 
  1. [`Binary_Sequence_Information_Architecture_v2.0.md`](file:///G:/binarysequence_techart/Binary_Sequence_Information_Architecture_v2.0.md) (Level 3 IA & Wireframes)
  2. [`binary_sequence_screen_layout_ia_motion_loading_contract_final.md`](file:///G:/binarysequence_techart/binary_sequence_screen_layout_ia_motion_loading_contract_final.md) (Level 3 Viewport, Motion, Layout Science, Color Psychology & Content Reveal)
* **Authority Level:** **LEVEL 3: Information Architecture, Sensory & Content Implementation Contract**
* **Approval Status:** CONFIRMED & ACTIVE (Supersedes IA v1.0)
* **Parent Relationships:** Dictated by Level 2 Content Spec (`audience_facing_content_specification_v1_1.md`).
* **Child Relationships:** Constrains Level 4 DDD boundaries and Level 5 machine tokens (`GLOBAL_DESIGN_SYSTEM.toml`).

---

## 1. Approved Sitemap & Route Taxonomy

```text
/                                   -> Home (Hero, Studio Thesis, Blueprint Teaser)
/studio                             -> Studio (Philosophy, Capacity, Founder Practice)
/products-and-systems               -> Products & Systems (7 Systems Index, Tier 1/2)
/sequence-method                    -> Sequence Method (11-Step Methodology Sequence)
/sequence-blueprint                 -> Sequence Blueprint (Phase 0 Engagement Scope)
/contact                            -> Contact (Inquiry Intake Form)
/engineering-and-field-notebook     -> Engineering & Field Notebook (Architecture Notes)
/research-and-experiments           -> Research & Experiments (Studio Art & Prototypes)
/founder-practice                   -> Founder Practice (Curriculum, Craft, Ethos)
/continuity-and-trust               -> Continuity & Trust (Code Ownership, Escrow, IaC)
/privacy                            -> Privacy Policy (Utility route)
/service-boundaries                 -> Service Boundaries & Terms (Utility route)
/404                                -> Custom Accessible 404
```

* **Deferred:** `/system-verification-register` is explicitly excluded from V1 sitemap, routing, and footer (DEC-002).
* **Direct Landing Baseline (DEC-DR04):** Route `/` maps directly to `FEAT-02-HOME` (primary V1 implementation target). Visitors see the Home hero immediately. Mandatory onboarding modal gate (`FEAT-01-ONB`) is deferred; any future onboarding must be optional, dismissible, and non-blocking. Essential Home content must render in the initial HTML.

---

## 2. Responsive Viewport Breakpoints & Layout Rules

| Viewport Profile | Width Range | Columns | Max Container | Margin / Gutter | Key Rule |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Mobile Portrait** | 360px – 428px | 4 cols | 100% | 16px / 12px | Single column vertical rhythm; touch targets >= 44x44px |
| **Landscape Mobile**| 568px – 844px | 6 cols | 100% | 24px / 16px | Low vertical height; compact headers |
| **Tablet** | 768px – 1024px| 8 cols | 720px | 32px / 20px | Dual column content cards |
| **Desktop** | 1280px – 1440px| 12 cols | 1200px | 48px / 24px | Full 12-column grid; 65–75 character measure |
| **Widescreen** | 1536px – 2560px+| 12 cols | 1440px | Auto / 32px | Center-constrained container; no edge-stretching |

* **Spacing System:** Strict 8pt spatial grid (`4px`, `8px`, `16px`, `24px`, `32px`, `48px`, `64px`, `96px`).
* **Fluid Measure:** Body text measure constrained to 45–75 characters per line (`ch` unit) for reading comfort.

---

## 3. Dark-Surface Ergonomics & Dynamic Contrast

* **Surface Hierarchy:** Layer 0 `#050505` (Root canvas), Layer 1 `#0D0D0E` (Surface card), Layer 2 `#161618` (Elevated component), Layer 3 `#222226` (Floating modal/menu).
* **Text Contrast:** Pure white `#FFFFFF` reserved strictly for Hero titles and primary emphasis. Body text uses `#D1D1D6` (minimum 7:1 contrast ratio against `#0D0D0E`). Muted metadata uses `#8E8E93` (minimum 4.5:1 WCAG AA).
* **No Pure Black `#000000` text or backgrounds:** Prevents OLED smear and harsh ocular fatigue.

---

## 4. Hardware-Composited Motion & Loading Latency

* **Motion Rules:** Hardware-composited properties **only** (`transform`, `opacity`). Never animate `width`, `height`, `top`, `left`, `margin`, or `padding` (zero layout shifts / zero CLS).
* **Easing:** Natural cubic-bezier `cubic-bezier(0.16, 1, 0.3, 1)` (out-expo).
* **Reduced Motion:** `@media (prefers-reduced-motion: reduce)` must immediately disable spatial transforms and collapse transition times to `<= 50ms` (opacity only).
* **Loading Thresholds:**
  - `< 100ms`: Instantaneous transition (no spinner/skeleton; avoid visual flash).
  - `100ms – 1000ms`: Render subtle indeterminate progress bar or skeleton placeholder.
  - `> 1000ms`: Explicit loading state with non-blocking feedback.

---

## 5. Layout Science & Gestalt Cognitive Principles

* **Law of Proximity:** Tight internal spacing (`space-2` to `space-3`, 8px–12px) for related metadata; wide module gaps (`space-8` to `space-12`, 32px–48px).
* **Law of Similarity:** Peer cards consume identical border tokens (`--border-subtle`), radii (`--radius-md`, 8px), and typography.
* **Law of Continuity:** Preserve smooth, uninterrupted visual scan lines across timelines and product grids; eliminate erratic saccadic jumps.
* **Law of Closure & Common Region:** Group related data fields and cards using explicit subtle bounding borders and raised surfaces.
* **Focal Point & Weight:** Single dominant focal action per screen state; subordinate secondary controls and muted metadata.
* **Figure-Ground Separation:** Calibrated luminance stepping (`#0B0C0E` canvas $\rightarrow$ `#12151B` surface $\rightarrow$ `#1E293B` elevated) without heavy drop shadows.
* **Cognitive Ergonomics:** Foveal 4:3 frame containment (1024px–1280px); Cowan's 4-chunk working memory limit; Hick's Law choice minimization.

---

## 6. Color Psychology & Chromatic Ergonomics

* **Obsidian Carbon (`#0B0C0E`):** Represents grounded architectural gravitas and quiet enterprise stability; pure `#000000` strictly prohibited.
* **Warm Alabaster / Chalk (`#F6F5F0`, `#D1D1D6`):** Precision readability without optical sterility; $\ge 7:1$ body contrast.
* **Signal Amber (`#D97706`, `#F59E0B`):** Warm vigilance, intentional telemetry, and active stage progression.
* **Circadian Restraint:** Warm-biased slate undertones; zero high-frequency saturated blue light emission.
* **60–30–10 Chromatic Rule:** 60% neutral dark canvas (restful ground), 30% structural framing/text, 10% intentional accent signal.
* **Color Independence:** Status and validation never communicated by color alone; always pair with monospace badges (`[STATUS: LIVE]`) and icons.

---

## 7. Content Reveal, Progressive Disclosure & Overlay Hierarchy

* **Two-Tier Reveal:** Tier 1 surface scan (< 3s glanceable value); Tier 2 deep inspection on conscious user intent.
* **In-Situ Expansion:** Smooth CSS grid/transform accordions and side drawers over disruptive URL navigation; preserve scroll anchor.
* **Drawer vs. Modal Semantics:**
  - Contextual Side Drawers (`--z-drawer: 200`) for non-destructive contextual inspection.
  - Centered Modals (`--z-modal: 400`) reserved exclusively for focused, high-stakes, atomic tasks.
* **Focus & Keyboard Governance:** `role="dialog"`, `aria-modal="true"`, background `inert`, `Escape` to close, restore focus to opener trigger, scrim click dismissal (`--z-backdrop: 300`).
* **Zero Arbitrary Popups:** Unsolicited promotional popups, newsletter gates, and unexpected layout-shifting modals are strictly prohibited.
* **Editorial Micro-Copy:** Direct, calm, blameless, enterprise-grade tone; zero marketing superlatives or faux urgency.
