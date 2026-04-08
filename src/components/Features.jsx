import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Clock, Shield, Trophy, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-primary-600" />,
    title: 'Extensive Past Questions',
    description: 'Access years of verified HND past questions across all departments and courses.',
  },
  {
    icon: <Shield className="w-6 h-6 text-primary-600" />,
    title: 'Expert Verified Answers',
    description: 'Every answer is thoroughly vetted by top lecturers and subject matter experts.',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary-600" />,
    title: 'Offline Study Mode',
    description: 'Download questions and answers to study anywhere, anytime, without internet.',
  },
  {
    icon: <Clock className="w-6 h-6 text-primary-600" />,
    title: 'Exam Time Management',
    description: 'Practice with timed mock exams to improve your speed and accuracy.',
  },
  {
    icon: <Brain className="w-6 h-6 text-primary-600" />,
    title: 'Smart Analytics',
    description: 'Track your progress and identify weak areas that need more attention.',
  },
  {
    icon: <Trophy className="w-6 h-6 text-primary-600" />,
    title: 'High Success Rate',
    description: 'Join thousands of students who have scored distinctions using our platform.',
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Everything you need to secure that <span className="text-gradient">Distinction</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We provide a comprehensive, reliable, and user-friendly platform designed specifically to help HND students crush their exams with confidence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
