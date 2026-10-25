# Requirements and Discrepancies Register

**Project:** Binary Sequence Technological Art  
**Phase:** Phase 0 — Workspace Discovery and Documentation-System Assessment  
**Date:** 2026-10-25  
**Assessor:** Antigravity (AI Assistant)  
**Status:** Complete  

---

## 1. Confirmed Requirements

The following requirements are explicitly corroborated across the foundational reference documents and authoritative specifications:

### 1.1 Brand & Strategic Identity
- **Studio Name:** Binary Sequence Technological Art (*Final Master v1.1, Section 1, 51*).
- **Core Proposition:** "Everyone deserves an enterprise solution" (*Final Master v1.1, Section 3, 46*).
- **Supporting Taglines:** "Enterprise engineering. Human experience." and "Technology engineered with the precision of art." (*Final Master v1.1, Section 49, 73*).
- **Core Architectural Thesis:** "Complexity should be absorbed by architecture, not transferred to the user." (*Final Master v1.1, Section 4*).
- **Positioning:** An independent, founder-led technical practice/studio—not a registered corporate entity, generic agency, or freelance portfolio (*Final Master v1.1, Change 01, Section 55*).
- **The Website’s Role:** The "First Public Technological Artifact" of the studio (*Final Master v1.1, Change 01, Section 55; Content Spec v1.1, Section 1.2*).

### 1.2 Founder Profile
- **Founder:** Akshay Kumar V J (*initial thought and plan.md; Final Master v1.1, Section 17, 52*).
- **Background:** Computer Science & Technology graduate, software engineer, technical consultant, product architect, photographer, cinematographer (*Final Master v1.1, Section 17, 52*).
- **Authored Works:** Domain-Driven Design principles for enterprise scalable system code architecture; coding architecture models, patterns, and guidelines for Flutter and Dart (*Final Master v1.1, Section 17, 52*).
- **Operating Model:** Geographically independent mobile studio (nomadic capability with laptop, internet, and cloud infrastructure) (*Final Master v1.1, Section 23*).

### 1.3 Product Ecosystem
The studio oversees a multi-product technical ecosystem categorized into distinct operational models (*Final Master v1.1, Section 25, 53, 55*):
1. **Time:** AI chat and interaction application.
2. **Alert Wave:** Product feedback, announcements, and digital engagement platform.
3. **HREWEMS:** Human resource and work execution management system.
4. **Resonance:** Experience layer, digital campfire, and community exploration.
5. **Just Breathe Valley:** Digital interface to physical mountain living.
6. **Supermarket:** End-to-end supermarket commerce and operations platform.
7. **Binary Sequence Studio:** The platform and engineering foundation behind the products.

*Requirement:* Each initiative must display an honest, verified status badge (`Planned`, `In Development`, `Experimental`, or `Active`). Unshipped products must never be represented as active commercial SaaS (*Content Spec v1.1, Rule 1*).

### 1.4 Site Architecture & Screen Inventory
- **Two-Tier Discovery Model:**
  - **Tier 1 (Commercial Practice — Primary Path):** Home (`/`), Studio (`/studio`), Products & Systems (`/products`), Sequence Method (`/method`), Sequence Blueprint (`/blueprint`), Contact (`/contact`).
  - **Tier 2 (Deep Exploratory Research — Secondary Path):** Engineering & Field Notebook (`/notebook`), Research & Experiments (`/research`), Founder Practice (`/founder`), Continuity & Trust (`/continuity`).
  - **Utility / Governance:** Privacy Notice (`/privacy`), Service Boundaries (`/service-boundaries`), System Not Found (`/404`).
- **Footer Structure:** Standard three-column layout (Commercial Practice, Notebook & Research, Legal & Governance) (*IA v2.0, Section 2.4*).

### 1.5 Design System Tokens (Swiss Laboratory Meets Natural Observation)
- **Palette:**
  - `Obsidian Carbon` (`#0B0C0E`) — Ground, depth, rigor.
  - `Warm Alabaster` (`#F6F5F0`) — Paper surface, high legibility.
  - `Signal Amber` (`#D97706`) — Action accents, focus rings, active states.
  - `Deep Forest Slate` (`#1E293B`) — Structural borders and dividers.
- **Typography:**
  - Structural / UI: `Inter Tight`
  - Editorial / Reflection: `Newsreader`
  - Technical / Metadata: `JetBrains Mono`
- **Accessibility & Motion:** Contrast compliance ($AA/AAA$), strict keyboard navigation, zero layout shift target, and explicit `prefers-reduced-motion` compliance (*Content Spec v1.1, Section 3; IA v2.0, Section 12.3*).

---

## 2. Document Contradictions & Discrepancy Log

| ID | Title | Documents & Sections Involved | Description of Contradiction | Recommended Resolution | Status |
|---|---|---|---|---|---|
| **DISC-001** | Contact Email Address | `Content Spec v1.0` (Sec 7.6) vs `Content Spec v1.1` (Sec 5) vs `IA v2.0` (Sec 8, 11.6) | Early drafts referenced `contact@binarysequence.art` and `inquiry@binarysequence.art`. IA v2.0 corrects this to `binarysequence.techart@gmail.com` as the sole active address. | **Confirmed:** Use `binarysequence.techart@gmail.com` across all copy and contact forms. Note that domain-specific addresses (`@binarysequence.art`) require DNS/MX verification before adoption. | **Resolved in IA v2.0** |
| **DISC-002** | System Verification Register | `Content Spec v1.1` (Sec 4.2) vs `IA v1.0` (Sec 1) vs `IA v2.0` (Sec 0, 9.2) | Content Spec v1.1 listed `System Verification Register` in the footer. IA v1.0 noted it was missing page copy. IA v2.0 formally defers it from V1 to prevent broken or empty routes. | **Adopt IA v2.0:** Omit `System Verification Register` from V1 navigation, footer, and routing. Introduce in Generation 2 when live telemetry infrastructure exists. | **Resolved in IA v2.0** |
| **DISC-003** | Sequence Scrubber Implementation | `Final Master v1.1` (Sec 67) vs `Content Spec v1.1` (Sec 3) vs `IA v2.0` (Sec 3.1) vs `Bootstrap DISCREPANCY_REGISTER.md` | Master v1.1 and Content Spec v1.1 describe an interactive 11-stage scrubber. IA v2.0 and the Bootstrap register warn that an interactive scrubber introduces excessive client state and layout shift risks for V1. | **Adopt Lean V1 Baseline:** Implement the 11 stages (*Observe → Evolve*) as an accessible, responsive static narrative for V1. Upgrade to a scrubbable component only after baseline performance and keyboard accessibility are verified. | **Resolved in IA v2.0** |
| **DISC-004** | Response SLA & Delivery Guarantees | `initial thought and plan.md` vs `Content Spec v1.0` vs `Final Master v1.1` (Sec 58, 59) vs `IA v2.0` (Sec 11.5) | Content Spec v1.0 implied a guaranteed "2 business day response" and fixed "2–3 week delivery" for the Sequence Blueprint. Final Master v1.1 and IA v2.0 state no response SLA or fixed delivery timeline may be published without validated operational capacity. | **Adopt Master v1.1:** Remove all fixed SLA claims (e.g. "48 hours") from public copy. State that inquiries are reviewed based on current studio capacity. | **Resolved in Master v1.1** |
| **DISC-005** | Onboarding Gate vs. Direct Landing | `DDD Guidelines v1.0` (Sec 3.1) & `Bootstrap` (`FEAT-01-ONB`) vs `Content Spec v1.1` (Sec 5) & `IA v2.0` (Sec 3.1) | DDD Guidelines and the Bootstrap package specify an Onboarding feature (`FEAT-01-ONB`) as an implementation gate (modal/state-machine dialog). Content Spec v1.1 and IA v2.0 specify direct landing on the Home page hero without modal obstruction. | **Confirmed Resolution (DEC-DR04):** Direct Home landing confirmed. Route `/` maps directly to `FEAT-02-HOME` (primary V1 implementation target). Visitors see the Home hero immediately. Mandatory onboarding gate is deferred from V1 launch; any future onboarding must be optional, dismissible, and non-blocking. | **Resolved by DEC-DR04** |
| **DISC-006** | Primary Technology Stack Selection | `Bootstrap ARCHITECTURE_INDEX.toml` vs `Final Master v1.1` (Change 15, Sec 69) | The Bootstrap package hardcodes `Next.js App Router + TypeScript + Firebase Firestore + Python FastAPI`. Final Master v1.1 explicitly dictates the *Minimum Appropriate Technology Rule*, stating that Astro + vanilla CSS is a strong candidate and technology must follow constraints rather than branding. | **Confirmed Resolution (DEC-DR03):** Next.js with App Router, TypeScript, and Firebase is the approved technology baseline for website V1. Specific Firebase services, security rules, and deployment approach must be documented prior to implementation. Domain logic must follow DDD boundaries. No extra backend without justification. | **Resolved by DEC-DR03** |
| **DISC-007** | Feature Naming & Route Inconsistencies | `IA v2.0` (Sec 1) vs `DDD Guidelines v1.0` vs `Bootstrap ARCHITECTURE_INDEX.toml` | Minor slug and naming drift: IA v2.0 uses `/method`, `/founder`, `/continuity`. Bootstrap uses `sequence-method`, `studio-founder`, `continuity-trust`. | **Align Conventions:** Public URL routes must remain clean and concise (`/method`, `/founder`, `/continuity`). Internal feature directories should adopt matching canonical names (`src/features/method/` or explicit mapping in routing table). | **Resolved in IA v2.0** |
| **DISC-008** | Physical Workspace Directory Discrepancy | Filesystem reality | Active workspace is `G:\binarysequence_technologicalart`, but all documents are in `G:\binarysequence_techart`. | **Maintain `binarysequence_technologicalart`** as the clean workspace and transfer canonical documentation into `docs/` during setup. | **Resolved in Phase 0** |

---

## 3. Unresolved Questions & Missing Inputs

Before Phase 1 implementation can safely begin, the status of key operational and technical questions is:

1. **Technology Stack Selection [RESOLVED — DEC-DR03]:** Next.js App Router + TypeScript + Firebase confirmed as approved technology baseline. Specific services and security rules to be documented prior to implementation.
2. **Onboarding Gate Scope [RESOLVED — DEC-DR04]:** Direct Home landing confirmed (`/` maps to `FEAT-02-HOME`); mandatory onboarding gate (`FEAT-01-ONB`) deferred from V1 launch; any future onboarding must be optional and non-blocking.
3. **Legal Documentation Copy [PENDING]:** Privacy Notice (`/privacy`) and Service Boundaries (`/service-boundaries`) are required routes in IA v2.0, but their specific legal text has not yet been authored.
4. **Contact Form Infrastructure [IN PROGRESS]:** Form submissions via `binarysequence.techart@gmail.com` will leverage Firebase / serverless integration; exact service configuration to be specified prior to implementation.
5. **Domain & Hosting Infrastructure [CONFIRMED BASELINE]:** Firebase Hosting aligned with approved Firebase stack (`DEC-DR03`). Domain `binarysequence.art` custom domain mapping pending DNS configuration.

---

## 4. Unsupported Assumptions to Guard Against

The following claims were flagged during discovery and must **never** be published or implemented without measured evidence:

- **"Zero Layout Shift (CLS = 0)":** Forbidden as an unmeasured promise (*Content Spec v1.1, Rule 6; IA v2.0, Section 12.3*). Must be stated as a design budget (`CLS < 0.05`) verified via Lighthouse/Web Vitals.
- **"100% Secure" / "Zero Bugs":** Prohibited under Editorial Rule 3 (*Content Spec v1.1, Rule 3*). Replace with specific practices (type safety, input sanitization, reproducible builds).
- **"Universal 5–15 Year Unlimited Support":** Prohibited under Editorial Rule 4 (*Content Spec v1.1, Rule 4*). Must be positioned as architectural lifecycle planning accompanied by defined commercial service agreements.
- **"Automated 2-Hour Handover & Universal Escrow":** Prohibited unless tested and contractually established (*Final Master v1.1, Change 06, Section 60*).
- **Unverified Case Studies or Telemetry:** Candidate blog/notebook titles from early drafts must not appear as published articles without authored text and real data (*IA v2.0, Section 11.7*).
