'use client';

import React, { useState } from 'react';
import { ProductTeardownItem } from '../../content';
import styles from './stitch-hero-showcase.module.css';

interface ProductHeroShowcaseProps {
  product: ProductTeardownItem;
}

export function ProductHeroShowcase({ product }: ProductHeroShowcaseProps): React.JSX.Element {
  const [activePlatformIndex, setActivePlatformIndex] = useState<number>(0);
  const [inputText, setInputText] = useState('');

  const [optA, optB] = product.showcase.platformOptions;
  const isSecondActive = activePlatformIndex === 1;

  // Select glow classes based on product glowVariant
  const getGlowClass = () => {
    switch (product.showcase.glowVariant) {
      case 'emerald':
        return styles.auroraGlowEmerald;
      case 'amber':
        return styles.auroraGlowAmber;
      case 'cyan':
        return styles.auroraGlowCyan;
      case 'indigo':
      default:
        return styles.auroraGlowIndigo;
    }
  };

  return (
    <div
      className={styles.showcaseBanner}
      role="region"
      aria-label={`${product.name} Interactive System Preview`}
    >
      {/* Radiant Ambient Mesh & Dot Matrix Canvas */}
      <div className={styles.ambientMesh} aria-hidden="true">
        <div className={styles.dotGridOverlay} />
        <div className={`${styles.auroraGlowBase} ${getGlowClass()}`} />
        <div className={styles.auroraGlowViolet} />
      </div>

      {/* Centerpiece: Interactive System Preview Mockup */}
      <div className={styles.promptCardContainer}>
        <div className={styles.promptCard}>
          {/* System Input Line */}
          <div className={styles.promptInputWrapper}>
            <input
              type="text"
              className={styles.promptInput}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={product.showcase.placeholder}
              aria-label={`${product.name} interaction terminal`}
            />
          </div>

          {/* Bottom Toolbar Row */}
          <div className={styles.toolbarRow}>
            {/* Left Controls: Plus + Platform Toggle */}
            <div className={styles.leftControls}>
              <button
                type="button"
                className={styles.iconBtn}
                aria-label="Add architectural input or payload"
                title="Attach schema payload"
              >
                <span className={styles.plusGlyph} aria-hidden="true">+</span>
              </button>

              <div className={styles.segmentedToggle} role="radiogroup" aria-label="Operational Mode">
                <button
                  type="button"
                  role="radio"
                  aria-checked={!isSecondActive}
                  className={`${styles.toggleSegment} ${!isSecondActive ? styles.segmentActive : ''}`}
                  onClick={() => setActivePlatformIndex(0)}
                >
                  <span>{optA}</span>
                </button>

                <button
                  type="button"
                  role="radio"
                  aria-checked={isSecondActive}
                  className={`${styles.toggleSegment} ${isSecondActive ? styles.segmentActive : ''}`}
                  onClick={() => setActivePlatformIndex(1)}
                >
                  <span>{optB}</span>
                </button>
              </div>
            </div>

            {/* Right Controls: Palette, Model Badge, Voice, Submit */}
            <div className={styles.rightControls}>
              {/* Palette / Theme Trigger */}
              <button
                type="button"
                className={styles.iconBtnSmall}
                aria-label="Calibrate telemetry parameters"
                title="System calibration"
              >
                <svg
                  className={styles.toolIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              </button>

              {/* Model / Substrate Badge */}
              <div className={styles.modelBadgePill} title="Active system runtime">
                <span className={styles.modelName}>{product.showcase.modelBadge}</span>
              </div>

              {/* Send / Execute Action */}
              <button
                type="button"
                className={styles.submitArrowBtn}
                aria-label={`Execute ${product.name} command`}
                title="Execute command"
              >
                <svg
                  className={styles.arrowIcon}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
