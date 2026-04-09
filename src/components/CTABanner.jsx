import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import MagneticWrapper from './MagneticWrapper';

export default function CTABanner() {
  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[3rem] cta-gradient px-8 py-20 md:px-20 md:py-24 text-center shadow-2xl shadow-primary-600/30">
          {/* Decorative floating elements */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 10, 0]
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 left-10 text-white/20 hidden md:block"
          >
            <Sparkles className="w-12 h-12" />
          </motion.div>

          <motion.div
            animate={{ 
              y: [0, 20, 0],
              rotate: [0, -10, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-10 right-10 text-white/20 hidden md:block"
          >
            <Sparkles className="w-16 h-16" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight"
            >
              Stop studying hard, <br className="hidden md:block" />
              start studying <span className="text-accent-300">smart</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed"
            >
              Join 1,000+ students already using HEQA Solutions to dominate their exams.
              Download the app and get your first 3 papers free!
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <MagneticWrapper strength={0.3}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex justify-center items-center gap-2.5 bg-white text-primary-700 hover:bg-blue-50 px-10 py-4.5 rounded-full text-lg font-bold transition-all shadow-xl shadow-black/10 h-full w-full sm:w-auto"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L14.12 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626-2.536-2.486 2.536-2.5zM5.864 2.658L16.8 8.99l-2.301 2.301-8.635-8.633z"/></svg>
                  Download for Android
                </motion.button>
              </MagneticWrapper>

              <MagneticWrapper strength={0.3}>
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex justify-center items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-10 py-4.5 rounded-full text-lg font-semibold transition-all backdrop-blur-sm h-full w-full sm:w-auto"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                  Download for iOS
                </motion.button>
              </MagneticWrapper>
            </div>

            {/* Microcopy */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs text-blue-200 uppercase tracking-widest font-bold"
            >
              No credit card required. Start free.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
