import type { Metadata } from 'next';
import { AtlasScreen, ATLAS_CONTENT } from '@/features/atlas';

export const metadata: Metadata = {
  title: ATLAS_CONTENT.seo.title,
  description: ATLAS_CONTENT.seo.description,
  openGraph: {
    title: ATLAS_CONTENT.seo.title,
    description: ATLAS_CONTENT.seo.description,
  },
};

export default function AtlasPage() {
  return <AtlasScreen />;
}
