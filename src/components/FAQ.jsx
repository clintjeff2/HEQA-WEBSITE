import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, PhoneCall, Mail, MessageCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Is HEQA Solutions free to use?',
    answer: "Yes! HEQA has a generous free plan that gives you access to the last 2 years of past questions with basic answers. Premium unlocks offline mode, detailed solutions, analytics, and an ad-free experience — starting at just 2,000 FCFA/month.",
  },
  {
    question: 'Is the app available on both Android and iOS?',
    answer: "HEQA Solutions is currently available on Android via Google Play Store. Our iOS version is in final development and will be launching very soon. Stay tuned!",
  },
  {
    question: 'Do I need internet to study?',
    answer: "With the free plan, yes — you need an internet connection. But with Premium, you can download all your papers and study 100% offline. Perfect for areas with poor connectivity or during power cuts.",
  },
  {
    question: 'How accurate are the answers provided?',
    answer: "Every solution in HEQA is vetted by accredited HND lecturers and subject matter experts. We take accuracy extremely seriously — our platform maintains a 100% verification rate on all published solutions.",
  },
  {
    question: 'Which exams does HEQA cover?',
    answer: "HEQA currently covers HND past questions across all departments (Engineering, Accountancy, Computer Science, Business, and more). We're expanding to include GCE Advanced Level and GCE Ordinary Level past papers.",
  },
  {
    question: 'How do I pay for Premium?',
    answer: "We accept MTN Mobile Money and Orange Mobile Money — the most convenient payment methods in Cameroon. You can subscribe monthly (2,000 FCFA) or yearly (15,000 FCFA — save 37%). Payment is processed securely within the app.",
  },
  {
    question: 'Can my school get bulk Premium access?',
    answer: "Absolutely! We offer institutional plans for schools, polytechnics, and coaching centers with bulk discounts, admin dashboards, and student analytics. Contact us at partnerships@heqasolutions.com to discuss your needs.",
  },
  {
    question: 'Is my data safe with HEQA?',
    answer: "Yes. We take your privacy seriously. Your study data is encrypted and stored securely using industry-standard infrastructure. We never sell your data to third parties. Read our full Privacy Policy for details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section className="section-padding bg-white relative overflow-hidden" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: Header + Contact */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">
                FAQ
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900 mb-6 leading-tight">
                Got questions?{' '}
                <span className="text-gradient">We've got answers.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Can't find what you're looking for? Our support team is always ready to help.
              </p>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: <PhoneCall className="w-5 h-5 text-primary-600" />,
                  label: 'WhatsApp',
                  value: '+237 6XX XXX XXX',
                },
                {
                  icon: <Mail className="w-5 h-5 text-primary-600" />,
                  label: 'Email',
                  value: 'support@heqasolutions.com',
                },
                {
                  icon: <MessageCircle className="w-5 h-5 text-primary-600" />,
                  label: 'In-App Chat',
                  value: 'Available 24/7',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary-200 hover:shadow-md transition-all"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {item.label}
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Accordion */}
          <div className="lg:col-span-3 space-y-3">
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === idx
                    ? 'bg-white border-primary-100 shadow-lg shadow-primary-500/5'
                    : 'bg-white border-slate-100 hover:border-slate-200'
                }`}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === idx ? -1 : idx)
                  }
                  className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                >
                  <span className="font-bold text-slate-900 text-sm md:text-base leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                      openIndex === idx
                        ? 'rotate-180 text-primary-600'
                        : 'text-slate-400'
                    }`}
                  />
                </button>

                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-slate-50">
                      <p className="text-slate-600 leading-relaxed text-sm pt-4">
                        {faq.answer}
                      </p>
                    </div>
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
