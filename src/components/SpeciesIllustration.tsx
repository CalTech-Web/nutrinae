"use client";

import Image from "next/image";

interface FocusArea {
  label: string;
  detail: string;
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
}

const speciesFocus: Record<string, FocusArea[]> = {
  poultry: [
    { label: "Gut Health", detail: "Microbiota stabilization & intestinal integrity", position: "top-left" },
    { label: "Immune Support", detail: "Enhanced disease resistance via beta glucans", position: "top-right" },
    { label: "Pathogen Control", detail: "Natural antimicrobial targeting Salmonella", position: "bottom-left" },
    { label: "Feed Efficiency", detail: "Improved nutrient absorption & growth rates", position: "bottom-right" },
  ],
  swine: [
    { label: "Gut Health", detail: "Stabilized gut bacteria for reduced diarrhea risk", position: "top-left" },
    { label: "Immune Function", detail: "Strengthened natural immune response", position: "top-right" },
    { label: "Growth Performance", detail: "Better feed conversion & weight gain", position: "bottom-left" },
    { label: "Pathogen Defense", detail: "Protection against E. coli & Salmonella", position: "bottom-right" },
  ],
  beef: [
    { label: "Rumen Health", detail: "Stabilized microbial population for digestion", position: "top-left" },
    { label: "Immune Function", detail: "Resilience against stressors & disease", position: "top-right" },
    { label: "Nutrient Absorption", detail: "Optimized feed utilization & performance", position: "bottom-left" },
    { label: "Feedlot Health", detail: "Reduced infections via antimicrobial action", position: "bottom-right" },
  ],
  dairy: [
    { label: "Rumen Health", detail: "Microbiota balance for improved digestion", position: "top-left" },
    { label: "Milk Production", detail: "Enhanced yield through nutrient absorption", position: "top-right" },
    { label: "Udder Health", detail: "Mastitis prevention via natural antimicrobials", position: "bottom-left" },
    { label: "Stress Resilience", detail: "Immune support during transition periods", position: "bottom-right" },
  ],
  equine: [
    { label: "Digestive Health", detail: "Gut stability to prevent colic & ulcers", position: "top-left" },
    { label: "Immune Response", detail: "Enhanced ability to cope with stress", position: "top-right" },
    { label: "Hindgut Function", detail: "Cecum & colon microbial balance", position: "bottom-left" },
    { label: "Performance", detail: "Sustained health for training & competition", position: "bottom-right" },
  ],
};

const speciesIcons: Record<string, string> = {
  poultry: "/images/species/poultry-hero.png",
  swine: "/images/species/swine-hero.png",
  beef: "/images/species/beef-hero.png",
  dairy: "/images/species/dairy-hero.png",
  equine: "/images/species/equine-hero.png",
};

export default function SpeciesIllustration({ species }: { species: string }) {
  const focusAreas = speciesFocus[species] || [];
  const icon = speciesIcons[species];
  if (!icon) return null;

  return (
    <section className="py-16 md:py-20 px-4 bg-light-bg overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Science Focus</span>
            <div className="w-8 h-[3px] bg-accent" />
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold font-heading">Key Areas of Innovation</h2>
        </div>

        {/* Key visual composition */}
        <div className="relative max-w-[900px] mx-auto">
          {/* Center image with green circle */}
          <div className="relative mx-auto w-[240px] h-[240px] md:w-[320px] md:h-[320px]">
            {/* Outer decorative ring */}
            <div className="absolute inset-[-20px] md:inset-[-30px] rounded-full border-2 border-accent/15" />
            {/* Second ring */}
            <div className="absolute inset-[-40px] md:inset-[-60px] rounded-full border border-dashed border-accent/10" />
            {/* Third ring */}
            <div className="absolute inset-[-60px] md:inset-[-90px] rounded-full border border-accent/[0.06]" />
            {/* Green circle background */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/15 via-accent-light/10 to-accent/5" />
            <div className="absolute inset-0 rounded-full border-[3px] border-accent/25" />
            {/* Species image */}
            <div className="absolute inset-4 md:inset-6">
              <Image
                src={icon}
                alt={species}
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>
            {/* Small accent dots on the circle */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-accent" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 rounded-full bg-accent" />
          </div>

          {/* Mobile: stacked callout cards */}
          <div className="md:hidden mt-10 grid grid-cols-2 gap-3">
            {focusAreas.map((area) => (
              <div key={area.label} className="bg-white rounded-[0.3rem] p-4 border border-border shadow-sm">
                <div className="w-2 h-2 rounded-full bg-accent mb-2" />
                <h4 className="font-bold text-sm font-heading text-primary">{area.label}</h4>
                <p className="text-xs text-body mt-1 leading-relaxed">{area.detail}</p>
              </div>
            ))}
          </div>

          {/* Desktop: positioned callout cards with connecting lines */}
          <div className="hidden md:block">
            {/* SVG connecting lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 520" fill="none" preserveAspectRatio="xMidYMid meet">
              {/* Top-left line */}
              <line x1="170" y1="115" x2="355" y2="185" stroke="#2E7D32" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
              {/* Top-right line */}
              <line x1="730" y1="115" x2="545" y2="185" stroke="#2E7D32" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
              {/* Bottom-left line */}
              <line x1="170" y1="405" x2="355" y2="335" stroke="#2E7D32" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
              {/* Bottom-right line */}
              <line x1="730" y1="405" x2="545" y2="335" stroke="#2E7D32" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.3" />
              {/* End dots */}
              <circle cx="355" cy="185" r="4" fill="#2E7D32" opacity="0.4" />
              <circle cx="545" cy="185" r="4" fill="#2E7D32" opacity="0.4" />
              <circle cx="355" cy="335" r="4" fill="#2E7D32" opacity="0.4" />
              <circle cx="545" cy="335" r="4" fill="#2E7D32" opacity="0.4" />
            </svg>

            {/* Top-left card */}
            <div className="absolute top-[-20px] left-0 w-[220px]">
              <div className="bg-white rounded-[0.3rem] p-5 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:border-accent/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <h4 className="font-bold text-sm font-heading text-primary">{focusAreas[0]?.label}</h4>
                </div>
                <p className="text-xs text-body leading-relaxed">{focusAreas[0]?.detail}</p>
              </div>
            </div>

            {/* Top-right card */}
            <div className="absolute top-[-20px] right-0 w-[220px]">
              <div className="bg-white rounded-[0.3rem] p-5 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:border-accent/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <h4 className="font-bold text-sm font-heading text-primary">{focusAreas[1]?.label}</h4>
                </div>
                <p className="text-xs text-body leading-relaxed">{focusAreas[1]?.detail}</p>
              </div>
            </div>

            {/* Bottom-left card */}
            <div className="absolute bottom-[-20px] left-0 w-[220px]">
              <div className="bg-white rounded-[0.3rem] p-5 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:border-accent/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <h4 className="font-bold text-sm font-heading text-primary">{focusAreas[2]?.label}</h4>
                </div>
                <p className="text-xs text-body leading-relaxed">{focusAreas[2]?.detail}</p>
              </div>
            </div>

            {/* Bottom-right card */}
            <div className="absolute bottom-[-20px] right-0 w-[220px]">
              <div className="bg-white rounded-[0.3rem] p-5 border border-border shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] hover:border-accent/30 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  <h4 className="font-bold text-sm font-heading text-primary">{focusAreas[3]?.label}</h4>
                </div>
                <p className="text-xs text-body leading-relaxed">{focusAreas[3]?.detail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
