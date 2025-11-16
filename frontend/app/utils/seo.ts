/**
 * SEO Utilities - High-End SEO Implementation
 * Provides structured data (JSON-LD) and SEO helpers
 */

export interface OrganizationSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  logo: string;
  description: string;
  address: {
    '@type': string;
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint: {
    '@type': string;
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
  foundingDate: string;
  numberOfEmployees?: {
    '@type': string;
    value: string;
  };
}

export interface ServiceSchema {
  '@context': string;
  '@type': string;
  serviceType: string;
  provider: {
    '@type': string;
    name: string;
  };
  areaServed: string;
  description: string;
}

export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

export interface WebSiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  potentialAction: {
    '@type': string;
    target: {
      '@type': string;
      urlTemplate: string;
    };
    'query-input': string;
  };
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://data-scube-solutions.vercel.app';

/**
 * Generate Organization Schema (JSON-LD)
 */
export function getOrganizationSchema(): OrganizationSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Data Scube Solutions',
    url: baseUrl,
    logo: `${baseUrl}/assets/images/logo_datascube.png`,
    description: 'Complete IT solutions including ERP, CRM, web development, and comprehensive startup support including company registration, certifications, funding assistance, and business consulting.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kaveri Sangam, Shilaj Cross Road',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380059',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-9510157477',
      contactType: 'Customer Service',
      email: 'datascubesolutions@gmail.com',
    },
    sameAs: [
      'https://www.facebook.com/datascubesolutions',
      'https://www.twitter.com/datascube',
      'https://www.linkedin.com/company/datascube',
      'https://www.instagram.com/datascube',
    ],
    foundingDate: '2014',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '15+',
    },
  };
}

/**
 * Generate Service Schema (JSON-LD)
 */
export function getServiceSchema(serviceName: string, description: string): ServiceSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    provider: {
      '@type': 'Organization',
      name: 'Data Scube Solutions',
    },
    areaServed: 'Worldwide',
    description: description,
  };
}

/**
 * Generate Breadcrumb Schema (JSON-LD)
 */
export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>): BreadcrumbSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

/**
 * Generate WebSite Schema with SearchAction (JSON-LD)
 */
export function getWebSiteSchema(): WebSiteSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Data Scube Solutions',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate FAQ Schema (JSON-LD)
 */
export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Article Schema (JSON-LD)
 */
export function getArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: `${baseUrl}${image}`,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Organization',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Data Scube Solutions',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/assets/images/logo_datascube.png`,
      },
    },
  };
}

/**
 * Generate LocalBusiness Schema (JSON-LD)
 */
export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Data Scube Solutions',
    image: `${baseUrl}/assets/images/logo_datascube.png`,
    '@id': baseUrl,
    url: baseUrl,
    telephone: '+91-9510157477',
    email: 'datascubesolutions@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Kaveri Sangam, Shilaj Cross Road',
      addressLocality: 'Ahmedabad',
      addressRegion: 'Gujarat',
      postalCode: '380059',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '23.0225',
      longitude: '72.5714',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    servesCuisine: 'IT Solutions, Startup Support, Business Consulting',
  };
}

/**
 * Generate SoftwareApplication Schema (JSON-LD)
 */
export function getSoftwareApplicationSchema({
  name,
  description,
  applicationCategory,
  operatingSystem,
  offers,
}: {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem: string;
  offers: {
    price: string;
    priceCurrency: string;
  };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory,
    operatingSystem,
    offers: {
      '@type': 'Offer',
      price: offers.price,
      priceCurrency: offers.priceCurrency,
    },
    provider: {
      '@type': 'Organization',
      name: 'Data Scube Solutions',
    },
  };
}

/**
 * Render JSON-LD script tag
 */
export function renderJsonLd(schema: object): string {
  return `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`;
}

