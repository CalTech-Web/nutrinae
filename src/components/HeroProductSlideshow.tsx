"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const allSpecies = [
  { name: "Poultry", icon: "/images/species/poultry-icon.png" },
  { name: "Swine", icon: "/images/species/swine-icon.png" },
  { name: "Beef", icon: "/images/species/beef-icon.png" },
  { name: "Dairy", icon: "/images/species/dairy-icon.png" },
  { name: "Equine", icon: "/images/species/equine-icon.png" },
];

// Species indices: 0=Poultry, 1=Swine, 2=Beef, 3=Dairy, 4=Equine
const products = [
  {
    name: "Ecodiar® Powder",
    image: "/images/products/Ecodiar-Powder-Product-Image.webp",
    species: [0, 1, 2, 3, 4], // All species
  },
  {
    name: "Ecodiar® Liquid",
    image: "/images/products/Ecodiar-Liquid-Product-Image.webp",
    species: [0, 1, 2, 3], // Poultry, Swine, Beef, Dairy (no Equine per live site)
  },
  {
    name: "NuQuil®",
    image: "/images/products/Nuquil-Product-Image.webp",
    species: [0, 1, 2, 3, 4], // All species
  },
  {
    name: "MYKOGEO®",
    image: "/images/products/Mykogeo-Product-Image.webp",
    species: [0, 1, 2, 3, 4], // All species
  },
  {
    name: "MYKOGEO® Plus",
    image: "/images/products/Mykogeo-Plus-Product-Image.webp",
    species: [0, 1, 2, 3, 4], // All species
  },
  {
    name: "HyTann",
    image: "/images/products/Hytann-Product-Image.webp",
    species: [0, 1, 2, 3, 4], // All species (monogastric + ruminant)
  },
  {
    name: "NuBA",
    image: "/images/products/NuBA-Product-Image.webp",
    species: [0, 1, 2, 3, 4], // All species
  },
];

// Different position layouts per product so species icons appear in varied locations
// Each layout is an array of {x, y} desktop positions and {mx, my} mobile positions
const positionSets: { x: number; y: number; mx: number; my: number }[][] = [
  // Layout 0 — arc top-heavy
  [
    { x: 5, y: 12, mx: 2, my: 8 },
    { x: 80, y: 8, mx: 70, my: 5 },
    { x: -2, y: 52, mx: -2, my: 48 },
    { x: 88, y: 48, mx: 78, my: 45 },
    { x: 42, y: 78, mx: 33, my: 78 },
  ],
  // Layout 1 — diagonal scatter
  [
    { x: 0, y: 20, mx: -2, my: 15 },
    { x: 85, y: 5, mx: 72, my: 2 },
    { x: 75, y: 55, mx: 75, my: 50 },
    { x: 10, y: 72, mx: 5, my: 70 },
    { x: 50, y: 82, mx: 38, my: 80 },
  ],
  // Layout 2 — spread wide
  [
    { x: -5, y: 35, mx: -5, my: 30 },
    { x: 90, y: 30, mx: 80, my: 25 },
    { x: 8, y: 8, mx: 5, my: 5 },
    { x: 78, y: 75, mx: 70, my: 72 },
    { x: 40, y: 82, mx: 30, my: 80 },
  ],
  // Layout 3 — cluster right
  [
    { x: 0, y: 15, mx: -2, my: 10 },
    { x: 82, y: 12, mx: 72, my: 8 },
    { x: 88, y: 45, mx: 78, my: 42 },
    { x: -3, y: 60, mx: -5, my: 55 },
    { x: 75, y: 75, mx: 65, my: 75 },
  ],
  // Layout 4 — V shape
  [
    { x: 42, y: 2, mx: 33, my: 0 },
    { x: -2, y: 30, mx: -5, my: 25 },
    { x: 88, y: 28, mx: 78, my: 22 },
    { x: 5, y: 70, mx: 0, my: 68 },
    { x: 82, y: 68, mx: 72, my: 65 },
  ],
  // Layout 5 — diamond
  [
    { x: 42, y: 5, mx: 33, my: 2 },
    { x: -5, y: 42, mx: -5, my: 38 },
    { x: 90, y: 40, mx: 80, my: 35 },
    { x: 10, y: 75, mx: 5, my: 72 },
    { x: 78, y: 78, mx: 68, my: 75 },
  ],
  // Layout 6 — zigzag
  [
    { x: 5, y: 5, mx: 0, my: 2 },
    { x: 85, y: 22, mx: 75, my: 18 },
    { x: 0, y: 45, mx: -5, my: 40 },
    { x: 88, y: 60, mx: 78, my: 55 },
    { x: 35, y: 80, mx: 28, my: 78 },
  ],
];

const delays = [0, 0.3, 0.6, 0.9, 1.2];

export default function HeroProductSlideshow() {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx: number) => setCurrent(idx), []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[520px]">
      {/* Slides */}
      {products.map((product, i) => {
        const positions = positionSets[i];
        const productSpecies = product.species.map((si) => ({
          ...allSpecies[si],
          pos: positions[product.species.indexOf(si)],
        }));

        return (
          <div
            key={product.name}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
          >
            {/* Product image — centered, no shadow or border */}
            <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[220px] md:w-[240px] md:h-[300px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain"
                sizes="240px"
              />
            </div>

            {/* Product name */}
            <div className="absolute left-1/2 -translate-x-1/2 top-[62%] md:top-[60%] text-center">
              <h3 className="text-lg md:text-xl font-bold font-heading text-primary whitespace-nowrap">
                {product.name}
              </h3>
            </div>

            {/* Species icons with pulsing dots — desktop */}
            {productSpecies.map((sp, si) => (
              <div
                key={sp.name}
                className="absolute z-10 hidden md:flex flex-col items-center"
                style={{
                  left: `${sp.pos.x}%`,
                  top: `${sp.pos.y}%`,
                }}
              >
                {/* Pulsing ring */}
                <span
                  className="absolute rounded-full bg-accent"
                  style={{
                    width: 56,
                    height: 56,
                    top: -3,
                    left: -3,
                    animation: "heroPulse 2.5s cubic-bezier(0,0,0.2,1) infinite",
                    animationDelay: `${delays[si]}s`,
                    opacity: 0,
                  }}
                />
                {/* Species icon */}
                <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden bg-white">
                  <Image
                    src={sp.icon}
                    alt={sp.name}
                    fill
                    className="object-cover"
                    sizes="50px"
                  />
                </div>
                {/* Label */}
                <span className="text-[10px] font-bold text-primary/70 mt-1 font-heading uppercase tracking-wide">
                  {sp.name}
                </span>
              </div>
            ))}

            {/* Species icons — mobile */}
            {productSpecies.map((sp, si) => (
              <div
                key={`m-${sp.name}`}
                className="absolute z-10 md:hidden flex flex-col items-center"
                style={{
                  left: `${sp.pos.mx}%`,
                  top: `${sp.pos.my}%`,
                }}
              >
                <span
                  className="absolute rounded-full bg-accent"
                  style={{
                    width: 40,
                    height: 40,
                    top: -2,
                    left: -2,
                    animation: "heroPulse 2.5s cubic-bezier(0,0,0.2,1) infinite",
                    animationDelay: `${delays[si]}s`,
                    opacity: 0,
                  }}
                />
                <div className="relative w-[36px] h-[36px] rounded-full overflow-hidden bg-white">
                  <Image
                    src={sp.icon}
                    alt={sp.name}
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
                <span className="text-[8px] font-bold text-primary/60 mt-0.5 font-heading uppercase tracking-wide">
                  {sp.name}
                </span>
              </div>
            ))}
          </div>
        );
      })}

      {/* Navigation — arrows + dots */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        <button
          onClick={() => setCurrent((prev) => (prev - 1 + products.length) % products.length)}
          className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors text-primary/50"
          aria-label="Previous product"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex gap-2">
          {products.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 h-2.5 bg-accent"
                  : "w-2.5 h-2.5 bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={() => setCurrent((prev) => (prev + 1) % products.length)}
          className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent transition-colors text-primary/50"
          aria-label="Next product"
        >
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      <style>{`
        @keyframes heroPulse {
          0% { transform: scale(1); opacity: 0.4; }
          75%, 100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
