import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star, Shield, Crown, Smartphone } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '0',
    currency: '',
    period: 'Forever free',
    description: 'Get started with essential past questions and practice.',
    features: [
      { text: 'Access to last 2 years of past questions', included: true },
      { text: 'Basic answers (no detailed solutions)', included: true },
      { text: 'Online study only', included: true },
      { text: 'Ad-supported', included: true },
      { text: 'Offline downloads', included: false },
      { text: 'Priority support', included: false },
    ],
    buttonText: 'Get Started Free',
    popular: false,
    icon: <Smartphone className="w-6 h-6" />,
    accentColor: 'slate',
  },
  {
    name: 'Premium',
    price: '2,000',
    currency: 'FCFA',
    period: '/month',
    yearlyPrice: '15,000 FCFA/year (save 37%)',
    description: 'Unlimited access. Everything you need to dominate exams.',
    features: [
      { text: 'Access to ALL past questions (10+ years)', included: true },
      { text: 'Detailed step-by-step expert solutions', included: true },
      { text: 'Offline download (study without internet)', included: true },
      { text: 'Completely ad-free experience', included: true },
      { text: 'Analytics & progress tracking', included: true },
      { text: 'Priority support — we respond fast', included: true },
    ],
    buttonText: 'Go Premium Now',
    popular: true,
    icon: <Crown className="w-6 h-6" />,
    accentColor: 'primary',
  },
  {
    name: 'Institutional',
    price: 'Custom',
    currency: '',
    period: 'Bulk pricing',
    description: 'Perfect for schools, polytechnics, and coaching centers.',
    features: [
      { text: 'Up to 100+ student accounts', included: true },
      { text: 'Admin dashboard with analytics', included: true },
      { text: 'Co-branded content integration', included: true },
      { text: 'Student performance reports', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom contract terms', included: true },
    ],
    buttonText: 'Contact Us',
    popular: false,
    icon: <Shield className="w-6 h-6" />,
    accentColor: 'slate',
  },
];

export default function Pricing() {
  return (
    <section className="section-padding bg-white relative overflow-hidden" id="pricing">
      {/* Background blur circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 rounded-full blur-[120px] -z-10 opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-50 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">
            Simple Pricing
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Invest in your <span className="text-gradient">future success</span>
          </h2>
          <p className="mt-5 text-lg text-slate-600">
            Start free, upgrade when you're ready. No hidden fees, just pure academic value. Pay with Mobile Money (MTN, Orange).
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className={`relative flex flex-col rounded-3xl border p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border-primary-200 bg-gradient-to-b from-primary-50/50 to-white shadow-2xl shadow-primary-500/10 md:scale-105 z-10'
                  : 'border-slate-200 bg-white shadow-lg shadow-slate-200/30 hover:shadow-xl'
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-bold px-5 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg shadow-primary-500/30">
                    <Zap className="w-3.5 h-3.5" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <div className={`w-12 h-12 rounded-xl ${plan.popular ? 'bg-primary-100 text-primary-600' : 'bg-slate-100 text-slate-600'} flex items-center justify-center mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1.5">
                  {plan.currency && (
                    <span className="text-lg font-semibold text-slate-500">
                      {plan.currency}
                    </span>
                  )}
                  <span className="text-4xl font-extrabold font-heading text-slate-900">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-slate-500 font-medium text-sm">
                      {plan.period}
                    </span>
                  )}
                </div>
                {plan.yearlyPrice && (
                  <p className="mt-2 text-sm font-medium text-success-600 bg-success-500/10 inline-block px-3 py-1 rounded-full">
                    Or {plan.yearlyPrice}
                  </p>
                )}
                <p className="mt-3 text-sm text-slate-500">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3.5 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li
                    key={fIdx}
                    className={`flex items-start gap-3 text-sm ${
                      feature.included ? 'text-slate-700' : 'text-slate-400'
                    }`}
                  >
                    <div className="mt-0.5">
                      {feature.included ? (
                        <Check
                          className={`w-4.5 h-4.5 ${
                            plan.popular
                              ? 'text-primary-600'
                              : 'text-success-500'
                          }`}
                        />
                      ) : (
                        <div className="w-4.5 h-4.5 rounded-full border-2 border-slate-200" />
                      )}
                    </div>
                    <span className={feature.included ? '' : 'line-through'}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold text-base transition-all active:scale-[0.98] ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Payment & Trust */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-slate-100"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-2.5 text-slate-400">
              <Shield className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Secure Payment
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400">
              <Star className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest uppercase">
                MTN & Orange Mobile Money
              </span>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400">
              <Zap className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest uppercase">
                Cancel Anytime
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
