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
    <section className="section-padding bg-slate-50" id="problem-solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">
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
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white border border-slate-200 h-full">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="w-5 h-5 text-danger-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Without HEQA
                </h3>
              </div>
              <div className="space-y-5">
                {problems.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-red-50 text-danger-400 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                      {item.icon}
                    </div>
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-primary-600 to-primary-700 border border-primary-500 h-full shadow-xl shadow-primary-600/20">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  With HEQA Solutions
                </h3>
              </div>
              <div className="space-y-5">
                {solutions.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/15 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-white/25 transition-colors">
                      {item.icon}
                    </div>
                    <p className="text-blue-100 leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
