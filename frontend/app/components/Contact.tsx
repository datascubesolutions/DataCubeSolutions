'use client';

import { useEffect, useRef, useState, memo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle, MapPin, Send, Phone, CheckCircle2, AlertCircle, Loader2, User, Mail, Building2, FileText } from 'lucide-react';
import { IconClock, IconMessageSquare, IconStars, IconArrowRight } from './icons/IconLibrary';
import { createInquiry } from '@/services/api/get-in-touch';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormSchema, ContactFormData } from '../utils/formValidation';
import { shouldAnimate } from '../utils/motion';

const inquiryTypes = [
  { label: 'ERP Solutions', value: 'erp-solutions' },
  { label: 'CRM Systems', value: 'crm-systems' },
  { label: 'Web Development', value: 'web-development' },
  { label: 'Custom Software', value: 'custom-software' },
  { label: 'Sales', value: 'sales' },
  { label: 'Consultation', value: 'consultation' },
  { label: 'Other', value: 'other' },
];

const MESSAGE_MAX_LENGTH = 2000;

function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields, isValidating },
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur', // Validate on blur for better UX
    reValidateMode: 'onChange', // Re-validate on change after first blur
  });

  const messageValue = watch('message', '');
  const messageLength = messageValue?.length || 0;
  const messageRemaining = MESSAGE_MAX_LENGTH - messageLength;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const isMobile = window.matchMedia('(max-width: 768px)').matches || 
                     'ontouchstart' in window || 
                     navigator.maxTouchPoints > 0;

    if (typeof ScrollTrigger !== 'undefined' && typeof gsap.registerPlugin === 'function') {
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch (e) {
        // Already registered
      }
    }

    if (!shouldAnimate()) return;

    const ctx = gsap.context(() => {
      if (typeof ScrollTrigger !== 'undefined' && ScrollTrigger) {
        gsap.fromTo(
          '.contact-form',
          { opacity: 0, y: 30 },
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

        gsap.fromTo(
          '.contact-info',
          { opacity: 0, y: 30 },
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
      }

      if (!isMobile) {
        const mainIcon = sectionRef.current?.querySelector('.contact-icon-main');
        const iconGlow = sectionRef.current?.querySelector('.contact-icon-glow');
        
        if (mainIcon) {
          gsap.to(mainIcon, {
            y: -8,
            rotation: 5,
            scale: 1.05,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
        
        if (iconGlow) {
          gsap.to(iconGlow, {
            scale: 1.2,
            opacity: 0.8,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        }
      }

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
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      const payload = {
        name: data.name,
        email: data.email,
        phone: data.phone || '',
        company: data.company || '',
        message: data.message || '',
        inquiryType: data.inquiryType || 'other',
      };

      await createInquiry(payload);

      setSubmitSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error: unknown) {
      console.error('Contact form error:', error);
      
      let errorMessage = 'Sorry for the inconvenience. We are facing some technical issues. Please try again after some time.';
      
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as { response?: { data?: { message?: string }; statusText?: string } };
        const serverMessage = axiosError.response?.data?.message || axiosError.response?.statusText;
        if (serverMessage && serverMessage.length < 100 && !serverMessage.includes('ECONNREFUSED')) {
          errorMessage = serverMessage;
        }
      } else if (error && typeof error === 'object' && 'request' in error) {
        errorMessage = 'Sorry for the inconvenience. We are facing some technical issues. Please check your internet connection and try again after some time.';
      } else if (error instanceof Error && error.message && error.message.length < 100) {
        errorMessage = error.message;
      }
      
      setSubmitError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (fieldName: keyof ContactFormData) => {
    const error = errors[fieldName];
    if (error && touchedFields[fieldName]) {
      return error.message as string;
    }
    return null;
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative -mt-20 sm:-mt-24 md:-mt-32 pt-20 pb-12 sm:pt-28 sm:pb-16 md:pt-36 md:pb-20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm z-10 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16 relative z-10">
          <div className="relative inline-block mb-4 sm:mb-6">
            <div className="contact-icon-main flex items-center justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-60 contact-icon-glow"></div>
                <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-4 sm:p-5 md:p-6 rounded-2xl shadow-2xl border border-slate-700/80">
                  <MessageCircle className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-blue-300 drop-shadow-lg" />
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white mb-4 sm:mb-6 relative z-10">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto relative z-10 px-4 leading-relaxed">
            Ready to transform your business? Let's discuss your project
          </p>

          {/* Quick Contact Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mt-8 sm:mt-10 md:mt-12 relative z-10">
            {[
              { label: 'Response Time', value: '< 24hrs', icon: IconClock, color: 'from-sky-400 to-cyan-400', iconColor: 'text-sky-300' },
              { label: 'Support', value: '24/7', icon: IconMessageSquare, color: 'from-violet-400 to-fuchsia-400', iconColor: 'text-violet-300' },
              { label: 'Satisfaction', value: '100%', icon: IconStars, color: 'from-emerald-400 to-lime-400', iconColor: 'text-emerald-300' },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl rounded-xl p-4 sm:p-5 md:p-6 lg:p-7 shadow-xl border border-slate-200/40 dark:border-slate-700/60 contact-stat-card text-center transition-all duration-300 ease-out hover:scale-105 hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-3 sm:mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-800 dark:via-slate-900 dark:to-slate-900 shadow-md shadow-sky-500/20">
                      <IconComponent
                        size="lg"
                        state="info"
                        className={stat.iconColor}
                      />
                    </div>
                  </div>
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-base text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 max-w-6xl mx-auto relative z-10">
          {/* Contact Form */}
          <div className="contact-form relative">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 sm:space-y-6" noValidate>
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Full Name <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className={`w-5 h-5 ${
                      getFieldError('name')
                        ? 'text-red-500 dark:text-red-400'
                        : touchedFields.name && !errors.name
                        ? 'text-green-500 dark:text-green-400'
                        : 'text-gray-400 dark:text-gray-500'
                    } transition-colors duration-200`} aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full pl-12 pr-4 py-3 text-base border rounded-lg transition-all duration-200 min-h-[44px] ${
                      getFieldError('name')
                        ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : touchedFields.name && !errors.name
                        ? 'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600'
                    }`}
                    placeholder="Data Scube"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                  />
                </div>
                {getFieldError('name') && (
                  <p id="name-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    {getFieldError('name')}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className={`w-5 h-5 ${
                      getFieldError('email')
                        ? 'text-red-500 dark:text-red-400'
                        : touchedFields.email && !errors.email
                        ? 'text-green-500 dark:text-green-400'
                        : 'text-gray-400 dark:text-gray-500'
                    } transition-colors duration-200`} aria-hidden="true" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full pl-12 pr-4 py-3 text-base border rounded-lg transition-all duration-200 min-h-[44px] ${
                      getFieldError('email')
                        ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : touchedFields.email && !errors.email
                        ? 'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600'
                    }`}
                    placeholder="sales@datascube.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                  />
                </div>
                {getFieldError('email') && (
                  <p id="email-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    {getFieldError('email')}
                  </p>
                )}
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className={`w-5 h-5 ${
                      getFieldError('phone')
                        ? 'text-red-500 dark:text-red-400'
                        : touchedFields.phone && !errors.phone
                        ? 'text-green-500 dark:text-green-400'
                        : 'text-gray-400 dark:text-gray-500'
                    } transition-colors duration-200`} aria-hidden="true" />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone')}
                    className={`w-full pl-12 pr-4 py-3 text-base border rounded-lg transition-all duration-200 min-h-[44px] ${
                      getFieldError('phone')
                        ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : touchedFields.phone && !errors.phone
                        ? 'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600'
                    }`}
                    placeholder="+91 1234 567 890"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                </div>
                {getFieldError('phone') && (
                  <p id="phone-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    {getFieldError('phone')}
                  </p>
                )}
              </div>

              {/* Company Field */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Company Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Building2 className={`w-5 h-5 ${
                      getFieldError('company')
                        ? 'text-red-500 dark:text-red-400'
                        : touchedFields.company && !errors.company
                        ? 'text-green-500 dark:text-green-400'
                        : 'text-gray-400 dark:text-gray-500'
                    } transition-colors duration-200`} aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    id="company"
                    {...register('company')}
                    className={`w-full pl-12 pr-4 py-3 text-base border rounded-lg transition-all duration-200 min-h-[44px] ${
                      getFieldError('company')
                        ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : touchedFields.company && !errors.company
                        ? 'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600'
                    }`}
                    placeholder="Your Company"
                    aria-invalid={!!errors.company}
                    aria-describedby={errors.company ? 'company-error' : undefined}
                  />
                </div>
                {getFieldError('company') && (
                  <p id="company-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    {getFieldError('company')}
                  </p>
                )}
              </div>

              {/* Inquiry Type Field */}
              <div>
                <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Inquiry Type <span className="text-red-500" aria-label="required">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FileText className={`w-5 h-5 ${
                      getFieldError('inquiryType')
                        ? 'text-red-500 dark:text-red-400'
                        : touchedFields.inquiryType && !errors.inquiryType
                        ? 'text-green-500 dark:text-green-400'
                        : 'text-gray-400 dark:text-gray-500'
                    } transition-colors duration-200`} aria-hidden="true" />
                  </div>
                  <select
                    id="inquiryType"
                    {...register('inquiryType')}
                    className={`w-full pl-12 pr-4 py-3 text-base border rounded-lg transition-all duration-200 min-h-[44px] appearance-none bg-white dark:bg-gray-800 ${
                      getFieldError('inquiryType')
                        ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : touchedFields.inquiryType && !errors.inquiryType
                        ? 'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600'
                    }`}
                    aria-invalid={!!errors.inquiryType}
                    aria-describedby={errors.inquiryType ? 'inquiryType-error' : undefined}
                  >
                    <option value="">Select an option</option>
                    {inquiryTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                    <svg className={`w-5 h-5 ${
                      getFieldError('inquiryType')
                        ? 'text-red-500 dark:text-red-400'
                        : touchedFields.inquiryType && !errors.inquiryType
                        ? 'text-green-500 dark:text-green-400'
                        : 'text-gray-400 dark:text-gray-500'
                    } transition-colors duration-200`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
                {getFieldError('inquiryType') && (
                  <p id="inquiryType-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    {getFieldError('inquiryType')}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  {messageLength > 0 && (
                    <span className={`text-xs ${
                      messageRemaining < 50 
                        ? 'text-red-500 dark:text-red-400' 
                        : messageRemaining < 100 
                        ? 'text-yellow-500 dark:text-yellow-400' 
                        : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {messageLength} / {MESSAGE_MAX_LENGTH}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <div className="absolute top-3 left-0 pl-4 flex items-start pointer-events-none">
                    <MessageCircle className={`w-5 h-5 ${
                      getFieldError('message')
                        ? 'text-red-500 dark:text-red-400'
                        : touchedFields.message && !errors.message && messageLength > 0
                        ? 'text-green-500 dark:text-green-400'
                        : 'text-gray-400 dark:text-gray-500'
                    } transition-colors duration-200`} aria-hidden="true" />
                  </div>
                  <textarea
                    id="message"
                    {...register('message')}
                    rows={5}
                    minLength={0}
                    maxLength={MESSAGE_MAX_LENGTH}
                    className={`w-full pl-12 pr-4 py-3 text-base border rounded-lg transition-all duration-200 resize-none min-h-[120px] ${
                      getFieldError('message')
                        ? 'border-red-500 dark:border-red-500 bg-red-50 dark:bg-red-900/20 focus:ring-2 focus:ring-red-500 focus:border-red-500'
                        : touchedFields.message && !errors.message && messageLength > 0
                        ? 'border-green-500 dark:border-green-500 bg-green-50 dark:bg-green-900/20'
                        : 'border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-blue-600'
                    }`}
                    placeholder="Tell us about your project (optional)..."
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                </div>
                {getFieldError('message') && (
                  <p id="message-error" className="mt-1.5 text-sm text-red-600 dark:text-red-400 flex items-center gap-1" role="alert">
                    <AlertCircle className="w-4 h-4" aria-hidden="true" />
                    {getFieldError('message')}
                  </p>
                )}
              </div>

              {/* Success Message */}
              {submitSuccess && (
                <div
                  className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-500 dark:border-green-700 text-green-800 dark:text-green-300 animate-in fade-in slide-in-from-top-2 duration-300"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Success!</p>
                      <p className="text-sm">Thank you for your inquiry! We will get back to you soon.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitError && (
                <div
                  className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border-2 border-red-500 dark:border-red-700 text-red-800 dark:text-red-300 animate-in fade-in slide-in-from-top-2 duration-300"
                  role="alert"
                  aria-live="assertive"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Error</p>
                      <p className="text-sm">{submitError}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isValidating}
                className="group relative w-full px-8 py-4 min-h-[48px] bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-base sm:text-lg rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 ease-out overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:outline-none"
                aria-label={isSubmitting ? 'Submitting form' : 'Submit contact form'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Inquiry</span>
                      <IconArrowRight
                        size="sm"
                        className="text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300"
                      />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 rounded-2xl p-6 sm:p-8 h-full flex flex-col justify-center border border-slate-800/70 shadow-2xl shadow-blue-500/10">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-100">Contact Information</h3>
              </div>

              <div className="space-y-4 sm:space-y-5">
                {/* Address */}
                <div className="bg-slate-900/70 rounded-xl p-4 flex items-start gap-4 border border-slate-800/80 hover:border-blue-500/60 transition-all duration-300 ease-out hover:scale-[1.02]">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/80 shadow-md shadow-sky-500/25 flex-shrink-0">
                    <MapPin className="w-6 h-6 text-sky-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-100 mb-2">Address</h4>
                    <p className="text-base text-gray-300">
                      Kaveri Sangam,Shilaj Cross Road
                      <br />
                      Ahmedabad - 380059,Gujrat,India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-slate-900/70 rounded-xl p-4 flex items-start gap-4 border border-slate-800/80 hover:border-purple-500/60 transition-colors duration-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/80 shadow-md shadow-purple-500/25 flex-shrink-0">
                    <Send className="w-6 h-6 text-purple-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-100 mb-2">Email</h4>
                    <p className="text-base text-gray-300 break-all">datascubesolutions@gmail.com</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-slate-900/70 rounded-xl p-4 flex items-start gap-4 border border-slate-800/80 hover:border-pink-500/60 transition-colors duration-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/80 shadow-md shadow-pink-500/25 flex-shrink-0">
                    <Phone className="w-6 h-6 text-pink-300" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-100 mb-2">Phone</h4>
                    <p className="text-base text-gray-300">+91 9510157477</p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="bg-slate-900/70 rounded-xl p-4 flex items-start gap-4 border border-slate-800/80 hover:border-emerald-500/60 transition-colors duration-200">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/80 shadow-md shadow-emerald-500/25 flex-shrink-0">
                    <IconClock size="md" state="info" className="text-emerald-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-gray-100 mb-2">Business Hours</h4>
                    <p className="text-base text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-base text-gray-300">Saturday: 10:00 AM - 4:00 PM</p>
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

export default memo(Contact);
