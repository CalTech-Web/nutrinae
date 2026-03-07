import Link from "next/link";
import Image from "next/image";

const speciesList = [
  { name: "Poultry", slug: "poultry", icon: "/images/species/poultry-icon.png", hero: "/images/species/poultry-hero.png", desc: "Broilers, layers and turkeys at all stages of growth" },
  { name: "Swine", slug: "swine", icon: "/images/species/swine-icon.png", hero: "/images/species/swine-hero.png", desc: "From piglets to mature hogs" },
  { name: "Beef", slug: "beef", icon: "/images/species/beef-icon.png", hero: "/images/species/beef-hero.png", desc: "Optimal growth and productivity for beef cattle" },
  { name: "Dairy", slug: "dairy", icon: "/images/species/dairy-icon.png", hero: "/images/species/dairy-hero.png", desc: "Optimizing milk production and well-being" },
  { name: "Equine", slug: "equine", icon: "/images/species/equine-icon.png", hero: "/images/species/equine-hero.png", desc: "Supporting health, performance, and well-being" },
];

export default function SpeciesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-dark via-green-brand to-green-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-100/80 font-medium text-sm uppercase tracking-wider mb-3">Tailored Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Species We Serve</h1>
          <p className="text-lg text-green-100/90 max-w-2xl mx-auto">
            Specialized nutritional programs designed for the unique needs of each species.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto space-y-6">
          {speciesList.map((s) => (
            <Link
              key={s.slug}
              href={`/species/${s.slug}`}
              className="group grid grid-cols-1 md:grid-cols-[180px_1fr] gap-8 items-center border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-green-brand/20 transition-all duration-300"
            >
              <div className="flex justify-center">
                <Image
                  src={s.hero}
                  alt={s.name}
                  width={160}
                  height={200}
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-navy group-hover:text-green-brand transition-colors mb-2">
                  {s.name}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-green-brand font-semibold text-sm group-hover:gap-3 transition-all">
                  View Solutions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
