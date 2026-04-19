import React from "react";
import { motion } from "framer-motion";
import {
  X,
  Check,
  Search,
  FileQuestion,
  DollarSign,
  WifiOff,
  BookOpen,
  Brain,
  Smartphone,
  Globe,
  ArrowRight,
  Zap,
} from "lucide-react";

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
    <section
      className="relative py-28 lg:py-36 overflow-hidden"
      id="problem-solution"
    >
      {/* Split background */}
      <div className="absolute inset-0 grid md:grid-cols-2">
        <div className="bg-slate-50 dark:bg-slate-900" />
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800" />
      </div>
      {/* Subtle diagonal */}
      <div className="hidden md:block absolute inset-0 overflow-hidden">
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-32">
          <svg
            className="h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
              points="0,0 100,0 60,100 0,100"
              className="fill-slate-50 dark:fill-slate-900"
            />
            <polygon
              points="100,0 100,100 60,100"
              className="fill-primary-600 dark:fill-primary-700"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white dark:bg-slate-800 px-5 py-2.5 rounded-full shadow-lg border border-slate-100 dark:border-slate-700">
            <Zap className="w-4 h-4 text-gold-500" />
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 tracking-wide uppercase">
              Why HEQA Exists
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-0 lg:gap-20 items-stretch">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="pb-16 md:pb-0 md:pr-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-danger-500/10 flex items-center justify-center">
                <X className="w-7 h-7 text-danger-500" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-danger-500 mb-1">
                  The Problem
                </p>
                <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
                  Without HEQA
                </h3>
              </div>
            </div>
            <div className="space-y-5">
              {problems.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex items-start gap-5 p-5 rounded-2xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200/60 dark:border-slate-700/60 hover:border-danger-300 dark:hover:border-danger-800 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="w-11 h-11 rounded-xl bg-danger-50 dark:bg-danger-900/20 text-danger-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium pt-2">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="pt-16 md:pt-0 md:pl-16"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <Check className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-gold-400 mb-1">
                  The Solution
                </p>
                <h3 className="text-2xl lg:text-3xl font-heading font-extrabold text-white">
                  With HEQA Solutions
                </h3>
              </div>
            </div>
            <div className="space-y-5">
              {solutions.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 + 0.2 }}
                  className="group flex items-start gap-5 p-5 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 hover:bg-white/15 hover:border-white/20 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-white/15 text-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <p className="text-blue-100 leading-relaxed font-medium pt-2">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Center connector */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring" }}
          className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
          <div className="w-16 h-16 rounded-full bg-white dark:bg-slate-900 shadow-2xl border-4 border-gold-500 flex items-center justify-center">
            <ArrowRight className="w-6 h-6 text-gold-500" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
