import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, Layout } from "lucide-react";

import img1 from "../assets/HEQA NAME SCREEN IMAGES/Premium Home Screen light mode.jpg";
import img2 from "../assets/HEQA NAME SCREEN IMAGES/Practice By Paper Screen darkmode Best.jpg";
import img3 from "../assets/HEQA NAME SCREEN IMAGES/Exam Paper list screen lightmode.jpg";
import img4 from "../assets/HEQA NAME SCREEN IMAGES/Question Detail Screen light mode.jpg";
import img5 from "../assets/HEQA NAME SCREEN IMAGES/My analytics screen darkmode.jpg";
import img6 from "../assets/HEQA NAME SCREEN IMAGES/Leaderboard Screen lightmode.jpg";

const screens = [
  {
    img: img1,
    label: "Premium Home Screen",
    desc: "Your personalised dashboard with study streaks, quick actions, and exam countdowns.",
  },
  {
    img: img2,
    label: "Practice by Paper",
    desc: "Select any exam paper and practise all its questions with instant feedback.",
  },
  {
    img: img3,
    label: "Exam Papers Library",
    desc: "Browse past papers by specialty, course, and year — all beautifully structured.",
  },
  {
    img: img4,
    label: "Question Detail View",
    desc: "Crystal-clear question display with perfectly formatted equations, images, and tables.",
  },
  {
    img: img5,
    label: "Personal Analytics",
    desc: "Track your progress, accuracy rates, and study patterns over time.",
  },
  {
    img: img6,
    label: "National Leaderboard",
    desc: "Compete with HND students across Cameroon and climb the rankings.",
  },
];

export default function AppShowcase() {
  const [position, setPosition] = useState(0);
  const handleNext = () => setPosition((prev) => (prev + 1) % screens.length);
  const handlePrev = () =>
    setPosition((prev) => (prev - 1 + screens.length) % screens.length);

  return (
    <section
      className="py-28 lg:py-36 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 overflow-hidden relative transition-colors"
      id="showcase"
    >
      {/* Glowing orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/15 dark:bg-primary-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <Layout className="w-3.5 h-3.5" />
            App Preview
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            A premium experience for{" "}
            <span className="text-gradient">premium students</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Beautifully designed to reduce exam anxiety and maximize your focus.
          </p>
        </motion.div>

        {/* Showcase carousel */}
        <div className="relative">
          {/* Navigation */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 sm:-mx-6 z-40 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrev}
              className="w-14 h-14 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white hover:text-primary-600 pointer-events-auto transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="w-14 h-14 rounded-2xl bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl shadow-2xl border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-800 dark:text-white hover:text-primary-600 pointer-events-auto transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          </div>

          {/* 3D Phone carousel */}
          <div className="relative h-[580px] flex items-center justify-center perspective-[1200px]">
            {screens.map((screen, idx) => {
              const diff = (idx - position + screens.length) % screens.length;
              let styles;
              if (diff === 0)
                styles = { zIndex: 30, x: 0, scale: 1, opacity: 1, rotateY: 0 };
              else if (diff === 1)
                styles = {
                  zIndex: 20,
                  x: 200,
                  scale: 0.78,
                  opacity: 0.5,
                  rotateY: -30,
                };
              else if (diff === screens.length - 1)
                styles = {
                  zIndex: 20,
                  x: -200,
                  scale: 0.78,
                  opacity: 0.5,
                  rotateY: 30,
                };
              else
                styles = {
                  zIndex: 10,
                  x: diff > screens.length / 2 ? -350 : 350,
                  scale: 0.55,
                  opacity: 0,
                  rotateY: 0,
                };
              const isActive = diff === 0;

              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={styles}
                  transition={{ type: "spring", stiffness: 260, damping: 25 }}
                  className="absolute w-[240px] md:w-[280px]"
                >
                  <div
                    className={`phone-frame transition-all duration-500 ${isActive ? "shadow-[0_40px_120px_rgba(30,58,138,0.25)]" : "shadow-xl"}`}
                  >
                    <img
                      src={screen.img}
                      alt={screen.label}
                      className="w-full h-full object-cover"
                    />
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/10 pointer-events-none" />
                    )}
                  </div>
                  {isActive && (
                    <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-4/5 h-16 bg-primary-500/15 blur-[50px] rounded-full" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Current info */}
        <motion.div
          key={position}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-14 max-w-md mx-auto"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold-500/10 text-gold-500 rounded-full text-xs font-bold mb-3">
            <Sparkles className="w-3 h-3" />
            {String(position + 1).padStart(2, "0")} /{" "}
            {String(screens.length).padStart(2, "0")}
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            {screens[position].label}
          </h3>
          <p className="text-slate-500 dark:text-slate-400">
            {screens[position].desc}
          </p>
        </motion.div>

        {/* Platform badges */}
        <div className="mt-16 flex justify-center items-center gap-4">
          {[
            {
              label: "Android",
              icon: (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3.609 1.814L14.12 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.2l2.807 1.626a1 1 0 010 1.734l-2.807 1.626-2.536-2.486 2.536-2.5zM5.864 2.658L16.8 8.99l-2.301 2.301-8.635-8.633z" />
                </svg>
              ),
              color: "text-success-600",
            },
            {
              label: "iOS",
              icon: (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
              ),
              color: "text-slate-800 dark:text-slate-200",
            },
          ].map((p) => (
            <div
              key={p.label}
              className="px-6 py-3 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex items-center gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <span className={p.color}>{p.icon}</span>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  Available for
                </span>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  {p.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
