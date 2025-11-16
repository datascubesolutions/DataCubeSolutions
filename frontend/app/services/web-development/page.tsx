'use client';

import { useRef } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Code, Code2, Box, Terminal, Cloud } from 'lucide-react';
import { useGSAP } from '../../utils/useGSAP';
import { shouldAnimate } from '../../utils/motion';

// GSAP plugin is registered globally in gsapOptimizations

export default function WebDevelopmentServicePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Use optimized GSAP hook
  useGSAP((gsap, ScrollTrigger) => {
    if (!shouldAnimate()) return;

    // Detect mobile for reduced animations
    const isMobile = typeof window !== 'undefined' && (
      window.matchMedia('(max-width: 768px)').matches || 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );

    // Fade in animation
    if (ScrollTrigger) {
      gsap.fromTo(
        '.fade-in',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: isMobile ? 0.6 : 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: pageRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Tech cards entrance animation
      const techCards = pageRef.current?.querySelectorAll('.web-tech-card');
      if (techCards) {
        techCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { scale: 0, opacity: 0, y: 50 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.4 : 0.6,
              delay: isMobile ? 0 : 0.5 + index * 0.2,
              ease: 'back.out(1.7)',
            }
          );
        });
      }

      // Skill bars animation
      const skillBars = pageRef.current?.querySelectorAll('.web-skill-bar');
      if (skillBars) {
        skillBars.forEach((bar, index) => {
          const percent = [95, 90, 88, 92][index] || 85;
          gsap.fromTo(
            bar,
            { width: 0 },
            {
              width: `${percent}%`,
              duration: isMobile ? 1 : 1.5,
              delay: isMobile ? 0 : 1 + index * 0.2,
              ease: 'power2.out',
            }
          );
        });
      }
    }

    // Reduced animations on mobile - only desktop gets floating animations
    if (!isMobile) {
      // Code snippets floating animation - desktop only
      const codeSnippets = pageRef.current?.querySelectorAll('.code-snippet');
      if (codeSnippets) {
        codeSnippets.forEach((snippet, index) => {
          gsap.to(snippet, {
            y: -20 + Math.random() * 40,
            x: -15 + Math.random() * 30,
            rotation: -5 + Math.random() * 10,
            opacity: 0.7,
            duration: 5 + Math.random() * 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });
        });
      }

      // Tech icons floating and rotating - desktop only
      const techIcons = pageRef.current?.querySelectorAll('.tech-icon');
      if (techIcons) {
        techIcons.forEach((icon, index) => {
          gsap.to(icon, {
            y: -25 + Math.random() * 50,
            x: -20 + Math.random() * 40,
            rotation: 360,
            duration: 8 + Math.random() * 4,
            repeat: -1,
            ease: 'none',
            delay: index * 0.3,
          });
        });
      }

      // Code brackets pulse - desktop only
      const codeBrackets = pageRef.current?.querySelectorAll('.code-bracket');
      if (codeBrackets) {
        codeBrackets.forEach((bracket, index) => {
          gsap.to(bracket, {
            scale: 1.2,
            opacity: 0.3,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5,
          });
        });
      }

      // Typing cursor blink - desktop only
      const typingCursor = pageRef.current?.querySelector('.typing-cursor');
      if (typingCursor) {
        gsap.to(typingCursor, {
          opacity: 0.3,
          duration: 0.8,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Main web icon animation - desktop only
      const mainIcon = pageRef.current?.querySelector('.web-icon-main');
      if (mainIcon) {
        gsap.to(mainIcon, {
          scale: 1.1,
          rotation: 5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      <Header />
      <main ref={pageRef} className="pt-20 relative">
        {/* Animated Background - Code & Tech Stack */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
          {/* Terminal Window Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 opacity-20"></div>

          {/* Floating Code Snippets */}
          {[
            { code: 'const app = () => {', top: '10%', left: '5%', delay: '0s' },
            { code: 'import React from "react"', top: '15%', right: '8%', delay: '1s' },
            { code: 'function Component()', top: '25%', left: '10%', delay: '2s' },
            { code: 'export default App', top: '30%', right: '5%', delay: '1.5s' },
            { code: 'useEffect(() => {', top: '40%', left: '3%', delay: '0.5s' },
            { code: 'return <div>', top: '50%', right: '10%', delay: '2.5s' },
            { code: 'className="container"', top: '60%', left: '8%', delay: '1s' },
            { code: 'npm install', top: '70%', right: '3%', delay: '1.8s' },
            { code: 'yarn build', top: '80%', left: '5%', delay: '0.8s' },
            { code: 'git push origin', top: '85%', right: '7%', delay: '2s' },
          ].map((snippet, index) => (
            <div
              key={index}
              className="absolute code-snippet"
              style={{
                top: snippet.top,
                left: snippet.left,
                right: snippet.right,
                animationDelay: snippet.delay,
              }}
            >
              <div className="bg-gray-800/60 backdrop-blur-sm rounded px-3 py-1 border-l-2 border-blue-400 shadow-lg">
                <code className="text-blue-300 font-mono text-xs">{snippet.code}</code>
              </div>
            </div>
          ))}

          {/* Tech Stack Icons Floating */}
          {[Code, Code2, Box, Terminal, Cloud, Code, Code2, Box, Terminal, Cloud].map((IconComponent, index) => (
            <div
              key={index}
              className="absolute tech-icon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500/30 to-pink-500/30 rounded-lg backdrop-blur-sm border border-blue-400/30 flex items-center justify-center shadow-xl">
                <IconComponent className="w-6 h-6 text-blue-400" />
              </div>
            </div>
          ))}

          {/* Code Brackets Animation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="text-9xl font-mono text-blue-400 code-bracket">{'{'}</div>
            <div className="text-9xl font-mono text-pink-400 code-bracket ml-96">{'}'}</div>
          </div>

          {/* Typing Cursor Effect */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 typing-cursor">
            <div className="w-1 h-8 bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50"></div>
          </div>

          {/* Network Connections */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            {[...Array(10)].map((_, i) => {
              const x1 = 50;
              const y1 = 50;
              const angle = (i * 36) * Math.PI / 180;
              const radius = 30 + Math.random() * 20;
              const x2 = 50 + radius * Math.cos(angle);
              const y2 = 50 + radius * Math.sin(angle);
              return (
                <line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="url(#techGradient)"
                  strokeWidth="1"
                  strokeDasharray="3,3"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-20"
                    dur={`${2 + Math.random()}s`}
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
            <defs>
              <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-pink-50/90 to-blue-50/90 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-sm z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center fade-in relative z-10">
              <div className="relative inline-block mb-6">
                <div className="web-icon-main flex items-center justify-center">
                  <Code className="w-28 h-28 text-pink-400" />
                </div>
                <div className="absolute inset-0 bg-pink-400/30 rounded-full blur-2xl animate-pulse"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6 relative z-10">
                Web Development
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10 mb-12">
                Modern, responsive, and scalable web applications built with latest technologies
              </p>
              
              {/* Tech Stack Showcase */}
              <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto relative z-10">
                {[
                  { name: 'React', icon: Code2, color: 'from-blue-500 to-cyan-500', percent: 95 },
                  { name: 'Next.js', icon: Box, color: 'from-gray-500 to-gray-700', percent: 90 },
                  { name: 'Node.js', icon: Terminal, color: 'from-green-500 to-emerald-500', percent: 88 },
                  { name: 'TypeScript', color: 'from-blue-600 to-indigo-600', percent: 92, icon: Code },
                ].map((tech, index) => {
                  const IconComponent = tech.icon;
                  return (
                  <div
                    key={index}
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-pink-200/50 dark:border-pink-500/20 web-tech-card group text-center"
                  >
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-10 h-10 text-pink-400 transform group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="text-lg font-bold text-gray-800 dark:text-white mb-2">{tech.name}</div>
                    <div className={`text-sm font-semibold bg-gradient-to-r ${tech.color} bg-clip-text text-transparent mb-3`}>
                      {tech.percent}% Expertise
                    </div>
                    {/* Skill Bar */}
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${tech.color} web-skill-bar`}
                        style={{ animationDelay: `${index * 0.3}s` }}
                      ></div>
                    </div>
                  </div>
                );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative py-20 z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Overview */}
              <div className="fade-in bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Web Development Services
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  From simple websites to complex web applications, we build digital solutions that 
                  engage users and drive business results. Our team uses cutting-edge technologies 
                  to create fast, scalable, and user-friendly web experiences.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Whether you need a corporate website, e-commerce platform, or custom web application, 
                  we deliver solutions that exceed expectations.
                </p>
              </div>

              {/* Features & Benefits */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="fade-in bg-pink-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Frontend Development</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>React & Next.js frameworks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>TypeScript for type safety</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>Fully responsive design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>Modern UI/UX design</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>Progressive Web Apps (PWA)</span>
                    </li>
                  </ul>
                </div>

                <div className="fade-in bg-blue-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Backend Development</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Node.js & Express.js</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>RESTful & GraphQL APIs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Database integration (MongoDB, PostgreSQL)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Cloud deployment (AWS, Azure, GCP)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Microservices architecture</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technologies */}
              <div className="fade-in bg-gradient-to-br from-gray-50 to-pink-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                  Technologies We Use
                </h3>
                <div className="grid md:grid-cols-4 gap-4">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'].map((tech, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-md"
                    >
                      <p className="font-semibold text-gray-800 dark:text-white">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="fade-in text-center">
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-pink-600 to-blue-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started with Web Development
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="footer-wrapper-home-about">
        <Footer />
      </div>
    </div>
  );
}

