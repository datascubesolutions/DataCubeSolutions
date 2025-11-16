import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Our Story & Team',
  description: 'Learn about Data Scube Solutions - a comprehensive business solutions provider with 10+ years of experience helping 500+ companies with IT solutions and startup support. Meet our expert team and discover our mission.',
  keywords: ['About Us', 'Company History', 'Team', 'Mission', 'Vision', 'Data Scube', 'IT Solutions', 'Startup Support'],
  openGraph: {
    title: 'About Us - Data Scube Solutions',
    description: 'Learn about Data Scube Solutions - a comprehensive business solutions provider with 10+ years of experience.',
    type: 'website',
    images: [
      {
        url: '/assets/images/logo_datascube.png',
        width: 1200,
        height: 630,
        alt: 'Data Scube Solutions - About Us',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Data Scube Solutions',
    description: 'Learn about Data Scube Solutions - a comprehensive business solutions provider with 10+ years of experience.',
    images: ['/assets/images/logo_datascube.png'],
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

