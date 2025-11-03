import { ComponentType } from 'react';

export interface RouteConfig {
  path: string;
  key: string;
  element: ComponentType<any>;
}


