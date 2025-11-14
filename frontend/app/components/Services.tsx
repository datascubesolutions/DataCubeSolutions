'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Tabs from './Tabs';
import { BarChart3, Users, Code, Rocket, Cloud, Palette } from 'lucide-react';

// GSAP plugin is registered globally in gsapOptimizations

const services = [
  {
    id: 1,
    title: 'ERP Solutions',
    description: 'Comprehensive Enterprise Resource Planning systems to streamline your business operations, manage resources efficiently, and boost productivity.',
    icon: BarChart3,
    category: 'it',
    features: ['Inventory Management', 'Financial Planning', 'Supply Chain', 'Human Resources'],
    color: 'from-blue-500 to-blue-700',
    details: (
      <div className="space-y-6">
        <div>
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Enterprise Resource Planning</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Our ERP solutions are designed to integrate all aspects of your business into a single, 
            unified system. We help organizations manage their core business processes including 
            finance, HR, manufacturing, supply chain, services, and procurement.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Key Features</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Real-time data analytics</li>
              <li>• Automated workflows</li>
              <li>• Multi-location support</li>
              <li>• Cloud-based deployment</li>
            </ul>
          </div>
          <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Benefits</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Increased productivity</li>
              <li>• Better decision making</li>
              <li>• Cost reduction</li>
              <li>• Improved collaboration</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: 'CRM Systems',
    description: 'Customer Relationship Management solutions to enhance customer engagement, track interactions, and drive sales growth.',
    icon: Users,
    category: 'it',
    features: ['Customer Analytics', 'Sales Pipeline', 'Marketing Automation', 'Support Tickets'],
    color: 'from-purple-500 to-purple-700',
    details: (
      <div className="space-y-6">
        <div>
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Customer Relationship Management</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Transform your customer relationships with our comprehensive CRM solutions. Track every 
            interaction, automate sales processes, and provide exceptional customer service that 
            drives loyalty and revenue growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-purple-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Sales Management</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Lead tracking & conversion</li>
              <li>• Sales pipeline management</li>
              <li>• Revenue forecasting</li>
              <li>• Performance analytics</li>
            </ul>
          </div>
          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Customer Service</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• 24/7 support tickets</li>
              <li>• Customer history tracking</li>
              <li>• Automated responses</li>
              <li>• Satisfaction surveys</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: 'Web Development',
    description: 'Modern, responsive, and scalable web applications built with latest technologies to bring your digital presence to life.',
    icon: Code,
    category: 'it',
    features: ['React/Next.js', 'Node.js Backend', 'Mobile Responsive', 'SEO Optimized'],
    color: 'from-pink-500 to-pink-700',
    details: (
      <div className="space-y-6">
        <div>
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Web Development Services</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            From simple websites to complex web applications, we build digital solutions that 
            engage users and drive business results. Our team uses cutting-edge technologies 
            to create fast, scalable, and user-friendly web experiences.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Frontend Development</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• React & Next.js</li>
              <li>• TypeScript</li>
              <li>• Responsive design</li>
              <li>• Modern UI/UX</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Backend Development</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Node.js & Express</li>
              <li>• RESTful APIs</li>
              <li>• Database integration</li>
              <li>• Cloud deployment</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: 'Cloud & API Integrations',
    description: 'Seamless cloud infrastructure and API integrations to connect your systems, enhance scalability, and enable real-time data synchronization.',
    icon: Cloud,
    category: 'it',
    features: ['AWS/Azure Setup', 'RESTful APIs', 'Microservices', 'Data Sync'],
    color: 'from-cyan-500 to-cyan-700',
    details: (
      <div className="space-y-6">
        <div>
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Cloud & API Integration Services</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Connect your business systems with powerful cloud infrastructure and seamless API integrations. 
            We help you migrate to the cloud, build scalable architectures, and integrate third-party services 
            to streamline your operations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-cyan-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">Cloud Services</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• AWS & Azure deployment</li>
              <li>• Cloud migration</li>
              <li>• Scalable infrastructure</li>
              <li>• Cost optimization</li>
            </ul>
          </div>
          <div className="bg-blue-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">API Integration</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• RESTful & GraphQL APIs</li>
              <li>• Third-party integrations</li>
              <li>• Webhook setup</li>
              <li>• Real-time synchronization</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive user interfaces and exceptional user experiences designed to engage users and drive conversions.',
    icon: Palette,
    category: 'it',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-pink-500 to-rose-500',
    details: (
      <div className="space-y-6">
        <div>
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">UI/UX Design Services</h4>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Create stunning user interfaces and exceptional user experiences that captivate your audience. 
            Our design team combines creativity with user research to build intuitive, accessible, and 
            conversion-focused designs that align with your brand and business goals.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">User Experience</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• User research & testing</li>
              <li>• Information architecture</li>
              <li>• User journey mapping</li>
              <li>• Usability optimization</li>
            </ul>
          </div>
          <div className="bg-rose-50 dark:bg-gray-800 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 dark:text-white mb-2">User Interface</h5>
            <ul className="space-y-2 text-gray-600 dark:text-gray-300">
              <li>• Visual design</li>
              <li>• Design systems</li>
              <li>• Prototyping & mockups</li>
              <li>• Responsive design</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
];

const serviceGroups = [
  {
    key: 'it',
    title: 'IT & Digital Solutions',
    description: 'Build and modernize your digital products with enterprise-grade technology services.',
    accent: 'from-blue-500 to-cyan-500',
    services: services.filter((service) => service.category === 'it'),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
      const title = sectionRef.current?.querySelector('h2');
      const subtitle = sectionRef.current?.querySelector('p');
      const cards = sectionRef.current?.querySelectorAll('.service-card');

      // Title animation - very fast
      if (title) {
        if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
          gsap.fromTo(
            title,
            {
              opacity: 0,
              y: 20,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        } else {
          gsap.fromTo(title, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.3 });
        }
      }

      // Subtitle animation - very fast
      if (subtitle) {
        if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
          gsap.fromTo(
            subtitle,
            {
              opacity: 0,
              y: 15,
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.3,
              delay: 0.05,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 90%',
                toggleActions: 'play none none none',
              },
            }
          );
        } else {
          gsap.fromTo(subtitle, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, delay: 0.05 });
        }
      }

      // Services icon main animation - lighter on mobile
      const mainIcon = sectionRef.current?.querySelector('.services-icon-main');
      if (mainIcon && !isMobile) {
        gsap.to(mainIcon, {
          scale: 1.15,
          rotation: 5,
          duration: 3,
          repeat: -1,
          ease: 'sine.inOut',
          yoyo: true,
        });

        // Animate wires connecting to rocket on scroll
        const serviceHubs = [
          { x: 20, y: 30 },
          { x: 50, y: 50 },
          { x: 80, y: 30 },
          { x: 50, y: 75 },
        ];

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
          onUpdate: (self) => {
            const progress = self.progress;
            
            // Get current rocket position
            const rocketRect = mainIcon.getBoundingClientRect();
            const heroSection = mainIcon.closest('.text-center');
            if (!heroSection) return;
            
            const heroRect = heroSection.getBoundingClientRect();
            const rocketX = ((rocketRect.left + rocketRect.width / 2 - heroRect.left) / heroRect.width) * 100;
            const rocketY = ((rocketRect.top + rocketRect.height / 2 - heroRect.top) / heroRect.height) * 100;

            const wiresContainer = document.querySelector('.rocket-wires-container');
            const connectionPoint = document.querySelector('.rocket-connection-point');
            
            if (wiresContainer) {
              gsap.to(wiresContainer, {
                opacity: progress * 0.8,
                duration: 0.1,
              });
            }

            if (connectionPoint) {
              gsap.to(connectionPoint, {
                opacity: progress,
                scale: 1 + progress * 0.5,
                duration: 0.1,
              });
            }

            // Update each wire path to connect to rocket
            serviceHubs.forEach((hub, index) => {
              const wire = document.querySelector(`#rocket-wire-${index}`);
              if (wire && rocketX && rocketY) {
                const currentX = hub.x + (rocketX - hub.x) * progress;
                const currentY = hub.y + (rocketY - hub.y) * progress;
                
                wire.setAttribute('d', `M ${hub.x}%,${hub.y}% L ${currentX}%,${currentY}%`);
                wire.setAttribute('opacity', (0.7 * progress).toString());
              }
            });
          },
        });
      }

      // Stat cards entrance animation
      const statCards = sectionRef.current?.querySelectorAll('.service-stat-card');
      if (statCards) {
        statCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { scale: 0, opacity: 0, y: 30, rotation: -180 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              rotation: 0,
              duration: 0.8,
              delay: 0.5 + index * 0.2,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Hover effect
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.1,
              y: -5,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }

      // Optimized card animations for performance
      if (cards) {
        cards.forEach((card, index) => {
          // Set initial state with GPU acceleration
          gsap.set(card, {
            opacity: 0,
            y: 30,
            willChange: 'transform, opacity',
            transform: 'translateZ(0)', // GPU acceleration
          });

          // Simplified card entrance - very fast and smooth
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
                once: true, // Only animate once for better performance
              },
            });
          } else {
            // Fallback without ScrollTrigger
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: 0.25,
              delay: index * 0.03,
              ease: 'power2.out',
            });
          }

          // Simplified - removed nested animations for better performance
          // Cards animate as a whole unit for smoother performance on Android
          
          // Light hover effect - only on desktop
          if (!isMobile) {
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                scale: 1.03,
                y: -5,
                duration: 0.2,
                ease: 'power2.out',
              });
            });
            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.2,
                ease: 'power2.out',
              });
            });
          }
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const servicePaths: Record<number, string> = {
    1: '/services/erp',
    2: '/services/crm',
    3: '/services/web-development',
    4: '/services/cloud-api',
    6: '/services/ui-ux-design',
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20 relative" style={{ 
          minHeight: '200px', 
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {/* Wires connecting to Rocket */}
          <svg className="rocket-wires-container absolute inset-0 w-full h-full pointer-events-none opacity-0" style={{ zIndex: 1 }}>
            {[
              { from: { x: 20, y: 30 }, color: '#3b82f6' },
              { from: { x: 50, y: 50 }, color: '#8b5cf6' },
              { from: { x: 80, y: 30 }, color: '#ec4899' },
              { from: { x: 50, y: 75 }, color: '#06b6d4' },
            ].map((connection, index) => (
              <g key={index}>
                <path
                  id={`rocket-wire-${index}`}
                  d={`M ${connection.from.x}%,${connection.from.y}% L ${connection.from.x}%,${connection.from.y}%`}
                  stroke={connection.color}
                  strokeWidth="2"
                  strokeDasharray="4,4"
                  fill="none"
                  opacity="0"
                  className="rocket-connection-wire"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-20"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </path>
                {/* Animated particles along wire */}
                <circle
                  r="3"
                  fill={connection.color}
                  opacity="0.8"
                  className="rocket-wire-particle"
                >
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    begin={`${index * 0.3}s`}
                  >
                    <mpath href={`#rocket-wire-${index}`} />
                  </animateMotion>
                  <animate
                    attributeName="opacity"
                    values="0.3;1;0.3"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            ))}
          </svg>

          <div className="relative mb-6 mx-auto" style={{ 
            width: 'fit-content',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div className="services-icon-main relative z-10 flex items-center justify-center" style={{ 
              width: 'fit-content',
              position: 'relative',
            }}>
              <Rocket className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-blue-400" />
            </div>
            <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-3xl animate-pulse" style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
            }}></div>
            {/* Connection point on rocket */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-400 rounded-full opacity-0 rocket-connection-point">
              <div className="absolute inset-0 w-4 h-4 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 relative z-10">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Our Services
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent blur-2xl opacity-30 -z-10">
              Our Services
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 relative z-10">
            Comprehensive solutions tailored to your business needs. Transform your operations with cutting-edge technology.
          </p>
        </div>

        {/* Service Cards with Navigation */}
        {serviceGroups.map((group) => {
          const badgeTextClass = group.key === 'it' ? 'text-blue-300' : 'text-emerald-300';
          const badgeBorderClass = group.key === 'it' ? 'border-blue-500/40' : 'border-emerald-500/40';
          const badgeDotClass = group.key === 'it' ? 'bg-blue-400' : 'bg-emerald-400';

          return (
          <div key={group.key} className="mb-16">
            <div className="text-center mb-10">
              <div
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${badgeBorderClass} bg-slate-900/60 text-sm font-semibold ${badgeTextClass}`}
              >
                <span className={`flex h-2 w-2 rounded-full ${badgeDotClass}`}></span>
                {group.title}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mt-6 mb-3">
                {group.title}
              </h3>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                {group.description}
              </p>
            </div>

            <div
              className={`grid gap-8 ${group.services.length === 1 ? 'max-w-3xl mx-auto md:grid-cols-1' : 'md:grid-cols-2 lg:grid-cols-3'}`}
            >
              {group.services.map((service) => {
            return (
              <a
                key={service.id}
                href={servicePaths[service.id]}
                className="service-card group relative bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-2xl p-8 hover:shadow-3xl transition-transform duration-200 sm:hover:-translate-y-6 sm:hover:scale-105 border-2 border-transparent sm:hover:border-blue-500/50 block cursor-pointer overflow-hidden"
                style={{ willChange: 'transform, opacity' }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-6 flex justify-center">
                    <div className={`transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 inline-block`}>
                      {(() => {
                        const IconComponent = service.icon;
                        return <IconComponent className="w-16 h-16 text-blue-400" />;
                      })()}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-gray-300 flex items-center group-hover:text-white transition-colors duration-300">
                        <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${service.color} mr-3 shadow-lg transform group-hover:scale-125 transition-transform duration-300`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
                
                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </a>
            );
          })}
            </div>
          </div>
        );
        })}
      </div>
    </section>
  );
}

