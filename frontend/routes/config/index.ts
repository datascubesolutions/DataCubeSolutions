// Export all route configs will go here
import { RouteConfig } from '../../types/route';
import { homeRoute } from './home';
import { aboutRoute } from './about';
import { 
  servicesRoute, 
  erpServiceRoute, 
  crmServiceRoute, 
  webDevServiceRoute 
} from './services';
import { projectsRoute } from './projects';
import { contactRoute } from './contact';

// Combine all routes
export const AllRoutes: RouteConfig[] = [
  homeRoute,
  aboutRoute,
  servicesRoute,
  erpServiceRoute,
  crmServiceRoute,
  webDevServiceRoute,
  projectsRoute,
  contactRoute,
];

// Export individual routes for easy access
export { 
  homeRoute, 
  aboutRoute, 
  servicesRoute,
  erpServiceRoute,
  crmServiceRoute,
  webDevServiceRoute,
  projectsRoute, 
  contactRoute 
};
