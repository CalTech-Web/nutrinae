"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const speciesIcons = [
  "/images/species/poultry-icon.png",
  "/images/species/swine-icon.png",
  "/images/species/beef-icon.png",
  "/images/species/dairy-icon.png",
  "/images/species/equine-icon.png",
];

// Each slide shows 3 icons in a triangular layout (large, medium, small)
const slides = [
  { large: 4, medium: 0, small: 1 }, // equine, poultry, swine
  { large: 0, medium: 3, small: 2 }, // poultry, dairy, beef
  { large: 1, medium: 2, small: 4 }, // swine, beef, equine
  { large: 2, medium: 4, small: 3 }, // beef, equine, dairy
  { large: 3, medium: 1, small: 0 }, // dairy, swine, poultry
];

export default function HeroSpeciesAnimation() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* Large — top-left area */}
          <div className="absolute top-[8%] left-[50%] md:left-[45%] w-[220px] h-[220px] md:w-[320px] md:h-[320px]">
            <Image
              src={speciesIcons[slide.large]}
              alt=""
              fill
              className="object-contain"
            />
          </div>
          {/* Medium — bottom-right */}
          <div className="absolute top-[48%] left-[65%] md:left-[62%] w-[160px] h-[160px] md:w-[240px] md:h-[240px]">
            <Image
              src={speciesIcons[slide.medium]}
              alt=""
              fill
              className="object-contain"
            />
          </div>
          {/* Small — bottom-left */}
          <div className="absolute top-[55%] left-[42%] md:left-[38%] w-[110px] h-[110px] md:w-[160px] md:h-[160px]">
            <Image
              src={speciesIcons[slide.small]}
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
