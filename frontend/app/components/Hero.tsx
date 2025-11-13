'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ChipPowerUp from './ChipPowerUp';

// GSAP plugin is registered globally in gsapOptimizations

const backgroundServices = [
  { text: 'ERP Solutions', position: 'top-20 left-10' },
  { text: 'CRM Systems', position: 'top-40 right-20' },
  { text: 'Web Development', position: 'bottom-32 left-1/4' },
  { text: 'Cloud Services', position: 'bottom-20 right-1/3' },
  { text: 'Data Analytics', position: 'top-1/3 left-1/3' },
  { text: 'AI Integration', position: 'top-1/2 right-1/4' },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bgTextRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set GSAP defaults for smooth performance
      gsap.defaults({ 
        ease: 'power2.out',
        force3D: true 
      });

      // Create a master timeline for coordinated entrance
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Entrance animations - staggered and smooth
      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { 
            opacity: 0, 
            y: 60,
            scale: 0.95
          },
          { 
            opacity: 1, 
            y: 0, 
            scale: 1,
            duration: 1.2,
            ease: 'power4.out'
          },
          0.2
        );
      }

      if (subtitleRef.current) {
        tl.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 40 },
          { 
            opacity: 1, 
            y: 0,
            duration: 1,
            ease: 'power3.out'
          },
          0.4
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0,
            duration: 0.9,
            ease: 'power3.out'
          },
          0.6
        );
      }

      if (buttonRef.current) {
        tl.fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.8, y: 20 },
          { 
            opacity: 1, 
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: 'back.out(1.4)'
          },
          0.8
        );
      }

      // Smooth background text animations
      bgTextRefs.current.forEach((ref, index) => {
        if (ref) {
          // Gentle floating animation
          gsap.to(ref, {
            y: '+=20',
            duration: 4 + index * 0.3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });

          // Subtle rotation
          gsap.to(ref, {
            rotation: 5,
            duration: 8 + index * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });

          // Smooth scroll parallax
          gsap.to(ref, {
            y: '-=80',
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });
        }
      });

      // Floating circles - gentle movement
      const circles = heroRef.current?.querySelectorAll('.floating-circle');
      if (circles) {
        circles.forEach((circle, index) => {
          gsap.to(circle, {
            y: '+=30',
            x: '+=15',
            scale: 1.05,
            duration: 5 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });

          // Scroll parallax for circles
          gsap.to(circle, {
            y: '-=120',
            opacity: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5,
            },
          });
        });
      }

      // Main content parallax on scroll
      if (titleRef.current) {
        gsap.to(titleRef.current, {
          y: -40,
          opacity: 0.2,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      if (subtitleRef.current) {
        gsap.to(subtitleRef.current, {
          y: -30,
          opacity: 0.3,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      if (descRef.current) {
        gsap.to(descRef.current, {
          y: -25,
          opacity: 0.4,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      if (buttonRef.current) {
        gsap.to(buttonRef.current, {
          y: -20,
          opacity: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      {/* Chip Power-Up Animation */}
      <ChipPowerUp />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-circle absolute w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 dark:opacity-10 blur-3xl top-20 left-10"></div>
        <div className="floating-circle absolute w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 dark:opacity-10 blur-3xl bottom-20 right-10"></div>
        <div className="floating-circle absolute w-64 h-64 bg-pink-200 dark:bg-pink-900 rounded-full opacity-20 dark:opacity-10 blur-3xl top-1/2 left-1/2"></div>
        <div className="floating-circle absolute w-40 h-40 bg-cyan-200 dark:bg-cyan-900 rounded-full opacity-15 dark:opacity-8 blur-2xl top-10 right-1/4"></div>
        <div className="floating-circle absolute w-56 h-56 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-15 dark:opacity-8 blur-2xl bottom-40 left-1/3"></div>
      </div>

      {/* Animated Background Text */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundServices.map((service, index) => (
          <div
            key={index}
            ref={(el) => {
              bgTextRefs.current[index] = el;
            }}
            className={`absolute ${service.position} transform -translate-x-1/2 -translate-y-1/2`}
          >
            <span className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 dark:from-blue-500/10 dark:via-purple-500/10 dark:to-pink-500/10 select-none whitespace-nowrap">
              {service.text}
            </span>
          </div>
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent leading-tight"
        >
          Data Scube
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-6 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Transforming Businesses with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-bold">
            ERP, CRM & Web Development
          </span>{' '}
          Solutions
        </p>
        <p 
          ref={descRef}
          className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          Empowering your business with cutting-edge technology and innovative solutions
        </p>
        <button
          ref={buttonRef}
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Get Started Today</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center text-gray-600 dark:text-gray-400">
          <span className="text-sm mb-2 font-medium">Scroll</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}