# CORE APP SHELL, LAYOUT & ROUTING CONTRACT

**Document Type:** Sub-Specification — Core Application Shell, Viewport, Layout & Routing  
**Derived From:** `binary_sequence_screen_layout_ia_motion_loading_contract_final.md`  
**Scope:** Root Application Shell (`src/app/`), Global Navigation Chrome, Viewport Constraints, Z-Index Layering, Route Transitions & Archival Print  
**Authority:** Canonical Implementation Contract for Core App Shell  
**Status:** Approved Canonical Baseline  

---

## 1. Scope & Architectural Role

This document defines the structural, viewport, routing, and chrome requirements for the root application shell (`src/app/`) of Binary Sequence Technological Art. 

The application shell provides the framing, accessibility landmarks, global navigation, modal portals, and route orchestrations using Next.js App Router and TypeScript (`DEC-DR03`). Route `/` maps directly to `FEAT-02-HOME` (the primary V1 implementation target), displaying the Home hero immediately without mandatory onboarding gates (`DEC-DR04`).

It enforces the project's foundational architectural axioms:
> **"Complexity belongs in the architecture, not in the user's hands."**  
> **"Content is constrained; environments may extend."**  
> **"Viewport conditions over device identities."**

---

## 2. Viewport Mechanics & Container Constraints

### 2.1 Max-Width Container & Bounded Centering
Primary prose, dense UI clusters, and functional views must never stretch uncontrollably across widescreen (16:9, 16:10) or ultra-wide (21:9, 32:9) monitors.

- **Canonical Width Range:** `1140px — 1440px`
- **Standard Token Implementation:**
  ```css
  .bs-container {
    width: min(100% - var(--space-8, 32px), var(--container-max-width, 1280px));
    margin-inline: auto;
  }
  ```
- **Surface Extension Behavior:** While `.bs-container` remains centered, ambient background surfaces (`Obsidian Carbon` `#0B0C0E` / `Warm Alabaster` `#F6F5F0`), subtle structural grid lines, and decorative header borders extend to the physical edges of the display.

### 2.2 The 4:3 Effective Visual Frame & Desktop Foveal Vision
Human sharp central vision spans approximately 60 degrees horizontally.
- On desktop and widescreen monitors, headings, key diagrams, primary actions, and reading columns must reside within a central visual field approaching a **4:3 effective composition**.
- Peripheral horizontal canvas space on wide monitors must be reserved for breathing room, subtle secondary indicators, or framing—never for scattering primary navigation controls or stretching text into unreadable single lines.

### 2.3 Landscape Mobile Vertical Compression Mode
When a mobile device rotates to landscape orientation, effective vertical viewport height drops below `380px — 420px` once browser chrome is rendered. The application shell must react dynamically:
1. **Header Compression:** Collapse or unpin sticky top headers so persistent navigation consumes $\le 15\%$ of vertical height.
2. **Horizontal Split View:** Convert vertical stacks into compact 2-column horizontal grids where content permits.
3. **Scrollable Overlays:** Full-screen dialogs and drawers must enforce `max-height: 90dvh; overflow-y: auto;` ensuring action buttons remain reachable.

### 2.4 Dynamic Viewport Height Units
Never use fixed `100vh` for full-screen application views. Always use dynamic viewport units with fallbacks:
```css
.bs-fullscreen-surface {
  min-height: 100vh;  /* Fallback */
  min-height: 100dvh; /* Dynamic viewport height adjusting for mobile browser chrome */
}
```
Use `svh` (small viewport height) when an element must fit without scrolling while browser chrome is expanded, and `dvh` for interactive overlay shells.

### 2.5 Breakpoint Architecture

| Viewport Mode | Width Range | Shell Behavior | Outer Margins |
|---|---|---|---|
| **Mobile Portrait** | `320px – 639px` | 4-column fluid stack; thumb-zone navigation; full-width cards. | `16px` (`--space-4`) |
| **Mobile Landscape / Small Tablet** | `640px – 767px` | 4–6 column adaptation; vertical compression active if `height <= 440px`. | `16px` – `24px` |
| **Tablet Portrait** | `768px – 1024px` | 8-column layout; bounded reading container (`720px–768px`). | `24px` – `32px` |
| **Desktop / Laptop** | `1025px – 1440px` | 12-column grid bounded to `1280px` max-width; 4:3 central canvas. | Centered auto |
| **Widescreen / Ultra-Wide** | `>= 1441px` | 12-column grid locked at `1280px–1440px`; peripheral ambient margins. | Centered auto |

---

## 3. Two-Tier Routing Architecture & Navigation Chrome

### 3.1 Sitemap & Route Declarations

```text
src/app/
├── (tier1)/
│   ├── page.tsx                          # Route: / (Home)
│   ├── studio/page.tsx                   # Route: /studio (Studio & Philosophy)
│   ├── products/page.tsx                 # Route: /products (Products & Systems)
│   ├── method/page.tsx                   # Route: /method (Sequence Method)
│   ├── blueprint/page.tsx                # Route: /blueprint (Sequence Blueprint)
│   └── contact/page.tsx                  # Route: /contact (Contact & Inquiry)
│
├── (tier2)/
│   ├── notebook/page.tsx                 # Route: /notebook (Engineering Notebook)
│   ├── research/page.tsx                 # Route: /research (Research & Experiments)
│   ├── founder/page.tsx                  # Route: /founder (Founder Practice)
│   └── continuity/page.tsx               # Route: /continuity (Continuity & Trust)
│
└── (utility)/
    ├── privacy/page.tsx                  # Route: /privacy (Privacy Notice)
    ├── service-boundaries/page.tsx       # Route: /service-boundaries (Terms)
    └── not-found.tsx                     # Route: 404 (State Not Found)
```

### 3.2 Global Header Architecture
- **Brand Lockup Unit (Left):** Canonical two-line stacked brand identity (links to `/`):
  - **Structure:** Permanent vertical column stack across all screen sizes (`display: flex; flex-direction: column; gap: 2px; white-space: nowrap;`). Horizontal row reflow at tablet/desktop is strictly prohibited.
  - **Line 1 (Primary):** `BINARY SEQUENCE` (`font-family: var(--font-technical); font-weight: 600; text-transform: uppercase; line-height: 1.2; letter-spacing: 0.12em; color: var(--text-high-contrast); font-size: var(--text-xs)` [12px] on mobile/tablet, `0.8125rem` [13px] on desktop).
  - **Line 2 (Secondary Descriptor):** `TECHNOLOGICAL ART` (`font-family: var(--font-technical); font-weight: 500; text-transform: uppercase; line-height: 1.2; letter-spacing: 0.08em; color: var(--text-muted); font-size: 0.625rem` [10px] on mobile, `0.6875rem` [11px] on tablet/desktop).
  - **Insignia Framing & Zero-Crop Rule:** Rendered via `public/images/icon-small.png` inside `.logoFrame`. Image style strictly mandates `object-fit: contain;` with `1:1` aspect ratio and `flex-shrink: 0;` to guarantee 0 subpixel clipping or distortion of the canonical visual mark.
  - **Single Identity Hover & Focus Synchronization:** The insignia and two-line typography constitute a single atomic identity. Hovering or focusing `.wordmarkLink` triggers synchronized visual feedback: `wordmarkPrimary` and `wordmarkSecondary` illuminate with `var(--color-signal-amber)` and circuit text-shadow, while `headerLogo` subtly scales (`1.03`) with a coordinated amber drop-shadow glow. Focus ring renders at `2px solid var(--color-signal-amber)` with `outline-offset: 4px`.
- **Primary Tier 1 Links (Center/Right Desktop):**
  1. `Studio` $\rightarrow$ `/studio`
  2. `Products & Systems` $\rightarrow$ `/products`
  3. `Method` $\rightarrow$ `/method`
  4. `Blueprint` $\rightarrow$ `/blueprint`
- **Primary Action (Far Right):** `Start a Conversation` button $\rightarrow$ `/contact`.
- **Accessibility Anchor:** `Skip to Main Content` link focused at `--z-skip-link` (`z-index: 700`).
- **Mobile Drawer (Mobile/Tablet):** Hamburger toggle button (`aria-expanded`, `aria-controls="mobile-navigation-drawer"`, touch target $\ge 48 \times 48\text{px}$) opening an accessible slide-over drawer at `--z-drawer` (`z-index: 200`). Focus is trapped while open; `Escape` key and close button dismiss immediately; background scroll is locked (`overflow: hidden`). Drawer displays identical 60 × 60 px `icon-small.png` (`object-fit: contain;`) and stacked two-line brand lockup.

### 3.3 Global Footer Architecture
Organized into three distinct functional columns plus colophon:
1. **Commercial Practice:** Home, Studio & Philosophy, Products & Systems, Sequence Method, Sequence Blueprint, Contact.
2. **Notebook & Research:** Engineering Notebook, Research & Experiments, Founder Profile, Continuity & Trust.
3. **Legal & Governance:** Privacy Notice, Service Boundaries. *(System Verification Register is explicitly deferred from V1).*
4. **Colophon:** Formal studio definition, founder identity, and dynamic copyright year.

### 3.4 Top Route-Loading Transition Bar
During client-side route segment transitions:
- Fixed `2px` height at top viewport edge.
- Layer: `--z-sticky + 1` (`z-index: 101`).
- Color: `var(--color-signal-amber, #D97706)`.
- Layout stability: Positioned fixed; zero impact on document flow (`CLS = 0`).

### 3.5 Global Brand Icon Visibility & Minimum-Size Contract
This contract governs all brand-icon presentations across the shared application shell, features, and responsive layouts.

1. **Canonical Asset References:**
   - Compact reference asset: `public/images/icon-small.png` (intrinsic: 356 × 356 px, high-contrast cobalt insignia with luminous amber circuit core).
   - Expanded ambient asset: `public/images/icon-big.png` (intrinsic: 518 × 518 px, metallic bezel frame with radiating ambient rays).
   - Registry authority: `BRAND_ASSETS` in `src/core/content/shell.content.ts`.

2. **Mandatory Minimum Rendered Size:**
   - **Compact Icon (`icon-small.png`): Absolute minimum 60 × 60 CSS pixels** in both rendered width and height across all contexts and viewports.
   - **Large Icon (`icon-big.png`): Absolute minimum 150 × 150 CSS pixels** in both rendered width and height (`icon-small` min 60px × 2.5 = 150px).
   - All brand icons must preserve their native 1:1 intrinsic aspect ratio.
   - All brand icons must declare `flex-shrink: 0` and explicit `min-width` / `min-height` constraints (`60px` for `icon-small.png`, `150px` for `icon-big.png`) to guarantee immunity from flex/grid compression.
   - All brand icons and their containers must never be clipped by `overflow: hidden`, browser viewport frame, or restrictive ancestor boundaries.

3. **Verified Responsive Dimensions:**
   - **Desktop Widescreen & HD (≥ 1025px):** App bar `72px` inner (`74px` outer); header logo container `96 × 96 px`; rendered icon `96 × 96 px` (`margin-block: -12px`); footer logo `160 × 160 px` (min `150 × 150 px`).
   - **Tablet Portrait & Small Desktop (768px – 1024px):** App bar `64px` inner (`66px` outer); header logo container `80 × 80 px`; rendered icon `80 × 80 px` (`margin-block: -8px`); footer logo `150 × 150 px`.
   - **Mobile Standard (375px – 767px):** App bar `56px` inner (`58px` outer); header logo container `64 × 64 px`; rendered icon `64 × 64 px` (`margin-block: -4px`); footer logo `150 × 150 px`.
   - **Mobile Mini (320px – 374px):** App bar `56px` inner (`58px` outer); header logo container `60 × 60 px`; rendered icon `60 × 60 px` (`margin-block: -3px`); footer logo `150 × 150 px`.
   - **Mobile Landscape (height ≤ 440px):** Header logo locked to mandatory minimum `60 × 60 px` (`margin-block: -4px`).
   - **Mobile Drawer:** Drawer brand icon rendered at `60 × 60 px` with `min-width: 60px; min-height: 60px; flex-shrink: 0`.
   - **Global Footer:** Rendered at `150 × 150 px` on mobile (< 1025px) and `160 × 160 px` on desktop (≥ 1025px), strictly satisfying the `150 × 150 px` (`60px * 2.5`) minimum constraint.

4. **Distinction Between Header-Bar Height and Logo-Container Dimensions:**
   - The horizontal app-bar rail defines the disciplined navigation ribbon (`56px` mobile, `64px` tablet, `72px` desktop).
   - The logo container (`.logoFrame`) is intentionally oversized and symmetrically punches through both the top and bottom borders of the rail.
   - The sticky `<header>` container provides deliberate top headroom (`8px` mobile, `12px` tablet, `14px` desktop) under a continuous dark glass backdrop (`rgba(11, 12, 14, 0.92)`, `backdrop-filter: blur(16px)`).
   - This ensures the top of the protruding logo rests at positive coordinates (`y ≥ 3px` in viewport) and is never clipped at `y < 0` during resting state or vertical scrolling.

5. **Rules for Selecting Compact vs. Larger Brand Assets:**
   - **Rule A (Compact Spaces):** Use `icon-small.png` wherever rendered space cannot comfortably accommodate the larger asset's outer metallic bezel while maintaining visual legibility.
   - **Rule B (Larger Spaces):** Use `icon-big.png` only when the rendered container is sufficiently sized (≥ 72 × 72 px on desktop) such that its metallic bezel and ambient glow provide a genuine visual benefit without crowding companion typography.
   - **Rule C (No Undersized Substitutions):** Never substitute a smaller arbitrary graphic or reduce dimensions below 60 × 60 px. Correct the container layout instead.
   - **Rule D (Aspect Ratio & Transparency):** Maintain 1:1 aspect ratio; apply explicit `border-radius`, hairline borders, and ambient drop-shadows calibrated to dark obsidian surfaces.
   - **Rule E (Centralized Consistency):** All consumers must import from `BRAND_ASSETS` in `src/core/content/shell.content.ts`.

6. **Inspection & Verification Protocol:**
   - Every branding change must be validated against computed box metrics (`getBoundingClientRect()`, `getComputedStyle()`) via headless browser automation.
   - Audit across the 6 canonical viewports (320×800, 375×812, 768×1024, 1024×768, 1280×900, 1440×1000).
   - Verification evidence required: Computed width/height ≥ 60px, `flexShrink === '0'`, `scrollWidth <= clientWidth` (0px horizontal overflow), `logoTop >= 0` (zero top clipping), zero console errors.

7. **Content Area Application Logo Contract & Minimum-Size Hierarchy:**
   - **Canonical Asset:** `public/images/logo-final-transparent.png` (intrinsic: 1024 × 1024 px, full wireframe wordmark + precision circuit insignia on transparent alpha).
   - **Domain Exclusivity (Content Area Only):** `logo-final-transparent.png` is reserved strictly for the content area (`<main id="main-content">` and feature page layouts). It is strictly prohibited in the shared shell landmarks (`<header>` and `<footer>`), which maintain their dedicated assets (`icon-small.png` and `icon-big.png`).
   - **Universal Content-Area Application Logo Mandate:** Wherever in the content area the application logo is displayed, `logo-final-transparent.png` MUST be used. No other brand asset may be substituted as the content-area application logo.
   - **Mathematical Sizing Hierarchy:**
     $$\text{Tier 1 (Header / Compact Nav)} = 60 \times 60\text{ CSS pixels}$$
     $$\text{Tier 2 (Footer / Ambient Anchor)} = \text{Tier 1} \times 2.5 = 60\text{px} \times 2.5 = \mathbf{150 \times 150\text{ CSS pixels}}$$
     $$\text{Tier 3 (Content Area Application Logo)} = \text{Tier 2} \times 1.7 = 150\text{px} \times 1.7 = \mathbf{255 \times 255\text{ CSS pixels}}$$
   - **Mandatory Minimum Dimensions:** `min-width: 255px; min-height: 255px;` with explicit `flex-shrink: 0; object-fit: contain;`.
   - **Responsive Scaling & Reflow:**
     - *Desktop (≥ 1025px):* Rendered at `280 × 280 px` (min `255 × 255 px`) in balanced two-column hero layout (`.heroLayout`), alongside `.heroContent`.
     - *Tablet Portrait (768px – 1024px):* Rendered at `255 × 255 px` centered in hero stack.
     - *Mobile Standard (375px – 767px):* Rendered at `255 × 255 px` centered in hero stack.
     - *Mobile Mini (320px – 374px):* Rendered at `255 × 255 px` centered in hero stack. Total available width inside container is $320\text{px} - 32\text{px} (\text{padding}) = 288\text{px}$, safely accommodating the 255px logo with 33px clearance and 0px horizontal overflow (`scrollWidth <= clientWidth`).

### 3.6 Main Content to Global Footer Transition & Page-Boundary Clearance Contract
This contract governs the physical and visual transition from the `<main>` application landmark into the shared `<footer>`.

1. **Clear Architectural Separation of Spacing Dimensions:**
   Page-to-footer spacing consists of four distinct, non-fungible dimensions that must never be conflated:
   - **Dimension 1 (Inter-Card Separation):** Internal distance between adjacent cards or panels across section boundaries (e.g. Continuity Card to Explore Further Card: 129px mobile, 193px desktop).
   - **Dimension 2 (Page / Section Boundary Clearance):** The internal bottom padding of the final page section or container (`padding-block-end: var(--space-12)` = 48px to `var(--space-16)` = 64px on mobile; `var(--space-16)` = 64px to `var(--space-24)` = 96px on desktop). Ensures the final card is held within its section boundary and never touches the main document edge.
   - **Dimension 3 (Shell Transition Margin):** The global shell clearance declared on `footer.module.css` (`margin-block-start: var(--space-24)` = 96px). Separates the `<main>` content landmark from the `<footer>` container.
   - **Dimension 4 (Footer Internal Padding):** The interior padding declared on `footer.module.css` (`padding-block-start: var(--space-16)` = 64px, `padding-block-end: var(--space-12)` = 48px).

2. **Prohibition of Zero-Padding Page Terminations:**
   A feature screen must never set `padding-block-end: 0` on its final section or root container if the final element is a bordered card or raised panel. Doing so creates an un-buffered visual collision with the page boundary.

3. **Protection of Shared Shell Footer Styles:**
   Shared footer styles (`footer.module.css`) must not be modified to accommodate page-specific layout defects. Page clearance must be solved within the feature's own section and container styles.

### 3.7 App Bar Logo Icon Projection Clearance Contract Across All Content Areas
This contract governs how all page content, sticky child components, section navigation elements, and scroll targets interact with the sticky header and its oversized, protruding brand logo medallion.

1. **The Architectural Principle:**
   The primary application bar is not a simple flat rectangular strip. The brand medallion (`.logoFrame` / `icon-small.png`) intentionally punches through the horizontal app rail, projecting downwards into the content viewport. All content area layouts must respect this projection as an authoritative physical boundary.

2. **Total Reach Coordinates (from Viewport Top):**
   - **Mobile Mini (< 375px):** `70px` (8px top pad + 56px rail + 3px protrusion + 3px hover scale buffer).
   - **Mobile Standard (375px – 767px):** `72px` (8px top pad + 56px rail + 4px protrusion + 4px hover scale buffer).
   - **Tablet Portrait (768px – 1024px):** `88px` (12px top pad + 64px rail + 8px protrusion + 4px hover scale buffer).
   - **Desktop Widescreen (≥ 1025px):** `104px` (14px top pad + 72px rail + 12px protrusion + 6px hover scale buffer).
   - **Mobile Landscape (height ≤ 440px):** `64px`.

3. **Mandatory Token Consumption:**
   Page features and components are prohibited from hardcoding arbitrary top offsets (e.g. `top: 66px`, `top: 76px`, `top: 96px`). All content must consume canonical CSS tokens:
   - `--header-total-reach`: Absolute coordinate boundary of the protruding medallion.
   - `--sticky-top-clearance`: Mandatory `top` position for any secondary sticky component (e.g. `position: sticky; top: var(--sticky-top-clearance);`). Ensures positive breathing room below the medallion (`88px` mobile, `112px` tablet, `128px` desktop).
   - `--scroll-anchor-clearance`: Mandatory `scroll-margin-top` for section headers and hash targets (`96px` mobile, `120px` tablet, `136px` desktop).

4. **Universal Scope:**
   This constraint applies universally throughout the entire application—to the Studio foundation stage navigator (`01 Binary | 02 Sequence | 03 Technology | 04 Art`), sticky visual instruments, hero section paddings, table of contents bars, filter ribbons, and all section scroll anchors. Zero visual collision between the brand medallion and content is permitted.

---

## 4. Z-Index Layering & Stacking Context Governance

Arbitrary `z-index` declarations are strictly forbidden across the codebase. All elevated elements must consume canonical elevation tokens:

```css
:root {
  --z-below: -1;       /* Decorative background canvases and ambient grid meshes */
  --z-base: 0;         /* Standard document flow */
  --z-surface: 10;     /* Raised interactive cards, active grid items, sticky sub-headers */
  --z-sticky: 100;     /* Global primary header bar and route progress bar */
  --z-drawer: 200;     /* Mobile navigation drawer and slide-over panels */
  --z-backdrop: 300;   /* Dimmed modal and drawer backdrop overlays */
  --z-modal: 400;      /* Accessible modal dialogs and onboarding gates */
  --z-popover: 500;    /* Tooltips, dropdown menus, and floating hints */
  --z-toast: 600;      /* System alerts, connectivity banners, and feedback toasts */
  --z-skip-link: 700;  /* Keyboard "Skip to Main Content" link when focused */
}
```

---

## 5. Scroll Architecture & Single Document Flow

- **Single Primary Document Scroll:** The application shell enforces a single vertical document scrollbar on `<html>`/`<body>`.
- **Nested Scroll regions:** Forbidden unless functionally indispensable (e.g. horizontally scrollable `<pre><code>` blocks). Any region with internal scrolling must declare `tabindex="0"`, have visible focus indicators, and support keyboard arrow navigation.

---

## 6. Archival Print & PDF Export Contract (`@media print`)

To support client procurement, stakeholder reviews, and offline archiving of Blueprints and EDRs, the app shell enforces universal print styles:

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

  /* Prevent awkward mid-element page breaks */
  article, section, pre, blockquote, .bs-card, tr {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  /* Inline URL expansion for paper readability */
  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-family: var(--font-technical);
    font-size: 9pt;
    color: #333333;
  }
}
```

---

## 7. App Shell Acceptance Verification Gates

Before approving the application shell:
- [ ] Bounded container (`1140px–1440px`) centers properly on 2560px and 3840px monitors.
- [ ] No horizontal document scrollbar appears at any viewport from 320px to 3840px.
- [ ] Mobile landscape orientation (`< 420px` height) compresses header and allows overlay scrolling without clipping action buttons.
- [ ] All 10 routes render their canonical layouts with matching `<title>` and metadata.
- [ ] Skip link appears upon initial `Tab` press and shifts focus directly to `<main id="main-content">`.
- [ ] All modals, drawers, and headers strictly consume `--z-*` elevation tokens.
- [ ] Print preview inverts dark ground to clean white paper layout without navigation chrome.
