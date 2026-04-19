import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-slate-950 transition-colors">
      <div className="max-w-lg mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <h1 className="text-[8rem] md:text-[10rem] font-heading font-black leading-none bg-gradient-to-br from-primary-600 to-primary-400 bg-clip-text text-transparent select-none">
            404
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-3">
            Page not found
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg shadow-primary-600/25"
            >
              <Home className="w-5 h-5" /> Back to Home
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold hover:border-primary-300 transition-all"
            >
              <ArrowLeft className="w-5 h-5" /> Go Back
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
