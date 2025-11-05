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
  Cpu, Brain, Sparkle, Stars, Infinity, Network, Workflow, Boxes, GitBranch, Gauge
} from 'lucide-react';

// GSAP plugin is registered globally in gsapOptimizations

const features = [
  {
    icon: Brain,
    title: 'AI-Powered',
    description: 'Intelligent automation and machine learning that adapts to your business needs',
  },
  {
    icon: Workflow,
    title: 'Agentic Systems',
    description: 'Autonomous agents that handle complex workflows and decision-making processes',
  },
  {
    icon: Boxes,
    title: 'Microservices',
    description: 'Modular architecture for flexibility, scalability, and independent deployment',
  },
  {
    icon: Network,
    title: 'Cloud Native',
    description: 'Built for the cloud with containerization and orchestration capabilities',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, compliance, and advanced threat protection',
  },
  {
    icon: Gauge,
    title: 'High Performance',
    description: 'Optimized for speed with real-time processing and low-latency responses',
  },
  {
    icon: GitBranch,
    title: 'DevOps Ready',
    description: 'CI/CD pipelines, automated testing, and continuous deployment integration',
  },
  {
    icon: Database,
    title: 'Data Intelligence',
    description: 'Advanced analytics, data lakes, and business intelligence capabilities',
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
    <div ref={pageRef} className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <Header />

      {/* Hero Section - Enhanced */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-20 px-4"
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

        {/* Enhanced Gradient Orbs with Animation */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-gradient-to-tr from-cyan-500/12 via-blue-600/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-gradient-to-r from-indigo-600/10 to-purple-600/8 rounded-full blur-3xl"></div>

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
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          {/* Premium Badge */}
          <div className="mb-6 sm:mb-10 inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600/15 via-cyan-600/15 to-blue-600/15 backdrop-blur-xl rounded-full border border-blue-400/30 shadow-xl shadow-blue-500/20">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-xs sm:text-sm font-bold bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent tracking-wider uppercase">Enterprise Solutions</span>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          </div>
          
          <h1
            ref={titleRef}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black mb-4 sm:mb-6 md:mb-8 tracking-tight leading-none"
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
              <Sparkle className="hidden sm:block absolute -top-4 -right-10 w-6 sm:w-8 h-6 sm:h-8 text-blue-400 opacity-70 animate-pulse" />
            </span>
          </h1>
          
          <p
            ref={subtitleRef}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-slate-100 mb-4 sm:mb-6 md:mb-8 max-w-4xl mx-auto font-bold leading-tight tracking-wide"
          >
            Enterprise solutions that{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent font-black">
                transform
            </span>
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-60"></div>
            </span>
            {' '}your business
          </p>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-8 sm:mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed font-light px-4">
            Comprehensive ERP, CRM, and web development services designed to scale with your business and drive sustainable growth
          </p>

          {/* Premium Feature Icons */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16">
            <div className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-blue-500/50 shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-br from-blue-600/30 to-blue-500/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
                <Layers className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-blue-400" />
              </div>
              <span className="text-xs sm:text-sm md:text-base text-slate-200 font-semibold">Scalable Solutions</span>
            </div>
            <div className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 shadow-xl hover:shadow-cyan-500/20 transition-all duration-300">
              <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-br from-cyan-600/30 to-cyan-500/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                <Cpu className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-cyan-400" />
              </div>
              <span className="text-xs sm:text-sm md:text-base text-slate-200 font-semibold">High Performance</span>
            </div>
            <div className="group flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-slate-800/50 to-slate-800/30 backdrop-blur-xl px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border border-slate-700/50 hover:border-purple-500/50 shadow-xl hover:shadow-purple-500/20 transition-all duration-300">
              <div className="w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 bg-gradient-to-br from-purple-600/30 to-purple-500/20 rounded-lg sm:rounded-xl flex items-center justify-center border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-purple-400" />
              </div>
              <span className="text-xs sm:text-sm md:text-base text-slate-200 font-semibold">AI-Powered</span>
            </div>
          </div>
          
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center">
            <button
              onClick={() => router.push('/contact')}
              className="group relative w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105"
            >
              {/* Animated gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
              
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              
              <span className="relative z-10 flex items-center justify-center gap-2">
                Get Started Now
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </button>
            <button
              onClick={() => router.push('/services')}
              className="group w-full sm:w-auto px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-xl text-white text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl border-2 border-slate-700/50 hover:border-blue-500/60 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
            >
              Explore Services
            </button>
          </div>

          {/* Quick Service Preview */}
          <div className="mt-12 sm:mt-16 md:mt-20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-blue-500/70 transition-all duration-500 shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-blue-600/30 to-blue-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border-2 border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/20">
                    <BarChart3 className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-400" />
                  </div>
                  <div className="text-white text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors">ERP Solutions</div>
                  <div className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-300 transition-colors">Streamline Operations</div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Stars className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-cyan-500/70 transition-all duration-500 shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 to-cyan-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-cyan-600/30 to-cyan-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border-2 border-cyan-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-cyan-500/20">
                    <Users className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-cyan-400" />
                  </div>
                  <div className="text-white text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-cyan-300 transition-colors">CRM Systems</div>
                  <div className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-300 transition-colors">Boost Customer Relations</div>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Stars className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <div className="group relative bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-purple-500/70 transition-all duration-500 shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 overflow-hidden sm:col-span-2 md:col-span-1">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-purple-600/30 to-purple-500/20 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 border-2 border-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-purple-500/20">
                    <Globe className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-purple-400" />
                  </div>
                  <div className="text-white text-base sm:text-lg font-bold mb-2 sm:mb-3 group-hover:text-purple-300 transition-colors">Web Development</div>
                  <div className="text-slate-400 text-xs sm:text-sm leading-relaxed group-hover:text-slate-300 transition-colors">Modern Applications</div>
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
      <section className="features-section py-16 sm:py-20 md:py-24 lg:py-28 relative z-10 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 fade-in-section">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-widest uppercase">Core Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-5">
              Why Choose Us
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light px-4">
              Delivering excellence through innovation, quality, and dedicated service
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
              <div
                key={index}
                  className="feature-card group bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-slate-700/50 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1"
                >
                  <div className="mb-8 flex justify-center">
                    <div className="w-14 sm:w-16 md:w-20 h-14 sm:h-16 md:h-20 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl sm:rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/20">
                      <IconComponent className="w-7 sm:w-8 md:w-10 h-7 sm:h-8 md:h-10 text-blue-400" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors">
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div
                key={index}
                  className="service-card group cursor-pointer"
                onClick={() => router.push(service.link)}
              >
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border-2 border-slate-700/50 hover:border-blue-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 h-full flex flex-col">
                    <div className="mb-5 sm:mb-6 md:mb-8 flex justify-center">
                      <div className="w-16 sm:w-18 md:w-20 h-16 sm:h-18 md:h-20 bg-gradient-to-br from-blue-600 to-cyan-600 p-[2px] rounded-xl sm:rounded-2xl shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <div className="w-full h-full bg-slate-950 rounded-2xl flex items-center justify-center">
                          <IconComponent className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 text-white" />
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4 group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 sm:mb-8 flex-grow">
                      {service.description}
                    </p>
                    <div className="mb-6 sm:mb-8 space-y-2 sm:space-y-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-slate-200 text-sm sm:text-base">
                          <div className="w-5 h-5 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                            <CheckCircle2 className="w-3 h-3 text-white" />
                          </div>
                          <span className="font-medium text-sm sm:text-base">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-400 font-bold group-hover:gap-3 transition-all pt-6 border-t border-slate-700/50">
                      <span>Discover More</span>
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Enhanced */}
      <section className="process-section py-16 sm:py-20 md:py-24 lg:py-28 relative z-10 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 lg:mb-20 fade-in-section">
            <div className="inline-block mb-4">
              <span className="text-sm font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent tracking-widest uppercase">Our Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 md:mb-5">
              How We Work
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-light px-4">
              A proven methodology that ensures successful project delivery
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {processSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div key={index} className="process-step group relative">
                    <div className="bg-gradient-to-br from-slate-800/60 to-slate-800/30 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-700/50 hover:border-blue-500/60 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-1">
                      <div className="mb-4 sm:mb-6">
                        <div className="text-4xl sm:text-5xl font-black text-blue-400/20 mb-3 sm:mb-4">{step.number}</div>
                        <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-xl sm:rounded-2xl flex items-center justify-center border border-blue-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-blue-500/20">
                          <IconComponent className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-blue-400" />
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-blue-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                        {step.description}
                      </p>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 items-center justify-center z-10">
                        <div className="w-8 h-8 bg-slate-800/50 rounded-full flex items-center justify-center border border-blue-500/30">
                          <ArrowRight className="w-5 h-5 text-blue-400" />
                        </div>
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
      <section className="py-16 sm:py-20 md:py-24 relative z-10 bg-slate-900/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-10 md:mb-12 fade-in-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              Technologies We Use
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              Built with modern, reliable technologies
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 text-center"
                >
                  <div className="text-white font-medium text-sm sm:text-base">{tech.name}</div>
                  <div className="text-slate-500 text-xs mt-1">{tech.category}</div>
                      </div>
              ))}
                    </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section py-16 sm:py-20 md:py-24 relative z-10 bg-slate-950">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12 md:mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              What Our Clients Say
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto px-4">
              Trusted by businesses worldwide for delivering exceptional results
                      </p>
                    </div>
                    
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="testimonial-card bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                    </div>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="text-white font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
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
