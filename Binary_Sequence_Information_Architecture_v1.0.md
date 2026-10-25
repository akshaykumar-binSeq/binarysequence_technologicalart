# Binary Sequence Technological Art
## Information Architecture — Version 1.0

**Status:** Draft for structural review  
**Source of truth:** *Audience-Facing Content Specification — Version 1.1*  
**Purpose:** Define page hierarchy, navigation, section order, visitor journeys, content placement, and V1 boundaries before wireframes or visual design.  
**Constraint:** This document organizes existing approved content. It does not create new marketing copy, add new offerings, or prescribe visual styling.

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
    ├── System Verification Register               /verification-register
    └── Not Found                                 /404 (system route)
```

### Sitemap notes
- The route names above are **proposed route slugs for IA clarity**, not new public-facing content. They can be adjusted during implementation without changing the page hierarchy.
- Home is an explicit page and a wordmark destination, even though the v1.1 header's list of text links does not include a separate `Home` item.
- The v1.1 content specifies `System Verification Register` in the footer but does not provide its page content. Its existence and V1 inclusion are therefore **unresolved**; see Section 6.
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
- System Verification Register (conditional on content being authored and verified)

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

**System Verification Register:** Listed in the v1.1 footer, but no contents or interaction model are defined. Do not build a dashboard or invent verification entries. Decide whether V1 needs a simple evidence/status page or whether the link should be deferred.

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

1. **Contact email mismatch:** The Blueprint error state uses `contact@binarysequence.art`, while the Contact screen names `inquiry@binarysequence.art`. Confirm which addresses exist and which should be used for each purpose.
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
12. **System Verification Register:** Named in footer but no content specification exists. Decide to author a minimal factual register or defer the link from V1.
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
- A System Verification Register interface until its scope and source evidence are defined.
- Search, filters, tagging interfaces, or pagination for Notebook/Research until the actual content volume requires them.
- Any new product, service, metric, case study, or commercial promise not present and verified in the source specification.

### 6.4 Explicitly outside this IA phase

- Wireframes and page layout composition.
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

After this IA is reviewed and approved, proceed to **wireframes** using the page section order and user journeys in this document. Wireframes should not introduce new copy, new navigation destinations, or visual-system decisions. Any structural change discovered during wireframing should be logged as a proposed IA change and reconciled against the v1.1 content specification before implementation.
