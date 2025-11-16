'use client';

import { useEffect, useRef } from 'react';
import { startTransition } from 'react';

/**
 * Hook to lazily load GSAP and run animations in a non-blocking way
 * This prevents GSAP from blocking route navigation
 */
export function useGSAP(callback: (gsap: any, ScrollTrigger: any) => void, deps: any[] = []) {
  const ctxRef = useRef<any>(null);
  const isInitializedRef = useRef(false);

  useEffect(() => {
    if (isInitializedRef.current) return;
    
    // Use startTransition to mark this as non-urgent
    startTransition(() => {
      // Defer GSAP loading until after initial render
      const loadGSAP = async () => {
        try {
          const [{ gsap }, { ScrollTrigger }] = await Promise.all([
            import('gsap'),
            import('gsap/ScrollTrigger')
          ]);

          // Check if already registered (prevent duplicate registration)
          if (gsap && typeof gsap.registerPlugin === 'function') {
            try {
              gsap.registerPlugin(ScrollTrigger);
            } catch (e) {
              // Already registered, ignore
            }
          }

          // Run callback in a non-blocking way
          requestIdleCallback(() => {
            ctxRef.current = gsap.context(() => {
              callback(gsap, ScrollTrigger);
            });
            isInitializedRef.current = true;
          }, { timeout: 100 });
        } catch (error) {
          console.warn('GSAP loading error:', error);
        }
      };

      // Use requestIdleCallback for better performance, fallback to setTimeout
      if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
        requestIdleCallback(loadGSAP, { timeout: 200 });
      } else {
        setTimeout(loadGSAP, 100);
      }
    });

    return () => {
      if (ctxRef.current) {
        ctxRef.current.revert();
        ctxRef.current = null;
      }
      isInitializedRef.current = false;
    };
  }, deps);
}

