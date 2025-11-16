'use client';

import { useEffect, useState, useMemo, memo, useCallback } from 'react';
import FastLink from './FastLink';
import { usePathname } from 'next/navigation';
import { Home, Users, Settings, Briefcase, Phone, Layers, Factory, Menu, X } from 'lucide-react';
import { Icon as PremiumIcon } from './icons/IconLibrary';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Memoize pathname checks to prevent unnecessary recalculations
  const isHome = useMemo(() => pathname === '/' || pathname === '', [pathname]);
  const isAbout = useMemo(() => pathname === '/about', [pathname]);
  const isServices = useMemo(() => pathname?.startsWith('/services'), [pathname]);
  const isSolutions = useMemo(() => pathname?.startsWith('/solutions'), [pathname]);
  const isIndustries = useMemo(() => pathname?.startsWith('/industries'), [pathname]);
  const isProjects = useMemo(() => pathname === '/projects', [pathname]);
  const isContact = useMemo(() => pathname === '/contact', [pathname]);

  // Optimized scroll handler with useCallback
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Optimized mobile menu animation with requestAnimationFrame
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Use requestAnimationFrame for better performance
      const rafId = requestAnimationFrame(() => {
        const menuItems = document.querySelectorAll('.mobile-menu-item');
        menuItems.forEach((item, index) => {
          requestAnimationFrame(() => {
            (item as HTMLElement).style.opacity = '1';
            (item as HTMLElement).style.transform = 'translateX(0) translateZ(0)';
          });
        });
      });
      return () => cancelAnimationFrame(rafId);
    } else {
      // Reset on close - immediate for better UX
      const menuItems = document.querySelectorAll('.mobile-menu-item');
      menuItems.forEach((item) => {
        (item as HTMLElement).style.opacity = '0';
        (item as HTMLElement).style.transform = 'translateX(20px) translateZ(0)';
      });
    }
  }, [isMobileMenuOpen]);

  // Memoize handlers to prevent recreation
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 shadow-xl backdrop-blur-xl'
          : 'bg-slate-900/80 backdrop-blur-xl'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <FastLink
            href="/"
            className="flex items-center gap-2 group"
            prefetch={true}
          >
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all">
                Data Scube
              </span>
              {/* <span className="text-[10px] text-slate-400 font-medium hidden sm:block">Solutions & Support</span> */}
            </div>
          </FastLink>
          
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              <FastLink
                href="/"
                prefetch={true}
                className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isHome
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PremiumIcon name="code" size="sm" className={isHome ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'} />
                  <span>Home</span>
                </span>
                {isHome && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></span>
                )}
              </FastLink>
              <FastLink
                href="/about"
                prefetch={true}
                className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isAbout
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PremiumIcon name="users" size="sm" className={isAbout ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'} />
                  <span>About</span>
                </span>
                {isAbout && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></span>
                )}
              </FastLink>
              <FastLink
                href="/services"
                prefetch={true}
                className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isServices
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PremiumIcon name="layers" size="sm" className={isServices ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'} />
                  <span>Services</span>
                </span>
                {isServices && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></span>
                )}
              </FastLink>
              <FastLink
                href="/solutions"
                prefetch={true}
                className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isSolutions
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PremiumIcon name="rocket" size="sm" className={isSolutions ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'} />
                  <span>Solutions</span>
                </span>
                {isSolutions && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></span>
                )}
              </FastLink>
              <FastLink
                href="/industries"
                prefetch={true}
                className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isIndustries
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Factory className={`w-4 h-4 ${isIndustries ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'}`} />
                  <span>Industries / Startups</span>
                </span>
                {isIndustries && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></span>
                )}
              </FastLink>
              <FastLink
                href="/projects"
                prefetch={true}
                className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isProjects
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PremiumIcon name="briefcase" size="sm" className={isProjects ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'} />
                  <span>Projects</span>
                </span>
                {isProjects && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></span>
                )}
              </FastLink>
              <FastLink
                href="/contact"
                prefetch={true}
                className={`group relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  isContact
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-slate-300 hover:text-blue-400 hover:bg-slate-800/50'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <PremiumIcon name="message-square" size="sm" className={isContact ? 'text-blue-400' : 'text-slate-400 group-hover:text-blue-400'} />
                  <span>Contact</span>
                </span>
                {isContact && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></span>
                )}
              </FastLink>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2.5 rounded-lg bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-blue-400 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400/50 z-50 relative border border-slate-700/50"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-16 bg-gray-950/98 backdrop-blur-lg z-40 md:hidden transition-opacity duration-200 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Navigation Menu */}
        <nav
          id="mobile-navigation-menu"
          className={`absolute right-0 top-0 w-[85vw] max-w-80 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 border-l border-gray-700/50 shadow-2xl px-4 py-6 transition-transform duration-200 ease-out overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ willChange: 'transform', height: 'calc(100vh - 4rem)', maxHeight: 'calc(100vh - 4rem)' }}
          aria-label="Mobile navigation"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="flex flex-col space-y-2 pt-4 pb-4">
            <FastLink
              href="/"
              onClick={handleNavClick}
              prefetch={true}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                isHome
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Home className={`w-5 h-5 ${isHome ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Home</span>
              </div>
            </FastLink>

            <FastLink
              href="/about"
              onClick={handleNavClick}
              prefetch={true}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                isAbout
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Users className={`w-5 h-5 ${isAbout ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>About</span>
              </div>
            </FastLink>

            <FastLink
              href="/services"
              onClick={handleNavClick}
              prefetch={true}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                isServices
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Settings className={`w-5 h-5 ${isServices ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Services</span>
              </div>
            </FastLink>

            <FastLink
              href="/solutions"
              onClick={handleNavClick}
              prefetch={true}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                isSolutions
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Layers className={`w-5 h-5 ${isSolutions ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Solutions</span>
              </div>
            </FastLink>

            <FastLink
              href="/industries"
              onClick={handleNavClick}
              prefetch={true}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                isIndustries
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Factory className={`w-5 h-5 ${isIndustries ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Industries / Startups</span>
              </div>
            </FastLink>

            <FastLink
              href="/projects"
              onClick={handleNavClick}
              prefetch={true}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                isProjects
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Briefcase className={`w-5 h-5 ${isProjects ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Projects</span>
              </div>
            </FastLink>

            <FastLink
              href="/contact"
              onClick={handleNavClick}
              prefetch={true}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                isContact
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Phone className={`w-5 h-5 ${isContact ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Contact</span>
              </div>
            </FastLink>
          </div>
        </nav>
      </div>
    </header>
  );
}

// Memoize Header to prevent unnecessary re-renders
export default memo(Header);

