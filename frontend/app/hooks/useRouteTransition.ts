'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cleanupScrollTriggers } from '../utils/gsapOptimizations';

/**
 * Hook to handle route transitions and cleanup animations
 * This ensures GSAP animations are properly cleaned up on route changes
 * to prevent memory leaks and improve performance
 */
export function useRouteTransition() {
  const pathname = usePathname();

  useEffect(() => {
    // Cleanup ScrollTriggers on route change
    // This prevents animations from running on unmounted components
    cleanupScrollTriggers();

    // Small delay to allow cleanup to complete before new animations start
    const timer = setTimeout(() => {
      // Refresh ScrollTrigger after route change
      if (typeof window !== 'undefined') {
        try {
          const { ScrollTrigger } = require('gsap/ScrollTrigger');
          ScrollTrigger.refresh();
        } catch (error) {
          // Silently fail if ScrollTrigger is not available
        }
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      // Final cleanup on unmount
      cleanupScrollTriggers();
    };
  }, [pathname]);
}

