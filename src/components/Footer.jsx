import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkHover = {
    initial: { x: 0 },
    hover: { x: 4, color: '#60a5fa' },
  };

  return (
    <footer className="bg-slate-900 text-slate-400 relative overflow-hidden" id="footer">
      {/* Top SVG wave separator */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none -translate-y-[99%]">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V30c120-20 240-30 360-25s240 25 360 30 240-5 360-15 240-10 360 0V60H0z" fill="#0f172a"/>
        </svg>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-900/20 rounded-full blur-[100px]" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-900/20 rounded-full blur-[100px]" />
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2.5 mb-6 cursor-default w-fit"
            >
              <div className="bg-primary-600 text-white p-2 rounded-xl shadow-lg shadow-primary-600/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-heading font-bold text-xl text-white tracking-tight">
                  HEQA<span className="text-primary-400">Solutions</span>
                </span>
              </div>
            </motion.div>
            <p className="text-sm leading-relaxed mb-6 max-w-sm">
              Empowering Cameroon students with comprehensive, verified past
              questions and intelligent study tools. Making quality exam
              preparation accessible to everyone.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm font-medium cursor-default"
            >
              <span>🇨🇲</span>
              <span>Made in Cameroon</span>
            </motion.div>

            {/* Store badges */}
            <div className="flex gap-3 mt-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 px-4 py-2 rounded-lg border border-white/10 text-white text-xs font-medium transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L14.12 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626-2.536-2.486 2.536-2.5zM5.864 2.658L16.8 8.99l-2.301 2.301-8.635-8.633z"/></svg>
                Google Play
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 px-4 py-2 rounded-lg border border-white/10 text-white text-xs font-medium transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                App Store
              </motion.button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Features', href: '#features' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'App Preview', href: '#showcase' },
                { name: 'Download App', href: '#download' },
                { name: 'Reviews', href: '#testimonials' },
              ].map((link, idx) => (
                <motion.li key={idx} variants={linkHover} initial="initial" whileHover="hover">
                  <a href={link.href} className="transition-colors inline-flex items-center gap-1">
                    <span className="w-0 group-hover:w-2 h-px bg-primary-400 transition-all" />
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Resources
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'FAQ', href: '#faq' },
                { name: 'Study Guides', href: '#' },
                { name: 'Blog', href: '#' },
                { name: 'Help Center', href: '#' },
                { name: 'Partnerships', href: '#' },
              ].map((link, idx) => (
                <motion.li key={idx} variants={linkHover} initial="initial" whileHover="hover">
                  <a href={link.href} className="transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Cookie Policy', href: '#' },
                { name: 'Contact Us', href: '#' },
              ].map((link, idx) => (
                <motion.li key={idx} variants={linkHover} initial="initial" whileHover="hover">
                  <a href={link.href} className="transition-colors">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 flex items-center gap-1">
            &copy; {currentYear} HEQA Solutions. Built with{' '}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-3.5 h-3.5 text-danger-400 fill-current" />
            </motion.span>{' '}
            in Cameroon.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              {
                label: 'Facebook',
                path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
              },
              {
                label: 'Instagram',
                path: 'M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4zm-4 11a3 3 0 110-6 3 3 0 010 6zm4.5-7.5a1 1 0 110-2 1 1 0 010 2z',
              },
              {
                label: 'Twitter',
                path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
              },
              {
                label: 'TikTok',
                path: 'M9 12a4 4 0 104 4V4a5 5 0 005 5',
              },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href="#"
                aria-label={social.label}
                whileHover={{ scale: 1.2, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-slate-800 hover:bg-primary-600 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d={social.path} />
                </svg>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
