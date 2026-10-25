/**
 * Architecture Topology Atlas Content Registry
 *
 * Authority: Level 1 Foundational Strategy & Master Document §28
 * Authority: Level 3 Information Architecture v2.0 (Screen 08: /atlas)
 * Governing Rule: DEC-009 Mandatory UI Text Centralization
 */

export type ArchitectureLayerId =
  | 'substrate'
  | 'engines'
  | 'domains'
  | 'gateways'
  | 'surfaces';

export interface TopologyNode {
  id: string;
  name: string;
  shortCode: string;
  layer: ArchitectureLayerId;
  layerName: string;
  status: 'OPERATIONAL' | 'LOW_LATENCY' | 'REDUNDANT';
  protocol: string;
  throughput: string;
  latencySla: string;
  description: string;
  upstreamNodeIds: readonly string[];
  downstreamNodeIds: readonly string[];
  resiliencePolicy: string;
  hardwareAnchor: string;
}

export const ATLAS_CONTENT = {
  seo: {
    title: 'Architecture Topology Atlas',
    description:
      'Interactive structural topology explorer mapping foundational substrates, core engines, domain boundaries, gateways, and sensory surfaces across Binary Sequence systems.',
  },

  hero: {
    badge: 'SYSTEM TOPOLOGY // ARCHITECTURE ATLAS',
    binaryTelemetry: '01000001 01010100 01001100 01000001 01010011 // TOPOLOGY MAP',
    headline: 'The Connected Architecture Substrate.',
    lead:
      'An interactive atlas mapping how sensory surfaces, domain bounded contexts, core engines, and hardware substrates interconnect. Trace data vectors, examine protocol handshakes, and inspect verified reliability policies.',
  },

  layers: [
    {
      id: 'all',
      label: 'Full System Topology',
      description: 'Unified 5-tier architecture map from hardware substrate to sensory interface.',
    },
    {
      id: 'substrate',
      label: 'Layer 1: Foundational Substrate',
      description: 'Physical hardware, POSIX kernel rings, memory-mapped write-ahead logs, and cryptographic TPM enclaves.',
    },
    {
      id: 'engines',
      label: 'Layer 2: Core Engines & Protocols',
      description: 'Consensus clusters, chronometric timing wheels, actor dispatchers, and binary serialization pipelines.',
    },
    {
      id: 'domains',
      label: 'Layer 3: Bounded Domain Contexts',
      description: 'DDD aggregates, double-entry immutable ledgers, incident telemetry, and temporal state machines.',
    },
    {
      id: 'gateways',
      label: 'Layer 4: Application Gateways',
      description: 'Dual-mode intake routers, edge API endpoints, event buses, and zero-trust authentication filters.',
    },
    {
      id: 'surfaces',
      label: 'Layer 5: Sensory & UI Surfaces',
      description: 'High-contrast Swiss laboratory design, ambient mathematical vector field, and accessible client screens.',
    },
  ] as const,

  nodes: [
    // Layer 1: Substrates
    {
      id: 'node-ring-buffer',
      name: 'Memory Ring Buffer Substrate',
      shortCode: 'SUB-01',
      layer: 'substrate',
      layerName: 'Layer 1: Substrate',
      status: 'OPERATIONAL',
      protocol: 'Lock-Free Memory IPC',
      throughput: '120,000 evt/s',
      latencySla: '< 0.2ms',
      description:
        'Cache-line padded, sequential circular ring buffers pre-allocated in non-swappable physical RAM to eliminate heap allocation pauses.',
      upstreamNodeIds: [],
      downstreamNodeIds: ['node-alert-wave', 'node-binary-flow'],
      resiliencePolicy: 'Deterministic ring overwrite shedding with panic alerts on consumer stalls.',
      hardwareAnchor: 'Physical L1/L2 Cache Aligned (64-byte padding)',
    },
    {
      id: 'node-wal-nvme',
      name: 'NVMe Write-Ahead Log Cluster',
      shortCode: 'SUB-02',
      layer: 'substrate',
      layerName: 'Layer 1: Substrate',
      status: 'OPERATIONAL',
      protocol: 'Direct I/O O_DIRECT',
      throughput: '85,000 IOPS',
      latencySla: '< 1.1ms',
      description:
        'Synchronous append-only disk logging with battery-backed write caches to ensure ACID durability before state confirmation.',
      upstreamNodeIds: [],
      downstreamNodeIds: ['node-raft-consensus', 'node-time-engine'],
      resiliencePolicy: 'Dual-path NVMe mirror with automatic sector fault isolation.',
      hardwareAnchor: 'PCIe 4.0 NVMe Enterprise Solid-State Array',
    },

    // Layer 2: Core Engines
    {
      id: 'node-alert-wave',
      name: 'Alert Wave Sensory Dispatch Engine',
      shortCode: 'ENG-01',
      layer: 'engines',
      layerName: 'Layer 2: Core Engines',
      status: 'OPERATIONAL',
      protocol: 'Protobuf / mTLS 1.3',
      throughput: '45,000 evt/s',
      latencySla: '11.8ms (p99)',
      description:
        'Actor-model routing engine classifying streaming coordinate anomalies and routing safety alerts across concurrent consumer channels.',
      upstreamNodeIds: ['node-ring-buffer'],
      downstreamNodeIds: ['node-domain-incident', 'node-gateway-event'],
      resiliencePolicy: 'Per-actor supervisor trees with sub-millisecond restart isolation.',
      hardwareAnchor: 'Multi-Core Dedicated Go/Rust Cluster',
    },
    {
      id: 'node-raft-consensus',
      name: 'Binary Flow Raft Consensus Core',
      shortCode: 'ENG-02',
      layer: 'engines',
      layerName: 'Layer 2: Core Engines',
      status: 'OPERATIONAL',
      protocol: 'Raft RPC / gRPC',
      throughput: '12,000 tx/s',
      latencySla: '48ms quorum',
      description:
        'Strict linearizable consensus protocol replicating immutable financial state machine events across three fault-isolated zones.',
      upstreamNodeIds: ['node-wal-nvme'],
      downstreamNodeIds: ['node-domain-ledger'],
      resiliencePolicy: 'Automatic leader re-election within 150ms under zone partitions.',
      hardwareAnchor: 'Geographically Isolated Nitro Enclave Nodes',
    },
    {
      id: 'node-time-engine',
      name: 'Time Engine Hashed Wheel Chronometer',
      shortCode: 'ENG-03',
      layer: 'engines',
      layerName: 'Layer 2: Core Engines',
      status: 'OPERATIONAL',
      protocol: 'High-Res POSIX Timers',
      throughput: '180,000 fire/s',
      latencySla: '< 1.5ms jitter',
      description:
        'Hierarchical hashed timing wheel state machine maintaining millions of ephemeral timers in O(1) scheduling complexity.',
      upstreamNodeIds: ['node-wal-nvme'],
      downstreamNodeIds: ['node-domain-temporal'],
      resiliencePolicy: 'Fencing-token lease expiration preventing stale timer fires.',
      hardwareAnchor: 'Bare-Metal Clock-Synchronized Cores via Chrony PTP',
    },

    // Layer 3: Domains
    {
      id: 'node-domain-incident',
      name: 'Incident Routing Bounded Context',
      shortCode: 'DOM-01',
      layer: 'domains',
      layerName: 'Layer 3: Domain Contexts',
      status: 'OPERATIONAL',
      protocol: 'Domain Event Bus',
      throughput: '35,000 evt/s',
      latencySla: '< 5ms',
      description:
        'Domain-Driven Design bounded context encapsulating hazard thresholds, vehicle geofences, and emergency escalation policies.',
      upstreamNodeIds: ['node-alert-wave'],
      downstreamNodeIds: ['node-gateway-event', 'node-surface-lab'],
      resiliencePolicy: 'Circuit breakers isolating unacknowledged external notification channels.',
      hardwareAnchor: 'Application Domain Layer Isolation',
    },
    {
      id: 'node-domain-ledger',
      name: 'Immutable Financial Ledger Context',
      shortCode: 'DOM-02',
      layer: 'domains',
      layerName: 'Layer 3: Domain Contexts',
      status: 'OPERATIONAL',
      protocol: 'Event Sourced Append',
      throughput: '12,000 tx/s',
      latencySla: '< 2ms fold',
      description:
        'Double-entry mathematical ledger enforcing zero balance drift, Merkle root tree chaining, and strict cryptographic auditability.',
      upstreamNodeIds: ['node-raft-consensus'],
      downstreamNodeIds: ['node-gateway-intake', 'node-surface-lab'],
      resiliencePolicy: 'Invariant rejection: any transaction violating debit/credit balance aborts.',
      hardwareAnchor: 'KMS Customer-Managed Keys (CMEK) Vault',
    },
    {
      id: 'node-domain-temporal',
      name: 'Temporal Coordination Context',
      shortCode: 'DOM-03',
      layer: 'domains',
      layerName: 'Layer 3: Domain Contexts',
      status: 'OPERATIONAL',
      protocol: 'State Machine RPC',
      throughput: '150,000 fire/s',
      latencySla: '< 1ms',
      description:
        'Orchestration domain coordinating multi-step enterprise workflows, retry schedules, and deadline enforcement policies.',
      upstreamNodeIds: ['node-time-engine'],
      downstreamNodeIds: ['node-gateway-event'],
      resiliencePolicy: 'Idempotency tokens guaranteeing exactly-once side-effect execution.',
      hardwareAnchor: 'Stateless Worker Fleet with Distributed Leases',
    },

    // Layer 4: Gateways
    {
      id: 'node-gateway-intake',
      name: 'Dual-Mode Inquiry & Ingestion Intake',
      shortCode: 'GW-01',
      layer: 'gateways',
      layerName: 'Layer 4: Gateways',
      status: 'OPERATIONAL',
      protocol: 'HTTPS POST + mailto: fallback',
      throughput: '1,500 req/s',
      latencySla: '< 180ms',
      description:
        'Resilient intake router (DR-08) evaluating structured project requests via cloud endpoints with deterministic zero-loss email fallbacks.',
      upstreamNodeIds: ['node-domain-ledger'],
      downstreamNodeIds: ['node-surface-blueprint', 'node-surface-contact'],
      resiliencePolicy: 'Client-side draft caching preserving user payloads across network interruptions.',
      hardwareAnchor: 'Next.js Edge Runtime Serverless Handlers',
    },
    {
      id: 'node-gateway-event',
      name: 'WebSocket & Server-Sent Events Gateway',
      shortCode: 'GW-02',
      layer: 'gateways',
      layerName: 'Layer 4: Gateways',
      status: 'OPERATIONAL',
      protocol: 'WSS / HTTP/2 SSE',
      throughput: '60,000 conns',
      latencySla: '< 15ms',
      description:
        'Edge connection terminating gateway fanning out real-time telemetry updates and state shifts to authenticated web and mobile clients.',
      upstreamNodeIds: ['node-domain-incident', 'node-domain-temporal'],
      downstreamNodeIds: ['node-surface-lab', 'node-surface-ambient'],
      resiliencePolicy: 'Per-connection backpressure sheds with heartbeat reconnect throttling.',
      hardwareAnchor: 'Anycast Distributed Edge Points of Presence',
    },

    // Layer 5: Surfaces
    {
      id: 'node-surface-lab',
      name: 'Swiss Laboratory UI Design Surface',
      shortCode: 'SURF-01',
      layer: 'surfaces',
      layerName: 'Layer 5: Sensory Surfaces',
      status: 'OPERATIONAL',
      protocol: 'DOM / CSS Modules / React 19',
      throughput: '60 fps Composited',
      latencySla: '< 50ms FCP',
      description:
        'Calibrated obsidian-and-amber documentation interface strictly compliant with WCAG 2.1 AA and 8pt spatial grid ergonomics.',
      upstreamNodeIds: ['node-gateway-intake', 'node-gateway-event'],
      downstreamNodeIds: [],
      resiliencePolicy: 'Zero-runtime CSS tokens with instant offline fallback rendering.',
      hardwareAnchor: 'Client GPU Accelerated Rendering Pipeline',
    },
    {
      id: 'node-surface-ambient',
      name: 'Ambient Mathematical Particle Mesh',
      shortCode: 'SURF-02',
      layer: 'surfaces',
      layerName: 'Layer 5: Sensory Surfaces',
      status: 'OPERATIONAL',
      protocol: 'Canvas 2D / Retina DPR',
      throughput: '60 fps Zero-Thrash',
      latencySla: '< 16.6ms / frame',
      description:
        'Subtle harmonic particle and vector wave field deflecting organically on pointer move and touch gestures.',
      upstreamNodeIds: ['node-gateway-event'],
      downstreamNodeIds: [],
      resiliencePolicy: 'Automatic loop pause on tab hide / reduced-motion preference.',
      hardwareAnchor: 'Hardware-Accelerated HTML5 Canvas',
    },
    {
      id: 'node-surface-blueprint',
      name: 'Sequence Blueprint Interactive Engine',
      shortCode: 'SURF-03',
      layer: 'surfaces',
      layerName: 'Layer 5: Sensory Surfaces',
      status: 'OPERATIONAL',
      protocol: 'React 19 Form Action',
      throughput: 'Interactive',
      latencySla: '< 10ms Step Reflow',
      description:
        '4-step architectural inquiry wizard and 10-day sprint deliverable timeline with real-time field validation.',
      upstreamNodeIds: ['node-gateway-intake'],
      downstreamNodeIds: [],
      resiliencePolicy: 'Step preservation in local state with keyboard-accessible Tab navigation.',
      hardwareAnchor: 'Client Browser DOM Tree',
    },
    {
      id: 'node-surface-contact',
      name: 'Direct Technical Discussion Pathway',
      shortCode: 'SURF-04',
      layer: 'surfaces',
      layerName: 'Layer 5: Sensory Surfaces',
      status: 'OPERATIONAL',
      protocol: 'HTTPS Dual-Mode Intake',
      throughput: 'Interactive',
      latencySla: '< 150ms Submit',
      description:
        '3 distinct entry pathways connecting technical leads directly with the founder in Kerala, India.',
      upstreamNodeIds: ['node-gateway-intake'],
      downstreamNodeIds: [],
      resiliencePolicy: 'Instant mailto URI construction with full message preservation upon network fault.',
      hardwareAnchor: 'Client Browser DOM Tree',
    },
  ] as const,

  guarantees: [
    {
      title: 'Architectural Sovereignty',
      desc: 'Clients receive 100% full ownership of source code, IaC configs, and build pipelines with zero proprietary lock-in.',
    },
    {
      title: 'Deterministic Verification',
      desc: 'Every performance claim and SLA bound is backed by reproducible microbenchmarks and open telemetry records.',
    },
    {
      title: 'Single-Practitioner Continuity',
      desc: 'Operational runbooks, automated backups, and escrow-ready repositories mitigate single-point dependency risks.',
    },
  ] as const,
} as const;

export type AtlasContent = typeof ATLAS_CONTENT;
