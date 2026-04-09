import React from 'react';
import { motion } from 'framer-motion';
import { Download, Smartphone, GraduationCap, Rocket } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: <Download className="w-7 h-7" />,
    title: 'Download the App',
    description:
      'Get HEQA Solutions from Google Play Store for free. It takes less than 30 seconds to install. iOS coming soon!',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    ring: 'ring-primary-200',
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
  },
];

export default function HowItWorks() {
  return (
    <section className="section-padding bg-white" id="how-it-works">
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
            Get Started
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Start acing your exams in{' '}
            <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            No complicated setup. No learning curve. Just download and start studying.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-accent-200 to-success-200 -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="text-center group"
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex mb-8">
                  <div
                    className={`w-20 h-20 rounded-3xl ${step.bg} ${step.color} flex items-center justify-center ring-4 ${step.ring} bg-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
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
          <button className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 active:scale-95 hover:scale-105">
            <Download className="w-5 h-5" />
            Download Free — It Takes 30 Seconds
          </button>
          <p className="mt-4 text-sm text-slate-400">
            Available on Android • iOS coming soon
          </p>
        </motion.div>
      </div>
    </section>
  );
}
