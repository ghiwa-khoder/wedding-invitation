"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MusicPlayer from "./MusicPlayer";
import Hero from "./Hero";
import IslamicInvitation from "./IslamicInvitation";
import GiftRegistry from "./GiftRegistry";
import RSVP from "./RSVP";

export default function WeddingSlider() {
  return (
    <>
      <MusicPlayer />

      <Swiper
        modules={[Navigation, Pagination, Keyboard]}
        slidesPerView={1}
        speed={900}
        navigation
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        className="h-screen w-screen"
      >
        <SwiperSlide className="h-screen w-screen">
          <Hero />
        </SwiperSlide>

        <SwiperSlide className="h-screen w-screen">
          <IslamicInvitation />
        </SwiperSlide>

        <SwiperSlide className="h-screen w-screen">
          <GiftRegistry />
        </SwiperSlide>

        <SwiperSlide className="h-screen w-screen">
          <RSVP />
        </SwiperSlide>
      </Swiper>
    </>
  );
}