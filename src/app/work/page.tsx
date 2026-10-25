import type { Metadata } from 'next';
import { WorkScreen, WORK_CONTENT } from '@/features/work';

export const metadata: Metadata = {
  title: WORK_CONTENT.seo.title,
  description: WORK_CONTENT.seo.description,
  openGraph: {
    title: WORK_CONTENT.seo.title,
    description: WORK_CONTENT.seo.description,
  },
};

export default function WorkPage() {
  return <WorkScreen />;
}
