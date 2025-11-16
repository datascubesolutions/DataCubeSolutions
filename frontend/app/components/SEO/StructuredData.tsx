'use client';

import { useEffect } from 'react';
import {
  getOrganizationSchema,
  getWebSiteSchema,
  getLocalBusinessSchema,
  type OrganizationSchema,
  type WebSiteSchema,
} from '../../utils/seo';

interface StructuredDataProps {
  type?: 'organization' | 'website' | 'localBusiness' | 'all';
}

export default function StructuredData({ type = 'all' }: StructuredDataProps) {
  useEffect(() => {
    const scripts: Array<{ id: string; schema: object }> = [];

    if (type === 'all' || type === 'organization') {
      scripts.push({
        id: 'organization-schema',
        schema: getOrganizationSchema(),
      });
    }

    if (type === 'all' || type === 'website') {
      scripts.push({
        id: 'website-schema',
        schema: getWebSiteSchema(),
      });
    }

    if (type === 'all' || type === 'localBusiness') {
      scripts.push({
        id: 'local-business-schema',
        schema: getLocalBusinessSchema(),
      });
    }

    // Inject JSON-LD scripts
    scripts.forEach(({ id, schema }) => {
      // Remove existing script if present
      const existing = document.getElementById(id);
      if (existing) {
        existing.remove();
      }

      // Create new script
      const script = document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema, null, 2);
      document.head.appendChild(script);
    });

    // Cleanup function
    return () => {
      scripts.forEach(({ id }) => {
        const script = document.getElementById(id);
        if (script) {
          script.remove();
        }
      });
    };
  }, [type]);

  return null; // This component doesn't render anything
}

