/**
 * Blueprint Feature Content Specification
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (Screen 05: Sequence Blueprint)
 * Authority: Level 3 Information Architecture v2.0 (§11.5)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 */

export interface BlueprintDeliverable {
  readonly id: string;
  readonly number: string;
  readonly title: string;
  readonly summary: string;
  readonly technicalArtifact: string;
  readonly clientValue: string;
}

export interface BlueprintTimelineStage {
  readonly dayRange: string;
  readonly stageTitle: string;
  readonly objective: string;
  readonly activities: readonly string[];
}

export const BLUEPRINT_CONTENT = {
  header: {
    eyebrow: '+ PHASE 0: ARCHITECTURAL DISCOVERY',
    binaryTelemetry: '01000010 01010011 // PHASE 0 // SYSTEM ARCHITECTURE',
    headline: 'De-risk your digital product before writing a single line of code.',
    lead:
      'Building software without a comprehensive architectural plan is the leading cause of budget overruns, security vulnerabilities, and costly rewrite cycles.',
    narrative:
      'The Sequence Blueprint is an intensive, fixed-scope 10-day discovery engagement that transforms your concept or operational requirements into a production-ready architectural specification.',
  },

  guaranteeBanner: {
    badge: 'INDEPENDENT SPECIFICATION COVENANT',
    headline: 'The Standalone Guarantee',
    narrative:
      'The Sequence Blueprint produces an independent, comprehensive system specification. Even if you choose to build with an in-house engineering team or another implementation partner, the deliverables belong entirely to you and can be executed immediately with zero vendor lock-in.',
  },

  deliverables: {
    eyebrow: '+ TANGIBLE ARTIFACTS',
    headline: 'What the Blueprint Produces.',
    lead: 'Every Sequence Blueprint engagement culminates in six concrete, client-owned engineering deliverables:',
    items: [
      {
        id: 'domain-model',
        number: '01',
        title: 'Domain Model & Business Entities',
        summary:
          'Formalized domain dictionaries and entity-relationship models establishing your core business logic, aggregates, and bounded contexts.',
        technicalArtifact: 'Bounded Context Schemas, Aggregate Roots & Domain Dictionary',
        clientValue: 'Prevents business logic corruption and ensures engineers code against real business rules.',
      },
      {
        id: 'system-architecture',
        number: '02',
        title: 'System Architecture Specification',
        summary:
          'Concrete infrastructure topology detailing frontend, backend, serverless layers, database schemas, and external integration points.',
        technicalArtifact: 'High-Level & Component-Level Architecture Blueprints (C4 Model)',
        clientValue: 'Eliminates architectural guesswork, performance bottlenecks, and costly post-launch refactors.',
      },
      {
        id: 'security-privacy-matrix',
        number: '03',
        title: 'Security, Privacy & Data Authority Matrix',
        summary:
          'Complete data lifecycle mapping, zero-telemetry boundaries, cryptographic authentication patterns, and regulatory compliance considerations.',
        technicalArtifact: 'Threat Model, RBAC Matrix & Data Sovereignty Policy',
        clientValue: 'Guarantees absolute client data ownership and guards against regulatory and operational exposure.',
      },
      {
        id: 'cost-audit',
        number: '04',
        title: 'Third-Party Dependency & Cloud Cost Audit',
        summary:
          'Transparent breakdown of external APIs, cloud compute tiers, database storage, and projected recurring monthly operating costs at scale.',
        technicalArtifact: 'Itemized 3-Year Cloud Cost Projection & Vendor Independence Audit',
        clientValue: 'Prevents surprise cloud bills and ensures cost efficiency before committing to infrastructure.',
      },
      {
        id: 'wireframe-prototype',
        number: '05',
        title: 'Interactive Functional Wireframe Prototype',
        summary:
          'Clickable architectural UX prototype validating critical user journeys, state machines, and ergonomic layout transitions before visual styling.',
        technicalArtifact: 'Interactive Wireframe Prototype & State Transition Model',
        clientValue: 'Validates actual human workflows and interface usability before expensive frontend construction.',
      },
      {
        id: 'roadmap-gates',
        number: '06',
        title: 'Technical Delivery Roadmap & Acceptance Gates',
        summary:
          'Phased engineering plan with sprint milestones, technical risk registers, verifiable acceptance gates, and realistic budget projections.',
        technicalArtifact: 'Milestone Delivery Roadmap & Objective Acceptance Criteria',
        clientValue: 'Provides clear procurement certainty, sprint-level accountability, and predictable execution.',
      },
    ] as readonly BlueprintDeliverable[],
  },

  timeline: {
    eyebrow: '+ 10-DAY ENGAGEMENT TIMELINE',
    headline: 'The Discovery Cadence.',
    lead: 'A structured, high-intensity 10-day collaborative sprint from initial inquiry to final handover:',
    stages: [
      {
        dayRange: 'DAYS 01–02',
        stageTitle: 'Operational Inquiry & Domain Extraction',
        objective: 'Analyze the human context, business workflows, manual workarounds, and existing pain points.',
        activities: [
          'Stakeholder interviews and workflow observation',
          'Identification of cognitive friction and operational bottlenecks',
          'Compilation of core domain entities and vocabulary',
        ],
      },
      {
        dayRange: 'DAYS 03–04',
        stageTitle: 'System Topology & Schema Modeling',
        objective: 'Design the underlying system architecture, data models, and bounded context boundaries.',
        activities: [
          'Component topology and data flow diagramming',
          'Relational and document schema modeling',
          'API contract definition and decoupled service integration',
        ],
      },
      {
        dayRange: 'DAYS 05–06',
        stageTitle: 'Security, Privacy & Dependency Audit',
        objective: 'Establish sovereign data boundaries, threat models, and cloud infrastructure requirements.',
        activities: [
          'Authentication, authorization, and cryptographic perimeter design',
          'Cloud infrastructure tier sizing and cost projection',
          'Third-party dependency evaluation and vendor risk audit',
        ],
      },
      {
        dayRange: 'DAYS 07–08',
        stageTitle: 'Ergonomic Wireframing & Prototyping',
        objective: 'Synthesize complex user workflows into intuitive, low-friction interface architectures.',
        activities: [
          'Clickable wireframe prototype construction',
          'Information architecture and sensory layout pacing',
          'Validation of state transitions and edge-case handling',
        ],
      },
      {
        dayRange: 'DAYS 09–10',
        stageTitle: 'Roadmap Synthesis & Final Handover',
        objective: 'Package all specifications, acceptance criteria, and cost projections into your permanent archive.',
        activities: [
          'Sprint delivery roadmap and acceptance gates formalization',
          'Executive presentation and engineering walkthrough',
          'Complete repository handover with full IP transfer',
        ],
      },
    ] as readonly BlueprintTimelineStage[],
  },

  inquiryForm: {
    eyebrow: '+ STEPPED INTAKE WORKFLOW',
    headline: 'The Three Core Inquiries.',
    lead:
      'Take the first step toward clarifying your system. Answering these three inquiries helps us calibrate our initial architecture review and prepare a meaningful discussion.',
    steps: [
      {
        stepNumber: '01',
        title: 'System Purpose',
        question: '01. What are you trying to build?',
        helper: 'Describe the application, administrative system, or digital product you envision.',
        placeholder: 'e.g., We are building an enterprise operations platform to coordinate multi-branch inventory dispatch...',
      },
      {
        stepNumber: '02',
        title: 'The Core Problem',
        question: '02. What fundamental problem must it solve?',
        helper: 'Who experiences this friction today, and what happens if this problem remains unsolved?',
        placeholder: 'e.g., Branch operational data is currently siloed across manual spreadsheets, causing costly stock miscounts and delays...',
      },
      {
        stepNumber: '03',
        title: 'Five-Year Horizon',
        question: '03. Where should this system live five years from now?',
        helper: 'Consider transaction volume, geographic expansion, autonomous client access, or team scaling.',
        placeholder: 'e.g., We plan to scale from 2 regional hubs to 25 national distribution nodes with unified real-time telemetry...',
      },
      {
        stepNumber: '04',
        title: 'Context & Contact',
        question: '04. Project Context & Verification Details',
        helper: 'Provide your details and any existing systems or constraints that will inform the architecture.',
        placeholder: '',
      },
    ],
    fields: {
      existingSystems: {
        label: 'Existing Systems & Workflows (Optional)',
        helper: 'Spreadsheets, legacy databases, SaaS tools currently in use.',
        placeholder: 'e.g., Excel sheets, legacy PostgreSQL database, Slack coordination...',
      },
      constraints: {
        label: 'Known Constraints & Target Window (Optional)',
        helper: 'Target launch timeline, regulatory requirements, compliance needs.',
        placeholder: 'e.g., Q3 pilot launch, strict HIPAA compliance, mobile offline sync required...',
      },
      fullName: {
        label: 'Your Full Name *',
        placeholder: 'Akshay Kumar',
      },
      email: {
        label: 'Work Email Address *',
        placeholder: 'akshay@company.com',
      },
      organization: {
        label: 'Organization / Project Name *',
        placeholder: 'Binary Sequence Labs',
      },
    },
    actions: {
      prev: '← Previous Inquiry',
      next: 'Next Inquiry →',
      submit: 'Submit Blueprint Inquiry',
      submitting: 'Submitting Blueprint Inquiry...',
    },
    successMessage: {
      headline: 'Blueprint Inquiry Received.',
      detail:
        'Thank you for sharing your project vision. We will review your responses and reach out with proposed discovery dates within two business days.',
      resetLabel: 'Submit Another Inquiry',
    },
    errorMessage: {
      headline: 'Submission Notice',
      detail:
        'We encountered a network issue submitting directly. Your responses have been preserved. You can retry or send directly via email below.',
      directMailLabel: 'Send Form via Email →',
    },
  },

  closing: {
    eyebrow: '+ ALTERNATIVE PATHWAYS',
    headline: 'Have a general technical inquiry?',
    lead: 'If you need an architectural review for an existing codebase or general technical advisory:',
    action: {
      label: 'Visit Contact & Inquiries →',
      href: '/contact',
      ariaLabel: 'Navigate to general contact and project inquiry page',
    },
  },
} as const;
