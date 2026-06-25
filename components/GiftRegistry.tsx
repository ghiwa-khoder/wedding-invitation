"use client";

import BackgroundSlider from "@/components/BackgroundSlider";

export default function GiftRegistry() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <BackgroundSlider />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="w-full max-w-4xl text-center">
          <h2 className="mb-8 font-serif text-5xl italic md:text-6xl">
            Gifts
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-9 text-white/75">
            Your love, prayers, and presence are the greatest gifts we could
            ever receive.
          </p>

          <p dir="rtl" className="mx-auto mb-10 max-w-3xl font-serif text-2xl leading-10 text-white/85">
            وجودكم ودعواتكم أجمل هدية لنا،
            <br />
            ولمن يرغب بتقديم هدية، يمكنه ذلك عبر Wish Money.
          </p>

          <label className="mb-3 block text-sm font-bold uppercase tracking-[0.3em] text-white/70">
            Wish Money:
          </label>

          <div className="mb-7 flex h-16 w-full items-center justify-center rounded-2xl border border-white/35 bg-white/10 px-6 text-2xl font-semibold tracking-wider text-white backdrop-blur-sm">
            +961 70 207 662
          </div>

          <p className="mt-8 text-sm text-white/60">
            Thank you for celebrating this special day with us ❤️
          </p>
        </div>
      </div>
    </section>
  );
}