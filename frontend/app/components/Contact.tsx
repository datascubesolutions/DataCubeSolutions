'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Zap, Globe, Star, Phone, MapPin, Clock, Send } from 'lucide-react';
import { createInquiry } from '@/services/api/get-in-touch';

// GSAP plugin is registered globally in gsapOptimizations

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
    if (typeof window === 'undefined') return;
    
    // Detect mobile/touch device
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 
                     'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0;

    // Register ScrollTrigger only if available
    if (typeof ScrollTrigger !== 'undefined' && typeof gsap.registerPlugin === 'function') {
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch (e) {
        console.warn('ScrollTrigger registration failed:', e);
      }
    }

    const ctx = gsap.context(() => {
      // Simplified animations for better performance
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
        // Form entrance - simplified
        gsap.fromTo(
          '.contact-form',
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );

        // Contact info entrance - simplified
        gsap.fromTo(
          '.contact-info',
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 80%',
              toggleActions: 'play none none none',
            },
          }
        );
      } else {
        // Fallback without ScrollTrigger
        gsap.fromTo('.contact-form', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.1 });
        gsap.fromTo('.contact-info', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 });
      }

      // Contact icon animation - only on desktop, lighter animation
      if (!isMobile) {
        const mainIcon = sectionRef.current?.querySelector('.contact-icon-main');
        if (mainIcon) {
          gsap.to(mainIcon, {
            scale: 1.1,
            rotation: 3,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      }

      // Stat cards - simplified entrance, no hover on mobile
      const statCards = sectionRef.current?.querySelectorAll('.contact-stat-card');
      if (statCards && !isMobile) {
        statCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              delay: 0.2 + index * 0.1,
              ease: 'power2.out',
            }
          );

          // Hover effect - only on desktop
          if (!isMobile) {
            card.addEventListener('mouseenter', () => {
              gsap.to(card, {
                scale: 1.05,
                y: -3,
                duration: 0.2,
                ease: 'power2.out',
              });
            });
            card.addEventListener('mouseleave', () => {
              gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.2,
                ease: 'power2.out',
              });
            });
          }
        });
      } else if (statCards && isMobile) {
        // Simple fade-in on mobile
        statCards.forEach((card, index) => {
          gsap.fromTo(
            card,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 0.4,
              delay: 0.1 + index * 0.1,
            }
          );
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
      console.error('Contact form error:', error);
      
      // User-friendly error message
      let errorMessage = 'Sorry for the inconvenience. We are facing some technical issues. Please try again after some time.';
      
      // Handle different error types but show user-friendly message
      if (error?.response) {
        // Server responded with error status
        const serverMessage = error.response.data?.message || error.response.statusText;
        // Only show server message if it's user-friendly, otherwise use default
        if (serverMessage && serverMessage.length < 100 && !serverMessage.includes('ECONNREFUSED')) {
          errorMessage = serverMessage;
        }
      } else if (error?.request) {
        // Request was made but no response (CORS, network error, etc.)
        errorMessage = 'Sorry for the inconvenience. We are facing some technical issues. Please check your internet connection and try again after some time.';
      } else if (error?.message && error.message.length < 100) {
        // Only show error message if it's short and user-friendly
        errorMessage = error.message;
      }
      
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
      className="relative -mt-20 sm:-mt-24 md:-mt-32 pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-10 overflow-hidden"
      style={{
        willChange: 'auto',
        transform: 'translateZ(0)', // GPU acceleration
      }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 relative z-10">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="contact-icon-main flex items-center justify-center" style={{ willChange: 'transform' }}>
              <Mail className="w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 text-blue-400" />
            </div>
            <div className="absolute inset-0 bg-blue-400/30 rounded-full blur-2xl animate-pulse" style={{ willChange: 'opacity' }}></div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 relative z-10">
            Get In Touch
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto relative z-10 px-4">
            Ready to transform your business? Let's discuss your project
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mt-8 sm:mt-10 md:mt-12 relative z-10">
            {[
              { label: 'Response Time', value: '< 24hrs', icon: Zap, color: 'from-blue-500 to-cyan-500' },
              { label: 'Support', value: '24/7', icon: Globe, color: 'from-purple-500 to-pink-500' },
              { label: 'Satisfaction', value: '100%', icon: Star, color: 'from-green-500 to-emerald-500' },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
              <div
                key={index}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl p-4 sm:p-5 md:p-6 shadow-xl border border-blue-200/50 dark:border-blue-500/20 contact-stat-card text-center"
                style={{ willChange: 'transform' }}
              >
                <div className="flex justify-center mb-2 sm:mb-3">
                  <IconComponent className={`w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 ${stat.color.includes('blue') ? 'text-blue-500' : stat.color.includes('purple') ? 'text-purple-500' : 'text-green-500'}`} />
                </div>
                <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto relative z-10">
          {/* Contact Form */}
          <div className="contact-form relative">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors"
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
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {submitMessage && (
                <div
                  className={`p-4 sm:p-5 rounded-lg shadow-lg animate-in fade-in slide-in-from-top-2 duration-300 ${
                    submitMessage.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 border-2 border-green-300 dark:border-green-700'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 border-2 border-red-300 dark:border-red-700'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {submitMessage.type === 'success' ? (
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
                      <div className="flex-shrink-0 mt-0.5">
                        <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm sm:text-base font-medium leading-relaxed">
                        {submitMessage.text}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base sm:text-lg font-semibold rounded-lg shadow-xl hover:shadow-2xl active:scale-95 sm:hover:scale-105 transition-transform duration-200 relative overflow-hidden send-button group disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 disabled:hover:scale-100"
                style={{ willChange: 'transform' }}
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
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 flex items-center justify-center">
                    <MapPin className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white mb-1">Address</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                      Kaveri Sangam,Shilaj Cross Road<br />
                      Ahmedabad - 380059,Gujrat,India<br />
                      
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-600 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 flex items-center justify-center">
                    <Mail className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white mb-1">Email</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">datascubesolutions@gmail.com</p>
                    {/* <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">support@datacube.com</p> */}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-600 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 flex items-center justify-center">
                    <Phone className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white mb-1">Phone</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">+91 9510157477</p>
                    {/* <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">+1 (555) 123-4568</p> */}
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-600 p-2.5 sm:p-3 rounded-lg mr-3 sm:mr-4 flex-shrink-0 flex items-center justify-center">
                    <Clock className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base text-gray-800 dark:text-white mb-1">Business Hours</h4>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
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

