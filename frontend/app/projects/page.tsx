'use client';

import { useRef, lazy, Suspense } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart3, Users, Globe } from 'lucide-react';
import { useGSAP } from '../utils/useGSAP';
import { shouldAnimate } from '../utils/motion';
import SkeletonGrid from '../components/ui/SkeletonGrid';
import Skeleton from '../components/ui/Skeleton';

// Lazy load Projects component for better performance
const Projects = lazy(() => import('../components/Projects'));

export default function ProjectsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Use optimized GSAP hook that doesn't block rendering
  useGSAP((gsap, ScrollTrigger) => {
    if (!shouldAnimate()) return;

    // Detect mobile for reduced animations
    const isMobile = typeof window !== 'undefined' && (
      window.matchMedia('(max-width: 768px)').matches || 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );

    // Simplified background glow - only on desktop
    if (!isMobile) {
      const screenGlow = pageRef.current?.querySelector('.laptop-screen-glow');
      if (screenGlow) {
        gsap.to(screenGlow, {
          opacity: 0.4,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Monitor bezel lighting - desktop only
      const monitorBezel = pageRef.current?.querySelectorAll('.monitor-bezel-light');
      if (monitorBezel) {
        monitorBezel.forEach((bez, index) => {
          gsap.to(bez, {
            opacity: 0.4,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5,
          });
        });
      }

      // Desktop icons animation - desktop only
      const desktopIcons = pageRef.current?.querySelectorAll('.desktop-icon');
      if (desktopIcons) {
        desktopIcons.forEach((icon, index) => {
          gsap.to(icon, {
            y: -5,
            scale: 1.05,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });
        });
      }
    }

    // Project cards entrance animation - optimized
    const projectCards = pageRef.current?.querySelectorAll('.project-card');
    if (projectCards && ScrollTrigger) {
      projectCards.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            scale: 0.95,
            y: 20,
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: isMobile ? 0.4 : 0.6,
            delay: isMobile ? 0 : index * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 relative overflow-hidden">
      {/* Laptop Screen Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        {/* Laptop Screen Frame */}
        <div className="absolute inset-x-0 top-20 bottom-20 mx-auto max-w-7xl">
          {/* Screen Glow */}
          <div className="laptop-screen-glow absolute inset-0 bg-gradient-to-br from-cyan-500/25 via-blue-500/25 to-purple-500/25 rounded-lg blur-3xl"></div>
          
          {/* Monitor Bezel Lights */}
          <div className="absolute -top-2 left-0 right-0 h-1 monitor-bezel-light bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent"></div>
          <div className="absolute -bottom-2 left-0 right-0 h-1 monitor-bezel-light bg-gradient-to-r from-transparent via-blue-400/80 to-transparent"></div>
          <div className="absolute top-0 -left-2 bottom-0 w-1 monitor-bezel-light bg-gradient-to-b from-transparent via-purple-400/80 to-transparent"></div>
          <div className="absolute top-0 -right-2 bottom-0 w-1 monitor-bezel-light bg-gradient-to-b from-transparent via-pink-400/80 to-transparent"></div>

          {/* Screen Scan Lines - CSS only, no GSAP */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.15) 2px, rgba(0, 255, 255, 0.15) 4px)',
            }}
            aria-hidden="true"
          ></div>
        </div>

        {/* Desktop Icons Style - Project Categories - Static for performance */}
        <div className="absolute top-32 left-10 right-10 flex justify-between opacity-40" aria-hidden="true">
          {['ERP', 'CRM', 'WEB'].map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center desktop-icon"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-lg mb-2 flex items-center justify-center border border-cyan-400/40">
                {category === 'ERP' ? (
                  <BarChart3 className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                ) : category === 'CRM' ? (
                  <Users className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                ) : (
                  <Globe className="w-6 h-6 text-cyan-400" aria-hidden="true" />
                )}
              </div>
              <span className="text-cyan-400 text-xs font-mono">{category}</span>
            </div>
          ))}
        </div>

        {/* Terminal Lines Effect - Decorative Only */}
        <div className="absolute top-40 left-10 right-10 opacity-30 z-10" aria-hidden="true" role="presentation">
          <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-cyan-400 font-mono text-xs">terminal</span>
            </div>
            {[
              '> Portfolio showcase',
              '> Featured projects',
              '> Client success stories',
              '> Ready to explore ✓',
            ].map((line, index) => (
              <div
                key={index}
                className="text-cyan-400 font-mono text-xs mb-1 terminal-line"
                style={{
                  animationDelay: `${index * 0.5}s`,
                }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>

        {/* Window Frames Effect - Around Cards Area */}
        <div className="absolute inset-x-0 top-1/3 bottom-1/4 mx-auto max-w-7xl opacity-10" aria-hidden="true">
          <div className="absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-xl"></div>
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
        </div>

        {/* Screen reflections */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" aria-hidden="true"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none" aria-hidden="true"></div>
      </div>

      <Header />
      <main className="relative z-10 pt-24" id="main-content">
        <Suspense fallback={
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">
            {/* Header Skeleton */}
            <div className="text-center mb-12 space-y-4">
              <Skeleton variant="rectangular" width="400px" height="48px" className="mx-auto rounded-xl" />
              <Skeleton variant="text" lines={2} className="max-w-2xl mx-auto" />
            </div>
            
            {/* Projects Grid Skeleton */}
            <SkeletonGrid variant="project" columns={3} rows={2} />
          </div>
        }>
          <Projects />
        </Suspense>
      </main>
      <div className="footer-wrapper-home-about">
        <Footer />
      </div>
    </div>
  );
}
