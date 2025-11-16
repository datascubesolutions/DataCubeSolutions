'use client';

import { useEffect, useRef } from 'react';
import FastLink from './components/FastLink';
import { useGSAP } from './utils/useGSAP';
import { shouldAnimate } from './utils/motion';
import { Home, ArrowLeft } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  // Use optimized GSAP hook for animations
  useGSAP((gsap) => {
    if (!shouldAnimate() || typeof window === 'undefined') return;

    try {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: -30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
          }
        );
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out',
          }
        );
      }

      // Button animation
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: 0.4,
            ease: 'back.out(1.7)',
          }
        );
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('Animation error:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 flex flex-col">
      <Header />
      
      <div
        ref={containerRef}
        className="flex items-center justify-center px-4 sm:px-6 relative overflow-hidden"
        style={{
          minHeight: '100vh', // Full viewport height on all devices
          paddingTop: '80px',
          paddingBottom: '32px',
        }}
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 text-center max-w-3xl mx-auto w-full">
          {/* 404 Number */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent leading-none">
              404
            </h1>
          </div>

          {/* Title */}
          <h2
            ref={titleRef}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 px-2"
          >
            Page Under Construction
          </h2>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 sm:mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4"
          >
            We're working hard to bring you something amazing. This page will be available soon!
          </p>

          {/* Action Buttons */}
          <div
            ref={buttonRef}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center items-center px-4"
          >
            <FastLink
              href="/"
              prefetch={true}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm sm:text-base font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] touch-manipulation"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Go to Home</span>
            </FastLink>
            
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && window.history.length > 1) {
                  window.history.back();
                } else {
                  window.location.href = '/';
                }
              }}
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-800/80 hover:bg-slate-700/80 text-white text-sm sm:text-base font-semibold rounded-lg border border-slate-700 hover:border-slate-600 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 min-h-[44px] touch-manipulation"
            >
              <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Coming Soon Badge */}
          <div className="mt-8 sm:mt-12 md:mt-16 inline-block px-4">
            <div className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full">
              <p className="text-xs sm:text-sm md:text-base text-blue-300 font-medium">
                🚧 Coming Soon 🚧
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

