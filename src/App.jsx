import React, { useEffect, useMemo, useState } from 'react';
import HeroScene from './components/HeroScene';
import CountdownDisplay from './components/CountdownDisplay';
import ControlsBar from './components/ControlsBar';
import FooterNote from './components/FooterNote';

// Helpers
const MS_IN_SEC = 1000;
const MS_IN_MIN = 60 * MS_IN_SEC;
const MS_IN_HOUR = 60 * MS_IN_MIN;
const MS_IN_DAY = 24 * MS_IN_HOUR;

function addOneMonth(date) {
  const d = new Date(date);
  const targetMonth = d.getMonth() + 1;
  const targetYear = d.getFullYear() + Math.floor(targetMonth / 12);
  const modMonth = targetMonth % 12;
  // Handle month overflow and end-of-month edge cases
  const lastDayOfTarget = new Date(targetYear, modMonth + 1, 0).getDate();
  const newDay = Math.min(d.getDate(), lastDayOfTarget);
  return new Date(targetYear, modMonth, newDay, d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
}

function diffBreakdown(ms) {
  const days = Math.max(0, Math.floor(ms / MS_IN_DAY));
  const hours = Math.max(0, Math.floor((ms % MS_IN_DAY) / MS_IN_HOUR));
  const minutes = Math.max(0, Math.floor((ms % MS_IN_HOUR) / MS_IN_MIN));
  const seconds = Math.max(0, Math.floor((ms % MS_IN_MIN) / MS_IN_SEC));
  return { days, hours, minutes, seconds };
}

function App() {
  // Persist the anchor date (first visit) in localStorage
  const [anchor, setAnchor] = useState(() => {
    const key = 'countdown_anchor_iso';
    const stored = localStorage.getItem(key);
    if (stored) return new Date(stored);
    const now = new Date();
    localStorage.setItem(key, now.toISOString());
    return now;
  });

  const targetDate = useMemo(() => addOneMonth(anchor), [anchor]);
  const [now, setNow] = useState(Date.now());

  // Smooth ticking using requestAnimationFrame with a second snap for stability
  useEffect(() => {
    let raf;
    let lastSecond = Math.floor(Date.now() / 1000);
    const loop = () => {
      const currentSecond = Math.floor(Date.now() / 1000);
      if (currentSecond !== lastSecond) {
        lastSecond = currentSecond;
        setNow(Date.now());
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const msLeft = Math.max(0, targetDate.getTime() - now);
  const timeLeft = diffBreakdown(msLeft);

  // Reset anchor to current time (for demo/testing convenience)
  const handleReset = () => {
    const nowDate = new Date();
    localStorage.setItem('countdown_anchor_iso', nowDate.toISOString());
    setAnchor(nowDate);
  };

  return (
    <div className="min-h-screen w-full bg-black text-white">
      <HeroScene />
      <CountdownDisplay timeLeft={timeLeft} />
      <ControlsBar onReset={handleReset} />
      <FooterNote />
    </div>
  );
}

export default App;
