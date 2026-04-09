import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Smartphone, Sparkles, Layout } from 'lucide-react';

import img1 from '../assets/Screenshot_20260308_075604_HND Examination Portal.jpg.jpeg';
import img2 from '../assets/Screenshot_20260316_224355_HND Examination Portal.jpg.jpeg';
import img3 from '../assets/Screenshot_20260312_075722_HND Examination Portal.jpg.jpeg';
import img4 from '../assets/Screenshot_20260319_192134_HEQA Solutions.jpg.jpeg';
import img5 from '../assets/Screenshot_20260319_192150_HEQA Solutions.jpg.jpeg';
import img6 from '../assets/Screenshot_20260316_224943_HND Examination Portal.jpg.jpeg';

const screens = [
  { img: img1, label: 'Personal Dashboard', desc: 'Track your weekly goals and exam countdowns.' },
  { img: img4, label: 'Question Library', desc: 'Access 50,000+ past questions categorized by course.' },
  { img: img2, label: 'Detailed Solutions', desc: 'Read expert-verified step-by-step explanations.' },
  { img: img3, label: 'Practice Mode', desc: 'Test your knowledge with timed sessions and local rankings.' },
  { img: img5, label: 'Topic Breakdown', desc: 'Understand which areas need more focus with AI insights.' },
  { img: img6, label: 'Performance Analytics', desc: 'Visualize your progress throughout the semester.' },
];

export default function AppShowcase() {
  const [position, setPosition] = useState(0);

  const handleNext = () => setPosition((prev) => (prev + 1) % screens.length);
  const handlePrev = () => setPosition((prev) => (prev - 1 + screens.length) % screens.length);

  const getPositionStyles = (index) => {
    const diff = (index - position + screens.length) % screens.length;
    
    if (diff === 0) {
      return {
        zIndex: 30,
        x: 0,
        scale: 1,
        opacity: 1,
        rotateY: 0,
      };
    } else if (diff === 1 || diff === - (screens.length - 1)) {
      return {
        zIndex: 20,
        x: 180,
        scale: 0.8,
        opacity: 0.6,
        rotateY: -25,
      };
    } else if (diff === screens.length - 1 || diff === -1) {
      return {
        zIndex: 20,
        x: -180,
        scale: 0.8,
        opacity: 0.6,
        rotateY: 25,
      };
    } else {
      return {
        zIndex: 10,
        x: diff > screens.length / 2 ? -300 : 300,
        scale: 0.6,
        opacity: 0,
        rotateY: 0,
      };
    }
  };

  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900 overflow-hidden relative transition-colors" id="showcase">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-100/20 dark:bg-primary-900/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2">
            <Layout className="w-4 h-4" />
            App Interface
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            A premium experience for{' '}
            <span className="text-gradient">premium students</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Beautifully designed to reduce exam anxiety and maximize focus.
            The only study tool you'll ever need.
          </p>
        </motion.div>

        {/* 3D Showcase */}
        <div className="relative h-[600px] flex items-center justify-center perspective-[1200px]">
          {/* Controls - Mobile Friendly */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-4 sm:px-0 z-40 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-xl border border-white dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white hover:text-primary-600 pointer-events-auto transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-md shadow-xl border border-white dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white hover:text-primary-600 pointer-events-auto transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Phone Stack */}
          <div className="relative w-full max-w-5xl h-full flex items-center justify-center transform-style-3d">
            {screens.map((screen, idx) => {
              const styles = getPositionStyles(idx);
              const isActive = (idx - position + screens.length) % screens.length === 0;

              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={styles}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                  }}
                  className="absolute w-[240px] md:w-[280px]"
                >
                  <div className={`phone-frame transition-all duration-500 shadow-xl ${isActive ? 'shadow-[0_40px_100px_rgba(30,58,138,0.2)]' : ''}`}>
                    <img
                      src={screen.img}
                      alt={screen.label}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Spotlight overlay for active phone */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 dark:via-white/5 to-white/5 pointer-events-none" />
                    )}
                  </div>

                  {/* Reflection below */}
                  <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-4/5 h-12 bg-primary-600/10 blur-[40px] rounded-full" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current Screen Info */}
        <motion.div
          key={position}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-12 max-w-sm mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 rounded-full text-xs font-bold mb-3">
            <Sparkles className="w-3 h-3" />
            {(position + 1).toString().padStart(2, '0')} / {screens.length.toString().padStart(2, '0')}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {screens[position].label}
          </h3>
          <p className="text-slate-500 dark:text-slate-400">
            {screens[position].desc}
          </p>
        </motion.div>

        {/* Platform tags */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <div className="px-6 py-2.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 group hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-md transition-all">
            <svg className="w-5 h-5 text-success-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L14.12 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626-2.536-2.486 2.536-2.5zM5.864 2.658L16.8 8.99l-2.301 2.301-8.635-8.633z"/></svg>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Available for</span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Android</span>
            </div>
          </div>
          <div className="px-6 py-2.5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 group hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-md transition-all">
            <svg className="w-5 h-5 text-slate-800 dark:text-slate-200 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tighter">Available for</span>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-300">iOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
