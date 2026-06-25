"use client";

import { useState } from "react";

import Landing from "@/components/Landing";
import WeddingSlider from "@/components/WeddingSlider";

export default function Home() {
  const [opened, setOpened] = useState(false);

  if (!opened) {
    return <Landing onOpen={() => setOpened(true)} />;
  }

  return <WeddingSlider />;
}