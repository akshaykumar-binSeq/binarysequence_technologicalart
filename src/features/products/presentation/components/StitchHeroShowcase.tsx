'use client';

import React, { useState } from 'react';
import styles from './stitch-hero-showcase.module.css';

interface StitchHeroShowcaseProps {
  promptPlaceholder?: string;
  categoryBadge?: string;
  productName?: string;
  showcaseType?: string;
}

export function StitchHeroShowcase({
  promptPlaceholder = 'What native mobile app shall we design?',
  productName = 'Stitch',
  showcaseType = 'stitch-prompt',
}: StitchHeroShowcaseProps): React.JSX.Element {
  const [activePlatform, setActivePlatform] = useState<'app' | 'web'>('app');
  const [promptText, setPromptText] = useState('');

  return (
    <div
      className={styles.showcaseBanner}
      role="region"
      aria-label={`${productName} Interactive Interface Showcase`}
    >
      {/* Radiant Ambient Mesh & Dot Matrix Canvas */}
      <div className={styles.ambientMesh} aria-hidden="true">
        <div className={styles.dotGridOverlay} />
        <div className={styles.auroraGlowIndigo} />
        <div className={styles.auroraGlowCyan} />
        <div className={styles.auroraGlowViolet} />
      </div>

      {/* Centerpiece: Interactive Prompt Card Mockup */}
      <div className={styles.promptCardContainer}>
        <div className={styles.promptCard}>
          {/* Prompt Input Line / Area */}
          <div className={styles.promptInputWrapper}>
            <input
              type="text"
              className={styles.promptInput}
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder={promptPlaceholder}
              aria-label="Interface design prompt"
            />
          </div>

          {/* Bottom Toolbar Row */}
          <div className={styles.toolbarRow}>
            {/* Left Controls: Plus + Platform Toggle */}
            <div className={styles.leftControls}>
              <button
                type="button"
                className={styles.iconBtn}
                aria-label="Add design asset, mockup, or image"
                title="Add design asset"
              >
                <span className={styles.plusGlyph} aria-hidden="true">+</span>
              </button>

              <div className={styles.segmentedToggle} role="radiogroup" aria-label="Target platform">
                <button
                  type="button"
                  role="radio"
                  aria-checked={activePlatform === 'app'}
                  className={`${styles.toggleSegment} ${activePlatform === 'app' ? styles.segmentActive : ''}`}
                  onClick={() => setActivePlatform('app')}
                >
                  <svg
                    className={styles.toggleIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                    <path d="M12 18h.01" />
                  </svg>
                  <span>App</span>
                </button>

                <button
                  type="button"
                  role="radio"
                  aria-checked={activePlatform === 'web'}
                  className={`${styles.toggleSegment} ${activePlatform === 'web' ? styles.segmentActive : ''}`}
                  onClick={() => setActivePlatform('web')}
                >
                  <svg
                    className={styles.toggleIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                  </svg>
                  <span>Web</span>
                </button>
              </div>
            </div>

            {/* Right Controls: Palette, Model Badge, Voice, Submit */}
            <div className={styles.rightControls}>
              {/* Palette / Theme Trigger */}
              <button
                type="button"
                className={styles.iconBtnSmall}
                aria-label="Visual theme options"
                title="Visual styling"
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
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
              </button>

              {/* Model Pill: 3.0 Flash */}
              <div className={styles.modelBadgePill} title="Selected model">
                <span className={styles.sparkleIcon} aria-hidden="true">✦</span>
                <span className={styles.modelName}>3.0 Flash</span>
                <span className={styles.modelIndicatorDot} aria-hidden="true" />
                <span className={styles.dropdownCaret} aria-hidden="true">▾</span>
              </div>

              {/* Voice / Audio Waveform */}
              <button
                type="button"
                className={styles.iconBtnSmall}
                aria-label="Voice input"
                title="Voice input"
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
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" x2="12" y1="19" y2="22" />
                </svg>
              </button>

              {/* Upward Submit Arrow Button */}
              <button
                type="button"
                className={styles.submitArrowBtn}
                aria-label="Generate code"
                title="Synthesize UI"
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
