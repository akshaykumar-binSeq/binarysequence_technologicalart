import { FeatureGatewaySummary } from '@/core/gateways';
import { ROUTES } from '@/core/constants/routes';

/**
 * FEAT-03-STUDIO — Editorial Content Specification
 *
 * Authority: Level 2 Audience-Facing Content Specification v1.1 (Screen 02: Studio)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§38)
 * Authority: Master Document v1.1 (§51–§53, §58–§60)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 *
 * Evidence-grounded editorial reframing:
 * - Factual founder-led practice attribution (Akshay Kumar VJ)
 * - Grounded 4-stage engineering foundation
 * - Concrete 6-domain product ecosystem
 * - Non-overstated architectural standards
 * - Contractually precise continuity protocol
 */
export const STUDIO_CONTENT = {
  header: {
    badge: 'FOUNDER-LED TECHNICAL PRACTICE',
    eyebrow: 'STUDIO OVERVIEW',
    headline: 'Enterprise engineering rigor. Refined human experience.',
    narrative:
      'Binary Sequence Technological Art is an independent software engineering practice founded by Akshay Kumar VJ. The studio designs and engineers digital solutions spanning domain models, backend systems, cross-platform applications, and web experiences. Its approach emphasizes clear architecture, appropriate technology choices, maintainable code, and interfaces designed around the people who use them.',
    capabilities: [
      'Domain-Driven Design & Domain Modeling',
      'Cross-Platform Mobile Development (Flutter & Dart)',
      'Web Application Development (Next.js & TypeScript)',
      'Backend & Cloud-Integrated Systems',
      'Data Modeling & Schema Architecture',
      'Interface Design & Interaction Engineering',
    ],
    founderAttribution: {
      label: 'LEAD ARCHITECT & FOUNDER',
      name: 'Akshay Kumar VJ',
      biography:
        'A seasoned software engineer, systems architect, and creative technologist. His work includes Domain-Driven Design implementation guidelines for scalable software systems, alongside architectural models and coding patterns for Flutter and Dart.',
    },
  },

  etymology: {
    eyebrow: 'THE FOUNDATION',
    headline: 'Binary → Sequence → Technology → Art',
    subHeadline: 'Four connected disciplines that shape how we engineer digital systems.',
    steps: [
      {
        number: '01',
        term: 'Binary',
        subtitle: 'State & Data',
        description:
          'Computation begins with defined state. We make data structures, validation rules, and domain constraints explicit so that systems can reason about information consistently.',
      },
      {
        number: '02',
        term: 'Sequence',
        subtitle: 'Domain Logic & Structure',
        description:
          'Domain rules become useful when their relationships and execution paths are clear. We structure business logic into understandable boundaries and workflows, using architectural patterns appropriate to the problem.',
      },
      {
        number: '03',
        term: 'Technology',
        subtitle: 'Engineering Execution',
        description:
          'Architecture becomes a working system through implementation, integration, deployment, and operational practices. We select tools and infrastructure according to the system\'s requirements, constraints, and expected responsibilities.',
      },
      {
        number: '04',
        term: 'Art',
        subtitle: 'Human Experience',
        description:
          'Technical correctness is only part of a useful product. We consider visual hierarchy, interaction feedback, accessibility, layout stability, and the way an interface feels across devices and contexts.',
      },
    ],
    calloutBanner: {
      headline: 'Technology must work reliably. The experience must feel considered.',
      detail:
        'When underlying architecture absorbs complexity and interfaces respond with clarity, software ceases to be an operational burden and becomes technological art.',
    },
  },

  ecosystem: {
    eyebrow: 'PRODUCT ECOSYSTEM',
    headline: 'Applied systems across six operational domains.',
    lead:
      'Binary Sequence develops focused software platforms, operational systems, and digital-physical interfaces that share a common architectural foundation.',
    products: [
      {
        id: 'time',
        name: 'Time',
        category: 'Utility & AI Interface',
        status: 'In Development',
        statusNote: 'Performance profiling & model orchestration',
        description:
          'Experimental conversational system exploring structured interactions, low-latency streaming, and ergonomic workspaces with intelligent models.',
      },
      {
        id: 'alert-wave',
        name: 'Alert Wave',
        category: 'Operational Platform',
        status: 'In Development',
        statusNote: 'Core API & embedded components drafted',
        description:
          'Product communication and feedback platform for non-intrusive embedded announcements, user responses, and sentiment telemetry.',
      },
      {
        id: 'hrewems',
        name: 'HREWEMS',
        category: 'Enterprise Management',
        status: 'In Development',
        statusNote: 'Domain models & operational prototype',
        description:
          'Workforce and work-execution system covering administrative workflows, location-aware attendance, and organizational tracking.',
      },
      {
        id: 'supermarket',
        name: 'Supermarket',
        category: 'Commercial Retail Engine',
        status: 'In Development',
        statusNote: 'Inventory state machines in active engineering',
        description:
          'Retail operations platform connecting customer-facing product discovery with multi-store inventory synchronization, orders, and fulfillment.',
      },
      {
        id: 'resonance',
        name: 'Resonance',
        category: 'Community & Exploration',
        status: 'Concept / Prototype',
        statusNote: 'Conceptual architecture & spatial discovery',
        description:
          'Community and exploration experience centered on travel, outdoor discovery, and shared presence, prioritizing authentic connection over algorithmic engagement.',
      },
      {
        id: 'just-breathe-valley',
        name: 'Just Breathe Valley',
        category: 'Physical-Digital Interface',
        status: 'In Development',
        statusNote: 'Digital interface for mountain living',
        description:
          'Digital interface connecting a mountain environment in Kerala with its cottages, seasonal retreats, and community activities governed by nature rhythms.',
      },
    ],
  },

  corePhilosophy: {
    eyebrow: 'ARCHITECTURAL APPROACH',
    headline: 'Enterprise architectural rigor calibrated to your actual scale.',
    lead:
      'We reject the false trade-off between fragile prototypes and slow, bureaucratic enterprise overhead. High-quality software engineering is an architectural discipline, not an organizational headcount.',
    arguments: [
      {
        id: 'minimum-appropriate-tech',
        title: 'Minimum Appropriate Technology',
        body:
          'We engineer systems using the minimum infrastructure required to achieve complete reliability. No speculative complexity or unnecessary dependencies. Every database, server, and third-party integration is evaluated against long-term maintenance cost and operational sovereignty.',
      },
      {
        id: 'complexity-absorption',
        title: 'Architectural Complexity Absorption',
        body:
          'Complexity is inevitable in real business operations, but it belongs inside clean domain boundaries and automated tasks—never transferred to the user through confusing configuration screens or fragile manual workflows.',
      },
      {
        id: 'long-term-stewardship',
        title: 'Long-Term Operational Lifecycle',
        body:
          'Software is an enduring operational asset. We structure codebases with standard modular patterns, explicit dependency trees, and clear handover runbooks so systems can be maintained and evolved over a 5–15 year operational horizon under defined agreements.',
      },
    ],
  },

  sevenPillars: {
    eyebrow: 'ARCHITECTURE / STANDARDS INDEX',
    headline: 'Quality is an architectural choice, not an accident.',
    lead:
      'Seven engineering concerns. Select one to explore its purpose and practical application.',
    indicator: '07 PRINCIPLES',
    resetLabel: 'Return to first principle ↗',
    interactionHint:
      'Select any principle to inspect its domain boundary and engineering focus.',
    focusHeading: 'ENGINEERING FOCUS',
    prevLabel: 'Previous',
    nextLabel: 'Next',
    pillars: [
      {
        number: '01',
        title: 'Maintainability',
        domainTag: 'Structure',
        description:
          'Code structured around clear domain boundaries and understandable human concepts, isolated from framework churn so systems remain maintainable over time.',
        engineeringFocus:
          'Keep domain logic understandable and separate from framework-specific implementation details.',
        tags: ['Domain boundaries', 'Change isolation'],
      },
      {
        number: '02',
        title: 'Data Authority & Privacy',
        domainTag: 'Governance',
        description:
          'Explicit data ownership rules, clear access controls, and data boundaries. Your data remains under your authority and governance.',
        engineeringFocus:
          'Make ownership, permissions, and access boundaries explicit rather than implicit.',
        tags: ['Data ownership', 'Access controls'],
      },
      {
        number: '03',
        title: 'Reliability & Observable Failure',
        domainTag: 'Resilience',
        description:
          'Systems designed around the reality that external networks and cloud services fail; error boundaries, explicit handling, and graceful degradation by design.',
        engineeringFocus:
          'Design failure paths as part of normal system behaviour, with errors that can be observed and handled.',
        tags: ['Failure handling', 'Graceful degradation'],
      },
      {
        number: '04',
        title: 'Performance as Respect',
        domainTag: 'Experience',
        description:
          'Eliminating unnecessary execution work, keeping asset payloads efficient, respecting hardware resources, and preserving layout stability.',
        engineeringFocus:
          'Reduce avoidable work and payloads while protecting responsiveness and layout stability.',
        tags: ['Efficient assets', 'Layout stability'],
      },
      {
        number: '05',
        title: 'Resource & Cost Efficiency',
        domainTag: 'Proportion',
        description:
          'Selecting the minimum appropriate infrastructure to fulfill actual business requirements without paying for idle server clusters or speculative complexity.',
        engineeringFocus:
          'Match infrastructure choices to actual requirements; scale complexity when evidence warrants it.',
        tags: ['Right-sized infrastructure', 'Cost awareness'],
      },
      {
        number: '06',
        title: 'Continuity & Portability',
        domainTag: 'Ownership',
        description:
          'Clean Git histories, declarative infrastructure definitions, automated build procedures, and client-owned cloud billing accounts to minimize vendor lock-in.',
        engineeringFocus:
          'Keep delivery and operations understandable and transferable through documented, repeatable practices.',
        tags: ['Infrastructure as code', 'Repeatable builds', 'Client-owned billing'],
      },
      {
        number: '07',
        title: 'Calm Ergonomics',
        classification: 'Culminating invariant',
        domainTag: 'Human sensory resolution',
        description:
          'Interfaces crafted with optical hierarchy, accessible contrast, semantic document structure, keyboard navigation, and layout stability.',
        engineeringFocus:
          'Make interfaces legible, accessible, keyboard-operable, and visually stable. Treat comfort and clarity as engineering concerns.',
        tags: ['Visual hierarchy', 'Accessibility', 'Keyboard navigation'],
      },
    ],
  },

  operatingModel: {
    eyebrow: 'OPERATING MODEL',
    headline: 'Direct engineering. Clear ownership. Documented continuity.',
    narrative:
      'Binary Sequence operates on a founder-led, high-conviction delivery model. When you partner with the studio, you work directly with Akshay Kumar VJ—the architect who models your domain, writes the production code, and configures the cloud infrastructure. There are no account managers, no junior handoffs, and zero translation loss.',
    continuityProtocol: {
      badge: 'BINARY SEQUENCE CONTINUITY PROTOCOL',
      title: 'The Sovereign Client Covenant',
      description:
        'To mitigate operational risk and eliminate single-point-of-failure dependencies, all commercial engagements adhere to the Binary Sequence Continuity Protocol. Every system is engineered so that your business retains complete operational sovereignty.',
      guarantees: [
        'Client-owned cloud accounts & billing',
        'Externalized infrastructure-as-code blueprints',
        'Deterministic build scripts & container recipes',
        'Comprehensive domain documentation & runbooks',
      ],
    },
  },

  exploration: {
    eyebrow: 'TECHNICAL EXPLORATION',
    headline: 'Observe the world. Investigate the system. Build what can be demonstrated.',
    narrative:
      'Beyond commercial software engineering, the studio maintains an active curiosity in physical computing, electronics, perception, and scientific inquiry. Our engineering practice is continuously informed by field observation, photography, and cinematography—applying principles of timing, light, composition, and organic systems to digital architecture.',
    facets: [
      {
        title: 'Physical Computing & Electronics',
        description:
          'Investigating circuits, sensors, and hardware components from first principles to understand how systems operate beneath visible abstractions.',
      },
      {
        title: 'Perception & Natural Rhythms',
        description:
          'Observing human behavior, physical environments, and organic systems in the field to inform software ergonomics and sensory pacing.',
      },
      {
        title: 'Visual Storytelling & Optics',
        description:
          'Applying principles of cinematography, optical hierarchy, lighting, and composition to design digital product interfaces.',
      },
    ],
  },

  transitions: {
    eyebrow: 'EXPLORE FURTHER',
    headline: 'Deliberate systems. Proven execution.',
    caption:
      'Discover how our engineering standards translate into tangible systems, delivery methods, and commercial engagements.',
    actions: {
      method: {
        label: 'Inspect the 11-Stage Sequence Method',
        ariaLabel: 'Navigate to the Sequence Method 11-stage lifecycle',
        route: ROUTES.method,
      },
      products: {
        label: 'View Products & Systems Directory',
        ariaLabel: 'Navigate to Products & Systems Directory',
        route: ROUTES.products,
      },
      blueprint: {
        label: 'Engage via Sequence Blueprint',
        ariaLabel: 'Navigate to Sequence Blueprint Phase 0 engagement',
        route: ROUTES.blueprint,
      },
    },
  },
} as const;

export const studioGatewaySummary: FeatureGatewaySummary = {
  featureId: 'FEAT-03-STUDIO',
  sequenceIndex: '03',
  title: 'Studio & Engineering Practice',
  subtitle:
    'The foundational disciplines, calibrated enterprise standards, 6-domain product ecosystem, and founder-led delivery model.',
  tier: 'tier_1_commercial',
  availability: 'available',
  interactivePreview: {
    previewType: 'none',
    fallbackStaticText:
      'Explore the studio foundation, architectural standards, product ecosystem, and continuity protocol.',
  },
  navigation: {
    label: 'Studio',
    routePath: '/studio',
  },
};
