# Home Feature Specification

**Feature ID:** `FEAT-02-HOME`  
**Feature Name:** `home`  
**Public Route:** `/`  
**Tier:** Tier 1 Commercial Practice  
**Status:** Planned Contract  

---

## 1. Primary Purpose & Scannability Constraint
Establish immediate orientation, communicate the studio's democratized enterprise belief (*"Everyone deserves an enterprise solution"*), demonstrate Complexity Absorption, and route prospective clients to relevant capabilities via Feature Gateways.

- **Scannability Budget:** Strictly bounded to **6 compact sections** scannable within 2–3 desktop scrolls (`~2000px–3000px` total document height).
- **Scan Pattern:** Z-pattern header sweep transitioning into centered chunked modules.

---

## 2. Section Inventory & Structure

1. **Hero Section:**
   - Monospace Eyebrow: `BINARY SEQUENCE TECHNOLOGICAL ART`
   - Primary Headline (H1): `Everyone deserves an enterprise solution.`
   - Sub-Headline: `Enterprise engineering. Human experience.`
   - Lead Narrative: Scalable, maintainable systems designed around human workflows.
   - Primary Action: `Explore the Sequence Blueprint` $\rightarrow$ `/blueprint`
   - Secondary Action: `View Systems & Products` $\rightarrow$ `/products`
2. **Complexity Absorption Demonstration:**
   - Headline: `Complexity belongs in the architecture, not in your user's hands.`
   - Interactive preview trigger (`complexity-toggle`) opening an accessible dialog (`--z-modal`) demonstrating the 4:3 central architecture view with immediate text fallback.
3. **Commercial Service Disciplines (4 Modules):**
   - Custom Product Engineering, Architecture & Modernization, Operations / CI/CD / Cloud, Product Media & Launch Cinematography.
4. **Featured Ecosystem Snapshot (3 Cards):**
   - High-contrast status badges for `Supermarket` (`[STATUS: IN DEVELOPMENT]`), `Alert Wave` (`[STATUS: LIVE V1]`), and `HREWEMS` (`[STATUS: IN DEVELOPMENT]`).
5. **11-Stage Sequence Overview:**
   - Semantic ordered overview of the 11-step engineering lifecycle linking to `/method`.
6. **Terminal Call to Action:**
   - Primary: `Initiate a Sequence Blueprint` $\rightarrow$ `/blueprint`.
   - Secondary: `Direct Technical Inquiry` $\rightarrow$ `/contact`.

---

## 3. Gateway Architecture & Boundary Rules
- **Anti-Monolith Isolation:** Consumes `FeatureGatewaySummary` DTOs from `src/core/gateways/`. Zero imports of internal components or domain rules from `/studio`, `/products`, `/method`, or `/blueprint`.
- **Loading & State:** Implements debounced skeleton screen during initial feed hydration (`CLS < 0.05`).
