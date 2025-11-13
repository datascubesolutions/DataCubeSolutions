'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { Home, Users, Settings, Briefcase, Phone, Layers, Factory } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  useEffect(() => {
    gsap.fromTo(
      '.nav-item',
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    // Prevent body scroll when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    // Use CSS transitions for mobile menu - more performant than GSAP on mobile
    // GSAP animations can cause lag on mobile devices
    if (isMobileMenuOpen) {
      // Small delay to ensure menu is visible before animating
      const timer = setTimeout(() => {
        const menuItems = document.querySelectorAll('.mobile-menu-item');
        menuItems.forEach((item, index) => {
          setTimeout(() => {
            (item as HTMLElement).style.opacity = '1';
            (item as HTMLElement).style.transform = 'translateX(0) translateZ(0)';
          }, index * 20); // Minimal stagger for smooth effect
        });
      }, 10);
      return () => clearTimeout(timer);
    } else {
      // Reset on close - immediate for better UX
      const menuItems = document.querySelectorAll('.mobile-menu-item');
      menuItems.forEach((item) => {
        (item as HTMLElement).style.opacity = '0';
        (item as HTMLElement).style.transform = 'translateX(20px) translateZ(0)';
      });
    }
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (path: string) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900 shadow-lg backdrop-blur-sm'
          : 'bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold nav-item text-blue-400">
            Data Scube
          </div>
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => router.push('/')}
                className={`nav-item transition-all duration-300 font-medium relative ${
                  pathname === '/' || pathname === ''
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Home
                {(pathname === '/' || pathname === '') && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-400"></span>
                )}
              </button>
              <button
                onClick={() => router.push('/about')}
                className={`nav-item transition-all duration-300 font-medium relative ${
                  pathname === '/about'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                About
                {pathname === '/about' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-400"></span>
                )}
              </button>
              <button
                onClick={() => router.push('/services')}
                className={`nav-item transition-all duration-300 font-medium relative ${
                  pathname?.startsWith('/services')
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Services
                {pathname?.startsWith('/services') && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-400"></span>
                )}
              </button>
              <button
                onClick={() => router.push('/solutions')}
                className={`nav-item transition-all duration-300 font-medium relative ${
                  pathname?.startsWith('/solutions')
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Solutions
                {pathname?.startsWith('/solutions') && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-400"></span>
                )}
              </button>
              <button
                onClick={() => router.push('/industries')}
                className={`nav-item transition-all duration-300 font-medium relative ${
                  pathname?.startsWith('/industries')
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Industries / Startups
                {pathname?.startsWith('/industries') && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-400"></span>
                )}
              </button>
              <button
                onClick={() => router.push('/projects')}
                className={`nav-item transition-all duration-300 font-medium relative ${
                  pathname === '/projects'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Projects
                {pathname === '/projects' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-400"></span>
                )}
              </button>
              <button
                onClick={() => router.push('/contact')}
                className={`nav-item transition-all duration-300 font-medium relative ${
                  pathname === '/contact'
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                Contact
                {pathname === '/contact' && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-400"></span>
                )}
              </button>
            </div>

            {/* Mobile Hamburger Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 z-50 relative"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-200 ease-out ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-200 ease-out ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-200 ease-out ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                  }`}
                ></span>
              </div>
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
          className={`absolute right-0 top-0 w-80 max-w-[85vw] bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 border-l border-gray-700/50 shadow-2xl px-4 py-6 transition-transform duration-200 ease-out overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
          style={{ willChange: 'transform', height: 'calc(100vh - 4rem)', maxHeight: 'calc(100vh - 4rem)' }}
        >
          <div className="flex flex-col space-y-2 pt-4 pb-4">
            <button
              onClick={() => handleNavClick('/')}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                pathname === '/' || pathname === ''
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Home className={`w-5 h-5 ${pathname === '/' || pathname === '' ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Home</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                pathname === '/about'
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Users className={`w-5 h-5 ${pathname === '/about' ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>About</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/services')}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                pathname?.startsWith('/services')
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Settings className={`w-5 h-5 ${pathname?.startsWith('/services') ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Services</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/solutions')}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                pathname?.startsWith('/solutions')
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Layers className={`w-5 h-5 ${pathname?.startsWith('/solutions') ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Solutions</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/industries')}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                pathname?.startsWith('/industries')
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Factory className={`w-5 h-5 ${pathname?.startsWith('/industries') ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Industries / Startups</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/projects')}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                pathname === '/projects'
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Briefcase className={`w-5 h-5 ${pathname === '/projects' ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Projects</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`mobile-menu-item text-left text-lg font-semibold py-3.5 px-4 rounded-xl relative bg-gray-800/40 backdrop-blur-sm ${
                pathname === '/contact'
                  ? 'text-blue-400 bg-blue-500/20 border-l-4 border-blue-400 shadow-lg shadow-blue-500/20'
                  : 'text-gray-200 hover:text-blue-400 hover:bg-gray-800/70 border-l-4 border-transparent hover:border-blue-500/50'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Phone className={`w-5 h-5 ${pathname === '/contact' ? 'text-blue-400' : 'text-gray-400'}`} />
                <span>Contact</span>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

