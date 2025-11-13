'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import { BarChart3, Users, Code, Zap, Wrench, Search, Shield, Cloud, ChevronRight, Award, DollarSign, FileText, Globe, Building2, TrendingUp, CheckCircle2 } from 'lucide-react';

// GSAP plugin is registered globally in gsapOptimizations

const processSteps = [
  {
    number: '01',
    title: 'Research',
    description: 'We analyze your business needs, goals, and requirements to create a comprehensive strategy.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Design',
    description: 'Our expert team designs custom solutions tailored to your specific requirements.',
    icon: Code,
  },
  {
    number: '03',
    title: 'Develop',
    description: 'We build robust solutions using cutting-edge technologies and best practices.',
    icon: Shield,
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Seamless deployment to production with zero downtime and comprehensive testing.',
    icon: Cloud,
  },
  {
    number: '05',
    title: 'Support',
    description: 'Ongoing support and optimization to ensure continued success and growth.',
    icon: Wrench,
  },
];

const technologies = [
  { name: 'React', category: 'Frontend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'Python', category: 'Language' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'PostgreSQL', category: 'Database' },
];

const allServices = [
  {
    category: 'Certification Services',
    icon: Award,
    color: 'from-blue-500 to-cyan-500',
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
    color: 'from-green-500 to-emerald-500',
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
    color: 'from-purple-500 to-pink-500',
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
    category: 'IT Services / Business Registration',
    icon: Code,
    color: 'from-orange-500 to-red-500',
    services: [
      'Website Development',
      'E-Commerce Website',
      'App Design & Development',
      'Web Application Development',
      'Software Development',
      'CRM Development',
      'ERP Development',
      'Product Development',
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
  {
    category: 'Digital Marketing',
    icon: TrendingUp,
    color: 'from-pink-500 to-rose-500',
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

export default function ServicesPage() {
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

      // Floating service icons animation
      const serviceIcons = pageRef.current?.querySelectorAll('.service-float-icon');
      if (serviceIcons) {
        serviceIcons.forEach((icon, index) => {
          gsap.to(icon, {
            y: -20 + Math.random() * 40,
            x: -15 + Math.random() * 30,
            rotation: -15 + Math.random() * 30,
            scale: 1 + Math.random() * 0.3,
            duration: 4 + Math.random() * 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5,
          });
        });
      }

      // Service hub animations
      const serviceHubs = pageRef.current?.querySelectorAll('.service-hub');
      if (serviceHubs) {
        serviceHubs.forEach((hub, index) => {
          gsap.to(hub, {
            scale: 1.3,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });
        });
      }

      // Service nodes pulse
      const serviceNodes = pageRef.current?.querySelectorAll('.service-node');
      if (serviceNodes) {
        serviceNodes.forEach((node, index) => {
          gsap.to(node, {
            scale: 1.5,
            opacity: 0.8,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        });
      }

      // Connection lines animation enhancement
      const connections = pageRef.current?.querySelectorAll('.service-connection');
      if (connections) {
        connections.forEach((connection, index) => {
          gsap.to(connection, {
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.4,
          });
        });
      }

      // Service category cards animation
      const serviceCategoryCards = pageRef.current?.querySelectorAll('.service-category-card');
      if (serviceCategoryCards) {
        serviceCategoryCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 60, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              delay: index * 0.1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

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
            trigger: '.how-we-work-section',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/50 to-purple-950/50 relative overflow-hidden">
      {/* New Services Network Background Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dark base with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950"></div>

        {/* Interconnected Service Nodes Network */}
        <svg className="absolute inset-0 w-full h-full opacity-70">
          {/* Main Service Hub Centers */}
          {[
            { x: 20, y: 30, label: 'ERP', color: '#3b82f6' },
            { x: 50, y: 50, label: 'HUB', color: '#8b5cf6' },
            { x: 80, y: 30, label: 'CRM', color: '#ec4899' },
            { x: 50, y: 75, label: 'WEB', color: '#06b6d4' },
          ].map((hub, index) => (
            <g key={index}>
              {/* Hub Circle */}
              <circle
                cx={`${hub.x}%`}
                cy={`${hub.y}%`}
                r="40"
                fill="none"
                stroke={hub.color}
                strokeWidth="2.5"
                opacity="0.6"
                className="service-hub-ring"
              >
                <animate
                  attributeName="r"
                  values="40;50;40"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${index * 0.5}s`}
                />
              </circle>
              
              {/* Hub Center */}
              <circle
                cx={`${hub.x}%`}
                cy={`${hub.y}%`}
                r="8"
                fill={hub.color}
                opacity="0.8"
                className="service-hub"
              >
                <animate
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.3}s`}
                />
              </circle>
              
              {/* Hub Glow */}
              <circle
                cx={`${hub.x}%`}
                cy={`${hub.y}%`}
                r="15"
                fill={hub.color}
                opacity="0.2"
                className="service-hub-glow"
              >
                <animate
                  attributeName="r"
                  values="15;25;15"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.4}s`}
                />
              </circle>

              {/* Hub Label */}
              <text
                x={`${hub.x}%`}
                y={`${hub.y}%`}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={hub.color}
                fontSize="14"
                fontFamily="monospace"
                fontWeight="bold"
                opacity="0.6"
              >
                {hub.label}
              </text>
            </g>
          ))}

          {/* Connecting Lines between Services */}
          {[
            { from: { x: 20, y: 30 }, to: { x: 50, y: 50 }, color: '#3b82f6' },
            { from: { x: 80, y: 30 }, to: { x: 50, y: 50 }, color: '#ec4899' },
            { from: { x: 50, y: 50 }, to: { x: 50, y: 75 }, color: '#8b5cf6' },
            { from: { x: 20, y: 30 }, to: { x: 50, y: 75 }, color: '#06b6d4' },
            { from: { x: 80, y: 30 }, to: { x: 50, y: 75 }, color: '#ec4899' },
          ].map((connection, index) => (
            <g key={index}>
              <line
                x1={`${connection.from.x}%`}
                y1={`${connection.from.y}%`}
                x2={`${connection.to.x}%`}
                y2={`${connection.to.y}%`}
                stroke={connection.color}
                strokeWidth="2"
                strokeDasharray="6,4"
                opacity="0.7"
                className="service-connection"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-20"
                  dur={`${3 + index * 0.5}s`}
                  repeatCount="indefinite"
                />
              </line>
              
              {/* Data flow particles */}
              <circle
                r="3"
                fill={connection.color}
                opacity="0.8"
                className="service-data-flow"
              >
                <animateMotion
                  dur={`${4 + index * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${index * 0.3}s`}
                >
                  <mpath href={`#path-${index}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur={`${4 + index * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
              
              <path
                id={`path-${index}`}
                d={`M ${connection.from.x}%,${connection.from.y}% L ${connection.to.x}%,${connection.to.y}%`}
                fill="none"
                stroke="transparent"
              />
            </g>
          ))}

          {/* Service Cards Connection Nodes */}
          {[
            { x: 15, y: 45 }, { x: 35, y: 45 },
            { x: 65, y: 45 }, { x: 85, y: 45 },
            { x: 25, y: 65 }, { x: 75, y: 65 },
          ].map((node, index) => (
            <g key={index}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="5"
                fill="#06b6d4"
                opacity="0.9"
                className="service-node"
              >
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.2}s`}
                />
              </circle>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="8"
                fill="#06b6d4"
                opacity="0.2"
                className="service-node-glow"
              >
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.2}s`}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* Floating Service Icons */}
        {[
          { icon: BarChart3, x: 15, y: 25, color: 'blue', delay: '0s' },
          { icon: Users, x: 85, y: 25, color: 'pink', delay: '1s' },
          { icon: Code, x: 50, y: 80, color: 'cyan', delay: '0.5s' },
          { icon: Zap, x: 25, y: 60, color: 'purple', delay: '1.5s' },
          { icon: Wrench, x: 75, y: 60, color: 'indigo', delay: '0.8s' },
        ].map((service, index) => {
          const IconComponent = service.icon;
          return (
          <div
            key={index}
            className={`absolute service-float-icon flex items-center justify-center`}
            style={{
              left: `${service.x}%`,
              top: `${service.y}%`,
              animationDelay: service.delay,
              filter: `drop-shadow(0 0 15px ${
                service.color === 'blue' ? 'rgba(59, 130, 246, 0.8)' :
                service.color === 'pink' ? 'rgba(236, 72, 153, 0.8)' :
                service.color === 'cyan' ? 'rgba(6, 182, 212, 0.8)' :
                service.color === 'purple' ? 'rgba(139, 92, 246, 0.8)' :
                'rgba(99, 102, 241, 0.8)'
              })`,
            }}
          >
            <IconComponent className="w-10 h-10" style={{ color: service.color === 'blue' ? '#3b82f6' : service.color === 'pink' ? '#ec4899' : service.color === 'cyan' ? '#06b6d4' : service.color === 'purple' ? '#8b5cf6' : '#6366f1' }} />
          </div>
        );
        })}

        {/* Hexagonal Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(30deg, transparent, transparent 2px, rgba(59, 130, 246, 0.03) 2px, rgba(59, 130, 246, 0.03) 4px),
              repeating-linear-gradient(60deg, transparent, transparent 2px, rgba(168, 85, 247, 0.03) 2px, rgba(168, 85, 247, 0.03) 4px),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(236, 72, 153, 0.03) 2px, rgba(236, 72, 153, 0.03) 4px)
            `,
            backgroundSize: '100px 100px',
          }}
        ></div>

        {/* Radial Gradient Overlays for depth */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-radial-gradient from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-gradient from-purple-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1/3 bg-radial-gradient from-cyan-500/5 via-transparent to-transparent"></div>
      </div>

      <Header />
      <main className="relative z-10 pt-24 pb-12">
        {/* Hero Banner */}
        <div className="text-center mb-16 relative z-10 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
              <span className="text-blue-300 font-semibold">What We Offer</span>
            </div>
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              Discover how our innovative solutions can transform your business
            </p>
          </div>
        </div>

        <Services />

        {/* Comprehensive Services Section */}
        <section className="py-24 relative z-10 px-6">
          <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                All Our Services
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Comprehensive business solutions to help you grow and succeed
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allServices.map((serviceCategory, index) => {
                const IconComponent = serviceCategory.icon;
                return (
                  <div
                    key={index}
                    className="service-category-card group relative bg-gray-800/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl border-2 border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${serviceCategory.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="mb-6 flex items-center gap-4">
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${serviceCategory.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                          {serviceCategory.category}
                        </h3>
                      </div>
                      <ul className="space-y-3">
                        {serviceCategory.services.map((service, serviceIndex) => (
                          <li key={serviceIndex} className="text-gray-300 flex items-start group-hover:text-white transition-colors duration-300">
                            <CheckCircle2 className="w-5 h-5 mr-3 mt-0.5 text-blue-400 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Bottom gradient line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${serviceCategory.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-24 relative z-10 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-12 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tech Stack / Tools Used
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Built with modern, reliable technologies so your products stay future-ready
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-4 border border-slate-700/60 hover:border-blue-500/60 transition-all duration-300 text-center shadow-lg"
                  >
                    <div className="text-white font-semibold">{tech.name}</div>
                    <div className="text-slate-400 text-xs mt-1 uppercase tracking-wide">{tech.category}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How We Work Section */}
        <section className="process-section how-we-work-section py-24 relative z-10 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                How We Work (Process)
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {processSteps.map((step, index) => {
                  const IconComponent = step.icon;
                  return (
                    <div key={index} className="process-step relative">
                      <div className="bg-slate-900/70 backdrop-blur-sm rounded-xl p-6 border border-slate-700/60 h-full shadow-lg">
                        <div className="mb-4">
                          <div className="text-4xl font-bold text-blue-400/20 mb-2">{step.number}</div>
                          <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4 border border-blue-500/30">
                            <IconComponent className="w-6 h-6 text-blue-300" />
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold text-white mb-2">
                          {step.title}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed">
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

        {/* CTA Section */}
        <div className="mt-20 text-center relative z-10 px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-12 border border-blue-400/30 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get a Free Consultation
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help grow your business
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
