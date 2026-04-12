import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
  FileText, Brain, WifiOff, BarChart3,
  Bookmark, Globe, MessageCircle, Trophy,
} from 'lucide-react';

const features = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: 'Past Papers Library',
    description: 'Browse 200+ organized past papers by course, year, and specialty. Find exactly what you need in seconds.',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Practice Mode',
    description: 'Test yourself with timed practice sessions. Get instant feedback, detailed explanations, and track your accuracy.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: 'Offline Study',
    description: 'Download papers to your device and study anywhere — no internet needed.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Analytics & Progress',
    description: 'Visualize your strengths, weaknesses, and improvement over time with beautiful charts.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
  },
  {
    icon: <Bookmark className="w-6 h-6" />,
    title: 'Bookmarks',
    description: 'Save tricky questions for later review. Build your personal collection of must-study questions.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Multi-Language',
    description: 'Full app experience in both English and French. Switch languages anytime in settings.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Support Chat',
    description: 'Stuck on a question? Chat directly with our support team.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Leaderboard',
    description: 'Compete with students nationwide. Climb the ranks and stay motivated.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
  },
];

const FeatureCard = ({ feature, idx }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) / rect.width);
    y.set((e.clientY - rect.top - rect.height / 2) / rect.height);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="h-full"
    >
      <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 h-full hover:border-primary-200 dark:hover:border-primary-700 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-primary-600/5">
        <div className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} dark:bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm`}>
          {feature.icon}
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
          {feature.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
};

export default function Features() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-950 transition-colors" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm">Features</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            Everything you need to <span className="text-gradient">succeed</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            HEQA Solutions is built specifically for the Cameroonian student,
            focusing on speed, accuracy, and accessibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
