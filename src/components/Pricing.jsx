import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Star, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 'Free',
    description: 'Get started with essential past questions.',
    features: [
      'Access to last 2 years of PQ',
      'Basic answers',
      'Online study only',
      'Ad-supported'
    ],
    buttonText: 'Get Started',
    popular: false
  },
  {
    name: 'Pro Student',
    price: '₦2,500',
    period: '/semester',
    description: 'Everything you need to excel in your HND.',
    features: [
      'Access to last 10 years of PQ',
      'Step-by-step expert solutions',
      'Offline download (PDF & In-app)',
      'Ad-free experience',
      'Priority support'
    ],
    buttonText: 'Go Pro Now',
    popular: true
  },
  {
    name: 'Departmental',
    price: '₦10,000',
    period: '/year',
    description: 'Perfect for group study and departments.',
    features: [
      'Up to 5 accounts',
      'Collaborative notes',
      'Departmental ranking',
      'Exam predictors',
      '24/7 dedicated support'
    ],
    buttonText: 'Contact Sales',
    popular: false
  }
];

export default function Pricing() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="pricing">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-100 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary-600 font-bold tracking-wider uppercase text-sm">Affordable Excellence</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-heading font-extrabold text-slate-900">
            Invest in Your <span className="text-gradient">Future Success</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Choose a plan that fits your study needs. No hidden fees, just pure academic value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.popular 
                  ? 'border-primary-200 bg-primary-50/30 shadow-2xl shadow-primary-500/10 scale-105 z-10' 
                  : 'border-slate-100 bg-white shadow-xl shadow-slate-200/50'
              } flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-600 to-accent-500 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
                  <Zap className="w-3 h-3" />
                  MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 font-medium">{plan.period}</span>}
                </div>
                <p className="text-sm text-slate-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-3 text-sm text-slate-700">
                    <Check className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-primary-600' : 'text-slate-400'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-xl font-bold transition-all active:scale-[0.98] ${
                  plan.popular
                    ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg shadow-primary-600/25'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {plan.buttonText}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-slate-400 grayscale opacity-70">
            <Shield className="w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase">SSL Secured Payment</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 grayscale opacity-70">
            <Star className="w-5 h-5" />
            <span className="text-xs font-bold tracking-widest uppercase">Verified Academic Content</span>
          </div>
        </div>
      </div>
    </section>
  );
}
