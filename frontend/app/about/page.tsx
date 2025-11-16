'use client';

import { useRef } from 'react';
import { lazy, Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useGSAP } from '../utils/useGSAP';
import SkeletonGrid from '../components/ui/SkeletonGrid';
import Skeleton from '../components/ui/Skeleton';

// Lazy load heavy AboutUs component to prevent blocking navigation
const AboutUs = lazy(() => import('../components/AboutUs'));

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Use optimized GSAP hook that doesn't block rendering
  useGSAP((gsap, ScrollTrigger) => {
    gsap.fromTo(
      '.fade-in',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: pageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />
      <main
        ref={pageRef}
        className="pt-20 sm:pt-24 md:pt-28 pb-12"
      >
        <Suspense fallback={
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            {/* Header Skeleton */}
            <div className="text-center mb-12 space-y-4">
              <Skeleton variant="rectangular" width="300px" height="48px" className="mx-auto rounded-xl" />
              <Skeleton variant="text" lines={2} className="max-w-2xl mx-auto" />
            </div>
            
            {/* Content Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 space-y-4">
                  <Skeleton variant="circular" width="48px" height="48px" />
                  <Skeleton variant="rectangular" width="80%" height="24px" className="rounded-lg" />
                  <Skeleton variant="text" lines={3} className="h-4" />
                </div>
              ))}
            </div>
            
            {/* Section Skeleton */}
            <div className="space-y-8 mb-12">
              <Skeleton variant="rectangular" width="100%" height="200px" className="rounded-xl" />
              <Skeleton variant="text" lines={4} className="h-4" />
            </div>
            
            {/* Team Grid Skeleton */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 space-y-4 text-center">
                  <Skeleton variant="circular" width="112px" height="112px" className="mx-auto" />
                  <Skeleton variant="rectangular" width="60%" height="20px" className="mx-auto rounded-lg" />
                  <Skeleton variant="rectangular" width="40%" height="16px" className="mx-auto rounded" />
                </div>
              ))}
            </div>
          </div>
        }>
          <AboutUs />
        </Suspense>
      </main>
      <div className="footer-wrapper-home-about">
        <Footer />
      </div>
    </div>
  );
}
