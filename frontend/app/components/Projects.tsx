'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Factory, Cloud, ShoppingCart, Building2, Home, Globe } from 'lucide-react';

// GSAP plugin is registered globally in gsapOptimizations

// RequestAnimationFrame-based throttle for smoother performance
function rafThrottle<T extends (...args: any[]) => any>(func: T): T {
  let rafId: number | null = null;
  let lastArgs: Parameters<T>;
  
  return ((...args: Parameters<T>) => {
    lastArgs = args;
    if (rafId === null) {
      rafId = requestAnimationFrame(() => {
        func(...lastArgs);
        rafId = null;
      });
    }
  }) as T;
}

const projects = [
  {
    id: 1,
    title: 'Enterprise ERP System',
    category: 'ERP',
    description: 'Complete enterprise resource planning solution for manufacturing industry with real-time analytics, inventory management, and comprehensive financial reporting.',
    image: Factory,
    tech: ['React', 'Node.js', 'PostgreSQL'],
    gradient: 'from-blue-500 to-cyan-500',
    stats: { clients: '50+', efficiency: '85%', scale: 'Enterprise' },
  },
  {
    id: 2,
    title: 'Cloud CRM Platform',
    category: 'CRM',
    description: 'Scalable CRM platform with advanced analytics, AI-powered automation, and seamless integration for sales teams worldwide.',
    image: Cloud,
    tech: ['Next.js', 'MongoDB', 'AWS'],
    gradient: 'from-purple-500 to-pink-500',
    stats: { clients: '200+', efficiency: '90%', scale: 'Cloud' },
  },
  {
    id: 3,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Modern e-commerce solution with secure payment integration, real-time inventory management, and advanced analytics.',
    image: ShoppingCart,
    tech: ['React', 'Stripe API', 'Firebase'],
    gradient: 'from-orange-500 to-red-500',
    stats: { clients: '150+', efficiency: '95%', scale: 'Global' },
  },
  {
    id: 4,
    title: 'Healthcare Management System',
    category: 'ERP',
    description: 'Comprehensive healthcare ERP for patient management, billing automation, and medical records with HIPAA compliance.',
    image: Building2,
    tech: ['Vue.js', 'Django', 'MySQL'],
    gradient: 'from-green-500 to-emerald-500',
    stats: { clients: '30+', efficiency: '88%', scale: 'Healthcare' },
  },
  {
    id: 5,
    title: 'Real Estate CRM',
    category: 'CRM',
    description: 'Specialized CRM for real estate agencies with property listing management, client tracking, and automated lead generation.',
    image: Home,
    tech: ['Angular', 'Node.js', 'MongoDB'],
    gradient: 'from-indigo-500 to-purple-500',
    stats: { clients: '100+', efficiency: '92%', scale: 'Regional' },
  },
  {
    id: 6,
    title: 'Corporate Website',
    category: 'Web Development',
    description: 'Modern corporate website with headless CMS integration, multilingual support, and advanced SEO optimization.',
    image: Globe,
    tech: ['Next.js', 'Contentful', 'Tailwind'],
    gradient: 'from-teal-500 to-cyan-500',
    stats: { clients: '80+', efficiency: '98%', scale: 'Corporate' },
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const eventHandlersRef = useRef<Map<Element, { enter: () => void; leave: () => void; move: EventListener }>>(new Map());

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = sectionRef.current?.querySelectorAll('.project-card');
      if (!cards || cards.length === 0) return;

      cards.forEach((card, index) => {
        const delay = index * 0.1; // Reduced delay for faster appearance
        
        // Initial entrance animation with 3D effect - faster
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotationY: -30,
            rotationX: 15,
            scale: 0.8,
            z: -200,
          },
          {
            opacity: 1,
            y: 0,
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            z: 0,
            duration: 0.7, // Reduced from 1 to 0.7
            delay: delay,
            ease: 'power2.out', // Faster easing
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
              once: true,
            },
          }
        );

        // Mouse enter 3D tilt effect - faster
        const handleMouseEnter = () => {
          gsap.to(card, {
            rotationY: 5,
            rotationX: -5,
            scale: 1.05,
            z: 50,
            duration: 0.2, // Reduced from 0.3 to 0.2
            ease: 'power1.out', // Faster easing
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            z: 0,
            duration: 0.2, // Reduced from 0.3 to 0.2
            ease: 'power1.out', // Faster easing
          });
          // Reset transform on leave
          (card as HTMLElement).style.transform = '';
        };

        // RequestAnimationFrame-based mousemove for smoother performance
        const handleMouseMove = rafThrottle((e: Event) => {
          const mouseEvent = e as MouseEvent;
          const rect = card.getBoundingClientRect();
          const x = mouseEvent.clientX - rect.left;
          const y = mouseEvent.clientY - rect.top;
          
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          
          const rotateX = (y - centerY) / 25;
          const rotateY = (centerX - x) / 25;
          
          // Use CSS transform directly with hardware acceleration
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        const moveListener = handleMouseMove as EventListener;
        
        card.addEventListener('mouseenter', handleMouseEnter);
        card.addEventListener('mouseleave', handleMouseLeave);
        card.addEventListener('mousemove', moveListener);

        // Store handlers for cleanup
        eventHandlersRef.current.set(card, {
          enter: handleMouseEnter,
          leave: handleMouseLeave,
          move: moveListener,
        });

        // Removed infinite icon rotation for performance - it was causing lag
        // Stats animation - faster and smoother
        const stats = card.querySelectorAll('.project-stat');
        if (stats && stats.length > 0) {
          gsap.fromTo(
            stats,
            {
              opacity: 0,
              scale: 0.8,
            },
            {
              opacity: 1,
              scale: 1,
              duration: 0.3, // Reduced from 0.4 to 0.3
              delay: delay + 0.2, // Reduced from 0.3 to 0.2
              ease: 'back.out(1.2)', // Faster easing
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
                once: true,
              },
              stagger: 0.03, // Reduced from 0.05 to 0.03
            }
          );
        }
      });
    }, sectionRef);

    return () => {
      // Cleanup event listeners to prevent memory leaks
      eventHandlersRef.current.forEach((handlers, card) => {
        card.removeEventListener('mouseenter', handlers.enter);
        card.removeEventListener('mouseleave', handlers.leave);
        card.removeEventListener('mousemove', handlers.move);
      });
      eventHandlersRef.current.clear();
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Glowing indicator */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse"></div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 relative">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Our Projects
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent blur-2xl opacity-30">
              Our Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing our successful implementations across various industries
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-200 border-2 border-transparent hover:border-purple-500/30"
              style={{ transformStyle: 'preserve-3d', willChange: 'transform', backfaceVisibility: 'hidden' }}
            >
              {/* Gradient glow overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              {/* Shine effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </div>

              {/* Header Section */}
              <div className={`relative bg-gradient-to-br ${project.gradient} p-12 text-center overflow-hidden`}>
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                }}></div>
                
                <div className="relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="project-icon transform group-hover:scale-125 transition-transform duration-300 inline-block">
                      {(() => {
                        const IconComponent = project.image;
                        return <IconComponent className="w-16 h-16 text-white" />;
                      })()}
                    </div>
                  </div>
                  <span className={`inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed group-hover:text-gray-200 transition-colors duration-200">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {Object.entries(project.stats || {}).map(([key, value], index) => (
                    <div key={index} className="project-stat text-center">
                      <div className={`text-lg font-bold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                        {value}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full border border-gray-600/50 group-hover:border-gray-500 group-hover:text-white transition-all duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

