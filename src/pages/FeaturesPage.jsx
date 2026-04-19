import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileText,
  Brain,
  WifiOff,
  BarChart3,
  Bookmark,
  Globe,
  MessageCircle,
  Trophy,
  Zap,
  Shield,
  Clock,
  Search,
  Layers,
  Smartphone,
  BookOpen,
  Download,
  Star,
  Users,
  GraduationCap,
  Calculator,
  Target,
  Flame,
} from "lucide-react";
import CTABanner from "../components/CTABanner";

import practiceImg from "../assets/HEQA NAME SCREEN IMAGES/Practice By Paper Screen darkmode Best.jpg";
import analyticsImg from "../assets/HEQA NAME SCREEN IMAGES/My analytics screen darkmode.jpg";
import leaderboardImg from "../assets/HEQA NAME SCREEN IMAGES/Leaderboard Screen lightmode.jpg";
import papersImg from "../assets/HEQA NAME SCREEN IMAGES/Exam Paper list screen lightmode.jpg";
import questionImg from "../assets/HEQA NAME SCREEN IMAGES/Question Detail Screen light mode.jpg";
import sessionImg from "../assets/HEQA NAME SCREEN IMAGES/Session Review Screen darkmode Best.jpg";

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Massive Past Papers Library",
    description:
      "Access a growing collection of structured HND past exam papers across every specialty — Software Engineering, Accounting, Computer Engineering, Civil Engineering, Marketing, and more. Organised by course, year, and semester.",
    color: "text-primary-600",
    bg: "bg-primary-50",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Interactive Practice Sessions",
    description:
      "Go beyond reading — practice with timed and untimed MCQ sessions. Get instant feedback on every answer. Review your completed sessions with detailed breakdowns of what you got right and wrong.",
    color: "text-purple-600",
    bg: "bg-purple-50",
    image: practiceImg,
  },
  {
    icon: <Calculator className="w-6 h-6" />,
    title: "Perfect Math & Equation Display",
    description:
      "Engineering and science exams are full of complex formulas, integrals, matrices, and Greek symbols. HEQA displays every equation beautifully and clearly — no blurry scans, no unreadable notation. Exactly as it should appear in a real exam paper.",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    image: questionImg,
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Personal Analytics Dashboard",
    description:
      "Track your performance over time with beautiful charts. See your accuracy rate, questions attempted, scores by subject, and identify your weak areas so you can focus your study time where it matters most.",
    color: "text-orange-600",
    bg: "bg-orange-50",
    image: analyticsImg,
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "National Leaderboard",
    description:
      "Compete with HND students across Cameroon. Your leaderboard score factors in questions attempted, accuracy, and papers studied. Climb the ranks and stay motivated all semester.",
    color: "text-amber-600",
    bg: "bg-amber-50",
    image: leaderboardImg,
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Study Streaks",
    description:
      "Build daily study habits with streaks. Study any day and your streak counter grows. Miss a day and it resets — simple but powerful motivation. Your longest streak is tracked as a personal best.",
    color: "text-red-600",
    bg: "bg-red-50",
  },
  {
    icon: <Bookmark className="w-6 h-6" />,
    title: "Bookmark Tough Questions",
    description:
      "Encountered a challenging question? Bookmark it instantly. Build your personal collection of must-review questions and revisit them anytime from your bookmarks tab.",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Practice by Topic, Paper, or Year",
    description:
      "Multiple practice modes to fit your revision style. Filter by a specific paper, study by year, or search by topic keyword. HEQA adapts to how you want to study.",
    color: "text-teal-600",
    bg: "bg-teal-50",
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: "Offline Study Mode",
    description:
      "Download papers directly to your device. Study on the bus, during power cuts, or in areas with poor network — no internet required. Premium users get unlimited offline downloads.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Structured Paper Viewing",
    description:
      "Papers are displayed with their full structure — sections, parts, and question numbers — exactly as they appear in the real exam. Navigate intuitively through each section.",
    color: "text-sky-600",
    bg: "bg-sky-50",
    image: papersImg,
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Session History & Review",
    description:
      "Every practice session is saved with your score, time spent, and detailed answers. Review any past session to see what you got wrong and learn from your mistakes.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
    image: sessionImg,
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Bilingual Support (EN / FR)",
    description:
      "The app interface supports both English and French. Switch languages anytime in settings — perfect for students in both anglophone and francophone regions of Cameroon.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: "In-App Support Chat",
    description:
      "Stuck on something? Need help with your account? Chat directly with our support team from within the app. We respond quickly because your exam prep waits for no one.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Secure & Private",
    description:
      "Your study data is encrypted and stored using enterprise-grade Firebase infrastructure. We never sell your data. Your academic progress is yours alone.",
    color: "text-slate-600",
    bg: "bg-slate-100",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Built for Your Device",
    description:
      "Optimised for mid-range Android devices (Samsung Galaxy A-series, Tecno, Infinix) on 3G/4G networks. Smooth performance, fast loading, minimal data usage. iOS version coming soon.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
];

function FeatureCard({ feature, idx }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["6deg", "-6deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-6deg", "6deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const hasImage = !!feature.image;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={hasImage ? "md:col-span-2 h-full" : "h-full"}
    >
      <div
        className={`rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 h-full hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-primary-600/5 overflow-hidden ${hasImage ? "grid md:grid-cols-2" : ""}`}
      >
        <div className="p-8">
          <div
            className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} dark:bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}
          >
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            {feature.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            {feature.description}
          </p>
        </div>
        {hasImage && (
          <div className="relative h-64 md:h-full overflow-hidden bg-slate-100 dark:bg-slate-800">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function FeaturesPage() {
  return (
    <>
      {/* Hero Section */}
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
            Everything Inside HEQA
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight"
          >
            Features built for{" "}
            <span className="text-gold-400">exam success</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-blue-100/80 max-w-2xl mx-auto leading-relaxed"
          >
            Every feature in HEQA Solutions exists for one reason — to help you
            prepare better, study smarter, and walk into your HND exam with
            confidence.
          </motion.p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Expanding Soon */}
      <section className="py-20 bg-white dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-sm font-bold mb-6">
              <Zap className="w-4 h-4" />
              Coming Soon
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-slate-900 dark:text-white mb-4">
              Expanding beyond HND
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
              We're launching with HND past questions as our core focus. But
              HEQA Solutions is built to grow. Soon, we'll cover{" "}
              <strong className="text-slate-900 dark:text-white">
                GCE Advanced Level
              </strong>
              ,{" "}
              <strong className="text-slate-900 dark:text-white">
                GCE Ordinary Level
              </strong>
              , and eventually professional certification exams across Cameroon
              and Africa.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "HND (All Specialties)",
                "GCE A-Level (Coming)",
                "GCE O-Level (Coming)",
                "Professional Exams (Planned)",
              ].map((exam, i) => (
                <span
                  key={i}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold ${i === 0 ? "bg-primary-600 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}`}
                >
                  {exam}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
