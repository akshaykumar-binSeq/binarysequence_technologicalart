import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductDetailScreen, PRODUCTS_CONTENT } from '@/features/products';

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return Object.keys(PRODUCTS_CONTENT.teardowns).map((id) => ({
    id,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = PRODUCTS_CONTENT.teardowns[id];

  if (!product) {
    return {
      title: 'Product Teardown Not Found | Binary Sequence',
    };
  }

  return {
    title: `${product.name} — Architecture Teardown | Binary Sequence`,
    description: product.summary,
    alternates: {
      canonical: `/products/${id}`,
    },
    openGraph: {
      title: `${product.name} — Architecture Teardown`,
      description: product.summary,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;

  if (!PRODUCTS_CONTENT.teardowns[id]) {
    notFound();
  }

  return <ProductDetailScreen id={id} />;
}
