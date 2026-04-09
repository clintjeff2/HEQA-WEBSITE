import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, FileText, Award } from 'lucide-react';

function AnimatedCounter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const stepTime = 16;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: <FileText className="w-6 h-6" />,
    value: 50000,
    suffix: '+',
    label: 'Past Questions',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    value: 200,
    suffix: '+',
    label: 'Past Papers',
    color: 'text-accent-500',
    bg: 'bg-sky-50',
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: 1000,
    suffix: '+',
    label: 'Active Students',
    color: 'text-success-600',
    bg: 'bg-emerald-50',
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: 4.8,
    suffix: '★',
    label: 'App Rating',
    color: 'text-gold-500',
    bg: 'bg-amber-50',
  },
];

export default function SocialProofBar() {
  return (
    <section className="py-12 bg-white relative z-10" id="social-proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-slate-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
              >
                {stat.icon}
              </div>
              <div>
                <div className={`text-2xl md:text-3xl font-extrabold font-heading ${stat.color}`}>
                  {stat.value === 4.8 ? (
                    <span>4.8<span className="text-gold-400 ml-0.5">★</span></span>
                  ) : (
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  )}
                </div>
                <div className="text-xs md:text-sm font-medium text-slate-500 mt-0.5">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
