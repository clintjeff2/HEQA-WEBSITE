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
              <Smartphone className="w-4 h-4 text-success-600" />
              <span className="text-xs font-semibold text-slate-600">Android</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm">
              <Smartphone className="w-4 h-4 text-slate-600" />
              <span className="text-xs font-semibold text-slate-600">iOS (Coming Soon)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
