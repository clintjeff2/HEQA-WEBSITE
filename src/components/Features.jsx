import React from 'react';
import { motion } from 'framer-motion';
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
    border: 'group-hover:border-primary-200',
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Practice Mode',
    description: 'Test yourself with timed practice sessions. Get instant feedback, detailed explanations, and track your accuracy.',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'group-hover:border-purple-200',
  },
  {
    icon: <WifiOff className="w-6 h-6" />,
    title: 'Offline Study',
    description: 'Download papers to your device and study anywhere — no internet needed. Perfect for areas with poor connectivity.',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'group-hover:border-emerald-200',
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: 'Analytics & Progress',
    description: 'Visualize your strengths, weaknesses, and improvement over time with beautiful charts and insights.',
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    border: 'group-hover:border-orange-200',
  },
  {
    icon: <Bookmark className="w-6 h-6" />,
    title: 'Bookmarks',
    description: 'Save tricky questions for later review. Build your personal collection of must-study questions.',
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'group-hover:border-rose-200',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Multi-Language',
    description: 'Full app experience in both English and French. Switch languages anytime in settings.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'group-hover:border-blue-200',
  },
  {
    icon: <MessageCircle className="w-6 h-6" />,
    title: 'Support Chat',
    description: 'Stuck on a question? Chat directly with our support team. We respond fast because we care.',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    border: 'group-hover:border-teal-200',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Leaderboard',
    description: 'Compete with students nationwide. Climb the ranks, earn badges, and stay motivated to study harder.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'group-hover:border-amber-200',
  },
];

export default function Features() {
  return (
    <section className="section-padding bg-white" id="features">
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
            Powerful Features
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Everything you need to{' '}
            <span className="text-gradient">ace your exams</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            A comprehensive, reliable, and beautiful platform designed
            specifically to help HND, GCE, and O-Level students crush their
            exams with confidence.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`group p-7 rounded-2xl bg-white border border-slate-100 ${feature.border} hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 cursor-default`}
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.bg} ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
