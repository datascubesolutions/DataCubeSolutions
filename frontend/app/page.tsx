'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import { 
  Rocket, Briefcase, Zap, Lock, Users, Target, User, Star, BarChart3, Globe, 
  ArrowRight, CheckCircle2, Database, Cloud, Shield, TrendingUp,
  MessageSquare, Star as StarIcon, Clock, Award, Sparkles, Layers,
  Cpu, Brain, Sparkle, Stars, Infinity, Code, ChevronLeft, ChevronRight
} from 'lucide-react';

const features = [
  {
    icon: Code,
    title: 'Complete IT Solutions',
    description: 'End-to-end technology services from ERP, CRM, website development to digital marketing - everything your business needs in one place.',
  },
  {
    icon: Rocket,
    title: 'Startup Support',
    description: 'Comprehensive startup assistance from registration, certifications, funding support, to documentation - helping you launch and scale successfully.',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Experienced professionals in both IT solutions and business consulting, ensuring quality delivery across all services.',
  },
  {
    icon: Award,
    title: 'Proven Track Record',
    description: '12+ successful projects, 30+ happy clients, and 2.3+ years of experience delivering excellence in IT and startup support.',
  },
];

const services = [
  {
    title: 'IT & Digital Solutions',
    description: 'Complete technology solutions including ERP, CRM, website development, mobile apps, and digital marketing to power your business operations and online presence.',
    features: ['ERP & CRM Systems', 'Website & E-Commerce', 'Mobile App Development', 'Digital Marketing & SEO'],
    icon: Code,
    link: '/solutions',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Startup Support & Consulting',
    description: 'Comprehensive startup support from company registration, certifications, funding assistance, documentation, and business consulting to help you launch and scale successfully.',
    features: ['Company Registration', 'Certifications & Compliance', 'Funding & Grants Support', 'Documentation & Pitch Decks'],
    icon: Rocket,
    link: '/industries',
    color: 'from-green-500 to-emerald-500',
  },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Founder, TechStart Innovations',
    content: 'Data Scube helped us from day one - company registration, Startup India certification, pitch deck development, and finally connecting us with angel investors. We successfully raised seed funding thanks to their comprehensive support.',
    rating: 5,
    category: 'Startup Support',
  },
  {
    name: 'Priya Sharma',
    role: 'CEO, Manufacturing Solutions Ltd.',
    content: 'Their ERP system transformed our entire operations. Inventory management, billing, and HR processes are now streamlined. We\'ve seen 40% improvement in efficiency and significant cost reduction.',
    rating: 5,
    category: 'IT Solutions',
  },
  {
    name: 'Amit Patel',
    role: 'Director, E-Commerce Ventures',
    content: 'Complete digital transformation - from website development, CRM implementation to digital marketing. Our online sales increased by 150% and customer engagement improved dramatically.',
    rating: 5,
    category: 'IT Solutions',
  },
  {
    name: 'Sneha Mehta',
    role: 'Co-Founder, HealthTech Startup',
    content: 'Outstanding support for our startup journey! They handled MSME registration, GST setup, documentation for funding, and even helped us get government grants. Highly professional and reliable.',
    rating: 5,
    category: 'Startup Support',
  },
];

export default function Home() {
  const router = useRouter();
  const pageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const testimonialsPerSlide = 2;
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0);
  const totalTestimonialSlides = Math.max(1, Math.ceil(testimonials.length / testimonialsPerSlide));

  const visibleTestimonials = (() => {
    const startIndex = currentTestimonialSlide * testimonialsPerSlide;
    const slice = testimonials.slice(startIndex, startIndex + testimonialsPerSlide);
    if (slice.length < testimonialsPerSlide) {
      return [...slice, ...testimonials.slice(0, testimonialsPerSlide - slice.length)];
    }
    return slice;
  })();

  const handlePrevTestimonial = () => {
    setCurrentTestimonialSlide((prev: number) => (prev - 1 + totalTestimonialSlides) % totalTestimonialSlides);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonialSlide((prev: number) => (prev + 1) % totalTestimonialSlides);
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    let ctx: any = null;
    
    const initGSAP = async () => {
      try {
        const { gsap } = await import('gsap');
        const { ScrollTrigger } = await import('gsap/ScrollTrigger');
        
        // Check if ScrollTrigger is available and registerPlugin exists
        if (ScrollTrigger && typeof gsap.registerPlugin === 'function') {
          gsap.registerPlugin(ScrollTrigger);
        } else {
          console.warn('ScrollTrigger or registerPlugin not available');
          return;
        }
        
        ctx = gsap.context(() => {
          // Simple fade-in animations
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
        );
      }

      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power2.out' }
        );
      }

      // Scroll-triggered animations
      gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
      });

      // Feature cards animation
      gsap.fromTo(
        '.feature-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.features-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Service cards animation
      gsap.fromTo(
        '.service-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.services-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Process steps animation
      gsap.fromTo(
        '.process-step',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.process-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // Testimonial cards animation
      gsap.fromTo(
        '.testimonial-card',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.testimonials-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
      }, pageRef);
      } catch (error) {
        console.error('Error initializing GSAP:', error);
      }
    };
    
    initGSAP();
    
    return () => {
      if (ctx) {
        ctx.revert();
      }
    };
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Hero Section - Enhanced */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12 md:pb-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/95 to-slate-950"></div>
        
        {/* Premium Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-40 h-40 sm:w-56 sm:h-56 md:w-80 md:h-80 bg-indigo-600/8 rounded-full blur-3xl"></div>

        {/* Small Chip with Irregular Glowing Connections - Center Background */}
        <div className="absolute top-[25%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[280px] md:h-[280px] lg:w-[320px] lg:h-[320px] pointer-events-none z-0">
          {/* Outer Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-cyan-500/15 to-blue-500/15 blur-3xl animate-pulse"></div>
          
          {/* Small Chip Package */}
          <div className="relative w-full h-full">
            {/* Main Chip Body - Smaller */}
            <div className="absolute inset-[40px] md:inset-[50px] bg-gradient-to-br from-slate-800/90 via-slate-700/90 to-slate-800/90 rounded-sm border border-slate-600/40 shadow-xl">
              {/* Center Die Area */}
              <div className="absolute inset-4 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-sm border border-slate-600/20">
                {/* Center Power Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16">
                  <div className="absolute inset-0 rounded-full bg-slate-900"></div>
                  <div
                    className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-500 opacity-0"
                    style={{ animation: 'coreGlowOuter 7s linear infinite', transformOrigin: '50% 50%' }}
                  ></div>
                  <div className="absolute inset-1 rounded-full bg-slate-800 border border-slate-700/40"></div>
                  <div
                    className="absolute inset-[3px] md:inset-[4px] rounded-full bg-gradient-to-br from-cyan-400 via-sky-500 to-blue-500 opacity-0"
                    style={{ animation: 'coreGlowInner 7s linear infinite', transformOrigin: '50% 50%' }}
                  ></div>
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] md:text-[10px] font-mono font-bold"
                    style={{ animation: 'coreGlowText 7s linear infinite' }}
                  >
                    PWR
                  </div>
                </div>
              </div>
            </div>

            {/* Small Pins - Reduced count */}
            <div className="absolute top-0 left-0 right-0 flex justify-center gap-0.5 md:gap-1 px-[40px] md:px-[50px]">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={`top-${i}`} className="w-0.5 md:w-1 h-4 md:h-5 bg-gradient-to-b from-slate-600 to-slate-700 rounded-t-sm"></div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-0.5 md:gap-1 px-[40px] md:px-[50px]">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={`bottom-${i}`} className="w-0.5 md:w-1 h-4 md:h-5 bg-gradient-to-t from-slate-600 to-slate-700 rounded-b-sm"></div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center gap-0.5 md:gap-1 py-[40px] md:py-[50px]">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={`left-${i}`} className="w-4 md:w-5 h-0.5 md:h-1 bg-gradient-to-r from-slate-600 to-slate-700 rounded-l-sm"></div>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 flex flex-col justify-center gap-0.5 md:gap-1 py-[40px] md:py-[50px]">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={`right-${i}`} className="w-4 md:w-5 h-0.5 md:h-1 bg-gradient-to-l from-slate-600 to-slate-700 rounded-r-sm"></div>
              ))}
            </div>
          </div>

          {/* Irregular Glowing Connections - Octopus-like */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 800" fill="none" style={{ overflow: 'visible' }}>
            <defs>
              <filter id="glowPath" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <filter id="glowPathStrong" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
              <linearGradient id="pathGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#06b6d4" stopOpacity="1"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.6"/>
              </linearGradient>
              <linearGradient id="pathGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="1"/>
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6"/>
              </linearGradient>
              <radialGradient id="energyCoreGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#60a5fa" stopOpacity="0.5" />
                <stop offset="100%" stopColor="transparent" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Irregular Paths - Long Tentacle-like Connections */}
            {/* Path 1 - Top Right Tentacle */}
            <path
              id="wire-top-right"
              d="M 400 400 Q 450 350, 500 280 Q 520 200, 550 120 Q 570 80, 600 60"
              stroke="url(#pathGradient1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Path 2 - Top Left Tentacle */}
            <path
              id="wire-top-left"
              d="M 400 400 Q 350 350, 300 280 Q 280 200, 250 120 Q 230 80, 200 60"
              stroke="url(#pathGradient2)"
              strokeWidth="3"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Path 3 - Bottom Right Tentacle */}
            <path
              id="wire-bottom-right"
              d="M 400 400 Q 450 450, 500 520 Q 520 600, 550 680 Q 570 720, 600 740"
              stroke="url(#pathGradient1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Path 4 - Bottom Left Tentacle */}
            <path
              id="wire-bottom-left"
              d="M 400 400 Q 350 450, 300 520 Q 280 600, 250 680 Q 230 720, 200 740"
              stroke="url(#pathGradient2)"
              strokeWidth="3"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Path 5 - Right Tentacle */}
            <path
              id="wire-right"
              d="M 400 400 Q 480 400, 560 380 Q 640 360, 700 340 Q 720 330, 740 320"
              stroke="url(#pathGradient1)"
              strokeWidth="2"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Path 6 - Left Tentacle */}
            <path
              id="wire-left"
              d="M 400 400 Q 320 400, 240 380 Q 160 360, 100 340 Q 80 330, 60 320"
              stroke="url(#pathGradient2)"
              strokeWidth="2"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Path 7 - Diagonal Top Right */}
            <path
              id="wire-diagonal-top-right"
              d="M 400 400 Q 450 380, 500 340 Q 550 300, 600 250 Q 620 220, 650 180"
              stroke="url(#pathGradient1)"
              strokeWidth="1.6"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Path 8 - Diagonal Top Left */}
            <path
              id="wire-diagonal-top-left"
              d="M 400 400 Q 350 380, 300 340 Q 250 300, 200 250 Q 180 220, 150 180"
              stroke="url(#pathGradient2)"
              strokeWidth="1.6"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Glowing Nodes along paths */}
            {/* Node 1 - Top Right */}
            <circle cx="550" cy="120" r="4" fill="#06b6d4" filter="url(#glowPathStrong)" opacity="0.9">
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="600" cy="60" r="3" fill="#3b82f6" filter="url(#glowPath)" opacity="0.8">
              <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            {/* Node 2 - Top Left */}
            <circle cx="250" cy="120" r="4" fill="#3b82f6" filter="url(#glowPathStrong)" opacity="0.9" style={{ animationDelay: '0.5s' }}>
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="60" r="3" fill="#06b6d4" filter="url(#glowPath)" opacity="0.8" style={{ animationDelay: '0.5s' }}>
              <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            {/* Node 3 - Bottom Right */}
            <circle cx="550" cy="680" r="4" fill="#06b6d4" filter="url(#glowPathStrong)" opacity="0.9" style={{ animationDelay: '1s' }}>
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="600" cy="740" r="3" fill="#3b82f6" filter="url(#glowPath)" opacity="0.8" style={{ animationDelay: '1s' }}>
              <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            {/* Node 4 - Bottom Left */}
            <circle cx="250" cy="680" r="4" fill="#3b82f6" filter="url(#glowPathStrong)" opacity="0.9" style={{ animationDelay: '1.5s' }}>
              <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="200" cy="740" r="3" fill="#06b6d4" filter="url(#glowPath)" opacity="0.8" style={{ animationDelay: '1.5s' }}>
              <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            {/* Node 5 - Right Side */}
            <circle cx="700" cy="340" r="3.5" fill="#06b6d4" filter="url(#glowPathStrong)" opacity="0.8" style={{ animationDelay: '0.3s' }}>
              <animate attributeName="r" values="3.5;5.5;3.5" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="740" cy="320" r="2.5" fill="#3b82f6" filter="url(#glowPath)" opacity="0.7" style={{ animationDelay: '0.3s' }}>
              <animate attributeName="r" values="2.5;4.5;2.5" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            {/* Node 6 - Left Side */}
            <circle cx="100" cy="340" r="3.5" fill="#3b82f6" filter="url(#glowPathStrong)" opacity="0.8" style={{ animationDelay: '0.8s' }}>
              <animate attributeName="r" values="3.5;5.5;3.5" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="60" cy="320" r="2.5" fill="#06b6d4" filter="url(#glowPath)" opacity="0.7" style={{ animationDelay: '0.8s' }}>
              <animate attributeName="r" values="2.5;4.5;2.5" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0.7;0.9;0.7" dur="2.5s" repeatCount="indefinite"/>
            </circle>

            {/* Energy Particles traveling along wires - synchronized to 7s cycle */}
            <g className="energy-pulses">
              {/* Particle 1 - Top Right - starts at 0s, arrives at 3.4s */}
              <circle r="6" fill="#38bdf8" opacity="0" filter="url(#glowPathStrong)">
                <animateMotion dur="7s" begin="0s" repeatCount="indefinite" keyPoints="1;0;0" keyTimes="0;0.486;1" calcMode="linear">
                  <mpath xlinkHref="#wire-top-right" />
                </animateMotion>
                <animate attributeName="r" values="5;7;5;5" keyTimes="0;0.243;0.486;1" dur="7s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;1;1;0;0" keyTimes="0;0.05;0.44;0.486;1" dur="7s" begin="0s" repeatCount="indefinite" />
              </circle>
              
              {/* Particle 2 - Top Left - starts at 0.5s, arrives at 3.9s */}
              <circle r="6" fill="#22d3ee" opacity="0" filter="url(#glowPathStrong)">
                <animateMotion dur="7s" begin="0s" repeatCount="indefinite" keyPoints="1;0;0" keyTimes="0;0.557;1" calcMode="linear">
                  <mpath xlinkHref="#wire-top-left" />
                </animateMotion>
                <animate attributeName="r" values="5;7;5;5" keyTimes="0;0.279;0.557;1" dur="7s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.071;0.12;0.51;0.557;1" dur="7s" begin="0s" repeatCount="indefinite" />
              </circle>
              
              {/* Particle 3 - Bottom Right - starts at 1s, arrives at 4.4s */}
              <circle r="6" fill="#60a5fa" opacity="0" filter="url(#glowPathStrong)">
                <animateMotion dur="7s" begin="0s" repeatCount="indefinite" keyPoints="1;0;0" keyTimes="0;0.629;1" calcMode="linear">
                  <mpath xlinkHref="#wire-bottom-right" />
                </animateMotion>
                <animate attributeName="r" values="5;7;5;5" keyTimes="0;0.315;0.629;1" dur="7s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.143;0.19;0.58;0.629;1" dur="7s" begin="0s" repeatCount="indefinite" />
              </circle>
              
              {/* Particle 4 - Bottom Left - starts at 1.5s, arrives at 4.9s (triggers center glow) */}
              <circle r="6" fill="#818cf8" opacity="0" filter="url(#glowPathStrong)">
                <animateMotion dur="7s" begin="0s" repeatCount="indefinite" keyPoints="1;0;0" keyTimes="0;0.7;1" calcMode="linear">
                  <mpath xlinkHref="#wire-bottom-left" />
                </animateMotion>
                <animate attributeName="r" values="5;7;5;5" keyTimes="0;0.35;0.7;1" dur="7s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.214;0.26;0.64;0.7;1" dur="7s" begin="0s" repeatCount="indefinite" />
              </circle>
              
              {/* Particle 5 - Right - starts at 0.3s, path takes ~2.2s, arrives at 2.5s */}
              <circle r="5" fill="#3b82f6" opacity="0" filter="url(#glowPathStrong)">
                <animateMotion dur="7s" begin="0s" repeatCount="indefinite" keyPoints="1;1;0;0" keyTimes="0;0.043;0.357;1" calcMode="linear">
                  <mpath xlinkHref="#wire-right" />
                </animateMotion>
                <animate attributeName="r" values="4;4;6;4;4" keyTimes="0;0.043;0.2;0.357;1" dur="7s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.043;0.08;0.32;0.357;1" dur="7s" begin="0s" repeatCount="indefinite" />
              </circle>
              
              {/* Particle 6 - Left - starts at 0.8s, path takes ~2.2s, arrives at 3s */}
              <circle r="5" fill="#06b6d4" opacity="0" filter="url(#glowPathStrong)">
                <animateMotion dur="7s" begin="0s" repeatCount="indefinite" keyPoints="1;1;0;0" keyTimes="0;0.114;0.429;1" calcMode="linear">
                  <mpath xlinkHref="#wire-left" />
                </animateMotion>
                <animate attributeName="r" values="4;4;6;4;4" keyTimes="0;0.114;0.27;0.429;1" dur="7s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.114;0.16;0.39;0.429;1" dur="7s" begin="0s" repeatCount="indefinite" />
              </circle>
              
              {/* Particle 7 - Diagonal Top Right - starts at 0.2s, path takes ~2s, arrives at 2.2s */}
              <circle r="4" fill="#60a5fa" opacity="0" filter="url(#glowPathStrong)">
                <animateMotion dur="7s" begin="0s" repeatCount="indefinite" keyPoints="1;1;0;0" keyTimes="0;0.029;0.314;1" calcMode="linear">
                  <mpath xlinkHref="#wire-diagonal-top-right" />
                </animateMotion>
                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.029;0.17;0.314;1" dur="7s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.029;0.06;0.27;0.314;1" dur="7s" begin="0s" repeatCount="indefinite" />
              </circle>
              
              {/* Particle 8 - Diagonal Top Left - starts at 0.7s, path takes ~2s, arrives at 2.7s */}
              <circle r="4" fill="#a78bfa" opacity="0" filter="url(#glowPathStrong)">
                <animateMotion dur="7s" begin="0s" repeatCount="indefinite" keyPoints="1;1;0;0" keyTimes="0;0.1;0.386;1" calcMode="linear">
                  <mpath xlinkHref="#wire-diagonal-top-left" />
                </animateMotion>
                <animate attributeName="r" values="3;3;5;3;3" keyTimes="0;0.1;0.24;0.386;1" dur="7s" begin="0s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0;0;1;1;0;0" keyTimes="0;0.1;0.14;0.33;0.386;1" dur="7s" begin="0s" repeatCount="indefinite" />
              </circle>
            </g>

            {/* Center Core - Starts dark, glows when first particle arrives and stays glowing */}
            {/* First particle arrives at 3.4s (0.486 of 7s cycle) */}
            {/* Outer Energy Burst - triggers when first particle arrives, stays glowing */}
            <circle cx="400" cy="400" r="22" fill="url(#energyCoreGradient)" opacity="0">
              <animate attributeName="r" values="22;45;45;90;90" keyTimes="0;0.486;0.7;0.85;1" dur="7s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.35;0.35;0.8;0.8" keyTimes="0;0.486;0.7;0.85;1" dur="7s" repeatCount="indefinite" />
            </circle>
            
            {/* Middle Energy Ring */}
            <circle cx="400" cy="400" r="12" fill="rgba(14,165,233,0.4)" opacity="0">
              <animate attributeName="r" values="12;18;18;45;45" keyTimes="0;0.486;0.7;0.84;1" dur="7s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0;0.45;0.45;1;1" keyTimes="0;0.486;0.7;0.84;1" dur="7s" repeatCount="indefinite" />
            </circle>
            
            {/* Center Core Node - Starts dark, glows when energy arrives and stays glowing */}
            <circle cx="400" cy="400" r="8" fill="#0ea5e9" filter="url(#glowPathStrong)" opacity="0">
              <animate attributeName="r" values="8;12;12;24;24" keyTimes="0;0.486;0.7;0.86;1" dur="7s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="0;0.6;0.6;1;1" keyTimes="0;0.486;0.7;0.86;1" dur="7s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* Floating Feature Cards in Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block">
          {/* Top Left Card */}
          <div className="absolute top-20 left-8 md:left-16 w-52 md:w-64 bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-md rounded-2xl p-5 border border-slate-700/50 shadow-2xl shadow-blue-500/5 opacity-70 hover:opacity-90 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 shadow-lg shadow-blue-500/10">
                <Code className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-base font-semibold mb-1">IT Solutions</div>
                <div className="text-slate-400 text-xs leading-relaxed">ERP, CRM & Web Development</div>
              </div>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="absolute top-32 right-8 md:right-16 w-52 md:w-64 bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-md rounded-2xl p-5 border border-slate-700/50 shadow-2xl shadow-green-500/5 opacity-70 hover:opacity-90 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20 shadow-lg shadow-green-500/10">
                <Rocket className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-base font-semibold mb-1">Startup Support</div>
                <div className="text-slate-400 text-xs leading-relaxed">Registration & Funding</div>
              </div>
            </div>
          </div>

        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Premium Badge */}
          <div className="mb-6 md:mb-8 inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-gradient-to-r from-blue-600/20 via-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
            <span className="text-xs md:text-sm font-semibold text-blue-300 tracking-wide">IT Solutions & Startup Support</span>
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
          </div>
          
          <h1
            ref={titleRef}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-6 md:mb-8 text-white tracking-tight px-2"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f1f5f9 40%, #e2e8f0 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 60px rgba(59, 130, 246, 0.4))',
            }}
          >
            <span className="relative inline-block">
              Data Scube
              <Sparkle className="absolute -top-1 -right-4 md:-top-2 md:-right-8 w-4 h-4 md:w-6 md:h-6 text-blue-400 opacity-60 animate-pulse" />
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-slate-200 mb-4 md:mb-6 max-w-4xl mx-auto font-semibold leading-tight tracking-wide px-4"
          >
            Complete{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent font-bold">
                IT Solutions
            </span>
              <Infinity className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 text-blue-400 opacity-50" />
            </span>
            {' '}&{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-green-400 via-emerald-400 to-blue-400 bg-clip-text text-transparent font-bold">
                Startup Support
            </span>
              <Infinity className="absolute -bottom-1 md:-bottom-2 left-0 w-full h-0.5 md:h-1 text-green-400 opacity-50" />
            </span>
            {' '}for your business
          </p>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            From ERP, CRM, website development to company registration, certifications, and funding support - everything you need to launch, grow, and scale your business successfully
          </p>

          {/* Premium Feature Icons */}
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-8 mb-8 md:mb-12 px-4">
            <div className="flex items-center gap-2 md:gap-3 bg-slate-800/40 backdrop-blur-sm px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-xl border border-slate-700/50 shadow-lg">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                <Code className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              </div>
              <span className="text-slate-300 font-medium text-xs md:text-sm">IT & Digital Solutions</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-slate-800/40 backdrop-blur-sm px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-xl border border-slate-700/50 shadow-lg">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-lg flex items-center justify-center border border-green-500/20">
                <Rocket className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
              </div>
              <span className="text-slate-300 font-medium text-xs md:text-sm">Startup Support</span>
            </div>
            <div className="flex items-center gap-2 md:gap-3 bg-slate-800/40 backdrop-blur-sm px-3 md:px-4 lg:px-6 py-2 md:py-3 rounded-xl border border-slate-700/50 shadow-lg">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
                <Award className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
              </div>
              <span className="text-slate-300 font-medium text-xs md:text-sm">Expert Team</span>
            </div>
          </div>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4">
            <button
              onClick={() => router.push('/contact')}
              className="group relative w-full sm:w-auto px-6 md:px-10 py-3 md:py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-base md:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                Get Free Consultation
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <button
              onClick={() => router.push('/services')}
              className="w-full sm:w-auto px-6 md:px-10 py-3 md:py-5 bg-slate-800/60 hover:bg-slate-700/60 backdrop-blur-sm text-white text-base md:text-lg font-semibold rounded-xl border-2 border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View All Services
            </button>
          </div>

          {/* Key Value Propositions */}
          <div className="mt-12 md:mt-16 lg:mt-20 max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
              <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/30 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-emerald-500/70 transition-all duration-500 shadow-2xl hover:shadow-emerald-500/20 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/0 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-600/30 to-emerald-500/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 border-2 border-emerald-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-emerald-500/20 mx-auto md:mx-0">
                    <TrendingUp className="w-7 h-7 md:w-8 md:h-8 text-emerald-400" />
                  </div>
                  <div className="text-white text-base md:text-lg font-bold mb-2 md:mb-3 group-hover:text-emerald-300 transition-colors text-center md:text-left">Proven Results</div>
                  <div className="text-slate-400 text-xs md:text-sm leading-relaxed group-hover:text-slate-300 transition-colors text-center md:text-left flex-grow">40% average efficiency increase across all implementations</div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Award className="w-5 h-5 text-emerald-400" />
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/30 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-amber-500/70 transition-all duration-500 shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600/0 to-amber-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-600/30 to-amber-500/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 border-2 border-amber-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-amber-500/20 mx-auto md:mx-0">
                    <Clock className="w-7 h-7 md:w-8 md:h-8 text-amber-400" />
                  </div>
                  <div className="text-white text-base md:text-lg font-bold mb-2 md:mb-3 group-hover:text-amber-300 transition-colors text-center md:text-left">Fast Delivery</div>
                  <div className="text-slate-400 text-xs md:text-sm leading-relaxed group-hover:text-slate-300 transition-colors text-center md:text-left flex-grow">Rapid deployment with 24/7 support and continuous optimization</div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Zap className="w-5 h-5 text-amber-400" />
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/30 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-slate-700/50 hover:border-rose-500/70 transition-all duration-500 shadow-2xl hover:shadow-rose-500/20 hover:-translate-y-2 overflow-hidden flex flex-col h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-600/0 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-rose-600/30 to-rose-500/20 rounded-2xl flex items-center justify-center mb-4 md:mb-6 border-2 border-rose-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-rose-500/20 mx-auto md:mx-0">
                    <MessageSquare className="w-7 h-7 md:w-8 md:h-8 text-rose-400" />
                  </div>
                  <div className="text-white text-base md:text-lg font-bold mb-2 md:mb-3 group-hover:text-rose-300 transition-colors text-center md:text-left">Expert Support</div>
                  <div className="text-slate-400 text-xs md:text-sm leading-relaxed group-hover:text-slate-300 transition-colors text-center md:text-left flex-grow">Dedicated team of 50+ experts ready to assist your business growth</div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Users className="w-5 h-5 text-rose-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center text-slate-500">
            <span className="text-sm mb-2">Scroll</span>
            <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-16 sm:py-20 md:py-24 lg:py-28 relative z-10 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 fade-in-section">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-widest uppercase">Our Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-5">
                Transform Your Business
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto font-light px-4">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div
                key={index}
                  className="service-card group cursor-pointer"
                onClick={() => router.push(service.link)}
              >
                  <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20 h-full flex flex-col overflow-hidden">
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                    <div className="mb-6 flex justify-center">
                        <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                          <IconComponent className="w-10 h-10 text-white" />
                      </div>
                    </div>
                      <h3 className="text-3xl font-bold text-white mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                      {service.title}
                    </h3>
                      <p className="text-slate-300 leading-relaxed mb-6 flex-grow text-center">
                      {service.description}
                    </p>
                      <div className="mb-6 space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-300 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                      <div className="flex items-center justify-center text-blue-400 font-semibold group-hover:text-blue-300 group-hover:gap-2 transition-all pt-6 border-t border-slate-700/50">
                        <span>Explore Services</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                    </div>
                    
                    {/* Bottom gradient line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Data Scube Section */}
      <section className="features-section py-24 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Data Scube
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Delivering excellence through innovation, quality, and dedicated service
            </p>
          </div>
          
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              const colors = [
                'from-blue-500 to-cyan-500',
                'from-green-500 to-emerald-500',
                'from-purple-500 to-pink-500',
                'from-orange-500 to-red-500',
              ];
                return (
              <div
                key={index}
                  className="feature-card group bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 transform hover:-translate-y-2"
              >
                    <div className="mb-6 flex justify-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors[index]} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {feature.title}
                      </h3>
                  <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {feature.description}
                  </p>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* Vision Short Intro Section */}
      <section className="py-20 relative z-10 bg-slate-950/90">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 fade-in-section">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700/60 bg-slate-900/60 text-blue-300 text-sm font-semibold">
              <Sparkle className="w-4 h-4" />
              Our Vision
          </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Empowering businesses with technology and startup support to achieve sustainable growth.
                      </h3>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>We provide comprehensive IT solutions (ERP, CRM, websites, apps) and complete startup support (registration, certifications, funding) to help businesses thrive.</p>
              <p>Our vision is to be the one-stop solution for businesses - from startups needing registration and funding support to enterprises requiring advanced technology solutions.</p>
              <p>We combine cutting-edge technology with expert business consulting to ensure your success at every stage of growth.</p>
                    </div>
            <button
              onClick={() => router.push('/about')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold shadow-lg hover:shadow-blue-500/40 transition-all duration-300 hover:translate-y-[-2px]"
            >
              Read More
              <ArrowRight className="w-5 h-5" />
            </button>
                      </div>
          <div className="flex-1 w-full">
            <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700/60 p-10 overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-transparent opacity-80"></div>
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-blue-400 mb-2">01</div>
                  <p className="text-slate-200 font-semibold">Collaborative discovery workshops</p>
                    </div>
                <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-cyan-400 mb-2">02</div>
                  <p className="text-slate-200 font-semibold">Experience-led design systems</p>
            </div>
                <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-purple-400 mb-2">03</div>
                  <p className="text-slate-200 font-semibold">Modern scalable architectures</p>
          </div>
                <div className="bg-slate-900/70 border border-slate-700/60 rounded-2xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-emerald-400 mb-2">04</div>
                  <p className="text-slate-200 font-semibold">Continuous improvement & support</p>
        </div>
          </div>
              <div className="absolute -bottom-20 -right-16 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>
                    </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-24 relative z-10 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="fade-in-section flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
              <p className="text-xl text-slate-400 max-w-2xl">
                Trusted by businesses worldwide for delivering exceptional IT solutions and startup support
              </p>
            </div>
            <div className="hidden md:flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handlePrevTestimonial}
                className="p-3 rounded-full border border-slate-700/50 text-slate-300 hover:border-blue-500/60 hover:text-blue-300 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm font-medium text-slate-400">
                {currentTestimonialSlide + 1} / {totalTestimonialSlides}
              </span>
              <button
                type="button"
                onClick={handleNextTestimonial}
                className="p-3 rounded-full border border-slate-700/50 text-slate-300 hover:border-blue-500/60 hover:text-blue-300 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
                    </div>
                    
          {/* Mobile: Horizontal scroll, Desktop: Grid */}
          <div className="md:grid md:grid-cols-2 md:gap-8 md:max-w-6xl md:mx-auto">
            {/* Mobile horizontal scroll container */}
            <div className="md:hidden overflow-x-auto pb-4 -mx-6 px-6 custom-scrollbar" style={{ scrollbarWidth: 'thin' }}>
              <div className="flex gap-4" style={{ width: 'max-content' }}>
                {testimonials.map((testimonial, index) => (
                  <div
                    key={`${testimonial.name}-${index}`}
                    className="testimonial-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 flex-shrink-0"
                    style={{ width: 'calc(100vw - 3rem)', maxWidth: '400px' }}
                  >
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        testimonial.category === 'Startup Support' 
                          ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                      }`}>
                        {testimonial.category}
                      </span>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                    <div>
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-slate-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Desktop grid layout */}
            <div className="hidden md:contents">
              {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                className="testimonial-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${
                    testimonial.category === 'Startup Support' 
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                  }`}>
                    {testimonial.category}
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                    </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="pt-4 border-t border-slate-700/50">
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned to match UI */}
      <section className="py-16 sm:py-20 md:py-24 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 border border-slate-700/50 shadow-xl fade-in-section">
              <div className="text-center">
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-blue-600/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-400" />
                  </div>
                </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Ready to Transform Your Business?
            </h2>
                <p className="text-base sm:text-lg md:text-xl text-slate-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  Let's discuss how our solutions can help you achieve your business goals and drive sustainable growth
            </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push('/contact')}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white text-base sm:text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Get In Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => router.push('/services')}
                    className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-slate-700 hover:bg-slate-600 text-white text-base sm:text-lg font-semibold rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300"
                  >
                    View Services
            </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="footer-wrapper-home-about">
        <Footer />
      </div>
    </div>
  );
}
