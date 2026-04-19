import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Rocket,
  CheckCircle,
  Gift,
  Clock,
  Users,
  Sparkles,
  ArrowRight,
  Shield,
  Star,
} from "lucide-react";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";

const RELEASE_DATE = "May 20, 2026";

export default function WaitingListPage() {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    level: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sanitize = (str) => str.replace(/[<>{}]/g, "").trim();

  const validateWhatsApp = (num) => {
    const cleaned = num.replace(/[\s\-\(\)]/g, "");
    return /^(\+?237)?[236789]\d{7,8}$/.test(cleaned);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const name = sanitize(formData.name);
    const whatsapp = formData.whatsapp.replace(/[\s\-\(\)]/g, "");
    const level = formData.level;

    if (!name || name.length < 2 || name.length > 100) {
      setError("Please enter a valid name (2-100 characters).");
      return;
    }
    if (!validateWhatsApp(whatsapp)) {
      setError(
        "Please enter a valid Cameroon phone number (e.g. 6XXXXXXXX or +2376XXXXXXXX).",
      );
      return;
    }
    if (!["200", "300", "400"].includes(level)) {
      setError("Please select your HND level.");
      return;
    }

    setLoading(true);

    try {
      // Normalize number
      let normalizedNumber = whatsapp;
      if (!normalizedNumber.startsWith("+")) {
        if (normalizedNumber.startsWith("237")) {
          normalizedNumber = "+" + normalizedNumber;
        } else {
          normalizedNumber = "+237" + normalizedNumber;
        }
      }

      // Check for duplicate
      const q = query(
        collection(db, "waitinglist"),
        where("whatsapp", "==", normalizedNumber),
      );
      const existing = await getDocs(q);
      if (!existing.empty) {
        setError("This WhatsApp number is already on the waiting list! 🎉");
        setLoading(false);
        return;
      }

      await addDoc(collection(db, "waitinglist"), {
        name: name,
        whatsapp: normalizedNumber,
        level: parseInt(level),
        joinedAt: serverTimestamp(),
        source: "website",
        premiumGranted: false,
      });

      setSubmitted(true);
    } catch (err) {
      console.error("Waiting list error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-700 via-primary-800 to-slate-900 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-500/10 rounded-full blur-[120px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-gold-400/20 border border-gold-400/30 text-gold-400 px-4 py-2 rounded-full text-sm font-bold mb-6"
          >
            <Rocket className="w-4 h-4" />
            Launching {RELEASE_DATE}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight mb-6"
          >
            Be the <span className="text-gold-400">first</span> to experience
            HEQA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto mb-4"
          >
            Join our exclusive waiting list and get{" "}
            <span className="text-white font-bold">
              2 weeks of FREE Premium access
            </span>{" "}
            when we launch. No strings attached.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-blue-200/70"
          >
            <div className="flex items-center gap-2">
              <Gift className="w-4 h-4 text-gold-400" /> 2 weeks free Premium
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-400" /> Early access
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-gold-400" /> Priority support
            </div>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mb-6">
                Why join the waiting list?
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: <Gift className="w-5 h-5" />,
                    title: "2 Weeks Free Premium",
                    desc: "Get full unlimited access to all 50,000+ questions, solutions, offline downloads, and zero ads — completely free for 14 days.",
                    color: "text-gold-500",
                    bg: "bg-gold-500/10",
                  },
                  {
                    icon: <Rocket className="w-5 h-5" />,
                    title: "First to Download",
                    desc: "You'll be personally notified on WhatsApp the moment HEQA launches. Be ahead of everyone.",
                    color: "text-primary-600",
                    bg: "bg-primary-50 dark:bg-primary-900/20",
                  },
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: "Founding Member Status",
                    desc: "Early supporters get special recognition. Your feedback will directly shape the app.",
                    color: "text-emerald-600",
                    bg: "bg-emerald-50 dark:bg-emerald-900/20",
                  },
                  {
                    icon: <Users className="w-5 h-5" />,
                    title: "Join 50,000+ Questions",
                    desc: "Access past papers for Accountancy, Computer Science, Engineering, Business Management, and more HND specialties.",
                    color: "text-purple-600",
                    bg: "bg-purple-50 dark:bg-purple-900/20",
                  },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`w-11 h-11 rounded-xl ${item.bg} ${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Countdown hint */}
              <div className="mt-10 p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3 mb-2">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                    Launch Date
                  </span>
                </div>
                <p className="text-2xl font-heading font-extrabold text-primary-600">
                  {RELEASE_DATE}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Our team is actively working on the final stages. Stay tuned!
                </p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1 }}
                      className="w-20 h-20 rounded-full bg-gold-500/10 flex items-center justify-center mx-auto mb-6"
                    >
                      <CheckCircle className="w-10 h-10 text-gold-500" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      You're on the list! 🎉
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-2">
                      We'll message you on WhatsApp the moment HEQA launches on{" "}
                      <span className="font-bold text-primary-600">
                        {RELEASE_DATE}
                      </span>
                      .
                    </p>
                    <p className="text-sm text-gold-500 font-semibold">
                      Your 2 weeks of free Premium are locked in! 🔓
                    </p>
                    <div className="mt-8 p-4 rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-100 dark:border-primary-800">
                      <p className="text-xs text-primary-700 dark:text-primary-400 font-medium">
                        Share with friends to help them get the same benefit!
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-gold-500/10 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-gold-500" />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        Join the Waiting List
                      </h3>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-8">
                      It takes 30 seconds. We'll only contact you about the
                      launch.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          How should we call you? *
                        </label>
                        <input
                          type="text"
                          required
                          maxLength={100}
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                          placeholder="Your name"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          WhatsApp Number *
                        </label>
                        <div className="relative">
                          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-sm font-medium">
                            +237
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={15}
                            value={formData.whatsapp}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                whatsapp: e.target.value.replace(
                                  /[^0-9+\s\-]/g,
                                  "",
                                ),
                              })
                            }
                            className="w-full pl-14 pr-4 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            placeholder="6XX XXX XXX"
                          />
                        </div>
                        <p className="text-xs text-slate-400 mt-1">
                          We'll only message you about the launch.
                        </p>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Your HND Level *
                        </label>
                        <div className="grid grid-cols-3 gap-3">
                          {["200", "300", "400"].map((lvl) => (
                            <button
                              key={lvl}
                              type="button"
                              onClick={() =>
                                setFormData({ ...formData, level: lvl })
                              }
                              className={`py-3.5 rounded-xl border-2 text-sm font-bold transition-all ${
                                formData.level === lvl
                                  ? "border-primary-500 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 shadow-md"
                                  : "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-600"
                              }`}
                            >
                              Level {lvl}
                            </button>
                          ))}
                        </div>
                      </div>

                      {error && (
                        <motion.div
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 rounded-xl bg-danger-50 dark:bg-danger-900/20 border border-danger-200 dark:border-danger-800 text-danger-600 dark:text-danger-400 text-sm font-medium"
                        >
                          {error}
                        </motion.div>
                      )}

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: loading ? 1 : 1.02 }}
                        whileTap={{ scale: loading ? 1 : 0.98 }}
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg shadow-primary-600/25"
                      >
                        {loading ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            Joining...
                          </>
                        ) : (
                          <>
                            Join the Waiting List
                            <ArrowRight className="w-5 h-5" />
                          </>
                        )}
                      </motion.button>

                      <p className="text-center text-xs text-slate-400">
                        🔒 Your data is secure. We never share your information.
                      </p>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
