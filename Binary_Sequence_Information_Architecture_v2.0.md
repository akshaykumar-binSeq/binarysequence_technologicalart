# Binary Sequence Technological Art
## Information Architecture — Version 2.0

**Status:** Approved for low-fidelity wireframing, with the contact-routing correction and governance decisions recorded in Sections 9–12  
**Source of truth:** *Audience-Facing Content Specification — Version 1.1*  
**Purpose:** Define page hierarchy, navigation, section order, visitor journeys, content placement, V1 boundaries, and low-fidelity screen wireframes before high-fidelity visual design.  
**Constraint:** This document organizes existing approved content. It does not create new marketing copy, add new offerings, or prescribe visual styling.
**Version 2.0 change:** Corrects contact routing to reflect the single currently configured address, `binarysequence.techart@gmail.com`, and removes the assumption that either `inquiry@binarysequence.art` or `contact@binarysequence.art` is available. The existing IA and wireframe structure are otherwise retained.

---

## 0. IA Principles and Decisions

1. **One website, two depths.** Commercial and exploratory content are connected through contextual links and the footer; Tier 2 is not a separate website or a competing primary journey.
2. **Commercial clarity first.** The first visit should quickly answer what the practice does, what systems it has worked on or is building, how it approaches engineering, and how to start a conversation.
3. **Progressive disclosure.** Explain the practical value first. Link to detailed engineering, research, founder perspective, and continuity information for visitors who want more depth.
4. **Sequence Blueprint remains commercial.** It is directly reachable from the home page, primary navigation, and relevant service/method content. It is not hidden behind research content.
5. **Status and evidence are structural content.** Product cards must show verified status. Unverified claims and capabilities must not be represented as established facts.
6. **No premature visual decisions.** This IA specifies hierarchy, order, purpose, and links—not colors, typography, motion styling, layout composition, animation, or component appearance.
7. **Content is not silently rewritten.** Where the v1.1 specification contains conflicts, missing decisions, or claims requiring verification, this document flags them for resolution rather than inventing an answer.

## 1. Sitemap and Hierarchy

```text
Binary Sequence Technological Art
│
├── Tier 1 — Commercial Practice
│   ├── Home                                      /
│   ├── Studio & Philosophy                       /studio
│   ├── Products & Systems                        /products
│   ├── Sequence Method                           /method
│   ├── Sequence Blueprint                        /blueprint
│   └── Contact & Project Inquiry                 /contact
│
├── Tier 2 — Exploration (contextual links + footer)
│   ├── Engineering & Field Notebook              /notebook
│   ├── Research & Experiments                    /research
│   ├── Founder Practice                          /founder
│   └── Continuity & Trust                        /continuity
│
└── Utility / Governance
    ├── Privacy Notice                            /privacy
    ├── Terms & Service Boundaries                 /service-boundaries
    └── Not Found                                 /404 (system route)
```

### Sitemap notes
- The route names above are **proposed route slugs for IA clarity**, not new public-facing content. They can be adjusted during implementation without changing the page hierarchy.
- Home is an explicit page and a wordmark destination, even though the v1.1 header's list of text links does not include a separate `Home` item.
- The source specification names a `System Verification Register` footer link but provides no page content or evidence model. This IA explicitly defers the link and route from V1; see Section 9.2.
- Privacy Notice and Terms & Service Boundaries are named in the source specification but their page copy is not supplied. They are required governance destinations only if the corresponding functionality/content is ready to publish.
- The v1.1 specification calls the exploratory founder destination both `Founder & Multidisciplinary` and `Founder Practice`; this IA uses the navigation label `Founder Practice`, while the page content remains `Founder — Akshay Kumar VJ`.

## 2. Navigation Model

### 2.1 Global header

**Purpose:** Keep the main commercial path short and make the primary engagement action consistently available.

- **Wordmark:** `BINARY SEQUENCE TECHNOLOGICAL ART` → Home.
- **Primary navigation, in source order:**
  1. `Studio` → Studio & Philosophy
  2. `Products & Systems` → Products & Systems
  3. `Method` → Sequence Method
  4. `Blueprint` → Sequence Blueprint
- **Primary action:** `Start a Conversation` → Contact & Project Inquiry.
- **Accessibility link:** `Skip to Main Content` → main landmark.
- **Mobile drawer controls:** `Open navigation` and `Close navigation`.

**Navigation rule:** Do not add all Tier 2 pages to the primary header. They remain discoverable through contextual links and the footer so the commercial path stays clear.

### 2.2 Home page links

The home page is the central distribution point to all Tier 1 commercial pages:
- Hero primary CTA: `Explore the Sequence Blueprint` → Blueprint.
- Hero secondary CTA: `View Systems & Products` → Products.
- Studio philosophy link → Studio.
- Method link → Method.
- Ecosystem directory link → Products.
- Closing primary CTA: `Initiate a Sequence Blueprint` → Blueprint.
- Closing secondary CTA: `Direct Technical Inquiry` → Contact.

### 2.3 Contextual routes into Tier 2

Tier 2 should be reached from relevant content, not through an unrelated detour. The following are structural link placements inferred from the v1.1 content topics; the exact link copy should reuse approved labels where provided.

- Studio quality/architecture discussion → Engineering & Field Notebook.
- Sequence Method's inspectable-decision narrative → Engineering & Field Notebook.
- Product cards or architecture discussions, where relevant and confidentiality permits → related public notebook entry.
- Founder's technical and creative perspective → Founder Practice.
- Research references in the founder/creative dimension → Research & Experiments.
- Ownership, handover, and maintenance concerns → Continuity & Trust.
- Footer provides a stable route to all Tier 2 hubs.

Do not expose private client data, unpublished system details, or confidential implementation specifics merely to create a contextual link.

### 2.4 Footer architecture

Use the source-defined three-column grouping:

**Commercial Practice**
- Home
- Studio & Philosophy
- Products & Systems
- Sequence Method
- Sequence Blueprint
- Contact (recommended here as an explicit route because it is a core commercial destination; this is navigation placement, not new content)

**Notebook & Research**
- Engineering Notebook
- Research & Experiments
- Founder Profile
- Continuity & Trust

**Legal & Governance**
- Privacy Notice
- Service Boundaries
- System Verification Register: deferred from V1; do not include a link or route.

**Colophon:** Use the source-defined ethos and founder-led-practice description. The year must be generated or confirmed at implementation; do not hard-code an outdated year.

### 2.5 Navigation and route states

- Every route must have a clear page title and a meaningful main heading.
- The 404 route uses the exact supplied state copy: `404: State Not Found`, its supplied explanation, and `Return to Studio Home` action.
- Form states and scrubber labels are interaction states, not separate sitemap pages.
- Loading, error, and success states must not become independent routes unless implementation requirements later establish a need.

## 3. Page Architecture: Ordered Sections and Purpose

This section specifies the page-level content order based on the v1.1 screen inventory. It does not prescribe layout or visual treatment.

### 3.1 Home `/`

**Primary purpose:** Establish the practice's commercial proposition and guide visitors to systems, method, Blueprint, or contact.

1. **Hero** — Identify the practice, state the core proposition and supporting line, summarize the service value, and present the Blueprint and Products routes.
2. **Complexity Absorption** — Explain the principle that architecture absorbs complexity; introduce the four engineering principles.
3. **Commercial Service Disciplines** — Summarize the four existing disciplines: custom product engineering; architecture and modernization; operations/CI/CD/cloud; product media and launch cinematography.
4. **Featured Ecosystem Snapshot** — Preview the three products named in the source's home page snapshot: Supermarket, Alert Wave, and HREWEMS, each with a verified status.
5. **11-Stage Sequence Overview** — Introduce the method and link to the full Method page. V1 may present the sequence as readable static content; see scope boundary.
6. **Closing Action: Start an Idea** — Route to Blueprint or direct Contact.

**Page-level route-outs:** Studio, Products, Method, Blueprint, Contact. Tier 2 links may appear only where contextually useful; they should not interrupt the primary commercial path.

### 3.2 Studio & Philosophy `/studio`

**Primary purpose:** Explain the name and philosophy, demonstrate quality standards, and clarify the founder-led delivery model.

1. **Etymology of the Practice** — Binary → Sequence → Technology → Art.
2. **Democratizing Enterprise Systems** — Explain enterprise-minded quality without unnecessary enterprise overhead.
3. **Seven Pillars of Software Quality** — Maintainability; data authority/privacy; reliability; performance; resource/cost efficiency; continuity/zero lock-in; calm ergonomics.
4. **Single-Practitioner Enterprise Model** — Explain direct founder involvement and continuity protocol claims, subject to verification.

**Page-level route-outs:** Method for the process; Blueprint for starting a project; Continuity & Trust for detailed ownership and handover information; Founder Practice for broader biography and creative work.

### 3.3 Products & Systems `/products`

**Primary purpose:** Present the ecosystem without confusing operational software with community/physical-world experiences or treating all items as equivalent maturity.

1. **Ecosystem Directory Introduction** — Explain the purpose of the directory using source copy.
2. **Utility & Enterprise Software Platforms**
   - Time — AI Conversational System.
   - Alert Wave — Product Telemetry & Communication Platform.
   - HREWEMS — Human Resource & Work Execution Management System.
   - Supermarket — Omnichannel Retail & Operations Ecosystem.
3. **Community & Environmental Experiences**
   - Resonance — Location-Aware Experience Platform.
   - Just Breathe Valley — Digital Interface to Mountain Living.
4. **Public Artifacts**
   - Binary Sequence Technological Art website (V1 artifact).

Every item must carry a truthful status, and its description must distinguish what exists now from what is intended or planned. Do not imply all listed projects are publicly available products.

**Page-level route-outs:** Relevant verified live product/project destinations only; Method for the shared engineering approach; Contact for a project conversation. Product links must not be invented where a verified URL is unavailable.

### 3.4 Sequence Method `/method`

**Primary purpose:** Make the studio's process inspectable and show how understanding, modeling, architecture, implementation, measurement, and operation relate.

1. **Introductory Narrative** — State why a deliberate lifecycle matters.
2. **11-Stage Sequence** — Present the supplied stages in source order: Observe → Question → Understand → Model → Architect → Create → Engineer → Measure → Refine → Operate → Evolve.
3. **Inspectable by Design** — Explain the documented-decision principle and connect to the Engineering & Field Notebook where relevant.

**Page-level route-outs:** Blueprint for the Phase 0 engagement; Products for examples of systems; Notebook for public engineering decisions.

**Interaction note:** The source specification references an interactive sequence scrubber. The IA reserves a place for the sequence content, but does not require a complex interactive scrubber for V1. A static, fully readable sequence is the baseline; an accessible interactive version is a later enhancement unless implementation review demonstrates it is essential.

### 3.5 Sequence Blueprint `/blueprint`

**Primary purpose:** Explain the Phase 0 discovery engagement, its standalone deliverables, and collect a focused inquiry.

1. **Engagement Positioning** — Define the discovery engagement and intended value using the source's existing positioning.
2. **Tangible Blueprint Deliverables** — Domain model/business entities; system architecture specification; security/privacy/data-authority matrix; third-party dependency/cost audit; interactive functional wireframe prototype; technical delivery roadmap/acceptance gates.
3. **Three Core Inquiries**
   - System purpose.
   - Core problem.
   - Five-year horizon.
4. **Context & Contact Fields** — Existing systems/workflows, known constraints, name, work email, organization/project name.
5. **Submission States** — Submitting, success, and error states from the source specification.

**Page-level route-outs:** Contact for non-Blueprint inquiries; Continuity & Trust where ownership/handover is a material question.

**Commercial integrity gate:** The source describes the engagement as a fixed-scope 2–3 week engagement and includes a “Standalone Guarantee.” Before publication, confirm scope, fee, delivery window, intellectual property/ownership terms, revision limits, exclusions, and whether every listed deliverable is actually included. Do not turn these phrases into live commercial commitments until confirmed.

### 3.6 Contact & Project Inquiry `/contact`

**Primary purpose:** Offer a clear route for new builds, existing-system consultations, and technical collaboration.

1. **Header & Pathways** — Blueprint route, existing-system consultation path, direct email, and location statement.
2. **General Inquiry Form** — Name, email, subject/topic, project overview/context, optional budget/timeline.
3. **Privacy Notice** — Use the supplied explanation only after its data handling claims match the actual form and backend.
4. **Submission and Error States** — Accessible validation, submission feedback, and fallback contact route.

**Page-level route-outs:** Blueprint for Phase 0; Products for context. Keep the general inquiry form distinct from the Blueprint's longer discovery form.

### 3.7 Engineering & Field Notebook `/notebook`

**Primary purpose:** Publish public, evidence-based technical decisions and observations without exposing confidential client information.

1. **Header and Purpose** — Describe the notebook as a record of engineering decisions and observations.
2. **Taxonomy** — EDR, Telemetry, Analysis/Field Observation, Hypothesis/Open Question.
3. **Standard Entry Template** — Title, category, date, status, context, hypothesis, options, decision, empirical result, limitations.
4. **Initial Publication Registry** — The three candidate notes supplied in v1.1.

**V1 publication rule:** A candidate entry is not a published result merely because it appears in the registry. Publish only after the entry exists, evidence is reviewed, limitations are stated, and client confidentiality is checked. If no entries are ready, retain the hub structure without implying that the candidate articles are already available.

### 3.8 Research & Experiments `/research`

**Primary purpose:** Give the founder's research and creative curiosity a clearly exploratory home, separate from commercial guarantees.

1. **Header and Empirical Safeguard** — Explain that experiments do not imply production readiness or commercial guarantees.
2. **Research Clusters** — Artificial intelligence/local inference; electronics and signal processing; sound physics/acoustic frequency; cinematography/natural observation; computational perception and physical systems as listed in the source.

**V1 publication rule:** Use the supplied topic clusters as taxonomy only when there is genuine material to show. Do not invent experiment results, live tools, or research dashboards to fill the page. A concise introductory page is acceptable if the work is not yet ready for a detailed catalogue.

### 3.9 Founder Practice `/founder`

**Primary purpose:** Introduce Akshay Kumar VJ as the practitioner behind the studio and connect technical work with creative observation.

1. **Biography & Perspective** — Founder profile, role, location, and narrative.
2. **Technical Competencies & Specializations** — The stack and disciplines listed in v1.1, subject to confirmation.
3. **Architecture Authorship & Guidelines** — Explain the DDD, Flutter, and Dart architecture models with precise authorship boundaries.
4. **Creative Dimension** — Cinematography, visual storytelling, wildlife/nature photography, and geographic independence.

**Verification gate:** Confirm education/degree wording, professional-expertise claims, the listed technology competencies, “extensive field experience,” and the precise scope of authored/proprietary architecture models before publication. Do not inflate authorship into a claim of inventing DDD itself.

### 3.10 Continuity & Trust `/continuity`

**Primary purpose:** Address client ownership, transition, operational resilience, and support boundaries with specific practices rather than broad reassurance.

1. **Continuity Protocol** — Introduce client autonomy and operational continuity.
2. **Four Pillars** — Code/asset ownership; infrastructure-as-code and account isolation; encrypted backups and recovery runbooks; handover and escrow compatibility.
3. **Maintenance vs. SLAs** — Explain the distinction between ongoing maintenance and separately agreed contractual service levels.

**Verification gate:** These statements describe substantial delivery obligations. Publish them as commitments only if they are part of the actual engagement template and can be fulfilled consistently. If practices vary by project, the page and contracts must say so accurately.

### 3.11 Utility and governance routes

**Privacy Notice:** Required to explain actual data collection, purposes, retention, processors, and contact routes for inquiry forms. The v1.1 specification names the page but does not supply full policy content.

**Terms & Service Boundaries:** Required if the site presents contractual services or inquiry workflows. Must be authored/reviewed separately; no legal terms are supplied in v1.1.

**System Verification Register:** Deferred from V1. The source names it in the footer but supplies no content or evidence model. Do not build a dashboard or invent verification entries.

**404:** Use the exact supplied 404 copy and a clear route back to Home.

## 4. Visitor Journeys

These journeys define intended routes through existing content, not new promises or audience segments beyond those implied by the source.

### 4.1 Prospective client with a new idea

`Home → Sequence Blueprint → Blueprint deliverables → Three Core Inquiries → Submit inquiry`

Alternative route: `Home → Method → Blueprint → Submit inquiry`.

**Success condition:** Visitor understands what the Phase 0 engagement is, what it is expected to produce, and how to initiate a discussion. Do not require visitors to read Tier 2 content first.

### 4.2 Business with an existing system

`Home → Studio → Contact`

Alternative route: `Home → Products & Systems (understand practice breadth) → Studio or Method → Contact`.

The contact page's existing-system pathway should cover architecture review, performance optimization, and legacy decoupling as supplied in the source.

### 4.3 Product evaluator

`Home → Products & Systems → Select category/product → Review description + verified status → Contact or verified external product destination`

**Success condition:** Visitor can distinguish utility software, community/physical-world experiences, and public artifacts, and can tell whether a product is live, in development, experimental, or planned. If status or destination is not verified, do not imply availability.

### 4.4 Technical evaluator / engineering peer

`Home or Studio → Method → Engineering & Field Notebook → Relevant entry`

Alternative route: `Products & Systems → Notebook` through a relevant public technical reference.

**Success condition:** Visitor can inspect documented reasoning and evidence without being shown confidential or unverified material.

### 4.5 Research- and creativity-oriented visitor

`Studio or Footer → Research & Experiments → Research cluster`

Alternative route: `Founder Practice → Creative Dimension → Research & Experiments`.

**Success condition:** Visitor understands that this is an exploratory practice and does not mistake research interests for guaranteed commercial capabilities.

### 4.6 Visitor assessing founder dependence / continuity

`Studio → Continuity & Trust → Contact or Blueprint`

Alternative route: `Footer → Continuity & Trust`.

**Success condition:** Visitor can understand the proposed ownership, infrastructure, backup, handover, and maintenance boundaries. Claims must be backed by actual delivery practices and contract terms.

### 4.7 Returning visitor seeking direct contact

`Header CTA → Contact`

Alternative route: `Footer → Contact` or `Blueprint → Contact`.

**Success condition:** The direct inquiry route remains easy to find and does not force a visitor through the Blueprint form.

## 5. Content Mapping and Reconciliation

### 5.1 v1.1 section-to-IA map

| Content specification source | IA destination | Treatment |
|---|---|---|
| §1 Purpose and Strategic Architecture | Global IA principles + sitemap | Governs the two-tier hierarchy and page relationships; not a public page by itself. |
| §1.1 Two-Tier Architectural Model | Sitemap + navigation model | Preserve the six commercial destinations and four exploratory destinations. |
| §1.2 First Public Technological Artifact | Home/Studio framing + V1 acceptance | Treat as positioning, not a separate page. |
| §2 Editorial Rules and Governance | Global content governance | Applies across all pages; not duplicated verbatim on every page. |
| §3 Design System & Interaction Tokens | Later design-system phase | Reference only; intentionally excluded from page layout and visual decisions in this IA. Scrubber is scope-gated below. |
| §4 Navigation Architecture | Global header, footer, contextual links | Use source-defined labels; resolve naming and contact-placement gaps. |
| §5 Screen 01 Home, Sections A–F | Home, sections 1–6 | Keep all six sections in the supplied order. |
| §5 Screen 02 Studio & Philosophy, Sections A–D | Studio, sections 1–4 | Keep four sections in the supplied order. |
| §5 Screen 03 Products & Systems | Products, directory + three categories | Preserve categories and all seven named entries. |
| §5 Screen 04 Sequence Method, Sections A–C | Method, sections 1–3 | Preserve 11-stage order and inspectable-decision narrative. |
| §5 Screen 05 Sequence Blueprint, Sections A–C | Blueprint, sections 1–5 | Preserve deliverables and form workflow; verify commercial commitments. |
| §5 Screen 06 Contact, Sections A–B | Contact, sections 1–3 | Keep general inquiry distinct from Blueprint inquiry. |
| §6 Screen 07 Engineering & Field Notebook | Notebook, sections 1–3 | Candidate articles remain candidates until written and verified. |
| §6 Screen 08 Research & Experiments | Research, header + clusters | Do not invent results or dashboards. |
| §6 Screen 09 Founder — Akshay Kumar VJ | Founder, sections 1–4 | Preserve technical and creative dimensions; verify claims. |
| §6 Screen 10 Trust, Governance & Operational Continuity | Continuity, sections 1–3 | Verify operational commitments against real delivery practices. |
| §7.1 Global Header | Global header | Apply on every route. |
| §7.2 Global Footer | Global footer | Apply on every route; verification-register link unresolved. |
| §7.3 System State Copy | Component/interaction states + 404 | Treat as shared states, not extra content pages except 404. |
| §8 Lean V1 Acceptance Criteria | V1 launch gates | Apply across implementation and QA. |
| §9 Summary & Final Declaration | Global brand/closing copy | Use selectively where appropriate; avoid duplicating the full declaration on every page. |

### 5.2 Content duplication to manage

- **Core ethos:** “Everyone deserves an enterprise solution.” and “Enterprise engineering. Human experience.” are global identity statements. Give them strongest prominence on Home and repeat selectively in the footer, not as a repeated headline on every page.
- **Complexity absorption:** The Home page introduces the principle; Studio explains its philosophical basis; Method explains the process. Avoid pasting the same full narrative into all three.
- **Sequence lifecycle:** Home gives a preview; Method is the canonical detailed explanation. Do not maintain competing versions of the stage descriptions.
- **Products:** Home shows only the three featured items specified for its snapshot (Supermarket, Alert Wave, HREWEMS). Products & Systems is the canonical directory for all listed ecosystem entries.
- **Continuity:** Studio gives a short explanation of the founder-led model; Continuity & Trust holds the detailed four-pillar explanation. Blueprint may reference the ownership principle without duplicating the full policy.
- **Founder:** Studio describes the practice and its approach; Founder Practice contains the full biography and multidisciplinary context.
- **Inquiry forms:** Blueprint form is for Phase 0 discovery; Contact form is for general inquiries and existing-system work. Keep their fields, helper text, and success/error states separate.
- **Closing declaration:** The §9 summary is a brand-level statement, not a mandatory extra homepage section. Use only where it improves clarity and does not lengthen pages unnecessarily.

### 5.3 Gaps, conflicts, and verification items

These are source-level items to resolve before implementation or publication; this IA does not silently correct them.

1. **Contact email routing (updated in v2.0):** The only currently configured email address is `binarysequence.techart@gmail.com`. Use this address for general inquiries and Sequence Blueprint submissions. Do not publish or assume that `inquiry@binarysequence.art` or `contact@binarysequence.art` exists. Verify delivery and access to the Gmail inbox before launch; see Section 9.3.
2. **Status taxonomy incomplete:** The source says use verified status badges such as In Development, Prototype, Experimental, or Planned, but it does not provide verified statuses for every ecosystem entry. Confirm status for Time, Resonance, Just Breathe Valley, and the website artifact, as well as all three home featured cards.
3. **Home product snapshot vs. full directory:** Home features only Supermarket, Alert Wave, and HREWEMS; full directory also includes Time, Resonance, Just Breathe Valley, and the website artifact. This is not a conflict; retain the distinction.
4. **Header vs. sitemap:** Header omits a separate Home link. Use the wordmark as Home destination unless a later navigation review decides otherwise.
5. **Contact in footer:** The source's footer commercial column omits Contact even though it is a core screen. Add it as a navigational destination or otherwise ensure the route is available from every page.
6. **Founder naming:** Screen heading says `Founder — Akshay Kumar VJ`; navigation calls it `Founder Practice`; the tier diagram says `Founder & Multidisciplinary`. Use `Founder Practice` as the navigation label and keep the page heading from the screen copy.
7. **Trust/continuity commitments:** Source language includes complete ownership, encrypted backups, recovery runbooks, client-owned infrastructure, and escrow compatibility. Verify these are genuinely offered for every relevant engagement; if not universal, qualify them in the actual service terms.
8. **Blueprint commercial commitments:** Confirm the fixed-scope 2–3 week period, standalone guarantee, ownership, exact deliverables, cost audit scope, clickable prototype, budget projections, response window, and revision/exclusion terms.
9. **Form response-time promise:** Blueprint success copy promises a response with workshop dates within two business days. Confirm operational ability before publishing.
10. **Privacy assertions:** Contact copy says submitted data is used exclusively to respond and never shared with third parties. Validate against the actual form provider, email service, analytics, logging, anti-spam tools, and retention practice.
11. **Research and Notebook publication state:** Initial publication registry and active research clusters may describe intended categories, not existing published content. Verify each entry before showing it as live.
12. **System Verification Register (resolved):** Defer the footer link and route from V1. Reconsider only when a real, maintained registry has defined scope, evidence, ownership, and publication rules.
13. **Legal pages:** Privacy Notice and Terms & Service Boundaries are named but not written in v1.1. They need their own content/legal review before publication.
14. **Credential and expertise claims:** Verify founder education, stack, professional-expertise claims, geographic work model, field experience, and exact architecture-authorship wording.
15. **Performance and accessibility targets:** v1.1 includes targets such as zero layout shift and AA/AAA language. Convert them into testable acceptance criteria without making unmeasured public claims. Avoid treating AAA as a blanket guarantee if it has not been tested.
16. **Method scrubber:** The source proposes an interactive scrubber, while the lean V1 principle prioritizes reliable fundamentals. V1 baseline is a static accessible sequence; interactive behavior is deferred unless explicitly approved after scope review.
17. **Route URLs and metadata:** Slugs in this IA are proposals. Final canonical URLs, page titles, descriptions, and redirects should be finalized during technical planning without changing content meaning.

## 6. V1 Scope Boundary

### 6.1 Required for V1 launch

- All six Tier 1 destinations and their source-defined core content sections.
- Tier 2 route structure with content only where material is ready and verified; empty or misleading catalogue states must be avoided.
- Global header, footer, skip link, mobile navigation controls, and 404 route.
- Contextual connections between relevant Tier 1 and Tier 2 pages.
- Products & Systems category separation and verified status for each published entry.
- Separate Blueprint and general Contact inquiry paths.
- Form validation, accessible errors, success/failure feedback, fallback contact route, and abuse/rate limiting appropriate to the implementation.
- Privacy and service-boundary information that accurately reflects actual data handling and engagement terms.
- Semantic page structure, keyboard operation, visible focus, appropriate contrast, reduced-motion support, and stable content layout.
- Content verification gates for founder claims, product statuses, contact emails, service promises, ownership and continuity statements.
- Mobile/desktop responsiveness and performance testing before publication.

### 6.2 V1 baseline: keep simple

- Present the 11-stage method as static, readable content with direct access to each stage. Do not make scrolling or motion necessary to understand the method.
- Use simple product cards/list entries with category, concise description, and verified status; do not add unverified product dashboards or elaborate product sub-sites.
- Publish only completed Notebook entries and real Research content. The hub can remain concise until there is substantive content.
- Use the founder page as a clear profile with verified biography, competencies, and creative dimension; do not require a gallery or interactive portfolio to make it understandable.
- Keep the Continuity page evidence-led and aligned with actual contract practices.

### 6.3 Defer unless separately approved

- Interactive/scroll-driven Sequence Scrubber beyond a static accessible sequence.
- Research dashboards, live telemetry panels, simulators, or interactive scientific tools.
- Complex visualizations, generative sequences, or motion-led storytelling that is not necessary for comprehension.
- Large media galleries or elaborate cinematic experiences.
- Product-specific deep-dive pages beyond the directory unless there is verified content and a clear user need.
- A System Verification Register route or footer link in V1; consider it only after the underlying evidence and operating model exist.
- Search, filters, tagging interfaces, or pagination for Notebook/Research until the actual content volume requires them.
- Any new product, service, metric, case study, or commercial promise not present and verified in the source specification.

### 6.4 Explicitly outside this IA phase

- High-fidelity visual design, production UI styling, and animation specifications. Low-fidelity structural wireframes are defined in Sections 10–11 of this document.
- Color, typography, spacing, imagery, art direction, animation, or interaction styling.
- New copywriting or replacing approved source copy.
- Backend architecture, CMS choice, database schema, analytics implementation, and deployment design.
- Legal drafting or commercial-contract authoring.
- Claims validation itself; this document identifies what must be verified but does not assert those items are true.

## 7. Cross-Page Acceptance Checks

Before moving to wireframes, confirm:

- [ ] All six Tier 1 pages have agreed purposes, section order, and route-outs.
- [ ] All four Tier 2 destinations remain part of the same website and are accessible contextually and from the footer.
- [ ] The Blueprint is reachable from Home and primary navigation without passing through Tier 2.
- [ ] General Contact remains available independently of Blueprint.
- [ ] Products & Systems separates utility software, community/places, and public artifacts.
- [ ] Product statuses and external destinations are verified before display.
- [ ] The content map accounts for every v1.1 screen, global component, state, and acceptance section.
- [ ] Repeated content has one canonical home and only concise contextual reuse elsewhere.
- [ ] All listed gaps are either resolved or explicitly marked as blockers before publication.
- [ ] Static method content is sufficient for V1; no required meaning depends on motion or a scrubber.
- [ ] Notebook/Research pages do not imply unpublished material is live.
- [ ] Continuity, Blueprint, form, privacy, and founder claims are evidence-checked.

## 8. Recommended Next Phase

The IA is approved for **low-fidelity wireframing**, with the governance resolutions and wireframe specifications in Sections 9–11 treated as part of this document. Wireframes must not introduce new copy, new navigation destinations, or visual-system decisions. Any structural change discovered during wireframing must be logged as a proposed IA change and reconciled against the v1.1 content specification before implementation.

---

## 9. Governance Decisions and Architectural Route Alignment

This section records the coordination decisions accepted for wireframing. These are IA decisions; they do not prove that email routing, page content, or code already exists.

### 9.1 Public routes and DDD feature ownership

Public URL slugs and internal feature names serve different purposes. The route is a user-facing navigation contract; the feature directory is an implementation boundary. They do not need identical names.

| Public screen | Canonical public route | Owning feature boundary | Notes |
|---|---|---|---|
| Home | `/` | `src/features/home/` | Home composes approved feature gateway summaries; it must not import feature internals. |
| Studio & Philosophy | `/studio` | `src/features/studio/` | If the implementation standardizes on `studio-philosophy`, record that as an ADR; do not create both folders for one screen. |
| Products & Systems | `/products` | `src/features/products/` | Canonical directory for all approved ecosystem entries. |
| Sequence Method | `/method` | `src/features/sequence-method/` | `/method` remains the short public URL; the feature folder uses the canonical DDD name. |
| Sequence Blueprint | `/blueprint` | `src/features/sequence-blueprint/` | `/blueprint` remains the short public URL; this is the Phase 0 engagement/inquiry pathway. |
| Contact & Project Inquiry | `/contact` | `src/features/contact/` | General inquiry remains separate from the Blueprint form. |
| Engineering & Field Notebook | `/notebook` | `src/features/engineering-notebook/` | Publish only real, reviewed entries. |
| Research & Experiments | `/research` | `src/features/research-experiments/` | Research hub; no fabricated experiments or results. |
| Founder Practice | `/founder` | `src/features/studio-founder/` | Page heading remains `Founder — Akshay Kumar VJ` where specified in the content source. |
| Continuity & Trust | `/continuity` | `src/features/continuity-trust/` | Publish only continuity practices that can be substantiated. |

The onboarding feature described in the DDD guidelines is an implementation feature, not an additional public screen in this ten-screen IA. It may provide a dismissible first-visit introduction, but it must not force a visitor through an onboarding route before reaching the Home content.

**Routing rule:** The Next.js routing/composition shell maps each canonical URL to its owning feature's public entry point. A feature may expose a small route configuration or public gateway from its root `index.ts`; one feature must not import another feature's internal `domain/`, `application/`, `infrastructure/`, or `presentation/` files. The exact route-file syntax is implementation-specific and should be verified against the repository before coding.

### 9.2 System Verification Register — deferred from V1

- Remove `System Verification Register` from the V1 footer and sitemap.
- Do not ship an empty page, placeholder link, fake telemetry, or invented verification records.
- Preserve it as a possible later-generation capability, not a V1 commitment.
- Reconsider only when there is an agreed registry purpose, accountable owner, evidence schema, update process, privacy/confidentiality policy, and real records suitable for public release.

### 9.3 Canonical public contact routing — v2.0 correction

- **Only currently configured email address:** `binarysequence.techart@gmail.com`.
- Use this single address for general inquiries and inbound Sequence Blueprint submissions.
- Do not display `inquiry@binarysequence.art` or `contact@binarysequence.art` as active addresses; their existence and operation have not been established.
- All public forms and their error/fallback messages should refer to `binarysequence.techart@gmail.com`, subject to delivery verification.
- Before launch, verify inbox access, delivery, spam handling, ownership, and the recovery process. This IA records the intended routing but cannot verify mailbox operation.
- Keep the two forms distinct: the Blueprint form captures the three core discovery questions plus context/contact fields; the Contact form handles general projects, existing systems, support boundaries, and collaboration inquiries. Using one email address does not merge the two form pathways.

### 9.4 Commercial and evidence gates retained

The following remain launch blockers until verified: Blueprint scope/fee/delivery window/deliverables/ownership/revisions/exclusions; response-time promises; product statuses and external URLs; founder credentials and authorship claims; continuity commitments; privacy claims against actual processors and logs; legal content; and the publication state of notebook/research items. The IA must not resolve these by assuming they are true.

---

## 10. Low-Fidelity Wireframe Conventions

The following wireframes describe **information order and functional layout**, not high-fidelity visual styling. They are intentionally low-fidelity and may be translated into desktop and mobile frames by a designer or implementation agent.

### 10.1 Wireframe notation

- `[GLOBAL HEADER]` — wordmark, primary navigation, and primary CTA.
- `[PAGE INTRO]` — page title, short approved introductory copy, and primary action if one exists in the source.
- `[CONTENT BLOCK]` — source-defined section in the canonical order already listed in Section 3.
- `[CARD / LIST ITEM]` — repeated item with only the fields supported by the content specification.
- `[CONTEXTUAL LINK]` — link to a related Tier 1 or Tier 2 destination.
- `[FORM]` — labeled fields, validation, privacy explanation where applicable, submit control, and status feedback.
- `[GLOBAL FOOTER]` — commercial, exploration, and legal/service-boundary links. No System Verification Register in V1.
- `[STATE]` — inline loading, validation, success, or error state. Do not route users to a separate page unless a later technical requirement warrants it.

### 10.2 Shared layout rules

1. Keep the global header consistent across all ten screens. The wordmark links to `/`; the header links are `Studio`, `Products & Systems`, `Method`, `Blueprint`; the primary CTA is `Start a Conversation` → `/contact`.
2. Provide a skip link to the main landmark. Use semantic headings in order and meaningful accessible names for controls.
3. Keep each screen's canonical purpose and content blocks distinct. Do not merge the entire product catalogue, full method, founder biography, or continuity policy into Home.
4. Keep the primary task and most important information near the start of each page. Long-form content may continue below, but the page should remain understandable without animation or interaction.
5. Every repeated card/list item must have a clear heading and text alternative; status must be visible as text, not color alone. Display only verified statuses.
6. No empty carousel, placeholder card, non-functional button, or dead-end navigation item. If content is not ready, omit the item or clearly represent the hub as a concise introduction rather than implying publication.
7. Forms must support keyboard use, clear labels, inline validation, error summary or equivalent accessible feedback, submission state, success state, and recoverable failure state. Preserve entered values after recoverable failures where technically feasible.
8. On small screens, stack sections and card groups in reading order. Avoid horizontal scrolling for primary content. The method must remain fully readable without a scrubber.
9. Reduced-motion preferences must be respected. No critical content may depend on animation, autoplay, or hover-only discovery.
10. Wireframe content uses approved source copy and section labels. Any proposed copy edits are tracked separately rather than silently introduced in the layout.

### 10.3 Global shell wireframe

```text
┌──────────────────────────────────────────────────────────────────────────────┐
│ SKIP TO MAIN CONTENT (visible on keyboard focus)                             │
├──────────────────────────────────────────────────────────────────────────────┤
│ WORDMARK → /     Studio  Products & Systems  Method  Blueprint  [Start a     │
│                                                               Conversation]  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│ <MAIN CONTENT FOR CURRENT ROUTE>                                             │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│ FOOTER ETHOS: Everyone deserves an enterprise solution.                      │
│ Enterprise engineering. Human experience.                                    │
│                                                                              │
│ COMMERCIAL PRACTICE      NOTEBOOK & RESEARCH       LEGAL & GOVERNANCE         │
│ Home                     Engineering Notebook      Privacy Notice             │
│ Studio & Philosophy      Research & Experiments    Service Boundaries         │
│ Products & Systems       Founder Practice                                     │
│ Sequence Method          Continuity & Trust                                   │
│ Sequence Blueprint                                                           │
│ Contact                                                                      │
│                                                                              │
│ © [YEAR] Binary Sequence Technological Art. Founder-led technical practice.  │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Mobile shell:** wordmark and menu toggle in the top row; menu opens a labeled navigation panel containing the four primary links and `Start a Conversation`; closing the menu returns focus to the toggle. Footer columns become vertically stacked groups. The exact visual treatment is a later design-system decision.

---

## 11. Screen-by-Screen Low-Fidelity Wireframes

The six Tier 1 screens and four Tier 2 screens below preserve the source-defined page-section sequence. These are structural wireframes, not high-fidelity mockups.

# Tier 1 — Commercial Practice

## 11.1 Screen 01 — Home `/`

**Purpose:** Communicate the practice's value quickly and route visitors to the appropriate next step.

```text
[GLOBAL HEADER]

┌──────────────────────────────────────────────────────────────────────────────┐
│ HERO                                                                         │
│ [Practice name / approved core proposition]                                  │
│ [Approved supporting line and concise service-value summary]                 │
│ [Explore the Sequence Blueprint]   [View Systems & Products]                 │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 1. COMPLEXITY ABSORPTION                                                     │
│ [Core principle and concise explanation]                                     │
│ [Four engineering principles, as specified in the source]                    │
│ [Contextual link → Studio]                                                   │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 2. COMMERCIAL SERVICE DISCIPLINES                                            │
│ [Four service-discipline summaries in source order]                          │
│ [Contextual link → Contact or Blueprint, where relevant]                     │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 3. FEATURED ECOSYSTEM SNAPSHOT                                               │
│ [Supermarket]       [Alert Wave]       [HREWEMS]                             │
│ Each item: name / source-supported description / verified status / link      │
│ [View all Products & Systems]                                                │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 4. THE 11-STAGE SEQUENCE OVERVIEW                                            │
│ Observe → Question → Understand → Model → Architect → Create →               │
│ Engineer → Measure → Refine → Operate → Evolve                               │
│ [Static readable overview; no interaction required] [Explore the Method]     │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 5. CLOSING ACTION — START AN IDEA                                            │
│ [Approved closing statement]                                                 │
│ [Initiate a Sequence Blueprint]   [Direct Technical Inquiry]                 │
└──────────────────────────────────────────────────────────────────────────────┘

[GLOBAL FOOTER]
```

**Layout notes:** The hero should expose the two main actions without requiring a scroll. Keep the complexity principle and service disciplines concise. Home only previews Supermarket, Alert Wave, and HREWEMS in the featured snapshot; it does not reproduce the full Products directory. The static 11-stage sequence is the baseline. Any scrubber is an optional enhancement and cannot be the only way to access stage content.

**Mobile order:** Hero and actions → complexity principle → service disciplines → featured items stacked → sequence list → closing actions. Avoid hiding the Blueprint action inside a menu or interactive element.

**Primary actions:** `/blueprint`, `/products`, `/contact`.

## 11.2 Screen 02 — Studio & Philosophy `/studio`

```text
[GLOBAL HEADER]

[PAGE INTRO: Studio & Philosophy]
[Approved opening narrative; no duplicate full Home hero]

┌──────────────────────────────────────────────────────────────────────────────┐
│ 1. ETYMOLOGY OF THE PRACTICE                                                 │
│ Binary → Sequence → Technology → Art                                         │
│ [Source-defined explanation of each term]                                   │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 2. DEMOCRATIZING ENTERPRISE SYSTEMS                                           │
│ [Approved philosophy and practical implication]                              │
│ [Contextual link → Sequence Method]                                          │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 3. SEVEN PILLARS OF SOFTWARE QUALITY                                          │
│ [Seven pillars in source order; concise explanation for each]                │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 4. SINGLE-PRACTITIONER ENTERPRISE MODEL                                       │
│ [Founder-led delivery model and verified continuity approach]                │
│ [Continuity & Trust] [Founder Practice] [Start a Conversation]                │
└──────────────────────────────────────────────────────────────────────────────┘

[GLOBAL FOOTER]
```

**Layout notes:** Use a clear progression from meaning → philosophy → engineering standards → delivery model. The seven pillars should be readable as a structured list/grid, not an unexplained icon collection. Any claim about ownership, backups, handover, or continuity must link to the detailed Continuity page only if the linked claims are verified.

**Primary actions:** `/method`, `/blueprint`, `/continuity`, `/founder`, `/contact`.

## 11.3 Screen 03 — Products & Systems `/products`

```text
[GLOBAL HEADER]

[PAGE INTRO: Products & Systems]
[Approved directory introduction; explain categories and maturity distinction]

┌──────────────────────────────────────────────────────────────────────────────┐
│ CATEGORY 1 — UTILITY & ENTERPRISE SOFTWARE PLATFORMS                          │
│                                                                              │
│ [Time]        [Alert Wave]                                                   │
│ [HREWEMS]     [Supermarket]                                                  │
│                                                                              │
│ Each entry: name / concise source-supported description / verified status    │
│ / verified destination if one exists. No invented links.                     │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ CATEGORY 2 — COMMUNITY & ENVIRONMENTAL EXPERIENCES                            │
│                                                                              │
│ [Resonance]                     [Just Breathe Valley]                        │
│ Each entry: name / distinction / verified status / verified destination       │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ CATEGORY 3 — PUBLIC ARTIFACTS                                                 │
│                                                                              │
│ [Binary Sequence Technological Art website — V1]                             │
│ [Approved description and accurate current status]                           │
└──────────────────────────────────────────────────────────────────────────────┘

[Contextual link → Method] [Start a Conversation → Contact]
[GLOBAL FOOTER]
```

**Layout notes:** Preserve the three categories and the seven entries. Cards must not imply that every item is launched or publicly available. If a status is unknown, hold the card from publication or use a reviewed, truthful status; do not substitute a guessed status. External destinations appear only after verification. Do not create a filter/search interface for V1 unless actual directory size and user need justify it.

**Mobile order:** Category heading followed by each entry in reading order. Avoid horizontal carousels that hide entries or statuses.

**Primary actions:** verified product destinations where available; `/method`; `/contact`.

## 11.4 Screen 04 — Sequence Method `/method`

```text
[GLOBAL HEADER]

[PAGE INTRO: Sequence Method]
[Approved introductory narrative: why a deliberate lifecycle matters]

┌──────────────────────────────────────────────────────────────────────────────┐
│ THE 11-STAGE SEQUENCE                                                        │
│                                                                              │
│ 01 Observe       [Source-defined explanation]                                │
│ 02 Question      [Source-defined explanation]                                │
│ 03 Understand    [Source-defined explanation]                                │
│ 04 Model         [Source-defined explanation]                                │
│ 05 Architect     [Source-defined explanation]                                │
│ 06 Create        [Source-defined explanation]                                │
│ 07 Engineer      [Source-defined explanation]                                │
│ 08 Measure       [Source-defined explanation]                                │
│ 09 Refine        [Source-defined explanation]                                │
│ 10 Operate       [Source-defined explanation]                                │
│ 11 Evolve        [Source-defined explanation]                                │
│                                                                              │
│ [All stage content is available without activating controls]                 │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ INSPECTABLE BY DESIGN                                                        │
│ [Approved explanation of documented decisions and evidence]                  │
│ [Engineering & Field Notebook]                                               │
└──────────────────────────────────────────────────────────────────────────────┘

[Explore the Sequence Blueprint] [View Products & Systems]
[GLOBAL FOOTER]
```

**Layout notes:** The stages must remain in canonical source order. Each stage has a visible name and source-approved explanatory text. A stepper/scrubber may be added only as progressive enhancement; it must not conceal the only copy of a stage, prevent keyboard access, or require motion. The notebook bridge belongs after the method explanation, not between stages in a way that breaks the sequence.

**Primary actions:** `/blueprint`, `/products`, `/notebook`.

## 11.5 Screen 05 — Sequence Blueprint `/blueprint`

```text
[GLOBAL HEADER]

[PAGE INTRO: Sequence Blueprint]
[Approved positioning: Phase 0 discovery engagement and intended value]
[Clarify the engagement's confirmed scope only after commercial verification]

┌──────────────────────────────────────────────────────────────────────────────┐
│ TANGIBLE BLUEPRINT DELIVERABLES                                               │
│ [Domain model / business entities]                                            │
│ [System architecture specification]                                           │
│ [Security, privacy, and data-authority matrix]                                │
│ [Third-party dependency/cost audit]                                           │
│ [Interactive functional wireframe prototype]                                 │
│ [Technical delivery roadmap/acceptance gates]                                 │
│                                                                              │
│ Include only deliverables confirmed for the actual offer.                    │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ THREE CORE INQUIRIES — FORM                                                  │
│ Step 1: System purpose                                                       │
│ Step 2: Core problem                                                         │
│ Step 3: Five-year horizon                                                    │
│                                                                              │
│ [Existing systems/workflows and constraints]                                 │
│ [Name] [Work email] [Organization/project name]                               │
│ [Review answers] [Submit Blueprint inquiry]                                   │
│                                                                              │
│ [Inline validation] [Submitting] [Success] [Recoverable error]               │
└──────────────────────────────────────────────────────────────────────────────┘

[General inquiry instead? → Contact]
[GLOBAL FOOTER]
```

**Layout notes:** This is the dedicated Phase 0 intake and must not be merged with the General Inquiry Form. If a multi-step form is used, show the current step, progress in accessible text, and a way to review answers before submission. Do not promise a two-business-day response, fixed 2–3 week delivery, a fee, standalone guarantee, or particular deliverable until each commitment is confirmed. The contact email is `binarysequence.techart@gmail.com`, after inbox access and delivery are verified.

**Primary actions:** submit Blueprint inquiry; `/contact` for other matters.

## 11.6 Screen 06 — Contact & Project Inquiry `/contact`

```text
[GLOBAL HEADER]

[PAGE INTRO: Contact & Project Inquiry]
[Approved opening copy and pathways]

┌──────────────────────────────────────────────────────────────────────────────┐
│ CHOOSE THE RELEVANT PATH                                                     │
│ [New idea / discovery engagement → Sequence Blueprint]                       │
│ [Existing system / architecture / technical collaboration → form below]      │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ GENERAL INQUIRY FORM                                                         │
│ [Name]                                                                       │
│ [Email]                                                                      │
│ [Subject / inquiry topic]                                                    │
│ [Project overview / context]                                                 │
│ [Optional budget] [Optional timeline]                                        │
│ [Privacy explanation consistent with actual data handling]                   │
│ [Submit inquiry]                                                             │
│ [Validation] [Submitting] [Success] [Error + recovery route]                 │
└──────────────────────────────────────────────────────────────────────────────┘

CONTACT EMAIL: binarysequence.techart@gmail.com (only after inbox access and delivery verification)
[GLOBAL FOOTER]
```

**Layout notes:** The page should not force every visitor into the Blueprint workflow. A concise pathway selector can be static links; it does not need a wizard. Form labels and privacy language must reflect actual collection, processors, retention, and access. Preserve entered form values after recoverable errors where feasible. Do not publish the operational fallback address as the primary contact channel.

**Primary actions:** `/blueprint`; submit general inquiry.

# Tier 2 — Exploration

## 11.7 Screen 07 — Engineering & Field Notebook `/notebook`

```text
[GLOBAL HEADER]

[PAGE INTRO: Engineering & Field Notebook]
[Approved explanation of public engineering decisions and observations]

┌──────────────────────────────────────────────────────────────────────────────┐
│ ENTRY TAXONOMY                                                               │
│ [EDR] [Telemetry] [Analysis / Field Observation] [Hypothesis / Open Question]│
│ Use as labels only; do not build filters unless content volume requires them.│
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ PUBLISHED ENTRIES                                                            │
│ [Entry title] [category] [date] [status]                                     │
│ [Context] [Hypothesis] [Options] [Decision] [Evidence/result] [Limitations]  │
│                                                                              │
│ Repeat only for entries actually written, reviewed, and approved for release.│
│ If none are ready: concise empty-state explanation, no fake entries.          │
└──────────────────────────────────────────────────────────────────────────────┘

[Contextual link → Sequence Method] [Contact]
[GLOBAL FOOTER]
```

**Layout notes:** The entry template is the content contract, not a requirement to display empty fields. Distinguish observed evidence from hypotheses and conclusions. Redact client-sensitive material before publication. Candidate article titles from the content source must not be rendered as live articles until authored and reviewed.

**Primary actions:** `/method`, `/contact`, relevant verified entries if available.

## 11.8 Screen 08 — Research & Experiments `/research`

```text
[GLOBAL HEADER]

[PAGE INTRO: Research & Experiments]
[Empirical safeguard: exploration is not a production-readiness or outcome guarantee]

┌──────────────────────────────────────────────────────────────────────────────┐
│ RESEARCH CLUSTERS                                                            │
│ [Artificial intelligence / local inference]                                  │
│ [Electronics and signal processing]                                           │
│ [Sound physics / acoustic frequency]                                          │
│ [Cinematography / natural observation]                                        │
│ [Computational perception and physical systems]                              │
└──────────────────────────────────────────────────────────────────────────────┘

[Only verified existing notes, artifacts, or experiments may appear below.] 
[If detailed work is not ready, keep the page as a concise research overview.]
[Contextual link → Founder Practice] [Engineering & Field Notebook]
[GLOBAL FOOTER]
```

**Layout notes:** Research clusters are taxonomy, not claims that active experiments or published results exist. Do not add simulator controls, result charts, or dashboards without actual data and an approved scope. Clearly label hypotheses and exploratory work.

**Primary actions:** `/founder`, `/notebook`.

## 11.9 Screen 09 — Founder Practice `/founder`

```text
[GLOBAL HEADER]

[PAGE INTRO: Founder — Akshay Kumar VJ]
[Approved biography and perspective; claims verified before publication]

┌──────────────────────────────────────────────────────────────────────────────┐
│ 1. BIOGRAPHY & PERSPECTIVE                                                   │
│ [Founder role, professional context, location/narrative as approved]          │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 2. TECHNICAL COMPETENCIES & SPECIALIZATIONS                                  │
│ [Verified competencies and specializations from the source]                  │
│ Do not imply credentials, years, or endorsements not verified.                │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 3. ARCHITECTURE AUTHORSHIP & GUIDELINES                                      │
│ [Precise explanation of authored architecture models and practice]            │
│ [Engineering & Field Notebook] [Sequence Method]                              │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 4. CREATIVE DIMENSION: MEDIA & OBSERVATION                                   │
│ [Cinematography / visual storytelling / nature observation, if verified]       │
│ [Research & Experiments]                                                      │
└──────────────────────────────────────────────────────────────────────────────┘

[Start a Conversation]
[GLOBAL FOOTER]
```

**Layout notes:** The page should read as a coherent profile rather than a résumé dump or an obligatory portfolio gallery. Use only verified biography, technical skills, and authorship claims. Do not claim to have invented Domain-Driven Design; distinguish established methodologies from the founder's own implementation patterns or documented architecture models.

**Primary actions:** `/research`, `/notebook`, `/method`, `/contact`.

## 11.10 Screen 10 — Continuity & Trust `/continuity`

```text
[GLOBAL HEADER]

[PAGE INTRO: Continuity & Trust]
[Approved explanation of ownership, operational continuity, and clear boundaries]

┌──────────────────────────────────────────────────────────────────────────────┐
│ 1. CONTINUITY PROTOCOL                                                       │
│ [Client autonomy and continuity principles]                                  │
│ [Qualify practices that vary by engagement]                                  │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 2. FOUR PILLARS OF CONTINUITY                                                │
│ [Code and asset ownership]                                                   │
│ [Infrastructure-as-code and account isolation]                               │
│ [Encrypted backups and recovery runbooks]                                    │
│ [Handover and escrow compatibility]                                          │
│                                                                              │
│ Each pillar states what is included, conditional, or separately agreed.      │
└──────────────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────────────┐
│ 3. MAINTENANCE AGREEMENTS VS. SLAs                                           │
│ [Explain maintenance and contractual service levels separately]               │
│ [Start a Conversation] [Sequence Blueprint]                                  │
└──────────────────────────────────────────────────────────────────────────────┘

[GLOBAL FOOTER]
```

**Layout notes:** This page must distinguish guiding principles from contractual commitments. Do not present backups, escrow, client-owned infrastructure, or response times as universal guarantees unless the engagement and operational process actually provide them. Keep the four pillars explicit and scannable; link to Contact/Blueprint for project-specific terms rather than inventing an SLA.

**Primary actions:** `/contact`, `/blueprint`.

---

## 12. Wireframe Review Checklist and Handoff to Implementation

### 12.1 Structure review

- [ ] Exactly six Tier 1 screens and four Tier 2 screens are represented.
- [ ] All ten screens retain the purpose and canonical section order defined in Section 3.
- [ ] Public routes map to the canonical feature boundaries in Section 9.1.
- [ ] `/method` maps to `src/features/sequence-method/` and `/blueprint` maps to `src/features/sequence-blueprint/` through the routing/composition shell.
- [ ] Home remains a gateway and summary; it does not import or render another feature's internal implementation.
- [ ] Blueprint and Contact remain separate pathways with distinct field sets and success/error states.
- [ ] The System Verification Register is absent from V1 sitemap, footer, and navigation.
- [ ] `binarysequence.techart@gmail.com` is the single intended public contact address; inbox access and delivery are verified before launch.
- [ ] Every link, CTA, and control has a real destination or behavior.

### 12.2 Content and evidence review

- [ ] Approved source wording is reused; no new marketing claims have been introduced by the wireframes.
- [ ] Product cards display only verified statuses and destinations.
- [ ] Notebook and Research screens distinguish planned topics from published material.
- [ ] Founder credentials and architecture-authorship statements are verified.
- [ ] Blueprint scope, pricing, duration, deliverables, ownership, and response commitments are confirmed before publication.
- [ ] Continuity promises reflect the actual engagement model and operational practice.
- [ ] Privacy and legal content reflects the implemented collection and processing behavior.

### 12.3 Accessibility and responsive review

- [ ] Reading order is logical at mobile and desktop widths.
- [ ] Navigation is keyboard accessible and the mobile menu manages focus correctly.
- [ ] Main content is available without animation, hover, or a scrubber.
- [ ] Status is communicated with text, not color alone.
- [ ] Forms have labels, validation feedback, recoverable error handling, and submission states.
- [ ] Reduced-motion preference is respected; no essential meaning depends on motion.
- [ ] Layout reserves space for dynamic content where possible and is tested for cumulative layout shift; no absolute `CLS = 0` claim is made without measurement.

### 12.4 Handoff sequence

1. Review these low-fidelity wireframes against the Audience-Facing Content Specification v1.1 and the DDD Architectural & Methodological Guidelines v1.0.
2. Log any disagreement as a proposed IA change with source reference and rationale; do not silently alter the approved copy or route map.
3. Resolve content/operational evidence gates before high-fidelity design for affected sections.
4. Proceed to high-fidelity design only after wireframe review; visual system decisions belong to that subsequent phase.
5. Before implementation, inspect the actual repository and existing routing conventions. Record discrepancies rather than assuming the proposed structure already exists.
6. Implement feature by feature using the DDD eight-sprint lifecycle. The public screen IA does not override feature-level acceptance criteria or source precedence.

## 13. Final Declaration

This document now contains the approved information architecture, the governance resolutions needed before wireframing, and low-fidelity structural specifications for all ten public screens.

The architecture's purpose is not to add process for its own sake. It is to preserve a clear commercial path, protect the boundaries between features, keep claims evidence-led, and make the next action understandable without forcing visitors to understand the underlying system.

**Final rule:** *Structure the experience so the visitor sees clarity, while complexity remains inside the architecture.*
