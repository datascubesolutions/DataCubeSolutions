import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects - Portfolio Showcase',
  description: 'Explore our portfolio of successful projects including AI-powered applications, e-commerce platforms, web development solutions, and more. See how we\'ve helped businesses transform digitally.',
  keywords: ['Portfolio', 'Projects', 'Web Development', 'E-Commerce', 'AI Applications', 'Case Studies', 'Client Work'],
  openGraph: {
    title: 'Our Projects - Data Scube Solutions',
    description: 'Explore our portfolio of successful projects and client success stories.',
    type: 'website',
    images: [
      {
        url: '/assets/images/logo_datascube.png',
        width: 1200,
        height: 630,
        alt: 'Data Scube Solutions - Projects Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Projects - Data Scube Solutions',
    description: 'Explore our portfolio of successful projects and client success stories.',
    images: ['/assets/images/logo_datascube.png'],
  },
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

