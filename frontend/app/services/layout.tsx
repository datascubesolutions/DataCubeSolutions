import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - IT Solutions & Startup Support',
  description: 'Comprehensive IT solutions including ERP systems, CRM platforms, web development, mobile apps, digital marketing, and complete startup support including company registration, certifications, and funding assistance.',
  keywords: ['Services', 'IT Solutions', 'ERP', 'CRM', 'Web Development', 'Mobile Apps', 'Digital Marketing', 'Startup Support', 'Company Registration'],
  openGraph: {
    title: 'Our Services - Data Scube Solutions',
    description: 'Comprehensive IT solutions and startup support services. ERP, CRM, web development, and more.',
    type: 'website',
    images: [
      {
        url: '/assets/images/logo_datascube.png',
        width: 1200,
        height: 630,
        alt: 'Data Scube Solutions - Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Services - Data Scube Solutions',
    description: 'Comprehensive IT solutions and startup support services. ERP, CRM, web development, and more.',
    images: ['/assets/images/logo_datascube.png'],
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

