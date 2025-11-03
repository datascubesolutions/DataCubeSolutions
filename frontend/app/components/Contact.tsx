'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Zap, Globe, Star, Phone, MapPin, Clock, Send } from 'lucide-react';
import { createInquiry } from '@/services/api/get-in-touch';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const inquiryTypes = [
  { label: 'ERP Solutions', value: 'erp-solutions' },
  { label: 'CRM Systems', value: 'crm-systems' },
  { label: 'Web Development', value: 'web-development' },
  { label: 'Custom Software', value: 'custom-software' },
  { label: 'Sales', value: 'sales' },
  { label: 'Consultation', value: 'consultation' },
  { label: 'Other', value: 'other' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-form',
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.contact-info',
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Contact icon main animation
      const mainIcon = sectionRef.current?.querySelector('.contact-icon-main');
      if (mainIcon) {
        gsap.to(mainIcon, {
          scale: 1.15,
          rotation: 5,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Stat cards entrance animation
      const statCards = sectionRef.current?.querySelectorAll('.contact-stat-card');
      if (statCards) {
        statCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { scale: 0, opacity: 0, y: 30 },
            {
              scale: 1,
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: 0.3 + index * 0.2,
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

      // Send button animation on hover
      const sendButton = sectionRef.current?.querySelector('.send-button');
      if (sendButton) {
        sendButton.addEventListener('mouseenter', () => {
          gsap.to(sendButton.querySelector('span:first-child'), {
            x: -5,
            duration: 0.3,
            ease: 'power2.out',
          });
          gsap.to(sendButton.querySelector('span:last-child'), {
            x: 10,
            rotation: 15,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
        sendButton.addEventListener('mouseleave', () => {
          gsap.to(sendButton.querySelector('span:first-child'), {
            x: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
          gsap.to(sendButton.querySelector('span:last-child'), {
            x: 0,
            rotation: 0,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      }

      // Form input focus animations
      const inputs = sectionRef.current?.querySelectorAll('input, textarea, select');
      if (inputs) {
        inputs.forEach((input) => {
          input.addEventListener('focus', () => {
            gsap.to(input, {
              scale: 1.02,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
          input.addEventListener('blur', () => {
            gsap.to(input, {
              scale: 1,
              duration: 0.3,
              ease: 'power2.out',
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        message: formData.message,
        inquiryType: formData.inquiryType || 'other',
      };

      await createInquiry(payload);

      setSubmitMessage({
        type: 'success',
        text: 'Thank you for your inquiry! We will get back to you soon.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: '',
        message: '',
      });
    } catch (error: any) {
      const errorMessage = 
        error?.data?.message || 
        error?.response?.data?.message || 
        error?.message || 
        'Something went wrong. Please try again later.';
      
      setSubmitMessage({
        type: 'error',
        text: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-10 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 relative z-10">
          <div className="relative inline-block mb-6">
            <div className="contact-icon-main flex items-center justify-center">
              <Mail className="w-28 h-28 text-blue-400" />
            </div>
            <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
          </div>
          <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-4 relative z-10">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto relative z-10">
            Ready to transform your business? Let's discuss your project
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto mt-12 relative z-10">
            {[
              { label: 'Response Time', value: '< 24hrs', icon: Zap, color: 'from-blue-500 to-cyan-500' },
              { label: 'Support', value: '24/7', icon: Globe, color: 'from-purple-500 to-pink-500' },
              { label: 'Satisfaction', value: '100%', icon: Star, color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-6 shadow-xl border border-blue-200/50 dark:border-blue-500/20 contact-stat-card text-center"
              >
                <div className="flex justify-center mb-3">
                  <IconComponent className={`w-10 h-10 ${stat.color.includes('blue') ? 'text-blue-500' : stat.color.includes('purple') ? 'text-purple-500' : 'text-green-500'}`} />
                </div>
                <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
            })}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto relative z-10">
          {/* Contact Form */}
          <div className="contact-form relative">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="+1 234 567 8900"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Inquiry Type *
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  required
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                >
                  <option value="">Select an option</option>
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${
                    submitMessage.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-700'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border border-red-300 dark:border-red-700'
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 relative overflow-hidden send-button group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>{isSubmitting ? 'Sending...' : 'Send Inquiry'}</span>
                  <span><Send className="w-5 h-5" /></span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-3 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Address</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      123 Business Street<br />
                      Tech City, TC 12345<br />
                      Country
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 p-3 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Email</h4>
                    <p className="text-gray-600 dark:text-gray-300">info@datacube.com</p>
                    <p className="text-gray-600 dark:text-gray-300">support@datacube.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-600 p-3 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Phone</h4>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</p>
                    <p className="text-gray-600 dark:text-gray-300">+1 (555) 123-4568</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600 p-3 rounded-lg mr-4 flex-shrink-0 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-1">Business Hours</h4>
                    <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600 dark:text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

