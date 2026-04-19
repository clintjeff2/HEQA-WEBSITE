import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import MagneticWrapper from "./MagneticWrapper";

export default function CTABanner() {
  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-600 via-primary-700 to-slate-900 px-8 py-20 md:px-20 md:py-28 text-center shadow-2xl shadow-primary-900/30">
          {/* Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* Glowing orbs */}
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-gold-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-accent-500/20 rounded-full blur-[100px]" />

          {/* Floating sparkles */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 left-12 text-white/10 hidden md:block"
          >
            <Sparkles className="w-16 h-16" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-12 right-12 text-white/10 hidden md:block"
          >
            <Sparkles className="w-20 h-20" />
          </motion.div>

          {/* Content */}
          <div className="relative z-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-gold-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
                Join 1,000+ Students
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white mb-6 leading-tight"
            >
              Stop studying hard, <br className="hidden md:block" />
              start studying <span className="text-gold-400">smart</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-blue-200/80 mb-12 leading-relaxed max-w-2xl mx-auto"
            >
              Join the waiting list and get free premium access on launch day.
              Launching May 20, 2026.
            </motion.p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <MagneticWrapper strength={0.3}>
                <Link to="/waitlist">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex justify-center items-center gap-2.5 bg-gold-500 hover:bg-gold-600 text-white px-10 py-4.5 rounded-full text-lg font-bold transition-all shadow-xl shadow-gold-500/20 h-full w-full sm:w-auto"
                  >
                    <Rocket className="w-6 h-6" />
                    Join the Waiting List
                  </motion.button>
                </Link>
              </MagneticWrapper>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs text-blue-300/60 uppercase tracking-widest font-bold"
            >
              Free premium for early members • No credit card required
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
