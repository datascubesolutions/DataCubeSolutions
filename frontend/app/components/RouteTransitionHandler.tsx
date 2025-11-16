'use client';

import { useRouteTransition } from '../hooks/useRouteTransition';

/**
 * Client component to handle route transitions
 * This ensures GSAP animations are properly cleaned up on route changes
 */
export default function RouteTransitionHandler() {
  useRouteTransition();
  return null;
}

