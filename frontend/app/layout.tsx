import type { Metadata, Viewport } from 'next'
import '../styles/globals.css'
import ReduxProvider from './providers/ReduxProvider'
import ChatWidget from './components/ChatWidget'
import RouteTransitionHandler from './components/RouteTransitionHandler'
import ErrorBoundary from './components/ErrorBoundary'
import SkipLink from './components/ui/SkipLink'
import StructuredData from './components/SEO/StructuredData'

export const metadata: Metadata = {
  title: {
    default: 'Data Scube Solutions - Complete IT Solutions & Startup Support',
    template: '%s | Data Scube Solutions',
  },
  description: 'Complete IT solutions including ERP, CRM, web development, and comprehensive startup support including company registration, certifications, funding assistance, and business consulting. 10+ years experience, 500+ clients served.',
  keywords: ['ERP Solutions', 'CRM Systems', 'Web Development', 'Startup Support', 'Company Registration', 'IT Solutions', 'Business Consulting', 'Data Scube Solutions', 'Ahmedabad IT Company', 'Gujarat Startup Support', 'ERP Software India', 'CRM Software India', 'Web Development Company', 'Digital Marketing Services'],
  authors: [{ name: 'Data Scube Solutions' }],
  creator: 'Data Scube Solutions',
  publisher: 'Data Scube Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://data-scube-solutions.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://data-scube-solutions.vercel.app',
    siteName: 'Data Scube Solutions',
    title: 'Data Scube Solutions - Complete IT Solutions & Startup Support',
    description: 'Complete IT solutions including ERP, CRM, web development, and comprehensive startup support including company registration, certifications, funding assistance, and business consulting. 10+ years experience, 500+ clients served.',
    images: [
      {
        url: '/assets/images/logo_datascube.png',
        width: 1200,
        height: 630,
        alt: 'Data Scube Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Data Scube Solutions - Complete IT Solutions & Startup Support',
    description: 'Complete IT solutions including ERP, CRM, web development, and comprehensive startup support. 10+ years experience, 500+ clients served.',
    images: ['/assets/images/logo_datascube.png'],
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
    icon: '/assets/images/logo_datascube.png',
    apple: '/assets/images/logo_datascube.png',
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
  category: 'Technology',
  classification: 'Business Services',
  other: {
    'geo.region': 'IN-GJ',
    'geo.placename': 'Ahmedabad',
    'geo.position': '23.0225;72.5714',
    'ICBM': '23.0225, 72.5714',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0f172a' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className="dark">
        <StructuredData type="all" />
        <SkipLink />
        <ErrorBoundary>
          <ReduxProvider>
            <RouteTransitionHandler />
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
            <ChatWidget />
          </ReduxProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
