# Onboarding Feature Specification

**Feature ID:** `FEAT-01-ONB`  
**Feature Name:** `onboarding`  
**Public Route:** None (Overlay Gate)  
**Tier:** Deferred Implementation Feature / Optional Introduction  
**Derived From:** `binary_sequence_screen_layout_ia_motion_loading_contract_final.md` (Section 36)  
**Status:** **Deferred from V1 Launch (`DEC-DR04`)**  
**Governance Authority:** Confirmed Founder Decision `DEC-DR04` (Direct Home Landing)

---

## 1. Role & Purpose
**DEFERRED FOR V1 LAUNCH.** Per confirmed founder decision `DEC-DR04`, visitors see the Home hero immediately upon accessing `/`. Mandatory onboarding modals or full-screen introduction gates on initial entry are strictly prohibited.

If activated in a future iteration, it must provide only a lightweight, optional first-visit perceptual introduction illustrating `Binary → Sequence → Technology → Experience`. It must never become an unskippable obstacle to essential site content. Essential Home content must render in the initial HTML and never depend on completing onboarding.

---

## 2. Invariants & Bypass Rules

1. **`ONB-INV-001` (Reduced Motion Bypass):** If `prefers-reduced-motion: reduce` is active $\rightarrow$ The overlay is bypassed immediately (`transition_to(SKIPPED)`).
2. **`ONB-INV-002` (Crawler / SSR DOM Preservation):** If user-agent is a search bot/crawler or during SSR initial HTML $\rightarrow$ Core Home content remains rendered underneath in the DOM and is fully indexable.
3. **`ONB-INV-003` (Immediate Escape Dismissal):** Pressing the `Escape` key at any point $\rightarrow$ Dismisses the overlay immediately and persists the `SKIPPED` state.
4. **`ONB-INV-004` (Storage Degradation Safety):** If `localStorage` access throws an exception (incognito/restricted mode) $\rightarrow$ The repository degrades cleanly to an in-memory session variable without unhandled exceptions.

---

## 3. Viewport & Responsive Overrides
- **Elevation:** `--z-modal` (`z-index: 400`) over dimmed backdrop (`--z-backdrop`).
- **Dynamic Viewport Height:** `min-height: 100dvh`.
- **Landscape Mobile Compression:** When viewport height is $< 420\text{px}$, convert the vertical introduction stack into a compact 2-column horizontal split so "Enter the studio" and "Skip introduction" buttons remain visible without scrolling.
