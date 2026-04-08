import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, ShieldCheck, Download } from 'lucide-react';
import mockupImage from '../assets/Screenshot_20260308_075604_HND Examination Portal.jpg.jpeg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden" id="home">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4">
        <div className="w-[600px] h-[600px] bg-primary-100 rounded-full blur-3xl opacity-60"></div>
      </div>
      <div className="absolute bottom-0 left-0 -z-10 -translate-x-1/3 translate-y-1/3">
        <div className="w-[500px] h-[500px] bg-accent-400 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-sm font-semibold mb-6">
              <ShieldCheck className="w-4 h-4" />
              <span>Trusted by 10,000+ HND Students</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6 text-slate-900">
              Master Your Exams with <span className="text-gradient">Verified</span> Past Questions
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8 leading-relaxed max-w-xl">
              The ultimate app platform for HND students. Study effectively with comprehensive past papers, expert answers, and interactive learning tools designed to help you excel.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="inline-flex justify-center items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full text-base font-medium transition-all shadow-lg hover:shadow-primary-500/25 active:scale-95 group">
                <Download className="w-5 h-5" />
                Download App Now
              </button>
              <button className="inline-flex justify-center items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-full text-base font-medium transition-all shadow-sm active:scale-95 group">
                Explore Features
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" className="w-4 h-4" />)}
                </div>
                <span className="text-sm font-medium text-slate-600">4.9/5 from 2,000+ reviews</span>
              </div>
            </motion.div>

            {/* Department Badges (UI Polish) */}
            <motion.div 
              variants={itemVariants}
              className="mt-12 flex flex-wrap gap-3"
            >
              {['Engineering', 'Accountancy', 'CompSci', 'Business', 'Microbiology'].map((dept) => (
                <span key={dept} className="px-4 py-2 rounded-xl bg-white border border-slate-100 text-xs font-bold text-slate-500 shadow-sm hover:border-primary-200 transition-colors">
                  #{dept}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image/Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative lg:ml-auto w-full max-w-[340px] mx-auto lg:max-w-md"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Phone Mockup Frame */}
            <div className="relative rounded-[2.5rem] border-[8px] border-slate-900 bg-slate-900 shadow-2xl overflow-hidden aspect-[9/19]">
              <img 
                src={mockupImage} 
                alt="HND Examination Portal App Screenshot" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -right-6 top-20 glass-panel p-4 rounded-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-success-500/10 text-success-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium">Accuracy</p>
                <p className="text-sm font-bold text-slate-800">100% Verified</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
