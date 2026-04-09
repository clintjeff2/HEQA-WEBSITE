import React from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="download">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient -z-10" />

      {/* Decorative shapes */}
      <div className="absolute inset-0 -z-5 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-[400px] h-[400px] bg-white/5 rounded-full" />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] bg-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-white/10 rounded-full animate-float-delayed" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
        >
          <Sparkles className="w-4 h-4 text-gold-400" />
          <span>Join 1,000+ students already acing their exams</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-white mb-6 leading-tight"
        >
          Ready to ace your exams?
          <br />
          <span className="text-gold-400">Download HEQA today.</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          50,000+ past questions. Expert solutions. Practice mode. Offline study.
          Everything you need — free to start.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
        >
          <button className="inline-flex justify-center items-center gap-2.5 bg-white text-primary-700 hover:bg-blue-50 px-10 py-4.5 rounded-full text-lg font-bold transition-all shadow-xl shadow-black/10 active:scale-95 hover:scale-105">
            <Download className="w-5 h-5" />
            Download for Android
          </button>
          <button className="inline-flex justify-center items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-10 py-4.5 rounded-full text-lg font-semibold transition-all backdrop-blur-sm active:scale-95">
            iOS Coming Soon
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-sm text-blue-200/60"
        >
          Free to download • No credit card required • Upgrade anytime
        </motion.p>
      </div>
    </section>
  );
}
