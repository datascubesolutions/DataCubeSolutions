'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: '🚀',
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology that drives your business forward',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '💼',
    title: 'Enterprise Ready',
    description: 'Scalable solutions for businesses of all sizes',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'Optimized performance for maximum efficiency',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: '🔒',
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime',
    color: 'from-green-500 to-emerald-500',
  },
];

const stats = [
  { number: '500+', label: 'Happy Clients', icon: '👥' },
  { number: '1000+', label: 'Projects Completed', icon: '🎯' },
  { number: '50+', label: 'Expert Team', icon: '👨‍💼' },
  { number: '10+', label: 'Years Experience', icon: '⭐' },
];

const services = [
  {
    title: 'ERP Solutions',
    description: 'Streamline your business operations with comprehensive ERP systems',
    icon: '📊',
    link: '/services/erp',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'CRM Systems',
    description: 'Enhance customer relationships and boost sales with powerful CRM',
    icon: '👥',
    link: '/services/crm',
    gradient: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Web Development',
    description: 'Modern web applications built with latest technologies',
    icon: '🌐',
    link: '/services/web-development',
    gradient: 'from-orange-600 to-red-600',
  },
];

export default function Home() {
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Mesh gradient animation
      const meshGradient = pageRef.current?.querySelector('.mesh-gradient-home');
      if (meshGradient) {
        gsap.to(meshGradient, {
          backgroundPosition: '200% 200%',
          duration: 20,
          repeat: -1,
          ease: 'none',
        });
      }

      // Floating geometric shapes animation
      const geoShapes = pageRef.current?.querySelectorAll('.floating-geo-shape');
      if (geoShapes) {
        geoShapes.forEach((shape, index) => {
          gsap.to(shape, {
            y: -30 + Math.random() * 60,
            x: -20 + Math.random() * 40,
            rotation: 360,
            scale: 1.1 + Math.random() * 0.2,
            duration: 8 + Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5,
          });
        });
      }

      // Data particles floating animation
      const dataParticles = pageRef.current?.querySelectorAll('.data-particle');
      if (dataParticles) {
        dataParticles.forEach((particle, index) => {
          gsap.to(particle, {
            y: -50 + Math.random() * 100,
            x: -30 + Math.random() * 60,
            rotation: 360,
            opacity: 0.3 + Math.random() * 0.4,
            duration: 5 + Math.random() * 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        });
      }

      // Orbital rings rotation
      const orbitalRings = pageRef.current?.querySelectorAll('.orbital-ring');
      if (orbitalRings) {
        orbitalRings.forEach((ring, index) => {
          gsap.to(ring, {
            rotation: 360,
            duration: 20 + index * 10,
            repeat: -1,
            ease: 'none',
            transformOrigin: 'center center',
          });
        });
      }

      // Data nodes pulse animation
      const dataNodes = pageRef.current?.querySelectorAll('.data-node-pulse');
      if (dataNodes) {
        dataNodes.forEach((node, index) => {
          gsap.to(node, {
            scale: 1.5,
            opacity: 0.7,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        });
      }

      // Hero section animations - ensure text is always visible
      if (titleRef.current) {
        // Set initial state to visible
        gsap.set(titleRef.current, { opacity: 1, visibility: 'visible' });
        
        gsap.fromTo(
          titleRef.current,
          { opacity: 0.8, y: 50, scale: 0.95, rotationX: -10 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotationX: 0,
            duration: 1.2,
            ease: 'power3.out',
          }
        );
      }

      if (subtitleRef.current) {
        // Set initial state to visible
        gsap.set(subtitleRef.current, { opacity: 1, visibility: 'visible' });
        
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0.8, y: 30, blur: 5 },
          {
            opacity: 1,
            y: 0,
            blur: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power2.out',
          }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0, rotation: -180 },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            delay: 0.6,
            ease: 'back.out(2)',
          }
        );
      }

      // Features animation
      gsap.fromTo(
        '.feature-card',
        {
          opacity: 0,
          y: 80,
          rotationX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation
      gsap.fromTo(
        '.stat-card',
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Services animation
      gsap.fromTo(
        '.service-card',
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Floating animations for background elements
      gsap.to('.floating-circle', {
        y: 30,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      });

      // Parallax effect for hero on scroll (only when scrolling away from hero)
      if (heroRef.current && titleRef.current && subtitleRef.current) {
        // Set initial visibility
        gsap.set(titleRef.current, { opacity: 1 });
        gsap.set(subtitleRef.current, { opacity: 1 });
        
        gsap.to(titleRef.current, {
          y: -50,
          opacity: 0.5,
          scale: 0.95,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });

        gsap.to(subtitleRef.current, {
          y: -30,
          opacity: 0.6,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      // Floating particles
      gsap.to('.particle', {
        y: -20,
        x: 10,
        rotation: 360,
        duration: 4 + Math.random() * 2,
        repeat: -1,
        ease: 'sine.inOut',
        stagger: {
          amount: 2,
          from: 'random',
        },
      });

      // Circuit LED animations
      const circuitLeds = pageRef.current?.querySelectorAll('.circuit-card-led, .circuit-node, .circuit-connection');
      if (circuitLeds) {
        circuitLeds.forEach((led) => {
          gsap.to(led, {
            scale: 1.4,
            opacity: 0.9,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 0.5,
          });
        });
      }

      // Circuit wire glow animation
      const circuitWires = pageRef.current?.querySelectorAll('.circuit-wire');
      if (circuitWires) {
        circuitWires.forEach((wire, index) => {
          gsap.to(wire, {
            opacity: 0.7,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.4,
          });
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black">
      <Header />

      {/* New Modern Data Flow Background Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dark Base with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-slate-900 to-gray-950"></div>

        {/* Animated Mesh Gradient - More Visible */}
        <div 
          className="absolute inset-0 mesh-gradient-home"
          style={{
            background: `
              radial-gradient(at 20% 30%, rgba(59, 130, 246, 0.4) 0px, transparent 50%),
              radial-gradient(at 80% 70%, rgba(168, 85, 247, 0.4) 0px, transparent 50%),
              radial-gradient(at 40% 60%, rgba(236, 72, 153, 0.3) 0px, transparent 50%),
              radial-gradient(at 90% 20%, rgba(6, 182, 212, 0.3) 0px, transparent 50%)
            `,
            backgroundSize: '200% 200%',
            opacity: 0.8,
          }}
        ></div>

        {/* Floating 3D Geometric Shapes */}
        {[
          { size: 120, x: 10, y: 20, color: 'blue', delay: '0s', rotation: 45 },
          { size: 150, x: 85, y: 15, color: 'purple', delay: '1s', rotation: -30 },
          { size: 100, x: 15, y: 70, color: 'pink', delay: '0.5s', rotation: 60 },
          { size: 130, x: 80, y: 75, color: 'cyan', delay: '1.5s', rotation: -45 },
        ].map((shape, index) => (
          <div
            key={index}
            className="absolute floating-geo-shape"
            style={{
              width: `${shape.size}px`,
              height: `${shape.size}px`,
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              animationDelay: shape.delay,
              background: `linear-gradient(135deg, ${
                shape.color === 'blue' ? 'rgba(59, 130, 246, 0.4)' :
                shape.color === 'purple' ? 'rgba(168, 85, 247, 0.4)' :
                shape.color === 'pink' ? 'rgba(236, 72, 153, 0.4)' :
                'rgba(6, 182, 212, 0.4)'
              }, transparent)`,
              border: `2px solid ${
                shape.color === 'blue' ? 'rgba(59, 130, 246, 0.6)' :
                shape.color === 'purple' ? 'rgba(168, 85, 247, 0.6)' :
                shape.color === 'pink' ? 'rgba(236, 72, 153, 0.6)' :
                'rgba(6, 182, 212, 0.6)'
              }`,
              borderRadius: shape.size % 3 === 0 ? '50%' : '20%',
              transform: `rotate(${shape.rotation}deg)`,
              backdropFilter: 'blur(10px)',
            }}
          ></div>
        ))}

        {/* Animated Data Stream Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute data-particle"
            style={{
              width: `${4 + Math.random() * 5}px`,
              height: `${4 + Math.random() * 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `hsl(${200 + i * 7}, 70%, ${50 + i * 1}%)`,
              borderRadius: '50%',
              boxShadow: `0 0 ${15 + Math.random() * 15}px hsl(${200 + i * 7}, 70%, 60%)`,
              opacity: 0.8,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}

        {/* Connecting Data Flow Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-60">
          {[...Array(12)].map((_, i) => {
            const x1 = 20 + Math.random() * 60;
            const y1 = 20 + Math.random() * 60;
            const x2 = 20 + Math.random() * 60;
            const y2 = 20 + Math.random() * 60;
            const colors = ['#3b82f6', '#8b5cf6', '#ec4899', '#06b6d4'];
            const color = colors[i % colors.length];
            
            return (
              <line
                key={i}
                x1={`${x1}%`}
                y1={`${y1}%`}
                x2={`${x2}%`}
                y2={`${y2}%`}
                stroke={color}
                strokeWidth="2"
                strokeDasharray="4,3"
                opacity="0.6"
                className="data-flow-line"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-20"
                  dur={`${3 + Math.random() * 2}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.3}s`}
                />
              </line>
            );
          })}
        </svg>

        {/* Pulsing Data Nodes */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute data-node-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <div className="w-5 h-5 bg-blue-400 rounded-full animate-pulse shadow-xl shadow-blue-400/70"></div>
            <div className="absolute inset-0 w-5 h-5 bg-blue-400 rounded-full animate-ping opacity-75"></div>
          </div>
        ))}

        {/* Orbital Rings */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute orbital-ring"
            style={{
              width: `${300 + i * 150}px`,
              height: `${300 + i * 150}px`,
              left: `${30 + i * 20}%`,
              top: `${30 + i * 15}%`,
              border: `2px solid rgba(${
                i === 0 ? '59, 130, 246' :
                i === 1 ? '168, 85, 247' :
                '236, 72, 153'
              }, 0.5)`,
              borderRadius: '50%',
              animationDelay: `${i * 1.5}s`,
            }}
          ></div>
        ))}

        {/* Hexagonal Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              repeating-linear-gradient(30deg, transparent, transparent 2px, rgba(59, 130, 246, 0.3) 2px, rgba(59, 130, 246, 0.3) 4px),
              repeating-linear-gradient(60deg, transparent, transparent 2px, rgba(168, 85, 247, 0.3) 2px, rgba(168, 85, 247, 0.3) 4px)
            `,
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>

      {/* Keep existing circuit wires for service connections */}
      <svg className="fixed inset-0 w-full h-full pointer-events-none z-0" style={{ zIndex: 1 }}>
        {/* Main circuit wire from hero */}
        <path
          id="home-wire-1"
          d="M 50 100 Q 200 150, 400 250 L 600 400"
          fill="none"
          stroke="rgba(34, 197, 94, 0.4)"
          strokeWidth="3"
          className="circuit-wire"
        />
        
        {/* Wire to ERP */}
        <path
          id="home-wire-2"
          d="M 600 400 Q 800 450, 1000 550 L 1000 650"
          fill="none"
          stroke="rgba(59, 130, 246, 0.4)"
          strokeWidth="3"
          className="circuit-wire"
        />
        
        {/* Wire to CRM */}
        <path
          id="home-wire-3"
          d="M 600 400 Q 400 450, 200 550 L 200 650"
          fill="none"
          stroke="rgba(168, 85, 247, 0.4)"
          strokeWidth="3"
          className="circuit-wire"
        />
        
        {/* Wire to Web Dev */}
        <path
          id="home-wire-4"
          d="M 600 400 Q 600 500, 600 700 L 600 850"
          fill="none"
          stroke="rgba(249, 115, 22, 0.4)"
          strokeWidth="3"
          className="circuit-wire"
        />
        
        {/* Horizontal bus wire */}
        <path
          id="home-wire-5"
          d="M 200 650 L 1000 650"
          fill="none"
          stroke="rgba(34, 197, 94, 0.3)"
          strokeWidth="2"
          strokeDasharray="15,10"
          className="circuit-wire"
        />
        
        {/* Animated Light Nodes */}
        {[
          { id: 'home-light-1', x: 600, y: 400, color: 'rgba(34, 197, 94, 0.9)' },
          { id: 'home-light-2', x: 1000, y: 650, color: 'rgba(59, 130, 246, 0.9)' },
          { id: 'home-light-3', x: 200, y: 650, color: 'rgba(168, 85, 247, 0.9)' },
          { id: 'home-light-4', x: 600, y: 850, color: 'rgba(249, 115, 22, 0.9)' },
          { id: 'home-light-5', x: 50, y: 100, color: 'rgba(59, 130, 246, 0.9)' },
        ].map((light) => (
          <g key={light.id}>
            <circle
              cx={light.x}
              cy={light.y}
              r="10"
              fill={light.color}
              opacity="0.7"
              className="circuit-light-glow"
            />
            <circle
              cx={light.x}
              cy={light.y}
              r="5"
              fill={light.color}
              className="circuit-light"
            />
          </g>
        ))}
        
        {/* Flowing Lights */}
        <circle
          id="home-flowing-1"
          r="8"
          fill="rgba(34, 197, 94, 1)"
          className="flowing-light"
        >
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href="#home-wire-1" />
          </animateMotion>
        </circle>
        
        <circle
          id="home-flowing-2"
          r="8"
          fill="rgba(59, 130, 246, 1)"
          className="flowing-light"
        >
          <animateMotion dur="5s" repeatCount="indefinite" begin="1s">
            <mpath href="#home-wire-2" />
          </animateMotion>
        </circle>
        
        <circle
          id="home-flowing-3"
          r="8"
          fill="rgba(168, 85, 247, 1)"
          className="flowing-light"
        >
          <animateMotion dur="4.5s" repeatCount="indefinite" begin="0.5s">
            <mpath href="#home-wire-3" />
          </animateMotion>
        </circle>
      </svg>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-12 z-10"
      >
        {/* Animated Background Elements for Hero */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large Glowing Orbs */}
          <div className="absolute w-[600px] h-[600px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl top-0 left-0 opacity-40 animate-pulse"></div>
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl bottom-0 right-0 opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Main Hero Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Data Flow Indicator */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
              <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 md:mb-10 relative z-20"
            style={{ opacity: 1 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl relative z-10 block">
              Data Scube
            </span>
            {/* Glowing effect - behind text */}
            <span className="absolute inset-0 bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent blur-xl opacity-50 -z-10 pointer-events-none">
              Data Scube
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-2xl md:text-4xl text-white mb-6 md:mb-8 max-w-5xl mx-auto leading-[1.4] md:leading-[1.5] font-medium relative z-20 px-4"
            style={{ opacity: 1 }}
          >
            Empower Your Business Growth with{' '}
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
              Enterprise-Grade Technology Solutions
            </span>
            {' '}That Scale
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed md:leading-loose relative z-20 px-4 space-y-2">
            <span className="block mb-2">
              Drive revenue, streamline operations, and accelerate digital transformation with our comprehensive{' '}
              <span className="text-blue-400 font-semibold">ERP Systems</span>,{' '}
              <span className="text-purple-400 font-semibold">CRM Platforms</span>, and{' '}
              <span className="text-orange-400 font-semibold">Custom Web Applications</span>.
            </span>
            <span className="block">
              Trusted by <span className="text-cyan-400 font-semibold">1000+ businesses</span> worldwide for innovation and excellence.
            </span>
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push('/contact')}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started Today</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button
              onClick={() => router.push('/services')}
              className="px-10 py-5 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-blue-600 dark:border-blue-400"
            >
              Explore Services
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
          <div className="flex flex-col items-center text-gray-600 dark:text-gray-400">
            <span className="text-sm mb-2">Scroll Down</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 relative">
            {/* Circuit connection point */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="circuit-node w-4 h-4 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Choose Us?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver excellence through innovation, quality, and dedication
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="feature-card group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border-2 border-blue-500/30 overflow-hidden text-center"
              >
                {/* Circuit pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(59, 130, 246, 0.1) 2px, rgba(59, 130, 246, 0.1) 4px)`,
                }}></div>
                
                {/* LED indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse circuit-card-led"></div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  <div
                    className={`mt-4 h-1 bg-gradient-to-r ${feature.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-20 relative z-10">
        <div className="container mx-auto px-6">
          {/* Circuit connection line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-green-400/30 to-transparent"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-green-500/30 overflow-hidden"
              >
                {/* Circuit pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)`,
                }}></div>
                
                {/* LED indicator */}
                <div className={`absolute top-2 ${index % 2 === 0 ? 'left-2' : 'right-2'} w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse circuit-card-led`}></div>
                
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium text-lg">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - Circuit Connected */}
      <section className="services-section py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 relative">
            {/* Circuit connection point */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4">
              <div className="circuit-node w-4 h-4 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          {/* Circuit bus wire above services */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group cursor-pointer relative"
                onClick={() => router.push(service.link)}
              >
                {/* Circuit connection point */}
                <div className={`absolute -top-2 ${index === 0 ? 'left-1/2' : index === 1 ? 'right-1/2' : 'left-1/2'} transform -translate-x-1/2 w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 circuit-connection`}></div>
                
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border-2 border-purple-500/30 overflow-hidden h-full">
                  {/* Circuit pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(168, 85, 247, 0.1) 2px, rgba(168, 85, 247, 0.1) 4px)`,
                  }}></div>
                  
                  {/* LED indicators */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse circuit-card-led"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50 animate-pulse circuit-card-led"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      style={{
                        boxShadow: `0 10px 30px ${index === 0 ? 'rgba(59, 130, 246, 0.5)' : index === 1 ? 'rgba(168, 85, 247, 0.5)' : 'rgba(249, 115, 22, 0.5)'}`,
                      }}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-blue-400 font-semibold group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                    
                    {/* Circuit bottom line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90 dark:from-blue-700/90 dark:via-purple-700/90 dark:to-pink-700/90 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center relative">
          {/* Circuit pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)`,
          }}></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our innovative solutions
            </p>
            <button
              onClick={() => router.push('/contact')}
              className="px-10 py-5 bg-white text-blue-600 text-lg font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get In Touch</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
