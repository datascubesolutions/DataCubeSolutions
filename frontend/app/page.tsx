'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import { Rocket, Briefcase, Zap, Lock, Users, Target, User, Star, BarChart3, Globe } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Rocket,
    title: 'Innovative Solutions',
    description: 'Cutting-edge technology that drives your business forward',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Briefcase,
    title: 'Enterprise Ready',
    description: 'Scalable solutions for businesses of all sizes',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Optimized performance for maximum efficiency',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Lock,
    title: 'Secure & Reliable',
    description: 'Enterprise-grade security and 99.9% uptime',
    color: 'from-green-500 to-emerald-500',
  },
];

const stats = [
  { number: '500+', label: 'Happy Clients', icon: Users },
  { number: '1000+', label: 'Projects Completed', icon: Target },
  { number: '50+', label: 'Expert Team', icon: User },
  { number: '10+', label: 'Years Experience', icon: Star },
];

const services = [
  {
    title: 'ERP Solutions',
    description: 'Streamline your business operations with comprehensive ERP systems',
    icon: BarChart3,
    link: '/services/erp',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'CRM Systems',
    description: 'Enhance customer relationships and boost sales with powerful CRM',
    icon: Users,
    link: '/services/crm',
    gradient: 'from-indigo-600 to-cyan-600',
  },
  {
    title: 'Web Development',
    description: 'Modern web applications built with latest technologies',
    icon: Globe,
    link: '/services/web-development',
    gradient: 'from-cyan-600 to-blue-600',
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
    // Set global GSAP defaults for performance
    gsap.defaults({ force3D: true, immediateRender: false });
    
    const ctx = gsap.context(() => {
      // Premium Mesh gradient animation
      const meshGradient = pageRef.current?.querySelector('.mesh-gradient-home');
      if (meshGradient) {
        (meshGradient as HTMLElement).style.willChange = 'background-position';
        gsap.to(meshGradient, {
          backgroundPosition: '200% 200%',
          duration: 25,
          repeat: -1,
          ease: 'none',
        });
      }

      // Floating glowing orbs animation - enhanced 3D effect
      const geoShapes = pageRef.current?.querySelectorAll('.floating-geo-shape');
      if (geoShapes) {
        geoShapes.forEach((shape, index) => {
          (shape as HTMLElement).style.willChange = 'transform, opacity';
          gsap.to(shape, {
            y: -40 + Math.random() * 80,
            x: -30 + Math.random() * 60,
            scale: 1.2 + Math.random() * 0.3,
            opacity: 0.6 + Math.random() * 0.4,
            duration: 12 + Math.random() * 6,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
            force3D: true,
          });
        });
      }

      // Enhanced particle field animation
      const dataParticles = pageRef.current?.querySelectorAll('.data-particle');
      if (dataParticles) {
        dataParticles.forEach((particle, index) => {
          (particle as HTMLElement).style.willChange = 'transform, opacity';
          gsap.to(particle, {
            y: -80 + Math.random() * 160,
            x: -50 + Math.random() * 100,
            rotation: 720,
            scale: 1.3 + Math.random() * 0.4,
            opacity: 0.4 + Math.random() * 0.6,
            duration: 8 + Math.random() * 7,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.08,
            force3D: true,
          });
        });
      }

      // Enhanced orbital rings rotation with counter-rotation
      const orbitalRings = pageRef.current?.querySelectorAll('.orbital-ring');
      if (orbitalRings) {
        orbitalRings.forEach((ring, index) => {
          (ring as HTMLElement).style.willChange = 'transform';
          const direction = index % 2 === 0 ? 360 : -360;
          gsap.to(ring, {
            rotation: direction,
            duration: 25 + index * 8,
            repeat: -1,
            ease: 'none',
            transformOrigin: 'center center',
            force3D: true,
          });
          // Add scale pulse
          gsap.to(ring, {
            scale: 1.1,
            duration: 4 + index * 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5,
          });
        });
      }

      // Enhanced glow spheres pulse animation
      const dataNodes = pageRef.current?.querySelectorAll('.data-node-pulse');
      if (dataNodes) {
        dataNodes.forEach((node, index) => {
          (node as HTMLElement).style.willChange = 'transform, opacity';
          gsap.to(node, {
            scale: 1.8,
            opacity: 0.9,
            duration: 2.5 + Math.random() * 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.15,
            force3D: true,
          });
          // Add floating motion
          gsap.to(node, {
            y: -30 + Math.random() * 60,
            x: -20 + Math.random() * 40,
            duration: 6 + Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });
        });
      }

      // Flowing beam animations
      const flowingBeams = pageRef.current?.querySelectorAll('.flowing-beam');
      if (flowingBeams) {
        flowingBeams.forEach((beam, index) => {
          (beam as HTMLElement).style.willChange = 'opacity, transform';
          gsap.to(beam, {
            opacity: 0.3 + Math.random() * 0.4,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });
        });
      }

      // Grid node animations
      const gridNodes = pageRef.current?.querySelectorAll('.grid-node');
      if (gridNodes) {
        gridNodes.forEach((node, index) => {
          (node as HTMLElement).style.willChange = 'transform, opacity';
        });
      }

      // Hero section animations - optimized (removed expensive properties)
      if (titleRef.current) {
        titleRef.current.style.willChange = 'transform, opacity';
        gsap.set(titleRef.current, { opacity: 1, visibility: 'visible' });
        
        gsap.fromTo(
          titleRef.current,
          { opacity: 0.8, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            ease: 'power3.out',
            force3D: true,
          }
        );
      }

      if (subtitleRef.current) {
        subtitleRef.current.style.willChange = 'transform, opacity';
        gsap.set(subtitleRef.current, { opacity: 1, visibility: 'visible' });
        
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0.8, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power2.out',
            force3D: true,
          }
        );
      }

      if (ctaRef.current) {
        ctaRef.current.style.willChange = 'transform, opacity';
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.8,
            delay: 0.6,
            ease: 'back.out(2)',
            force3D: true,
          }
        );
      }

      // Features animation - optimized (removed rotationX)
      const featureCards = pageRef.current?.querySelectorAll('.feature-card');
      if (featureCards) {
        featureCards.forEach((card) => {
          (card as HTMLElement).style.willChange = 'transform, opacity';
        });
      }
      gsap.fromTo(
        '.feature-card',
        {
          opacity: 0,
          y: 80,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          force3D: true,
          scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats animation - optimized (removed rotation)
      const statCards = pageRef.current?.querySelectorAll('.stat-card');
      if (statCards) {
        statCards.forEach((card) => {
          (card as HTMLElement).style.willChange = 'transform, opacity';
        });
      }
      gsap.fromTo(
        '.stat-card',
        {
          opacity: 0,
          scale: 0,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'back.out(2)',
          force3D: true,
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Services animation - optimized
      const serviceCards = pageRef.current?.querySelectorAll('.service-card');
      if (serviceCards) {
        serviceCards.forEach((card) => {
          (card as HTMLElement).style.willChange = 'transform, opacity';
        });
      }
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
          force3D: true,
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Floating animations for background elements - optimized
      const floatingCircles = pageRef.current?.querySelectorAll('.floating-circle');
      if (floatingCircles) {
        floatingCircles.forEach((circle) => {
          (circle as HTMLElement).style.willChange = 'transform';
        });
      }
      gsap.to('.floating-circle', {
        y: 30,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
        force3D: true,
      });

      // Parallax effect for hero on scroll - optimized
      if (heroRef.current && titleRef.current && subtitleRef.current) {
        gsap.set(titleRef.current, { opacity: 1 });
        gsap.set(subtitleRef.current, { opacity: 1 });
        
        gsap.to(titleRef.current, {
          y: -50,
          opacity: 0.5,
          scale: 0.95,
          force3D: true,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5, // Optimized for smoother scrolling
            invalidateOnRefresh: true,
          },
        });

        gsap.to(subtitleRef.current, {
          y: -30,
          opacity: 0.6,
          force3D: true,
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5,
            invalidateOnRefresh: true,
          },
        });
      }

      // Floating particles - optimized
      const particles = pageRef.current?.querySelectorAll('.particle');
      if (particles) {
        particles.forEach((particle) => {
          (particle as HTMLElement).style.willChange = 'transform';
        });
      }
      gsap.to('.particle', {
        y: -20,
        x: 10,
        rotation: 360,
        duration: 4 + Math.random() * 2,
        repeat: -1,
        ease: 'sine.inOut',
        force3D: true,
        stagger: {
          amount: 2,
          from: 'random',
        },
      });

      // Circuit LED animations - optimized
      const circuitLeds = pageRef.current?.querySelectorAll('.circuit-card-led, .circuit-node, .circuit-connection');
      if (circuitLeds) {
        circuitLeds.forEach((led) => {
          (led as HTMLElement).style.willChange = 'transform, opacity';
          gsap.to(led, {
            scale: 1.4,
            opacity: 0.9,
            duration: 1.2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 0.5,
            force3D: true,
          });
        });
      }

      // Circuit wire glow animation - optimized
      const circuitWires = pageRef.current?.querySelectorAll('.circuit-wire');
      if (circuitWires) {
        circuitWires.forEach((wire, index) => {
          (wire as HTMLElement).style.willChange = 'opacity';
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
    <div ref={pageRef} className="min-h-screen w-full overflow-x-hidden relative">
      <Header />

      {/* Tech Company Animated Background Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Professional Tech Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950"></div>

        {/* Animated Mesh Gradient - Tech Style */}
        <div 
          className="absolute inset-0 mesh-gradient-home opacity-90"
          style={{
            background: `
              radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.5) 0px, transparent 50%),
              radial-gradient(at 100% 0%, rgba(99, 102, 241, 0.5) 0px, transparent 50%),
              radial-gradient(at 50% 50%, rgba(6, 182, 212, 0.4) 0px, transparent 50%),
              radial-gradient(at 0% 100%, rgba(14, 165, 233, 0.4) 0px, transparent 50%),
              radial-gradient(at 100% 100%, rgba(37, 99, 235, 0.5) 0px, transparent 50%)
            `,
            backgroundSize: '200% 200%',
          }}
        ></div>

        {/* Floating Glowing Orbs - Tech Blue/Cyan */}
        {[
          { size: 400, x: -10, y: -10, color: 'rgba(59, 130, 246, 0.4)', blur: 120 },
          { size: 350, x: 90, y: 20, color: 'rgba(6, 182, 212, 0.4)', blur: 100 },
          { size: 300, x: 20, y: 80, color: 'rgba(99, 102, 241, 0.3)', blur: 90 },
          { size: 450, x: 80, y: 70, color: 'rgba(14, 165, 233, 0.3)', blur: 110 },
          { size: 380, x: 50, y: -5, color: 'rgba(37, 99, 235, 0.35)', blur: 105 },
        ].map((orb, index) => (
          <div
            key={index}
            className="absolute floating-geo-shape"
            style={{
              width: `${orb.size}px`,
              height: `${orb.size}px`,
              left: `${orb.x}%`,
              top: `${orb.y}%`,
              background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
              borderRadius: '50%',
              filter: `blur(${orb.blur}px)`,
              transform: 'translateZ(0)',
            }}
          ></div>
        ))}

        {/* Animated Particle Field - Tech Colors */}
        {[...Array(80)].map((_, i) => {
          const size = 2 + Math.random() * 4;
          // Tech color range: 180-280 (cyan to blue)
          const hue = 180 + (i * 3) % 100;
          return (
            <div
              key={i}
              className="absolute data-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `hsl(${hue}, 75%, 65%)`,
                borderRadius: '50%',
                boxShadow: `0 0 ${size * 4}px hsl(${hue}, 75%, 70%), 0 0 ${size * 8}px hsl(${hue}, 75%, 60%)`,
                opacity: 0.6 + Math.random() * 0.4,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          );
        })}

        {/* Flowing Light Beams - Tech Gradients */}
        <svg className="absolute inset-0 w-full h-full opacity-40" style={{ zIndex: 1 }}>
          {[...Array(8)].map((_, i) => {
            const startY = 20 + i * 12;
            const controlY = startY + 30;
            return (
              <path
                key={i}
                d={`M 0 ${startY} Q 50 ${controlY} 100 ${startY + 20}`}
                fill="none"
                stroke={`url(#gradient-${i})`}
                strokeWidth="2"
                opacity="0.6"
                className="flowing-beam"
              >
                <animate
                  attributeName="d"
                  values={`M 0 ${startY} Q 50 ${controlY} 100 ${startY + 20}; M -50 ${startY} Q 0 ${controlY} 50 ${startY + 20}; M 0 ${startY} Q 50 ${controlY} 100 ${startY + 20}`}
                  dur={`${8 + i * 2}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.5}s`}
                />
              </path>
            );
          })}
          <defs>
            {[...Array(8)].map((_, i) => {
              const colors = [
                ['#3b82f6', '#06b6d4'],
                ['#06b6d4', '#3b82f6'],
                ['#6366f1', '#3b82f6'],
                ['#0ea5e9', '#06b6d4'],
                ['#3b82f6', '#2563eb'],
                ['#06b6d4', '#0ea5e9'],
                ['#2563eb', '#6366f1'],
                ['#0ea5e9', '#3b82f6'],
              ];
              return (
                <linearGradient key={i} id={`gradient-${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor={colors[i % colors.length][0]} stopOpacity="0.8" />
                  <stop offset="50%" stopColor={colors[i % colors.length][1]} stopOpacity="1" />
                  <stop offset="100%" stopColor={colors[i % colors.length][0]} stopOpacity="0.8" />
                </linearGradient>
              );
            })}
          </defs>
        </svg>

        {/* Animated Grid Network - Tech Colors */}
        <svg className="absolute inset-0 w-full h-full opacity-20" style={{ zIndex: 1 }}>
          {[...Array(15)].map((_, i) => {
            const x = (i % 5) * 25;
            const y = Math.floor(i / 5) * 33;
            const colors = ['#3b82f6', '#06b6d4', '#6366f1', '#0ea5e9'];
            const color = colors[i % colors.length];
            
            return (
              <g key={i}>
                <circle
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r="4"
                  fill={color}
                  opacity="0.8"
                  className="grid-node"
                >
                  <animate
                    attributeName="r"
                    values="4;8;4"
                    dur={`${2 + Math.random()}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.2}s`}
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur={`${2 + Math.random()}s`}
                    repeatCount="indefinite"
                    begin={`${i * 0.2}s`}
                  />
                </circle>
                {i < 14 && (
                  <line
                    x1={`${x}%`}
                    y1={`${y}%`}
                    x2={`${(x + 25) % 125}%`}
                    y2={`${y}%`}
                    stroke={color}
                    strokeWidth="1"
                    strokeDasharray="3,3"
                    opacity="0.5"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;-10"
                      dur={`${3 + Math.random()}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.1}s`}
                    />
                  </line>
                )}
              </g>
            );
          })}
        </svg>

        {/* Floating Glow Spheres - Tech Colors */}
        {[...Array(12)].map((_, i) => {
          const colors = [
            'rgba(59, 130, 246, 0.6)',
            'rgba(6, 182, 212, 0.6)',
            'rgba(99, 102, 241, 0.6)',
            'rgba(14, 165, 233, 0.6)',
          ];
          return (
            <div
              key={i}
              className="absolute data-node-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${30 + Math.random() * 40}px`,
                height: `${30 + Math.random() * 40}px`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{
                  background: `radial-gradient(circle, ${colors[i % colors.length]}, transparent)`,
                  boxShadow: `0 0 ${40 + Math.random() * 30}px ${colors[i % colors.length]}`,
                  filter: 'blur(1px)',
                }}
              ></div>
            </div>
          );
        })}

        {/* Rotating Light Rings - Tech Colors */}
        {[...Array(4)].map((_, i) => {
          const sizes = [250, 400, 550, 700];
          const colors = [
            'rgba(59, 130, 246, 0.3)',
            'rgba(6, 182, 212, 0.3)',
            'rgba(99, 102, 241, 0.3)',
            'rgba(14, 165, 233, 0.3)',
          ];
          return (
            <div
              key={i}
              className="absolute orbital-ring"
              style={{
                width: `${sizes[i]}px`,
                height: `${sizes[i]}px`,
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                border: `1px solid ${colors[i]}`,
                borderRadius: '50%',
                boxShadow: `0 0 ${20 + i * 10}px ${colors[i]}, inset 0 0 ${20 + i * 10}px ${colors[i]}`,
                animationDelay: `${i * 2}s`,
              }}
            ></div>
          );
        })}

        {/* Animated Wave Overlay - Tech Colors */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(59, 130, 246, 0.2) 2px,
                rgba(59, 130, 246, 0.2) 4px
              ),
              repeating-linear-gradient(
                90deg,
                transparent,
                transparent 2px,
                rgba(6, 182, 212, 0.2) 2px,
                rgba(6, 182, 212, 0.2) 4px
              )
            `,
            backgroundSize: '60px 60px',
            animation: 'wave 20s linear infinite',
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
          <div className="absolute w-[500px] h-[500px] bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-full blur-3xl bottom-0 right-0 opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Main Hero Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Data Flow Indicator */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="relative">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse"></div>
              <div className="absolute inset-0 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 md:mb-10 relative z-20"
            style={{ opacity: 1 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl relative z-10 block">
              Data Scube
            </span>
            {/* Glowing effect - behind text */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent blur-xl opacity-50 -z-10 pointer-events-none">
              Data Scube
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-2xl md:text-4xl text-white mb-6 md:mb-8 max-w-5xl mx-auto leading-[1.4] md:leading-[1.5] font-medium relative z-20 px-4"
            style={{ opacity: 1 }}
          >
            Empower Your Business Growth with{' '}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent font-bold">
              Enterprise-Grade Technology Solutions
            </span>
            {' '}That Scale
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 md:mb-16 max-w-4xl mx-auto leading-relaxed md:leading-loose relative z-20 px-4 space-y-2">
            <span className="block mb-2">
              Drive revenue, streamline operations, and accelerate digital transformation with our comprehensive{' '}
              <span className="text-blue-400 font-semibold">ERP Systems</span>,{' '}
              <span className="text-indigo-400 font-semibold">CRM Platforms</span>, and{' '}
              <span className="text-cyan-400 font-semibold">Custom Web Applications</span>.
            </span>
            <span className="block">
              Trusted by <span className="text-cyan-400 font-semibold">1000+ businesses</span> worldwide for innovation and excellence.
            </span>
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push('/contact')}
              className="px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">Get Started Today</span>
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
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
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
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
                  <div className="mb-4 flex justify-center">
                    <div className="transform group-hover:scale-110 transition-transform duration-300">
                      {(() => {
                        const IconComponent = feature.icon;
                        return <IconComponent className="w-16 h-16 text-blue-400" />;
                      })()}
                    </div>
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
                  <div className="mb-4">
                    {(() => {
                      const IconComponent = stat.icon;
                      return <IconComponent className="w-12 h-12 text-green-400 mx-auto" />;
                    })()}
                  </div>
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
              <div className="circuit-node w-4 h-4 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50"></div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Our Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          {/* Circuit bus wire above services */}
          <div className="absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"></div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card group cursor-pointer relative"
                onClick={() => router.push(service.link)}
              >
                {/* Circuit connection point */}
                <div className={`absolute -top-2 ${index === 0 ? 'left-1/2' : index === 1 ? 'right-1/2' : 'left-1/2'} transform -translate-x-1/2 w-3 h-3 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50 circuit-connection`}></div>
                
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border-2 border-indigo-500/30 overflow-hidden h-full flex flex-col">
                  {/* Circuit pattern overlay */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(99, 102, 241, 0.1) 2px, rgba(99, 102, 241, 0.1) 4px)`,
                  }}></div>
                  
                  {/* LED indicators */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-indigo-400 rounded-full shadow-lg shadow-indigo-400/50 animate-pulse circuit-card-led"></div>
                  <div className="absolute top-4 right-4 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse circuit-card-led"></div>
                  
                  {/* Circuit bottom line - fixed at absolute bottom */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20`}></div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon - centered */}
                    <div className="flex justify-center mb-6">
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                        style={{
                          boxShadow: `0 10px 30px ${index === 0 ? 'rgba(59, 130, 246, 0.5)' : index === 1 ? 'rgba(168, 85, 247, 0.5)' : 'rgba(249, 115, 22, 0.5)'}`,
                        }}
                      >
                        {(() => {
                          const IconComponent = service.icon;
                          return <IconComponent className="w-10 h-10 text-white" />;
                        })()}
                      </div>
                    </div>
                    
                    {/* Content - flex-grow to push bottom content down */}
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-4 text-center">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed mb-6 text-center">
                        {service.description}
                      </p>
                    </div>
                    
                    {/* Bottom section - Learn More */}
                    <div className="flex justify-center items-center text-blue-400 font-semibold group-hover:gap-2 transition-all mt-auto pt-4">
                      <span>Learn More</span>
                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative z-10 bg-gradient-to-r from-blue-600/90 via-cyan-600/90 to-indigo-600/90 dark:from-blue-700/90 dark:via-cyan-700/90 dark:to-indigo-700/90 backdrop-blur-sm">
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
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
