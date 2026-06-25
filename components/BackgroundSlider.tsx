"use client";

import { useEffect, useState } from "react";

const images = [
  { src: "/images/cover1.jpg", position: "center center" },
  { src: "/images/cover2.jpeg", position: "center 30%" },
  { src: "/images/cover3.jpeg", position: "center 30%" },
  { src: "/images/cover4.jpeg", position: "center center" },
  { src: "/images/cover5.jpeg", position: "center center" },
];

export default function BackgroundSlider() {

    const [current, setCurrent] = useState(0);
  
    useEffect(() => {
  
      const interval = setInterval(() => {
  
        setCurrent((prev) => (prev + 1) % images.length);
  
      }, 4500);
  
      return () => clearInterval(interval);
  
    }, []);
  
    return (
  
      <div className="absolute inset-0 overflow-hidden bg-black">
  
        {images.map((image, index) => (
  
          <div
  
            key={image.src}
  
            className={`absolute inset-0 bg-cover transition-opacity duration-[1600ms] ${
  
              index === current ? "opacity-100" : "opacity-0"
  
            }`}
  
            style={{
  
              backgroundImage: `url(${image.src})`,
  
              backgroundPosition: image.position,
  
              transform: index === current ? "scale(1.06)" : "scale(1)",
  
              transitionProperty: "opacity, transform",
  
              transitionDuration: "1600ms, 6500ms",
  
            }}
  
          />
  
        ))}
  
      </div>
  
    );
  
  }