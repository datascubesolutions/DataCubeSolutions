'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { BarChart3, Zap, TrendingUp, DollarSign, Wrench } from 'lucide-react';

// GSAP plugin is registered globally in gsapOptimizations

export default function ERPServicePage() {
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

      // Chart bars animation
      const chartBars = pageRef.current?.querySelectorAll('.chart-bar');
      if (chartBars) {
        chartBars.forEach((bar, index) => {
          const htmlBar = bar as HTMLElement;
          const targetHeight = htmlBar.style.height || window.getComputedStyle(htmlBar).height;
          gsap.fromTo(
            htmlBar,
            { height: 0, opacity: 0 },
            {
              height: targetHeight,
              opacity: 1,
              duration: 1,
              delay: index * 0.05,
              ease: 'power2.out',
            }
          );
        });
      }

      // ERP bars pulse animation
      const erpBars = pageRef.current?.querySelectorAll('.erp-bar');
      if (erpBars) {
        erpBars.forEach((bar, index) => {
          gsap.to(bar, {
            opacity: 0.6,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        });
      }

      // Dashboard cards floating animation
      const dashboardCards = pageRef.current?.querySelectorAll('.dashboard-card');
      if (dashboardCards) {
        dashboardCards.forEach((card, index) => {
          gsap.to(card, {
            y: -15 + Math.random() * 30,
            x: -10 + Math.random() * 20,
            rotation: -5 + Math.random() * 10,
            duration: 3 + Math.random() * 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });
        });
      }

      // Main ERP icon animation
      const mainIcon = pageRef.current?.querySelector('.erp-icon-main');
      if (mainIcon) {
        gsap.to(mainIcon, {
          scale: 1.15,
          rotation: 10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Stat cards entrance animation
      const statCards = pageRef.current?.querySelectorAll('.erp-stat-card');
      if (statCards) {
        statCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { scale: 0, rotation: -180, opacity: 0 },
            {
              scale: 1,
              rotation: 0,
              opacity: 1,
              duration: 0.8,
              delay: 0.3 + index * 0.15,
              ease: 'back.out(1.7)',
            }
          );

          // Hover effect
          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              scale: 1.08,
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

      // Progress bars animation
      const progressBars = pageRef.current?.querySelectorAll('.erp-progress-bar');
      if (progressBars) {
        progressBars.forEach((bar, index) => {
          const width = 60 + Math.random() * 40;
          gsap.fromTo(
            bar,
            { width: 0 },
            {
              width: `${width}%`,
              duration: 1.5,
              delay: 1 + index * 0.2,
              ease: 'power2.out',
            }
          );
        });
      }

      // Metric dots pulse
      const metricDots = pageRef.current?.querySelectorAll('.metric-dot');
      if (metricDots) {
        metricDots.forEach((dot, index) => {
          gsap.to(dot, {
            scale: 2,
            opacity: 0.5,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.05,
          });
        });
      }

      // Loading bars animation
      const loadingBars = pageRef.current?.querySelectorAll('.erp-loading-bar');
      if (loadingBars) {
        loadingBars.forEach((bar, index) => {
          gsap.fromTo(
            bar,
            { width: 0 },
            {
              width: '100%',
              duration: 2,
              repeat: -1,
              yoyo: true,
              ease: 'power2.inOut',
              delay: index * 0.2,
            }
          );
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-hidden">
      <Header />
      <main ref={pageRef} className="pt-20 relative">
        {/* Animated Background - Dashboard Metrics */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {/* Grid Pattern Background */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          ></div>

          {/* Animated Chart Bars */}
          {[...Array(20)].map((_, i) => {
            const height = 30 + Math.random() * 200;
            const delay = Math.random() * 2;
            const left = (i * 5) % 100;
            return (
              <div
                key={i}
                className="absolute bottom-0 chart-bar"
                style={{
                  left: `${left}%`,
                  width: '3%',
                  height: `${height}px`,
                  animationDelay: `${delay}s`,
                }}
              >
                <div className="w-full h-full bg-gradient-to-t from-blue-600/40 via-blue-400/40 to-cyan-400/40 rounded-t-lg erp-bar"></div>
              </div>
            );
          })}

          {/* Floating Dashboard Cards */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute dashboard-card"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + (i % 3) * 30}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <div className="w-32 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg backdrop-blur-sm border border-blue-400/30 shadow-xl">
                <div className="p-3">
                  <div className="h-2 bg-blue-400/50 rounded mb-2 erp-loading-bar"></div>
                  <div className="h-2 bg-purple-400/50 rounded w-3/4 erp-loading-bar"></div>
                </div>
              </div>
            </div>
          ))}

          {/* Data Points / Metrics Dots */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute metric-dot"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            >
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
            </div>
          ))}

          {/* Animated Lines Graph */}
          <svg className="absolute inset-0 w-full h-full opacity-30">
            <path
              d="M 0,80 Q 20,60 40,50 T 80,45 T 120,40 T 160,35 T 200,30"
              fill="none"
              stroke="url(#erpGradient)"
              strokeWidth="3"
              className="erp-line"
            />
            <defs>
              <linearGradient id="erpGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-gray-900/95 dark:to-gray-800/95 backdrop-blur-sm z-10">
          <div className="container mx-auto px-6">
            <div className="text-center fade-in relative z-10">
              <div className="relative inline-block mb-6">
                <div className="erp-icon-main flex items-center justify-center">
                  <BarChart3 className="w-28 h-28 text-blue-400" />
                </div>
                <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6 relative z-10">
                ERP Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto relative z-10 mb-12">
                Comprehensive Enterprise Resource Planning systems to streamline your business operations
              </p>
              
              {/* Live Dashboard Stats */}
              <div className="grid grid-cols-4 gap-4 max-w-5xl mx-auto relative z-10">
                {[
                  { label: 'Efficiency', value: '95%', color: 'from-blue-500 to-cyan-500', icon: Zap },
                  { label: 'Growth', value: '+42%', color: 'from-purple-500 to-pink-500', icon: TrendingUp },
                  { label: 'Savings', value: '$2M', color: 'from-green-500 to-emerald-500', icon: DollarSign },
                  { label: 'Modules', value: '12+', color: 'from-indigo-500 to-purple-500', icon: Wrench },
                ].map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                  <div
                    key={index}
                    className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-blue-200/50 dark:border-blue-500/20 erp-stat-card text-center"
                  >
                    <div className="flex justify-center mb-2">
                      <IconComponent className="w-8 h-8 text-blue-400" />
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
                    {/* Progress Bar */}
                    <div className="mt-3 h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${stat.color} erp-progress-bar`}
                        style={{ animationDelay: `${index * 0.3}s` }}
                      ></div>
                    </div>
                  </div>
                );
                })}
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
                  Enterprise Resource Planning
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                  Our ERP solutions are designed to integrate all aspects of your business into a single, 
                  unified system. We help organizations manage their core business processes including 
                  finance, HR, manufacturing, supply chain, services, and procurement.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  With our advanced ERP systems, you can streamline operations, improve efficiency, 
                  and make data-driven decisions that propel your business forward.
                </p>
              </div>

              {/* Features & Benefits */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="fade-in bg-blue-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Key Features</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Real-time data analytics and reporting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Automated workflows and processes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Multi-location and branch support</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Cloud-based deployment options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>Mobile accessibility</span>
                    </li>
                  </ul>
                </div>

                <div className="fade-in bg-purple-50 dark:bg-gray-800 rounded-xl p-6">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Benefits</h3>
                  <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Increased productivity and efficiency</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Better decision-making with real-time insights</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Significant cost reduction</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Improved collaboration across departments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-600 font-bold">✓</span>
                      <span>Scalable solutions for growing businesses</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Modules */}
              <div className="fade-in bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">
                  ERP Modules
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {['Inventory Management', 'Financial Planning', 'Supply Chain', 'Human Resources', 'Manufacturing', 'Procurement'].map((module, index) => (
                    <div
                      key={index}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg text-center shadow-md"
                    >
                      <p className="font-semibold text-gray-800 dark:text-white">{module}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="fade-in text-center">
                <Link
                  href="/#contact"
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Get Started with ERP Solutions
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

