'use client';

import { useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  Rocket,
  Sparkles,
  FileCheck2,
  Hammer,
  Megaphone,
  TrendingUp,
  ShieldCheck,
  Building,
  Landmark,
  Users,
  Coins,
  Lightbulb,
  Send,
  CheckCircle2,
  ArrowRight,
  Award,
  DollarSign,
  FileText,
  Code,
  Building2,
  Globe,
  BarChart3,
  Briefcase,
  Package,
  FolderKanban,
} from 'lucide-react';
import { useGSAP } from '../utils/useGSAP';
import { shouldAnimate } from '../utils/motion';

const supportSteps = [
  {
    title: 'Register',
    description: 'Get guidance on company registration, compliance, GST, and essential legal frameworks.',
    icon: FileCheck2,
  },
  {
    title: 'Build',
    description: 'Craft your MVP with product strategists, designers, and engineers working alongside you.',
    icon: Hammer,
  },
  {
    title: 'Promote',
    description: 'Launch with go-to-market support, marketing assets, and digital brand presence.',
    icon: Megaphone,
  },
  {
    title: 'Scale',
    description: 'Optimize operations, secure partnerships, and prepare for rapid growth and funding rounds.',
    icon: TrendingUp,
  },
];

const schemes = [
  {
    title: 'Startup India',
    description: 'Fast-track recognition, tax exemptions, and easier compliance for DPIIT-recognized startups.',
    benefits: ['Self-certification compliance', 'Tax holiday for 3 years', 'Fund of Funds access'],
    icon: Rocket,
  },
  {
    title: 'MSME Schemes',
    description: 'Government-backed support for Micro, Small & Medium Enterprises covering finance and subsidies.',
    benefits: ['CGTMSE collateral-free loans', 'Credit linked subsidies', 'Technology upgradation'],
    icon: Building,
  },
  {
    title: 'PMEGP',
    description: 'Prime Minister\'s Employment Generation Programme grants for new ventures in manufacturing & services.',
    benefits: ['Subsidy up to 35%', 'Bank credit facilitation', 'Rural & urban coverage'],
    icon: Landmark,
  },
  {
    title: 'SIDBI & NABARD',
    description: 'Special credit lines and refinance support for innovation-driven small businesses.',
    benefits: ['Working capital assistance', 'Mentorship programs', 'Women entrepreneur incentives'],
    icon: ShieldCheck,
  },
];

// Startup Support & Consulting Services
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

// IT & Digital Solutions for Startups
const itSolutions = [
  {
    title: 'Website & E-Commerce',
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
    title: 'Business Management Systems',
    icon: BarChart3,
    color: 'from-purple-500 to-pink-500',
    services: [
      'ERP System Development',
      'CRM System Development',
      'HR & Payroll System',
      'Inventory & Billing System',
      'Project Management Tool',
    ],
  },
  {
    title: 'Digital Marketing',
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

const mentorshipHighlights = [
  'One-on-one mentorship sessions with seasoned founders and CXOs.',
  'Investor pitch deck reviews and demo-day preparation.',
  'Warm introductions to angel investors, micro VCs, and incubators.',
  'Operational playbooks across finance, hiring, and product-market fit.',
];

export default function IndustriesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Use optimized GSAP hook
  useGSAP((gsap, ScrollTrigger) => {
    if (!shouldAnimate()) return;

    // Detect mobile/touch device for performance optimization
    const isMobile = typeof window !== 'undefined' && (
      window.matchMedia('(max-width: 768px)').matches || 
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );

    if (ScrollTrigger) {
      // Fade in animations - very fast
      const fadeElements = pageRef.current?.querySelectorAll('.fade-in');
      if (fadeElements) {
        fadeElements.forEach((element, index) => {
          gsap.fromTo(
            element,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.25 : 0.3,
              delay: isMobile ? 0 : index * 0.03,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: element,
                start: 'top 95%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Support steps animation - optimized
      const stepCards = pageRef.current?.querySelectorAll('.support-step-card');
      if (stepCards) {
        stepCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.25 : 0.3,
              delay: isMobile ? 0 : index * 0.05,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Scheme cards animation - optimized
      const schemeCards = pageRef.current?.querySelectorAll('.scheme-card');
      if (schemeCards) {
        schemeCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, x: index % 2 === 0 ? -30 : 30 },
            {
              opacity: 1,
              x: 0,
              duration: isMobile ? 0.25 : 0.3,
              delay: isMobile ? 0 : index * 0.03,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }

      // Service category cards animation - optimized
      const serviceCards = pageRef.current?.querySelectorAll('.startup-service-card');
      if (serviceCards) {
        serviceCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.25 : 0.3,
              delay: isMobile ? 0 : index * 0.03,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                toggleActions: 'play none none none',
              },
            }
          );
        });
      }
    }
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>
        <div className="absolute inset-0 opacity-20" style={{ 
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)', 
          backgroundSize: '60px 60px' 
        }} />
      </div>

      <Header />

      <main className="relative z-10 pt-24 pb-12">
        {/* Startup Support Overview Hero */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/40 bg-blue-500/10 mb-6 fade-in">
              <Rocket className="w-4 h-4 text-blue-300" />
              <span className="text-sm font-semibold text-blue-200 uppercase tracking-wide">Startup Support</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 fade-in">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Helping startups from registration to funding.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed fade-in">
              Complete startup support combining business consulting, certifications, funding assistance, and IT solutions to help you launch and scale successfully.
            </p>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How We Help
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                A complete journey from idea to scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {supportSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={index}
                    className="support-step-card group relative bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                        {step.title}
                      </h3>
                      <p className="text-gray-300 text-center leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Startup Support & Consulting Services Section */}
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
                Complete support for certifications, funding, documentation, and registration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {startupSupportServices.map((serviceCategory, index) => {
                const IconComponent = serviceCategory.icon;
                return (
                  <div
                    key={index}
                    className="startup-service-card group relative bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
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

        {/* IT & Digital Solutions Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
                Technology solutions to power your startup's digital presence and operations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {itSolutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div
                    key={index}
                    className="startup-service-card group relative bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${solution.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    <div className="relative z-10">
                      <div className="mb-6 flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {solution.title}
                        </h3>
                      </div>
                      <ul className="space-y-2">
                        {solution.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-gray-300 flex items-start group-hover:text-white transition-colors duration-300">
                            <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${solution.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Government Schemes / Grants Section */}
        <section className="py-20 px-6 bg-gray-900/50">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Government Schemes / Grants
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Access government support programs and funding opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {schemes.map((scheme, index) => {
                const IconComponent = scheme.icon;
                return (
                  <div
                    key={index}
                    className="scheme-card group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                        <IconComponent className="w-7 h-7 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{scheme.title}</h3>
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">{scheme.description}</p>
                    <ul className="space-y-2">
                      {scheme.benefits?.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-gray-300 flex items-start">
                          <CheckCircle2 className="w-4 h-4 mr-2 mt-0.5 text-green-400 flex-shrink-0" />
                          <span className="text-sm">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mentorship & Funding Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Mentorship & Funding
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We connect startups with angel investors and provide expert mentorship
              </p>
            </div>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-2xl p-12 border-2 border-blue-500/30 shadow-2xl fade-in">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mb-6">
                      <Coins className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">
                      Investor Network & Funding Support
                    </h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Get connected with our network of angel investors, micro VCs, and funding programs. We help you prepare pitch decks, financial models, and connect with the right investors for your startup.
                    </p>
                  </div>
                  <ul className="space-y-3">
                    {mentorshipHighlights.map((highlight, index) => (
                      <li key={index} className="text-gray-300 flex items-start">
                        <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-blue-500/30">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-600/30 flex items-center justify-center">
                        <Users className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Angel Investor Network</h4>
                        <p className="text-gray-300 text-sm">Direct access to verified angel investors</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-600/30 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Expert Mentorship</h4>
                        <p className="text-gray-300 text-sm">Guidance from experienced founders & CXOs</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-green-600/30 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">Pitch Preparation</h4>
                        <p className="text-gray-300 text-sm">Professional pitch deck & financial modeling</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Free Consultation CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-12 border border-blue-400/30 shadow-2xl fade-in">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg mx-auto mb-6">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Free Consultation
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Submit your idea and we'll guide you through the entire startup journey - from registration to funding and digital transformation.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                  <CheckCircle2 className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">Expert Guidance</p>
                </div>
                <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                  <CheckCircle2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">No Hidden Costs</p>
                </div>
                <div className="bg-gray-800/60 rounded-xl p-6 border border-gray-700/50">
                  <CheckCircle2 className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                  <p className="text-gray-300 text-sm">Quick Response</p>
                </div>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span>Get Free Consultation</span>
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
