'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: '500+', label: 'Happy Clients', icon: '👥' },
  { number: '1000+', label: 'Projects Completed', icon: '🎯' },
  { number: '50+', label: 'Team Members', icon: '👨‍💼' },
  { number: '10+', label: 'Years Experience', icon: '⭐' },
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of technology trends to provide cutting-edge solutions.',
    icon: '💡',
  },
  {
    title: 'Quality',
    description: 'We deliver exceptional quality in every project we undertake.',
    icon: '✨',
  },
  {
    title: 'Customer Focus',
    description: 'Our clients success is our primary goal and driving force.',
    icon: '🤝',
  },
  {
    title: 'Integrity',
    description: 'We maintain transparency and honesty in all our business dealings.',
    icon: '🛡️',
  },
];

export default function AboutUs() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const title = sectionRef.current?.querySelector('h2');
      const subtitle = sectionRef.current?.querySelector('.about-subtitle');
      const content = sectionRef.current?.querySelector('.about-content');
      const stats = statsRef.current?.querySelectorAll('.stat-card');
      const valueCards = sectionRef.current?.querySelectorAll('.value-card');

      // Title animation
      if (title) {
        gsap.fromTo(
          title,
          {
            opacity: 0,
            y: 50,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Subtitle animation
      if (subtitle) {
        gsap.fromTo(
          subtitle,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Content animation
      if (content) {
        gsap.fromTo(
          content,
          {
            opacity: 0,
            x: -50,
          },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Stats counter animation
      if (stats) {
        stats.forEach((stat, index) => {
          const number = stat.querySelector('.stat-number');
          const label = stat.querySelector('.stat-label');
          
          if (number) {
            const finalValue = number.textContent || '0';
            gsap.fromTo(
              number,
              {
                opacity: 0,
                scale: 0,
                rotation: -180,
              },
              {
                opacity: 1,
                scale: 1,
                rotation: 0,
                duration: 0.8,
                delay: index * 0.15,
                ease: 'back.out(2)',
                scrollTrigger: {
                  trigger: stat,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }

          if (label) {
            gsap.fromTo(
              label,
              {
                opacity: 0,
                y: 20,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                delay: index * 0.15 + 0.3,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: stat,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              }
            );
          }
        });
      }

      // Vision and Mission cards animation
      const visionCard = sectionRef.current?.querySelector('.vision-card');
      const missionCard = sectionRef.current?.querySelector('.mission-card');
      
      if (visionCard) {
        gsap.fromTo(
          visionCard,
          {
            opacity: 0,
            x: -100,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: visionCard,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (missionCard) {
        gsap.fromTo(
          missionCard,
          {
            opacity: 0,
            x: 100,
            scale: 0.8,
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: missionCard,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Value cards animation with advanced effects
      if (valueCards) {
        // Initial scroll animation - different effects for each card
        valueCards.forEach((card, index) => {
          const delay = index * 0.15;
          
          // Staggered entrance with rotation
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              rotationY: -90,
              scale: 0.5,
              z: -200,
            },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              scale: 1,
              z: 0,
              duration: 1,
              delay: delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Floating animation
          gsap.to(card, {
            y: -10,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: delay + 1,
          });
        });

        // Background animations
        // Floating circles
        const bgCircles = sectionRef.current?.querySelectorAll('.value-bg-circle-1, .value-bg-circle-2, .value-bg-circle-3, .value-bg-circle-4');
        if (bgCircles) {
          bgCircles.forEach((circle, index) => {
            gsap.to(circle, {
              x: 30 + index * 10,
              y: 30 + index * 10,
              scale: 1.1,
              duration: 4 + index,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });

            // Rotate circles
            gsap.to(circle, {
              rotation: 360,
              duration: 20 + index * 5,
              repeat: -1,
              ease: 'none',
            });
          });
        }

        // Animated particles
        const particles = sectionRef.current?.querySelectorAll('[class*="value-particle-"]');
        if (particles) {
          particles.forEach((particle, index) => {
            gsap.to(particle, {
              y: -20 - Math.random() * 30,
              x: 10 + Math.random() * 20,
              opacity: 0.8,
              scale: 1.5,
              duration: 3 + Math.random() * 2,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
              delay: index * 0.2,
            });

            // Random floating
            gsap.to(particle, {
              x: `+=${20 + Math.random() * 40}`,
              y: `+=${20 + Math.random() * 40}`,
              duration: 4 + Math.random() * 3,
              repeat: -1,
              yoyo: true,
              ease: 'power1.inOut',
            });
          });
        }

        // Geometric shapes animation
        const shapes = sectionRef.current?.querySelectorAll('.value-shape-1, .value-shape-2, .value-shape-3');
        if (shapes) {
          shapes.forEach((shape, index) => {
            gsap.to(shape, {
              rotation: 360,
              duration: 15 + index * 5,
              repeat: -1,
              ease: 'none',
            });

            gsap.to(shape, {
              scale: 1.2,
              opacity: 0.6,
              duration: 2 + index * 0.5,
              repeat: -1,
              yoyo: true,
              ease: 'sine.inOut',
            });
          });
        }

        // Scroll parallax for background elements
        if (bgCircles) {
          gsap.to(bgCircles, {
            y: -100,
            opacity: 0.3,
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector('.relative'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }
      }

      // Circuit LED animations
      const circuitLeds = sectionRef.current?.querySelectorAll('.circuit-card-led, .circuit-node, .circuit-connection');
      if (circuitLeds) {
        circuitLeds.forEach((led) => {
          gsap.to(led, {
            scale: 1.3,
            opacity: 0.8,
            duration: 1,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: Math.random() * 0.5,
          });
        });
      }

      // Circuit wire glow animation
      const circuitWires = sectionRef.current?.querySelectorAll('.circuit-wire');
      if (circuitWires) {
        circuitWires.forEach((wire, index) => {
          gsap.to(wire, {
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });
        });
      }

      // Value cards animation with advanced effects
      if (valueCards) {
        // Initial scroll animation - different effects for each card
        valueCards.forEach((card, index) => {
          const delay = index * 0.15;
          
          // Staggered entrance with rotation
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 100,
              rotationY: -90,
              scale: 0.5,
              z: -200,
            },
            {
              opacity: 1,
              y: 0,
              rotationY: 0,
              scale: 1,
              z: 0,
              duration: 1,
              delay: delay,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: card,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );

          // Floating animation
          gsap.to(card, {
            y: -10,
            duration: 2 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: delay + 1,
          });

          // Mouse enter effect - glow and scale
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.1,
              rotationY: 5,
              rotationX: 5,
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              duration: 0.3,
              ease: 'power2.out',
            });
            
            // Add glow effect
            const glow = card.querySelector('.value-glow');
            if (glow) {
              gsap.to(glow, {
                opacity: 1,
                scale: 1.2,
                duration: 0.3,
              });
            }
          });

          // Mouse leave effect
          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              rotationY: 0,
              rotationX: 0,
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
              duration: 0.3,
              ease: 'power2.out',
            });
            
            const glow = card.querySelector('.value-glow');
            if (glow) {
              gsap.to(glow, {
                opacity: 0.5,
                scale: 1,
                duration: 0.3,
              });
            }
          });

          // Mouse move parallax effect
          card.addEventListener('mousemove', (e) => {
            const event = e as MouseEvent;
            const rect = card.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            gsap.to(card, {
              rotationX: rotateX,
              rotationY: rotateY,
              transformPerspective: 1000,
              duration: 0.5,
              ease: 'power1.out',
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black relative overflow-hidden"
    >
      {/* Circuit Board Background */}
      <div className="absolute inset-0 opacity-60">
        {/* PCB Grid Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        ></div>
        
        {/* Circuit Board Base Color */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-gray-800/40 to-green-900/30"></div>
      </div>

      {/* Animated Circuit Wires */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
        {/* Wire from top to Who We Are */}
        <path
          id="wire-1"
          d="M 50 50 Q 200 100, 400 200 L 400 350"
          fill="none"
          stroke="rgba(34, 197, 94, 0.7)"
          strokeWidth="3"
          className="circuit-wire"
        />
        
        {/* Wire from Who We Are to Vision */}
        <path
          id="wire-2"
          d="M 400 350 Q 600 400, 800 450 L 800 550"
          fill="none"
          stroke="rgba(59, 130, 246, 0.7)"
          strokeWidth="3"
          className="circuit-wire"
        />
        
        {/* Wire from Mission to Stats */}
        <path
          id="wire-3"
          d="M 1100 550 Q 900 600, 700 700 L 700 850"
          fill="none"
          stroke="rgba(168, 85, 247, 0.7)"
          strokeWidth="3"
          className="circuit-wire"
        />
        
        {/* Wire from Stats to Values */}
        <path
          id="wire-4"
          d="M 700 950 Q 500 1000, 300 1100 L 300 1300"
          fill="none"
          stroke="rgba(249, 115, 22, 0.7)"
          strokeWidth="3"
          className="circuit-wire"
        />
        
        {/* Horizontal connection wire */}
        <path
          id="wire-5"
          d="M 400 500 L 1100 500"
          fill="none"
          stroke="rgba(34, 197, 94, 0.6)"
          strokeWidth="2"
          strokeDasharray="10,5"
          className="circuit-wire"
        />
        
        {/* Animated Light Nodes */}
        {[
          { id: 'light-1', x: 400, y: 350, color: 'rgba(34, 197, 94, 0.8)' },
          { id: 'light-2', x: 800, y: 550, color: 'rgba(59, 130, 246, 0.8)' },
          { id: 'light-3', x: 1100, y: 550, color: 'rgba(168, 85, 247, 0.8)' },
          { id: 'light-4', x: 700, y: 850, color: 'rgba(249, 115, 22, 0.8)' },
          { id: 'light-5', x: 300, y: 1300, color: 'rgba(34, 197, 94, 0.8)' },
          { id: 'light-6', x: 50, y: 50, color: 'rgba(59, 130, 246, 0.8)' },
        ].map((light) => (
          <g key={light.id}>
            {/* Glow */}
            <circle
              cx={light.x}
              cy={light.y}
              r="8"
              fill={light.color}
              opacity="0.6"
              className="circuit-light-glow"
            />
            {/* Core Light */}
            <circle
              cx={light.x}
              cy={light.y}
              r="4"
              fill={light.color}
              className="circuit-light"
            />
          </g>
        ))}
        
        {/* Flowing Light Animation along wires */}
        <circle
          id="flowing-light-1"
          r="6"
          fill="rgba(34, 197, 94, 1)"
          className="flowing-light"
        >
          <animateMotion dur="3s" repeatCount="indefinite">
            <mpath href="#wire-1" />
          </animateMotion>
        </circle>
        
        <circle
          id="flowing-light-2"
          r="6"
          fill="rgba(59, 130, 246, 1)"
          className="flowing-light"
        >
          <animateMotion dur="4s" repeatCount="indefinite" begin="1s">
            <mpath href="#wire-2" />
          </animateMotion>
        </circle>
        
        <circle
          id="flowing-light-3"
          r="6"
          fill="rgba(168, 85, 247, 1)"
          className="flowing-light"
        >
          <animateMotion dur="3.5s" repeatCount="indefinite" begin="0.5s">
            <mpath href="#wire-3" />
          </animateMotion>
        </circle>
      </svg>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 relative">
          {/* Circuit LED indicator near title */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8">
            <div className="circuit-node w-4 h-4 bg-green-400 rounded-full shadow-lg shadow-green-400/50"></div>
          </div>
          
          <h2 className="text-5xl font-bold text-white mb-4 relative">
            <span className="relative">
              About Us
              {/* Glowing text effect */}
              <span className="absolute inset-0 text-green-400 blur-xl opacity-50">About Us</span>
            </span>
          </h2>
          <p className="about-subtitle text-xl text-gray-300 max-w-2xl mx-auto">
            Empowering businesses with innovative technology solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 relative">
          {/* Circuit connection point */}
          <div className="absolute top-0 left-0 w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/50 circuit-connection"></div>
          
          <div className="about-content relative">
            {/* Card LED indicator */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 circuit-card-led"></div>
            
            <h3 className="text-3xl font-bold text-white mb-6">
              Who We Are
            </h3>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              Data Scube is a leading technology company specializing in ERP solutions, 
              CRM systems, and custom web development. We combine innovation with expertise 
              to deliver solutions that transform businesses and drive growth.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              With over a decade of experience, we've helped hundreds of companies streamline 
              their operations, enhance customer relationships, and achieve digital transformation. 
              Our team of skilled professionals is committed to delivering excellence in every project.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe in building long-term partnerships with our clients, understanding their 
              unique needs, and providing tailored solutions that exceed expectations.
            </p>
          </div>

          <div className="flex items-center justify-center relative">
            {/* Circuit connection point */}
            <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 circuit-connection"></div>
            
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-2xl opacity-30 transform rotate-6"></div>
              <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-blue-500/30 overflow-hidden">
                {/* Circuit board pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(59, 130, 246, 0.1) 2px, rgba(59, 130, 246, 0.1) 4px)`,
                }}></div>
                
                {/* LED indicator */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse circuit-card-led"></div>
                
                <div className="text-center relative z-10">
                  <div className="text-6xl mb-4">🚀</div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Our Mission
                  </h4>
                  <p className="text-gray-300">
                    To empower businesses with cutting-edge technology solutions that drive 
                    innovation, efficiency, and sustainable growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision and Mission Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-20 relative">
          {/* Circuit connection lines */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400/20 via-purple-400/20 to-transparent"></div>
          
          {/* Our Vision */}
          <div className="vision-card relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-blue-500/30 overflow-hidden">
            {/* Circuit pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(59, 130, 246, 0.1) 2px, rgba(59, 130, 246, 0.1) 4px)`,
            }}></div>
            
            {/* LED indicators */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse circuit-card-led"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50 animate-pulse circuit-card-led"></div>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center text-4xl mr-4 shadow-lg shadow-blue-500/50">
                👁️
              </div>
              <h3 className="text-3xl font-bold text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              To become the globally recognized leader in technology solutions, setting new 
              standards for innovation, excellence, and customer satisfaction. We envision a 
              future where every business, regardless of size, has access to world-class 
              technology that empowers them to achieve extraordinary success.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4 relative z-10">
              Our vision drives us to continuously innovate, expand our global presence, 
              and build solutions that shape the future of business technology.
            </p>
          </div>

          {/* Our Mission - Enhanced */}
          <div className="mission-card relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-purple-500/30 overflow-hidden">
            {/* Circuit pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(168, 85, 247, 0.1) 2px, rgba(168, 85, 247, 0.1) 4px)`,
            }}></div>
            
            {/* LED indicators */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse circuit-card-led"></div>
            <div className="absolute bottom-4 right-4 w-2 h-2 bg-pink-400 rounded-full shadow-lg shadow-pink-400/50 animate-pulse circuit-card-led"></div>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center text-4xl mr-4 shadow-lg shadow-purple-500/50">
                🎯
              </div>
              <h3 className="text-3xl font-bold text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              To empower businesses worldwide with cutting-edge technology solutions that drive 
              innovation, efficiency, and sustainable growth. We are committed to delivering 
              exceptional value through our ERP, CRM, and web development services.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4 relative z-10">
              We strive to build long-lasting partnerships with our clients, understand their 
              unique challenges, and provide tailored solutions that transform their operations 
              and exceed their expectations.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 relative">
          {/* Circuit connection line above stats */}
          <div className="absolute -top-4 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-orange-400/30 to-transparent"></div>
          
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-orange-500/30 overflow-hidden"
            >
              {/* Circuit pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(249, 115, 22, 0.1) 2px, rgba(249, 115, 22, 0.1) 4px)`,
              }}></div>
              
              {/* LED indicator */}
              <div className={`absolute top-2 ${index % 2 === 0 ? 'left-2' : 'right-2'} w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50 animate-pulse circuit-card-led`}></div>
              
              <div className="relative z-10">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="stat-number text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="stat-label text-gray-300 font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-blue-900/20 dark:to-purple-900/20">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Animated Grid Pattern */}
            <div 
              className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px',
                animation: 'gridMove 20s linear infinite',
              }}
            ></div>

            {/* Floating Animated Circles */}
            <div className="value-bg-circle-1 absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 dark:from-blue-600/10 dark:to-cyan-600/10 rounded-full blur-3xl top-0 left-0"></div>
            <div className="value-bg-circle-2 absolute w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl bottom-0 right-0"></div>
            <div className="value-bg-circle-3 absolute w-80 h-80 bg-gradient-to-r from-orange-400/20 to-red-400/20 dark:from-orange-600/10 dark:to-red-600/10 rounded-full blur-3xl top-1/2 right-1/4"></div>
            <div className="value-bg-circle-4 absolute w-72 h-72 bg-gradient-to-r from-green-400/20 to-emerald-400/20 dark:from-green-600/10 dark:to-emerald-600/10 rounded-full blur-3xl bottom-1/4 left-1/3"></div>

            {/* Animated Particles */}
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className={`value-particle-${i} absolute w-2 h-2 rounded-full`}
                style={{
                  background: `hsl(${210 + i * 10}, 70%, ${50 + i * 2}%)`,
                  left: `${10 + (i * 6)}%`,
                  top: `${10 + (i * 5)}%`,
                  opacity: 0.4,
                  boxShadow: `0 0 ${10 + i * 2}px hsl(${210 + i * 10}, 70%, 60%)`,
                }}
              ></div>
            ))}

            {/* Decorative Geometric Shapes */}
            <div className="value-shape-1 absolute top-10 right-10 w-32 h-32 border-2 border-blue-400/20 dark:border-blue-500/10 rotate-45 rounded-lg"></div>
            <div className="value-shape-2 absolute bottom-20 left-20 w-24 h-24 border-2 border-purple-400/20 dark:border-purple-500/10 rotate-12 rounded-full"></div>
            <div className="value-shape-3 absolute top-1/3 left-10 w-16 h-16 bg-gradient-to-br from-pink-400/10 to-orange-400/10 dark:from-pink-600/5 dark:to-orange-600/5 rotate-45 rounded-lg"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-16 text-center">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                Our Core Values
              </span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const gradients = [
                'from-blue-500 via-cyan-500 to-blue-600',
                'from-purple-500 via-pink-500 to-purple-600',
                'from-orange-500 via-red-500 to-orange-600',
                'from-green-500 via-emerald-500 to-green-600',
              ];
              const glowColors = [
                'rgba(59, 130, 246, 0.4)',
                'rgba(168, 85, 247, 0.4)',
                'rgba(249, 115, 22, 0.4)',
                'rgba(34, 197, 94, 0.4)',
              ];

              return (
                <div
                  key={index}
                  className="value-card relative group cursor-pointer perspective-1000"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Glow Effect */}
                  <div
                    className="value-glow absolute inset-0 rounded-2xl opacity-50 blur-2xl transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${glowColors[index]}, transparent)`,
                      transform: 'scale(0.9)',
                    }}
                  ></div>

                  {/* Main Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border-2 border-gray-200 dark:border-gray-700 text-center overflow-hidden transform transition-all duration-300" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Animated Background Gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Icon with Glow */}
                    <div className="relative z-10 mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${gradients[index]} shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                        style={{
                          boxShadow: `0 10px 30px ${glowColors[index]}`,
                        }}
                      >
                        <div className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                          {value.icon}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 dark:group-hover:from-blue-400 dark:group-hover:to-purple-400 transition-all duration-300">
                        {value.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom Accent Line */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[index]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
                    ></div>

                    {/* Corner Accents */}
                    <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-blue-500 dark:border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-purple-500 dark:border-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
            </div>
          
            {/* Bottom Decorative Section */}
            <div className="relative z-10 mt-20 pt-16">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800"></div>
              <div className="text-center">
                <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  These values guide everything we do, from the solutions we build to the partnerships we form. 
                  They are the foundation of our commitment to excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

