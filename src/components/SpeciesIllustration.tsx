"use client";

import Image from "next/image";

interface Annotation {
  label: string;
  detail: string;
  dotX: number; // % from left on the image
  dotY: number; // % from top on the image
}

const illustrations: Record<string, string> = {
  poultry: "/images/species/poultry-illustration.webp",
  swine: "/images/species/swine-illustration.webp",
  beef: "/images/species/beef-illustration.webp",
  dairy: "/images/species/dairy-illustration.webp",
  equine: "/images/species/equine-illustration.webp",
};

const speciesAnnotations: Record<string, Annotation[]> = {
  poultry: [
    { label: "Immune Support", detail: "Enhanced disease resistance via beta glucans", dotX: 38, dotY: 38 },
    { label: "Feed Efficiency", detail: "Improved nutrient absorption & growth", dotX: 62, dotY: 42 },
    { label: "Gut Health", detail: "Microbiota stabilization & intestinal integrity", dotX: 58, dotY: 58 },
    { label: "Pathogen Control", detail: "Natural antimicrobial targeting Salmonella", dotX: 57, dotY: 72 },
  ],
  swine: [
    { label: "Immune Function", detail: "Strengthened natural immune response", dotX: 30, dotY: 38 },
    { label: "Growth Performance", detail: "Better feed conversion & weight gain", dotX: 52, dotY: 30 },
    { label: "Gut Health", detail: "Stabilized gut bacteria for digestion", dotX: 45, dotY: 55 },
    { label: "Pathogen Defense", detail: "Protection against E. coli & Salmonella", dotX: 62, dotY: 62 },
  ],
  beef: [
    { label: "Immune Function", detail: "Resilience against stressors & disease", dotX: 28, dotY: 38 },
    { label: "Feedlot Health", detail: "Reduced infections via antimicrobial action", dotX: 55, dotY: 28 },
    { label: "Rumen Health", detail: "Stabilized microbial population", dotX: 40, dotY: 52 },
    { label: "Nutrient Absorption", detail: "Optimized feed utilization & performance", dotX: 60, dotY: 58 },
  ],
  dairy: [
    { label: "Stress Resilience", detail: "Immune support during transition periods", dotX: 28, dotY: 38 },
    { label: "Milk Production", detail: "Enhanced yield through nutrient absorption", dotX: 55, dotY: 48 },
    { label: "Rumen Health", detail: "Microbiota balance for improved digestion", dotX: 40, dotY: 55 },
    { label: "Udder Health", detail: "Mastitis prevention via natural antimicrobials", dotX: 62, dotY: 75 },
  ],
  equine: [
    { label: "Immune Response", detail: "Enhanced ability to cope with stress", dotX: 28, dotY: 40 },
    { label: "Performance", detail: "Sustained health for training & competition", dotX: 48, dotY: 28 },
    { label: "Digestive Health", detail: "Gut stability to prevent colic & ulcers", dotX: 42, dotY: 55 },
    { label: "Hindgut Function", detail: "Cecum & colon microbial balance", dotX: 60, dotY: 55 },
  ],
};

// Fixed label anchor points in SVG coords (viewBox 0 0 1000 562)
// 0=top-left, 1=top-right, 2=bottom-left, 3=bottom-right
const labelAnchors = [
  { x: 100, y: 40 },
  { x: 900, y: 40 },
  { x: 100, y: 525 },
  { x: 900, y: 525 },
];

// Label CSS positions per slot
const labelCSS: { className: string }[] = [
  { className: "top-1 left-1 md:top-2 md:left-2" },
  { className: "top-1 right-1 md:top-2 md:right-2" },
  { className: "bottom-1 left-1 md:bottom-2 md:left-2" },
  { className: "bottom-1 right-1 md:bottom-2 md:right-2" },
];

const delays = [0, 0.6, 1.2, 1.8];

export default function SpeciesIllustration({ species }: { species: string }) {
  const src = illustrations[species];
  const annotations = speciesAnnotations[species];
  if (!src || !annotations) return null;

  return (
    <section className="py-16 md:py-20 px-4 bg-light-bg overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Science Focus</span>
            <div className="w-8 h-[3px] bg-accent" />
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold font-heading">Key Areas of Innovation</h2>
        </div>

        {/* ── Desktop: annotated illustration ── */}
        <div className="hidden md:block">
          <div
            className="relative max-w-[820px] mx-auto"
            style={{ aspectRatio: "16/9" }}
          >
            {/* Image with green drop shadow */}
            <Image
              src={src}
              alt={`${species} anatomical illustration`}
              fill
              className="object-contain"
              style={{
                filter:
                  "drop-shadow(0 4px 12px rgba(0,0,0,0.10)) drop-shadow(0 1px 4px rgba(0,0,0,0.06))",
              }}
            />

            {/* SVG overlay — dashed lines from labels to dots */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 562"
              preserveAspectRatio="xMidYMid meet"
            >
              {annotations.map((a, i) => {
                const anchor = labelAnchors[i];
                const dotSvgX = a.dotX * 10;
                const dotSvgY = a.dotY * 5.62;
                return (
                  <line
                    key={i}
                    x1={anchor.x}
                    y1={anchor.y}
                    x2={dotSvgX}
                    y2={dotSvgY}
                    stroke="#2E7D32"
                    strokeWidth="1.2"
                    strokeDasharray="8 5"
                    opacity="0.35"
                  />
                );
              })}
            </svg>

            {/* Pulsing dots on the illustration */}
            {annotations.map((a, i) => (
              <div
                key={i}
                className="absolute z-10"
                style={{
                  left: `${a.dotX}%`,
                  top: `${a.dotY}%`,
                  transform: "translate(-50%,-50%)",
                }}
              >
                {/* Ping ring */}
                <span
                  className="absolute rounded-full bg-accent"
                  style={{
                    width: 20,
                    height: 20,
                    top: -4,
                    left: -4,
                    animation: `ping 2s cubic-bezier(0,0,0.2,1) infinite`,
                    animationDelay: `${delays[i]}s`,
                    opacity: 0,
                  }}
                />
                {/* Solid dot */}
                <span className="block w-3 h-3 rounded-full bg-accent border-2 border-white shadow-md" />
              </div>
            ))}

            {/* Label cards at corners */}
            {annotations.map((a, i) => (
              <div
                key={i}
                className={`absolute z-20 ${labelCSS[i].className}`}
              >
                <div className="bg-white/95 backdrop-blur-sm rounded-[0.25rem] px-3 py-2 shadow-[0_2px_10px_rgba(0,0,0,0.1)] border border-accent/15 max-w-[180px]">
                  <p className="font-bold text-[13px] text-primary font-heading leading-tight">
                    {a.label}
                  </p>
                  <p className="text-[10px] text-body mt-0.5 leading-snug">
                    {a.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Mobile: image + grid ── */}
        <div className="md:hidden">
          <div className="relative aspect-[16/9] max-w-[500px] mx-auto mb-8">
            <Image
              src={src}
              alt={`${species} anatomical illustration`}
              fill
              className="object-contain"
              style={{
                filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.08))",
              }}
            />
            {/* Pulsing dots only */}
            {annotations.map((a, i) => (
              <div
                key={i}
                className="absolute z-10"
                style={{
                  left: `${a.dotX}%`,
                  top: `${a.dotY}%`,
                  transform: "translate(-50%,-50%)",
                }}
              >
                <span
                  className="absolute rounded-full bg-accent"
                  style={{
                    width: 16,
                    height: 16,
                    top: -3,
                    left: -3,
                    animation: `ping 2s cubic-bezier(0,0,0.2,1) infinite`,
                    animationDelay: `${delays[i]}s`,
                    opacity: 0,
                  }}
                />
                <span className="block w-2.5 h-2.5 rounded-full bg-accent border-2 border-white shadow" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-3 max-w-[500px] mx-auto">
            {annotations.map((a) => (
              <div
                key={a.label}
                className="bg-white rounded-[0.3rem] p-4 border border-border shadow-sm"
              >
                <div className="w-2 h-2 rounded-full bg-accent mb-2" />
                <h4 className="font-bold text-sm font-heading text-primary">
                  {a.label}
                </h4>
                <p className="text-xs text-body mt-1 leading-relaxed">
                  {a.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Keyframe for pulsing dots */}
      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 0.5; }
          75%, 100% { transform: scale(2.2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
