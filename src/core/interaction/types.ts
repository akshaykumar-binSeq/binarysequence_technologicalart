/**
 * Core Interaction Types — Content-Aware Navigation & Gesture Orchestration
 *
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract
 * Architectural Boundary: src/core/interaction/ (Shared Infrastructure)
 */

import React from 'react';

export interface ContentFramingOptions {
  /** Reference to the root container element of the interactive section */
  containerRef: React.RefObject<HTMLElement | null>;
  /** Optional function to resolve a specific child stage element id */
  targetIdResolver?: (stageIndex: number) => string;
  /** Header element selector (default: 'header') */
  headerSelector?: string;
  /** Target clearance below sticky header on desktop in px (default: 24) */
  clearanceDesktop?: number;
  /** Target clearance below sticky header on mobile/tablet in px (default: 16) */
  clearanceMobile?: number;
  /** Minimum displacement required before initiating a scroll in px (default: 24) */
  thresholdDiff?: number;
}

export interface GestureOrchestrationOptions {
  /** Reference to the container element */
  containerRef: React.RefObject<HTMLElement | null>;
  /** Authoritative current stage index */
  activeStage: number;
  /** Total number of ordered stages */
  stageCount: number;
  /** Current gesture lock status */
  isLocked: boolean;
  /** Callback to advance or reverse stages */
  onSelectStage: (nextIndex: number, shouldAutoFrame?: boolean) => void;
  /** Wheel delta accumulation threshold before advancing in px (default: 25) */
  wheelThreshold?: number;
  /** Touch vertical delta threshold before advancing in px (default: 40) */
  touchThreshold?: number;
  /** Ratio of viewport height considered the active reading zone top boundary (default: 0.45) */
  readingZoneTopRatio?: number;
  /** Timeout in ms to reset accumulated wheel delta if user pauses (default: 250) */
  deltaResetTimeoutMs?: number;
}

export interface ScrollProgressionOptions {
  /** Whether scroll-driven progression is enabled (default: true) */
  enabled?: boolean;
  /** Viewport ratio from top where reading traversal begins (default: 0.65) */
  startOffsetRatio?: number;
  /** Viewport ratio from top where reading traversal completes (default: 0.25) */
  endOffsetRatio?: number;
  /** Duration in ms to hold manual tab/card selection before resuming scroll sync (default: 1200) */
  manualOverrideTimeoutMs?: number;
  /** Scroll displacement in px to break manual selection override (default: 80) */
  manualScrollThresholdPx?: number;
}

export interface ContentProgressionConfig {
  /** Total number of stages */
  stageCount: number;
  /** Initial active stage index (default: 0) */
  initialStage?: number;
  /** Callback fired when the active stage changes */
  onStageChange?: (newStage: number) => void;
  /** Duration in ms to lock gestures after a stage change (default: 400) */
  lockDurationMs?: number;
  /** Configuration for intelligent auto-framing */
  framing?: Omit<ContentFramingOptions, 'containerRef'>;
  /** Configuration for gesture orchestration */
  gestures?: {
    enabled?: boolean;
    wheelThreshold?: number;
    touchThreshold?: number;
    readingZoneTopRatio?: number;
  };
  /** Configuration for continuous scroll-driven stage progression */
  scrollProgression?: ScrollProgressionOptions;
  /** Reference to the root container element */
  containerRef?: React.RefObject<HTMLElement | null>;
  /** Optional reference to horizontal scrollable track */
  trackRef?: React.RefObject<HTMLElement | null>;
}

export interface ContentProgressionReturn {
  activeStage: number;
  setActiveStage: (index: number) => void;
  isGestureLocked: boolean;
  handleStageSelect: (index: number, shouldAutoFrame?: boolean) => void;
  handlePrev: () => void;
  handleNext: () => void;
  handleTabKeyDown: (e: React.KeyboardEvent, currentIndex: number) => void;
  frameContentIntelligently: (targetStage: number) => void;
}
