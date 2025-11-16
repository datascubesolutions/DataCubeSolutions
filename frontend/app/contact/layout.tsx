import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch',
  description: 'Contact Data Scube Solutions for IT solutions, ERP, CRM, web development, and startup support services. We respond within 24 hours. Call +91-9510157477 or email datascubesolutions@gmail.com',
  keywords: ['Contact', 'Get in Touch', 'Support', 'Customer Service', 'IT Solutions', 'Startup Support', 'Business Consulting'],
  openGraph: {
    title: 'Contact Us - Data Scube Solutions',
    description: 'Contact Data Scube Solutions for IT solutions and startup support. We respond within 24 hours.',
    type: 'website',
    images: [
      {
        url: '/assets/images/logo_datascube.png',
        width: 1200,
        height: 630,
        alt: 'Data Scube Solutions - Contact Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Data Scube Solutions',
    description: 'Contact Data Scube Solutions for IT solutions and startup support. We respond within 24 hours.',
    images: ['/assets/images/logo_datascube.png'],
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

