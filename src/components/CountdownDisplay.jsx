import React from 'react';
import { motion } from 'framer-motion';

const TimeBlock = ({ label, value }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center rounded-xl bg-white/5 p-4 backdrop-blur-md ring-1 ring-white/10"
    >
      <div className="text-4xl font-bold tabular-nums text-white sm:text-5xl md:text-6xl">
        {String(value).padStart(2, '0')}
      </div>
      <div className="mt-1 text-xs uppercase tracking-wide text-slate-300 sm:text-sm">
        {label}
      </div>
    </motion.div>
  );
};

const CountdownDisplay = ({ timeLeft }) => {
  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-5xl px-6">
      <div className="rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-900/30 p-6 shadow-2xl ring-1 ring-white/10 backdrop-blur-xl">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          <TimeBlock label="Days" value={days} />
          <TimeBlock label="Hours" value={hours} />
          <TimeBlock label="Minutes" value={minutes} />
          <TimeBlock label="Seconds" value={seconds} />
        </div>
      </div>
    </div>
  );
};

export default CountdownDisplay;
