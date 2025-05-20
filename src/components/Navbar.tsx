
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Strategy', href: '#strategy' },
    { name: 'Services', href: '#services' },
    { name: 'Performance', href: '#performance' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo SVG */}
          <svg className="h-10 w-auto" viewBox="0 0 200 60" fill="none">
            <path d="M20 10L40 30L20 50" stroke={isScrolled ? "#0F2D52" : "#FFFFFF"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M50 10H70C75.523 10 80 14.477 80 20V40C80 45.523 75.523 50 70 50H50" stroke={isScrolled ? "#0F2D52" : "#FFFFFF"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="140" cy="30" r="20" stroke={isScrolled ? "#0F2D52" : "#FFFFFF"} strokeWidth="4" />
            <path d="M130 30L140 40L150 30" stroke={isScrolled ? "#0F2D52" : "#FFFFFF"} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className={`ml-2 text-xl font-semibold ${isScrolled ? 'text-finance-dark' : 'text-white'}`}>BeyondVest</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`nav-link ${isScrolled ? 'text-finance-dark' : 'text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn-primary"
          >
            Get in Touch
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className={`h-6 w-6 ${isScrolled ? 'text-finance-dark' : 'text-white'}`} />
        </button>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="absolute top-full right-0 left-0 bg-white shadow-lg md:hidden">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-finance-dark py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a 
                  href="#contact" 
                  className="btn-primary inline-block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get in Touch
                </a>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
