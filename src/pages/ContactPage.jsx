import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageCircle,
  Phone,
  MapPin,
  Send,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const WHATSAPP_NUMBER = "237690055252";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const text = await res.text();
      let data = {};
      try {
        data = JSON.parse(text);
      } catch {
        /* non-JSON response */
      }
      if (!res.ok)
        throw new Error(
          data.error || `Server error (${res.status}). Please try again.`,
        );
      setStatus("success");
    } catch (err) {
      setErrorMsg(
        err.message || "Failed to send. Please try WhatsApp or email directly.",
      );
      setStatus("error");
    }
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
            Contact Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight"
          >
            Let's <span className="text-gold-400">talk</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-blue-100/80 max-w-2xl mx-auto"
          >
            Have a question, partnership inquiry, or feedback? We'd love to hear
            from you. We respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Cards */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white mb-2">
                  Get in touch
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Choose the channel that works best for you.
                </p>
              </motion.div>

              {/* WhatsApp - Primary */}
              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi HEQA Solutions! 👋 I'd like to learn more about your exam prep app.")}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="block p-6 rounded-2xl bg-[#25D366]/5 dark:bg-[#25D366]/10 border-2 border-[#25D366]/20 hover:border-[#25D366]/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#25D366] uppercase tracking-widest mb-1">
                      WhatsApp — Fastest Response
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      +237 690 055 252
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Tap to chat. We usually reply within minutes.
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:info@heqasolutions.com"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                whileHover={{ y: -4 }}
                className="block p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-1">
                      Email
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      info@heqasolutions.com
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      For general enquiries and partnerships.
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Phone */}
              <motion.a
                href="tel:+237690055252"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                whileHover={{ y: -4 }}
                className="block p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-primary-300 dark:hover:border-primary-700 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-widest mb-1">
                      Phone
                    </p>
                    <p className="text-lg font-bold text-slate-900 dark:text-white">
                      +237 690 055 252
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Call us anytime — we're available 24/7.
                    </p>
                  </div>
                </div>
              </motion.a>

              {/* Hours */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest mb-1">
                      Availability
                    </p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">
                      24/7 — We're always available
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                      Reach us anytime via WhatsApp, email, or phone. We never
                      close.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
              >
                {status === "success" ? (
                  <div className="text-center py-14">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                      }}
                      className="w-24 h-24 rounded-full bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center mx-auto mb-6 ring-8 ring-emerald-100 dark:ring-emerald-900/30"
                    >
                      <CheckCircle className="w-12 h-12 text-emerald-500" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                        Message received! 🎉
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
                        Thank you for reaching out. We've sent a confirmation to
                        your inbox and our team will respond within{" "}
                        <strong>24 hours</strong>.
                      </p>
                      <p className="mt-3 text-sm text-slate-400 dark:text-slate-500">
                        Need urgent help? Chat with us instantly on WhatsApp.
                      </p>
                      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg"
                        >
                          <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
                        </a>
                        <button
                          onClick={() => {
                            setStatus("idle");
                            setFormData({
                              name: "",
                              email: "",
                              subject: "",
                              message: "",
                            });
                          }}
                          className="inline-flex items-center justify-center gap-2 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-primary-300 dark:hover:border-primary-700 hover:text-primary-600 dark:hover:text-primary-400 px-6 py-3 rounded-xl font-semibold transition-all"
                        >
                          Send another message
                        </button>
                      </div>
                    </motion.div>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      Send us a message
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
                      Fill out the form and we'll get back to you within 24
                      hours.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Subject
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all"
                        >
                          <option value="">Select a topic...</option>
                          <option value="General Enquiry">
                            General Enquiry
                          </option>
                          <option value="App Support">App Support</option>
                          <option value="Premium Subscription">
                            Premium Subscription
                          </option>
                          <option value="Institutional Partnership">
                            Institutional Partnership
                          </option>
                          <option value="Content Suggestion">
                            Content / Paper Suggestion
                          </option>
                          <option value="Bug Report">Bug Report</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none"
                          placeholder="How can we help you?"
                        />
                      </div>
                      {status === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-start gap-3 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400"
                        >
                          <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <p className="text-sm font-medium">{errorMsg}</p>
                        </motion.div>
                      )}
                      <motion.button
                        type="submit"
                        disabled={status === "loading"}
                        whileHover={status !== "loading" ? { scale: 1.02 } : {}}
                        whileTap={status !== "loading" ? { scale: 0.98 } : {}}
                        className="w-full inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-primary-600/25"
                      >
                        {status === "loading" ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />{" "}
                            Sending…
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" /> Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 mb-2">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Based in Cameroon</span>
          </div>
          <p className="text-slate-400 dark:text-slate-500 text-sm">
            HEQA Solutions is proudly built and operated from Cameroon 🇨🇲,
            serving students nationwide.
          </p>
        </div>
      </section>
    </>
  );
}
