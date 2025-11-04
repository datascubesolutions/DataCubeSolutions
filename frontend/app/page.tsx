'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Footer from './components/Footer';
import { 
  Rocket, Briefcase, Zap, Lock, Users, Target, User, Star, BarChart3, Globe, 
  ArrowRight, CheckCircle2, Search, Code, Database, Cloud, Shield, TrendingUp,
  MessageSquare, Star as StarIcon, Clock, Award, ChevronRight, Sparkles, Layers,
  Cpu, Brain, Sparkle, Stars, Infinity
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const features = [
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Cutting-edge solutions that drive business growth and competitive advantage',
  },
  {
    icon: Briefcase,
    title: 'Enterprise Ready',
    description: 'Scalable solutions designed for businesses of all sizes, from startups to enterprises',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimized for speed, efficiency, and seamless user experience',
  },
  {
    icon: Lock,
    title: 'Security',
    description: 'Enterprise-grade security protocols ensuring your data remains protected',
  },
];

const stats = [
  { number: '500+', label: 'Happy Clients', icon: Users },
  { number: '1000+', label: 'Projects Completed', icon: Target },
  { number: '50+', label: 'Expert Team Members', icon: User },
  { number: '10+', label: 'Years of Experience', icon: Star },
];

const services = [
  {
    title: 'ERP Solutions',
    description: 'Comprehensive enterprise resource planning systems that streamline operations, optimize resource allocation, and provide real-time insights into your business processes.',
    features: ['Financial Management', 'Inventory Control', 'Supply Chain', 'HR Management'],
    icon: BarChart3,
    link: '/services/erp',
  },
  {
    title: 'CRM Systems',
    description: 'Advanced customer relationship management platforms that enhance customer engagement, automate sales processes, and drive revenue growth through data-driven insights.',
    features: ['Sales Automation', 'Customer Analytics', 'Marketing Tools', 'Support Integration'],
    icon: Users,
    link: '/services/crm',
  },
  {
    title: 'Web Development',
    description: 'Modern, responsive web applications built with cutting-edge technologies, designed for scalability, performance, and exceptional user experience.',
    features: ['Custom Solutions', 'E-commerce Platforms', 'API Integration', 'Cloud Deployment'],
    icon: Globe,
    link: '/services/web-development',
  },
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'We analyze your business needs, goals, and requirements to create a comprehensive strategy.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design & Development',
    description: 'Our expert team designs and builds custom solutions tailored to your specific requirements.',
    icon: Code,
  },
  {
    number: '03',
    title: 'Testing & Quality Assurance',
    description: 'Rigorous testing ensures your solution meets the highest standards of quality and performance.',
    icon: Shield,
  },
  {
    number: '04',
    title: 'Deployment & Support',
    description: 'Seamless deployment followed by ongoing support and optimization to ensure continued success.',
    icon: Cloud,
  },
];

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Next.js', category: 'Framework' },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp Inc.',
    content: 'Data Scube transformed our operations with their ERP solution. Efficiency increased by 40% and we\'ve seen significant cost savings.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Director of Sales, Growth Solutions',
    content: 'The CRM system they built has revolutionized our customer management. Our sales team productivity has doubled.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Digital Innovations',
    content: 'Their web development team delivered an exceptional e-commerce platform. The results exceeded our expectations.',
    rating: 5,
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

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen w-full bg-slate-950">
      <Header />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        
        {/* Enhanced Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-80 h-80 bg-indigo-600/8 rounded-full blur-3xl"></div>

        {/* Small Chip with Irregular Glowing Connections - Center Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[320px] md:h-[320px] pointer-events-none z-0">
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
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-500 to-blue-500 rounded-full blur-md opacity-60 animate-pulse"></div>
                  <div className="absolute inset-1 bg-gradient-to-br from-blue-400 via-cyan-400 to-blue-400 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)]"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[8px] md:text-[10px] font-mono font-bold text-white">PWR</div>
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
            </defs>

            {/* Irregular Paths - Long Tentacle-like Connections */}
            {/* Path 1 - Top Right Tentacle */}
            <path
              d="M 400 400 Q 450 350, 500 280 Q 520 200, 550 120 Q 570 80, 600 60"
              stroke="url(#pathGradient1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.7"
              className="animate-pulse"
            >
              <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
            </path>

            {/* Path 2 - Top Left Tentacle */}
            <path
              d="M 400 400 Q 350 350, 300 280 Q 280 200, 250 120 Q 230 80, 200 60"
              stroke="url(#pathGradient2)"
              strokeWidth="3"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.7"
              style={{ animationDelay: '0.5s' }}
            >
              <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
            </path>

            {/* Path 3 - Bottom Right Tentacle */}
            <path
              d="M 400 400 Q 450 450, 500 520 Q 520 600, 550 680 Q 570 720, 600 740"
              stroke="url(#pathGradient1)"
              strokeWidth="3"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.7"
              style={{ animationDelay: '1s' }}
            >
              <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
            </path>

            {/* Path 4 - Bottom Left Tentacle */}
            <path
              d="M 400 400 Q 350 450, 300 520 Q 280 600, 250 680 Q 230 720, 200 740"
              stroke="url(#pathGradient2)"
              strokeWidth="3"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.7"
              style={{ animationDelay: '1.5s' }}
            >
              <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite"/>
            </path>

            {/* Path 5 - Right Tentacle */}
            <path
              d="M 400 400 Q 480 400, 560 380 Q 640 360, 700 340 Q 720 330, 740 320"
              stroke="url(#pathGradient1)"
              strokeWidth="2.5"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.6"
              style={{ animationDelay: '0.3s' }}
            >
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite"/>
            </path>

            {/* Path 6 - Left Tentacle */}
            <path
              d="M 400 400 Q 320 400, 240 380 Q 160 360, 100 340 Q 80 330, 60 320"
              stroke="url(#pathGradient2)"
              strokeWidth="2.5"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.6"
              style={{ animationDelay: '0.8s' }}
            >
              <animate attributeName="opacity" values="0.6;0.9;0.6" dur="2.5s" repeatCount="indefinite"/>
            </path>

            {/* Path 7 - Diagonal Top Right */}
            <path
              d="M 400 400 Q 450 380, 500 340 Q 550 300, 600 250 Q 620 220, 650 180"
              stroke="url(#pathGradient1)"
              strokeWidth="2"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              style={{ animationDelay: '0.2s' }}
            >
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/>
            </path>

            {/* Path 8 - Diagonal Top Left */}
            <path
              d="M 400 400 Q 350 380, 300 340 Q 250 300, 200 250 Q 180 220, 150 180"
              stroke="url(#pathGradient2)"
              strokeWidth="2"
              fill="none"
              filter="url(#glowPath)"
              opacity="0.5"
              style={{ animationDelay: '0.7s' }}
            >
              <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite"/>
            </path>

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

            {/* Center Power Node */}
            <circle cx="400" cy="400" r="8" fill="#06b6d4" filter="url(#glowPathStrong)" opacity="1">
              <animate attributeName="r" values="8;12;8" dur="1.5s" repeatCount="indefinite"/>
              <animate attributeName="opacity" values="1;1;1" dur="1.5s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>

        {/* Floating Feature Cards in Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top Left Card */}
          <div className="absolute top-20 left-8 md:left-16 w-52 md:w-64 bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-md rounded-2xl p-5 border border-slate-700/50 shadow-2xl shadow-blue-500/5 opacity-70 hover:opacity-90 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/20 shadow-lg shadow-blue-500/10">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-base font-semibold mb-1">Data Management</div>
                <div className="text-slate-400 text-xs leading-relaxed">Secure & Scalable Infrastructure</div>
              </div>
            </div>
          </div>

          {/* Top Right Card */}
          <div className="absolute top-32 right-8 md:right-16 w-52 md:w-64 bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-md rounded-2xl p-5 border border-slate-700/50 shadow-2xl shadow-cyan-500/5 opacity-70 hover:opacity-90 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-600/20 to-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/20 shadow-lg shadow-cyan-500/10">
                <Cloud className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-base font-semibold mb-1">Cloud Solutions</div>
                <div className="text-slate-400 text-xs leading-relaxed">99.9% Uptime Guarantee</div>
              </div>
            </div>
          </div>

          {/* Bottom Left Card */}
          <div className="absolute bottom-32 left-8 md:left-16 w-52 md:w-64 bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-md rounded-2xl p-5 border border-slate-700/50 shadow-2xl shadow-green-500/5 opacity-70 hover:opacity-90 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-600/20 to-green-500/10 rounded-xl flex items-center justify-center border border-green-500/20 shadow-lg shadow-green-500/10">
                <Shield className="w-6 h-6 text-green-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-base font-semibold mb-1">Enterprise Security</div>
                <div className="text-slate-400 text-xs leading-relaxed">ISO 27001 Certified</div>
              </div>
            </div>
          </div>

          {/* Bottom Right Card */}
          <div className="absolute bottom-20 right-8 md:right-16 w-52 md:w-64 bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-md rounded-2xl p-5 border border-slate-700/50 shadow-2xl shadow-purple-500/5 opacity-70 hover:opacity-90 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-xl flex items-center justify-center border border-purple-500/20 shadow-lg shadow-purple-500/10">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>
              <div className="flex-1">
                <div className="text-white text-base font-semibold mb-1">Business Growth</div>
                <div className="text-slate-400 text-xs leading-relaxed">40% Average Increase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-6 text-center relative z-10">
          {/* Premium Badge */}
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 via-cyan-600/20 to-blue-600/20 backdrop-blur-sm rounded-full border border-blue-500/30 shadow-lg">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-300 tracking-wide">Enterprise Solutions</span>
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
          
          <h1
            ref={titleRef}
            className="text-6xl md:text-8xl lg:text-9xl font-extrabold mb-8 text-white tracking-tight"
            style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 80px rgba(59, 130, 246, 0.3)',
            }}
          >
            <span className="relative inline-block">
              Data Scube
              <Sparkle className="absolute -top-2 -right-8 w-6 h-6 text-blue-400 opacity-60 animate-pulse" />
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-2xl md:text-3xl lg:text-4xl text-slate-200 mb-6 max-w-4xl mx-auto font-semibold leading-tight tracking-wide"
          >
            Enterprise solutions that{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-bold">
                transform
            </span>
              <Infinity className="absolute -bottom-2 left-0 w-full h-1 text-blue-400 opacity-50" />
            </span>
            {' '}your business
          </p>
          
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Comprehensive ERP, CRM, and web development services designed to scale with your business and drive sustainable growth
          </p>

          {/* Premium Feature Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12">
            <div className="flex items-center gap-3 bg-slate-800/40 backdrop-blur-sm px-4 md:px-6 py-3 rounded-xl border border-slate-700/50 shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600/20 to-blue-500/10 rounded-lg flex items-center justify-center border border-blue-500/20">
                <Layers className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm">Scalable Solutions</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/40 backdrop-blur-sm px-4 md:px-6 py-3 rounded-xl border border-slate-700/50 shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-600/20 to-cyan-500/10 rounded-lg flex items-center justify-center border border-cyan-500/20">
                <Cpu className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm">High Performance</span>
            </div>
            <div className="flex items-center gap-3 bg-slate-800/40 backdrop-blur-sm px-4 md:px-6 py-3 rounded-xl border border-slate-700/50 shadow-lg">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600/20 to-purple-500/10 rounded-lg flex items-center justify-center border border-purple-500/20">
                <Brain className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-slate-300 font-medium text-sm">AI-Powered</span>
            </div>
          </div>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push('/contact')}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-3 overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
            <button
              onClick={() => router.push('/services')}
              className="px-10 py-5 bg-slate-800/60 hover:bg-slate-700/60 backdrop-blur-sm text-white text-lg font-semibold rounded-xl border-2 border-slate-600/50 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Services
            </button>
          </div>

          {/* Quick Service Preview */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-blue-500/70 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600/30 to-blue-500/20 rounded-2xl flex items-center justify-center mb-6 border-2 border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/20">
                    <BarChart3 className="w-8 h-8 text-blue-400" />
                  </div>
                  <div className="text-white text-lg font-bold mb-3 group-hover:text-blue-300 transition-colors">ERP Solutions</div>
                  <div className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">Streamline Operations</div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Stars className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-cyan-500/70 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-600/30 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 border-2 border-cyan-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-cyan-500/20">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-white text-lg font-bold mb-3 group-hover:text-cyan-300 transition-colors">CRM Systems</div>
                  <div className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">Boost Customer Relations</div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Stars className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/30 backdrop-blur-xl rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/70 transition-all duration-500 shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600/30 to-purple-500/20 rounded-2xl flex items-center justify-center mb-6 border-2 border-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/20">
                    <Globe className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="text-white text-lg font-bold mb-3 group-hover:text-purple-300 transition-colors">Web Development</div>
                  <div className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">Modern Applications</div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Stars className="w-5 h-5 text-purple-400" />
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

      {/* Features Section */}
      <section className="features-section py-24 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Delivering excellence through innovation, quality, and dedicated service
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
              <div
                key={index}
                  className="feature-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section py-24 relative z-10 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
              <div
                key={index}
                  className="text-center fade-in-section"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                  </div>
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section py-24 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Services
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div
                key={index}
                  className="service-card group cursor-pointer"
                onClick={() => router.push(service.link)}
              >
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 h-full flex flex-col">
                    <div className="mb-6 flex justify-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed mb-6 flex-grow">
                      {service.description}
                    </p>
                    <div className="mb-6 space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-300 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-400 font-medium group-hover:gap-2 transition-all pt-4 border-t border-slate-700/50">
                      <span>Learn More</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section py-24 relative z-10 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="process-step relative">
                    <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 h-full">
                      <div className="mb-4">
                        <div className="text-4xl font-bold text-blue-400/20 mb-2">{step.number}</div>
                        <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                          <IconComponent className="w-6 h-6 text-blue-400" />
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {step.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                        <ChevronRight className="w-6 h-6 text-blue-400/30" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technologies We Use
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Built with modern, reliable technologies
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="text-white font-medium">{tech.name}</div>
                  <div className="text-slate-500 text-xs mt-1">{tech.category}</div>
                      </div>
              ))}
                    </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-24 relative z-10 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Trusted by businesses worldwide for delivering exceptional results
                      </p>
                    </div>
                    
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                    </div>
                <p className="text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Redesigned to match UI */}
      <section className="py-24 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 shadow-xl fade-in-section">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-blue-600/10 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-blue-400" />
                  </div>
                </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
                <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our solutions can help you achieve your business goals and drive sustainable growth
            </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => router.push('/contact')}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                  >
                    Get In Touch
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={() => router.push('/services')}
                    className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white text-lg font-semibold rounded-lg border border-slate-600 hover:border-slate-500 transition-all duration-300"
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
