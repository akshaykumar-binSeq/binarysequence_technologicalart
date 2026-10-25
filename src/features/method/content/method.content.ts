/**
 * Method Feature Content Specification
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§24, §25, §37)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 *
 * Contains all editorial copy, 11-stage sequence specifications,
 * architectural invariant definitions, and navigation metadata for /method.
 */

export interface MethodMechanismStep {
  readonly verb: string;
  readonly description: string;
}

export interface MethodStage {
  readonly index: string;
  readonly name: string;
  readonly headline: string;
  readonly category: string;
  readonly summary: string;
  readonly mentalModel: string;
  readonly whatHappens: string;
  readonly whyItMatters: string;
  readonly mechanismSteps: readonly MethodMechanismStep[];
  readonly guidingQuestions: readonly string[];
  readonly contributedOutput: string;
}

export interface MethodPrinciple {
  readonly number: string;
  readonly title: string;
  readonly domainTag: string;
  readonly description: string;
  readonly architecturalRule: string;
}

export const METHOD_CONTENT = {
  header: {
    eyebrow: '+ Sequence Method',
    binaryTelemetry: '01000010 01010011 // 11 STAGES // COMPLEXITY ABSORPTION',
    headline: 'The Sequence Method.',
    subHeadline: 'A deliberate engineering lifecycle from empirical observation to continuous evolution.',
    narrative:
      'We do not begin with software frameworks or preconceived templates. Every system starts with deep operational observation, rigorous hypothesis testing, and domain modeling. By absorbing complexity inside the architecture rather than passing it to users, we create digital systems that remain calm, maintainable, and resilient over time.',
    scrollAnchorLabel: 'Explore the 11-Stage Trajectory ↓',
  },

  trajectory: {
    eyebrow: '01. OBSERVE → 11. EVOLVE',
    headline: 'The 11-Stage Trajectory',
    lead: 'Engineering is a deliberate feedback loop. While the sequence represents an end-to-end journey from inquiry to adaptation, each stage feeds observational evidence back to refine the system before complexity compounds.',
    trackAriaLabel: 'Interactive Eleven-Stage Sequence Method Trajectory',
    stepperPrevLabel: 'Previous Stage',
    stepperNextLabel: 'Next Stage',
    inspectorBadge: 'ACTIVE STAGE INSPECTOR',
  },

  stages: [
    {
      index: '01',
      name: 'OBSERVE',
      headline: 'Empirical Observation.',
      category: 'Empirical Discovery',
      summary: 'Examine the existing situation, people, workflows, constraints, and available evidence.',
      mentalModel:
        'Software built on assumptions invariably solves the wrong problem. We study operational realities in their natural state before defining architecture—analyzing how teams coordinate, where friction accumulates, and what physical or technical constraints govern the problem space.',
      whatHappens:
        'We study real-world operations in their natural state. We analyze how teams currently coordinate, where communication breaks down, which manual workarounds exist, and what regulatory or technical constraints govern the problem space.',
      whyItMatters:
        'Software built on assumptions invariably solves the wrong problem. Direct empirical observation prevents costly false starts and establishes real baseline operational metrics.',
      mechanismSteps: [
        { verb: 'Examine', description: 'Study live operational workflows in their natural state without software preconceptions.' },
        { verb: 'Identify', description: 'Expose human cognitive friction, coordination bottlenecks, and informal manual workarounds.' },
        { verb: 'Baseline', description: 'Record real operational baselines, physical constraints, and regulatory requirements.' },
      ],
      guidingQuestions: [
        'What workflows exist today without formal software intervention?',
        'Where do humans experience cognitive fatigue or operational delays?',
        'What hard physical, technical, or regulatory constraints exist?',
      ],
      contributedOutput: 'Field observation logs, operational constraint register, and problem space baseline.',
    },
    {
      index: '02',
      name: 'QUESTION',
      headline: 'Hypothesis & Scrutiny.',
      category: 'Hypothesis & Scrutiny',
      summary: 'Challenge assumptions, clarify requirements, and expose uncertainty.',
      mentalModel:
        'The most maintainable line of code is the one that was never written. We interrogate every perceived requirement, distinguishing between inherited traditional habits and genuine functional imperatives to prevent premature complexity.',
      whatHappens:
        'We challenge every perceived requirement. We interrogate default assumptions—asking whether a custom platform is truly justified, whether an asynchronous workflow is superior to real-time sync, and where complexity can be eliminated entirely.',
      whyItMatters:
        'The most maintainable line of code is the one that was never written. Scrutinizing requirements early preserves engineering capital and avoids building unnecessary machinery.',
      mechanismSteps: [
        { verb: 'Interrogate', description: 'Scrutinize every stated requirement to determine if it is essential or merely inherited tradition.' },
        { verb: 'Invalidate', description: 'Expose hidden operational assumptions and stress-test them against observable evidence.' },
        { verb: 'Simplify', description: 'Eliminate speculative features before engineering capital is committed.' },
      ],
      guidingQuestions: [
        'Which requirements are essential versus merely inherited by tradition?',
        'Can this business requirement be fulfilled with a simpler architectural pattern?',
        'Where does operational uncertainty remain hidden?',
      ],
      contributedOutput: 'Scrutinized requirement matrix, assumption invalidation log, and scope boundary brief.',
    },
    {
      index: '03',
      name: 'UNDERSTAND',
      headline: 'Context & Human Outcomes.',
      category: 'Context & Outcomes',
      summary: 'Understand the business and human context, intended outcomes, and operational realities.',
      mentalModel:
        'Systems engineering succeeds only when technical decisions align with human psychology and long-term organizational viability. We define quantifiable operational outcomes, sovereign privacy perimeters, and sustainable total cost of ownership.',
      whatHappens:
        'We synthesize the organizational purpose with user needs. We establish clear definitions of success: quantifiable performance metrics, user cognitive ease, operational cost boundaries, and long-term business viability.',
      whyItMatters:
        'Systems engineering succeeds only when technical decisions align with human psychology and long-term organizational survival.',
      mechanismSteps: [
        { verb: 'Synthesize', description: 'Unify business objectives with the psychological ease and daily realities of human operators.' },
        { verb: 'Delineate', description: 'Establish explicit data sovereignty perimeters and privacy boundaries from inception.' },
        { verb: 'Benchmark', description: 'Define quantifiable success metrics, performance envelopes, and sustainable ownership costs.' },
      ],
      guidingQuestions: [
        'What defines genuine success for the people using this system daily?',
        'What are the non-negotiable data sovereignty and privacy boundaries?',
        'What is the total sustainable cost of ownership over a five-year horizon?',
      ],
      contributedOutput: 'Target operational outcomes, success metrics, and human context specification.',
    },
    {
      index: '04',
      name: 'MODEL',
      headline: 'Domain Architecture.',
      category: 'Domain Architecture',
      summary: 'Define domains, concepts, relationships, information flows, and boundaries.',
      mentalModel:
        'Without disciplined domain boundaries, enterprise systems collapse into tangled monoliths. We apply Domain-Driven Design (DDD) to partition the problem space into discrete bounded contexts with clear aggregate roots and invariant rules.',
      whatHappens:
        'We apply Domain-Driven Design (DDD) to partition the problem space. We establish a ubiquitous language, delineate bounded contexts, identify aggregate roots, and construct strict entity boundary contracts.',
      whyItMatters:
        'Without strong domain models, enterprise systems collapse into tangled monoliths. Clear domain boundaries prevent cascading failures and enable modular evolution.',
      mechanismSteps: [
        { verb: 'Partition', description: 'Structure the system into decoupled bounded contexts and distinct aggregate roots.' },
        { verb: 'Codify', description: 'Establish a ubiquitous domain language shared across business and engineering.' },
        { verb: 'Enforce', description: 'Define strict invariants and authoritative state transition rules across domain boundaries.' },
      ],
      guidingQuestions: [
        'What are the core domain aggregates and invariant business rules?',
        'Where do bounded context boundaries separate different operational concerns?',
        'How does authoritative state transition across domain events?',
      ],
      contributedOutput: 'Ubiquitous domain language, bounded context map, and entity relationship models.',
    },
    {
      index: '05',
      name: 'ARCHITECT',
      headline: 'System Topology.',
      category: 'System Topology',
      summary: 'Determine system structure, boundaries, technologies, integrations, and operational considerations.',
      mentalModel:
        'Architectural decisions are expensive to reverse. We design resilient system topologies, data persistence schemas, and decoupled integration adapters, documenting structural trade-offs explicitly in Engineering Decision Records.',
      whatHappens:
        'We design the technical foundation: data storage models, API protocols, third-party adapters, caching strategies, and security perimeters. We record key architectural trade-offs in Engineering Decision Records (EDRs).',
      whyItMatters:
        'Architectural decisions are expensive to reverse. Making intentional structural choices upfront protects system longevity and ensures predictable scalability.',
      mechanismSteps: [
        { verb: 'Structure', description: 'Design database schemas, caching tiers, and API protocols for durable data integrity.' },
        { verb: 'Decouple', description: 'Isolate third-party integrations with explicit adapter boundaries to prevent provider lock-in.' },
        { verb: 'Document', description: 'Record all structural trade-offs, failover topologies, and security boundaries in Engineering Decision Records (EDRs).' },
      ],
      guidingQuestions: [
        'What database topology guarantees data integrity and consistency?',
        'How do we decouple external integrations to survive provider failure?',
        'What is the precise failover and redundancy model?',
      ],
      contributedOutput: 'System topology specification, API interface contracts, and Engineering Decision Records (EDRs).',
    },
    {
      index: '06',
      name: 'CREATE',
      headline: 'Sensory Ergonomics.',
      category: 'Sensory Ergonomics',
      summary: 'Shape the product experience, interaction model, and visual language.',
      mentalModel:
        'Enterprise interfaces should not feel hostile or noisy. We shape calm ergonomic surfaces with intuitive typographic hierarchy, accessible navigation pathways, and clear visual state affordances that respect operator attention.',
      whatHappens:
        'We design the interactive surface. We establish typographic hierarchies, tactical information layouts, accessible keyboard pathways, and calm sensory micro-interactions that communicate state without visual noise.',
      whyItMatters:
        'Enterprise tools should not feel hostile. Thoughtful interface ergonomics respect the operator’s attention, reduce operational error rates, and make complex systems enjoyable to navigate.',
      mechanismSteps: [
        { verb: 'Sculpt', description: 'Design calm, high-signal spatial layouts and typographic scales that reduce cognitive fatigue.' },
        { verb: 'Choreograph', description: 'Engineer accessible interaction models, keyboard pathways, and directional state transitions.' },
        { verb: 'Calibrate', description: 'Fine-tune contrast ratios, responsive reflow, and sensory micro-interactions for tactile clarity.' },
      ],
      guidingQuestions: [
        'How does the layout maintain clarity across both desktop and mobile viewports?',
        'Does every interactive element clearly convey its affordance and state?',
        'Is the interface fully operable via keyboard and assistive screen readers?',
      ],
      contributedOutput: 'Responsive layout designs, design token system, and interaction state specifications.',
    },
    {
      index: '07',
      name: 'ENGINEER',
      headline: 'Precision Build.',
      category: 'Precision Build',
      summary: 'Implement behavior, data handling, integrations, and infrastructure.',
      mentalModel:
        'Engineering quality is an investment in durability. We write clean, strongly typed code adhering to single-responsibility boundaries, pure domain logic, comprehensive automated test suites, and declarative infrastructure.',
      whatHappens:
        'We write clean, disciplined, strongly typed code adhering to single-responsibility principles. We implement strict domain validation, automated test suites, and immutable infrastructure configuration.',
      whyItMatters:
        'Engineering quality is an investment in durability. Robust typing, pure functions, and decoupled components ensure software can be safely modified years after inception.',
      mechanismSteps: [
        { verb: 'Isolate', description: 'Implement pure domain logic completely decoupled from UI frameworks and third-party SDKs.' },
        { verb: 'Typecheck', description: 'Enforce strict static typing, explicit error boundaries, and defensive input validation.' },
        { verb: 'Automate', description: 'Build end-to-end automated verification suites and declarative infrastructure code.' },
      ],
      guidingQuestions: [
        'Are domain rules fully isolated from UI and framework libraries?',
        'Are error boundaries and fallback states implemented for all async operations?',
        'Does the build pass strict linting, typechecking, and architectural boundary rules?',
      ],
      contributedOutput: 'Tested production code, automated test suites, and declarative infrastructure code.',
    },
    {
      index: '08',
      name: 'MEASURE',
      headline: 'Empirical Verification.',
      category: 'Empirical Verification',
      summary: 'Evaluate behavior, quality, performance, reliability, and usability using appropriate evidence.',
      mentalModel:
        'We do not guess whether software is fast, accessible, or resilient; we measure it with real telemetry. Rigorous verification benchmarks Core Web Vitals, API response latency, contrast ratios, and degraded-network resilience.',
      whatHappens:
        'We run the running system through comprehensive verification. We measure Core Web Vitals, API response latency, database query execution times, accessibility contrast ratios, and edge-case resilience.',
      whyItMatters:
        'We do not guess whether software is fast or stable; we measure it with real telemetry. Rigorous empirical verification catches regressions before they affect real users.',
      mechanismSteps: [
        { verb: 'Benchmark', description: 'Measure Core Web Vitals, render performance, and execution latency under production loads.' },
        { verb: 'Audit', description: 'Verify strict WCAG 2.1 AA accessibility compliance across all viewports and input modalities.' },
        { verb: 'Stress-Test', description: 'Evaluate edge-case handling, offline states, and graceful degradation during network disruption.' },
      ],
      guidingQuestions: [
        'Does the application satisfy sub-frame interaction latency and Core Web Vitals benchmarks?',
        'Are WCAG 2.1 AA accessibility standards fully satisfied across all screens?',
        'How does the system behave under degraded network or offline conditions?',
      ],
      contributedOutput: 'Performance telemetry benchmarks, accessibility audit reports, and quality scores.',
    },
    {
      index: '09',
      name: 'REFINE',
      headline: 'Evidence-Driven Polish.',
      category: 'Evidence-Driven Polish',
      summary: 'Improve the system based on evidence, testing, and feedback.',
      mentalModel:
        'Excellence lives in the final 10% of refinement. Guided by observed telemetry and usability feedback, we smooth layout transitions, eliminate redundant network queries, optimize bundle weights, and clarify ambiguous error states.',
      whatHappens:
        'We iterate based on observed telemetry. We optimize heavy asset payloads, smooth out layout transitions, streamline awkward user journeys, and eliminate redundant database queries.',
      whyItMatters:
        'Excellence lives in the final 10% of refinement. Eliminating minor friction points transforms a functional system into a reliable, dignified tool.',
      mechanismSteps: [
        { verb: 'Streamline', description: 'Eliminate redundant state re-renders, layout shifts (CLS), and superfluous network queries.' },
        { verb: 'Clarify', description: 'Sharpen interface micro-copy, status notifications, and user guidance under edge conditions.' },
        { verb: 'Optimize', description: 'Prune unnecessary dependencies and compress asset payloads to ensure lean distribution.' },
      ],
      guidingQuestions: [
        'What subtle friction points were revealed during empirical verification?',
        'Can layout shifts (CLS) or unnecessary component re-renders be eliminated?',
        'Is micro-copy completely unambiguous under error conditions?',
      ],
      contributedOutput: 'Refined code modules, optimized asset bundles, and verified defect resolutions.',
    },
    {
      index: '10',
      name: 'OPERATE',
      headline: 'Production Stewardship.',
      category: 'Production Stewardship',
      summary: 'Support maintenance, observability, ownership, and continuity.',
      mentalModel:
        'Software must be operable by the client with total autonomy. We provision isolated cloud infrastructure, configure real-time observability and encrypted backups, and deliver clear operational runbooks with zero vendor lock-in.',
      whatHappens:
        'We deploy the verified system to hardened cloud infrastructure. We configure real-time observability, automated encrypted backups, health checks, and comprehensive client runbooks for complete ownership.',
      whyItMatters:
        'Software must be operable by the client without vendor lock-in. Clear runbooks, isolated cloud accounts, and full code ownership protect the client’s operational autonomy.',
      mechanismSteps: [
        { verb: 'Deploy', description: 'Launch verified builds to client-owned, hardened cloud infrastructure with immutable IaC.' },
        { verb: 'Observe', description: 'Configure real-time telemetry streaming, error logging pipelines, and automated health checks.' },
        { verb: 'Transfer', description: 'Deliver comprehensive operational runbooks and direct cryptographic keys for complete client sovereignty.' },
      ],
      guidingQuestions: [
        'Does the client hold complete, unencumbered ownership of all accounts and source repositories?',
        'Are automated health alerts and logging pipelines actively streaming telemetry?',
        'Is the disaster recovery runbook tested and verified?',
      ],
      contributedOutput: 'Production deployment, structured monitoring dashboard, and client-owned operational runbooks.',
    },
    {
      index: '11',
      name: 'EVOLVE',
      headline: 'Adaptive Lifecycle.',
      category: 'Adaptive Lifecycle',
      summary: 'Adapt as needs, evidence, and operating environments change.',
      mentalModel:
        'Systems are living structures that must adapt as external standards, security landscapes, and user needs evolve. We conduct regular architectural audits, runtime upgrades, and data-driven capability enhancements.',
      whatHappens:
        'Systems are living structures. We periodically evaluate dependencies, upgrade runtimes, audit security boundaries, and introduce new capabilities as real-world operational evidence dictates.',
      whyItMatters:
        'Unmaintained software decays as external standards and security environments shift. Structured, disciplined evolution ensures the system remains an enduring business asset.',
      mechanismSteps: [
        { verb: 'Assess', description: 'Periodically evaluate operational metrics and gather real-world usage evidence for emerging needs.' },
        { verb: 'Audit', description: 'Execute continuous security reviews, dependency audits, and cloud runtime modernizations.' },
        { verb: 'Iterate', description: 'Expand domain capabilities modularly while preserving core architectural invariants.' },
      ],
      guidingQuestions: [
        'What new operational bottlenecks or opportunities have emerged over time?',
        'Are software dependencies and cloud runtimes securely up to date?',
        'Does the architecture continue to absorb complexity as scope expands?',
      ],
      contributedOutput: 'Lifecycle evolution roadmap, security audit updates, and dependency maintenance schedule.',
    },
  ] as const,

  principles: {
    eyebrow: '+ Architectural Standards',
    headline: 'The Seven Invariants',
    lead: 'The Sequence Method is anchored by seven non-negotiable software engineering invariants. These principles guide every line of code, schema definition, and interface layout we produce.',
    items: [
      {
        number: '01',
        title: 'Maintainability',
        domainTag: 'Modular Architecture',
        description: 'Code is written for human comprehension first. Decoupled modules, strict single responsibility, and explicit interfaces ensure software remains maintainable years after inception.',
        architecturalRule: 'Zero circular dependencies. Domain logic is strictly isolated from UI frameworks.',
      },
      {
        number: '02',
        title: 'Data Authority & Privacy',
        domainTag: 'Sovereign Boundaries',
        description: 'Users and organizations retain absolute ownership of their data. We build explicit perimeter boundaries, privacy-by-design pipelines, and zero unconsented telemetry tracking.',
        architecturalRule: 'Data is encrypted at rest and in transit. Client data never leaves client-owned boundaries.',
      },
      {
        number: '03',
        title: 'Reliability & Observable Failure',
        domainTag: 'Resilience Telemetry',
        description: 'Systems must fail predictably and transparently. We engineer fail-safe fallbacks, self-healing retries, and comprehensive structured logging that pinpoints errors instantly.',
        architecturalRule: 'Zero silent failures. All asynchronous operations declare explicit error boundaries and recovery paths.',
      },
      {
        number: '04',
        title: 'Performance as Respect',
        domainTag: 'Resource Efficiency',
        description: 'Speed is not a vanity metric; it is respect for the human operator’s time and hardware. We eliminate bloated libraries, optimize critical render paths, and calibrate execution to eliminate blocking main-thread computation.',
        architecturalRule: 'Core Web Vitals within green boundaries. Zero blocking main-thread computation on interaction.',
      },
      {
        number: '05',
        title: 'Resource & Cost Efficiency',
        domainTag: 'Calibrated Compute',
        description: 'Enterprise architecture should not waste financial or energy resources. We design lean, serverless-first, and static-first systems that scale down to zero when idle.',
        architecturalRule: 'Compute and database capacity are calibrated to actual usage, preventing infrastructure bill shock.',
      },
      {
        number: '06',
        title: 'Continuity & Portability',
        domainTag: 'Client Ownership',
        description: 'We reject proprietary lock-in. Clients own their repositories, cloud infrastructure, and deployment keys from day one, backed by comprehensive architectural documentation.',
        architecturalRule: 'Infrastructure is declared as code (IaC). Systems can be redeployed to clean accounts in minutes.',
      },
      {
        number: '07',
        title: 'Calm Ergonomics',
        domainTag: 'Cognitive Ease',
        description: 'Software should bring clarity, not stress. We design calm, uncluttered interfaces with intuitive spatial layouts, accessible keyboard controls, and zero intrusive distractions.',
        architecturalRule: 'WCAG 2.1 AA accessibility compliance across all interactive surfaces and color contrasts.',
      },
    ] as const,
  },

  closing: {
    eyebrow: '+ Ecosystem Exploration',
    headline: 'See the method in practice.',
    lead: 'Explore the concrete systems, digital products, and community experiences engineered using this deliberate eleven-stage lifecycle.',
    actions: {
      primary: {
        label: 'Explore the Products Directory →',
        href: '/products',
        ariaLabel: 'Navigate to the Products & Systems Directory',
      },
      secondary: {
        label: 'Read the Studio Philosophy →',
        href: '/studio',
        ariaLabel: 'Navigate to the Studio Philosophy and Standards',
      },
    },
  },
} as const;
