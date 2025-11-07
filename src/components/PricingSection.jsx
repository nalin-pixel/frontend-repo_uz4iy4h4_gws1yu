import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    features: ['Track up to 5 subscriptions', 'Basic insights', 'Deal previews'],
    accent: 'from-cyan-400/70 to-violet-400/70'
  },
  {
    name: 'Pro',
    price: '$7',
    period: 'month',
    features: ['Unlimited tracking', 'AI optimization', 'Exclusive member deals', 'Priority support'],
    accent: 'from-teal-400/80 to-fuchsia-400/80',
    popular: true
  },
  {
    name: 'Teams',
    price: '$19',
    period: 'member / month',
    features: ['Shared workspaces', 'Insights exports', 'Admin controls'],
    accent: 'from-violet-400/80 to-cyan-400/80'
  }
];

const Card = ({ tier }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className={`relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm ${
      tier.popular ? 'ring-1 ring-white/15' : ''
    }`}
  >
    <div className={`pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br ${tier.accent} opacity-10`} />
    {tier.popular && (
      <div className="absolute -top-3 left-6 rounded-full bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-sm">
        Most Popular
      </div>
    )}
    <div className="relative z-10">
      <h3 className="text-xl font-light tracking-wide text-white/90" style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}>
        {tier.name}
      </h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-light text-white">{tier.price}</span>
        <span className="text-sm text-white/60">/ {tier.period}</span>
      </div>
      <ul className="mt-5 space-y-2 text-sm text-white/70">
        {tier.features.map((f) => (
          <li className="flex items-start gap-2" key={f}>
            <Check className="mt-0.5 h-4 w-4 text-teal-300" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <a
        href="#"
        className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-white/90 transition-colors hover:bg-white/[0.12]"
      >
        Choose {tier.name}
      </a>
    </div>
  </motion.div>
);

const PricingSection = () => {
  return (
    <section id="pricing" className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-light tracking-[0.18em] text-white/90"
        style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}
      >
        Pricing
      </motion.h2>
      <p className="mt-3 text-center text-white/60">Smarter tracking. Sharper savings.</p>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((t) => (
          <Card key={t.name} tier={t} />
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
