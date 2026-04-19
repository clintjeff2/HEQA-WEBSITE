import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    author: "Ebenezer Atem",
    role: "HND Accountancy Student",
    quote:
      "HEQA Solutions changed the way I prepare for exams. The offline mode is a lifesaver when I'm in areas with no network. I passed my Accountancy papers with ease!",
    initials: "EA",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    author: "Christelle Ngwana",
    role: "HND Computer Science",
    quote:
      "The detailed solutions are what makes HEQA different. They don't just give you the answer; they explain WHY. It's like having a private tutor in my pocket.",
    initials: "CN",
    gradient: "from-purple-500 to-purple-700",
  },
  {
    author: "Divine Tiku",
    role: "HND Engineering Student",
    quote:
      "Finally, an app built for Cameroonian students! The Mobile Money payment is so easy, and the interface is super smooth. Highly recommended for every HND student.",
    initials: "DT",
    gradient: "from-gold-400 to-gold-600",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-28 lg:py-36 bg-white dark:bg-slate-950 transition-colors relative overflow-hidden"
      id="testimonials"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-primary-100/30 dark:bg-primary-900/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-gold-400/15 dark:bg-gold-400/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-500 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            <Star className="w-3.5 h-3.5 fill-current" />
            Student Stories
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            Trusted by{" "}
            <span className="text-gradient">thousands of students</span>
          </h2>
          <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
            Real students, real results. Hear from those already acing their
            exams with HEQA.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-500 hover:shadow-2xl relative overflow-hidden">
                {/* Quote mark */}
                <div className="absolute top-6 right-6 text-slate-100 dark:text-slate-800 group-hover:text-primary-100 dark:group-hover:text-primary-900/30 transition-colors">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-gold-500 text-gold-500"
                    />
                  ))}
                </div>

                <p className="text-slate-700 dark:text-slate-300 italic leading-relaxed mb-8 relative z-10">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto relative z-10">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white text-sm">
                      {t.author}
                    </h4>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${t.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
