/**
 * Selected Work & Enterprise Implementations Content Registry
 *
 * Authority: Level 1 Foundational Strategy & Master Document §28
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Authority: Level 3 Information Architecture v2.0 (Screen 06: /work)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 */

export interface LatencyTelemetryMetric {
  label: string;
  before: string;
  after: string;
  improvement: string;
  unit: string;
}

export interface SecurityMitigation {
  threatVector: string;
  mitigationStrategy: string;
  verifiedStandard: string;
}

export interface ArchitectureComparison {
  dimension: string;
  legacyArchitecture: string;
  engineeredSubstrate: string;
  impact: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  domain: string;
  statusBadge: string;
  timeframe: string;
  clientContext: string;
  executiveSummary: string;
  scaleMetric: {
    primaryValue: string;
    primaryLabel: string;
    secondaryValue: string;
    secondaryLabel: string;
  };
  challenge: {
    heading: string;
    narrative: string;
    painPoints: readonly string[];
  };
  solution: {
    heading: string;
    narrative: string;
    keyInnovations: readonly string[];
  };
  architectureComparison: readonly ArchitectureComparison[];
  latencyTelemetry: readonly LatencyTelemetryMetric[];
  securityMitigations: readonly SecurityMitigation[];
  codeHighlight?: {
    filename: string;
    language: string;
    code: string;
  };
  deliveredArtifacts: readonly string[];
}

export const WORK_CONTENT = {
  seo: {
    title: 'Selected Work & Architectural Implementations',
    description:
      'In-depth enterprise case studies: before-and-after architecture teardowns, query latency telemetry, and zero-trust security mitigations engineered by Binary Sequence Technological Art.',
  },

  hero: {
    badge: 'SELECTED CLIENT WORK // CASE STUDIES',
    binaryTelemetry: '01010111 01001111 01010010 01001011 // ENTERPRISE TEARDOWNS',
    headline: 'Engineered Systems Under True Operating Pressure.',
    lead:
      'Rigorous teardowns of production systems built and modernized by the studio. Explore before-and-after architectural transformations, verified query latency telemetry, and zero-trust security models engineered for resilience.',
    actionContact: {
      label: 'Request Architectural Review',
      href: '/contact',
      ariaLabel: 'Request an architectural review for your systems',
    },
    actionBlueprint: {
      label: 'View 10-Day Sequence Blueprint',
      href: '/blueprint',
      ariaLabel: 'Explore the 10-day standalone Sequence Blueprint deliverable',
    },
  },

  filters: [
    { id: 'all', label: 'All Disciplines' },
    { id: 'streaming', label: 'Streaming & Telemetry' },
    { id: 'financial', label: 'Financial & Ledger' },
    { id: 'distributed', label: 'Distributed Coordination' },
  ] as const,

  caseStudies: [
    {
      id: 'cs-alert-wave',
      slug: 'alert-wave-sensory-routing',
      title: 'Alert Wave: Incident Routing & Telemetry Stream Engine',
      subtitle: 'Modernizing a fragile queue monolith into a 45,000 evt/s deterministic actor substrate.',
      eyebrow: 'CASE STUDY 01 // CRITICAL INFRASTRUCTURE',
      domain: 'streaming',
      statusBadge: 'PRODUCTION ACTIVE',
      timeframe: '8-Month Overhaul',
      clientContext:
        'Global logistics and IoT fleet operator managing 120,000 connected vehicle telemetry beacons and automated hazard routing.',
      executiveSummary:
        'The client’s legacy incident routing engine experienced recurring cascading queue collapse under regional weather anomalies. Binary Sequence re-architected the pipeline into partitioned ring buffers with actor-based dispatchers, reducing p99 dispatch latency from 4.2 seconds to 11.8 milliseconds.',
      scaleMetric: {
        primaryValue: '45,000/s',
        primaryLabel: 'Sustained Event Ingestion',
        secondaryValue: '11.8ms',
        secondaryLabel: 'p99 Dispatch Latency',
      },
      challenge: {
        heading: 'Monolithic Queue Contention Under Burst Anomalies',
        narrative:
          'The existing architecture routed telemetry from 120,000 edge devices through a single shared PostgreSQL table with row-level locks and a Node.js WebSocket broker. Under regional storms, message volume tripled from 12k to 38k events per second, causing table lock storms, memory leak crashes, and silent beacon dropouts.',
        painPoints: [
          'Postgres lock contention caused write timeouts exceeding 15 seconds during weather crises.',
          'Memory footprint on WebSocket brokers escalated uncontrollably due to unbounded consumer buffers.',
          'Zero backpressure propagation meant edge gateways crashed without notifying client fleets.',
          'Multi-tenant telemetry lacked cryptographic separation, failing SOC 2 type II audit requirements.',
        ],
      },
      solution: {
        heading: 'Partitioned Memory Ring Buffers & Actor-Model Routing',
        narrative:
          'Binary Sequence engineered an isolated Go/Rust dual-plane substrate. The ingestion plane accepts edge streams over mTLS 1.3 into lock-free Disrupter ring buffers, while an isolated Actor dispatch plane evaluates geospatial alerting rules in-memory before persisting immutable events to NVMe write-ahead logs.',
        keyInnovations: [
          'Lock-free ring buffers (LMAX architecture pattern) processing events with zero allocation in the hot path.',
          'Adaptive backpressure shedding: when downstream consumers stall, low-priority telemetry drops gracefully while panic beacons take priority channels.',
          'Dual-plane isolation: Telemetry display surfaces are physically decoupled from critical alerting logic.',
          'Cryptographic envelope signing on every beacon event before edge transit.',
        ],
      },
      architectureComparison: [
        {
          dimension: 'Ingestion Transport',
          legacyArchitecture: 'Plain WebSocket with JSON payloads over single ALB',
          engineeredSubstrate: 'mTLS 1.3 Protobuf binary streams with hardware cert pinning',
          impact: 'Network packet payload size reduced by 72%; handshake time reduced by 60%',
        },
        {
          dimension: 'Queueing & Buffering',
          legacyArchitecture: 'PostgreSQL table with SELECT ... FOR UPDATE SKIP LOCKED',
          engineeredSubstrate: 'Zero-allocation ring buffers with memory-mapped write-ahead logs',
          impact: 'Database CPU dropped from 94% to 14%; zero lock contention under 3x bursts',
        },
        {
          dimension: 'Dispatch Latency (p99)',
          legacyArchitecture: '4,200ms under standard load; >15,000ms under crisis',
          engineeredSubstrate: '11.8ms guaranteed under continuous 45,000 events/sec',
          impact: 'Near-instantaneous safety dispatch to fleet operators in field',
        },
        {
          dimension: 'Tenant Isolation',
          legacyArchitecture: 'Shared logical schema with SQL WHERE tenant_id filters',
          engineeredSubstrate: 'Cryptographically partitioned actor mailboxes with isolated rings',
          impact: 'Full SOC 2 compliance with zero cross-tenant memory leakage risks',
        },
      ],
      latencyTelemetry: [
        { label: 'p50 Ingestion to Dispatch', before: '280ms', after: '4.2ms', improvement: '98.5% reduction', unit: 'ms' },
        { label: 'p95 Ingestion to Dispatch', before: '1,450ms', after: '8.4ms', improvement: '99.4% reduction', unit: 'ms' },
        { label: 'p99 Tail Latency', before: '4,200ms', after: '11.8ms', improvement: '99.7% reduction', unit: 'ms' },
        { label: 'Max Recovery Time (MTTR)', before: '45 mins', after: '1.2 secs', improvement: '99.9% faster', unit: 's' },
      ],
      securityMitigations: [
        {
          threatVector: 'Rogue Edge Impersonation',
          mitigationStrategy: 'Mutual TLS 1.3 with TPM/Secure-Enclave certificate attestation on all telematics units',
          verifiedStandard: 'FIPS 140-3 Level 2 Verified',
        },
        {
          threatVector: 'DDoS / Traffic Flooding',
          mitigationStrategy: 'Kernel-level eBPF packet filtering shedding unauthorized probes before userspace socket entry',
          verifiedStandard: 'Zero-loss under 120Gbps SYN flood simulation',
        },
        {
          threatVector: 'Cross-Tenant Eavesdropping',
          mitigationStrategy: 'Per-tenant ephemeral cryptographic keys rotated every 3,600 seconds',
          verifiedStandard: 'SOC 2 Type II Certified',
        },
      ],
      deliveredArtifacts: [
        'Complete Go/Rust Ingestion Engine Source & Microbenchmarks',
        'IaC Terraform Modules for AWS Nitro Enclave Deployment',
        'Grafana Dashboards & Prometheus SLI/SLO Telemetry Harness',
        '24/7 Runbook & Disaster Recovery Recovery Orchestration Guide',
      ],
    },

    {
      id: 'cs-binary-flow',
      slug: 'binary-flow-financial-ledger',
      title: 'Binary Flow: Event-Sourced Immutable Ledger',
      subtitle: 'Replacing nocturnal reconciliation with microsecond-level cryptographic auditability.',
      eyebrow: 'CASE STUDY 02 // FINANCIAL SETTLEMENT',
      domain: 'financial',
      statusBadge: 'PRODUCTION ACTIVE',
      timeframe: '6-Month Architecture Sprint',
      clientContext:
        'Cross-border digital settlement platform processing $140M monthly transaction volume across 6 currencies.',
      executiveSummary:
        'The client relied on distributed dual-write transactions across relational tables and caches, suffering from intermittent silent balance drift that required 4-hour nocturnal batch reconciliations. Binary Sequence designed a Raft-replicated event-sourced ledger that achieves microsecond deterministic settlement and continuous Merkle-tree verification.',
      scaleMetric: {
        primaryValue: '12,000/s',
        primaryLabel: 'Financial Settlements/s',
        secondaryValue: '0.00%',
        secondaryLabel: 'Reconciliation Drift',
      },
      challenge: {
        heading: 'Distributed Dual-Write Inconsistency & Batch Reconciliation',
        narrative:
          'When executing multi-currency transfers, the legacy application wrote simultaneously to an account balance table, an audit log table, and a Redis cache. Under network partitions or timeouts, transactions partially succeeded, creating discrepancies between client account balances and bank statement realities.',
        painPoints: [
          'Nocturnal batch reconciliations required halting user withdrawals for up to 4 hours every midnight.',
          'Silent balance drift created unrecoverable over-draft losses exceeding $40,000 annually.',
          'Relational database indexes bloated to 1.8TB, causing query latency to degrade progressively.',
          'Audit trail was stored as mutable rows, leaving the client vulnerable to internal credential compromise.',
        ],
      },
      solution: {
        heading: 'Event-Sourced Append Log with Merkle Tree Proofs',
        narrative:
          'Binary Sequence transformed the settlement domain into an immutable event-sourced log. Account balances are strictly derived from the sequential fold of cryptographic transaction events. Every batch of 100 transactions produces a verifiable Merkle root hash stored on an external WORM (write-once, read-many) cloud archive.',
        keyInnovations: [
          'Pure event-sourced domain: Zero mutable balance columns; every credit and debit is an immutable signed delta.',
          'Raft consensus cluster guaranteeing strict linearizability without distributed two-phase commit overhead.',
          'CQRS read-model materialized views optimized for sub-millisecond wallet balance queries.',
          'Continuous automated reconciliation running concurrently with live transactions in < 50 microseconds.',
        ],
      },
      architectureComparison: [
        {
          dimension: 'State Mutation Model',
          legacyArchitecture: 'Mutable SQL UPDATE statements on accounts table',
          engineeredSubstrate: 'Strict immutable append log of double-entry ledger events',
          impact: 'Absolute auditability; zero historical state corruption or overwrite risks',
        },
        {
          dimension: 'Reconciliation Mechanism',
          legacyArchitecture: '4-hour nocturnal batch SQL aggregation jobs requiring maintenance window',
          engineeredSubstrate: 'Zero-maintenance continuous mathematical fold with Merkle verification',
          impact: '100% elimination of nocturnal maintenance windows and balance drift',
        },
        {
          dimension: 'Historical Balance Audits',
          legacyArchitecture: 'Slow table scans requiring 14.2s for 5-year point-in-time reconstruction',
          engineeredSubstrate: 'Snapshot-compacted temporal b-trees querying in 18ms',
          impact: 'Near-instant regulatory compliance audits and forensic reports',
        },
        {
          dimension: 'High Availability',
          legacyArchitecture: 'Active-passive Postgres replica with manual failover script',
          engineeredSubstrate: '3-node Raft consensus cluster with automatic leader election in < 150ms',
          impact: 'Uninterrupted financial operations during cloud zone outages',
        },
      ],
      latencyTelemetry: [
        { label: 'Settlement Confirmation', before: '1,800ms', after: '48ms', improvement: '97.3% faster', unit: 'ms' },
        { label: 'Point-in-Time Historical Audit', before: '14,200ms', after: '18ms', improvement: '99.8% faster', unit: 'ms' },
        { label: 'Reconciliation Cycle Time', before: '4 hours', after: 'Continuous', improvement: 'Real-time', unit: '' },
        { label: 'Storage Footprint Growth', before: '45 GB/mo', after: '6.2 GB/mo', improvement: '86.2% smaller', unit: 'GB' },
      ],
      securityMitigations: [
        {
          threatVector: 'Internal Database Tampering',
          mitigationStrategy: 'Cryptographic hash chaining with Merkle proofs written to immutable AWS S3 Glacier WORM vault',
          verifiedStandard: 'SEC Rule 17a-4(f) Compliant',
        },
        {
          threatVector: 'Double-Spend Race Condition',
          mitigationStrategy: 'Single-writer actor queue per currency ledger enforcing strict linear execution order',
          verifiedStandard: 'Mathematical proof of zero race conditions under 100k simulated concurrent requests',
        },
        {
          threatVector: 'Data-at-Rest Exposure',
          mitigationStrategy: 'Envelope encryption with per-tenant Customer-Managed Keys (CMEK) via AWS KMS',
          verifiedStandard: 'AES-256-GCM Hardware Encryption',
        },
      ],
      deliveredArtifacts: [
        'Domain-Driven Financial Ledger Engine (Rust / Actix)',
        'Merkle-Tree Verification CLI & Automated Compliance Auditor',
        'Read-Optimized CQRS Projection Services',
        'Formal Mathematical Proof of Invariant Double-Entry Conservation',
      ],
    },

    {
      id: 'cs-time-engine',
      slug: 'time-engine-distributed-coordination',
      title: 'Time Engine: Distributed Chronometric State Coordinator',
      subtitle: 'Eliminating multi-second timer drift across 3 global regions with hierarchical timing wheels.',
      eyebrow: 'CASE STUDY 03 // DISTRIBUTED SYSTEMS',
      domain: 'distributed',
      statusBadge: 'PRODUCTION ACTIVE',
      timeframe: '5-Month Engineering Cycle',
      clientContext:
        'Enterprise SaaS workflow orchestration platform executing 8.5 million scheduled state transitions daily across multi-cloud regions.',
      executiveSummary:
        'The client’s cron-based scheduling database experienced thread starvation and timer drift of up to 4.5 seconds under peak loads. Binary Sequence engineered a distributed chronometric engine using hierarchical hashed timing wheels and Raft leases, eliminating drift to sub-1.5ms precision.',
      scaleMetric: {
        primaryValue: '180,000/s',
        primaryLabel: 'Timer Executions/s',
        secondaryValue: '< 1.5ms',
        secondaryLabel: 'Chronometric Precision',
      },
      challenge: {
        heading: 'Polling Starvation & Database Lock Contention',
        narrative:
          'Every 1,000 milliseconds, an array of cron worker instances polled a shared database table containing millions of scheduled jobs. As the job queue scaled past 4 million records, index contention caused database thread locks, leading to delayed state transitions, duplicate execution races, and customer SLA penalties.',
        painPoints: [
          'Scheduled workflow tasks drifted by up to 4.5 seconds from their designated execution trigger times.',
          'Worker node failover caused duplicate task execution on 1.2% of jobs, triggering duplicate client billing.',
          'Database connection pools were depleted by polling workers, starving user web traffic.',
          'Multi-region synchronization was impossible due to lack of a global clock consensus mechanism.',
        ],
      },
      solution: {
        heading: 'Hierarchical Hashed Timing Wheels with Distributed Leases',
        narrative:
          'Binary Sequence deployed an in-memory chronometric state machine based on the Varghese-Lauck hierarchical hashed timing wheel algorithm. Timers are held in memory-mapped ring buckets with microsecond precision, while persistent leases guarantee exactly-once execution even during sudden worker crashes.',
        keyInnovations: [
          'O(1) insertion, deletion, and expiry execution via hierarchical hashed timing wheels.',
          'Distributed Raft lease coordination: Timers are strictly partitioned across worker nodes with automatic sub-second failover.',
          'Fencing token verification: Downstream execution targets reject stale triggers from network-isolated nodes.',
          'Zero-polling architecture: Sleep/wake semantics replace database polling queries, reducing database load to near-zero.',
        ],
      },
      architectureComparison: [
        {
          dimension: 'Timer Data Structure',
          legacyArchitecture: 'Relational table with composite timestamp index scanned every 1s',
          engineeredSubstrate: 'Hierarchical hashed timing wheels (O(1) lookup & firing)',
          impact: 'Timer scheduling complexity dropped from O(log N) to O(1); zero polling queries',
        },
        {
          dimension: 'Chronometric Precision',
          legacyArchitecture: 'Jitter variance of ± 2,400ms to ± 4,500ms',
          engineeredSubstrate: 'Jitter variance tightly bounded to < 1.5ms',
          impact: 'Guaranteed execution predictability for real-time SLA contracts',
        },
        {
          dimension: 'Throughput Capacity',
          legacyArchitecture: 'Max capacity 1,200 fires/sec before database lockup',
          engineeredSubstrate: 'Benchmarked at 180,000 fires/sec per 3-node cluster',
          impact: '150x increase in enterprise workflow processing volume',
        },
        {
          dimension: 'Duplicate Execution Rate',
          legacyArchitecture: '1.2% duplicate rate during worker network blips',
          engineeredSubstrate: 'Mathematically guaranteed 0.00% via distributed fencing tokens',
          impact: 'Elimination of erroneous double-billing and duplicate workflows',
        },
      ],
      latencyTelemetry: [
        { label: 'Timer Firing Jitter', before: '± 2,400ms', after: '< 1.5ms', improvement: '99.9% precision', unit: 'ms' },
        { label: 'Max Cluster Throughput', before: '1,200/s', after: '180,000/s', improvement: '150x throughput', unit: '/s' },
        { label: 'Database CPU Utilization', before: '78%', after: '3.4%', improvement: '95.6% load reduction', unit: '%' },
        { label: 'Memory Footprint / 1M Timers', before: '2,400 MB', after: '410 MB', improvement: '82.9% reduction', unit: 'MB' },
      ],
      securityMitigations: [
        {
          threatVector: 'Split-Brain Duplicate Firing',
          mitigationStrategy: 'Distributed Raft leader lease with cryptographic fencing tokens incremented on every term',
          verifiedStandard: 'Verified via Jepsen testing framework under simulated network partitions',
        },
        {
          threatVector: 'Unauthorized Action Triggering',
          mitigationStrategy: 'HMAC-SHA256 signature verification on timer payloads with nonces preventing replay',
          verifiedStandard: 'RFC 2104 Cryptographic Standards Compliant',
        },
        {
          threatVector: 'Worker Poison Pill Crash',
          mitigationStrategy: 'Isolate task execution sandboxes with memory limits and panic catch supervisors',
          verifiedStandard: 'Zero cluster crash in 18 months continuous production',
        },
      ],
      deliveredArtifacts: [
        'High-Precision Chronometric Engine Core (Go)',
        'Kubernetes Operator for Autoscaling Timing Wheel Nodes',
        'Jepsen Chaos Test Harness & Validation Scripts',
        'Comprehensive Architecture Whitepaper & Operational Runbook',
      ],
    },
  ] as const,

  cta: {
    eyebrow: 'ARCHITECTURAL RIGOR // STANDALONE ENGAGEMENT',
    headline: 'Your Architecture Deserves This Level of Precision.',
    body:
      'Whether you are replacing an inherited monolith, eliminating mission-critical latency bottlenecks, or building a new digital product from the ground up, we bring enterprise engineering rigor to every system.',
    actionBlueprint: {
      label: 'Request 10-Day Sequence Blueprint',
      href: '/blueprint',
      ariaLabel: 'Request a 10-day Sequence Blueprint evaluation',
    },
    actionContact: {
      label: 'Direct Technical Discussion',
      href: '/contact',
      ariaLabel: 'Start a direct technical discussion with the founder',
    },
  },
} as const;

export type WorkContent = typeof WORK_CONTENT;
