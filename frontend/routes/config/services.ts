import { RouteConfig } from '../../types/route';

export const servicesRoute: RouteConfig = {
  path: '/services',
  key: 'services',
  element: () => null, // Since we're using Next.js app router, this is for reference
};

export const erpServiceRoute: RouteConfig = {
  path: '/services/erp',
  key: 'erp-service',
  element: () => null,
};

export const crmServiceRoute: RouteConfig = {
  path: '/services/crm',
  key: 'crm-service',
  element: () => null,
};

export const webDevServiceRoute: RouteConfig = {
  path: '/services/web-development',
  key: 'web-dev-service',
  element: () => null,
};

