import Link from "next/link";
import Image from "next/image";

const speciesList = [
  {
    name: "Poultry",
    slug: "poultry",
    image: "/images/species/poultry-illustration.png",
    desc: "Enhancing poultry health and performance through scientifically formulated solutions for broilers, layers, and turkeys at all stages of growth, ensuring optimal productivity and well-being.",
  },
  {
    name: "Swine",
    slug: "swine",
    image: "/images/species/swine-illustration.png",
    desc: "Advancing swine well-being and productivity with innovative solutions that support optimal growth, improve immune function, and enhance overall health from piglets to mature hogs.",
  },
  {
    name: "Beef",
    slug: "beef",
    image: "/images/species/beef-illustration.png",
    desc: "Tailored nutritional solutions to ensure your beef cattle receive the essential nutrients and support needed for optimal growth, feed efficiency, and overall productivity.",
  },
  {
    name: "Dairy",
    slug: "dairy",
    image: "/images/species/dairy-illustration.png",
    desc: "Supporting overall dairy herd health and productivity with solutions designed to optimize milk production, improve udder health, and ensure the well-being of dairy animals.",
  },
  {
    name: "Equine",
    slug: "equine",
    image: "/images/species/equine-illustration.png",
    desc: "Specialized products to support horse health, enhance performance, and promote overall well-being with a focus on digestive stability, immune support, and nutritional balance.",
  },
];

export default function SpeciesPage() {
  return (
    <>
      <section className="relative bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Industry Solutions</span>
            </div>
            <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em] text-primary">Species We Serve</h1>
            <p className="text-xl text-body mt-4">Tailored nutritional solutions for every animal</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {speciesList.map((s, i) => (
            <Link
              key={s.slug}
              href={`/species/${s.slug}`}
              className="group bg-white border border-border rounded-lg overflow-hidden hover:shadow-[0_8px_24px_rgba(46,125,50,0.15)] hover:border-accent/30 transition-all duration-300"
            >
              <div className="relative h-52 bg-white flex items-center justify-center p-4 overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div
                    className="absolute w-28 h-28 rounded-full bg-accent/10"
                    style={{ animation: `speciesPulse 2.5s ease-out infinite ${i * 0.4}s` }}
                  />
                  <div className="relative w-full h-full">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
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

      <style>{`
        @keyframes speciesPulse {
          0% { transform: scale(1); opacity: 0.4; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </>
  );
}
