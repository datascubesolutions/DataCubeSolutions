'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const bgTextRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Only prevent scroll if it goes negative (above top)
    const handleScroll = () => {
      if (window.scrollY < 0) {
        window.scrollTo(0, 0);
      }
    };

    // Prevent wheel scroll UP only when at top
    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY <= 0 && e.deltaY < 0) {
        e.preventDefault();
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial entrance animations
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 100, scale: 0.8, rotationX: -15 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          rotationX: 0,
          duration: 1.2, 
          ease: 'power3.out' 
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50, blur: 10 },
        { 
          opacity: 1, 
          y: 0, 
          blur: 0,
          duration: 1, 
          delay: 0.3, 
          ease: 'power2.out' 
        }
      );

      gsap.fromTo(
        buttonRef.current,
        { opacity: 0, scale: 0, rotation: -180 },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0,
          duration: 0.8, 
          delay: 0.6, 
          ease: 'back.out(2)' 
        }
      );

      // Background text animations - floating and parallax
      bgTextRefs.current.forEach((ref, index) => {
        if (ref) {
          // Initial floating animation
          gsap.to(ref, {
            y: 30,
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });

          // Parallax scroll effect
          gsap.to(ref, {
            y: -100,
            opacity: 0,
            scale: 0.8,
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: 1,
            },
          });

          // Rotation animation
          gsap.to(ref, {
            rotation: 360,
            duration: 20 + index * 5,
            repeat: -1,
            ease: 'none',
          });
        }
      });

      // Floating circles with enhanced animations
      gsap.to('.floating-circle', {
        y: 30,
        scale: 1.1,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.4,
      });

      // Parallax effect for circles on scroll
      gsap.to('.floating-circle', {
        y: -150,
        scale: 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
        stagger: 0.2,
      });

      // Title parallax and fade on scroll
      gsap.to(titleRef.current, {
        y: -50,
        opacity: 0.3,
        scale: 0.9,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Subtitle parallax
      gsap.to(subtitleRef.current, {
        y: -30,
        opacity: 0.4,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      // Button parallax
      gsap.to(buttonRef.current, {
        y: -20,
        opacity: 0.5,
        scale: 0.95,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-0"
      style={{ paddingTop: 0, marginTop: 0 }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating-circle absolute w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full opacity-20 dark:opacity-10 blur-3xl top-20 left-10"></div>
        <div className="floating-circle absolute w-96 h-96 bg-purple-200 dark:bg-purple-900 rounded-full opacity-20 dark:opacity-10 blur-3xl bottom-20 right-10"></div>
        <div className="floating-circle absolute w-64 h-64 bg-pink-200 dark:bg-pink-900 rounded-full opacity-20 dark:opacity-10 blur-3xl top-1/2 left-1/2"></div>
        
        {/* Additional floating particles */}
        <div className="floating-circle absolute w-40 h-40 bg-cyan-200 dark:bg-cyan-900 rounded-full opacity-15 dark:opacity-8 blur-2xl top-10 right-1/4"></div>
        <div className="floating-circle absolute w-56 h-56 bg-indigo-200 dark:bg-indigo-900 rounded-full opacity-15 dark:opacity-8 blur-2xl bottom-40 left-1/3"></div>
      </div>

      {/* Animated Background Text with Low Opacity */}
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

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
          style={{
            textShadow: '0 0 40px rgba(59, 130, 246, 0.3)',
          }}
        >
          Data Scube
        </h1>
        <p
          ref={subtitleRef}
          className="text-xl md:text-3xl text-gray-700 dark:text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          Transforming Businesses with{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-bold">
            ERP, CRM & Web Development
          </span>{' '}
          Solutions
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Empowering your business with cutting-edge technology and innovative solutions
        </p>
        <button
          ref={buttonRef}
          onClick={() => scrollToSection('contact')}
          className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">Get Started Today</span>
          <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center text-gray-600 dark:text-gray-400">
          <span className="text-sm mb-2">Scroll</span>
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
