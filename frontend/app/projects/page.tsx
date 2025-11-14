'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart3, Users, Globe } from 'lucide-react';
import Projects from '../components/Projects';

// GSAP plugin is registered globally in gsapOptimizations

export default function ProjectsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simplified background glow - CSS handles most animations now
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

      // Floating code animation
      const floatingCodes = pageRef.current?.querySelectorAll('.floating-code');
      if (floatingCodes) {
        floatingCodes.forEach((code, index) => {
          gsap.to(code, {
            y: -20,
            x: 10,
            opacity: 0.5,
            duration: 4 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5,
          });
        });
      }

      // Desktop icons animation
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

      // Keyboard lighting effect
      const keyboardKeys = pageRef.current?.querySelectorAll('.keyboard-key');
      if (keyboardKeys) {
        keyboardKeys.forEach((key, index) => {
          gsap.to(key, {
            opacity: 0.8,
            scale: 1.1,
            duration: 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        });
      }

      // Project cards floating with laptop theme
      const projectCards = pageRef.current?.querySelectorAll('.project-card');
      if (projectCards) {
        projectCards.forEach((card, index) => {
          // Entrance animation - like loading on screen
          gsap.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.8,
              filter: 'blur(10px)',
            },
            {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              duration: 0.8,
              delay: index * 0.2,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Add window frame effect for desktop application feel
          const windowFrame = document.createElement('div');
          windowFrame.className = 'absolute inset-0 border-2 border-cyan-400/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none';
          card.appendChild(windowFrame);
        });
      }

      // Monitor bezel lighting
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

      // Screen cursor blinking
      const cursor = pageRef.current?.querySelector('.screen-cursor');
      if (cursor) {
        gsap.to(cursor, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: 'none',
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950 dark:from-black dark:via-gray-950 dark:to-black relative overflow-hidden">
      {/* Laptop Screen Background Effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
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
          ></div>
        </div>

        {/* Floating Code Snippets - Removed for performance */}

        {/* Desktop Icons Style - Project Categories - Static for performance */}
        <div className="absolute top-32 left-10 right-10 flex justify-between opacity-40">
          {['ERP', 'CRM', 'WEB'].map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center"
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

        {/* Terminal Lines Effect */}
        <div className="absolute top-40 left-10 right-10 opacity-30 z-10">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-400/20">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-cyan-400 font-mono text-xs">terminal</span>
            </div>
            {[
              '> Loading projects...',
              '> Connecting to database...',
              '> Fetching project data...',
              '> Projects loaded successfully ✓',
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
        <div className="absolute inset-x-0 top-1/3 bottom-1/4 mx-auto max-w-7xl opacity-10">
          <div className="absolute inset-0 border-2 border-dashed border-cyan-400/30 rounded-xl"></div>
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>
        </div>

        {/* Matrix-style falling code - Removed for performance */}

        {/* Screen reflections */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none"></div>
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
