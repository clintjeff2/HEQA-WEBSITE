import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";
import { BookOpen, Users, FileText, Award } from "lucide-react";

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
    icon: <FileText className="w-7 h-7" />,
    value: 50000,
    suffix: "+",
    label: "Past Questions",
    gradient: "from-primary-500 to-primary-700",
    iconBg: "bg-primary-500",
    delay: 0,
  },
  {
    icon: <BookOpen className="w-7 h-7" />,
    value: 200,
    suffix: "+",
    label: "Past Papers",
    gradient: "from-sky-400 to-accent-600",
    iconBg: "bg-sky-500",
    delay: 0.1,
  },
  {
    icon: <Users className="w-7 h-7" />,
    value: 1000,
    suffix: "+",
    label: "Active Students",
    gradient: "from-emerald-400 to-success-600",
    iconBg: "bg-emerald-500",
    delay: 0.2,
  },
  {
    icon: <Award className="w-7 h-7" />,
    value: 4.8,
    suffix: "/5",
    label: "Top App Rating",
    gradient: "from-gold-400 to-gold-600",
    iconBg: "bg-gold-500",
    delay: 0.3,
  },
];

export default function StatsSection() {
  return (
    <section
      className="py-24 bg-white dark:bg-slate-950 relative overflow-hidden transition-colors"
      id="stats"
    >
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #1e293b 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: stat.delay }}
            >
              <div className="relative group p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 border border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 text-center overflow-hidden">
                {/* Gradient orb behind */}
                <div
                  className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${stat.gradient} opacity-10 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
                />

                <div
                  className={`w-16 h-16 rounded-2xl ${stat.iconBg} text-white flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>

                <div className="text-4xl md:text-5xl font-extrabold font-heading text-slate-900 dark:text-white mb-2 tabular-nums">
                  {stat.value === 4.8 ? (
                    <>4.8</>
                  ) : (
                    <Counter from={0} to={stat.value} duration={2.5} />
                  )}
                  <span className="text-2xl text-slate-400 dark:text-slate-500 ml-0.5">
                    {stat.suffix}
                  </span>
                </div>

                <div className="text-sm font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
                  {stat.label}
                </div>

                {/* Bottom accent line */}
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 w-0 group-hover:w-2/3 bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
