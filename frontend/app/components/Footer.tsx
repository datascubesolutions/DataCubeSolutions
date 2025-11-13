'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  useEffect(() => {
    gsap.fromTo(
      '.footer-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
  }, []);

  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Solutions', href: '/solutions' },
    { label: 'Industries / Startups', href: '/industries' },
    { label: 'Contact', href: '/contact' },
  ];

  const serviceLinks = [
    { label: 'ERP Solutions', href: '/services/erp' },
    { label: 'CRM Systems', href: '/services/crm' },
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Cloud & API Integrations', href: '/services/cloud-api' },
    { label: 'UI/UX Design', href: '/services/ui-ux-design' },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="footer-content grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Data Scube
            </h3>
            <p className="text-gray-400 mb-4">
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
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>datascubesolutions@gmail.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9510157477</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Kaveri Sangam,Shilaj Cross Road</span>
              </li>
              <li className="pl-6">Ahmedabad,Gujrat,India - 380059</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Data Scube. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
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

