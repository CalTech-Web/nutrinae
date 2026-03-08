import Image from "next/image";

const illustrations: Record<string, string> = {
  poultry: "/images/species/poultry-illustration.png",
  swine: "/images/species/swine-illustration.png",
  beef: "/images/species/beef-illustration.png",
  dairy: "/images/species/dairy-illustration.png",
  equine: "/images/species/equine-illustration.png",
};

const labels: Record<string, string[]> = {
  poultry: ["Gut Health", "Immune Support", "Pathogen Control", "Feed Efficiency"],
  swine: ["Gut Health", "Immune Function", "Growth Performance", "Pathogen Defense"],
  beef: ["Rumen Health", "Immune Function", "Nutrient Absorption", "Feedlot Health"],
  dairy: ["Rumen Health", "Milk Production", "Udder Health", "Stress Resilience"],
  equine: ["Digestive Health", "Immune Response", "Hindgut Function", "Performance"],
};

export default function SpeciesIllustration({ species }: { species: string }) {
  const src = illustrations[species];
  const tags = labels[species];
  if (!src || !tags) return null;

  return (
    <section className="py-16 md:py-20 px-4 bg-light-bg">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Science Focus</span>
            <div className="w-8 h-[3px] bg-accent" />
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold font-heading">Key Areas of Innovation</h2>
        </div>

        {/* Illustration */}
        <div className="relative w-full max-w-[700px] mx-auto aspect-[16/9]">
          <Image
            src={src}
            alt={`${species} anatomical illustration`}
            fill
            className="object-contain"
          />
        </div>

        {/* Focus area tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-white border border-accent/20 text-accent font-bold text-sm px-5 py-2.5 rounded-full shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
