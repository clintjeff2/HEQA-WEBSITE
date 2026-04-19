import React from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Brain,
  WifiOff,
  BarChart3,
  Bookmark,
  Globe,
  MessageCircle,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Past Papers Library",
    description:
      "Browse 200+ organized past papers by course, year, and specialty. Find exactly what you need in seconds.",
    gradient: "from-primary-500 to-primary-700",
    bg: "bg-primary-600",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Practice Mode",
    description:
      "Test yourself with timed practice sessions. Get instant feedback, detailed explanations, and track your accuracy.",
    gradient: "from-purple-500 to-purple-700",
    bg: "bg-purple-600",
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: "Offline Study",
    description:
      "Download papers to your device and study anywhere — no internet needed.",
    gradient: "from-emerald-500 to-emerald-700",
    bg: "bg-emerald-600",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics & Progress",
    description:
      "Visualize your strengths, weaknesses, and improvement over time with beautiful charts.",
    gradient: "from-orange-500 to-orange-700",
    bg: "bg-orange-600",
  },
  {
    icon: <Bookmark className="w-6 h-6" />,
    title: "Bookmarks",
    description:
      "Save tricky questions for later review. Build your personal collection of must-study questions.",
    gradient: "from-rose-500 to-rose-700",
    bg: "bg-rose-600",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multi-Language",
    description:
      "Full app experience in both English and French. Switch languages anytime in settings.",
    gradient: "from-blue-500 to-blue-700",
    bg: "bg-blue-600",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "Support Chat",
    description: "Stuck on a question? Chat directly with our support team.",
    gradient: "from-teal-500 to-teal-700",
    bg: "bg-teal-600",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Leaderboard",
    description:
      "Compete with students nationwide. Climb the ranks and stay motivated.",
    gradient: "from-amber-500 to-amber-700",
    bg: "bg-amber-600",
  },
];

export default function Features() {
  return (
    <section
      className="py-28 lg:py-36 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden"
      id="features"
    >
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/40 dark:bg-primary-900/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-400/20 dark:bg-gold-400/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            Everything you need to{" "}
            <span className="relative inline-block">
              <span className="text-gradient">succeed</span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
              >
                <path
                  d="M2 8c40-6 80-6 120-2s60 4 76-2"
                  stroke="#22c55e"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </svg>
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Built specifically for the Cameroonian student — speed, accuracy,
            and accessibility at the core.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="group relative"
            >
              <div className="h-full p-7 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden">
                {/* Hover gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                />

                <div className="relative z-10">
                  <div
                    className={`w-13 h-13 rounded-2xl ${feature.bg} text-white flex items-center justify-center mb-5 shadow-lg group-hover:bg-white/20 group-hover:shadow-none transition-all duration-500`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-white mb-2 transition-colors duration-500">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-white/80 leading-relaxed text-sm transition-colors duration-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
