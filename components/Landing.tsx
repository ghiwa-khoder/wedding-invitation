"use client";

import { motion } from "framer-motion";
import BackgroundSlider from "@/components/BackgroundSlider";

type LandingProps = {
  onOpen: () => void;
};

export default function Landing({ onOpen }: LandingProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <BackgroundSlider />

      <div className="absolute inset-0 bg-black/55" />

      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-6 text-4xl font-light md:text-5xl">
          Welcome To Our Wedding!
        </h1>

        <button
          onClick={onOpen}
          className="rounded-full bg-white/15 px-8 py-3 text-sm backdrop-blur-md transition hover:bg-white/25"
        >
          Open Invitation
        </button>
      </motion.div>

      <button className="absolute bottom-6 left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white bg-white/15 text-white backdrop-blur-md">
        II
      </button>
    </section>
  );
}