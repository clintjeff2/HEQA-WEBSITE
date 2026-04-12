import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, GraduationCap, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Download className="w-7 h-7" />,
    title: 'Download the App',
    description:
      'Get HEQA Solutions from Google Play Store or the Apple App Store — free and takes less than 30 seconds.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    ring: 'ring-primary-200',
    gradient: 'from-primary-500 to-primary-600',
  },
  {
    number: '02',
    icon: <GraduationCap className="w-7 h-7" />,
    title: 'Choose Your Specialty',
    description:
      'Select your department — Engineering, Accountancy, Computer Science, Business, and more. We personalize your experience.',
    color: 'text-accent-500',
    bg: 'bg-sky-50',
    ring: 'ring-sky-200',
    gradient: 'from-sky-400 to-accent-500',
  },
  {
    number: '03',
    icon: <Rocket className="w-7 h-7" />,
    title: 'Start Practicing',
    description:
      'Dive into past papers, take practice tests, track your progress, and watch your exam confidence soar.',
    color: 'text-success-600',
    bg: 'bg-emerald-50',
    ring: 'ring-emerald-200',
    gradient: 'from-emerald-400 to-success-600',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.5"]
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={sectionRef} className="section-padding bg-white dark:bg-slate-950 transition-colors relative overflow-hidden" id="how-it-works">
      {/* Background dot pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #1e293b 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-500"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            Get Started
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Start acing your exams in{' '}
            <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            No complicated setup. No learning curve. Just download and start studying.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* SVG Scroll-Draw Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 z-0 h-1">
            <svg
              className="w-full h-8 absolute top-1/2 -translate-y-1/2"
              viewBox="0 0 100 8"
              preserveAspectRatio="none"
              fill="none"
            >
              {/* Background track */}
              <path d="M 0 4 Q 25 0 50 4 Q 75 8 100 4" stroke="#e2e8f0" strokeWidth="1" fill="none" />
              {/* Animated draw line */}
              <motion.path
                d="M 0 4 Q 25 0 50 4 Q 75 8 100 4"
                stroke="url(#lineGrad)"
                strokeWidth="1.5"
                fill="none"
                style={{ pathLength }}
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#0ea5e9" />
                  <stop offset="100%" stopColor="#22c55e" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex mb-8">
                  {/* Pulsing ring behind icon */}
                  <motion.div
                    className={`absolute inset-0 rounded-3xl ${step.bg} dark:bg-slate-800 -z-10`}
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: idx * 0.5 }}
                  />
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className={`w-20 h-20 rounded-3xl ${step.bg} dark:bg-slate-800 ${step.color} dark:text-primary-400 flex items-center justify-center ring-4 ${step.ring} dark:ring-slate-700 bg-white dark:bg-slate-900 shadow-lg transition-all duration-300`}
                  >
                    {step.icon}
                  </motion.div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${step.gradient} text-white text-xs font-bold flex items-center justify-center shadow-md`}>
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* Connector arrow (mobile) */}
                {idx < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-6">
                    <motion.svg
                      width="24"
                      height="40"
                      viewBox="0 0 24 40"
                      fill="none"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                    >
                      <path d="M12 0v32m0 0l-6-6m6 6l6-6" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </motion.svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L14.12 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626-2.536-2.486 2.536-2.5zM5.864 2.658L16.8 8.99l-2.301 2.301-8.635-8.633z"/></svg>
              Download for Android
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              Download for iOS
            </motion.button>
          </div>
          <p className="mt-4 text-sm text-slate-400">
            Available on Android & iOS • Free to download
          </p>
        </motion.div>
      </div>
    </section>
  );
}
