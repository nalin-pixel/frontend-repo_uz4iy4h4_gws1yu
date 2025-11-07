import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Gauge, BadgePercent } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Track everything automatically',
    desc: 'All subscriptions in one live dashboard. Real-time updates with bank-safe syncing.',
    accent: 'from-cyan-400/70 to-cyan-300/40'
  },
  {
    icon: Sparkles,
    title: 'Optimize your spend',
    desc: 'AI highlights waste, negotiates savings, and tunes your plans to fit your life.',
    accent: 'from-violet-400/70 to-fuchsia-300/40'
  },
  {
    icon: BadgePercent,
    title: 'Unlock exclusive deals',
    desc: 'Members get instant discounts on popular services and SaaS tools you already use.',
    accent: 'from-teal-400/70 to-emerald-300/40'
  }
];

const FeatureCard = ({ icon: Icon, title, desc, accent }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm"
  >
    <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-20`} />

    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-white/5 p-3">
        <Icon className="h-6 w-6 text-white/80" />
      </div>
      <h3 className="text-lg font-light tracking-wide text-white/90" style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}>
        {title}
      </h3>
    </div>
    <p className="mt-3 text-sm leading-relaxed text-white/70" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {desc}
    </p>
  </motion.div>
);

const FeaturesShowcase = () => {
  return (
    <section id="features" className="relative z-10 mx-auto -mt-10 max-w-6xl px-6 pb-20">
      <div className="mb-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-light tracking-[0.2em] text-white/80 sm:text-3xl"
          style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}
        >
          Visibility. Optimization. Smart savings.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-3 max-w-2xl text-white/60"
        >
          A calm, intelligent layer that keeps your finances flowing in the right direction.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} {...f} />)
        )}
      </div>
    </section>
  );
};

export default FeaturesShowcase;
