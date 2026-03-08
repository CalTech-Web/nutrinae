import Link from "next/link";
import Image from "next/image";

const speciesList = [
  { name: "Poultry", slug: "poultry", image: "/images/species/poultry-hero.png", desc: "Broilers, layers and turkeys at all stages of growth" },
  { name: "Swine", slug: "swine", image: "/images/species/swine-hero.png", desc: "From piglets to mature hogs" },
  { name: "Beef", slug: "beef", image: "/images/species/beef-hero.png", desc: "Optimal growth and productivity for beef cattle" },
  { name: "Dairy", slug: "dairy", image: "/images/species/dairy-hero.png", desc: "Optimizing milk production and well-being" },
  { name: "Equine", slug: "equine", image: "/images/species/equine-hero.png", desc: "Supporting health, performance, and well-being" },
];

export default function SpeciesPage() {
  return (
    <>
      <section className="relative bg-accent text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about/hero-2.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-accent/90 to-accent-light/50" />
        </div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[30%] bg-gradient-to-tl from-white/10 to-transparent rounded-tl-[80px]" />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Industry Solutions</span>
            </div>
            <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em]">Species We Serve</h1>
            <p className="text-xl text-white/80 mt-4">Tailored nutritional solutions for every animal</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speciesList.map((s) => (
            <Link
              key={s.slug}
              href={`/species/${s.slug}`}
              className="group bg-white border border-border rounded-[0.3rem] overflow-hidden hover:shadow-[0_5px_15px_rgba(0,0,0,0.15)] hover:border-accent transition-all"
            >
              <div className="relative h-48 bg-light-bg overflow-hidden">
                <Image src={s.image} alt={s.name} fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold group-hover:text-accent transition-colors font-heading mb-2">{s.name}</h2>
                <p className="text-body text-sm leading-relaxed">{s.desc}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-accent text-sm font-bold uppercase tracking-wide">
                  Learn More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
