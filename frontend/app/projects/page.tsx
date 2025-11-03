'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { BarChart3, Users, Globe } from 'lucide-react';
import Projects from '../components/Projects';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animations
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

      // Laptop screen glow animation
      const screenGlow = pageRef.current?.querySelector('.laptop-screen-glow');
      if (screenGlow) {
        gsap.to(screenGlow, {
          opacity: 0.6,
          scale: 1.1,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Screen scan lines effect
      const scanLines = pageRef.current?.querySelector('.scan-lines');
      if (scanLines) {
        gsap.to(scanLines, {
          backgroundPosition: '0 100%',
          duration: 3,
          repeat: -1,
          ease: 'none',
        });
      }

      // Pixel grid animation
      const pixelGrid = pageRef.current?.querySelector('.pixel-grid');
      if (pixelGrid) {
        gsap.to(pixelGrid, {
          opacity: 0.3,
          duration: 2,
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

          // Floating animation
          gsap.to(card, {
            y: -5,
            duration: 2 + index * 0.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });

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

          {/* Screen Scan Lines */}
          <div 
            className="scan-lines absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.2) 2px, rgba(0, 255, 255, 0.2) 4px)',
              backgroundSize: '100% 100%',
            }}
          ></div>

          {/* Pixel Grid Effect */}
          <div 
            className="pixel-grid absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 255, 255, 0.2) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 255, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          ></div>
        </div>

        {/* Floating Code Snippets */}
        <div className="absolute inset-0 overflow-hidden">
          {[
            { text: 'const projects = [...]', top: '15%', left: '5%', delay: '0s' },
            { text: 'function loadProject()', top: '25%', right: '8%', delay: '1s' },
            { text: 'export default Projects', top: '60%', left: '3%', delay: '2s' },
            { text: 'import { Project }', top: '70%', right: '5%', delay: '1.5s' },
            { text: 'return <ProjectCard />', top: '80%', left: '10%', delay: '0.5s' },
          ].map((snippet, index) => (
            <div
              key={index}
              className="absolute text-cyan-400/60 font-mono text-xs floating-code"
              style={{
                top: snippet.top,
                left: snippet.left,
                right: snippet.right,
                animationDelay: snippet.delay,
                animation: 'floatCode 15s ease-in-out infinite',
              }}
            >
              {snippet.text}
            </div>
          ))}
        </div>

        {/* Desktop Icons Style - Project Categories */}
        <div className="absolute top-32 left-10 right-10 flex justify-between opacity-50">
          {['ERP', 'CRM', 'WEB'].map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center desktop-icon"
              style={{
                animationDelay: `${index * 0.3}s`,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400/40 to-blue-400/40 rounded-lg mb-2 flex items-center justify-center border border-cyan-400/60">
                {category === 'ERP' ? (
                  <BarChart3 className="w-8 h-8 text-cyan-400" />
                ) : category === 'CRM' ? (
                  <Users className="w-8 h-8 text-cyan-400" />
                ) : (
                  <Globe className="w-8 h-8 text-cyan-400" />
                )}
              </div>
              <span className="text-cyan-400 text-xs font-mono">{category}</span>
            </div>
          ))}
        </div>

        {/* Keyboard Visualization */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex gap-2">
            {['E', 'R', 'P', 'C', 'R', 'M', 'W', 'E', 'B'].map((key, index) => (
              <div
                key={index}
                className="keyboard-key w-10 h-10 bg-gray-800/50 border border-cyan-400/30 rounded flex items-center justify-center text-cyan-400 text-sm font-bold"
              >
                {key}
              </div>
            ))}
          </div>
        </div>

        {/* Screen Cursor */}
        <div className="screen-cursor absolute top-40 left-1/4 w-3 h-5 bg-cyan-400 border border-cyan-300">
          <div className="absolute top-0 left-0 w-full h-3 bg-cyan-400/50 animate-pulse"></div>
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

        {/* Matrix-style falling code */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-cyan-400 font-mono text-xs"
              style={{
                left: `${5 + i * 5}%`,
                animation: `matrix-fall ${5 + Math.random() * 5}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              {Math.random().toString(36).substring(7)}
            </div>
          ))}
        </div>

        {/* Screen reflections */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-500/5 to-transparent pointer-events-none"></div>
      </div>

      <Header />
      <main className="relative z-10 pt-24">
        <Projects />
      </main>
      <Footer />

      <style jsx>{`
        @keyframes matrix-fall {
          0% {
            top: -10%;
            opacity: 1;
          }
          100% {
            top: 110%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
