import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Download, Sun, Moon, Rocket } from "lucide-react";
import logoTransparent from "../assets/heqa-logo-transparent.png";

export default function Navbar({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "About", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200/50 dark:border-slate-800 shadow-lg shadow-slate-900/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`rounded-xl shadow-lg transition-all duration-300 overflow-hidden ${
                isScrolled ? "shadow-primary-600/25" : "shadow-white/10"
              }`}
            >
              <img
                src={logoTransparent}
                alt="HEQA Solutions"
                className="w-10 h-10 object-contain"
              />
            </motion.div>
            <div className="flex flex-col">
              <span
                className={`font-heading font-extrabold text-xl tracking-tight leading-tight transition-colors duration-300 ${
                  isScrolled ? "text-slate-900 dark:text-white" : "text-white"
                }`}
              >
                HEQA
                <span
                  className={`transition-colors duration-300 ${isScrolled ? "text-primary-600" : "text-gold-400"}`}
                >
                  Solutions
                </span>
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase leading-none hidden sm:block transition-colors duration-300 ${
                  isScrolled
                    ? "text-slate-400 dark:text-slate-500"
                    : "text-white/60"
                }`}
              >
                Ace Your Exams
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  location.pathname === link.href
                    ? isScrolled
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-white"
                    : isScrolled
                      ? "text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50/50 dark:hover:bg-primary-900/20"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300 ${
                    location.pathname === link.href
                      ? "w-3/5"
                      : "w-0 group-hover:w-3/5"
                  } ${isScrolled ? "bg-primary-600" : "bg-white"}`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                isScrolled
                  ? "border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900"
                  : "border-white/20 text-white hover:bg-white/10"
              }`}
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <Link to="/waitlist">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40"
              >
                <Rocket className="w-4 h-4" />
                Join Waitlist
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
                isScrolled
                  ? "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900 border border-transparent"
                  : "text-white hover:bg-white/10 border border-white/10"
              }`}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors ${
                isScrolled
                  ? "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
          >
            <div className="bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-100 dark:border-slate-800 px-4 py-6 shadow-xl">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={`block font-medium px-4 py-3 rounded-xl transition-all ${
                        location.pathname === link.href
                          ? "text-primary-600 bg-primary-50 dark:bg-primary-900/20"
                          : "text-slate-700 dark:text-slate-300 hover:text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/20"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 px-4">
                <Link
                  to="/waitlist"
                  className="w-full bg-gold-500 hover:bg-gold-600 text-white px-6 py-3.5 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Rocket className="w-5 h-5" />
                  Join the Waiting List
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
