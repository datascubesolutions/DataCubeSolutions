'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Factory, Cloud, ShoppingCart, Building2, Home, Globe } from 'lucide-react';

// GSAP plugin is registered globally in gsapOptimizations


const projects = [
  {
    id: 1,
    title: 'AI-Powered Resume Builder',
    category: 'Web Development',
    description: 'Land your dream job with AI-powered resumes. Create, edit and download professional resumes with AI-powered assistance.',
    image: '/assets/images/resume-website.png',
    imageType: 'url', // Indicates this is an image URL, not an icon component
    url: 'https://jioresume.com/',
    tech: ['Next.js', 'AI', 'React'],
    gradient: 'from-green-500 to-emerald-500',
    stats: { clients: '10,000+', efficiency: '95%', scale: 'Global' },
  },
  {
    id: 2,
    title: 'Beauty Salon & Spa',
    category: 'Web Development',
    description: 'The Royal Spa & Salon - Experience Beauty Redefined. Modern beauty salon website with booking system and elegant design.',
    image: '/assets/images/beauty-parlour web.png',
    imageType: 'url',
    url: 'https://beauty-salon-two-tau.vercel.app/',
    tech: ['Next.js', 'React', 'Vercel'],
    gradient: 'from-pink-500 to-purple-500',
    stats: { clients: '500+', efficiency: '98%', scale: 'Premium' },
  },
  {
    id: 3,
    title: 'ClassyShop E-Commerce',
    category: 'Web Development',
    description: 'CLASSYSHOP BIG MEGA STORE - Stay Stylish with 7 Lakh+ Influencer-Approved Styles. Modern e-commerce platform with comprehensive shopping experience.',
    image: '/assets/images/ecommerce-classy web.png',
    imageType: 'url',
    url: 'https://ecommerce-frontend-view.netlify.app/',
    tech: ['React', 'Netlify', 'E-Commerce'],
    gradient: 'from-red-500 to-pink-500',
    stats: { clients: '150+', efficiency: '95%', scale: 'Global' },
  },
  {
    id: 4,
    title: 'ForeverBuy E-Commerce',
    category: 'Web Development',
    description: 'FOREVER - Latest Arrivals. Modern fashion e-commerce platform with bestsellers collection, clean design, and seamless shopping experience.',
    image: '/assets/images/foreigner-client forever.png',
    imageType: 'url',
    url: 'https://foreverbuy.in/',
    tech: ['React', 'E-Commerce', 'Modern UI'],
    gradient: 'from-pink-500 to-rose-500',
    stats: { clients: '200+', efficiency: '96%', scale: 'Fashion' },
  },
  {
    id: 5,
    title: 'Rentiz Real Estate',
    category: 'Web Development',
    description: 'Perfect way to buy and sell a home. Modern real estate platform with property search, listings, and seamless user experience.',
    image: '/assets/images/rentiz-client web.png',
    imageType: 'url',
    url: 'https://themewagon.github.io/rentiz/index.html',
    tech: ['Bootstrap', 'Real Estate', 'Property Search'],
    gradient: 'from-teal-500 to-cyan-500',
    stats: { clients: '100+', efficiency: '92%', scale: 'Real Estate' },
  },
  {
    id: 6,
    title: 'Organic Foods E-Commerce',
    category: 'Web Development',
    description: 'Organic Foods at your Doorsteps. Fresh organic grocery delivery platform with 14k+ product varieties, 50k+ happy customers, and free delivery.',
    image: '/assets/images/organic-web.png',
    imageType: 'url',
    url: 'https://themewagon.github.io/organic/index.html',
    tech: ['Bootstrap', 'E-Commerce', 'Organic Groceries'],
    gradient: 'from-green-500 to-emerald-500',
    stats: { clients: '50k+', efficiency: '98%', scale: 'Organic' },
  },
  {
    id: 7,
    title: 'Indian Terrain Fashion',
    category: 'Web Development',
    description: 'Walk This Way - Premium smart-casual clothing for men. Indian Terrain offers shirts, bottom wear, winterwear, and exclusive collections with free shipping above Rs 1999.',
    image: '/assets/images/indian-terrain-web.png',
    imageType: 'url',
    url: 'https://www.indianterrain.com/',
    tech: ['E-Commerce', 'Fashion', 'Men\'s Clothing'],
    gradient: 'from-blue-500 to-indigo-500',
    stats: { clients: '100k+', efficiency: '97%', scale: 'Fashion' },
  },
  {
    id: 8,
    title: 'Fila India E-Commerce',
    category: 'Web Development',
    description: 'Season\'s Fresh - Cool New Drops, Hot New Styles. Redefining street style with sport-inspired fashion. Footwear, apparel, and accessories for men, women, and unisex collections.',
    image: '/assets/images/fila-shoes-web.png',
    imageType: 'url',
    url: 'https://fila.co.in/',
    tech: ['E-Commerce', 'Athleisure', 'Sports Fashion'],
    gradient: 'from-red-500 to-pink-500',
    stats: { clients: '200k+', efficiency: '96%', scale: 'Athleisure' },
  },
  {
    id: 9,
    title: 'Nailashes Beauty Salon',
    category: 'Web Development',
    description: 'India\'s Largest Nail Chain - Come in for luxurious beauty services performed by our highly skilled team. 80+ franchise outlets in 30+ cities with nail extensions, lash extensions, and beauty treatments.',
    image: '/assets/images/nailashes-web.png',
    imageType: 'url',
    url: 'https://www.nailashes.in/',
    tech: ['Beauty Services', 'Salon Booking', 'Franchise'],
    gradient: 'from-pink-500 to-purple-500',
    stats: { clients: '600+', efficiency: '98%', scale: 'Beauty' },
  },
  {
    id: 10,
    title: 'Ambitious Kitchen',
    category: 'Web Development',
    description: 'Good Mood Comfort Food - A New York Times Bestseller cookbook website. Discover healthy recipes, cooking guides, and lifestyle content. Fuel your body and honor your journey with balanced, real wellness.',
    image: '/assets/images/ambitious-kitchen.png',
    imageType: 'url',
    url: 'https://www.ambitiouskitchen.com/',
    tech: ['Recipe Blog', 'Food Content', 'Lifestyle'],
    gradient: 'from-orange-500 to-amber-500',
    stats: { clients: '500k+', efficiency: '95%', scale: 'Food Blog' },
  },
  {
    id: 11,
    title: 'Tonies E-Commerce',
    category: 'Web Development',
    description: 'Empowering kids through independent play - Screen-free audio stories, songs, and games. Toniebox 2 with 300+ Tonies and Tonieplay games. Perfect for ages 1-9+ with kid-friendly controls.',
    image: '/assets/images/tonies-web.png',
    imageType: 'url',
    url: 'https://us.tonies.com/',
    tech: ['E-Commerce', 'Kids Products', 'Audio Content'],
    gradient: 'from-red-500 to-rose-500',
    stats: { clients: '1M+', efficiency: '97%', scale: 'Kids Tech' },
  },
];

function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component is mounted on client before running animations
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !isMounted) return;
    
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
    
    // Use a small delay to ensure everything is loaded
    const timer = setTimeout(() => {
      try {
        const cards = cardsRef.current.filter(Boolean) as HTMLElement[];
        
        if (cards.length === 0) return;

        // Set initial state with GPU acceleration - only on client
        cards.forEach((card) => {
          if (card) {
            gsap.set(card, {
              opacity: 0,
              y: 30,
              willChange: 'transform, opacity',
              transform: 'translateZ(0)', // GPU acceleration
            });
          }
        });

        // Optimized card animations - fast and smooth
        cards.forEach((card, index) => {
          if (!card) return;
          
          if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
            gsap.to(card, {
              opacity: 1,
              y: 0,
              duration: isMobile ? 0.25 : 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 95%',
                toggleActions: 'play none none none',
                once: true, // Only animate once for better performance
              },
              delay: index * (isMobile ? 0.02 : 0.03),
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
        });
      } catch (error) {
        console.error('Error setting up card animations:', error);
      }
    }, 100);

    return () => {
      clearTimeout(timer);
      try {
        if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger && typeof ScrollTrigger.getAll === 'function') {
          const triggers = ScrollTrigger.getAll();
          if (Array.isArray(triggers)) {
            triggers.forEach((trigger) => {
              if (trigger && typeof trigger.kill === 'function') {
                trigger.kill();
              }
            });
          }
        }
      } catch (error) {
        console.error('Error cleaning up ScrollTrigger:', error);
      }
    };
  }, [isMounted]);

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
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className={`project-card group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden sm:hover:shadow-3xl transition-transform duration-200 border-2 border-transparent sm:hover:border-purple-500/30 ${project.url ? 'cursor-pointer' : ''}`}
              style={{ 
                willChange: isMounted ? 'transform, opacity' : 'auto',
              }}
              suppressHydrationWarning
              onClick={() => {
                if (project.url) {
                  window.open(project.url, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              {/* Gradient glow overlay - desktop only */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 sm:group-hover:opacity-20 transition-opacity duration-200`}></div>
              
              {/* Shine effect - desktop only */}
              <div className="absolute inset-0 opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 hidden sm:block">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full sm:group-hover:translate-x-full transition-transform duration-500"></div>
              </div>

              {/* Header Section */}
              <div className={`relative ${project.imageType === 'url' ? 'h-48' : `bg-gradient-to-br ${project.gradient} p-12`} text-center overflow-hidden`}>
                {project.imageType === 'url' ? (
                  <>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    {/* Overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    {/* Category badge positioned at bottom */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                      <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                        {project.category}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10" style={{
                      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
                    }}></div>
                    
                    <div className="relative z-10">
                      <div className="mb-4 flex justify-center">
                        <div className="project-icon transform group-hover:scale-125 transition-transform duration-300 inline-block">
                          {(() => {
                            const IconComponent = project.image as unknown as React.ComponentType<{ className?: string }>;
                            return <IconComponent className="w-16 h-16 text-white" />;
                          })()}
                        </div>
                      </div>
                      <span className={`inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30`}>
                        {project.category}
                      </span>
                    </div>
                  </>
                )}
              </div>

              {/* Content Section */}
              <div className="relative z-10 p-6">
                <h3 className="text-xl font-bold text-white mb-3 sm:group-hover:text-transparent sm:group-hover:bg-clip-text sm:group-hover:bg-gradient-to-r sm:group-hover:from-purple-400 sm:group-hover:to-pink-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 text-sm leading-relaxed sm:group-hover:text-gray-200 transition-colors duration-200">
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
                      className="px-3 py-1 bg-gray-700/50 backdrop-blur-sm text-gray-300 text-xs font-medium rounded-full border border-gray-600/50 sm:group-hover:border-gray-500 sm:group-hover:text-white transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom gradient line - desktop only */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 sm:group-hover:scale-x-100 transition-transform duration-200`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

