import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const HeroScene = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4TrRyLcIHhcItjnk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient glow overlay to enhance depth without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          One-Month Countdown
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
          className="mt-3 max-w-2xl text-base text-slate-300 sm:text-lg"
        >
          A futuristic timer anchored to your first visit — it keeps ticking even after refresh.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm text-white backdrop-blur-md ring-1 ring-white/20"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Press 'E' in the scene for a surprise.
        </motion.div>
      </div>
    </section>
  );
};

export default HeroScene;
