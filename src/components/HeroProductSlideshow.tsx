"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const products = [
  { name: "Ecodiar® Powder", image: "/images/products/Ecodiar-Powder-Product-Image.png" },
  { name: "Ecodiar® Liquid", image: "/images/products/Ecodiar-Liquid-Product-Image.png" },
  { name: "NuQuil®", image: "/images/products/Nuquil-Product-Image.png" },
  { name: "MYKOGEO®", image: "/images/products/Mykogeo-Product-Image.png" },
  { name: "MYKOGEO® Plus", image: "/images/products/Mykogeo-Plus-Product-Image.png" },
  { name: "HyTann", image: "/images/products/Hytann-Product-Image.png" },
  { name: "NuBA", image: "/images/products/NuBA-Product-Image.png" },
];

const species = [
  { name: "Poultry", icon: "/images/species/poultry-icon.png" },
  { name: "Swine", icon: "/images/species/swine-icon.png" },
  { name: "Beef", icon: "/images/species/beef-icon.png" },
  { name: "Dairy", icon: "/images/species/dairy-icon.png" },
  { name: "Equine", icon: "/images/species/equine-icon.png" },
];

// Species icon positions arranged in an arc around the product (desktop)
// Angles spread from ~200° to ~340° (bottom-left arc to bottom-right)
const speciesPositions = [
  { x: 12, y: 18 },   // Poultry — top-left
  { x: 82, y: 18 },   // Swine — top-right
  { x: 0, y: 58 },    // Beef — mid-left
  { x: 92, y: 58 },   // Dairy — mid-right
  { x: 46, y: 82 },   // Equine — bottom-center
];

// Mobile positions — arranged in a tighter layout
const mobilePositions = [
  { x: 5, y: 10 },
  { x: 72, y: 10 },
  { x: -5, y: 50 },
  { x: 82, y: 50 },
  { x: 35, y: 80 },
];

const delays = [0, 0.4, 0.8, 1.2, 1.6];

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
    <div className="relative w-full h-full min-h-[420px] md:min-h-[500px]">
      {/* Slides */}
      {products.map((product, i) => (
        <div
          key={product.name}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0, pointerEvents: i === current ? "auto" : "none" }}
        >
          {/* Product image — centered */}
          <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[180px] h-[220px] md:w-[240px] md:h-[300px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain drop-shadow-lg"
              sizes="240px"
            />
          </div>

          {/* Product name */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[62%] md:top-[60%] text-center">
            <h3 className="text-lg md:text-xl font-bold font-heading text-primary whitespace-nowrap">
              {product.name}
            </h3>
            <p className="text-xs text-accent font-semibold uppercase tracking-wider mt-1">
              For All Species
            </p>
          </div>

          {/* SVG connecting lines (desktop only) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
          >
            {speciesPositions.map((pos, si) => (
              <line
                key={si}
                x1="50"
                y1="38"
                x2={pos.x + 4}
                y2={pos.y + 4}
                stroke="#2E7D32"
                strokeWidth="0.15"
                strokeDasharray="1 0.8"
                opacity="0.4"
              />
            ))}
          </svg>

          {/* Species icons with pulsing dots — desktop */}
          {speciesPositions.map((pos, si) => (
            <div
              key={si}
              className="absolute z-10 hidden md:flex flex-col items-center"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
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
              <div className="relative w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-accent/30 bg-white shadow-sm">
                <Image
                  src={species[si].icon}
                  alt={species[si].name}
                  fill
                  className="object-cover"
                  sizes="50px"
                />
              </div>
              {/* Label */}
              <span className="text-[10px] font-bold text-primary/70 mt-1 font-heading uppercase tracking-wide">
                {species[si].name}
              </span>
            </div>
          ))}

          {/* Species icons — mobile */}
          {mobilePositions.map((pos, si) => (
            <div
              key={`m-${si}`}
              className="absolute z-10 md:hidden flex flex-col items-center"
              style={{
                left: `${pos.x}%`,
                top: `${pos.y}%`,
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
              <div className="relative w-[36px] h-[36px] rounded-full overflow-hidden border-2 border-accent/30 bg-white shadow-sm">
                <Image
                  src={species[si].icon}
                  alt={species[si].name}
                  fill
                  className="object-cover"
                  sizes="36px"
                />
              </div>
              <span className="text-[8px] font-bold text-primary/60 mt-0.5 font-heading uppercase tracking-wide">
                {species[si].name}
              </span>
            </div>
          ))}
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-accent scale-125"
                : "bg-primary/20 hover:bg-primary/40"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
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
