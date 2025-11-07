import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Connect your accounts',
    desc: 'Securely link cards and services. We detect subscriptions automatically.'
  },
  {
    title: 'See everything clearly',
    desc: 'A living dashboard organizes your spend by category and renewal dates.'
  },
  {
    title: 'Get AI insights',
    desc: 'We surface waste, overlaps, and smarter plan options to save you money.'
  },
  {
    title: 'Act with one tap',
    desc: 'Cancel, switch, or claim deals without leaving the flow.'
  }
];

const PathDot = ({ active }) => (
  <div className={`h-3 w-3 rounded-full ${active ? 'bg-cyan-400' : 'bg-white/20'}`} />
);

const HowItWorks = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-light tracking-[0.18em] text-white/90"
        style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}
      >
        How Saveiy Works
      </motion.h2>

      <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2">
        <div className="relative">
          <div className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-400/50 via-white/10 to-violet-400/50" />
          <div className="space-y-8">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pl-10"
              >
                <div className="absolute left-2 top-1.5">
                  <PathDot active={i === 0} />
                </div>
                <h3 className="text-lg font-light tracking-wide text-white/90" style={{ fontFamily: 'Satoshi, Inter, sans-serif' }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-6">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(54,247,255,0.12),transparent_60%),radial-gradient(ellipse_at_bottom_right,rgba(163,97,255,0.12),transparent_60%)]" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <h4 className="text-white/80">A guided, timeline-style flow</h4>
            <p className="mt-2 text-white/60 text-sm">
              As you scroll, the scene guides the camera along a calm path. Each step reveals just enough to keep momentum without overwhelm.
            </p>
            <ul className="mt-4 list-disc pl-5 text-white/60 text-sm space-y-1">
              <li>Subtle parallax and easing</li>
              <li>Organic gradients that respond to motion</li>
              <li>Always 60fps-focused, battery-friendly</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
