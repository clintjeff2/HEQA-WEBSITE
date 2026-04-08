import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import img1 from '../assets/Screenshot_20260316_224355_HND Examination Portal.jpg.jpeg';
import img2 from '../assets/Screenshot_20260312_075722_HND Examination Portal.jpg.jpeg';

export default function AppShowcase() {
  const benefits = [
    "Clean, intuitive mobile interface",
    "Instant access to course materials",
    "Lightweight and battery efficient",
    "Secure and reliable platform"
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden" id="showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Images / Phones */}
          <div className="relative order-2 lg:order-1 flex justify-center items-center h-[600px]">
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-tr from-accent-400/30 to-primary-600/30 rounded-full blur-3xl -z-10"></div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute left-0 md:left-10 w-64 rounded-[2rem] border-[6px] border-white shadow-2xl overflow-hidden aspect-[9/19] z-10"
            >
              <img src={img1} alt="App Interface 1" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 100, rotate: 5 }}
              whileInView={{ opacity: 1, y: 20, rotate: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute right-0 md:right-10 w-64 rounded-[2rem] border-[6px] border-white shadow-2xl overflow-hidden aspect-[9/19] z-20"
            >
              <img src={img2} alt="App Interface 2" className="w-full h-full object-cover" loading="lazy" />
            </motion.div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">App Experience</span>
              <h2 className="mt-2 text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-6">
                Designed for Focus. <br /> Built for <span className="text-gradient">Success.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Experience a clutter-free study environment that prioritizes your learning. Our app is meticulously crafted to ensure you spend less time searching and more time understanding.
              </p>

              <ul className="space-y-4 mb-10">
                {benefits.map((benefit, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center gap-3 text-slate-700 font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-success-500" />
                    {benefit}
                  </motion.li>
                ))}
              </ul>

              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg active:scale-95">
                View Full Gallery
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
