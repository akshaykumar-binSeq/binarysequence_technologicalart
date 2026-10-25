import type { Metadata } from 'next';
import { BlueprintScreen, BLUEPRINT_CONTENT } from '@/features/blueprint';

export const metadata: Metadata = {
  title: 'Sequence Blueprint',
  description: BLUEPRINT_CONTENT.header.narrative,
  alternates: {
    canonical: '/blueprint',
  },
};

/**
 * Blueprint Route Page (/blueprint)
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1 (Screen 05)
 * Authority: Level 3 Information Architecture v2.0 (§11.5)
 * Architectural Feature: FEAT-06-BLUEPRINT
 */
export default function BlueprintPage() {
  return <BlueprintScreen />;
}
