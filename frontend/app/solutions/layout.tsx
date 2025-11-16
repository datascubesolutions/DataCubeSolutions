import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Solutions - Smart Business Solutions',
  description: 'Explore our smart business solutions for every challenge. From ERP systems and CRM platforms to custom software development and digital transformation solutions.',
  keywords: ['Solutions', 'Business Solutions', 'ERP Solutions', 'CRM Solutions', 'Custom Software', 'Digital Transformation'],
  openGraph: {
    title: 'Solutions - Data Scube Solutions',
    description: 'Explore our smart business solutions for every challenge. ERP, CRM, and custom software development.',
    type: 'website',
    images: [
      {
        url: '/assets/images/logo_datascube.png',
        width: 1200,
        height: 630,
        alt: 'Data Scube Solutions - Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions - Data Scube Solutions',
    description: 'Explore our smart business solutions for every challenge. ERP, CRM, and custom software development.',
    images: ['/assets/images/logo_datascube.png'],
  },
  alternates: {
    canonical: '/solutions',
  },
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

