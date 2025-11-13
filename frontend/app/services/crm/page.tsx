'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Users, User } from 'lucide-react';

// GSAP plugin is registered globally in gsapOptimizations

export default function CRMServicePage() {
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

      // Customer icons floating animation
      const customerIcons = pageRef.current?.querySelectorAll('.customer-icon');
      if (customerIcons) {
        customerIcons.forEach((icon, index) => {
          gsap.to(icon, {
            y: -30 + Math.random() * 60,
            x: -20 + Math.random() * 40,
            rotation: -10 + Math.random() * 20,
            duration: 4 + Math.random() * 4,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2,
          });
        });
      }

      // Main customer icon animation
      const mainIcon = pageRef.current?.querySelector('.customer-icon-main');
      if (mainIcon) {
        gsap.to(mainIcon, {
          scale: 1.1,
          rotation: 5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Customer metrics counter animation
      const metrics = pageRef.current?.querySelectorAll('.customer-metric');
      if (metrics) {
        metrics.forEach((metric, index) => {
          gsap.fromTo(
            metric,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 0.6,
              delay: 0.5 + index * 0.2,
              ease: 'back.out(1.7)',
            }
          );

          // Hover pulse effect
          metric.addEventListener('mouseenter', () => {
            gsap.to(metric, {
              scale: 1.05,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          metric.addEventListener('mouseleave', () => {
            gsap.to(metric, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }

      // Data nodes pulse animation
      const dataNodes = pageRef.current?.querySelectorAll('.data-node');
      if (dataNodes) {
        dataNodes.forEach((node, index) => {
          gsap.to(node, {
            scale: 1.5,
            opacity: 0.7,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      <Header />
      <main ref={pageRef} className="pt-20 relative">
        {/* Animated Background - Customer Data Flow */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Mesh Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-indigo-900/20"></div>
          
          {/* Floating Customer Icons */}
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute customer-icon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animation: `floatCustomer ${8 + Math.random() * 4}s ease-in-out infinite`,
              }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full backdrop-blur-sm border border-purple-300/20 flex items-center justify-center">
                <User className="w-8 h-8 text-purple-400" />
              </div>
            </div>
          ))}

          {/* Data Flow Lines - Connecting customers */}
          <svg className="absolute inset-0 w-full h-full opacity-20">
            {[...Array(8)].map((_, i) => {
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
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.3"
                >
                  <animate
                    attributeName="stroke-dashoffset"
                    values="0;-100"
                    dur={`${3 + Math.random() * 2}s`}
                    repeatCount="indefinite"
                  />
                </line>
              );
            })}
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
              </linearGradient>
            </defs>
          </svg>

          {/* Pulsing Data Nodes */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute data-node"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse shadow-lg shadow-purple-400/50"></div>
              <div className="absolute inset-0 w-3 h-3 bg-purple-400 rounded-full animate-ping opacity-75"></div>
            </div>
          ))}
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-50/90 to-pink-50/90 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-sm z-10">
          <div className="container mx-auto px-6">
            <div className="text-center fade-in relative z-10">
              <div className="relative inline-block mb-6">
                <div className="customer-icon-main flex items-center justify-center">
                  <Users className="w-28 h-28 text-purple-400" />
                </div>
                <div className="absolute inset-0 bg-purple-400/30 rounded-full blur-2xl animate-pulse"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6 relative z-10">
                CRM Systems
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10">
                Customer Relationship Management solutions to enhance customer engagement and drive sales growth
              </p>
              
              {/* Interactive Customer Metrics */}
              <div className="mt-12 grid grid-cols-3 gap-6 max-w-3xl mx-auto relative z-10">
                {[
                  { label: 'Customers', value: '10K+', color: 'from-purple-500 to-pink-500' },
                  { label: 'Interactions', value: '50K+', color: 'from-pink-500 to-rose-500' },
                  { label: 'Satisfaction', value: '98%', color: 'from-purple-500 to-indigo-500' },
                ].map((metric, index) => (
                  <div
                    key={index}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 shadow-xl border border-purple-200/50 dark:border-purple-500/20 customer-metric"
                  >
                    <div className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="relative py-20 z-10">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Overview */}
              <div className="fade-in bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
                  Customer Relationship Management
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Transform your customer relationships with our comprehensive CRM solutions. Track every 
                  interaction, automate sales processes, and provide exceptional customer service that 
                  drives loyalty and revenue growth.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Our CRM platform helps you build stronger relationships with customers while 
                  streamlining your sales and marketing efforts.
                </p>
              </div>

              {/* Features & Benefits */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="fade-in bg-purple-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Sales Management</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Lead tracking & conversion pipeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Sales pipeline management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Revenue forecasting and analytics</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Performance tracking & reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Automated sales workflows</span>
                    </li>
                  </ul>
                </div>

                <div className="fade-in bg-pink-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Customer Service</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>24/7 support ticket management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>Complete customer history tracking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>Automated response system</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>Customer satisfaction surveys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-pink-600 font-bold">✓</span>
                      <span>Multi-channel support integration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Additional Features */}
              <div className="fade-in bg-gradient-to-br from-gray-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                  Additional Features
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {['Customer Analytics', 'Marketing Automation', 'Email Integration', 'Social Media Management', 'Reporting Dashboard', 'API Integration'].map((feature, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-md"
                    >
                      <p className="font-semibold text-gray-800 dark:text-white">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="fade-in text-center">
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started with CRM Solutions
                </Link>
              </div>
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

