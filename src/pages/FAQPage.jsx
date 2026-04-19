import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown, MessageCircle, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "237690055252";

const faqCategories = [
  {
    name: "Getting Started",
    faqs: [
      {
        question: "What is HEQA Solutions?",
        answer:
          "HEQA Solutions is Cameroon's premier exam preparation mobile app built specifically for Higher National Diploma (HND) students. It gives you access to structured past exam questions across all specialties — with interactive practice modes, instant feedback, progress tracking, and a study experience designed to make you exam-ready.",
      },
      {
        question: "Is HEQA Solutions free to use?",
        answer:
          "Yes! HEQA has a generous free tier that gives you access to past papers with ad-supported viewing. You can open papers, practice questions, see your results, and use the leaderboard — all for free. Premium unlocks the full experience: offline downloads, ad-free studying, detailed analytics, and unlimited access to all content. Premium starts at just 2,000 FCFA/month.",
      },
      {
        question: "Which devices does the app support?",
        answer:
          "HEQA Solutions is currently available for Android (downloadable from the Google Play Store). The app is optimised to run smoothly on popular mid-range Android devices like Samsung Galaxy A-series, Tecno, Infinix, and Itel phones — even on 3G networks. An iOS version for iPhone is planned and coming soon.",
      },
      {
        question: "How do I create an account?",
        answer:
          "Download the app, open it, and tap 'Create Account'. You'll enter your name, email, password, and select your HND specialty (e.g., Software Engineering, Accounting, Civil Engineering). Once registered, the app personalises your experience to show courses and papers relevant to your specialty.",
      },
    ],
  },
  {
    name: "Content & Exams",
    faqs: [
      {
        question: "Which exams and specialties does HEQA cover?",
        answer:
          "We're launching with comprehensive coverage of HND past questions across all major specialties: Software Engineering, Computer Engineering, Accounting, Marketing, Civil Engineering, Electrical Engineering, Business Administration, Banking & Finance, and more. We're continuously adding new specialties and papers. GCE Advanced Level and GCE Ordinary Level coverage is planned for future expansion.",
      },
      {
        question: "How many past papers and questions are available?",
        answer:
          "Our library is constantly growing. We have structured past papers spanning multiple years across dozens of courses. Each paper contains properly formatted questions — not scanned PDFs — with clear equations, tables, and images. Check the app for the latest count of available papers for your specialty.",
      },
      {
        question: "How accurate are the questions and solutions?",
        answer:
          "Every question in HEQA is carefully structured using the original exam paper as reference. Solutions and answer keys are verified by subject matter experts and HND lecturers. We take accuracy extremely seriously — inaccurate content undermines everything we stand for.",
      },
      {
        question:
          "Why do some questions have complex equations that other apps can't show?",
        answer:
          "HND exams in engineering, science, and accounting specialties are full of mathematical formulas, integrals, matrices, and Greek symbols. Most apps just scan the PDF and show you a blurry photo. HEQA displays every equation crisply and clearly — exactly as it should appear in a real exam paper. That's the difference between a serious product and a lazy one.",
      },
      {
        question: "Will you add GCE A-Level and O-Level papers?",
        answer:
          "Yes! We're launching with HND as our core focus because it's the most underserved exam in Cameroon's edtech space. GCE Advanced Level and GCE Ordinary Level past papers are on our roadmap, along with professional certification exams. Follow us on social media for announcements.",
      },
    ],
  },
  {
    name: "Features & Studying",
    faqs: [
      {
        question: "What practice modes are available?",
        answer:
          "HEQA offers multiple ways to practice: (1) Practice by Paper — select a specific exam paper and work through its questions. (2) Practice by Year — study all papers from a particular exam year. (3) Practice by Topic — search for questions on specific topics across all papers. (4) Quick Practice — the app picks questions for you based on your specialty. All modes support both timed and untimed sessions.",
      },
      {
        question: "How do streaks work?",
        answer:
          "Streaks track your daily study consistency. If you use the app on any given day — open a paper, answer a question, start a session — that day counts. Study consecutive days and your streak number grows. Miss a day and it resets to zero. Your longest-ever streak is saved as a personal best. Streaks appear on your home screen and profile. They're a simple but powerful motivator to build daily study habits.",
      },
      {
        question: "How does the leaderboard work?",
        answer:
          "Your leaderboard score is calculated from three factors: questions attempted (×2 points), questions answered correctly (×3 points), and papers accessed (×10 points). This rewards both effort and accuracy. The leaderboard updates multiple times daily. You compete with HND students across Cameroon — it's a great way to stay motivated and see where you stand.",
      },
      {
        question: "Can I study offline without internet?",
        answer:
          "With a free account, you need internet to access papers. Premium users can download papers directly to their device and study 100% offline — no WiFi, no mobile data needed. This is essential for students in areas with unreliable connectivity or during power outages. Downloaded papers include all questions with full rendering.",
      },
      {
        question: "Can I bookmark questions for later?",
        answer:
          "Absolutely. When you encounter a challenging question, tap the bookmark icon to save it. All bookmarked questions appear in your dedicated Bookmarks tab, making it easy to build a personal collection of must-review questions before exam day.",
      },
    ],
  },
  {
    name: "Premium & Payments",
    faqs: [
      {
        question: "How much does Premium cost?",
        answer:
          "Premium pricing is designed to be affordable for Cameroonian students:\n\n• Monthly: 2,000 FCFA/month\n• Yearly: 15,000 FCFA/year (save 37%)\n• Lifetime: 25,000 FCFA (one-time payment)\n\nFor reference, monthly Premium costs less than 3 meals. We believe every student deserves access to quality exam prep without financial barriers.",
      },
      {
        question: "How do I pay for Premium?",
        answer:
          "We accept the payment methods Cameroonian students actually use: MTN Mobile Money (MoMo) and Orange Money. Payment is processed securely within the app. Select your plan, choose your payment method, enter your phone number, confirm the transaction — and you're Premium instantly. No credit card needed.",
      },
      {
        question: "Can I cancel my subscription?",
        answer:
          "Yes, you can cancel your subscription at any time. If you cancel a monthly plan, you'll continue to have Premium access until the end of your current billing period. We don't do sneaky auto-renewals without warning — you'll receive a notification before any renewal.",
      },
      {
        question: "What does Premium include that free doesn't?",
        answer:
          "Premium unlocks: (1) Full access to ALL past papers across all years. (2) Offline downloads — study without internet. (3) Completely ad-free experience. (4) Detailed personal analytics and progress charts. (5) Priority in-app support. The free tier still gives you meaningful access — we want you to experience real value before deciding to upgrade.",
      },
      {
        question: "Can my school buy Premium for all students?",
        answer:
          "Yes! We offer institutional plans for schools, polytechnics, and coaching centres. Institutional plans include bulk Premium accounts, usage reports, and custom pricing. Contact us at info@heqasolutions.com or WhatsApp +237 690 055 252 to discuss your institution's needs.",
      },
    ],
  },
  {
    name: "Technical & Support",
    faqs: [
      {
        question: "The app is running slowly on my phone. What can I do?",
        answer:
          "HEQA is optimised for mid-range Android devices, but here are some tips: (1) Make sure you're running the latest version of the app. (2) Close other apps running in the background. (3) Clear the app cache in your phone settings if it's been a while. (4) Ensure you have at least 200MB of free storage. If problems persist, contact us on WhatsApp — we take performance issues seriously.",
      },
      {
        question: "Is my data safe with HEQA?",
        answer:
          "Yes. Your personal information and study data are encrypted and stored securely using industry-leading cloud infrastructure. We never sell your data to third parties. Your account is protected with modern authentication and security practices.",
      },
      {
        question: "I forgot my password. How do I reset it?",
        answer:
          "On the login screen, tap 'Forgot Password'. Enter the email address you registered with, and we'll send you a password reset link. Check your inbox (and spam folder). Click the link, set a new password, and you're back in.",
      },
      {
        question: "How do I contact support?",
        answer:
          "You can reach us through multiple channels:\n\n• WhatsApp (fastest): +237 690 055 252\n• Email: info@heqasolutions.com\n• In-app support chat: Available directly in the app\n\nWe typically respond to WhatsApp messages within minutes during business hours, and to emails within 24 hours.",
      },
      {
        question:
          "I found an error in a question or solution. How do I report it?",
        answer:
          "We appreciate error reports! Accuracy is foundational to HEQA. You can report content issues through the in-app support chat (describe the question and paper), or send us a WhatsApp message with a screenshot. Our content team will review and correct it promptly.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState({ "0-0": true });

  const toggleItem = (key) => {
    setOpenItems((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-primary-600 via-primary-700 to-primary-800 dark:from-slate-950 dark:via-primary-950 dark:to-slate-950 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary-200 font-bold tracking-wider uppercase text-sm"
          >
            FAQ
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight"
          >
            Frequently asked <span className="text-gold-400">questions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-blue-100/80 max-w-2xl mx-auto"
          >
            Everything you need to know about HEQA Solutions. Can't find what
            you're looking for? Chat with us on WhatsApp.
          </motion.p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category, catIdx) => (
            <div key={catIdx} className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-xl font-heading font-extrabold text-slate-900 dark:text-white mb-6 flex items-center gap-3"
              >
                <span className="w-8 h-8 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 flex items-center justify-center text-sm font-bold">
                  {catIdx + 1}
                </span>
                {category.name}
              </motion.h2>
              <div className="space-y-3">
                {category.faqs.map((faq, faqIdx) => {
                  const key = `${catIdx}-${faqIdx}`;
                  const isOpen = openItems[key];
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: faqIdx * 0.03 }}
                      className={`rounded-2xl border transition-all duration-300 ${
                        isOpen
                          ? "bg-white dark:bg-slate-900 border-primary-100 dark:border-primary-900/30 shadow-lg shadow-primary-500/5"
                          : "bg-white/50 dark:bg-slate-900/30 border-slate-100 dark:border-slate-800 hover:border-slate-200 dark:hover:border-slate-700"
                      }`}
                    >
                      <button
                        onClick={() => toggleItem(key)}
                        className="w-full text-left p-5 md:p-6 flex items-center justify-between gap-4"
                      >
                        <span
                          className={`font-bold text-sm md:text-base leading-snug transition-colors ${
                            isOpen
                              ? "text-primary-600 dark:text-primary-400"
                              : "text-slate-900 dark:text-white"
                          }`}
                        >
                          {faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                            isOpen
                              ? "rotate-180 text-primary-600 dark:text-primary-400"
                              : "text-slate-400"
                          }`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-slate-50 dark:border-slate-800">
                              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm pt-4 whitespace-pre-line">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still have questions? */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Our team is always here to help. Reach out and we'll get back to you
            quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi HEQA Solutions! I have a question about your app.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full font-bold transition-all shadow-lg"
            >
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </a>
            <a
              href="mailto:info@heqasolutions.com"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-8 py-4 rounded-full font-bold hover:border-primary-300 transition-all"
            >
              <Mail className="w-5 h-5" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
