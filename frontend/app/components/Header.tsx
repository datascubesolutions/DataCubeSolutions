'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { Home, Users, Settings, Briefcase, Phone } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
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
    // Animate mobile menu items
    if (isMobileMenuOpen) {
      const menuItems = document.querySelectorAll('.mobile-menu-item');
      gsap.fromTo(
        menuItems,
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );
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
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
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
        className={`fixed inset-0 top-16 bg-gray-900/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {/* Mobile Navigation Menu */}
        <nav
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-gray-900 border-l border-gray-800 px-6 py-8 transition-transform duration-300 ease-out ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => handleNavClick('/')}
              className={`mobile-menu-item text-left text-xl font-medium py-4 px-5 rounded-lg transition-all duration-300 relative ${
                pathname === '/' || pathname === ''
                  ? 'text-blue-400 bg-blue-400/10 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 border-l-4 border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Home className="w-6 h-6" />
                <span>Home</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/about')}
              className={`mobile-menu-item text-left text-xl font-medium py-4 px-5 rounded-lg transition-all duration-300 relative ${
                pathname === '/about'
                  ? 'text-blue-400 bg-blue-400/10 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 border-l-4 border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6" />
                <span>About</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/services')}
              className={`mobile-menu-item text-left text-xl font-medium py-4 px-5 rounded-lg transition-all duration-300 relative ${
                pathname?.startsWith('/services')
                  ? 'text-blue-400 bg-blue-400/10 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 border-l-4 border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-6 h-6" />
                <span>Services</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/projects')}
              className={`mobile-menu-item text-left text-xl font-medium py-4 px-5 rounded-lg transition-all duration-300 relative ${
                pathname === '/projects'
                  ? 'text-blue-400 bg-blue-400/10 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 border-l-4 border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Briefcase className="w-6 h-6" />
                <span>Projects</span>
              </div>
            </button>

            <button
              onClick={() => handleNavClick('/contact')}
              className={`mobile-menu-item text-left text-xl font-medium py-4 px-5 rounded-lg transition-all duration-300 relative ${
                pathname === '/contact'
                  ? 'text-blue-400 bg-blue-400/10 border-l-4 border-blue-400'
                  : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800/50 border-l-4 border-transparent'
              }`}
            >
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6" />
                <span>Contact</span>
              </div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

