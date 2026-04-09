import React from 'react';
import { motion } from 'framer-motion';
import {
  X, Check, Search, FileQuestion, DollarSign, WifiOff,
  BookOpen, Brain, Smartphone, Globe
} from 'lucide-react';

const problems = [
  {
    icon: <Search className="w-5 h-5" />,
    text: "Scattered past papers across WhatsApp, photocopy shops, and friends",
  },
  {
    icon: <FileQuestion className="w-5 h-5" />,
    text: "Questions without verified solutions or detailed explanations",
  },
  {
    icon: <DollarSign className="w-5 h-5" />,
    text: "Expensive private tutors and coaching centers",
  },
  {
    icon: <WifiOff className="w-5 h-5" />,
    text: "No way to study when there's no internet connection",
  },
];

const solutions = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    text: "50,000+ organized questions in one app, searchable by course and year",
  },
  {
    icon: <Brain className="w-5 h-5" />,
    text: "Every question has expert-verified, step-by-step solutions",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    text: "Free to start — Premium is affordable at 2,000 FCFA/month",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    text: "Download papers & study 100% offline, anywhere, anytime",
  },
];

export default function ProblemSolution() {
  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden" id="problem-solution">
      {/* SVG wave top decoration */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none -translate-y-1">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 60V30c120-20 240-30 360-25s240 25 360 30 240-5 360-15 240-10 360 0V60H0z" fill="#f8fafc"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-danger-500"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            The Problem & Our Solution
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Exam prep in Cameroon is{' '}
            <span className="text-danger-500">broken</span>. We{' '}
            <span className="text-gradient">fixed it</span>.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 h-full hover:shadow-xl transition-shadow duration-500">
              <div className="flex items-center gap-3 mb-8">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center"
                >
                  <X className="w-5 h-5 text-danger-500" />
                </motion.div>
                <h3 className="text-xl font-bold text-slate-900">
                  Without HEQA
                </h3>
              </div>
              <div className="space-y-5">
                {problems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-10 h-10 rounded-xl bg-red-50 text-danger-400 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors"
                    >
                      {item.icon}
                    </motion.div>
                    <p className="text-slate-600 leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 border border-primary-500 h-full shadow-xl shadow-primary-600/20 hover:shadow-2xl hover:shadow-primary-600/30 transition-shadow duration-500 relative overflow-hidden">
              {/* Decorative SVG inside solution card */}
              <svg className="absolute top-0 right-0 w-40 h-40 text-white/5 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
                <path d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.6,-3C94.5,12.1,86.1,26.4,75.9,38.2C65.7,50,53.7,59.3,40.3,66.1C26.9,72.9,12,77.2,-3.1,79C-18.1,80.7,-33.2,79.9,-46.1,72.9C-59,65.8,-69.6,52.5,-75.7,37.8C-81.8,23.1,-83.4,7.1,-80.6,-8.1C-77.8,-23.4,-70.6,-38,-60.1,-50.2C-49.6,-62.4,-35.8,-72.2,-21.3,-76.4C-6.8,-80.6,8.4,-79.1,22.8,-75.4C37.2,-71.7,50.7,-63.8,44.7,-76.4Z" transform="translate(150 50) scale(0.8)" />
              </svg>

              <div className="flex items-center gap-3 mb-8 relative">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center"
                >
                  <Check className="w-5 h-5 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-white">
                  With HEQA Solutions
                </h3>
              </div>
              <div className="space-y-5 relative">
                {solutions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.12 + 0.2, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors"
                    >
                      {item.icon}
                    </motion.div>
                    <p className="text-blue-100 leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Connecting arrow between sections */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, type: 'spring' }}
          className="hidden md:flex justify-center -mt-6 relative z-10"
        >
          <div className="w-14 h-14 rounded-full bg-white shadow-xl border border-slate-100 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
