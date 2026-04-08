import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageSquare, PhoneCall, Mail } from 'lucide-react';

const faqs = [
  {
    question: "Is the app available on both Android and iOS?",
    answer: "Yes! The HND Examination Portal is currently optimized for Android devices. The iOS version is currently in final beta and will be launching soon."
  },
  {
    question: "Do I need an internet connection to study?",
    answer: "Only for the initial download of materials. Once you've downloaded your department's past questions and answers, you can study 100% offline."
  },
  {
    question: "How reliable are the answers provided?",
    answer: "Every solution in our platform is vetted by a panel of accredited HND lecturers and subject matter experts to ensure 100% accuracy and clarity."
  },
  {
    question: "Can I upgrade my plan at any time?",
    answer: "Absolutely. You can upgrade from Basic to Pro directly within the app settings. All your progress will be preserved."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Side: Text and Contact */}
          <div>
            <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Have Questions?</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-8 leading-tight">
              We're Here to <span className="text-gradient">Help You</span> Succeed
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              Can't find what you're looking for? Reach out to our support team and we'll get back to you faster than you can solve a math problem.
            </p>

            <div className="space-y-6">
              {[
                { icon: <PhoneCall className="w-5 h-5 text-primary-600" />, label: 'Call Support', value: '+234 800 123 4567' },
                { icon: <Mail className="w-5 h-5 text-primary-600" />, label: 'Email Us', value: 'support@hekasolutions.com' },
                { icon: <MessageSquare className="w-5 h-5 text-primary-600" />, label: 'Live Chat', value: 'Available 24/7' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-white shadow-sm border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-sm font-bold text-slate-800">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === idx ? 'bg-white border-primary-100 shadow-xl shadow-primary-500/5' : 'bg-white/50 border-slate-100 hover:bg-white'
                }`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-slate-900 leading-snug">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-primary-600' : ''}`} />
                </button>
                
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="overflow-hidden border-t border-slate-50"
                  >
                    <p className="p-6 text-slate-600 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
