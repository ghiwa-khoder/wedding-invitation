"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const weddingDate = new Date("2026-09-26T18:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      setTimeLeft({
        days: Math.max(0, Math.floor(distance / (1000 * 60 * 60 * 24))),
        hours: Math.max(0, Math.floor((distance / (1000 * 60 * 60)) % 24)),
        minutes: Math.max(0, Math.floor((distance / (1000 * 60)) % 60)),
        seconds: Math.max(0, Math.floor((distance / 1000) % 60)),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  return (
    <section className="bg-[#f7efe6] px-6 py-24 text-center">
      <p className="mb-4 text-sm tracking-[0.4em] text-[#b08a4a]">
        SAVE THE DATE
      </p>

      <h2 className="mb-12 font-serif text-4xl text-[#6f4f22]">
        Counting Down
      </h2>

      <div className="mx-auto grid max-w-3xl grid-cols-4 gap-4">
        {[
          ["Days", timeLeft.days],
          ["Hours", timeLeft.hours],
          ["Minutes", timeLeft.minutes],
          ["Seconds", timeLeft.seconds],
        ].map(([label, value]) => (
          <div
            key={label}
            className="rounded-3xl border border-[#d8c19a] bg-white/50 px-3 py-6 shadow-sm"
          >
            <div className="font-serif text-3xl text-[#7b5a28] md:text-5xl">
              {value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-widest text-[#8a6a38]">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}