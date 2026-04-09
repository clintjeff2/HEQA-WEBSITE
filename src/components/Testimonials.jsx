import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Njoh Emmanuel',
    school: 'Polytechnic Bamenda — Software Engineering',
    text: "HEQA completely changed how I prepare for exams. I went from failing to scoring a distinction in Discrete Mathematics. The step-by-step solutions are incredible.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=33',
  },
  {
    name: 'Aisha Bello',
    school: 'Polytechnic Douala — Accountancy',
    text: "I used to spend hours hunting for past questions on WhatsApp groups. Now I just open HEQA and everything is there — organized by year and course. Best study tool ever!",
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=47',
  },
  {
    name: 'Fon Kevin',
    school: 'NACHO Polytechnic — Computer Science',
    text: "The offline mode is a lifesaver. I study on the bus, during power cuts, everywhere. And the practice mode with timers really helped me manage my exam time better.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=12',
  },
  {
    name: 'Marie-Claire Tchuente',
    school: 'IUC Douala — Business Management',
    text: "J'adore cette application! Les réponses sont bien expliquées et le mode pratique m'aide à rester concentrée. Je la recommande à tous les étudiants!",
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=44',
  },
  {
    name: 'Taniform Blaise',
    school: 'Polytechnic Buea — Civil Engineering',
    text: "What I love most is how the analytics show exactly where I'm weak. I focused on those areas and my grades improved by 2 full points. HEQA is essential.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/100?img=52',
  },
  {
    name: 'Ngwenya Grace',
    school: 'COLTECH Bamenda — Microbiology',
    text: "Finally an app made for Cameroon students! The past questions are accurate and verified. I trust this more than the photocopied papers we used to buy.",
    rating: 4,
    avatar: 'https://i.pravatar.cc/100?img=25',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50 overflow-hidden relative" id="testimonials">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-32 opacity-[0.03]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0 0v46.3c47.8 22.3 95.5 34.3 143.3 36 95.5 3.3 191-30 286.5-30s191 33.3 286.5 30c47.8-1.7 95.5-13.7 143.3-36 47.8-22.3 95.5-44.7 143.3-56.7L1200 0H0z" fill="currentColor" className="text-primary-600" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm flex items-center justify-center gap-2">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold-500"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            Student Stories
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Loved by students{' '}
            <span className="text-gradient">across Cameroon</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Hear from real students who transformed their exam performance with HEQA Solutions.
          </p>
        </motion.div>

        {/* Testimonial Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-2xl hover:border-primary-100 transition-all duration-300 group cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-50/0 to-primary-50/0 group-hover:from-primary-50/50 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-primary-100 group-hover:text-primary-200 transition-colors">
                <Quote className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4 relative">
                {[...Array(t.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 + i * 0.05, type: 'spring' }}
                  >
                    <Star
                      fill="currentColor"
                      className="w-4 h-4 text-gold-400"
                    />
                  </motion.div>
                ))}
                {[...Array(5 - t.rating)].map((_, i) => (
                  <Star
                    key={i + t.rating}
                    className="w-4 h-4 text-slate-200"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 relative">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50 relative">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full border-2 border-white shadow-md object-cover ring-2 ring-primary-100"
                />
                <div>
                  <p className="font-bold text-sm text-slate-900">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-400 leading-tight">
                    {t.school}
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
