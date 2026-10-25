/**
 * Feature Gateway Summary Contract
 *
 * Authority: CORE_GATEWAY_CONTRACTS.toml
 * Authority: Level 4 DDD Architectural Guidelines (§5.2, §5.3)
 * Strict boundary rule: Navigation and Home consume gateway summaries; feature internals are private.
 */

export type GatewayTier = 'tier_1_commercial' | 'tier_2_exploratory' | 'utility_governance';

export type GatewayAvailability = 'available' | 'in_development' | 'experimental' | 'planned';

export type PreviewType =
  | 'sequence-scrubber'
  | 'complexity-toggle'
  | 'ecosystem-map'
  | 'stewardship-horizon'
  | 'none';

export interface InteractivePreview {
  readonly triggerLabel?: string;
  readonly previewType: PreviewType;
  readonly fallbackStaticText: string;
}

export interface GatewayNavigation {
  readonly label: string;
  readonly routePath: string;
}

export interface FeatureGatewaySummary {
  readonly featureId: string;
  readonly sequenceIndex: string;
  readonly title: string;
  readonly subtitle: string;
  readonly tier: GatewayTier;
  readonly availability: GatewayAvailability;
  readonly interactivePreview: InteractivePreview;
  readonly navigation: GatewayNavigation;
}
