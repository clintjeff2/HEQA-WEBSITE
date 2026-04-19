import React from "react";
import { motion } from "framer-motion";

const schools = [
  "University of Buea",
  "University of Bamenda",
  "Polytech Douala",
  "Polytech Yaoundé",
  "IUC Douala",
  "CUIB Buea",
  "NACHO Polytechnic",
  "Saint Jerome Uni",
  "HTTC Kumba",
  "COLTECH Bamenda",
  "LMUI Buea",
];

export default function LogoMarquee() {
  const duplicatedSchools = [...schools, ...schools, ...schools];

  return (
    <div className="bg-slate-50 dark:bg-slate-950 py-12 border-y border-slate-200 dark:border-slate-800 overflow-hidden relative transition-colors">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 mb-8 text-center text-slate-500">
        <p className="text-xs font-bold tracking-[0.2em] uppercase">
          Trusted by students from top institutions
        </p>
      </div>

      <div className="flex select-none">
        <motion.div
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 whitespace-nowrap px-6"
        >
          {duplicatedSchools.map((school, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 group cursor-default"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-200/50 dark:bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary-100/50 group-hover:text-primary-600 transition-colors">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <span className="text-xl font-heading font-bold text-slate-400 dark:text-slate-600 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                {school}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
