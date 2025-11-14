'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  BarChart3, 
  Users, 
  Briefcase, 
  Package, 
  FolderKanban,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Rocket,
  MonitorSmartphone,
  CircuitBoard,
  Award,
  DollarSign,
  FileText,
  Code,
  Building2,
  TrendingUp,
  Lightbulb,
  Globe,
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// IT & Digital Solutions
const itSolutions = [
  {
    id: 1,
    title: 'ERP System for Businesses',
    description: 'Comprehensive Enterprise Resource Planning system to streamline operations, manage resources, and boost productivity across all departments.',
    icon: BarChart3,
    color: 'from-blue-500 to-cyan-500',
    features: ['Financial Management', 'Supply Chain', 'Inventory Control', 'Multi-location Support'],
  },
  {
    id: 2,
    title: 'Sales CRM',
    description: 'Powerful Customer Relationship Management solution to track leads, manage sales pipeline, and enhance customer engagement.',
    icon: Users,
    color: 'from-purple-500 to-pink-500',
    features: ['Lead Management', 'Sales Pipeline', 'Customer Analytics', 'Automation'],
  },
  {
    id: 3,
    title: 'HR & Payroll System',
    description: 'Complete Human Resources and Payroll management system for employee data, attendance, payroll processing, and compliance.',
    icon: Briefcase,
    color: 'from-orange-500 to-red-500',
    features: ['Employee Management', 'Payroll Processing', 'Attendance Tracking', 'Compliance'],
  },
  {
    id: 4,
    title: 'Inventory & Billing',
    description: 'Advanced inventory management and billing system to track stock, manage orders, and generate invoices efficiently.',
    icon: Package,
    color: 'from-green-500 to-emerald-500',
    features: ['Stock Management', 'Order Processing', 'Invoice Generation', 'Reports'],
  },
  {
    id: 5,
    title: 'Project Management Tool',
    description: 'Comprehensive project management solution to plan, track, and deliver projects on time with team collaboration features.',
    icon: FolderKanban,
    color: 'from-indigo-500 to-purple-500',
    features: ['Task Management', 'Team Collaboration', 'Time Tracking', 'Progress Reports'],
  },
];

const itServices = [
  {
    category: 'Website & E-Commerce',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    services: [
      'Website Development',
      'E-Commerce Website',
      'Web Application Development',
      'Mobile App Design & Development',
    ],
  },
  {
    category: 'Software Development',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    services: [
      'Software Development',
      'CRM Development',
      'ERP Development',
      'Product Development',
    ],
  },
  {
    category: 'Digital Marketing',
    icon: TrendingUp,
    color: 'from-orange-500 to-red-500',
    services: [
      'SEO Services',
      'Branding Services',
      'Social Promotion Management',
      'Email Marketing',
      'Digital Content',
      'Lead Generation',
      'Whatsapp Marketing',
      'Complete Digital Marketing',
    ],
  },
];

// Startup Support & Consulting
const startupSupportServices = [
  {
    category: 'Certification Services',
    icon: Award,
    color: 'from-green-500 to-emerald-500',
    services: [
      'Start-Up India Certificate',
      'ISO Certificate',
      'MSME/Udyam Certificate',
      'GST Certificate',
      'IEC CODE Certificate',
      'FSSAI Certificate',
      'APEDA Certificate',
      'BIS Certificate',
      'NSIC Certificate',
    ],
  },
  {
    category: 'Fund Raising Support Services',
    icon: DollarSign,
    color: 'from-blue-500 to-purple-500',
    services: [
      'Seed Funding Support',
      'I-Create Pro Fund',
      'Nidhi Prayash Yojna',
      'Nidhi Seed Support Scheme',
      'Raftaar',
      'MSME Hackathon',
      'USAID Funding',
      'DBS Grant',
      'Gujarat Grant',
      'CSR Funding',
      'Angel Funding Support',
      'VC Funding Support',
      'Crowd Funding Support',
      'StandUp India',
      'CGTMSC',
    ],
  },
  {
    category: 'Documentation Services',
    icon: FileText,
    color: 'from-pink-500 to-rose-500',
    services: [
      'Pitch Deck Development',
      'Financial Modeling',
      'DPR Development',
      'CMA Report Development',
      'Company Profile',
      'Company Brochure',
      'Product Catalog',
    ],
  },
  {
    category: 'Registration Services',
    icon: Building2,
    color: 'from-indigo-500 to-purple-500',
    services: [
      'Sole Proprietorship Registration',
      'Partnership Firm Registration',
      'LLP Firm Registration',
      'Private Limited Registration',
      'Public Company Registration',
      'Nidhi Company Registration',
      'Producer Company Registration',
    ],
  },
];

const solutionPackages = [
  {
    title: 'Startup Growth Packages',
    description: 'Combine registration, documentation & funding support for your startup in one package.',
    icon: Rocket,
    color: 'from-blue-500 to-purple-500',
    category: 'Startup Support',
    services: [
      'Company Registration (LLP/Private Limited)',
      'Startup India & MSME Certification',
      'Pitch Deck & DPR Development',
      'Financial Modeling & CMA Reports',
      'Seed Funding & Grant Support',
      'GST & Compliance Setup',
    ],
  },
  {
    title: 'Digital Transformation Suite',
    description: 'Full digital setup — from website, branding to automation tools (CRM/ERP).',
    icon: MonitorSmartphone,
    color: 'from-cyan-500 to-emerald-500',
    category: 'IT & Digital',
    services: [
      'Website & E-Commerce Development',
      'Mobile App Design & Development',
      'Branding & Digital Marketing',
      'CRM & ERP Implementation',
      'SEO & Lead Generation',
      'Social Media Management',
    ],
  },
  {
    title: 'Enterprise Automation',
    description: 'ERP and CRM integration to manage clients, invoices, HR & operations in one dashboard.',
    icon: CircuitBoard,
    color: 'from-orange-500 to-red-500',
    category: 'IT & Digital',
    services: [
      'Unified ERP & CRM Dashboard',
      'Automated Invoice & Billing',
      'HR & Payroll Automation',
      'Inventory & Supply Chain',
      'Real-time Analytics & Reports',
      'Cloud Integration & API Setup',
    ],
  },
];

const caseStudies = [
  {
    company: 'TechCorp Industries',
    industry: 'Manufacturing',
    challenge: 'Inefficient inventory management and delayed order processing',
    solution: 'Implemented ERP System with integrated Inventory & Billing',
    result: '40% reduction in order processing time, 30% inventory cost savings',
    icon: CheckCircle2,
    category: 'IT & Digital',
  },
  {
    company: 'SalesForce Pro',
    industry: 'Sales & Marketing',
    challenge: 'Lost leads and poor customer relationship tracking',
    solution: 'Deployed Sales CRM with automation and analytics',
    result: '50% increase in lead conversion, 35% improvement in customer retention',
    icon: CheckCircle2,
    category: 'IT & Digital',
  },
  {
    company: 'StartupXYZ',
    industry: 'Technology Startup',
    challenge: 'Needed funding and proper documentation for investor pitches',
    solution: 'Provided certification, pitch deck development, and funding support',
    result: 'Successfully raised seed funding, achieved Startup India recognition',
    icon: CheckCircle2,
    category: 'Startup Support',
  },
];

const integrationPartners = [
  { name: 'Razorpay', logo: '/api/placeholder/150/60' },
  { name: 'Twilio', logo: '/api/placeholder/150/60' },
  { name: 'AWS', logo: '/api/placeholder/150/60' },
  { name: 'Stripe', logo: '/api/placeholder/150/60' },
  { name: 'SendGrid', logo: '/api/placeholder/150/60' },
  { name: 'Google Cloud', logo: '/api/placeholder/150/60' },
];

export default function SolutionsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    // Detect mobile/touch device for performance optimization
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 
                     'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0;

    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined' && typeof gsap.registerPlugin === 'function') {
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch (e) {
        console.warn('ScrollTrigger registration failed:', e);
      }
    }

    const ctx = gsap.context(() => {
      // Fade in animations - very fast
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
        gsap.fromTo(
          '.fade-in',
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.03,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pageRef.current,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }

      // Solution cards animation - optimized
      const solutionCards = pageRef.current?.querySelectorAll('.solution-card');
      if (solutionCards) {
        solutionCards.forEach((card, index) => {
          gsap.set(card, {
            opacity: 0,
            y: 30,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          });
          
          if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.25 : 0.3,
              delay: index * (isMobile ? 0.02 : 0.03),
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true,
              },
            });
          }
        });
      }

      // Service category cards animation - optimized
      const serviceCards = pageRef.current?.querySelectorAll('.service-category-card');
      if (serviceCards) {
        serviceCards.forEach((card, index) => {
          gsap.set(card, {
            opacity: 0,
            y: 30,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          });
          
          if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.25 : 0.3,
              delay: index * (isMobile ? 0.02 : 0.03),
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true,
              },
            });
          }
        });
      }

      // Package cards animation - optimized
      const packageCards = pageRef.current?.querySelectorAll('.solution-package-card');
      if (packageCards) {
        packageCards.forEach((card, index) => {
          gsap.set(card, {
            opacity: 0,
            y: 30,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          });
          
          if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.25 : 0.3,
              delay: index * (isMobile ? 0.03 : 0.05),
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true,
              },
            });
          }
        });
      }

      // Case study cards animation - optimized
      const caseCards = pageRef.current?.querySelectorAll('.case-card');
      if (caseCards) {
        caseCards.forEach((card, index) => {
          gsap.set(card, {
            opacity: 0,
            x: index % 2 === 0 ? -30 : 30,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)',
          });
          
          if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
            gsap.to(card, {
              opacity: 1,
              x: 0,
              duration: isMobile ? 0.25 : 0.3,
              delay: index * (isMobile ? 0.03 : 0.05),
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true,
              },
            });
          }
        });
      }

      // Integration partners animation - optimized
      const partners = pageRef.current?.querySelectorAll('.partner-logo');
      if (partners && partners.length > 0) {
        if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
          gsap.fromTo(
            partners,
            { opacity: 0, scale: 0.9 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.3,
              stagger: 0.03,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: partners[0]?.parentElement || pageRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
                once: true,
              },
            }
          );
        }
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/50 to-purple-950/50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950"></div>
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }} />
      </div>

      <Header />
      
      <main className="relative z-10 pt-24 pb-12">
        {/* Overview Hero Section */}
        <section className="relative py-20 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 mb-6 fade-in">
              <Sparkles className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200 uppercase tracking-wide">Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Smart Solutions for Every Business Challenge
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Comprehensive business solutions combining IT & Digital Solutions with Startup Support & Consulting to help your business grow and succeed.
            </p>
          </div>
        </section>

        {/* IT & Digital Solutions Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 fade-in">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  IT & Digital Solutions
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete technology solutions from website development to enterprise automation
              </p>
            </div>

            {/* Business Solutions */}
            <div className="mb-16">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Business Management Systems</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {itSolutions.map((solution) => {
                  const IconComponent = solution.icon;
                  return (
                    <div
                      key={solution.id}
                      className="solution-card group relative bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      </div>
                      <div className="relative z-10">
                        <div className="mb-6 flex justify-center">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {solution.title}
                        </h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {solution.description}
                        </p>
                        <ul className="space-y-2 mb-6">
                          {solution.features.map((feature, index) => (
                            <li key={index} className="text-gray-300 flex items-center group-hover:text-white transition-colors duration-300">
                              <CheckCircle2 className="w-4 h-4 mr-2 text-blue-400" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* IT Services */}
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">IT Services & Digital Marketing</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {itServices.map((serviceCategory, index) => {
                  const IconComponent = serviceCategory.icon;
                  return (
                    <div
                      key={index}
                      className="service-category-card group relative bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${serviceCategory.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      <div className="relative z-10">
                        <div className="mb-6 flex items-center gap-4">
                          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${serviceCategory.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            <IconComponent className="w-7 h-7 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                            {serviceCategory.category}
                          </h3>
                        </div>
                        <ul className="space-y-2">
                          {serviceCategory.services.map((service, serviceIndex) => (
                            <li key={serviceIndex} className="text-gray-300 flex items-start group-hover:text-white transition-colors duration-300">
                              <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                              <span className="text-sm leading-relaxed">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${serviceCategory.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Startup Support & Consulting Section */}
        <section className="py-20 px-6 bg-gray-900/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 fade-in">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">
                  Startup Support & Consulting
                </h2>
              </div>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Complete support for startups from registration to funding and growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {startupSupportServices.map((serviceCategory, index) => {
                const IconComponent = serviceCategory.icon;
                return (
                  <div
                    key={index}
                    className="service-category-card group relative bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${serviceCategory.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="mb-6 flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${serviceCategory.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {serviceCategory.category}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {serviceCategory.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-gray-300 flex items-start group-hover:text-white transition-colors duration-300">
                            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${serviceCategory.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Solution Packages Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Comprehensive Solution Packages
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                All-in-one packages combining IT solutions and startup support
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {solutionPackages.map((pkg, index) => {
                const IconComponent = pkg.icon;
                return (
                  <div
                    key={index}
                    className="solution-package-card group relative bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="mb-4">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          pkg.category === 'Startup Support' 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                            : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        }`}>
                          {pkg.category}
                        </span>
                      </div>
                      <div className="mb-6 flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${pkg.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {pkg.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {pkg.description}
                      </p>
                      <ul className="space-y-3">
                        {pkg.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-gray-300 flex items-start group-hover:text-white transition-colors duration-300">
                            <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${pkg.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Client Results / Case Studies Section */}
        <section className="py-20 px-6 bg-gray-900/50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Client Results / Case Studies
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Real-world success stories from businesses we've helped transform
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => {
                const IconComponent = caseStudy.icon;
                return (
                  <div
                    key={index}
                    className="case-card relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="mb-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                        caseStudy.category === 'Startup Support' 
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {caseStudy.category}
                      </span>
                    </div>
                    <div className="mb-6">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-xl flex items-center justify-center mb-4 border border-blue-500/30">
                        <IconComponent className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{caseStudy.company}</h3>
                      <p className="text-blue-400 text-sm font-semibold">{caseStudy.industry}</p>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm font-semibold mb-2">Challenge:</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-semibold mb-2">Solution:</p>
                        <p className="text-gray-300 text-sm leading-relaxed">{caseStudy.solution}</p>
                      </div>
                      <div className="pt-4 border-t border-gray-700/50">
                        <p className="text-gray-400 text-sm font-semibold mb-2">Result:</p>
                        <p className="text-green-400 text-sm font-semibold leading-relaxed">{caseStudy.result}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Integration Partners Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Integration Partners
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Seamlessly integrate with leading platforms and services
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrationPartners.map((partner, index) => (
                <div
                  key={index}
                  className="partner-logo group relative bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 flex items-center justify-center"
                >
                  <div className="text-white font-semibold text-center opacity-60 group-hover:opacity-100 transition-opacity">
                    {partner.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-12 border border-blue-400/30 shadow-2xl fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Talk to our Experts
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get personalized recommendations for IT solutions or startup support services
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
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
