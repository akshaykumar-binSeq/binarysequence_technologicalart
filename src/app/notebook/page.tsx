import type { Metadata } from 'next';
import { NotebookScreen, NOTEBOOK_CONTENT } from '@/features/notebook';

export const metadata: Metadata = {
  title: NOTEBOOK_CONTENT.seo.title,
  description: NOTEBOOK_CONTENT.seo.description,
  openGraph: {
    title: NOTEBOOK_CONTENT.seo.title,
    description: NOTEBOOK_CONTENT.seo.description,
  },
};

export default function NotebookPage() {
  return <NotebookScreen />;
}
