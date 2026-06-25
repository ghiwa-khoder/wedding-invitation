"use client";

import BackgroundSlider from "@/components/BackgroundSlider";

export default function IslamicInvitation() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <BackgroundSlider />
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="w-full max-w-4xl text-center">

          <p
            dir="rtl"
            className="mb-10 font-serif text-4xl md:text-5xl"
          >
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيم
          </p>

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/70">
            Invitation
          </p>

          <h2 className="mb-8 font-serif text-5xl italic md:text-6xl">
            You Are Invited
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-9 text-white/80">
            With hearts full of love and gratitude, we are delighted to invite
            you to celebrate the beginning of our new journey together.
          </p>

          <div dir="rtl" className="mb-12">
            <h3 className="mb-5 font-serif text-4xl md:text-5xl">
              يشرفنا حضوركم
            </h3>

            <p className="mx-auto max-w-3xl text-2xl leading-[2.8rem] text-white/90">
              بكل محبة وفرح،
              <br />
              نتشرف بدعوتكم لمشاركتنا أجمل لحظات حياتنا
              <br />
              وحضور حفل زفافنا.
            </p>
          </div>

          <div className="mx-auto mb-10 h-px w-40 bg-white/30" />

          <p
            dir="rtl"
            className="mx-auto max-w-4xl font-serif text-2xl leading-[3rem] md:text-4xl"
          >
            وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا
            لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
          </p>

          <p
            dir="rtl"
            className="mt-5 text-lg text-white/70"
          >
            سورة الروم - الآية 21
          </p>

        </div>
      </div>
    </section>
  );
}