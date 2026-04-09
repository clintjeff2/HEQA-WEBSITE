import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Download, Play, Sparkles, Users, BookOpen, CheckCircle } from 'lucide-react';
import mockupImage1 from '../assets/Screenshot_20260316_224355_HND Examination Portal.jpg.jpeg';
import mockupImage2 from '../assets/Screenshot_20260319_192134_HEQA Solutions.jpg.jpeg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient animated-gradient -z-20" />

      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/5 rounded-full" />
        <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] bg-white/5 rounded-full" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/15 rounded-full animate-float-delayed" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/10 rounded-full animate-float" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:pt-36 md:pb-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            {/* Trust badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>#1 Exam Prep App in Cameroon</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-heading font-extrabold leading-[1.1] mb-6 text-white"
            >
              Ace Your Exams with{' '}
              <span className="text-gold-400">50,000+</span>{' '}
              Past Questions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-xl"
            >
              The ultimate exam prep app for Cameroon students.{' '}
              <span className="text-white font-medium">HND</span>,{' '}
              <span className="text-white font-medium">GCE A-Level</span>,{' '}
              <span className="text-white font-medium">GCE O-Level</span> — all
              past papers, solutions, and practice in your pocket.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <button className="inline-flex justify-center items-center gap-2.5 bg-white text-primary-700 hover:bg-blue-50 px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-black/10 active:scale-95 hover:scale-105 group">
                <Download className="w-5 h-5" />
                Download for Android
              </button>
              <button className="inline-flex justify-center items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-full text-base font-semibold transition-all backdrop-blur-sm active:scale-95 group">
                <Play className="w-5 h-5" />
                Watch Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Micro-proof */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-primary-800 bg-primary-300 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/80?img=${i + 10}`}
                        alt="Student"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col ml-1">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        fill="currentColor"
                        className="w-3.5 h-3.5 text-gold-400"
                      />
                    ))}
                  </div>
                  <span className="text-xs font-medium text-blue-200">
                    4.8/5 from 500+ reviews
                  </span>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-6 text-sm text-blue-200">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-blue-300" />
                  1,000+ students
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-success-400" />
                  Works offline
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Phones */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="relative lg:ml-auto w-full max-w-[420px] mx-auto h-[520px] md:h-[600px]"
          >
            {/* Glow behind phones */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-white/10 rounded-full blur-[80px]" />

            {/* Phone 1 — Left, tilted */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
              className="absolute left-0 top-8 w-[200px] md:w-[220px] z-20"
            >
              <div className="phone-frame shadow-[0_25px_60px_rgba(0,0,0,0.3)] transform -rotate-6">
                <img
                  src={mockupImage1}
                  alt="HEQA Solutions — Exam Papers Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Phone 2 — Right, tilted opposite */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: 'easeInOut',
                delay: 1.5,
              }}
              className="absolute right-0 top-20 w-[200px] md:w-[220px] z-10"
            >
              <div className="phone-frame shadow-[0_25px_60px_rgba(0,0,0,0.3)] transform rotate-6">
                <img
                  src={mockupImage2}
                  alt="HEQA Solutions — Practice Mode Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating badge — Verified */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: 'easeInOut',
                delay: 0.8,
              }}
              className="absolute -right-4 md:right-0 top-4 bg-white/95 backdrop-blur-xl p-3 rounded-2xl shadow-xl shadow-black/10 flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Accuracy
                </p>
                <p className="text-sm font-bold text-slate-800">
                  100% Verified
                </p>
              </div>
            </motion.div>

            {/* Floating badge — Questions count */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: 'easeInOut',
                delay: 2,
              }}
              className="absolute -left-4 md:left-0 bottom-16 bg-white/95 backdrop-blur-xl p-3 rounded-2xl shadow-xl shadow-black/10 flex items-center gap-3 z-30"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                  Library
                </p>
                <p className="text-sm font-bold text-slate-800">
                  50,000+ Questions
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48L48 42.7C96 37 192 27 288 32C384 37 480 59 576 64C672 69 768 59 864 48C960 37 1056 27 1152 26.7C1248 27 1344 37 1392 42.7L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V48Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
