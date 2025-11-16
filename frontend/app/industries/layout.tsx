import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Industries & Startups - Sector Solutions',
  description: 'Industry-specific IT solutions and comprehensive startup support. We serve various industries including manufacturing, retail, healthcare, finance, and provide complete startup assistance from registration to funding.',
  keywords: ['Industries', 'Startups', 'Sector Solutions', 'Manufacturing', 'Retail', 'Healthcare', 'Finance', 'Startup Support', 'Company Registration'],
  openGraph: {
    title: 'Industries & Startups - Data Scube Solutions',
    description: 'Industry-specific IT solutions and comprehensive startup support for various sectors.',
    type: 'website',
    images: [
      {
        url: '/assets/images/logo_datascube.png',
        width: 1200,
        height: 630,
        alt: 'Data Scube Solutions - Industries & Startups',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Industries & Startups - Data Scube Solutions',
    description: 'Industry-specific IT solutions and comprehensive startup support for various sectors.',
    images: ['/assets/images/logo_datascube.png'],
  },
  alternates: {
    canonical: '/industries',
  },
};

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

