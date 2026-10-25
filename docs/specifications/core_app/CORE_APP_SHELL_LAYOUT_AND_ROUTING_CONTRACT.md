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
- **Wordmark (Left):** `BINARY SEQUENCE TECHNOLOGICAL ART` (links to `/`).
- **Primary Tier 1 Links (Center/Right Desktop):**
  1. `Studio` $\rightarrow$ `/studio`
  2. `Products & Systems` $\rightarrow$ `/products`
  3. `Method` $\rightarrow$ `/method`
  4. `Blueprint` $\rightarrow$ `/blueprint`
- **Primary Action (Far Right):** `Start a Conversation` button $\rightarrow$ `/contact`.
- **Accessibility Anchor:** `Skip to Main Content` link focused at `--z-skip-link` (`z-index: 700`).
- **Mobile Drawer (Mobile/Tablet):** Hamburger toggle button (`aria-expanded`, `aria-controls="mobile-nav"`) opening an accessible slide-over drawer at `--z-drawer` (`z-index: 200`). Focus is trapped while open; `Escape` key dismisses immediately.

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
