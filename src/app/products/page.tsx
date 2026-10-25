import type { Metadata } from 'next';
import { ProductsScreen, PRODUCTS_CONTENT } from '@/features/products';

export const metadata: Metadata = {
  title: 'Products & Systems',
  description: PRODUCTS_CONTENT.header.narrative,
  alternates: {
    canonical: '/products',
  },
};

/**
 * Products Route Page (/products)
 *
 * Authority: Level 2 Audience-Facing Content Spec v1.1
 * Authority: Level 3 Screen, View, Layout, Motion & Sensory Contract (§24, §25, §37)
 * Architectural Feature: FEAT-04-PRODUCTS
 */
export default function ProductsPage() {
  return <ProductsScreen />;
}
