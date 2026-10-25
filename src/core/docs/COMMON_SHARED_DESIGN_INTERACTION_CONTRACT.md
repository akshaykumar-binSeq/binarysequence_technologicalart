# COMMON SHARED DESIGN, INTERACTION & MOTION CONTRACT

**Document Type:** Sub-Specification — Common Shared Design Tokens, Mechanics, Motion & State Contracts  
**Derived From:** `binary_sequence_screen_layout_ia_motion_loading_contract_final.md`  
**Scope:** Shared Core System (`src/core/`), Design Tokens, Baseline Grids, Typography, Dynamic Background Contrast, Hardware Motion, Perceived Loading & 8-State Component Lifecycle  
**Authority:** Canonical Implementation Contract for Common Shared Components & Design System  
**Status:** Approved Canonical Baseline  

---

## 1. Scope & Architectural Role

This document defines the common shared design mechanics, design tokens, mathematical scales, motion physics, and component contracts implemented in `src/core/` and consumed across all feature contexts.

It enforces the studio's governing axioms:
> **"Swiss Laboratory Meets Natural Observation"**  
> **"Complexity belongs in the architecture, not in the user's hands."**  
> **"Zero-Gimmick Functional Motion"**  
> **"Color Independence & Background-Aware Contrast"**

---

## 2. Baseline Grid & Spacing Scale (8pt System)

All component paddings, layout margins, element offsets, and grid gaps strictly adhere to an 8px baseline grid with a 4px half-step reserved exclusively for micro-spacing (inline badges, borders, tag gaps):

```css
:root {
  --space-1: 0.25rem; /*  4px: Micro-spacing, inline badge padding, tag offsets */
  --space-2: 0.50rem; /*  8px: Tight element grouping, icon-to-label gap */
  --space-3: 0.75rem; /* 12px: Compact button vertical padding, list item spacing */
  --space-4: 1.00rem; /* 16px: Base card padding, mobile outer margin, standard gap */
  --space-6: 1.50rem; /* 24px: Tablet outer margin, grid gutter, desktop card padding */
  --space-8: 2.00rem; /* 32px: Desktop grid gutter, sub-section vertical separation */
  --space-12: 3.00rem;/* 48px: Major content block separation */
  --space-16: 4.00rem;/* 64px: Primary section vertical padding (mobile/tablet) */
  --space-24: 6.00rem;/* 96px: Primary section vertical rhythm (desktop) */
}
```

### Multi-Column Grid Architecture
```css
.bs-grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, minmax(0, 1fr)); /* Mobile Portrait: 4 cols */
  gap: var(--space-4, 16px);
}

@media (min-width: 768px) {
  .bs-grid {
    grid-template-columns: repeat(8, minmax(0, 1fr)); /* Tablet Portrait: 8 cols */
    gap: var(--space-6, 24px);
  }
}

@media (min-width: 1025px) {
  .bs-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr)); /* Desktop / Widescreen: 12 cols */
    gap: var(--space-8, 32px);
  }
}
```

---

## 3. Typography Matrix & Fluid Scale (`clamp()`)

### 3.1 Font Family Roles
- **Structural & UI (`--font-structural`):** `'Inter Tight', -apple-system, BlinkMacSystemFont, sans-serif` — Headings, buttons, navigation, and form labels.
- **Editorial & Narrative (`--font-editorial`):** `'Newsreader', Georgia, serif` — Long-form essays, philosophical reflections, and founder thoughts.
- **Technical & Metadata (`--font-technical`):** `'JetBrains Mono', monospace` — Eyebrows, sequence numbers (`01`–`11`), status badges (`[STATUS: LIVE]`), code blocks, and metrics.

### 3.2 Fluid Scale Specifications
```css
:root {
  --text-display: clamp(2.0rem, 1.5rem + 2.5vw, 3.5rem);      /* 32px → 56px | Line-height: 1.10–1.18 */
  --text-h2:      clamp(1.5rem, 1.2rem + 1.5vw, 2.25rem);     /* 24px → 36px | Line-height: 1.15–1.25 */
  --text-h3:      clamp(1.25rem, 1.1rem + 0.75vw, 1.625rem);  /* 20px → 26px | Line-height: 1.25–1.35 */
  --text-lead:    clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem); /* 18px → 20px | Line-height: 1.50–1.60 */
  --text-base:    1.0rem;                                     /* 16px baseline | Line-height: 1.50–1.60 */
  --text-sm:      0.875rem;                                   /* 14px          | Line-height: 1.40–1.50 */
  --text-xs:      0.75rem;                                    /* 12px micro    | Line-height: 1.30–1.40 */
}
```

### 3.3 Readability & Mobile Form Inputs
- **Typographic Measure:** Continuous prose must stay strictly within **45–75 characters per line (CPL)** (`max-width: 65ch` or `600px–720px`).
- **Heading Balancing:** Apply `text-wrap: balance` to headings and `text-wrap: pretty` to body text.
- **Mobile Input Rule:** All form inputs (`<input>`, `<textarea>`, `<select>`) must enforce `font-size >= 16px` on mobile screens to prevent iOS Safari from triggering disruptive auto-zoom.

---

## 4. Color Systems, Dark Ergonomics & Dynamic Background Contrast

### 4.1 Canonical Palette (60–30–10 Distribution)
- **60% Dominant Base Surface:**
  - Dark Studio Ground: `Obsidian Carbon` (`#0B0C0E`). *Pure black (`#000000`) is strictly prohibited as a default canvas.*
  - Light Editorial Surface: `Warm Alabaster` (`#F6F5F0`).
- **30% Structural Secondary:**
  - Framing, cards, borders: `Deep Forest Slate` (`#1E293B`) and elevated tint (`#12151B`).
- **10% Intentional Accent:**
  - Active steps, focus rings, interactive focal points: `Signal Amber` (`#D97706` / hover `#F59E0B`).
- **Semantic Status Indicators:**
  - Muted text: `#94A3B8` (verified $\ge 4.5:1$ on `#0B0C0E`).
  - Verified / Live: `#10B981` (paired with `[STATUS: LIVE]`).
  - Warning / In Development: `#F59E0B` (paired with `[STATUS: IN DEVELOPMENT]`).
  - Danger / Error: `#EF4444` (paired with explicit error text and icon).

### 4.2 WCAG Contrast & Color Independence
- Body text must satisfy $\ge 4.5:1$ contrast against actual rendered surface (`7:1` target for editorial).
- Large display text and UI borders must satisfy $\ge 3.0:1$.
- **Color Independence Rule:** Status must never be communicated by color alone. Every colored badge must include explicit text (e.g. `[STATUS: PROTOTYPE]`).

### 4.3 Background-Aware Dynamic Foreground System (Unknown Media)
When text renders over photography, video frames, or generative backgrounds, components must implement `BackgroundProtectionContract`:
```typescript
export interface BackgroundProtectionProps {
  readonly backgroundContext: 'known-solid' | 'unknown-image' | 'dynamic-video' | 'complex-gradient';
  readonly foregroundStrategy: 'fixed-token' | 'adaptive-sample' | 'protected-scrim';
  readonly minContrastRatio?: 4.5 | 3.0;
}
```
- **Static Images:** Sample luminance in the exact bounding box of text and select `--fg-adaptive-light` (`#F6F5F0`) or `--fg-adaptive-dark` (`#0B0C0E`).
- **Video & High-Frequency Assets:** Apply a protected scrim (`background: linear-gradient(to top, rgba(11,12,14,0.88), transparent)`) or frosted glass container (`backdrop-filter: blur(8px); background: rgba(11,12,14,0.78)`).

---

## 5. Purpose-Driven Motion & GPU Compositor Contract

### 5.1 The Four Valid Motion Criteria
Animation is permitted only for:
1. **State Transition:** Confirming an element changed mode (modal open, accordion reveal).
2. **Spatial Hierarchy:** Showing origin/destination during workflow changes.
3. **Direct Feedback:** Tactile confirmation of button press or interaction.
4. **System Progress:** Reflecting background computation.
*Prohibited:* Looping decorative particles, unrequested scroll-jacking, and mouse-trail gimmicks.

### 5.2 Timing Brackets & Natural Physics Easing

| Tier | Duration | Token | Easing Curve | Token |
|---|---|---|---|---|
| **Micro-Feedback** | `120ms – 150ms` | `--duration-fast` | `cubic-bezier(0.4, 0.0, 0.2, 1)` | `--ease-standard` |
| **Component Transition**| `220ms – 300ms` | `--duration-medium`| `cubic-bezier(0.16, 1, 0.3, 1)` | `--ease-out-expo` |
| **Element Exit** | `150ms – 200ms` | `--duration-exit` | `cubic-bezier(0.4, 0.0, 1, 1)` | `--ease-in` |
| **Structural / View** | `350ms – 450ms` | `--duration-slow` | `cubic-bezier(0.16, 1, 0.3, 1)` | `--ease-out-expo` |

### 5.3 GPU Compositor Discipline & $CLS < 0.05$
- Animate **only** `transform` and `opacity`.
- Never animate layout properties (`width`, `height`, `margin`, `padding`, `top`, `left`). For accordion reveals, use `grid-template-rows: 0fr → 1fr` with opacity.
- All media elements (`<img>`, `<video>`, `<svg>`) must specify explicit `aspect-ratio` to reserve space before loading.

### 5.4 Mandatory `prefers-reduced-motion` Enforcement
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

---

## 6. Loading Architectures & Perceived Performance

### 6.1 The Latency Protocol
1. **`0ms – 100ms` (Instant):** Render target state immediately. Never show a loader.
2. **`100ms – 200ms` (Debounced Window):** Hold state with active button depression. Do not show visual loaders yet.
3. **`200ms – 1,000ms` (Short Wait):** Display inline button spinner or top indeterminate bar.
4. **`1,000ms – 10,000ms` (Structural Wait):** Render dimensionally matched skeleton screens or sequential staged loaders (`aria-busy="true"`).
5. **`> 10,000ms` (Timeout Boundary):** Display explicit progress text with a hard **15-second timeout gate** transitioning to actionable retry. *Loaders must never spin infinitely.*

### 6.2 The Six Canonical Loader Patterns
1. **Skeleton Screen (Ghost UI):** Geometry matches resolved content (`CLS = 0`); subtle pulse (`0.4 → 0.8`).
2. **Indeterminate Top Bar:** `2px` amber line fixed at `--z-sticky + 1` for route transitions.
3. **Inline Button Loader:** Lock button width, show spinner + label, disable to prevent double-submit.
4. **Sequential Staged Loader:** Monospace stage text (`[01/03] Checking...`) inside `aria-live="polite"`.
5. **Determinate Progress Bar:** Measurable downloads/uploads with `role="progressbar"`.
6. **Full-Screen Blocking Overlay:** Restricted to critical transactions; traps focus; times out safely.

---

## 7. Interaction Mechanics & The 8-State Component Lifecycle

### 7.1 Multi-Modal Touch & Pointer Ergonomics
- Universal touch target: $\ge 44\text{px} \times 44\text{px}$ minimum ($\ge 48\text{px} \times 48\text{px}$ preferred).
- Invisible hit expansion: Expand small icons to 44px via `::after { content: ""; inset: -14px; position: absolute; }`.
- Desktop pointer grouping (Fitts's Law): Keep related sequential controls spatially adjacent.
- Mobile thumb-zone priority: Place primary action triggers within the lower 40% of the screen.

### 7.2 The 8-State Canonical Component Lifecycle

| State | Visual Specification | Required Attributes |
|---|---|---|
| **1. Default** | Resting state; $\ge 3:1$ border contrast, $\ge 4.5:1$ text contrast. | Semantic tag (`<button>`, `<a>`, `<input>`) |
| **2. Hover** | 120ms surface tint elevation or amber border (`#F59E0B`). | Guarded by `@media (hover: hover)` |
| **3. Focus-Visible** | `2px solid #D97706` ring with `2px` offset. | `:focus-visible` pseudo-class |
| **4. Active** | Immediate tactile scale (`transform: scale(0.98)`). | `:active` pseudo-class |
| **5. Loading** | Locked width, inline spinner, interaction blocked. | `disabled`, `aria-busy="true"`, `aria-live="polite"` |
| **6. Disabled** | Opacity 0.45, `cursor: not-allowed`, helper text explaining why. | `disabled` or `aria-disabled="true"` |
| **7. Success** | Emerald/amber confirmation badge + text. | `role="status"` or `aria-live="polite"` |
| **8. Error** | `1.5px solid #EF4444` border + error icon + message. | `aria-invalid="true"`, `aria-describedby="err-id"` |

### 7.3 Cursor Semantics
- `cursor: default` — Non-interactive containers, body prose.
- `cursor: pointer` — Semantic links, buttons, summary elements.
- `cursor: text` — Inputs, selectable code blocks.
- `cursor: not-allowed` — Disabled elements.
- `cursor: grab / grabbing` — Draggable scrubber tracks.

---

## 8. Psychoacoustics & Internationalization

- **Audio Muted Default:** No sound may play without explicit user activation.
- **Acoustic Frequency Limits:** When enabled, cues must stay within warm low-fatigue registers (**120 Hz – 1,800 Hz**), avoiding frequencies $> 4,000\text{ Hz}$.
- **Text Expansion Buffer:** Intrinsic sizing (`fit-content`) accommodating 20%–35% text expansion.
- **CSS Logical Properties:** Mandatory use of `margin-inline`, `padding-block`, `border-inline-start`.
