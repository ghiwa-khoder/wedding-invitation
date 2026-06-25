"use client";

import { useState } from "react";
import BackgroundSlider from "@/components/BackgroundSlider";

export default function RSVP() {
  const [name, setName] = useState("");
  const [attending, setAttending] = useState("yes");
  const [note, setNote] = useState("");

  const phone = "96170208073";

  const message = encodeURIComponent(
    `Hello Mohammad & Douaa,

RSVP Confirmation:

Full Name: ${name}
Attending: ${attending === "yes" ? "Yes" : "No"}
Message: ${note}

Thank you ❤️`
  );

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <BackgroundSlider />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <form className="w-full max-w-4xl text-center">
          <h2 className="mb-8 font-serif text-5xl italic md:text-6xl">
            RSVP for Our Wedding
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-9 text-white/75">
            We respectfully request no children at the event. Kindly confirm
            your attendance via WhatsApp.
          </p>

          <label className="mb-3 block text-sm font-bold uppercase tracking-[0.3em] text-white/70">
            Full Name:
          </label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-7 h-16 w-full rounded-2xl border border-white/35 bg-white/10 px-6 text-xl text-white outline-none backdrop-blur-sm placeholder:text-white/40"
          />

          <label className="mb-3 block text-sm font-bold uppercase tracking-[0.3em] text-white/70">
            Will You Be Attending?
          </label>
          <div className="mb-7 grid grid-cols-2 gap-5">
            <button
              type="button"
              onClick={() => setAttending("yes")}
              className={`h-16 rounded-2xl border text-xl backdrop-blur-sm ${
                attending === "yes"
                  ? "border-white bg-white/20"
                  : "border-white/35 bg-white/10"
              }`}
            >
              ● yes
            </button>

            <button
              type="button"
              onClick={() => setAttending("no")}
              className={`h-16 rounded-2xl border text-xl backdrop-blur-sm ${
                attending === "no"
                  ? "border-white bg-white/20"
                  : "border-white/35 bg-white/10"
              }`}
            >
              ○ no
            </button>
          </div>

          <label className="mb-3 block text-sm font-bold uppercase tracking-[0.3em] text-white/70">
            Message to the Couple:
          </label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Leave us a message!"
            className="mb-7 h-28 w-full rounded-2xl border border-white/35 bg-white/10 px-6 py-5 text-xl text-white outline-none backdrop-blur-sm placeholder:text-white/40"
          />

          <a
            href={`https://wa.me/${phone}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl border border-white/40 bg-white/10 px-6 py-5 text-xl font-bold uppercase tracking-[0.2em] backdrop-blur-sm transition hover:bg-white/20"
          >
            Submit RSVP
          </a>
        </form>
      </div>
    </section>
  );
}