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
    <section className="section-padding bg-slate-50 overflow-hidden" id="testimonials">
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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 group"
            >
              {/* Quote mark */}
              <div className="absolute top-6 right-6 text-primary-100 group-hover:text-primary-200 transition-colors">
                <Quote className="w-8 h-8" />
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    fill="currentColor"
                    className="w-4 h-4 text-gold-400"
                  />
                ))}
                {[...Array(5 - t.rating)].map((_, i) => (
                  <Star
                    key={i + t.rating}
                    className="w-4 h-4 text-slate-200"
                  />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full border-2 border-white shadow-sm object-cover"
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
