'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { optimizeElementForAnimation } from '../utils/gsapOptimizations';

// GSAP plugin is registered globally in gsapOptimizations

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const footerContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current || !footerContentRef.current) return;

    // Optimize element for animation
    optimizeElementForAnimation(footerContentRef.current);

    const ctx = gsap.context(() => {
      // Set initial state immediately to prevent flash
      gsap.set(footerContentRef.current, {
        opacity: 0,
        y: 20,
        force3D: true,
      });

      // Use ScrollTrigger for synchronized, smooth animation
      // Using fromTo with proper initial state for better sync
      gsap.fromTo(
        footerContentRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power1.out', // Smoother easing for better sync
          force3D: true,
          immediateRender: false,
          scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 95%',
            end: 'top 85%',
            toggleActions: 'play none none none',
            once: true, // Only animate once
            markers: false, // Set to true for debugging
          },
        }
      );
    }, footerRef);

    // Cleanup function to prevent memory leaks
    return () => {
      ctx.revert();
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={footerRef} className="bg-gray-900 dark:bg-black text-white py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6">
        <div 
          ref={footerContentRef} 
          className="footer-content grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8"
          style={{ willChange: 'transform, opacity' }}
        >
          {/* Company Info */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Data Scube
            </h3>
            <p className="text-sm sm:text-base text-gray-400 mb-3 sm:mb-4">
              Transforming businesses with cutting-edge ERP, CRM, and Web Development solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors">
                  ERP Solutions
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  CRM Systems
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </button>
              </li>
              <li>
                <button className="text-gray-400 hover:text-white transition-colors">
                  Custom Software
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-1.5 sm:space-y-2 text-sm sm:text-base text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@datacube.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>123 Business Street</span>
              </li>
              <li className="pl-6">Tech City, TC 12345</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 mt-6 sm:mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} Data Scube. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

