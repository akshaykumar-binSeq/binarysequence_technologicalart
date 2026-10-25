import type { Metadata, Viewport } from 'next';
import './globals.css';
import { APP_CONFIG } from '@/core/constants/app';
import { SHELL_CONTENT } from '@/core/content/shell.content';
import { Header, Footer } from '@/core/shell';

export const metadata: Metadata = {
  title: {
    default: APP_CONFIG.defaultTitle,
    template: APP_CONFIG.titleTemplate,
  },
  description: APP_CONFIG.description,
  applicationName: APP_CONFIG.name,
  authors: [{ name: APP_CONFIG.author }],
  keywords: [...APP_CONFIG.keywords],
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  openGraph: {
    type: 'website',
    locale: APP_CONFIG.locale,
    siteName: APP_CONFIG.name,
    title: APP_CONFIG.defaultTitle,
    description: APP_CONFIG.description,
  },
  twitter: {
    card: 'summary',
    title: APP_CONFIG.defaultTitle,
    description: APP_CONFIG.description,
  },
};

export const viewport: Viewport = {
  themeColor: APP_CONFIG.themeColor,
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={APP_CONFIG.locale}>
      <body>
        <a href="#main-content" className="bs-skip-link">
          {SHELL_CONTENT.skipLink}
        </a>
        <Header />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
