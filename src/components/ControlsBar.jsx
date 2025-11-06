import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw } from 'lucide-react';

const ControlsBar = ({ onReset }) => {
  return (
    <div className="mx-auto mt-6 max-w-5xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200 backdrop-blur-md"
      >
        <div>
          <p className="text-sm text-slate-300">
            This timer is locked to the first time you opened the page. It will continue across refreshes.
          </p>
        </div>
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-2 text-sm font-semibold text-white shadow-lg ring-emerald-400 transition hover:bg-emerald-400 focus:outline-none focus:ring-2"
        >
          <RotateCcw className="h-4 w-4" /> Reset to now
        </button>
      </motion.div>
    </div>
  );
};

export default ControlsBar;
