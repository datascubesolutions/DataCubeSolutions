'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Target, User, Star, Lightbulb, Sparkles, Handshake, Shield, Rocket, Eye, Goal, Briefcase, Calendar, Award, TrendingUp, ArrowRight } from 'lucide-react';

// GSAP plugin is registered globally in gsapOptimizations

const stats = [
  { number: '30+', label: 'Happy Clients', icon: Users },
  { number: '12+', label: 'Projects Completed', icon: Target },
  { number: '15+', label: 'Team Members', icon: User },
  { number: '2.3+', label: 'Years Experience', icon: Star },
];

const values = [
  {
    title: 'Complete Solutions',
    description: 'We provide end-to-end services - from IT solutions to startup support, ensuring all your business needs are met in one place.',
    icon: Lightbulb,
  },
  {
    title: 'Expert Excellence',
    description: 'Our team combines technology expertise with business consulting to deliver exceptional quality in every project.',
    icon: Sparkles,
  },
  {
    title: 'Client Success',
    description: 'Your success is our primary goal - whether you\'re a startup needing registration and funding or an enterprise requiring IT solutions.',
    icon: Handshake,
  },
  {
    title: 'Trusted Partnership',
    description: 'We maintain transparency and integrity in all our dealings, building long-term partnerships with our clients.',
    icon: Shield,
  },
];

const leadershipTeam = [
  {
    name: 'Kaushal Jadav',
    title: 'Partner',
    image: 'https://media.licdn.com/dms/image/v2/D4D03AQHBkLuFoJ4cIA/profile-displayphoto-crop_800_800/B4DZlC85Z5JIAI-/0/1757764886828?e=1764806400&v=beta&t=JyUibtDBPiVKsa6oCId0myOf2M9Q1fG8zAxPbzQEdMo',
    // description: 'Visionary leader with 15+ years in enterprise technology and startup consulting',
  },
  {
    name: 'Amit Yadav',
    title: 'Partner',
    image: '/api/placeholder/200/200',
    // description: 'Expert in scalable IT solutions, ERP/CRM systems, and digital transformation',
  },
  {
    name: 'Nikul Prajapati',
    title: 'Partner',
    image: '/api/placeholder/200/200',
    // description: 'Specializes in company registration, funding support, and business documentation',
  },
  {
    name: 'Pratish Tripathi',
    title: 'Partner',
    image: '/api/placeholder/200/200',
    description: 'Ensures exceptional client experiences across IT solutions and startup support',
  },
];

const timeline = [
  {
    year: '2014',
    title: 'Company Founded',
    description: 'Started with a vision to transform business operations through technology',
    icon: Rocket,
  },
  {
    year: '2016',
    title: 'First 100 Clients',
    description: 'Reached milestone of serving 100+ satisfied clients',
    icon: Target,
  },
  {
    year: '2018',
    title: 'International Expansion',
    description: 'Expanded operations to serve clients across multiple countries',
    icon: TrendingUp,
  },
  {
    year: '2020',
    title: '500+ Projects',
    description: 'Completed over 500 successful projects across various industries',
    icon: Award,
  },
  {
    year: '2022',
    title: '50+ Team Members',
    description: 'Grew to a team of 50+ skilled professionals',
    icon: Users,
  },
  {
    year: '2024',
    title: 'Industry Leader',
    description: 'Recognized as a leading technology solutions provider',
    icon: Star,
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

      // Value cards animation - subtle entrance with hover effects
      if (valueCards) {
        valueCards.forEach((card, index) => {
          const icon = card.querySelector('.value-icon');
          const title = card.querySelector('.value-title');
          
          // Entrance animation
          gsap.fromTo(
            card,
            { opacity: 0, y: 50, scale: 0.9 },
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
                toggleActions: 'play none none none',
              },
            }
          );

          // Icon entrance animation
          if (icon) {
            gsap.fromTo(
              icon,
              { scale: 0, rotation: -180 },
              {
                scale: 1,
                rotation: 0,
                duration: 0.6,
                delay: index * 0.1 + 0.2,
                ease: 'back.out(1.7)',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play none none none',
                },
              }
            );
          }

          // Hover effects
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.05,
              y: -8,
              duration: 0.3,
              ease: 'power2.out',
            });
            
            if (icon) {
              gsap.to(icon, {
                scale: 1.15,
                rotation: 5,
                duration: 0.3,
                ease: 'power2.out',
              });
            }
            
            if (title) {
              gsap.to(title, {
                y: -2,
                duration: 0.3,
                ease: 'power2.out',
              });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              scale: 1,
              y: 0,
              duration: 0.3,
              ease: 'power2.out',
            });
            
            if (icon) {
              gsap.to(icon, {
                scale: 1,
                rotation: 0,
                duration: 0.3,
                ease: 'power2.out',
              });
            }
            
            if (title) {
              gsap.to(title, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out',
              });
            }
          });
        });
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

      // Leadership team cards animation
      const leadershipCards = sectionRef.current?.querySelectorAll('.leadership-card');
      if (leadershipCards) {
        gsap.fromTo(
          leadershipCards,
          { opacity: 0, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leadershipCards[0]?.parentElement,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Careers section animation
      const careersSection = sectionRef.current?.querySelector('.careers-section');
      if (careersSection) {
        gsap.fromTo(
          careersSection,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: careersSection,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      }

      // Value cards simple animation
      if (valueCards) {
        gsap.fromTo(
          valueCards,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: valueCards[0]?.parentElement,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          }
        );
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
            Empowering businesses with complete IT solutions and comprehensive startup support
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
              Data Scube is a comprehensive business solutions provider offering both IT & Digital Solutions 
              and Startup Support & Consulting services. We specialize in ERP systems, CRM platforms, 
              website development, mobile apps, digital marketing, as well as company registration, 
              certifications, funding support, and business documentation.
            </p>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed">
              With over a decade of experience, we've helped 500+ companies and startups streamline 
              their operations, launch successfully, secure funding, and achieve digital transformation. 
              Our expert team combines technology expertise with business consulting to deliver complete solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              We believe in being your one-stop partner - from helping startups get registered and funded 
              to providing enterprise-level IT solutions. We understand your unique needs and provide 
              tailored solutions that help you launch, grow, and scale successfully.
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
                  <div className="mb-4">
                    <Rocket className="w-16 h-16 text-green-400 mx-auto" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    Our Mission
                  </h4>
                  <p className="text-gray-300">
                    To empower businesses with complete IT solutions and comprehensive startup support 
                    that drive innovation, efficiency, and sustainable growth from launch to scale.
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
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-blue-500/50">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              To become the globally recognized one-stop solution provider for businesses - combining 
              cutting-edge IT & Digital Solutions with comprehensive Startup Support & Consulting. 
              We envision a future where every business, from startups to enterprises, has access to 
              complete solutions that help them launch, grow, and scale successfully.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4 relative z-10">
              Our vision drives us to continuously innovate in both technology and business consulting, 
              expand our service offerings, and build solutions that empower businesses at every stage 
              of their journey - from registration and funding to digital transformation and growth.
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
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/50">
                <Goal className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed relative z-10">
              To empower businesses worldwide with complete IT & Digital Solutions (ERP, CRM, websites, 
              apps, digital marketing) and comprehensive Startup Support (registration, certifications, 
              funding, documentation). We are committed to delivering exceptional value through our 
              integrated approach to business growth.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4 relative z-10">
              We strive to be your trusted partner throughout your business journey - from startup 
              registration and funding to enterprise-level technology solutions. We understand your 
              unique challenges and provide tailored solutions that help you launch, grow, and scale successfully.
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
                <div className="mb-3">
                  {(() => {
                    const IconComponent = stat.icon;
                    return <IconComponent className="w-10 h-10 text-orange-400 mx-auto" />;
                  })()}
                </div>
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
        <div className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black">
          {/* Circuit Board Background */}
          <div className="absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(34, 197, 94, 0.2) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-gray-800/30 to-green-900/20"></div>
          </div>

          {/* Content Container */}
          <div className="relative z-10 container mx-auto px-6">
            <div className="text-center mb-16 fade-in">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Core Values
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The principles that guide our work and define our culture
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const borderColors = [
                'border-blue-500/30',
                'border-purple-500/30',
                'border-orange-500/30',
                'border-green-500/30',
              ];
              const hoverBorderColors = [
                'hover:border-blue-500/60',
                'hover:border-purple-500/60',
                'hover:border-orange-500/60',
                'hover:border-green-500/60',
              ];
              const iconGradients = [
                'from-blue-600 to-cyan-600',
                'from-purple-600 to-pink-600',
                'from-orange-600 to-red-600',
                'from-green-600 to-emerald-600',
              ];

              return (
                <div
                  key={index}
                  className="value-card relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-gray-700/50 hover:border-gray-700 overflow-hidden"
                >
                  {/* Circuit pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(34, 197, 94, 0.1) 2px, rgba(34, 197, 94, 0.1) 4px)`,
                  }}></div>
                  
                  {/* LED indicator */}
                  <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse circuit-card-led`}></div>
                  
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <div className="mb-6 value-icon-container">
                      <div className={`value-icon inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${iconGradients[index]} shadow-lg`}>
                        {(() => {
                          const IconComponent = value.icon;
                          return <IconComponent className="w-8 h-8 text-white" />;
                        })()}
                      </div>
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-white mb-4 value-title">
                      {value.title}
                    </h4>
                    <p className="text-gray-300 leading-relaxed text-sm value-description">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
            </div>
          
            {/* Bottom Decorative Section */}
            <div className="relative z-10 mt-20 pt-16">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-400/50 to-transparent"></div>
              <div className="text-center">
                <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  These values guide everything we do, from the solutions we build to the partnerships we form. 
                  They are the foundation of our commitment to excellence and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Team Section */}
        <div className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black">
          {/* Circuit Board Background */}
          <div className="absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(59, 130, 246, 0.2) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-800/30 to-blue-900/20"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16 fade-in">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our Leadership Team
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Meet the visionaries driving innovation and excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((member, index) => (
                <div
                  key={index}
                  className="leadership-card group relative bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border-2 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden fade-in"
                >
                  {/* Circuit pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(59, 130, 246, 0.1) 2px, rgba(59, 130, 246, 0.1) 4px)`,
                  }}></div>
                  
                  {/* LED indicator */}
                  <div className={`absolute top-4 ${index % 2 === 0 ? 'left-4' : 'right-4'} w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse circuit-card-led`}></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="mb-4 relative inline-block">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center overflow-hidden">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover rounded-full"
                            onError={(e) => {
                              // Fallback to User icon if image fails to load
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = '<div class="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center"><svg class="w-14 h-14 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></div>';
                              }
                            }}
                          />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-green-400 rounded-full border-4 border-gray-800 shadow-lg"></div>
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {member.name}
                    </h4>
                    <p className="text-blue-400 font-semibold mb-3 text-sm">{member.title}</p>
                    {/* <p className="text-gray-400 text-xs leading-relaxed">{member.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Careers Section */}
        <div className="careers-section relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black">
          {/* Circuit Board Background */}
          <div className="absolute inset-0 opacity-40">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(to right, rgba(249, 115, 22, 0.2) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(249, 115, 22, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-gray-800/30 to-orange-900/20"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center fade-in">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-600 to-red-600 shadow-lg mb-6">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Join Our Team
                </h3>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                  Be part of a dynamic team that's shaping the future of technology. 
                  We're always looking for talented individuals who share our passion for innovation.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border-2 border-blue-500/30 hover:border-blue-500/60 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Circuit pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(59, 130, 246, 0.1) 2px, rgba(59, 130, 246, 0.1) 4px)`,
                  }}></div>
                  {/* LED indicator */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50 animate-pulse circuit-card-led"></div>
                  <div className="relative z-10">
                    <Users className="w-10 h-10 text-blue-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Collaborative Culture</h4>
                    <p className="text-gray-400 text-sm">Work with talented professionals in a supportive environment</p>
                  </div>
                </div>
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border-2 border-purple-500/30 hover:border-purple-500/60 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Circuit pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(168, 85, 247, 0.1) 2px, rgba(168, 85, 247, 0.1) 4px)`,
                  }}></div>
                  {/* LED indicator */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full shadow-lg shadow-purple-400/50 animate-pulse circuit-card-led"></div>
                  <div className="relative z-10">
                    <Rocket className="w-10 h-10 text-purple-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h4>
                    <p className="text-gray-400 text-sm">Continuous learning and career development programs</p>
                  </div>
                </div>
                <div className="relative bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 border-2 border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Circuit pattern */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(249, 115, 22, 0.1) 2px, rgba(249, 115, 22, 0.1) 4px)`,
                  }}></div>
                  {/* LED indicator */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400 rounded-full shadow-lg shadow-orange-400/50 animate-pulse circuit-card-led"></div>
                  <div className="relative z-10">
                    <Award className="w-10 h-10 text-orange-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-white mb-2">Competitive Benefits</h4>
                    <p className="text-gray-400 text-sm">Comprehensive benefits package and flexible work options</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => window.location.href = '/contact'}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white text-lg font-semibold rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
              >
                {/* Circuit pattern on button */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255, 255, 255, 0.1) 2px, rgba(255, 255, 255, 0.1) 4px)`,
                }}></div>
                <span className="relative z-10">Explore Careers</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

