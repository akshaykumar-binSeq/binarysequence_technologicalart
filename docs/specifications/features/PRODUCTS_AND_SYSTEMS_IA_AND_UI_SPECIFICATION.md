# Products & Systems Information Architecture (IA) and UI Specification

* **Authority:** Level 1 Foundational Master v1.0 & v1.1 Master Specification Alignment
* **Directory Route:** `/products` (`src/features/products/presentation/ProductsScreen.tsx`)
* **Product Details Route:** `/products/[id]` (`src/features/products/presentation/ProductDetailScreen.tsx`)
* **Authority Level:** LEVEL 3 Screen, Layout, Interaction & Information Architecture Contract
* **Status:** CONFIRMED & ACTIVE (Aligned to Master v1.1 CHG-01 Entity Separation)
* **Scope:** 6 Authentic Binary Sequence Products & Systems

---

## 1. Overview & Information Architecture Separation

In accordance with **CHG-01 (Entity Separation)**, the Products & Systems domain enforces strict separation between:
1. **The Architectural Practice (Binary Sequence Studio):** Documented at `/studio`.
2. **The Products & Systems Ecosystem:** Curated at `/products` and inspected at `/products/[id]`.

### 1.1 The Ecosystem Directory (`/products`)
The master catalog organizing Binary Sequence’s 6 authentic systems across 2 strategic clusters:
- **Cluster 01: Utility & Enterprise Software** (`Time`, `Alert Wave`, `HREWEMS`, `Supermarket`)
- **Cluster 02: Community & Places** (`Resonance`, `Just Breathe Valley`)

Each product card renders a striped tabular console row featuring:
- Monospace status indicator (`[STATUS: LIVE]`, `[STATUS: IN DEVELOPMENT]`, `[STATUS: CONCEPT / PROTOTYPE]`).
- Concise verified summary.
- Dual action triggers: `Quick Overview ▼` (in-situ disclosure drawer) and `Inspect Architecture →` (direct link to `/products/[id]`).

### 1.2 The Standalone Product Details Screen (`/products/[id]`)
Dedicated deep-dive views implementing the 6-layer layout:
- `/products/time`
- `/products/alert-wave`
- `/products/hrewems`
- `/products/supermarket`
- `/products/resonance`
- `/products/just-breathe-valley`

---

## 2. Six-Layer Product Details IA Hierarchy (`/products/[id]`)

```text
┌────────────────────────────────────────────────────────────────────────┐
│ ← Products & Systems Directory                                         │
├────────────────────────────────────────────────────────────────────────┤
│ [ Taxonomy Category Badge ]                                            │
│ Monolithic Product Title (h1)                                          │
├────────────────────────────────────────────────────────────────────────┤
│ INTERACTIVE HERO MEDIA SHOWCASE                                        │
│ [Ambient Radiant Dot-Grid Mesh // Product Interaction Card Mockup]     │
├──────────────────────────────────┬─────────────────────────────────────┤
│ STRUCTURED SPECIFICATION TABLE   │ EXECUTIVE SYNTHESIS & SOURCE ANCHOR │
│ • Category                       │ Executive narrative describing      │
│ • Publisher: Binary Sequence     │ architectural intent & philosophy.  │
│ • Pricing                        │                                     │
│ • Inputs                         │ [ Inquire Architecture: Name ↗ ]    │
│ • Output                         │ (High-contrast action link)         │
│ • Availability                   │                                     │
├──────────────────────────────────┴─────────────────────────────────────┤
│ DEEP-DIVE ARCHITECTURAL TRIAD                                          │
│ 1. The Problem It Solves (h2 + underline + prose)                      │
│ 2. How It Fits Your Workflow (h2 + underline + prose)                  │
│ 3. What to Expect (h2 + underline + bold-prefixed bulleted criteria)   │
│ Contextual Scope / Reference Link                                      │
├────────────────────────────────────────────────────────────────────────┤
│ SEQUENTIAL TRAJECTORY PAGINATION BAR                                   │
│ ← Previous: [Product Title]               Next →: [Product Title]      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 3. The 6 Canonical Product Teardowns

| ID | Product Name | Category Badge | Primary Architectural Invariant |
| :--- | :--- | :--- | :--- |
| **`time`** | Time | `AI & Conversational Intelligence` | Decoupled local inference gateways & sovereign context memory. |
| **`alert-wave`** | Alert Wave | `Digital Engagement & Feedback` | Sub-4KB embed SDK, zero layout shift, tamper-evident sentiment logs. |
| **`hrewems`** | HREWEMS | `Enterprise Operations & ERP` | Cryptographic geofenced attendance, DDD bounded contexts. |
| **`supermarket`** | Supermarket | `Retail Commerce & Logistics` | Real-time multi-branch catalog sync & atomic stock reservation queues. |
| **`resonance`** | Resonance | `Spatial Presence & Community` | Offline-first CRDT synchronization, zero algorithmic engagement loops. |
| **`just-breathe-valley`** | Just Breathe Valley | `Place-Based Computing & Ecology`| The Ten Mountain Rhythms interface & ambient microclimate telemetry. |

*(Note: Under Master v1.1 CHG-01, the Studio Platform is not a product; it is the overarching engineering practice documented on `/studio`).*

---

## 4. Navigation Flow & User Journey

1. **Header Navigation:** Clicking `Products & Systems` in the primary application header routes to `/products` (the Ecosystem Directory).
2. **Directory Exploration:** Visitors review all 6 systems grouped by domain cluster, scan operational status badges, and toggle inline quick overviews.
3. **Deep Teardown Inspection:** Clicking `Inspect Architecture →` opens `/products/[id]` with full technical specifications, interactive UI preview, and problem-solution teardown.
4. **Trajectory Traversal:** At the bottom of each product details screen, the trajectory bar allows seamless sequential traversal to adjacent Binary Sequence products.
5. **Directory Return:** A sticky breadcrumb (`← Products & Systems Directory`) allows immediate navigation back to `/products`.
