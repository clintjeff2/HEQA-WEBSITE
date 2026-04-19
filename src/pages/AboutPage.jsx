import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  Target,
  Globe,
  Users,
  Sparkles,
  BookOpen,
  Shield,
  Heart,
  ArrowRight,
} from "lucide-react";
import CTABanner from "../components/CTABanner";

import homeImg from "../assets/HEQA NAME SCREEN IMAGES/Premium Homescreen.jpg";
import paperImg from "../assets/HEQA NAME SCREEN IMAGES/Exam Paper list screen lightmode.jpg";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-600 via-primary-700 to-primary-800 dark:from-slate-950 dark:via-primary-950 dark:to-slate-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-200 font-bold tracking-wider uppercase text-sm"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight"
          >
            Built in Cameroon, <br className="hidden md:block" />
            for <span className="text-gold-400">Cameroon</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed"
          >
            HEQA Solutions exists because every Cameroonian student deserves
            quality exam preparation — not blurry photocopies and scattered
            WhatsApp PDFs.
          </motion.p>
        </div>
      </section>

      {/* The Problem We Saw */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm">
                The Problem
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">
                Exam prep in Cameroon was stuck in the past
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  The Higher National Diploma (HND) was introduced in Cameroon
                  in 2002 and reformed in 2018. It's a two-year professional
                  university programme administered nationally by MINESUP.
                  Students across dozens of specialties — Software Engineering,
                  Accounting, Civil Engineering, Marketing, and more — write a{" "}
                  <strong className="text-slate-900 dark:text-white">
                    national exam
                  </strong>{" "}
                  at the end. That single exam is the gateway to certification.
                </p>
                <p>
                  Yet in 2026, there was still{" "}
                  <strong className="text-slate-900 dark:text-white">
                    no centralised digital past-question bank
                  </strong>
                  . Students relied on blurry photocopies, incomplete PDFs
                  circulated on WhatsApp, and word-of-mouth. Engineering exams
                  full of complex formulas were unreadable on phone screens.
                  There were no interactive practice tools, no progress
                  tracking, no structured study experience.
                </p>
                <p>
                  The only existing Cameroon HND app on the Play Store had a 3.0
                  star rating and 18 reviews. Students complained about
                  aggressive paywalls before seeing any content, and incomplete
                  papers.{" "}
                  <strong className="text-slate-900 dark:text-white">
                    Nobody had built a serious product for this market.
                  </strong>
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="phone-frame max-w-[280px] mx-auto shadow-2xl shadow-primary-600/20">
                <img
                  src={homeImg}
                  alt="HEQA Solutions Home Screen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 px-5 py-3">
                <p className="text-xs text-slate-500 dark:text-slate-400 font-semibold">
                  Available on
                </p>
                <p className="text-2xl font-extrabold font-heading text-primary-600">
                  Android & iOS
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Launching May 20, 2026
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative"
            >
              <div className="phone-frame max-w-[280px] mx-auto shadow-2xl shadow-primary-600/20">
                <img
                  src={paperImg}
                  alt="HEQA Solutions Papers List"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm">
                Our Solution
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">
                The first serious exam prep platform for HND students
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  HEQA Solutions is a premium mobile application that gives
                  students access to structured, beautifully rendered past exam
                  questions — filtered by specialty, course, and year — with
                  interactive practice modes, instant MCQ feedback, progress
                  tracking, study streaks, leaderboards, and a learning
                  experience that makes exam prep feel like progress, not
                  punishment.
                </p>
                <p>
                  Every question is verified. Every solution is curated by
                  subject matter experts. We're launching with HND as our core
                  focus, but our platform is built to expand into{" "}
                  <strong className="text-slate-900 dark:text-white">
                    GCE A-Level, GCE O-Level
                  </strong>
                  , and eventually professional certification exams across
                  Cameroon and Africa.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm">
              What Drives Us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
              Our values
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-6 h-6" />,
                title: "Students First",
                desc: 'Every decision we make starts with "does this help a student prepare better?" If the answer is no, we don\'t build it.',
                color: "text-rose-600",
                bg: "bg-rose-50",
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Quality Over Quantity",
                desc: "We'd rather have 50 perfectly verified papers than 500 unverified ones. Every question and solution goes through rigorous review.",
                color: "text-primary-600",
                bg: "bg-primary-50",
              },
              {
                icon: <Target className="w-6 h-6" />,
                title: "Accessibility",
                desc: "Premium costs less than 3 meals a month. Our free tier is genuinely useful. We optimise for mid-range phones and 3G networks.",
                color: "text-emerald-600",
                bg: "bg-emerald-50",
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Local Roots, Global Standards",
                desc: "HEQA is proudly Cameroonian, but our product quality is measured against Duolingo, Quizlet, and Photomath.",
                color: "text-blue-600",
                bg: "bg-blue-50",
              },
              {
                icon: <BookOpen className="w-6 h-6" />,
                title: "Content is King",
                desc: "Every question and solution is carefully verified and structured. We don't do blurry scanned PDFs — our content is clear, complete, and exam-ready.",
                color: "text-purple-600",
                bg: "bg-purple-50",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Earned Celebration",
                desc: "Streaks, leaderboards, and achievements make studying rewarding. But the joy is earned through real effort, never artificial.",
                color: "text-amber-600",
                bg: "bg-amber-50",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-700 transition-all group hover:shadow-xl"
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} dark:bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform`}
                >
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">
              Ready to study smarter?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Download HEQA Solutions today and join thousands of HND students
              who are transforming how they prepare for exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/download"
                className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary-600/25"
              >
                Download the App <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold hover:border-primary-300 transition-all"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
