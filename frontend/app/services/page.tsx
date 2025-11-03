'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Services from '../components/Services';
import { BarChart3, Users, Code, Zap, Wrench } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in animations
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

      // Floating service icons animation
      const serviceIcons = pageRef.current?.querySelectorAll('.service-float-icon');
      if (serviceIcons) {
        serviceIcons.forEach((icon, index) => {
          gsap.to(icon, {
            y: -20 + Math.random() * 40,
            x: -15 + Math.random() * 30,
            rotation: -15 + Math.random() * 30,
            scale: 1 + Math.random() * 0.3,
            duration: 4 + Math.random() * 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5,
          });
        });
      }

      // Service hub animations
      const serviceHubs = pageRef.current?.querySelectorAll('.service-hub');
      if (serviceHubs) {
        serviceHubs.forEach((hub, index) => {
          gsap.to(hub, {
            scale: 1.3,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.3,
          });
        });
      }

      // Service nodes pulse
      const serviceNodes = pageRef.current?.querySelectorAll('.service-node');
      if (serviceNodes) {
        serviceNodes.forEach((node, index) => {
          gsap.to(node, {
            scale: 1.5,
            opacity: 0.8,
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.1,
          });
        });
      }

      // Connection lines animation enhancement
      const connections = pageRef.current?.querySelectorAll('.service-connection');
      if (connections) {
        connections.forEach((connection, index) => {
          gsap.to(connection, {
            opacity: 0.6,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.4,
          });
        });
      }
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="min-h-screen bg-gradient-to-b from-gray-950 via-blue-950/50 to-purple-950/50 relative overflow-hidden">
      {/* New Services Network Background Theme */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Dark base with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-slate-950 to-gray-950"></div>

        {/* Interconnected Service Nodes Network */}
        <svg className="absolute inset-0 w-full h-full opacity-70">
          {/* Main Service Hub Centers */}
          {[
            { x: 20, y: 30, label: 'ERP', color: '#3b82f6' },
            { x: 50, y: 50, label: 'HUB', color: '#8b5cf6' },
            { x: 80, y: 30, label: 'CRM', color: '#ec4899' },
            { x: 50, y: 75, label: 'WEB', color: '#06b6d4' },
          ].map((hub, index) => (
            <g key={index}>
              {/* Hub Circle */}
              <circle
                cx={`${hub.x}%`}
                cy={`${hub.y}%`}
                r="40"
                fill="none"
                stroke={hub.color}
                strokeWidth="2.5"
                opacity="0.6"
                className="service-hub-ring"
              >
                <animate
                  attributeName="r"
                  values="40;50;40"
                  dur="3s"
                  repeatCount="indefinite"
                  begin={`${index * 0.5}s`}
                />
              </circle>
              
              {/* Hub Center */}
              <circle
                cx={`${hub.x}%`}
                cy={`${hub.y}%`}
                r="8"
                fill={hub.color}
                opacity="0.8"
                className="service-hub"
              >
                <animate
                  attributeName="opacity"
                  values="0.5;1;0.5"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.3}s`}
                />
              </circle>
              
              {/* Hub Glow */}
              <circle
                cx={`${hub.x}%`}
                cy={`${hub.y}%`}
                r="15"
                fill={hub.color}
                opacity="0.2"
                className="service-hub-glow"
              >
                <animate
                  attributeName="r"
                  values="15;25;15"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.4}s`}
                />
              </circle>

              {/* Hub Label */}
              <text
                x={`${hub.x}%`}
                y={`${hub.y}%`}
                textAnchor="middle"
                dominantBaseline="middle"
                fill={hub.color}
                fontSize="14"
                fontFamily="monospace"
                fontWeight="bold"
                opacity="0.6"
              >
                {hub.label}
              </text>
            </g>
          ))}

          {/* Connecting Lines between Services */}
          {[
            { from: { x: 20, y: 30 }, to: { x: 50, y: 50 }, color: '#3b82f6' },
            { from: { x: 80, y: 30 }, to: { x: 50, y: 50 }, color: '#ec4899' },
            { from: { x: 50, y: 50 }, to: { x: 50, y: 75 }, color: '#8b5cf6' },
            { from: { x: 20, y: 30 }, to: { x: 50, y: 75 }, color: '#06b6d4' },
            { from: { x: 80, y: 30 }, to: { x: 50, y: 75 }, color: '#ec4899' },
          ].map((connection, index) => (
            <g key={index}>
              <line
                x1={`${connection.from.x}%`}
                y1={`${connection.from.y}%`}
                x2={`${connection.to.x}%`}
                y2={`${connection.to.y}%`}
                stroke={connection.color}
                strokeWidth="2"
                strokeDasharray="6,4"
                opacity="0.7"
                className="service-connection"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-20"
                  dur={`${3 + index * 0.5}s`}
                  repeatCount="indefinite"
                />
              </line>
              
              {/* Data flow particles */}
              <circle
                r="3"
                fill={connection.color}
                opacity="0.8"
                className="service-data-flow"
              >
                <animateMotion
                  dur={`${4 + index * 0.5}s`}
                  repeatCount="indefinite"
                  begin={`${index * 0.3}s`}
                >
                  <mpath href={`#path-${index}`} />
                </animateMotion>
                <animate
                  attributeName="opacity"
                  values="0.3;1;0.3"
                  dur={`${4 + index * 0.5}s`}
                  repeatCount="indefinite"
                />
              </circle>
              
              <path
                id={`path-${index}`}
                d={`M ${connection.from.x}%,${connection.from.y}% L ${connection.to.x}%,${connection.to.y}%`}
                fill="none"
                stroke="transparent"
              />
            </g>
          ))}

          {/* Service Cards Connection Nodes */}
          {[
            { x: 15, y: 45 }, { x: 35, y: 45 },
            { x: 65, y: 45 }, { x: 85, y: 45 },
            { x: 25, y: 65 }, { x: 75, y: 65 },
          ].map((node, index) => (
            <g key={index}>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="5"
                fill="#06b6d4"
                opacity="0.9"
                className="service-node"
              >
                <animate
                  attributeName="r"
                  values="4;6;4"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.2}s`}
                />
              </circle>
              <circle
                cx={`${node.x}%`}
                cy={`${node.y}%`}
                r="8"
                fill="#06b6d4"
                opacity="0.2"
                className="service-node-glow"
              >
                <animate
                  attributeName="r"
                  values="8;12;8"
                  dur="2s"
                  repeatCount="indefinite"
                  begin={`${index * 0.2}s`}
                />
              </circle>
            </g>
          ))}
        </svg>

        {/* Floating Service Icons */}
        {[
          { icon: BarChart3, x: 15, y: 25, color: 'blue', delay: '0s' },
          { icon: Users, x: 85, y: 25, color: 'pink', delay: '1s' },
          { icon: Code, x: 50, y: 80, color: 'cyan', delay: '0.5s' },
          { icon: Zap, x: 25, y: 60, color: 'purple', delay: '1.5s' },
          { icon: Wrench, x: 75, y: 60, color: 'indigo', delay: '0.8s' },
        ].map((service, index) => {
          const IconComponent = service.icon;
          return (
          <div
            key={index}
            className={`absolute service-float-icon flex items-center justify-center`}
            style={{
              left: `${service.x}%`,
              top: `${service.y}%`,
              animationDelay: service.delay,
              filter: `drop-shadow(0 0 15px ${
                service.color === 'blue' ? 'rgba(59, 130, 246, 0.8)' :
                service.color === 'pink' ? 'rgba(236, 72, 153, 0.8)' :
                service.color === 'cyan' ? 'rgba(6, 182, 212, 0.8)' :
                service.color === 'purple' ? 'rgba(139, 92, 246, 0.8)' :
                'rgba(99, 102, 241, 0.8)'
              })`,
            }}
          >
            <IconComponent className="w-10 h-10" style={{ color: service.color === 'blue' ? '#3b82f6' : service.color === 'pink' ? '#ec4899' : service.color === 'cyan' ? '#06b6d4' : service.color === 'purple' ? '#8b5cf6' : '#6366f1' }} />
          </div>
        );
        })}

        {/* Hexagonal Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              repeating-linear-gradient(30deg, transparent, transparent 2px, rgba(59, 130, 246, 0.03) 2px, rgba(59, 130, 246, 0.03) 4px),
              repeating-linear-gradient(60deg, transparent, transparent 2px, rgba(168, 85, 247, 0.03) 2px, rgba(168, 85, 247, 0.03) 4px),
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(236, 72, 153, 0.03) 2px, rgba(236, 72, 153, 0.03) 4px)
            `,
            backgroundSize: '100px 100px',
          }}
        ></div>

        {/* Radial Gradient Overlays for depth */}
        <div className="absolute top-0 left-0 w-1/2 h-full bg-radial-gradient from-blue-500/5 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-radial-gradient from-purple-500/5 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1/3 bg-radial-gradient from-cyan-500/5 via-transparent to-transparent"></div>
      </div>

      <Header />
      <main className="relative z-10 pt-24 pb-12">
        {/* Hero Banner */}
        <div className="text-center mb-16 relative z-10 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-400/30">
              <span className="text-blue-300 font-semibold">What We Offer</span>
            </div>
            <p className="text-2xl md:text-3xl text-gray-200 font-light">
              Discover how our innovative solutions can transform your business
            </p>
          </div>
        </div>

        <Services />

        {/* CTA Section */}
        <div className="mt-20 text-center relative z-10 px-6">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-md rounded-2xl p-12 border border-blue-400/30 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help grow your business
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us Now
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
