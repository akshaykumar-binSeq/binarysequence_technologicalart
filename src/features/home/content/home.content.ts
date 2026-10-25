/**
 * FEAT-02-HOME — Editorial Content Specification
 *
 * Authority: Level 2 Audience-Facing Content Specification v1.1 (Screen 01: Home, §7.3)
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§37)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 *
 * All copy is preserved verbatim from the approved specification.
 */

export const HOME_CONTENT = {
  hero: {
    eyebrow: 'BINARY SEQUENCE TECHNOLOGICAL ART',
    binaryPhilosophy: '01000010 01010011 // 01. OBSERVE → 11. EVOLVE // ARCHITECTURE ABSORBS COMPLEXITY',
    headline: 'Everyone deserves an enterprise solution.',
    subHeadline: 'Enterprise engineering. Human experience.',
    narrative:
      'We engineer scalable, secure digital systems and refined user interfaces for businesses, startups, and independent operators. By absorbing complexity inside the architecture, we ensure your software remains clear to use, economical to run, and maintainable over time.',
    actions: {
      primary: {
        label: 'Explore the Sequence Blueprint',
        ariaLabel: 'Explore the Sequence Blueprint commercial engagement',
      },
      secondary: {
        label: 'View Systems & Products',
        ariaLabel: 'View Systems and Products directory',
      },
      manifestoAnchor: {
        label: 'Read the Studio Manifesto ↓',
        ariaLabel: 'Scroll down to the studio manifesto and complexity absorption section',
      },
    },
  },
  complexityAbsorption: {
    eyebrow: 'ARCHITECTURAL DISCIPLINE',
    headline: "Complexity belongs in the architecture, not in your user's hands.",
    body:
      'A digital system often requires relational databases, asynchronous task queues, identity boundaries, API gateways, and cloud deployment pipelines. Your customers and operational staff should never have to feel that weight. We build robust, observable backends paired with intuitive, calm user interfaces designed around human workflows.',
    modalTrigger: {
      label: 'Inspect Architecture Substrate',
      ariaLabel: 'Open accessible 4:3 central architecture preview dialog',
    },
    modal: {
      title: 'Complexity Absorption Architecture',
      subtitle: '4:3 Central Architecture Specification & Dual-Plane Model',
      closeAriaLabel: 'Close architecture preview dialog',
      userPlane: {
        badge: 'USER EXPERIENCE PLANE',
        title: 'Calm Ergonomic Surface',
        description:
          'Single document scroll, instant perceptual feedback, calm typography, and zero unhandled database or infrastructure error states exposed to the user.',
      },
      architecturePlane: {
        badge: 'ARCHITECTURAL SUBSTRATE',
        title: 'Absorbed System Rigor',
        description:
          'Relational integrity, transactional boundaries, zero-trust network policies, distributed event queues, and deterministic CI/CD pipelines.',
      },
      fallbackText:
        'Architecture absorbs relational databases, async task queues, identity boundaries, and cloud pipelines so interfaces remain calm and dependable.',
    },
    principles: [
      {
        number: '01',
        title: 'Understand Before Building',
        description: 'Uncover actual domain constraints before selecting languages or frameworks.',
      },
      {
        number: '02',
        title: 'Model What Matters',
        description: 'Express business logic clearly in code, isolating it from third-party vendor volatility.',
      },
      {
        number: '03',
        title: 'Engineer for Change',
        description: 'Design modular system boundaries that allow components to be replaced without rewriting the entire product.',
      },
      {
        number: '04',
        title: 'Keep Interfaces Calm',
        description: 'Eliminate cognitive friction through purposeful typography, instant feedback, and zero unnecessary visual noise.',
      },
    ],
    actionLink: {
      label: 'Learn more about our studio philosophy →',
      ariaLabel: 'Learn more about our studio philosophy on the studio page',
    },
  },
  serviceDisciplines: {
    eyebrow: 'CAPABILITIES & SERVICES',
    headline: 'End-to-end execution. Zero organizational bloat.',
    description:
      'Whether starting from a blank page or modernizing a legacy system, we provide senior architectural direction combined with hands-on full-stack engineering and product media production.',
    disciplines: [
      {
        id: 'custom-product-engineering',
        title: 'Custom Product Engineering',
        description:
          'Complete design, development, and deployment of web and mobile applications using Flutter, Next.js, Python, and modern relational data platforms.',
      },
      {
        id: 'enterprise-architecture',
        title: 'Enterprise Architecture & Modernization',
        description:
          'Domain modeling, database optimization, decoupling monolithic systems, and structuring maintainable codebases using Domain-Driven Design principles.',
      },
      {
        id: 'operations-cloud',
        title: 'Operations, CI/CD & Cloud Infrastructure',
        description:
          'Automated delivery pipelines, reproducible cloud setups, zero-trust security postures, and cost-efficient hosting architecture.',
      },
      {
        id: 'product-media',
        title: 'Product Media & Launch Cinematography',
        description:
          'High-resolution product photography, launch cinema, and visual storytelling that communicate technical products with clarity and craft.',
      },
    ],
    actionLink: {
      label: 'Inspect the 11-step Sequence Method →',
      ariaLabel: 'Inspect the 11-step Sequence Method on the method page',
    },
  },
  featuredEcosystem: {
    eyebrow: 'SYSTEMS & PRODUCTS',
    headline: 'Engineered systems across commerce, operations, and community.',
    description:
      'A preview of internal software platforms and community experiences engineered under the Binary Sequence umbrella.',
    products: [
      {
        id: 'supermarket',
        title: 'Supermarket Ecosystem',
        description:
          'End-to-end commerce, real-time inventory synchronization, and delivery management.',
        statusBadge: '[STATUS: IN DEVELOPMENT]',
      },
      {
        id: 'alert-wave',
        title: 'Alert Wave',
        description:
          'Product announcement infrastructure, sentiment telemetry, and user feedback loops.',
        statusBadge: '[STATUS: IN DEVELOPMENT]',
      },
      {
        id: 'hrewems',
        title: 'HREWEMS',
        description:
          'Human resource administration, location-aware attendance, and work-execution tracking.',
        statusBadge: '[STATUS: IN DEVELOPMENT]',
      },
    ],
    actionLink: {
      label: 'Explore the complete ecosystem directory →',
      ariaLabel: 'Explore the complete ecosystem directory on the products page',
    },
  },
  sequenceOverview: {
    eyebrow: 'HOW WE WORK',
    headline: 'A deliberate lifecycle from question to evolution.',
    caption:
      'Engineering is an iterative feedback loop. When real-world measurements diverge from our hypothesis, the sequence routes back to refine the model before complexity compounds.',
    controls: {
      previousStage: 'Previous Stage',
      nextStage: 'Next Stage',
      scrubberAriaLabel: '11-Stage Sequence Lifecycle Scrubber',
      activeStageBadge: 'ACTIVE STAGE INSPECTOR',
      jumpToPrefix: 'Jump to Stage',
    },
    stages: [
      {
        index: '01',
        name: 'OBSERVE',
        subtitle: 'Empirical Discovery',
        description:
          'Analyze the actual human workflow, existing operational bottlenecks, and real-world user behaviors before writing a line of code or selecting software frameworks.',
      },
      {
        index: '02',
        name: 'QUESTION',
        subtitle: 'Hypothesis & Scrutiny',
        description:
          'Challenge default technical assumptions. Do you actually need a microservices architecture? Is a dedicated mobile app required, or is an accessible progressive web application superior?',
      },
      {
        index: '03',
        name: 'UNDERSTAND',
        subtitle: 'Business Definition',
        description:
          'Define precise business rules, operational constraints, compliance mandates, data protection requirements, and quantifiable success metrics.',
      },
      {
        index: '04',
        name: 'MODEL',
        subtitle: 'Domain Modeling',
        description:
          'Map the problem space into ubiquitous domain language, core entities, aggregates, and bounded contexts following Domain-Driven Design principles.',
      },
      {
        index: '05',
        name: 'ARCHITECT',
        subtitle: 'System Specification',
        description:
          'Select the system topology, database schemas, API contracts, third-party adapters, and deployment infrastructure. Document critical decisions via Engineering Decision Records (EDRs).',
      },
      {
        index: '06',
        name: 'CREATE',
        subtitle: 'Ergonomic UX Design',
        description:
          'Shape the user experience through interactive wireflows, typography hierarchies, and tactile layout compositions. Focus on cognitive ease and zero visual friction.',
      },
      {
        index: '07',
        name: 'ENGINEER',
        subtitle: 'Discipline Implementation',
        description:
          'Write clean, idiomatic code with clear boundaries, comprehensive unit and integration tests, strict static analysis, and automated CI/CD builds.',
      },
      {
        index: '08',
        name: 'MEASURE',
        subtitle: 'Empirical Verification',
        description:
          'Verify system performance against strict technical benchmarks: API latency, Core Web Vitals, error rates, and security vulnerability scans.',
      },
      {
        index: '09',
        name: 'REFINE',
        subtitle: 'Evidence-Driven Polish',
        description:
          'Eliminate edge-case bugs, optimize database queries, refine micro-interactions, and ensure responsive layouts perform flawlessly across all screen sizes.',
      },
      {
        index: '10',
        name: 'OPERATE',
        subtitle: 'Production Stewardship',
        description:
          'Deploy to hardened production environments with structured logging, uptime monitoring, automated database backups, and client-accessible runbooks.',
      },
      {
        index: '11',
        name: 'EVOLVE',
        subtitle: 'Adaptive Lifecycle',
        description:
          'Continuously review system performance against changing business needs, safely updating dependencies, upgrading infrastructure, and adding capabilities as evidence dictates.',
      },
    ],
    actionLink: {
      label: 'Walk through the interactive method →',
      ariaLabel: 'Walk through the interactive method on the method page',
    },
  },
  terminalAction: {
    headline: 'What are you trying to build?',
    description:
      'Every successful system starts with understanding the problem. Share your requirements, constraints, and long-term vision. We will help you determine the right architectural starting point.',
    actions: {
      primary: {
        label: 'Initiate a Sequence Blueprint',
        ariaLabel: 'Initiate a Sequence Blueprint engagement',
      },
      secondary: {
        label: 'Direct Technical Inquiry',
        ariaLabel: 'Send a direct technical inquiry to the studio',
      },
    },
  },
} as const;

export type HomeContent = typeof HOME_CONTENT;
