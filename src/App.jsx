import React from 'react';
import Hero3D from './components/Hero3D';
import FeaturesShowcase from './components/FeaturesShowcase';
import HowItWorks from './components/HowItWorks';
import PricingSection from './components/PricingSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#030508] text-white">
      <Hero3D />
      <FeaturesShowcase />
      <HowItWorks />
      <PricingSection />
      <footer className="relative mt-10 border-t border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(163,97,255,0.12),transparent_60%)]" />
        <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-10 text-white/60">
          <div className="text-sm">© {new Date().getFullYear()} Saveiy</div>
          <div className="text-sm">Your subscriptions, finally under control.</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
