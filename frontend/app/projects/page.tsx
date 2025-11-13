'use client';

import { useEffect, useRef, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart3, Users, Globe } from 'lucide-react';
import Projects from '../components/Projects';

// GSAP plugin is registered globally in gsapOptimizations

function ProjectsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified background glow animation (CSS handles most of it)
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

      // Simplified scan lines - use CSS animation instead
      // Removed heavy pixel grid and floating code animations
      
      // Reduced desktop icons animation
      const desktopIcons = pageRef.current?.querySelectorAll('.desktop-icon');
      if (desktopIcons && desktopIcons.length > 0) {
        gsap.to(desktopIcons, {
          y: -3,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          stagger: 0.3,
        });
      }

      // Removed keyboard and cursor animations for performance
      // Removed project card animations (handled by Projects component)
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 dark:from-black dark:via-gray-950 dark:to-black relative overflow-hidden">
      {/* Simplified Laptop Screen Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Laptop Screen Frame */}
        <div className="absolute inset-x-0 top-20 bottom-20 mx-auto max-w-7xl">
          {/* Screen Glow - simplified */}
          <div className="laptop-screen-glow absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-lg blur-3xl"></div>
          
          {/* Simplified Monitor Bezel Lights */}
          <div className="absolute -top-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400/60 to-transparent"></div>

          {/* Simplified Scan Lines - CSS only */}
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.15) 2px, rgba(0, 255, 255, 0.15) 4px)',
            }}
          ></div>
        </div>

        {/* Desktop Icons Style - Project Categories - Simplified */}
        <div className="absolute top-32 left-10 right-10 flex justify-between opacity-40">
          {['ERP', 'CRM', 'WEB'].map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center desktop-icon"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/30 to-blue-400/30 rounded-lg mb-2 flex items-center justify-center border border-cyan-400/40">
                {category === 'ERP' ? (
                  <BarChart3 className="w-6 h-6 text-cyan-400" />
                ) : category === 'CRM' ? (
                  <Users className="w-6 h-6 text-cyan-400" />
                ) : (
                  <Globe className="w-6 h-6 text-cyan-400" />
                )}
              </div>
              <span className="text-cyan-400 text-xs font-mono">{category}</span>
            </div>
          ))}
        </div>

        {/* Simplified Terminal Effect */}
        <div className="absolute top-40 left-10 right-10 opacity-20 z-10">
          <div className="bg-gray-900/40 backdrop-blur-sm rounded-lg p-3 border border-cyan-400/15">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-cyan-400 font-mono text-xs">terminal</span>
            </div>
            <div className="text-cyan-400 font-mono text-xs">
              &gt; Projects loaded successfully ✓
            </div>
          </div>
        </div>

        {/* Screen reflections - simplified */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-500/3 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/3 to-transparent pointer-events-none"></div>
      </div>

      <Header />
      <main className="relative z-10 pt-24">
        <Projects />
      </main>
      <div className="footer-wrapper-home-about">
        <Footer />
      </div>
    </div>
  );
}

export default memo(ProjectsPage);
