/**
 * Products & Systems Feature Content Specification
 *
 * Authority: Level 1 Foundational Master v1.0 & v1.1 Master Specification Alignment
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (Screen 03: Products & Systems)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§24, §25, §37)
 * Information Architecture: Product Specification Sheet & Architecture Teardown Schema
 * Governing Rule: CHG-01 Entity Separation (Studio != Products != Communities != Research)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 *
 * Contains all verified Binary Sequence products, development statuses,
 * capability registers, cluster classifications, and standalone architectural teardowns.
 */

export interface ProductSpecRow {
  readonly label: string;
  readonly value: string;
}

export interface WhatToExpectItem {
  readonly title: string;
  readonly description: string;
}

export interface ProductTeardownItem {
  readonly id: string;
  readonly categoryBadge: string;
  readonly name: string;
  readonly subtitle: string;
  readonly category: string;
  readonly publisher: string;
  readonly pricing: string;
  readonly inputs: string;
  readonly output: string;
  readonly availability: string;
  readonly summary: string;
  readonly sourceUrl: string;
  readonly sourceLabel: string;
  readonly theProblemItSolves: string;
  readonly howItFitsYourWorkflow: string;
  readonly whatToExpect: readonly WhatToExpectItem[];
  readonly editorialContext?: {
    readonly prefix: string;
    readonly linkText: string;
    readonly linkUrl: string;
  };
  readonly previousProduct: {
    readonly id: string;
    readonly name: string;
  };
  readonly nextProduct: {
    readonly id: string;
    readonly name: string;
  };
  readonly showcase: {
    readonly placeholder: string;
    readonly platformOptions: readonly [string, string];
    readonly modelBadge: string;
    readonly glowVariant: 'indigo' | 'cyan' | 'emerald' | 'amber';
  };
}

export type ProductStatus =
  | 'LIVE'
  | 'IN DEVELOPMENT'
  | 'CONCEPT / PROTOTYPE'
  | 'CONCEPT / EXPERIMENTAL'
  | 'IN DEVELOPMENT / PHYSICAL INITIATIVE';

export interface ProductItem {
  readonly id: string;
  readonly index: string;
  readonly name: string;
  readonly subtitle: string;
  readonly cluster: string;
  readonly status: ProductStatus;
  readonly statusBadge: string;
  readonly summary: string;
  readonly philosophy: string;
  readonly verifiedCapabilities: readonly string[];
  readonly architecturalScope: string;
  readonly destinationRoute: string;
  readonly destinationLabel: string;
}

export interface ProductCluster {
  readonly id: string;
  readonly clusterIndex: string;
  readonly name: string;
  readonly lead: string;
  readonly products: readonly ProductItem[];
}

export const BINARY_SEQUENCE_TEARDOWNS: Record<string, ProductTeardownItem> = {
  time: {
    id: 'time',
    categoryBadge: 'AI & Conversational Intelligence',
    name: 'Time',
    subtitle: 'AI-Focused Conversational Product & Context Engine',
    category: 'AI Conversational System',
    publisher: 'Binary Sequence Technological Art',
    pricing: 'Enterprise Practice & Research Prototype',
    inputs: 'Natural language dialogue, structured domain schemas, telemetry feeds',
    output: 'Deterministic cognitive synthesis, sovereign session memory',
    availability: 'Private client deployment & laboratory preview',
    summary:
      'Time is an AI-focused conversational system designed around intuitive interaction with intelligent models, exploring local inference boundaries, privacy-preserving session memory, and zero conversational clutter.',
    sourceUrl: '/contact?topic=time',
    sourceLabel: 'Inquire Architecture: Time ↗',
    theProblemItSolves:
      'Mainstream conversational AI interfaces transfer operational friction and privacy risks directly to users—opaque token limits, unpredictable hallucinations, invasive telemetry, and unverified data retention. Time absorbs this complexity through decoupled model gateways, client-side session compaction, and strict client data sovereignty.',
    howItFitsYourWorkflow:
      'Deploy Time within your sovereign private cloud or on-premise inference cluster as an ergonomic intelligence layer. It sits between your enterprise data boundaries and foundation models, ensuring staff interact with AI without leaking proprietary business context or suffering cognitive fatigue.',
    whatToExpect: [
      {
        title: 'Sovereign context boundaries',
        description: 'supports edge and sovereign model weights with strict client data ownership and zero cloud training leaks.',
      },
      {
        title: 'Deterministic prompt calibration',
        description: 'structured domain schemas ensure consistent, reproducible responses for mission-critical workflows.',
      },
      {
        title: 'Quiet, ergonomic interface',
        description: 'calm visual hierarchy designed to avoid dopamine loops and minimize cognitive fatigue during deep work.',
      },
    ],
    editorialContext: {
      prefix: 'To explore private deployment or custom model adapters for Time, consult our ',
      linkText: 'Studio Philosophy and Practice',
      linkUrl: '/studio',
    },
    previousProduct: {
      id: 'just-breathe-valley',
      name: 'Just Breathe Valley',
    },
    nextProduct: {
      id: 'alert-wave',
      name: 'Alert Wave',
    },
    showcase: {
      placeholder: 'Inquire sovereign cognitive architecture and local inference boundaries...',
      platformOptions: ['Local', 'Sovereign'],
      modelBadge: '✨ Sovereign LLM ▾',
      glowVariant: 'indigo',
    },
  },

  'alert-wave': {
    id: 'alert-wave',
    categoryBadge: 'Digital Engagement & Feedback',
    name: 'Alert Wave',
    subtitle: 'Product Feedback, Announcements & Digital Engagement Platform',
    category: 'Product Telemetry & Feedback Engine',
    publisher: 'Binary Sequence Technological Art',
    pricing: 'Active Engineering / Partner Pilots',
    inputs: 'Contextual user feedback, reactions, changelog triggers, user comments',
    output: 'Real-time sentiment feeds, audit telemetry, admin dashboards',
    availability: 'In development — early partner deployment',
    summary:
      'Alert Wave connects product teams with users through non-intrusive embedded experiences, contextual feedback loops, and centralized administrative telemetry without disruptive popup modals.',
    sourceUrl: '/contact?topic=alert-wave',
    sourceLabel: 'Inquire Architecture: Alert Wave ↗',
    theProblemItSolves:
      'Traditional product feedback tools rely on intrusive popup modals, aggressive rating prompts, and heavy third-party tracker scripts that degrade web performance and irritate users. Alert Wave replaces these dark patterns with calm, respectful inline widgets that capture authentic user sentiment without interrupting workflows.',
    howItFitsYourWorkflow:
      'Embed a lightweight, sub-4KB JavaScript SDK into your web application with zero dependencies. Alert Wave handles announcement delivery, reaction telemetry, and sentiment ingestion through decoupled event pipelines into your existing PostgreSQL or BigQuery warehouse.',
    whatToExpect: [
      {
        title: 'Zero layout shift embed',
        description: 'sub-4KB runtime footprint with zero dependencies and no third-party tracking cookies or layout thrashing.',
      },
      {
        title: 'Cryptographic sentiment logs',
        description: 'tamper-evident audit trails for regulatory compliance, employee privacy, and enterprise governance.',
      },
      {
        title: 'Centralized telemetry console',
        description: 'role-based administrative dashboard with real-time sentiment analytics, changelog broadcasts, and webhooks.',
      },
    ],
    editorialContext: {
      prefix: 'Explore Alert Wave’s event-driven ingestion pipeline in our ',
      linkText: 'Sequence Method engineering case study',
      linkUrl: '/method',
    },
    previousProduct: {
      id: 'time',
      name: 'Time',
    },
    nextProduct: {
      id: 'hrewems',
      name: 'HREWEMS',
    },
    showcase: {
      placeholder: 'Stream real-time user sentiment & reaction telemetry...',
      platformOptions: ['Widget', 'Console'],
      modelBadge: '✨ 4KB Runtime ▾',
      glowVariant: 'cyan',
    },
  },

  hrewems: {
    id: 'hrewems',
    categoryBadge: 'Enterprise Operations & ERP',
    name: 'HREWEMS',
    subtitle: 'Human Resource & Work Execution Management System',
    category: 'Enterprise ERP & Workforce Management',
    publisher: 'Binary Sequence Technological Art',
    pricing: 'Custom Enterprise License & Implementation',
    inputs: 'Attendance with location verification, leave workflows, task logs',
    output: 'Cryptographic payroll logs, multi-branch status, execution metrics',
    availability: 'In development — multi-branch enterprise pilot',
    summary:
      'An operational management system unifying human-resource workflows, attendance verification, branch operations, and task execution tracking for distributed enterprises.',
    sourceUrl: '/contact?topic=hrewems',
    sourceLabel: 'Inquire Architecture: HREWEMS ↗',
    theProblemItSolves:
      'Enterprise HR and workforce software is notoriously bloated, fragmented across disconnected third-party vendors, and vulnerable to attendance spoofing. HREWEMS consolidates attendance, leave approvals, and multi-branch task execution into a single, cohesive, auditable platform.',
    howItFitsYourWorkflow:
      'Integrates into existing corporate LDAP/OAuth infrastructure and enterprise databases. Branch managers access high-speed offline-first mobile check-ins, while executive leadership monitors multi-branch operational health via a real-time command console.',
    whatToExpect: [
      {
        title: 'Location-verified attendance',
        description: 'cryptographic geofencing and timestamping that prevents check-in tampering across distributed branches.',
      },
      {
        title: 'Bounded context isolation',
        description: 'strict Domain-Driven Design boundaries ensuring payroll, leave, and task tracking scale independently without shared database locks.',
      },
      {
        title: 'Complete audit trails',
        description: 'immutable logging for every leave approval, role modification, and task assignment ensuring compliance readiness.',
      },
    ],
    editorialContext: {
      prefix: 'See how Domain-Driven Design governs HREWEMS aggregate invariants in our ',
      linkText: 'Studio Engineering Foundation',
      linkUrl: '/studio',
    },
    previousProduct: {
      id: 'alert-wave',
      name: 'Alert Wave',
    },
    nextProduct: {
      id: 'supermarket',
      name: 'Supermarket',
    },
    showcase: {
      placeholder: 'Inspect multi-branch attendance & execution ledger...',
      platformOptions: ['Branch', 'HQ'],
      modelBadge: '✨ DDD Invariants ▾',
      glowVariant: 'amber',
    },
  },

  supermarket: {
    id: 'supermarket',
    categoryBadge: 'Retail Commerce & Logistics',
    name: 'Supermarket',
    subtitle: 'End-to-End Supermarket Commerce & Operations Platform',
    category: 'Omnichannel Retail & Warehouse Logistics',
    publisher: 'Binary Sequence Technological Art',
    pricing: 'Commercial Enterprise Solution',
    inputs: 'Customer product discovery, multi-branch inventory, delivery dispatch',
    output: 'Real-time stock reservation, fulfillment tracking, pricing console',
    availability: 'In development — commercial retail rollout',
    summary:
      'A complete digital business solution connecting customer-facing product discovery with back-office retail inventory, branch management, and delivery dispatch.',
    sourceUrl: '/contact?topic=supermarket',
    sourceLabel: 'Inquire Architecture: Supermarket ↗',
    theProblemItSolves:
      'Retailers struggle with stock discrepancies between online storefronts and physical aisle inventory, leading to canceled orders and customer frustration. Supermarket solves this with atomic stock reservation queues and real-time multi-branch catalog synchronization.',
    howItFitsYourWorkflow:
      'Connects retail branch POS systems, central warehouse ERPs, and customer mobile apps. Delivery dispatchers receive optimized routing schedules, while inventory managers maintain sub-second stock accuracy across all store locations.',
    whatToExpect: [
      {
        title: 'Atomic stock reservation',
        description: 'transactional queues and optimistic concurrency controls that eliminate phantom inventory overselling.',
      },
      {
        title: 'Multi-branch catalog sync',
        description: 'instant propagation of pricing updates and flash promotions across all retail outlets with zero downtime.',
      },
      {
        title: 'Ergonomic picking console',
        description: 'simplified tablet interfaces for warehouse fulfillment staff with barcode scan verification and route mapping.',
      },
    ],
    editorialContext: {
      prefix: 'Learn more about our high-concurrency catalog architecture in the ',
      linkText: 'Sequence Method Overview',
      linkUrl: '/method',
    },
    previousProduct: {
      id: 'hrewems',
      name: 'HREWEMS',
    },
    nextProduct: {
      id: 'resonance',
      name: 'Resonance',
    },
    showcase: {
      placeholder: 'Query real-time multi-branch inventory ledger & dispatch...',
      platformOptions: ['Store', 'Fleet'],
      modelBadge: '✨ Sub-10ms Sync ▾',
      glowVariant: 'cyan',
    },
  },

  resonance: {
    id: 'resonance',
    categoryBadge: 'Spatial Presence & Community',
    name: 'Resonance',
    subtitle: 'A Digital Campfire & Exploration Layer',
    category: 'Expedition Journal & Ambient Exploration',
    publisher: 'Binary Sequence Technological Art',
    pricing: 'Independent Research & Prototype Platform',
    inputs: 'Offline GPS waypoints, expedition logs, ambient recordings',
    output: 'Decentralized presence cards, trail milestones, rhythm archives',
    availability: 'Concept / experimental laboratory initiative',
    summary:
      'A digital experience layer built around travel, hiking, exploration, and meaningful community moments. Designed to foster connection without social-media gamification.',
    sourceUrl: '/contact?topic=resonance',
    sourceLabel: 'Explore Initiative: Resonance ↗',
    theProblemItSolves:
      'Modern social apps optimize for screen addiction, algorithmic rage bait, and vanity follower counts, pulling humans away from physical presence. Resonance rejects engagement algorithms in favor of quiet, place-based memories and shared outdoor experiences.',
    howItFitsYourWorkflow:
      'Designed as an offline-first companion on outdoor trails, expeditions, and mountain retreats. Operates seamlessly in wilderness areas with zero cellular reception, synchronizing ambient presence cards once connectivity is re-established.',
    whatToExpect: [
      {
        title: 'Offline-first CRDT synchronization',
        description: 'record trail journals, hiking milestones, and field logs without requiring active cellular reception.',
      },
      {
        title: 'Zero engagement algorithms',
        description: 'no likes, no follower counts, and no infinite scroll dopamine loops; presence is valued for its own sake.',
      },
      {
        title: 'Privacy-preserving presence',
        description: 'cryptographic beacons that honor user anonymity while cultivating genuine physical community.',
      },
    ],
    editorialContext: {
      prefix: 'Read the philosophy behind presence-based technology in the ',
      linkText: 'Studio Narrative and Philosophy',
      linkUrl: '/studio',
    },
    previousProduct: {
      id: 'supermarket',
      name: 'Supermarket',
    },
    nextProduct: {
      id: 'just-breathe-valley',
      name: 'Just Breathe Valley',
    },
    showcase: {
      placeholder: 'Record high-altitude expedition trail frequency...',
      platformOptions: ['Trail', 'Campfire'],
      modelBadge: '✨ Offline CRDT ▾',
      glowVariant: 'emerald',
    },
  },

  'just-breathe-valley': {
    id: 'just-breathe-valley',
    categoryBadge: 'Place-Based Computing & Ecology',
    name: 'Just Breathe Valley',
    subtitle: 'Digital Companion to Mountain Living & Community Retreats',
    category: 'Mountain Sanctuary & Ecological Interface',
    publisher: 'Binary Sequence Technological Art',
    pricing: 'Physical Mountain Initiative & Digital Partner',
    inputs: 'Microclimate sensors, seasonal rhythms, retreat itineraries',
    output: 'Ambient weather telemetry, workshop logs, nature reflections',
    availability: 'In development / physical mountain initiative',
    summary:
      'The digital companion to a physical mountain sanctuary focused on nature, creativity, community retreats, and conscious living. Not an accommodation booking portal.',
    sourceUrl: '/contact?topic=just-breathe-valley',
    sourceLabel: 'Explore Initiative: Valley ↗',
    theProblemItSolves:
      'Nature retreats frequently rely on corporate commercial booking engines that push transactional consumerism rather than preparing guests for restorative, quiet presence. Just Breathe Valley serves as an ambient digital porch that encourages visitors to look up from screens.',
    howItFitsYourWorkflow:
      'Acts as the living operating system for the mountain retreat. Displays real-time valley weather telemetry, creative workshop schedules, and the Ten Mountain Rhythms (Breathe, Move, Walk, Create, Build, Cultivate, Play, Listen, Reflect, Connect).',
    whatToExpect: [
      {
        title: 'The Ten Mountain Rhythms',
        description: 'structured reflection interfaces aligned with natural circadian cycles and seasonal mountain changes.',
      },
      {
        title: 'Ambient microclimate telemetry',
        description: 'real-time environmental metrics (temperature, humidity, atmospheric pressure) streamed from valley sensors.',
      },
      {
        title: 'Calming natural aesthetics',
        description: 'color palettes and typography calibrated to granite, mist, and mountain flora with zero notification pressure.',
      },
    ],
    editorialContext: {
      prefix: 'Discover how physical computing interfaces with natural sanctuaries in the ',
      linkText: 'Studio Exploration Section',
      linkUrl: '/studio',
    },
    previousProduct: {
      id: 'resonance',
      name: 'Resonance',
    },
    nextProduct: {
      id: 'time',
      name: 'Time',
    },
    showcase: {
      placeholder: 'Observe valley microclimate & circadian rhythms...',
      platformOptions: ['Rhythm', 'Sanctuary'],
      modelBadge: '✨ Ambient Porch ▾',
      glowVariant: 'emerald',
    },
  },
};

export const PRODUCTS_CONTENT = {
  header: {
    eyebrow: '+ Ecosystem Directory',
    binaryTelemetry: '01000010 01010011 // 6 SYSTEMS // DEMOCRATIZED ENTERPRISE',
    headline: 'Products & Systems.',
    subHeadline: 'A curated ecosystem of software systems, experimental initiatives, and place-based interfaces.',
    narrative:
      'We build software to absorb complexity, not to transfer it. Our product portfolio spans enterprise utility systems, intelligent conversational interfaces, community exploration platforms, and physical mountain environments. Every product reflects the same core engineering invariant: enterprise rigor paired with calm human experience.',
  },

  teardowns: BINARY_SEQUENCE_TEARDOWNS,

  clusters: [
    {
      id: 'utility-enterprise',
      clusterIndex: '01',
      name: 'Utility & Enterprise Software',
      lead: 'Business management platforms and operational systems engineered for absolute reliability, data sovereignty, and ergonomic clarity.',
      products: [
        {
          id: 'time',
          index: '01',
          name: 'Time',
          subtitle: 'AI-Focused Conversational Product',
          cluster: 'Utility & Enterprise Software',
          status: 'CONCEPT / PROTOTYPE',
          statusBadge: '[STATUS: CONCEPT / PROTOTYPE]',
          summary:
            'An AI-focused conversational system designed around intuitive interaction with intelligent models, exploring local inference boundaries and contextual memory.',
          philosophy:
            'AI interaction should feel calm and cooperative rather than opaque or overwhelming. Time explores how conversational interfaces can provide clarity without conversational clutter.',
          verifiedCapabilities: [
            'Conversational natural language interaction',
            'Contextual dialogue and question answering',
            'Intelligent system exploration and prompt calibration',
            'Privacy-preserving interaction patterns',
          ],
          architecturalScope:
            'Investigating decoupled model gateway interfaces, edge inference compatibility, and client-controlled session history.',
          destinationRoute: '/products/time',
          destinationLabel: 'Inspect Architecture →',
        },
        {
          id: 'alert-wave',
          index: '02',
          name: 'Alert Wave',
          subtitle: 'Product Feedback, Communication & Digital Engagement Platform',
          cluster: 'Utility & Enterprise Software',
          status: 'IN DEVELOPMENT',
          statusBadge: '[STATUS: IN DEVELOPMENT]',
          summary:
            'A digital engagement system connecting product teams with users through non-intrusive embedded experiences, contextual feedback loops, and centralized administration.',
          philosophy:
            'Product communication must respect user attention. Alert Wave replaces disruptive modal popups with calm, respectful notifications and genuine two-way sentiment feedback.',
          verifiedCapabilities: [
            'Embedded website announcements and changelog feeds',
            'Contextual product feedback and sentiment capture',
            'User interaction tracking and reaction telemetry',
            'Comments and discussion threads',
            'Administrative analytics and notification management',
          ],
          architecturalScope:
            'Lightweight JavaScript embed SDK, event-driven ingestion pipelines, and multi-tenant administrative dashboard with role-based access control.',
          destinationRoute: '/products/alert-wave',
          destinationLabel: 'Inspect Architecture →',
        },
        {
          id: 'hrewems',
          index: '03',
          name: 'HREWEMS',
          subtitle: 'Human Resource & Work Execution Management System',
          cluster: 'Utility & Enterprise Software',
          status: 'IN DEVELOPMENT',
          statusBadge: '[STATUS: IN DEVELOPMENT]',
          summary:
            'An operational management system unifying human-resource workflows, attendance verification, branch operations, and task execution tracking.',
          philosophy:
            'Operational tools should reduce friction rather than generate administrative overhead. HREWEMS keeps business activities understandable, auditable, and manageable.',
          verifiedCapabilities: [
            'Attendance tracking with location-based verification',
            'Leave request workflows and approval routing',
            'Organizational roles, teams, and permission management',
            'Multi-branch operational coordination',
            'Work execution tracking and task assignment logs',
          ],
          architecturalScope:
            'Domain-Driven Design bounded contexts, cryptographic location timestamping, audit logs for compliance, and decoupled reporting interfaces.',
          destinationRoute: '/products/hrewems',
          destinationLabel: 'Inspect Architecture →',
        },
        {
          id: 'supermarket',
          index: '04',
          name: 'Supermarket',
          subtitle: 'End-to-End Supermarket Commerce & Operations Platform',
          cluster: 'Utility & Enterprise Software',
          status: 'IN DEVELOPMENT',
          statusBadge: '[STATUS: IN DEVELOPMENT]',
          summary:
            'A complete digital business solution connecting customer-facing product discovery with back-office retail inventory, branch management, and delivery dispatch.',
          philosophy:
            'Retail commerce succeeds when the digital interface reflects the physical reality of the store. Supermarket unifies online shopping with ground-level warehouse and branch workflows.',
          verifiedCapabilities: [
            'Customer product discovery and digital storefront',
            'Multi-branch catalog and inventory synchronization',
            'Real-time order management and fulfillment tracking',
            'Delivery dispatch and logistics coordination',
            'Administrative console for pricing and promotions',
          ],
          architecturalScope:
            'High-concurrency catalog indexing, transactional stock reservation queues, role-separated administrative consoles, and decoupled logistics adapters.',
          destinationRoute: '/products/supermarket',
          destinationLabel: 'Inspect Architecture →',
        },
      ],
    },
    {
      id: 'community-places',
      clusterIndex: '02',
      name: 'Community & Places',
      lead: 'Digital interfaces and experience layers created to cultivate physical presence, outdoor exploration, and intentional human connection.',
      products: [
        {
          id: 'resonance',
          index: '05',
          name: 'Resonance',
          subtitle: 'A Digital Campfire & Exploration Layer',
          cluster: 'Community & Places',
          status: 'CONCEPT / EXPERIMENTAL',
          statusBadge: '[STATUS: CONCEPT / EXPERIMENTAL]',
          summary:
            'A digital experience layer built around travel, hiking, exploration, and meaningful community moments. Designed to foster connection without social-media gamification.',
          philosophy:
            'Share presence. Discover people. Follow the frequency. Resonance rejects engagement algorithms, followers, and vanity metrics in favor of genuine shared experiences.',
          verifiedCapabilities: [
            'Hiking and travel challenges with offline journaling',
            'Experience-based milestone cards and rhythm tracking',
            'Location-based community discovery',
            'Collective media sharing and expedition archives',
            'Integration as an experience layer inside physical environments',
          ],
          architecturalScope:
            'Offline-first synchronization for low-connectivity wilderness environments, privacy-preserving location beacons, and decentralized media storage.',
          destinationRoute: '/products/resonance',
          destinationLabel: 'Inspect Architecture →',
        },
        {
          id: 'just-breathe-valley',
          index: '06',
          name: 'Just Breathe Valley',
          subtitle: 'Digital Interface to Mountain Living',
          cluster: 'Community & Places',
          status: 'IN DEVELOPMENT / PHYSICAL INITIATIVE',
          statusBadge: '[STATUS: IN DEVELOPMENT / PHYSICAL INITIATIVE]',
          summary:
            'The digital companion to a physical mountain sanctuary focused on nature, creativity, community retreats, and conscious living. Not an accommodation booking portal.',
          philosophy:
            'Just be present. Technology should serve as a subtle bridge that encourages humans to look up from screens and immerse themselves in the physical rhythm of the mountain.',
          verifiedCapabilities: [
            'The Ten Mountain Rhythms interface (Breathe, Move, Walk, Create, Build, Cultivate, Play, Listen, Reflect, Connect)',
            'Retreat and community event exploration',
            'Creative workshop schedules and seasonal residency logs',
            'Environmental observation and weather telemetry',
          ],
          architecturalScope:
            'Minimalist ambient web interface, calm color palettes reflecting natural stone and foliage, and zero notification pressure.',
          destinationRoute: '/products/just-breathe-valley',
          destinationLabel: 'Inspect Architecture →',
        },
      ],
    },
  ] as const,

  closing: {
    eyebrow: '+ Methodology Connection',
    headline: 'Engineered through the Sequence Method.',
    lead: 'Every product in this directory is shaped by our deliberate eleven-stage lifecycle—from empirical observation to continuous evolution.',
    actions: {
      primary: {
        label: 'Inspect the Sequence Method →',
        href: '/method',
        ariaLabel: 'Navigate to the Sequence Method page',
      },
      secondary: {
        label: 'Read the Studio Philosophy →',
        href: '/studio',
        ariaLabel: 'Navigate to the Studio Philosophy and Standards',
      },
    },
  },
} as const;
