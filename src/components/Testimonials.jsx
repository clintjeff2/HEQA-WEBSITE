import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    author: 'Ebenezer Atem',
    role: 'HND Accountancy Student',
    quote: "HEQA Solutions changed the way I prepare for exams. The offline mode is a lifesaver when I'm in areas with no network. I passed my Accountancy papers with ease!",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
  },
  {
    author: 'Christelle Ngwana',
    role: 'HND Computer Science',
    quote: "The detailed solutions are what makes HEQA different. They don't just give you the answer; they explain WHY. It's like having a private tutor in my pocket.",
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    author: 'Divine Tiku',
    role: 'HND Engineering Student',
    quote: "Finally, an app built for Cameroonian students! The Mobile Money payment is so easy, and the interface is super smooth. Highly recommended for every HND student.",
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-slate-50 dark:bg-slate-900 transition-colors relative overflow-hidden" id="testimonials">
      {/* Background SVG wave decoration */}
      <div className="absolute top-0 left-0 right-0 pointer-events-none -translate-y-1">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0 0v30c120 20 240 30 360 25s240-25 360-30 240 5 360 15 240 10 360 0V0H0z" fill="currentColor" className="text-white dark:text-slate-950"/>
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
          <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm">Success Stories</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white">
            Trusted by <span className="text-gradient">thousands of students</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative h-full"
            >
              <div className="h-full p-8 rounded-3xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-primary-100 dark:group-hover:border-primary-900/30">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i + idx * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
                    </motion.div>
                  ))}
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 italic mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div className="relative">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-100 dark:ring-slate-800 group-hover:ring-primary-100 transition-all"
                    />
                    <div className="absolute inset-0 rounded-full border border-primary-500/0 group-hover:border-primary-500/50 transition-all" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      {testimonial.author}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-500 uppercase tracking-widest font-medium">
                      {testimonial.role}
                    </p>
                  </div>
                </div>

                {/* Subtle glow on hover */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary-50/50 dark:from-primary-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-3xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
