"use client";

import { useEffect, useState } from "react";
import BackgroundSlider from "@/components/BackgroundSlider";

export default function Hero() {
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
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <BackgroundSlider />

      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-5xl italic leading-tight drop-shadow-md md:text-6xl">
          Mohammad
          <span className="block text-4xl">&</span>
          Douaa
        </h1>

        <p className="mt-8 text-xl italic">📅 September 26, 2026</p>

        <p className="mt-8 text-xl font-serif">In the City of Love</p>

        <p className="mt-8 font-serif text-2xl italic">You’re Invited!</p>

        <div className="mt-8 flex gap-7">
          {[
            ["DAYS", timeLeft.days],
            ["HOURS", timeLeft.hours],
            ["MINUTES", timeLeft.minutes],
            ["SECONDS", timeLeft.seconds],
          ].map(([label, value]) => (
            <div key={label} className="text-center">
              <div className="text-3xl font-light">{value}</div>
              <div className="mt-1 text-xs">{label}</div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-sm opacity-80">← Swipe left</p>
      </div>

      <button className="absolute bottom-6 left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black">
        ▶
      </button>
    </section>
  );
}