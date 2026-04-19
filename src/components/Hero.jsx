import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Star,
  Download,
  Play,
  Sparkles,
  Users,
  BookOpen,
  CheckCircle,
  Rocket,
} from "lucide-react";
import { Link } from "react-router-dom";
import MagneticWrapper from "./MagneticWrapper";
import mockupImage1 from "../assets/HEQA NAME SCREEN IMAGES/Premium Homescreen.jpg";
import mockupImage2 from "../assets/HEQA NAME SCREEN IMAGES/Practice By Paper Screen darkmode Best.jpg";
import africanStudent1 from "../assets/africa student 1.avif";
import africanStudent2 from "../assets/africa student 2.jpg";
import africanStudent3 from "../assets/africa student 3.jpeg";
import africanStudent4 from "../assets/africa student 4.avif";
import africanStudent5 from "../assets/africa student 5.avif";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax transform for background elements and phones
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yPhone1 = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yPhone2 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

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
      ref={containerRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      id="home"
    >
      {/* Background */}
      <div className="absolute inset-0 hero-gradient animated-gradient dark:bg-slate-950 -z-20" />
      <div className="absolute inset-0 bg-primary-900/10 dark:bg-black/40 -z-15" />

      {/* Parallax Decorative elements */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
      >
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-white/5 rounded-full" />
        <div className="absolute -bottom-48 -left-24 w-[600px] h-[600px] bg-white/5 rounded-full" />

        {/* Animated Custom SVG Blob */}
        <motion.svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-1/4 left-1/4 w-96 h-96 opacity-10"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <path
            fill="#FFFFFF"
            d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,95.6,-3C94.5,12.1,86.1,26.4,75.9,38.2C65.7,50,53.7,59.3,40.3,66.1C26.9,72.9,12,77.2,-3.1,79C-18.1,80.7,-33.2,79.9,-46.1,72.9C-59,65.8,-69.6,52.5,-75.7,37.8C-81.8,23.1,-83.4,7.1,-80.6,-8.1C-77.8,-23.4,-70.6,-38,-60.1,-50.2C-49.6,-62.4,-35.8,-72.2,-21.3,-76.4C-6.8,-80.6,8.4,-79.1,22.8,-75.4C37.2,-71.7,50.7,-63.8,44.7,-76.4Z"
            transform="translate(100 100) scale(1.1)"
          />
        </motion.svg>

        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float" />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white/15 rounded-full animate-float-delayed" />
        <div className="absolute text-white/5 top-1/2 right-1/4 w-12 h-12 rotate-45 animate-pulse-ring">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            ></path>
          </svg>
        </div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white/10 rounded-full animate-float" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </motion.div>

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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/20 backdrop-blur-sm border border-gold-400/30 text-gold-400 text-sm font-bold mb-8 cursor-default"
            >
              <Rocket className="w-4 h-4" />
              <span>Launching May 20, 2026 — Join the Waitlist!</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-heading font-extrabold leading-[1.1] mb-6 text-white"
            >
              Ace Your Exams with{" "}
              <span className="text-gold-400 relative inline-block">
                50,000+
                <motion.span
                  className="absolute -bottom-2 left-0 w-full h-1 bg-gold-400 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>{" "}
              Past Questions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-blue-100/80 mb-10 leading-relaxed max-w-xl"
            >
              The ultimate exam prep app for Cameroon students.{" "}
              <span className="text-white font-medium">HND</span>,{" "}
              <span className="text-white font-medium">GCE A-Level</span>,{" "}
              <span className="text-white font-medium">GCE O-Level</span> — all
              past papers, solutions, and practice in your pocket.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <MagneticWrapper strength={0.4}>
                <Link to="/waitlist">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex justify-center items-center gap-2.5 bg-gold-500 hover:bg-gold-600 text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-xl shadow-gold-500/20 group h-full"
                  >
                    <Rocket className="w-5 h-5" />
                    Join the Waiting List
                  </motion.button>
                </Link>
              </MagneticWrapper>

              <MagneticWrapper strength={0.4}>
                <Link to="/features">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex justify-center items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-8 py-4 rounded-full text-base font-semibold transition-all backdrop-blur-sm group h-full"
                  >
                    Explore Features
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </MagneticWrapper>
            </div>

            {/* Micro-proof */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2.5">
                  {[
                    africanStudent1,
                    africanStudent2,
                    africanStudent3,
                    africanStudent4,
                    africanStudent5,
                  ].map((src, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, scale: 1.1, zIndex: 10 }}
                      className="w-9 h-9 rounded-full border-2 border-primary-800 bg-primary-300 flex items-center justify-center overflow-hidden relative cursor-pointer"
                    >
                      <img
                        src={src}
                        alt="Student"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
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
                <div className="flex items-center gap-1.5 group cursor-default">
                  <Users className="w-4 h-4 text-blue-300 group-hover:text-blue-100 transition-colors" />
                  <span>1,000+ students</span>
                </div>
                <div className="flex items-center gap-1.5 group cursor-default">
                  <CheckCircle className="w-4 h-4 text-success-400 group-hover:text-success-300 transition-colors" />
                  <span>Works offline</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Phones - Enhanced with Parallax */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-[520px] mx-auto h-[580px] md:h-[680px] perspective-[1000px] transform-style-3d"
          >
            {/* Glow behind phones */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[100%] bg-white/10 rounded-full blur-[80px]" />

            {/* Phone 1 — Left, tilted */}
            <motion.div
              style={{ y: yPhone1 }}
              animate={{ rotate: [-6, -4, -6] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute left-0 top-8 w-[230px] md:w-[260px] z-20"
            >
              <div className="phone-frame shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={mockupImage1}
                  alt="HEQA Solutions — Exam Papers Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Phone 2 — Right, tilted opposite */}
            <motion.div
              style={{ y: yPhone2 }}
              animate={{ rotate: [6, 4, 6] }}
              transition={{
                repeat: Infinity,
                duration: 7,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute right-0 top-20 w-[230px] md:w-[260px] z-10"
            >
              <div className="phone-frame shadow-[0_25px_60px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-[1.02]">
                <img
                  src={mockupImage2}
                  alt="HEQA Solutions — Practice Mode Screen"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Floating badge — Verified */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4,
                ease: "easeInOut",
                delay: 0.8,
              }}
              className="absolute -right-4 md:right-0 top-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3 rounded-2xl shadow-xl shadow-black/10 flex items-center gap-3 z-30 border border-white dark:border-slate-800"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-success-400 opacity-20"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <CheckCircle className="w-5 h-5 text-success-600 relative z-10" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                  Accuracy
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-white">
                  100% Verified
                </p>
              </div>
            </motion.div>

            {/* Floating badge — Questions count */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 4.5,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute -left-4 md:left-0 bottom-16 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl p-3 rounded-2xl shadow-xl shadow-black/10 flex items-center gap-3 z-30 border border-white dark:border-slate-800"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center relative overflow-hidden">
                <BookOpen className="w-5 h-5 text-primary-600 relative z-10" />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 font-semibold uppercase tracking-wider">
                  Library
                </p>
                <p className="text-sm font-bold text-slate-800 dark:text-white">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                  >
                    50,000+
                  </motion.span>{" "}
                  Questions
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none translate-y-1">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 48L48 42.7C96 37 192 27 288 32C384 37 480 59 576 64C672 69 768 59 864 48C960 37 1056 27 1152 26.7C1248 27 1344 37 1392 42.7L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V48Z"
            fill="currentColor"
            className="text-slate-50 dark:text-slate-950"
          />
        </svg>
      </div>
    </section>
  );
}
