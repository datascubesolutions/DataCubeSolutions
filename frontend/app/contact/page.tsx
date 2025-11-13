'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { Mail, MessageCircle, Smartphone, Phone } from 'lucide-react';

// GSAP plugin is registered globally in gsapOptimizations

export default function ContactPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animation
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

      // Message bubbles floating animation
      const messageBubbles = pageRef.current?.querySelectorAll('.message-bubble');
      if (messageBubbles) {
        messageBubbles.forEach((bubble, index) => {
          gsap.to(bubble, {
            y: -30 + Math.random() * 60,
            x: -20 + Math.random() * 40,
            rotation: -10 + Math.random() * 20,
            scale: 1 + Math.random() * 0.2,
            duration: 4 + Math.random() * 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });
        });
      }

      // Envelope icons floating and rotating
      const envelopeIcons = pageRef.current?.querySelectorAll('.envelope-icon');
      if (envelopeIcons) {
        envelopeIcons.forEach((envelope, index) => {
          gsap.to(envelope, {
            y: -25 + Math.random() * 50,
            x: -15 + Math.random() * 30,
            rotation: -15 + Math.random() * 30,
            duration: 5 + Math.random() * 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });
        });
      }

      // Phone icons floating
      const phoneIcons = pageRef.current?.querySelectorAll('.phone-icon');
      if (phoneIcons) {
        phoneIcons.forEach((phone, index) => {
          gsap.to(phone, {
            y: -20 + Math.random() * 40,
            x: -10 + Math.random() * 20,
            rotation: -5 + Math.random() * 10,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.4,
          });
        });
      }

      // Connection nodes pulse animation
      const connectionNodes = pageRef.current?.querySelectorAll('.connection-node');
      if (connectionNodes) {
        connectionNodes.forEach((node, index) => {
          gsap.to(node, {
            scale: 2,
            opacity: 0.5,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        });
      }

      // Ripple effects animation
      const ripples = pageRef.current?.querySelectorAll('.ripple-effect');
      if (ripples) {
        ripples.forEach((ripple, index) => {
          const circle = ripple.querySelector('div');
          if (circle) {
            gsap.to(circle, {
              scale: 3,
              opacity: 0,
              duration: 4,
              repeat: -1,
              ease: 'power2.out',
              delay: index * 0.8,
            });
          }
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 overflow-hidden">
      <Header />
      <main ref={pageRef} className="pt-20 sm:pt-24 md:pt-32 relative">
        {/* Animated Background - Communication Theme */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 top-0">
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-pink-900/40"></div>

          {/* Floating Message Bubbles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute message-bubble"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400/50 to-purple-400/50 rounded-full backdrop-blur-sm border border-blue-300/50 flex items-center justify-center shadow-xl">
                {(() => {
                  const icons = [Mail, MessageCircle, Smartphone, Mail];
                  const IconComponent = icons[i % 4];
                  return <IconComponent className="w-8 h-8 text-white" />;
                })()}
              </div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-blue-400/50 to-purple-400/50 rounded-full"></div>
            </div>
          ))}

          {/* Communication Lines - Connecting nodes */}
          <svg className="absolute inset-0 w-full h-full opacity-50">
            {[...Array(15)].map((_, i) => {
              const x1 = Math.random() * 100;
              const y1 = Math.random() * 100;
              const x2 = Math.random() * 100;
              const y2 = Math.random() * 100;
              return (
                <line
                  key={i}
                  x1={`${x1}%`}
                  y1={`${y1}%`}
                  x2={`${x2}%`}
                  y2={`${y2}%`}
                  stroke="url(#commGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="4,4"
                  opacity="0.4"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-40"
                    dur={`${3 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
            <defs>
              <linearGradient id="commGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
              </linearGradient>
            </defs>
          </svg>

          {/* Floating Envelopes */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute envelope-icon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            >
              <div className="w-16 h-12 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-lg backdrop-blur-sm border border-purple-300/30 shadow-lg transform rotate-12 flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-400" />
              </div>
            </div>
          ))}

          {/* Pulsing Connection Nodes */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute connection-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              <div className="absolute inset-0 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-75"></div>
            </div>
          ))}

          {/* Ripple Effects */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute ripple-effect"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 3) * 25}%`,
                animationDelay: `${i * 1.5}s`,
              }}
            >
              <div className="w-32 h-32 border-2 border-blue-400/30 rounded-full"></div>
            </div>
          ))}

          {/* Phone Icons Floating */}
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute phone-icon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-xl backdrop-blur-sm border border-green-300/30 flex items-center justify-center shadow-xl">
                <Phone className="w-7 h-7 text-green-400" />
              </div>
            </div>
          ))}
        </div>

        <Contact />
      </main>
      <div className="footer-wrapper-home-about">
        <Footer />
      </div>
    </div>
  );
}

