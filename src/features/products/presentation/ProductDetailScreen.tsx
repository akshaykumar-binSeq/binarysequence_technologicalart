'use client';

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PRODUCTS_CONTENT, ProductTeardownItem } from '../content';
import { ProductHeroShowcase } from './components/ProductHeroShowcase';
import { ProductSpecSheet } from './components/ProductSpecSheet';
import { ProductDeepDive } from './components/ProductDeepDive';
import { ProductTrajectoryBar } from './components/ProductTrajectoryBar';
import styles from './product-detail.module.css';

interface ProductDetailScreenProps {
  id: string;
}

export function ProductDetailScreen({ id }: ProductDetailScreenProps): React.JSX.Element {
  const product: ProductTeardownItem | undefined = PRODUCTS_CONTENT.teardowns[id];

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.screenContainer}>
      <div className="bs-container">
        {/* Breadcrumb Back Link */}
        <nav className={styles.breadcrumbNav} aria-label="Breadcrumb navigation">
          <Link href="/products" className={styles.breadcrumbLink}>
            <span aria-hidden="true">←</span> Products & Systems Directory
          </Link>
        </nav>

        {/* ------------------------------------------------------------------
            Product Teardown Root Container (Matches Screenshot IA & UI)
            ------------------------------------------------------------------ */}
        <article
          id="product-teardown-root"
          className={styles.teardownArticle}
          aria-labelledby="product-monolithic-title"
        >
          {/* Top Taxonomy Category Tag */}
          <div className={styles.tagRow}>
            <span className={styles.categoryBadge}>{product.categoryBadge}</span>
          </div>

          {/* Monolithic Display Heading */}
          <h1 id="product-monolithic-title" className={styles.productTitle}>
            {product.name}
          </h1>

          {/* Header Divider Line */}
          <div className={styles.headerDivider} aria-hidden="true" />

          {/* Hero Media Showcase Banner */}
          <ProductHeroShowcase product={product} />

          {/* Dual-Column Specification Sheet & Executive Synthesis */}
          <ProductSpecSheet product={product} />

          {/* Deep-Dive Architecture Sections Triad */}
          <ProductDeepDive product={product} />

          {/* Trajectory Navigation / Pagination Bar */}
          <ProductTrajectoryBar
            previous={product.previousProduct}
            next={product.nextProduct}
          />
        </article>
      </div>
    </div>
  );
}
