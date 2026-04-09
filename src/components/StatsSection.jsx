import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { BookOpen, Users, FileText, Award, Sparkles } from 'lucide-react';

function Counter({ from, to, duration = 2 }) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        onUpdate(value) {
          setCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [from, to, duration, inView]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

const stats = [
  {
    icon: <FileText className="w-6 h-6" />,
    value: 50000,
    suffix: '+',
    label: 'Past Questions',
    color: 'text-primary-600',
    bg: 'bg-primary-50',
    delay: 0,
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    value: 200,
    suffix: '+',
    label: 'Past Papers',
    color: 'text-sky-600',
    bg: 'bg-sky-50',
    delay: 0.1,
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: 1000,
    suffix: '+',
    label: 'Active Students',
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    delay: 0.2,
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: 4.8,
    suffix: '/5',
    label: 'Top App Rating',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    delay: 0.3,
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors" id="stats">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-50/30 dark:bg-primary-900/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
              className="relative group "
            >
              <div className="flex flex-col items-center text-center p-6 rounded-3xl transition-all duration-300 hover:bg-slate-50 dark:hover:bg-slate-900 border border-transparent hover:border-slate-100 dark:hover:border-slate-800">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} dark:bg-opacity-10 flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md transition-all duration-300`}
                >
                  {stat.icon}
                </motion.div>
                
                <div className="flex flex-col items-center">
                  <div className={`text-3xl md:text-4xl font-extrabold font-heading mb-2 ${stat.color} flex items-center`}>
                    {stat.value === 4.8 ? (
                      <>4.8</>
                    ) : (
                      <Counter from={0} to={stat.value} duration={2.5} />
                    )}
                    <span className="text-xl ml-0.5">{stat.suffix}</span>
                  </div>
                  <div className="text-sm font-bold tracking-widest uppercase text-slate-400 dark:text-slate-500">
                    {stat.label}
                  </div>
                </div>

                {/* Micro-sparkle decoration */}
                <motion.div
                  animate={{ opacity: [0, 1, 0], scale: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: idx * 0.5 }}
                  className="absolute top-4 right-4 text-gold-400"
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
