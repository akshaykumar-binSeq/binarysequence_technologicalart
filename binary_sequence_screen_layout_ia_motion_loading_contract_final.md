# BINARY SEQUENCE TECHNOLOGICAL ART
## Screen, View, Layout, Information Architecture, Motion, Layout Science, Color Psychology & Content Reveal Contract — FINAL

**Document Type:** Canonical Global Design, Viewport, Layout, Interaction, Motion, Sensory Ergonomics & Content Architecture Contract  
**Scope:** Entire Binary Sequence Technological Art website (`binary-sequence-web`), all view transitions, UI components, modal/drawer systems, color token usage, editorial micro-copy, application views, responsive states, and feature bounded contexts  
**Authority:** Global Structural, Perceptual & Editorial Implementation Contract  
**Status:** Approved Canonical Baseline  
**Primary Consumers:** Human Systems Architects, UI/UX Designers, Frontend Engineers, AI Coding Agents (Antigravity / LLM Pipelines), Content Editors, Accessibility Validators, Automated QA Suites  

---

## 0. INSTRUCTION TO THE AI & ENGINEERING AGENTS

You are working on the **Binary Sequence Technological Art** website.

This document defines the mandatory visual science, color psychology, structural engineering, and content architecture rules governing how human beings perceive, process, and interact with the interface:
- Screen and viewport behavior;
- Responsive layout transformations (Mobile Portrait, Landscape Mobile, Tablet, Desktop, Widescreen/Ultra-Wide);
- Two-Tier Information Architecture and Feature Gateway composition;
- Grids, containers, and the 8pt spacing system;
- Layout science, Gestalt perceptual cognition, and neural processing ergonomics;
- Fluid typography, measure, and vertical rhythm;
- Color distribution, color psychology, dark-surface ergonomics, and background-aware dynamic foreground contrast;
- Touch, pointer, and keyboard interaction targets;
- Hardware-composited motion, natural physics easing, and reduced-motion compliance;
- Progressive disclosure, content reveal mechanisms, and non-disruptive overlay hierarchy (drawer vs. modal semantics);
- Loading architectures, latency thresholds, and state transitions;
- Form ergonomics, empty/degraded states, z-index elevation, psychoacoustic rules, internationalization, print exportability, cursor semantics, and the 8-state component lifecycle;
- Editorial micro-copy, cognitive tone, and zero-interruption rules;
- Feature-specific contract overrides.

**Do not treat this document as a collection of optional visual suggestions.** Treat it as a binding implementation contract unless a later, explicitly approved project decision supersedes a specific rule.

### Pre-Implementation Protocol
Before designing or coding any interface surface, component, or content block:
1. Read `docs/ARCHITECTURE_INDEX.toml` and `docs/GLOBAL_DESIGN_SYSTEM.toml`.
2. Read this global **Screen, View, Layout, Information Architecture, Motion, Layout Science, Color Psychology & Content Reveal Contract**.
3. Read the target feature’s `FEATURE_SPEC.toml` and `UI_UX_WIREFRAME.toml`.
4. Verify that all spatial groupings respect Gestalt cognitive laws, that color usage aligns with neural processing ergonomics, and that any "view more" or progressive disclosure mechanism adheres to the non-disruptive overlay hierarchy.
5. Never introduce arbitrary popups, unsolicited modal gates, jarring layout shifts, or unformatted text blocks.
6. Inspect the existing repository implementation.
7. Identify applicable architectural boundaries and verify zero cross-feature internal imports.
8. Identify any conflicts or missing requirements; record discrepancies in `docs/DISCREPANCY_REGISTER.md` rather than silently inventing a conflicting implementation.
9. Reference this global contract from feature-level documentation rather than duplicating its rules.

---

## 1. PURPOSE & CORE PHILOSOPHY

Binary Sequence Technological Art demonstrates its philosophy through the technical and sensory quality of its digital artifact:
> **"Everyone deserves an enterprise solution."**  
> **"Complexity belongs in the architecture, not in the user's hands."**  
> **"Enterprise engineering. Human experience."**

### 1.1 Intended Experience Character
The website must communicate:
- Technical sophistication and architectural discipline;
- Refined interaction, clarity, calmness, and precision;
- Respect for human visual physiology, attention, and hardware resources.

The website must **never** feel like:
- A generic freelancer portfolio or conventional agency template;
- A corporate consulting site filled with unverified buzzwords;
- A fragile, animation-bloated showcase that obstructs reading or navigation.

### 1.2 The Intersection Model of a Screen
A screen is not merely a collection of UI components. Every screen is the deliberate intersection of:

```text
USER INTENT
    + INFORMATION HIERARCHY
    + CONTENT & MICRO-COPY
    + STRUCTURAL LAYOUT & GRID
    + INTERACTION & ERGONOMICS
    + RESPONSIVE TRANSFORMATION
    + ACCESSIBILITY (WCAG AA/AAA)
    + MOTION & STATE FEEDBACK
    + TECHNICAL PERFORMANCE & STABILITY (CLS < 0.05)
```

Every screen must have a single, clearly identifiable primary purpose. Every visible element must serve a functional or structural role.

---

## 2. GOVERNING PRINCIPLES (THE 12 AXIOMS)

1. **Content is Constrained; Environments May Extend:** Primary prose and dense UI are strictly bounded within a centered container; ambient backgrounds, framing, and atmospheric canvases may extend edge-to-edge.
2. **Viewport Conditions Over Device Identities:** Responsive behavior is governed by dynamic viewport geometry and user capabilities, never hardcoded to specific phone or laptop brand models.
3. **Foveal Field Preservation:** Desktop compositions maintain an effective central visual field approaching a 4:3 visual frame to prevent neck strain and horizontal tracking failure.
4. **Progressive Disclosure:** Information is structured from summary to context to preview to deep exploration, never dumped as an undifferentiated mass.
5. **Anti-Monolith Screen Isolation:** High-level views route into capabilities via lightweight `FeatureGatewaySummary` cards; they never import foreign feature internals.
6. **Multi-Modal Input Parity:** Every interactive element is predictable and operable across touch, mouse pointer, and keyboard navigation.
7. **Typographic Measure & Rhythm:** Continuous text preserves a 45–75 CPL measure and proportional line-height across all breakpoints.
8. **Color Independence:** Color supports hierarchy (60–30–10 rule) and adapts dynamically to unknown backgrounds, but is never the sole carrier of status or meaning.
9. **Zero-Gimmick Functional Motion:** Animation communicates state, spatial hierarchy, or sequence progression using GPU-composited properties only, and immediately yields to `prefers-reduced-motion`.
10. **Perceived Performance & Honest Loading:** Latency is managed through debounced, layout-stable skeletons and staged progress indicators that never spin infinitely.
11. **Resilient Edge States:** Empty, offline, validation-error, and archival print states are engineered with the same rigor as the primary happy path.
12. **Explicit Exception Governance:** Feature screens inherit all global rules unless an explicit, documented exception is approved in the feature's specification.

---

## PART I — SCREEN DIMENSIONS, ASPECT RATIOS & VIEWPORT BEHAVIOR

### 3. Maximum Content Constraint (Container Max-Width)
Continuous prose, dense functional UI, and primary interactive clusters must never stretch edge-to-edge across widescreen (16:9, 16:10) or ultra-wide (21:9, 32:9) monitors.

- **Canonical Container Range:** `1140px — 1440px`
- **Standard Token Implementation:**
  ```css
  .bs-container {
    width: min(100% - var(--space-8, 32px), var(--container-max-width, 1280px));
    margin-inline: auto;
  }
  ```
- **Behavioral Rule:** While `.bs-container` remains centered, full-bleed background surfaces (`#0B0C0E` / `#F6F5F0`), subtle structural grid lines, and atmospheric visuals may extend to the physical edges of the display.

### 4. The 4:3 Effective Visual Frame & Foveal Vision
Human sharp central vision (foveal field of view) spans approximately **60 degrees horizontally**.
- On desktop and widescreen monitors, primary visual targets, headings, action clusters, and key interactive diagrams must reside within a central visual field approaching a **4:3 effective composition**.
- Peripheral horizontal space on ultra-wide monitors must be reserved for ambient breathing room, subtle secondary context, or structural framing—never for scattering primary navigation controls or stretching paragraphs into unreadable single lines.

### 5. Landscape Mobile (16:10 / 20:9) & Vertical Compression
When a mobile device rotates to landscape orientation, effective vertical viewport height drops severely—often below **`380px — 420px`** after browser chrome is accounted for. Landscape mobile must be treated as a dedicated responsive mode:

1. **Navigation Compression:** Collapse or unpin persistent sticky top headers, bottom tab bars, and floating action bars so they do not consume more than `15%` of vertical height.
2. **Horizontal Re-Composition:** Convert vertical flex/grid stacks (`flex-direction: column`) into compact horizontal split views (`flex-direction: row` or 2-column grids) where content permits.
3. **Scrollable Overlays:** Full-screen modals, onboarding gates, and bottom sheets must enforce `max-height: 90dvh; overflow-y: auto;` so primary action buttons are never pushed below the visible fold.

### 6. Breakpoint Architecture & Dynamic Viewport Units
Design around behavioral viewport boundaries rather than device names:

| Viewport Mode | Width Range | Primary Layout Behavior |
| :--- | :--- | :--- |
| **Mobile Portrait** | `320px – 639px` | 4-column fluid stack; thumb-zone priority; `16px` outer margin. |
| **Mobile Landscape / Small Tablet** | `640px – 767px` | 4–6 column horizontal adaptation; vertical compression mode active if `height <= 440px`. |
| **Tablet Portrait** | `768px – 1024px` | 8-column bounded layout (`720px–768px` effective reading container); `24px–32px` margins. |
| **Desktop / Laptop** | `1025px – 1440px` | 12-column grid bounded to `1280px` max-width; 4:3 effective central visual field. |
| **Widescreen / Ultra-Wide** | `>= 1441px` | 12-column grid locked at `1280px–1440px` center; peripheral ambient canvas active. |

#### Dynamic Viewport Height Rule
Never rely exclusively on `100vh` for full-screen mobile layouts. Always use CSS dynamic viewport units with fallback:
```css
.bs-fullscreen-surface {
  min-height: 100vh; /* Fallback */
  min-height: 100dvh; /* Dynamic viewport height adjusting for mobile URL bars */
}
```
Use `svh` (small viewport height) when guaranteeing an element fits without scrolling while browser chrome is expanded, and `dvh` for interactive shells.

---

## PART II — INFORMATION ARCHITECTURE & STRUCTURAL LAYOUT

### 7. Two-Tier Discovery Hierarchy & Content Chunking

#### 7.1 The Two-Tier Model
```text
WEBSITE INFORMATION ARCHITECTURE
│
├── TIER 1: COMMERCIAL PRAGMATISM (Primary Navigation & Conversion Funnel)
│   ├── [01] Home (/)                     → Orientation, Proposition & Feature Gateways
│   ├── [02] Studio & Philosophy (/studio)→ Identity, Etymology & 7 Quality Pillars
│   ├── [03] Products & Systems (/products)→ Categorized Ecosystem Directory & Statuses
│   ├── [04] Sequence Method (/method)    → 11-Stage Inspectable Engineering Lifecycle
│   ├── [05] Sequence Blueprint (/blueprint)→ Phase 0 Standalone Engagement & 3-Question Intake
│   └── [06] Contact (/contact)           → Direct Consultation & Existing-System Pathways
│
└── TIER 2: DEEP EXPLORATION (Contextual Bridges & Footer Routing)
    ├── [07] Engineering Notebook (/notebook) → EDRs, Telemetry & Empirical Observations
    ├── [08] Research & Experiments (/research)→ AI, Electronics, Sound Physics & Cinema Lab
    ├── [09] Founder Practice (/founder)      → Akshay Kumar VJ Bio, DDD Authorship & Craft
    └── [10] Continuity & Trust (/continuity) → Ownership, IaC Isolation, Backups & Escrow
```

#### 7.2 Spatial Hierarchy & Miller’s Law (Chunking)
Group related information into digestible modules of **5 to 7 elements per conceptual cluster**.

#### 7.3 Content Visibility Priority Classification
Every screen must classify its elements into three priority tiers to govern responsive recomposition (`RETAIN`, `COLLAPSE`, `STACK`, `MOVE`, `DEFER`):
- **Priority 1 — Essential (Always Visible):** Screen eyebrow/identity, core value proposition, primary CTA, verified status badges, and primary navigation.
- **Priority 2 — Important (Contextual / Collapsible):** Supporting explanations, secondary filters, architectural diagrams, and secondary route links.
- **Priority 3 — Exploratory (Deferred / Linked):** Deep EDR logs, exhaustive technical specifications, and historical research archives.

### 8. Screen Isolation & The Feature Gateway Contract
**Anti-Monolith Rule:** A screen must never import internal domain logic, raw tables, or presentation components from another feature folder (`src/features/<other-feature>/**`).

When a high-level screen (such as Home) introduces another capability, it renders a lightweight **Feature Gateway Card** governed by `FeatureGatewaySummary`:
1. **Sequence Index & Title** (e.g., `05 — Sequence Blueprint`)
2. **Short Premise** (1–2 sentence domain summary)
3. **Interactive Visual Preview Trigger** (Optional accessible modal/drawer preview with static fallback)
4. **Primary Route Action** (Direct link to `/blueprint`)

### 9. Canonical Screen Composition Model & Scan Patterns
Every screen follows a predictable vertical narrative structure:
```text
[01] ORIENTATION         → Context / Breadcrumb, Monospace Eyebrow, Primary H1
[02] PRIMARY PROPOSITION → Lead editorial summary & immediate primary action
[03] PRIMARY CONTENT     → Core domain modules (chunked 5–7 items)
[04] SUPPORTING CONTEXT  → Evidence, trade-offs, or interactive inspection
[05] EXPLORATION GATEWAY → Contextual bridge to Tier 2 or related feature
[06] TERMINAL ACTION     → Clear next-step conversion or routing invitation
```

- **F-Pattern (Text & Technical Views):** Applied to `/notebook`, `/research`, `/continuity`, and `/studio`. Strong top horizontal header sweep, structured subheadings, scannable left-aligned vertical rail, and constrained prose width (`600px–720px`).
- **Z-Pattern (Landing & Conversion Views):** Applied to `/`, `/blueprint`, and `/contact`. Top-left Brand Wordmark $\rightarrow$ Top-right Primary CTA $\rightarrow$ Center-diagonal value narrative $\rightarrow$ Terminal conversion action.

### 10. Fitts’s Law & Multi-Modal Ergonomics
- **Desktop Pointer Grouping:** Keep related controls spatially proximate (e.g., category filter pills directly above the product grid; scrubber step controls directly attached to the active stage card). Never place sequential workflow actions in opposite corners of a widescreen viewport.
- **Mobile Thumb-Zone Optimization:** Position high-frequency interactive triggers (mobile navigation drawer toggle, primary sticky conversion triggers, modal close actions) within easy reach of the lower **40% thumb zone** where practical, without violating logical DOM tab order.

### 11. Two-to-Three Scroll Scannability Baseline
Primary landing views must communicate their complete Tier 1 orientation—*What is this? Why does it matter? What can I explore? What do I do next?*—within **2 to 3 normal viewport scrolls** on desktop (`~2000px–3000px` total document height). Exhaustive details must be progressively disclosed via accordions, modals, or dedicated sub-routes.

### 11.1 Gestalt Principles of Visual Perception & Layout Science
Layout composition must leverage human perceptual shortcuts to minimize cognitive load:

- **Law of Proximity:** Elements placed close together are automatically perceived as a unified conceptual cluster. Maintain tight internal spacing (`space-2` to `space-3`, `8px`–`12px`) for related metadata (such as an eyebrow tag and its heading, or an icon and its text label), and wider separation (`space-8` to `space-12`, `32px`–`48px`) between distinct structural modules.
- **Law of Similarity:** Elements sharing visual characteristics (shape, typography, color tone, border styling) are interpreted as having similar functional purpose. Use consistent bounding card styles, corner radii (`--radius-md`, `8px`), and typographic scales for peer elements (e.g., ecosystem product cards, sequence stage cards).
- **Law of Continuity:** The human eye naturally follows smooth, established visual lines (such as horizontal sequence progression, timeline tracks, and alignment axes guiding scanning flow without visual fragmentation). Avoid jagged or irregular vertical alignments across list items and metadata grids to minimize unnecessary saccadic eye jumps.
- **Law of Closure & Common Region:** Humans perceive enclosed boundaries as distinct conceptual entities. Group related fields, cards, and data summaries using explicit subtle bounding borders (`--border-subtle`, `rgba(255, 255, 255, 0.08)`) and dedicated background surface elevation (`--surface-raised`, `#12151B`).
- **Law of Focal Point & Visual Weight:** Elements with distinct visual contrast or scale capture immediate initial foveal attention. Every screen state must establish exactly one dominant focal point (e.g., the Primary Value Statement or Active Conversion Trigger), subordinate secondary controls, and muted contextual metadata.
- **Figure-Ground Relationship & Depth Planes:** Ensure immediate, unambiguous discrimination between active interactive surfaces (the figure) and background ambient structures (the ground). Use calibrated dark-surface luminance stepping (`#0B0C0E` base canvas $\rightarrow$ `#12151B` surface container $\rightarrow$ `#1E293B` active/hover elevation) rather than heavy drop shadows to communicate spatial layering.

### 11.2 Neural Processing Ergonomics & Cognitive Load Budget
- **Foveal vs. Peripheral Attention Budget:** Human foveal vision (high-acuity reading zone) covers an angle of approximately $2^\circ$ to $5^\circ$. Dense technical data, critical metrics, and interactive controls must be concentrated within the central 4:3 optical frame (`1024px` to `1280px` max-width container). Peripheral widescreen margins remain calm, atmospheric, and uncrowded.
- **Working Memory Constraints (Miller's Law & Cowan's Limit):** Working memory comfortably holds only $4 \pm 1$ distinct items during active decision-making. Information must be chunked into digestible conceptual groups (e.g., the 11 Sequence stages chunked into 3 distinct operational phases: *Discovery & Strategy*, *Architecture & Prototype*, *Production & Continuity*).
- **Hick's Law & Choice Architecture:** Decision latency increases logarithmically with the number of choices ($T = b \cdot \log_2(n + 1)$). Minimize decision paralysis by presenting a single primary route or next action per screen state. Never overwhelm a visitor with competing high-contrast buttons of equal visual weight.
- **Motor Ergonomics & Fitts's Law:** Position high-frequency interactive triggers where movement time and targeting error are minimized. In touch contexts, ensure generous target buffers ($\ge 44 \times 44\text{px}$) and prioritize bottom-half thumb reach.

---

## PART III — GRID SYSTEMS, TOUCH TARGETS & LAYOUT MECHANICS

### 12. Unified 8pt Baseline Grid & Spacing Scale
All layout dimensions, paddings, margins, and gaps adhere to an `8px` baseline grid with a `4px` half-step reserved strictly for micro-spacing (badges, inline borders, icon offsets):

| Token | CSS Value | Pixel Equivalent | Primary Usage |
| :--- | :--- | :--- | :--- |
| `--space-1` | `0.25rem` | `4px` | Micro-spacing, badge padding, inline tag gaps |
| `--space-2` | `0.5rem` | `8px` | Tight element grouping, icon-to-label gap |
| `--space-3` | `0.75rem` | `12px` | Compact button vertical padding, list item spacing |
| `--space-4` | `1.0rem` | `16px` | Standard mobile outer margin, card inner padding, base gap |
| `--space-6` | `1.5rem` | `24px` | Tablet outer margin, grid gutter, card padding on desktop |
| `--space-8` | `2.0rem` | `32px` | Desktop grid gutter, sub-section vertical separation |
| `--space-12` | `3.0rem` | `48px` | Major content block separation |
| `--space-16` | `4.0rem` | `64px` | Primary section vertical padding (mobile/tablet) |
| `--space-24` | `6.0rem` | `96px` | Primary section vertical rhythm (desktop) |

### 13. Responsive Multi-Column Grid Specifications
```css
.bs-grid {
  display: grid;
  width: 100%;
  /* Mobile Portrait Default: 4 columns */
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: var(--space-4, 16px);
}

@media (min-width: 768px) {
  /* Tablet: 8 columns */
  .bs-grid {
    grid-template-columns: repeat(8, minmax(0, 1fr));
    gap: var(--space-6, 24px);
  }
}

@media (min-width: 1025px) {
  /* Desktop / Widescreen: 12 columns inside bounded container */
  .bs-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: var(--space-8, 32px);
  }
}
```

### 14. Section Heights & Scroll Architecture
- **No Arbitrary Fixed Heights:** Never assign fixed pixel heights (e.g., `height: 800px`) to content sections. Use content-driven heights with vertical padding rhythm (`padding-block: var(--space-16)`) or `min-height` so containers expand safely when text wraps or users zoom to `200%`.
- **Single Primary Document Scroll:** Avoid nested scrollable containers inside a page unless functionally indispensable (such as wide horizontal code blocks). Any necessary nested scroll region must be keyboard focusable (`tabindex="0"`) and usable on landscape mobile.

### 15. Touch Targets & Interactive Hit Areas
- **Touch & Universal Baseline:** Minimum interactive hit area of **`44px × 44px`** (WCAG 2.1 AA); preferred target **`48px × 48px`**.
- **Compact Desktop Pointer Exception:** Inline text links or dense desktop utility controls may use a minimum hit height of `24px–32px` provided at least `8px` of non-interactive clearance separates adjacent targets.
- **Invisible Hit Expansion:** If a visual icon is `16px × 16px`, expand its clickable bounding box to `44px × 44px` using padding or a pseudo-element (`::after { content: ""; position: absolute; inset: -14px; }`).

---

## PART IV — TYPOGRAPHY & FLUID TEXT SIZING

### 16. Font Family Matrix
- **Structural & UI (`--font-structural`):** `'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif` — Used for headings, navigation, buttons, and form labels.
- **Editorial & Narrative (`--font-editorial`):** `'Newsreader', Georgia, serif` — Used for long-form essays, philosophical narratives, and founder reflections.
- **Technical & Metadata (`--font-technical`):** `'JetBrains Mono', monospace` — Used for eyebrows, sequence indices (`01`–`11`), status badges (`[STATUS: IN DEVELOPMENT]`), code blocks, and telemetry metrics.

### 17. Fluid Type Scale (`clamp()`)
Typography scales smoothly across viewports without abrupt media-query jumps:

| Role | Token | CSS `clamp()` Definition | Pixel Range | Line-Height |
| :--- | :--- | :--- | :--- | :--- |
| **Display / Hero H1** | `--text-display` | `clamp(2.0rem, 1.5rem + 2.5vw, 3.5rem)` | `32px → 56px` | `1.10 – 1.18` |
| **Section H2** | `--text-h2` | `clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem)` | `24px → 36px` | `1.15 – 1.25` |
| **Subhead H3** | `--text-h3` | `clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem)` | `20px → 26px` | `1.25 – 1.35` |
| **Lead Paragraph** | `--text-lead` | `clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)` | `18px → 20px` | `1.50 – 1.60` |
| **Body Base** | `--text-base` | `1.0rem` (Fixed minimum baseline) | `16px` | `1.50 – 1.60` |
| **Small / UI Secondary** | `--text-sm` | `0.875rem` | `14px` | `1.40 – 1.50` |
| **Micro / Badge / Mono** | `--text-xs` | `0.75rem` | `12px` | `1.30 – 1.40` |

*Critical Mobile Rule:* Form inputs (`<input>`, `<textarea>`, `<select>`) must always maintain a computed `font-size >= 16px` (`1rem`) on mobile to prevent iOS Safari from automatically zooming the viewport upon field focus.

### 18. Readability Metrics: Measure, Wrapping & Density
- **Optimal Line Length (Measure):** Constrain continuous prose paragraphs to **`45–75 characters per line (CPL)`**, targeting **`60–66 CPL`** (`max-width: 65ch` or `600px–720px`).
- **Natural Wrapping:** Never apply `white-space: nowrap` to headings or body copy. Use `text-wrap: balance` on headings and `text-wrap: pretty` on body copy where supported.
- **Density Control:** Never solve information density by shrinking body font below `14px`. Establish visual breathing room between `Eyebrow → Heading → Lead Body → Action` and use structured lists, tables, or progressive disclosure for dense technical material.

---

## PART V — COLOR SYSTEMS, DARK ERGONOMICS & DYNAMIC BACKGROUND CONTRAST

### 19. Canonical Palette & The 60–30–10 Distribution
- **60% Dominant Base Surface:**
  - Dark Ground (Default Studio Mode): **Obsidian Carbon** (`#0B0C0E`) — *Pure black (`#000000`) is strictly prohibited as a default canvas to prevent ocular halation.*
  - Light Surface (Editorial / Print Mode): **Warm Alabaster** (`#F6F5F0`)
- **30% Structural Secondary:**
  - Framing, elevated cards, borders, and dividers: **Deep Forest Slate** (`#1E293B`) and elevated surface tint (`#12151B`).
- **10% Intentional Accent:**
  - Focal status indicators, active sequence steps, focus rings, and key callouts: **Signal Amber** (`#D97706`, hover/accessible bright variant `#F59E0B`).
- **Semantic Status Tokens:**
  - Muted Secondary Text: `#94A3B8` (verified $\ge 4.5:1$ on `#0B0C0E`)
  - Verified / Live Status: `#10B981` (paired with `[STATUS: LIVE]`)
  - Warning / In Development: `#F59E0B` (paired with `[STATUS: IN DEVELOPMENT]`)
  - Danger / Error State: `#EF4444` (paired with explicit icon and error text)

### 19.1 Color Psychology, Chromatic Ergonomics & Neural Processing
Color communicates technical discipline, stability, and calm intelligence before a single word is read:
- **Obsidian Carbon (`#0B0C0E`):** Represents grounded architectural gravitas, structural permanence, and quiet enterprise stability. It eliminates the ocular glare and harsh high-contrast edge halation produced by pure pitch black (`#000000`).
- **Warm Alabaster / Chalk (`#F6F5F0`, `#D1D1D6`):** Communicates clarity, precision, and human-readable documentation without optical sterility. Provides comfortable contrast ratios ($\ge 7:1$ for body copy, $\ge 12:1$ for primary display headings) without straining photoreceptor cells during extended reading sessions.
- **Signal Amber (`#D97706`, `#F59E0B`):** Conveys deliberate engineering intention, active stage progression, and telemetry focus. Unlike alarming reds or flashy neons, amber signifies warm vigilance, craft, and mechanical precision.
- **Circadian Ergonomics & Low-Fatigue Dark Canvas:** Avoid high-frequency saturated blue light emission. Dark surfaces maintain warm, muted undertones (`slate/charcoal`) to protect user attention and ocular comfort during sustained technical exploration.
- **The 60–30–10 Chromatic Balance in Human Perception:**
  - **60% Base Canvas:** Resting visual plane (`#0B0C0E` dark ground) providing visual breathing room and cognitive tranquility.
  - **30% Structural Frame & Content Hierarchy:** Typography, surface cards, dividers, and structural containers (`#1E293B`, `#F6F5F0`, `#94A3B8`).
  - **10% Intentional Signal:** Focal action buttons, active sequence indicators, and critical state indicators (`#D97706`, `#10B981`).

### 20. WCAG Contrast Requirements & Color Independence
- **Normal Body Copy ($< 18.5\text{px}$ regular / $< 14\text{px}$ bold):** Minimum **`4.5:1`** contrast ratio against the actual rendered surface (`7:1` target for long-form reading).
- **Large Headings ($\ge 18.5\text{px}$ bold / $\ge 24\text{px}$ regular) & UI Borders/Icons:** Minimum **`3.0:1`** contrast ratio.
- **Color Independence Rule:** Never rely on color hue alone to communicate status, validation errors, or active sequence selection. Always pair color with explicit monospace text badges (e.g., `[STATUS: PROTOTYPE]`), icons, or structural border shifts.

### 21. Background-Aware Dynamic Foreground System (Unknown Backgrounds)
When text or UI overlays render over dynamically loaded photography, cinematography frames, generative canvases, or complex gradients, the system must never assume static light or dark text will remain legible.

#### 21.1 Processing Pipeline
```text
DYNAMIC / UNKNOWN BACKGROUND ASSET
    ↓
1. EVALUATE LOCAL BOUNDING REGION (Sample luminance directly behind the text box, not global average)
    ↓
2. SELECT SEMANTIC FOREGROUND (--fg-adaptive-light: #F6F5F0 | --fg-adaptive-dark: #0B0C0E)
    ↓
3. VERIFY CONTRAST RATIO (Must satisfy >= 4.5:1 for body, >= 3.0:1 for large display)
    ↓
4. APPLY PROTECTION LAYER IF CONTRAST FAILS (Localized scrim, gradient backdrop, or opaque pill)
```

#### 21.2 Component Contract for Unknown Backgrounds
Any component rendering text over media must implement the `BackgroundProtectionContract`:
```typescript
export interface BackgroundProtectionProps {
  readonly backgroundContext: 'known-solid' | 'unknown-image' | 'dynamic-video' | 'complex-gradient';
  readonly foregroundStrategy: 'fixed-token' | 'adaptive-sample' | 'protected-scrim';
  readonly minContrastRatio?: 4.5 | 3.0;
}
```
- **Image Loading Transitions:** As an asset transitions from `placeholder → blurhash/low-res → final high-res`, foreground color transitions must never trigger layout shift (`CLS = 0`), text flashing, or unreadable intermediate frames.
- **Video & Moving Backgrounds:** Do not run expensive per-frame full-canvas luminance calculations. Enforce a **protected scrim** (`background: linear-gradient(to top, rgba(11, 12, 14, 0.88) 0%, rgba(11, 12, 14, 0.45) 60%, transparent 100%)`) or place text inside a dedicated surface container (`backdrop-filter: blur(8px); background: rgba(11, 12, 14, 0.78)`).

---

## PART VI — INTERACTION, MOTION & HARDWARE RENDERING CONTRACT

### 22. Purpose-Driven Motion (Zero-Gimmick Rule)
Every animation or transition must satisfy at least one of four functional criteria:
1. **State Transition:** Confirming an element changed mode (e.g., accordion expansion, modal open).
2. **Spatial Hierarchy & Orientation:** Showing where content came from or went to (e.g., horizontal sequence progression).
3. **Direct User Feedback:** Tactile confirmation of pointer/touch depression or form submission.
4. **System Progress:** Indicating active background computation or data loading.

*Prohibited:* Decorative looping animations, unrequested scroll-jacking, cursor-hijacking trails, and entrance animations that delay user reading or block button clicks.

### 23. Timing Brackets & Natural Physics Easing Curves

| Interaction Tier | Duration Token | Value | Easing Curve Token | CSS Cubic-Bezier |
| :--- | :--- | :--- | :--- | :--- |
| **Micro-Feedback** (Hover, Focus, Press) | `--duration-fast` | `120ms – 150ms` | `--ease-standard` | `cubic-bezier(0.4, 0.0, 0.2, 1)` |
| **Component Transition** (Drawer, Accordion, Tab) | `--duration-medium` | `220ms – 300ms` | `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |
| **Element Exit / Dismiss** (Modal close, Toast out) | `--duration-exit` | `150ms – 200ms` | `--ease-in` | `cubic-bezier(0.4, 0.0, 1, 1)` |
| **Structural / Full View** (Onboarding gate, Overlay) | `--duration-slow` | `350ms – 450ms` | `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` |

### 24. GPU Compositor Discipline & Layout Stability ($CLS < 0.05$)
- **Composited-Only Properties:** Animate **only** `transform` (`translate3d`, `scale`, `rotate`) and `opacity`.
- **Prohibited Animation Properties:** Never animate `width`, `height`, `top`, `left`, `margin`, `padding`, or `border-width`. For smooth height reveals on accordions, use `grid-template-rows: 0fr → 1fr` combined with `opacity`.
- **Hardware Promotion Restraint:** Apply `will-change: transform, opacity` only during active interaction on complex widgets (such as the Sequence Scrubber) and remove it upon completion to conserve mobile GPU memory.
- **Explicit Aspect Ratios:** Every `<img>`, `<video>`, `<svg>`, and asynchronous embed must declare explicit `width`, `height`, and `aspect-ratio` attributes in HTML/CSS so space is reserved prior to network load.

### 25. Accessibility: Reduced Motion, Vestibular Safety & Seizure Prevention
- **Mandatory `prefers-reduced-motion` Enforcement:**
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```
- **Vestibular Safety:** Never implement full-viewport parallax scrolling, rapid zooming, or rotational spinning. Entrance translations must travel no more than `8px – 16px` alongside an opacity fade.
- **Flashing Threshold (WCAG 2.3.1):** No indicator or effect may flash more than **3 times per second**.

---

## PART VII — LOADING ARCHITECTURES & PERCEIVED PERFORMANCE

### 26. Latency Thresholds (The 100ms – 1s – 10s Rule)
1. **`0ms – 100ms` (Instantaneous):** Render target state immediately. **Never** display a spinner or skeleton.
2. **`100ms – 200ms` (Debounced Quiet Window):** Hold current state with active button depression (`:active`). Do not trigger visual loaders yet; if data resolves under `200ms`, render directly to prevent jarring screen flicker.
3. **`200ms – 1,000ms` (Short Wait):** Display inline button spinner or subtle top-edge indeterminate progress bar.
4. **`1,000ms – 10,000ms` (Structural Wait):** Display dimensionally matched **Skeleton Screens** or **Sequential Staged Loaders** with `aria-busy="true"`.
5. **`> 10,000ms` (Extended / Timeout Boundary):** Display determinate progress or staged status messages. Enforce a hard **15-second timeout gate** that transitions cleanly into an actionable retry error state. **Loaders must never spin infinitely.**

### 27. The 6 Canonical Loader Patterns & Strict Usage Rules

| Loader Type | Permitted Context | Mandatory Technical Constraints |
| :--- | :--- | :--- |
| **1. Skeleton Screen (Ghost UI)** | Initial load of Notebook feeds, Product directory cards, or Telemetry panels. | Must match exact geometry of resolved content (`CLS = 0`). Use subtle opacity pulse (`0.4 → 0.8`), never aggressive high-contrast strobe shimmers. |
| **2. Indeterminate Top Bar** | Route transitions across Next.js App Router segments. | Fixed `2px` height at top viewport edge (`z-sticky + 1`); `var(--color-signal-amber)` fill; zero impact on document flow. |
| **3. Inline Button Loader** | Form submissions (`Sequence Blueprint`, `Contact`). | Lock button width (`min-width`) before swapping label for spinner + `"Submitting..."`; set `disabled` and `aria-busy="true"` to prevent double-submit. |
| **4. Sequential Staged Loader** | Complex multi-step operations or AI domain synthesis. | Display monospace stage updates (`[01/03] Validating schema...` $\rightarrow$ `[02/03] Persisting blueprint...`) inside an `aria-live="polite"` region. |
| **5. Determinate Progress Bar** | Measurable asset downloads or multi-part uploads. | Requires `role="progressbar"`, `aria-valuenow`, `aria-valuemin="0"`, `aria-valuemax="100"`. Progress value must never move backward. |
| **6. Full-Screen Blocking Overlay** | Prohibited for general navigation or data fetching. Reserved strictly for critical transactional locks. | Must trap focus, explain why interaction is locked, and time out safely to a recovery state if network drops. |

---

## PART VIII — ADVANCED STRUCTURAL, BEHAVIORAL & SENSORY SPECIFICATIONS

### 28. Form Ergonomics & Asynchronous Validation
Forms (specifically `/blueprint` and `/contact`) represent the primary commercial conversion boundary:
1. **Persistent Top Labels:** Every input and textarea must have a permanent, visible `<label>` positioned above the field. **Never rely on placeholder text as a label**—placeholders disappear on input and fail accessibility standards.
2. **Validate On-Blur, Reward Early:** Do not trigger red error states on the first keystroke while a user is actively typing. Validate a field upon `onBlur` (when leaving the field) or form submit. Once a field is marked invalid, re-validate `onChange` so the error clears immediately as soon as the user fixes the input.
3. **Semantic Mobile Keyboards:** Explicitly declare `type="email"`, `type="tel"`, `type="url"`, `inputmode="numeric"`, and appropriate `autocomplete` attributes so mobile OS keyboards display the correct layout immediately.
4. **Programmatic Error Focus & ARIA Linkage:**
   - Invalid fields must set `aria-invalid="true"` and point to their error message ID via `aria-describedby="field-error-id"`.
   - On submission failure, render a top-of-form Error Summary (`role="alert"`, `tabindex="-1"`), shift focus to it or the first invalid input, and provide direct anchor links to each invalid field.
5. **Local Draft Preservation:** Multi-question forms (such as the 3-Step Sequence Blueprint intake) must automatically buffer unsaved text drafts in `sessionStorage` (with in-memory fallback) so accidental page refreshes or temporary network drops never destroy user writing.

### 29. Micro-Copy, Empty States & Degraded / Offline States
1. **The 3-Part Empty State Contract:** No list, filter view, or notebook registry may ever render a blank void. Every empty state must state:
   - **What this space is:** (e.g., *"Engineering & Field Notebook Registry"*)
   - **Why it is empty:** (e.g., *"No entries match the selected [TELEMETRY] filter, or candidate notes are currently undergoing empirical verification."*)
   - **Direct Next Action:** A clear button to reset filters or explore an active route (`"Reset Filter"` or `"Explore the Sequence Method"`).
2. **Blameless, Actionable Error Micro-Copy:**
   - **Banned Phrases:** *"Something went wrong"*, *"Error 500"*, *"Invalid input"*.
   - **Required Structure:** `[What happened] + [Why / Reassurance that data is safe] + [Direct Recovery Action]`.
   - *Example:* `"We could not transmit your Blueprint inquiry because the network connection timed out. Your responses are saved on this screen. Please try submitting again, or email your inquiry directly to inquiry@binarysequence.art."`
3. **Offline / Degraded Connectivity Handling:** Detect `window.addEventListener('offline')` during form workflows; display a non-destructive warning banner and disable remote submit buttons until connectivity resumes, preserving all typed form state.

### 30. Z-Index Layering & Stacking Context Governance
Arbitrary `z-index` values (`z-index: 9999`) are strictly forbidden. All elevated surfaces must consume tokens from the canonical elevation scale:

| Token | Value | Assigned Architectural Layer |
| :--- | :--- | :--- |
| `--z-below` | `-1` | Decorative background canvases and ambient grid meshes |
| `--z-base` | `0` | Standard document flow |
| `--z-surface` | `10` | Raised interactive cards, active grid items, local sticky sub-headers |
| `--z-sticky` | `100` | Global primary header bar and top route-loading bar |
| `--z-drawer` | `200` | Mobile navigation drawer and slide-over inspection panels |
| `--z-backdrop` | `300` | Dimmed modal/drawer backdrops (`rgba(11, 12, 14, 0.82)`) |
| `--z-modal` | `400` | Accessible modal dialogs, Onboarding Gate, Sequence Scrubber modal preview |
| `--z-popover` | `500` | Tooltips, dropdown menus, and floating contextual hints |
| `--z-toast` | `600` | System-level alerts, connectivity banners, and submission feedback toasts |
| `--z-skip-link` | `700` | Keyboard `"Skip to Main Content"` accessibility link when focused |

### 30.1 Progressive Disclosure, Content Reveal & Non-Disruptive Overlay Hierarchy
The interface must respect user autonomy, focus continuity, and spatial orientation. Never force unexpected visual jumps or jarring disruptions:
- **The Two-Tier Reveal Principle:**
  - **Tier 1 (Surface Scan):** Immediate, high-level summary readable within seconds. Every card or section provides immediate standalone value without requiring expansion.
  - **Tier 2 (Deep Inspection):** Granular technical details, complete specifications, and secondary evidence revealed strictly on conscious user demand.
- **In-Situ Expansion vs. Disruptive Page Navigation:**
  - When inspecting granular details within a feature, prefer smooth in-situ accordion expansion or a non-blocking slide-over side drawer rather than unseating the user to a new URL.
  - Utilize CSS grid height animation (`grid-template-rows: 0fr -> 1fr`) or composited slide transforms (`translate3d`) to ensure zero Layout Shift ($CLS < 0.05$).
  - Preserve the user's scroll anchor position so collapsing or expanding content never causes disorienting page jumps.
- **Drawer vs. Modal Semantic Differentiation:**
  - **Contextual Side Drawers (`--z-drawer: 200`):** Used for non-destructive inspection (e.g., viewing an individual Sequence Stage specification, technical glossary terms, or previewing a product deep-dive). The underlying page remains visible through the scrim, preserving situational context.
  - **Centered Modals (`--z-modal: 400`):** Reserved exclusively for focused, high-stakes, atomic interactions that require the user's undivided attention (e.g., Sequence Blueprint intake submission confirmation, critical system alert dialogs).
- **Focus Trapping, Inertness & Keyboard Governance:**
  - Overlays must declare `role="dialog"` or `role="alertdialog"`, `aria-modal="true"`, and `aria-labelledby="dialog-title-id"`.
  - Upon activation, focus smoothly shifts to the primary interactive element or the close button.
  - The background document must receive the HTML `inert` attribute to completely prevent keyboard tab leakage and assistive technology disorientation.
  - Pressing `Escape` must dismiss the overlay immediately. Upon dismissal, focus must return seamlessly to the trigger element that opened it.
  - Dismissal must be frictionless: clicking or tapping the backdrop scrim (`--z-backdrop: 300`) must dismiss non-critical drawers and modals without requiring pinpoint accuracy on a close icon.
- **Zero Arbitrary Popups Rule:**
  - Unsolicited promotional popups, modal takeovers, newsletter interception gates, or sudden layout-shifting banners are **strictly prohibited across the entire website**.
  - All overlays and progressive disclosures must be directly initiated by an explicit user gesture (click, tap, keyboard activation).
- **Editorial Micro-Copy & Perceptual Tone:**
  - All interface copy, status badges, empty states, and error messages must speak with quiet enterprise authority: calm, precise, transparent, and direct.
  - Strictly eliminate marketing superlatives, faux urgency ("Hurry!", "Act now!"), and patronizing conversational filler.
  - Every interaction confirmation and error message must clearly explain what happened, verify data safety, and offer a concrete next step.

### 31. Audio Feedback & Psychoacoustic Ergonomics
Reflecting the studio's research in sound physics and acoustic perception:
1. **Strict Muted / Opt-In Default:** The website must **never** auto-play audio, ambient drones, or unmuted video on load or interaction unless the user explicitly activates an `"Enable Acoustic Feedback"` toggle.
2. **Harmonic Register Constraints:** Where optional tactile sound cues are implemented (e.g., a subtle mechanical relay click when scrubbing through the 11-Stage Sequence Method), synthesized tones must remain within warm, low-fatigue registers (**`120 Hz – 1,800 Hz`**), strictly avoiding sharp, fatiguing treble frequencies above `4,000 Hz`.
3. **Zero Audio Dependency:** Every acoustic cue must have a simultaneous visual and ARIA state equivalent.

### 32. Internationalization (i18n), Text Expansion & Logical Properties
1. **20%–35% Text Expansion Buffer:** UI containers, navigation pills, status badges, and buttons must never have hardcoded pixel widths (`width: 120px`) that clip or overflow if copy expands by `35%` or when users increase browser text spacing. Use intrinsic sizing:
   ```css
   .bs-button {
     width: fit-content;
     min-height: 44px;
     padding-block: var(--space-3);
     padding-inline: var(--space-6);
   }
   ```
2. **CSS Logical Properties Mandate:** Use logical directional properties across all stylesheets to maintain structural symmetry and RTL readiness:
   - Use `margin-inline`, `margin-block`, `padding-inline-start`, `padding-inline-end`, `border-inline-start`, `inset-inline-end` instead of physical `left`/`right` properties.

### 33. Printing & Archival Rendering (`@media print`)
Clients and engineering teams frequently print or export **Sequence Blueprints**, **Continuity Protocols**, and **Engineering Decision Records (EDRs)** to PDF. Every screen must support clean archival rendering:
```css
@media print {
  :root {
    --color-obsidian-carbon: #FFFFFF !important;
    --color-warm-alabaster: #000000 !important;
  }
  body {
    background: #FFFFFF !important;
    color: #000000 !important;
    font-size: 11pt;
    line-height: 1.5;
  }
  /* Hide interactive chrome */
  header, footer, nav, .bs-no-print, [role="dialog"], button {
    display: none !important;
  }
  /* Prevent awkward splits across pages */
  article, section, pre, blockquote, .bs-card, tr {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  /* Expand external URLs inline for paper reference */
  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-family: var(--font-technical);
    font-size: 9pt;
    color: #333333;
  }
}
```

### 34. Cursor Affordance & Pointer Differentiation
Desktop pointer cursors must communicate exact interaction mechanics:
- `cursor: default` — Body text, headings, structural containers, and non-clickable cards. *(Never apply `cursor: pointer` to an entire card unless the entire card is a single semantic link or button).*
- `cursor: pointer` — Interactive `<a href>`, `<button>`, `<summary>`, and clickable toggles.
- `cursor: text` — Selectable prose, code blocks, and active text inputs.
- `cursor: not-allowed` — Disabled buttons (`[disabled]`, `aria-disabled="true"`) and locked form inputs.
- `cursor: grab` / `cursor: grabbing` — Draggable interactive tracks (e.g., the 11-Stage Sequence Scrubber handle when enhanced drag mode is active).

### 35. The 8-State Canonical Component Lifecycle Matrix
Every interactive component, button, card trigger, and form control must implement all **8 canonical states**:

| State | Visual & Structural Specification | Required DOM / ARIA Attributes |
| :--- | :--- | :--- |
| **1. Initial / Default** | Clear resting affordance; meets $\ge 3:1$ structural border/surface contrast and $\ge 4.5:1$ label contrast. | Standard semantic tag (`<button>`, `<a>`, `<input>`) |
| **2. Hover (Pointer)** | `120ms` transition to elevated surface tint or bright accent border (`#F59E0B`). Guarded by `@media (hover: hover)` so touch screens do not stick. | None |
| **3. Focus-Visible** | High-contrast `2px solid #D97706` ring with `2px` offset (`outline-offset: 2px`). Never use `outline: none` without a replacement. | `:focus-visible` pseudo-class |
| **4. Active / Pressed** | Immediate tactile scale-down (`transform: scale(0.98)`) or surface darkening on pointer/key down. | `:active` pseudo-class |
| **5. Loading / Busy** | Width locked; inline spinner displayed alongside status label; interaction blocked to prevent duplicate triggers. | `disabled`, `aria-busy="true"`, `aria-live="polite"` |
| **6. Disabled** | Opacity reduced (`0.45`) or muted slate fill; `cursor: not-allowed`; accompanied by helper text explaining *why* it is unavailable if not obvious. | `disabled` or `aria-disabled="true"` |
| **7. Success / Complete** | Calm emerald/amber confirmation badge + explicit confirmation text (e.g., `"[RECEIVED] Inquiry logged"`). | `role="status"` or `aria-live="polite"` |
| **8. Error / Warning** | `1.5px solid #EF4444` border + error icon + actionable recovery message directly below control. | `aria-invalid="true"`, `aria-describedby="err-id"` |

---

## PART IX — FEATURE-SPECIFIC SCREEN & INTERACTION OVERLAYS

Each feature bounded context (`src/features/<feature-name>/`) inherits the global rules above and applies the following feature-specific constraints.

### 36. Phase 01: `src/features/onboarding` (Onboarding Perceptual Gate — DEFERRED)
- **Status:** **Deferred from V1 Launch (`DEC-DR04`).** The website lands directly on `FEAT-02-HOME` at `/`. Mandatory onboarding modals or full-screen introduction gates on initial entry are strictly prohibited.
- **Future Re-Scope Constraint:** Any future onboarding experience must be purely optional, dismissible, and non-blocking, never obstructing access to essential public content.
- **Role (If Activated in Future):** Lightweight, optional first-visit perceptual introduction (`Binary → Sequence → Technology → Experience`), never a permanent obstacle.
- **Viewport & Z-Index:** Fixed overlay (`z-index: var(--z-modal, 400); background: var(--color-obsidian-carbon)`).
- **Mandatory Bypass Invariants:**
  1. If `prefers-reduced-motion: reduce` is true $\rightarrow$ Bypass overlay immediately (`SKIPPED`).
  2. If user-agent is a search crawler/bot or SSR initial HTML $\rightarrow$ Ensure core Home content remains present and indexable in the DOM underneath.
  3. Pressing `Escape` at any millisecond $\rightarrow$ Immediately dismiss overlay and persist `SKIPPED` state.
- **Persistence Resilience:** Use `localStorage` (`bs_onboarding_state_v1`) wrapped in a `try/catch` port that silently degrades to an in-memory session variable if storage is blocked in strict incognito browsers.
- **Landscape Mobile Override:** Switch vertical intro stack into a compact 2-column horizontal split so `"Enter the studio"` and `"Skip introduction"` buttons remain visible without scrolling at `360px` height.

### 37. Phase 02: `src/features/home` (Home Screen — PRIMARY V1 TARGET)
- **Status:** **Primary V1 Implementation Target (`DEC-DR04`).** Visitors see the Home hero immediately upon entering `/`. Essential Home content must be rendered in the initial HTML and must never depend on completing an introduction.
- **Role:** Primary Tier 1 orientation, core belief (`"Everyone deserves an enterprise solution"`), Complexity Absorption demonstration, and Feature Gateway routing.
- **Scannability Target:** Strictly bounded to **6 compact sections** scannable within 2–3 desktop viewport scrolls.
- **Gateway Isolation:** Consumes immutable `FeatureGatewaySummary` objects from `src/core/gateways/` to preview Studio, Products, Method, and Blueprint. Zero imports from other feature folders.
- **Interactive Preview Modals:** Gateway preview triggers (`complexity-toggle`, `sequence-scrubber` preview) open in accessible dialogs (`--z-modal`) with immediate static text fallbacks for screen readers and reduced-motion users.

### 38. Phase 03: `src/features/studio` (Studio & Philosophy)
- **Role:** Explain `Binary → Sequence → Technology → Art`, the democratized enterprise thesis, the 7 Pillars of Software Quality, and the Single-Practitioner Continuity reassurance.
- **Layout Pattern:** Hybrid Z-pattern header transitioning into an F-pattern editorial layout.
- **Typography:** Long-form philosophical reflections set in `--font-editorial` (`Newsreader`) constrained to `65ch` max-width; 7 Pillars set in a responsive 12-column bento/grid card system (`4 cols` per card on desktop, `4 cols` full-width on mobile).

### 39. Phase 04: `src/features/products` (Products & Systems Directory)
- **Role:** Categorized presentation of the 3 ecosystem clusters: (1) Utility & Enterprise Software (`Time`, `Alert Wave`, `HREWEMS`, `Supermarket`), (2) Community & Places (`Resonance`, `Just Breathe Valley`), and (3) Public Artifacts (`Website V1`).
- **Mandatory Status Badge Contract:** Every product card must render a high-contrast monospace status badge (`[STATUS: IN DEVELOPMENT]`, `[STATUS: CONCEPT / PROTOTYPE]`, `[STATUS: LIVE V1]`) using both text and semantic border/icon styling (Color Independence Rule).
- **Dead-End Prevention:** Cards for products without a live public URL must render an inline `"Project Overview"` disclosure panel rather than a dead or broken external link.

### 40. Phase 05: `src/features/sequence-method` (How We Work — 11 Stages)
- **Role:** Inspectable walk-through of the 11-stage engineering lifecycle (`01. OBSERVE` $\rightarrow$ `11. EVOLVE`) and the *Inspectable by Design* audit trail.
- **V1 Baseline vs. Progressive Enhancement:**
  - **V1 Baseline (Mandatory):** Render all 11 stages as a clean, semantic, keyboard-navigable ordered list (`<ol>`) with expandable detail panels so every stage is readable without requiring horizontal scrolling or complex JS gestures.
  - **Interactive Scrubber (Enhancement):** When enhanced scrubber mode is active on desktop/tablet, support `ArrowLeft` / `ArrowRight` / `Home` / `End` keyboard scrubbing and `cursor: grab` track interaction, maintaining `CLS = 0` by reserving fixed height for the active stage inspector card.

### 41. Phase 06: `src/features/sequence-blueprint` (Phase 0 Discovery Intake)
- **Role:** Position the standalone 2–3 week paid discovery engagement, list its 6 tangible deliverables, and host the **3-Question Diagnostic Intake Form**.
- **Form Architecture:**
  - Persistent top labels + explicit helper text + concrete industry placeholders for the 3 core questions (*What are you trying to build?*, *What fundamental problem must it solve?*, *Where should this system live five years from now?*).
  - Auto-save draft input to `sessionStorage` on input blur.
  - Submit button implements the **Inline Button Loader** contract (`disabled`, `aria-busy="true"`, width locked) with deterministic success confirmation or actionable fallback routing to `inquiry@binarysequence.art`.
- **Print Readiness:** The 6 Blueprint Deliverables section must format cleanly under `@media print` so prospective clients can print or save the scope overview as a PDF for internal stakeholder review.

### 42. Phase 07: `src/features/contact` (Contact & General Project Inquiry)
- **Role:** Low-friction communication gateway separating Phase 0 Blueprint intakes from Existing-System consultations, Architecture Reviews, and direct email contact.
- **Pathway Selector:** Accessible radio-card or tab group (`New Product Build`, `Existing System / Modernization`, `Architecture Review`, `General / Collaboration`) that dynamically adjusts helper copy without shifting layout geometry.

### 43. Phase 08: `src/features/engineering-notebook` (Engineering & Field Notebook)
- **Role:** Public repository of Engineering Decision Records (`[EDR]`), Empirical Benchmarks (`[TELEMETRY]`), Field Observations (`[ANALYSIS]`), and Open Questions (`[HYPOTHESIS]`).
- **Layout & Typography:** F-pattern reading view (`65ch` prose column) paired with monospace metadata headers (`Date`, `Category`, `Verification Status`) and horizontally scrollable `<pre><code>` blocks (`tabindex="0"`).
- **Empty / Candidate State Rule:** Candidate entries that are not yet verified for publication must either remain unpublished or clearly display `[STATUS: DRAFT IN VERIFICATION]` rather than masquerading as completed studies.
- **Print Contract:** Full `@media print` compliance for archival PDF export of EDRs.

### 44. Phase 09: `src/features/research-experiments` (Living Laboratory)
- **Role:** Exploratory showcase of AI/local inference, electronics & hardware signals, acoustic frequency/sound physics, and cinematography/natural observation.
- **Empirical Safeguard Banner:** Must display a persistent, structurally distinct callout stating that research entries represent active inquiry and experimental prototypes, not commercial SLA guarantees.
- **Media & Unknown Backgrounds:** Field photography and cinematography frames must implement the **Background-Aware Dynamic Foreground System** (`protected-scrim` or adaptive contrast) for any overlaid captions or telemetry metadata.

### 45. Phase 10: `src/features/studio-founder` (Founder — Akshay Kumar VJ)
- **Role:** Factual multidisciplinary biography, technical specializations, Flutter/Dart & DDD architecture authorship boundaries, and creative practice (cinematography, wildlife photography, location-independent studio).
- **Visual & Layout Discipline:** Balanced editorial narrative (`--font-editorial`) paired with structured competency matrices (`--font-technical`) and aspect-ratio-locked visual observation galleries (`aspect-ratio: 16 / 9` or `4 / 3`, `CLS = 0`).

### 46. Phase 11: `src/features/continuity-trust` (Trust, Governance & Continuity)
- **Role:** Directly mitigate the single-practitioner risk via the **4 Pillars of Continuity** (Client Code Ownership, IaC Account Isolation, Encrypted Backups & Runbooks, Handover/Escrow Compatibility) and Maintenance vs. SLA boundaries.
- **Layout & Print Contract:** High-clarity F-pattern specification layout with structured comparison tables (Vital Stewardship Maintenance vs. Contractual SLA) and full `@media print` exportability for procurement and legal review.

---

## PART X — VERIFICATION CHECKLISTS & GOVERNANCE

### 47. Pre-Implementation Checklist (Sprint 01 Gate)
Before writing feature presentation code, confirm:
- [ ] Screen primary purpose, Tier 1 / Tier 2 role, and route slug are verified against `ARCHITECTURE_INDEX.toml`.
- [ ] Content elements are classified into Priority 1 (Essential), Priority 2 (Important), and Priority 3 (Exploratory).
- [ ] Desktop (12-col, 4:3 central canvas), Tablet (8-col), Mobile Portrait (4-col), and Landscape Mobile (`< 420px` height) transformations are defined.
- [ ] Unknown/dynamic background surfaces have a defined foreground contrast strategy (`fixed`, `adaptive`, or `protected-scrim`).
- [ ] All 8 component lifecycle states (Default, Hover, Focus, Active, Loading, Disabled, Success, Error) are specified.

### 48. Post-Implementation Verification Gate (Sprint 05–08 Sign-Off)
Before committing a feature phase:
- [ ] **Container & Measure:** Primary content never exceeds `1280px–1440px` max-width; continuous prose stays within `45–75 CPL`.
- [ ] **Landscape Mobile:** Tested at `667px × 375px` and `844px × 390px`; sticky bars collapse; modals scroll cleanly; primary actions remain reachable.
- [ ] **Touch & Pointer:** All interactive targets meet `>= 44px × 44px` on touch; pointer cursors match semantics; related controls are spatially grouped.
- [ ] **Keyboard & DOM Order:** Every control has a visible `2px solid #D97706` `:focus-visible` ring; visual layout order matches DOM tab order across all breakpoints.
- [ ] **Contrast & Color Independence:** Text meets `>= 4.5:1` contrast (`>= 3:1` for large text/UI); pure black (`#000000`) is absent; status badges include explicit text labels.
- [ ] **Motion & CLS:** Only `transform` and `opacity` are animated; `prefers-reduced-motion: reduce` disables non-essential motion; measured `CLS < 0.05`.
- [ ] **Loaders & Forms:** Loaders debounce for `200ms` and time out safely at `15s`; forms use persistent top labels, validate `onBlur`, link errors via `aria-describedby`, and preserve local drafts.
- [ ] **Archival Print:** Tested under `@media print`; dark backgrounds invert to white; navigation chrome hides; cards/code blocks avoid mid-element page breaks.
- [ ] **Architecture Isolation:** `npm run verify:boundaries` confirms zero cross-feature internal imports.

---

## 49. CANONICAL SYSTEM SUMMARY

```text
VIEWPORT & ORIENTATION (Portrait / Landscape / Tablet / 4:3 Desktop / Ultra-Wide)
    ↓
BOUNDED CONTAINER (1140px–1440px max-width) & 8PT SPACING GRID (4 / 8 / 12 Cols)
    ↓
TWO-TIER INFORMATION ARCHITECTURE (Tier 1 Commercial → Tier 2 Exploratory)
    ↓
PROGRESSIVE DISCLOSURE & FEATURE GATEWAYS (Zero Monolithic Coupling)
    ↓
FLUID TYPOGRAPHY (clamp()) & OPTIMAL MEASURE (45–75 CPL)
    ↓
60-30-10 COLOR PALETTE & BACKGROUND-AWARE DYNAMIC CONTRAST (>= 4.5:1)
    ↓
COMPOSITED PHYSICS MOTION (transform/opacity) & REDUCED-MOTION RESPECT
    ↓
DEBOUNCED CLS-SAFE LOADERS & 8-STATE COMPONENT LIFECYCLE
    ↓
ACCESSIBLE FORMS, ACTIONABLE ERROR/EMPTY STATES & ARCHIVAL PRINT EXPORT
```

**Enterprise engineering. Human experience.**  
**Technology engineered with the precision of art.**