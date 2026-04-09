import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

import img1 from '../assets/Screenshot_20260308_075604_HND Examination Portal.jpg.jpeg';
import img2 from '../assets/Screenshot_20260316_224355_HND Examination Portal.jpg.jpeg';
import img3 from '../assets/Screenshot_20260312_075722_HND Examination Portal.jpg.jpeg';
import img4 from '../assets/Screenshot_20260319_192134_HEQA Solutions.jpg.jpeg';
import img5 from '../assets/Screenshot_20260319_192150_HEQA Solutions.jpg.jpeg';
import img6 from '../assets/Screenshot_20260316_224943_HND Examination Portal.jpg.jpeg';

const screens = [
  { img: img1, label: 'Home Screen', desc: 'Your personalized dashboard' },
  { img: img4, label: 'Exam Papers', desc: 'Browse by course, year & specialty' },
  { img: img2, label: 'Question Detail', desc: 'Verified solutions & explanations' },
  { img: img3, label: 'Practice Session', desc: 'Timed quizzes with instant feedback' },
  { img: img5, label: 'Solutions View', desc: 'Step-by-step expert explanations' },
  { img: img6, label: 'Analytics', desc: 'Track your progress visually' },
];

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = (idx) => {
    setActiveIndex(idx);
  };

  const goNext = () => setActiveIndex((prev) => (prev + 1) % screens.length);
  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + screens.length) % screens.length);

  return (
    <section className="section-padding bg-slate-50 overflow-hidden" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">
            App Experience
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Designed for focus.{' '}
            <span className="text-gradient">Built for success.</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            A clean, intuitive interface that makes studying feel effortless.
            Browse through real screenshots from the app.
          </p>
        </motion.div>

        {/* Showcase */}
        <div className="flex flex-col items-center">
          {/* Main Phone Display */}
          <div className="relative mb-12">
            {/* Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary-400/20 via-accent-400/10 to-primary-600/20 rounded-full blur-[60px] -z-10" />

            <div className="flex items-center gap-4 md:gap-8">
              {/* Prev button */}
              <button
                onClick={goPrev}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-200 transition-all hover:scale-110 active:scale-95"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Phone */}
              <div className="relative w-[240px] sm:w-[280px] md:w-[300px]">
                <div className="phone-frame">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeIndex}
                      src={screens[activeIndex].img}
                      alt={screens[activeIndex].label}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                </div>
              </div>

              {/* Next button */}
              <button
                onClick={goNext}
                className="w-12 h-12 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-600 hover:text-primary-600 hover:border-primary-200 transition-all hover:scale-110 active:scale-95"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Active Screen Label */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mt-8"
            >
              <p className="text-lg font-bold text-slate-900">
                {screens[activeIndex].label}
              </p>
              <p className="text-sm text-slate-500">
                {screens[activeIndex].desc}
              </p>
            </motion.div>
          </div>

          {/* Thumbnail Nav */}
          <div className="flex gap-3 flex-wrap justify-center">
            {screens.map((screen, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeIndex === idx
                    ? 'border-primary-500 shadow-lg shadow-primary-500/20 scale-110'
                    : 'border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-300'
                }`}
              >
                <img
                  src={screen.img}
                  alt={screen.label}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Platform tags */}
          <div className="mt-10 flex items-center gap-3">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
              <svg className="w-4 h-4 text-success-600" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L14.12 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626-2.536-2.486 2.536-2.5zM5.864 2.658L16.8 8.99l-2.301 2.301-8.635-8.633z"/></svg>
              <span className="text-xs font-semibold text-slate-600">Android</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
              <svg className="w-4 h-4 text-slate-700" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <span className="text-xs font-semibold text-slate-600">iOS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
