import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-b from-primary-600 via-primary-700 to-primary-800 dark:from-slate-950 dark:via-primary-950 dark:to-slate-950 overflow-hidden">
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
            Pricing
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-4xl md:text-6xl font-heading font-extrabold text-white leading-tight"
          >
            Invest in your <span className="text-gold-400">future</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-blue-100/80 max-w-2xl mx-auto"
          >
            Start free, upgrade anytime from just 249 XAF/week. Pay with MTN
            MoMo or Orange Money. Launching May 20, 2026.
          </motion.p>
        </div>
      </section>

      <Pricing />

      {/* Payment Methods Section */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mb-4">
              Payment made easy
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              We accept the payment methods Cameroonian students actually use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "MTN Mobile Money",
                desc: "Pay directly from your MoMo wallet. Instant activation.",
                color:
                  "bg-yellow-50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800",
                icon: "🟡",
              },
              {
                name: "Orange Money",
                desc: "Quick and secure payment through Orange Money.",
                color:
                  "bg-orange-50 dark:bg-orange-900/10 border-orange-200 dark:border-orange-800",
                icon: "🟠",
              },
              {
                name: "Institutional Billing",
                desc: "Schools and institutions can request custom invoicing.",
                color:
                  "bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800",
                icon: "🏫",
              },
            ].map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 rounded-2xl border ${method.color} text-center`}
              >
                <div className="text-3xl mb-3">{method.icon}</div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">
                  {method.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {method.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
      <CTABanner />
    </>
  );
}
