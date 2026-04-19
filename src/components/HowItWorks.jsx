import React from "react";
import { motion } from "framer-motion";
import { Download, GraduationCap, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: <Rocket className="w-8 h-8" />,
    title: "Join the Waiting List",
    description:
      "Sign up with your name and WhatsApp number — be the first to get access when we launch May 20, 2026.",
    gradient: "from-primary-500 to-primary-700",
    accent: "bg-primary-500",
  },
  {
    number: "02",
    icon: <GraduationCap className="w-8 h-8" />,
    title: "Choose Your Specialty",
    description:
      "Select your department — Engineering, Accountancy, Computer Science, Business, and more.",
    gradient: "from-accent-500 to-accent-600",
    accent: "bg-accent-500",
  },
  {
    number: "03",
    icon: <Rocket className="w-8 h-8" />,
    title: "Start Practicing",
    description:
      "Dive into past papers, take practice tests, track your progress, and watch your confidence soar.",
    gradient: "from-gold-400 to-gold-600",
    accent: "bg-gold-500",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="py-28 lg:py-36 bg-slate-950 relative overflow-hidden"
      id="how-it-works"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-600/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-gold-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            Get Started
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
            Start acing your exams in{" "}
            <span className="text-gradient">3 simple steps</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400">
            No complicated setup. No learning curve. Just download and start
            studying.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-24 left-[16%] right-[16%] h-px bg-gradient-to-r from-primary-500/50 via-accent-500/50 to-gold-400/50" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="text-center relative group"
            >
              {/* Step circle */}
              <div className="relative inline-flex mb-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-2xl shadow-primary-500/20`}
                >
                  {step.icon}
                </motion.div>
                <div className="absolute -top-3 -right-3 w-9 h-9 rounded-xl bg-white text-slate-900 text-sm font-extrabold flex items-center justify-center shadow-lg">
                  {step.number}
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-400 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

              {/* Mobile arrow */}
              {idx < steps.length - 1 && (
                <div className="md:hidden flex justify-center my-8">
                  <div className="w-px h-10 bg-gradient-to-b from-white/20 to-transparent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/waitlist">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-gold-500/20"
              >
                <Rocket className="w-5 h-5" />
                Join the Waiting List
              </motion.button>
            </Link>
          </div>
          <p className="mt-5 text-sm text-slate-500">
            Launching May 20, 2026 • Free premium for early members
          </p>
        </motion.div>
      </div>
    </section>
  );
}
