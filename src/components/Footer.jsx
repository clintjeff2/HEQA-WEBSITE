import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import logoTransparent from "../assets/heqa-logo-transparent.png";

const Facebook = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const Github = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const X = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768" />
    <path d="M12.456 12.456l7.544 7.544" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="footer-gradient pt-20 pb-10 border-t border-slate-100 dark:border-slate-800 transition-colors relative overflow-hidden"
      id="footer"
    >
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-50 dark:bg-primary-900/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-50 dark:bg-accent-900/10 rounded-full blur-[80px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-6 group">
              <div className="rounded-xl overflow-hidden group-hover:scale-110 transition-transform">
                <img
                  src={logoTransparent}
                  alt="HEQA Solutions"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <span className="font-heading font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                HEQA<span className="text-primary-600">Solutions</span>
              </span>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed max-w-sm">
              The #1 study companion for Cameroonian students. Built with love
              in Cameroon to help you crush your exams.
            </p>
            <div className="flex gap-4">
              {[Facebook, X, Instagram, Github].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex items-center justify-center text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 hover:border-primary-100 dark:hover:border-primary-900/30 transition-all shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Home", to: "/" },
                { label: "Features", to: "/features" },
                { label: "Pricing", to: "/pricing" },
                { label: "About", to: "/about" },
                { label: "FAQ", to: "/faq" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-700 group-hover:bg-primary-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
              Contact Us
            </h4>
            <div className="space-y-5">
              <a
                href="mailto:info@heqasolutions.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <p className="text-slate-400 dark:text-slate-500 font-medium">
                    Email
                  </p>
                  <p className="font-bold text-slate-700 dark:text-slate-300">
                    info@heqasolutions.com
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/237690055252"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-success-50 dark:bg-success-900/20 text-success-600 dark:text-success-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div className="text-sm">
                  <p className="text-slate-400 dark:text-slate-500 font-medium">
                    WhatsApp
                  </p>
                  <p className="font-bold text-slate-700 dark:text-slate-300">
                    +237 690 055 252
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Store Links */}
          <div>
            <h4 className="font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-widest text-xs">
              Get the App
            </h4>
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-12 bg-slate-900 dark:bg-slate-800 text-white rounded-xl flex items-center justify-center gap-2 px-4 shadow-lg"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L14.12 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626-2.536-2.486 2.536-2.5zM5.864 2.658L16.8 8.99l-2.301 2.301-8.635-8.633z" />
                </svg>
                <div className="text-left">
                  <p className="text-[8px] font-bold uppercase leading-none opacity-60">
                    Get it on
                  </p>
                  <p className="text-xs font-bold leading-none mt-1">
                    Google Play
                  </p>
                </div>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full h-12 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white rounded-xl flex items-center justify-center gap-2 px-4 shadow-md transition-colors"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[8px] font-bold uppercase leading-none opacity-60">
                    Download on the
                  </p>
                  <p className="text-xs font-bold leading-none mt-1">
                    App Store
                  </p>
                </div>
              </motion.button>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              <span>🇨🇲</span>
              <span>Made in Cameroon</span>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            © {currentYear} HEQA Solutions. All rights reserved.
          </p>
          <div className="flex gap-8">
            <Link
              to="/privacy"
              className="text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-slate-400 dark:text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
