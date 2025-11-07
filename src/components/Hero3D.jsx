import React, { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useAnimation } from 'framer-motion';

const Hero3D = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      controls.start({
        x: x * 20,
        y: y * 20,
        rotateX: y * -5,
        rotateY: x * 5,
        transition: { type: 'spring', stiffness: 120, damping: 20 }
      });
    };

    const node = containerRef.current;
    node?.addEventListener('mousemove', handleMouseMove);
    return () => node?.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-[#070a12] to-[#0b0f1c] text-white"
    >
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(54,247,255,0.12),transparent_60%),radial-gradient(ellipse_at_top_right,rgba(163,97,255,0.09),transparent_50%)]" />

      <motion.div
        animate={controls}
        className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 pt-28 text-center sm:pt-36"
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="text-4xl font-light tracking-[0.08em] text-white/90 sm:text-6xl"
          style={{ fontFamily: 'Satoshi, Inter, system-ui, sans-serif' }}
        >
          Meet Saveiy — The Future of Subscription Management
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
          style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
        >
          Track. Optimize. Save. A living interface that helps you master your money flow.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
          className="mt-10"
        >
          <a
            href="#features"
            className="group inline-flex items-center rounded-full border border-white/10 bg-gradient-to-r from-[#36f7ff] to-[#a361ff] px-7 py-3 text-sm font-medium text-black shadow-[0_0_30px_rgba(90,255,255,0.25)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            style={{
              backgroundImage:
                'linear-gradient(135deg, rgba(54,247,255,0.95), rgba(163,97,255,0.95))'
            }}
          >
            <span className="mr-2 inline-block h-2 w-2 animate-pulse rounded-full bg-white/80" />
            Start Saving
          </a>
        </motion.div>
      </motion.div>

      {/* gradient horizon */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0b0f1c] to-transparent" />
    </section>
  );
};

export default Hero3D;
