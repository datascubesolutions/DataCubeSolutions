'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main ref={pageRef} className="pt-20">
        <AboutUs />
      </main>
      <div className="footer-wrapper-home-about">
        <Footer />
      </div>
    </div>
  );
}


