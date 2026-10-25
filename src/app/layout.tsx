import type { Metadata, Viewport } from 'next';
import './globals.css';
import { APP_CONFIG } from '@/core/constants/app';
import { SHELL_CONTENT } from '@/core/content/shell.content';
import { Header, Footer, ScrollToTop, PageTransitionContainer, AmbientCanvas } from '@/core/shell';
import { NavigationProvenanceProvider } from '@/core/interaction';

export const metadata: Metadata = {
  metadataBase: new URL(APP_CONFIG.siteUrl),
  title: {
    default: APP_CONFIG.homeSeoTitle,
    template: APP_CONFIG.titleTemplate,
  },
  description: APP_CONFIG.homeSeoDescription,
  applicationName: APP_CONFIG.name,
  authors: [{ name: APP_CONFIG.author, url: APP_CONFIG.siteUrl }],
  creator: APP_CONFIG.author,
  publisher: APP_CONFIG.name,
  keywords: [...APP_CONFIG.keywords],
  formatDetection: {
    telephone: false,
    date: false,
    email: false,
    address: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/images/icon-small.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/icon-small.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/images/icon-small.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: APP_CONFIG.locale,
    siteName: APP_CONFIG.name,
    images: [
      {
        url: APP_CONFIG.defaultSocialImage.url,
        width: APP_CONFIG.defaultSocialImage.width,
        height: APP_CONFIG.defaultSocialImage.height,
        alt: APP_CONFIG.defaultSocialImage.alt,
        type: APP_CONFIG.defaultSocialImage.type,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: [APP_CONFIG.defaultSocialImage.url],
  },
};

export const viewport: Viewport = {
  themeColor: APP_CONFIG.themeColor,
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${APP_CONFIG.siteUrl}#organization`,
      name: APP_CONFIG.name,
      alternateName: APP_CONFIG.shortName,
      url: APP_CONFIG.siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${APP_CONFIG.siteUrl}/images/logo-final.jpg`,
        width: 1024,
        height: 1024,
        caption: APP_CONFIG.name,
      },
      image: {
        '@type': 'ImageObject',
        url: `${APP_CONFIG.siteUrl}${APP_CONFIG.defaultSocialImage.url}`,
        width: APP_CONFIG.defaultSocialImage.width,
        height: APP_CONFIG.defaultSocialImage.height,
        caption: APP_CONFIG.name,
      },
      description: APP_CONFIG.homeSeoDescription,
      email: APP_CONFIG.contactEmail,
      founder: {
        '@type': 'Person',
        name: APP_CONFIG.author,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${APP_CONFIG.siteUrl}#website`,
      url: APP_CONFIG.siteUrl,
      name: APP_CONFIG.name,
      alternateName: APP_CONFIG.shortName,
      publisher: {
        '@id': `${APP_CONFIG.siteUrl}#organization`,
      },
      inLanguage: APP_CONFIG.htmlLang,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={APP_CONFIG.htmlLang} data-motion="standard">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.setAttribute('data-motion', 'standard');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NavigationProvenanceProvider>
          <AmbientCanvas />
          <a href="#main-content" className="bs-skip-link">
            {SHELL_CONTENT.skipLink}
          </a>
          <Header />
          <main id="main-content" tabIndex={-1}>
            <PageTransitionContainer>{children}</PageTransitionContainer>
          </main>
          <Footer />
          <ScrollToTop />
        </NavigationProvenanceProvider>
      </body>
    </html>
  );
}
