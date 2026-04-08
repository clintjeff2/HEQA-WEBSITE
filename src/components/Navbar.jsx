import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#features' },
    { name: 'Showcase', href: '#showcase' },
    { name: 'Testimonials', href: '#testimonials' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-primary-600 text-white p-2.5 rounded-xl shadow-lg shadow-primary-600/20 group-hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="font-heading font-extrabold text-2xl tracking-tighter text-slate-900">
              HEKA<span className="text-primary-600">Portal</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-primary-500/30 active:scale-95">
              Download App
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass-panel absolute top-full left-0 w-full p-4 border-t border-slate-200"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-700 font-medium hover:text-primary-600 px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-primary-600 text-white px-5 py-3 rounded-xl font-medium w-full mt-4">
              Download App
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
