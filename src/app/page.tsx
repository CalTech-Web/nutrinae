import Link from "next/link";
import Image from "next/image";
import HeroProductSlideshow from "@/components/HeroProductSlideshow";

const products = [
  {
    name: "Ecodiar® Powder",
    slug: "ecodiar-powder",
    description: "Steam distilled Oregano essential oil for optimal gut health through the feed.",
    image: "/images/products/Ecodiar-Powder-Product-Image.png",
    badge: "OMRI Listed",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
  },
  {
    name: "Ecodiar® Liquid",
    slug: "ecodiar-liquid",
    description: "Oregano essential oils and emulsifier for health benefits through drinking water.",
    image: "/images/products/Ecodiar-Liquid-Product-Image.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
  },
  {
    name: "NuQuil®",
    slug: "nuquil",
    description: "100% natural saponins from the Quillaja saponaria tree for immune support.",
    image: "/images/products/Nuquil-Product-Image.png",
    badge: "Organic",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    name: "MYKOGEO®",
    slug: "mykogeo",
    description: "Natural clay with proprietary processing for feed flow and toxin mitigation.",
    image: "/images/products/Mykogeo-Product-Image.png",
    badge: "OMRI Listed",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
    ),
  },
];

const challenges = [
  {
    title: "Gut Health Management",
    desc: "Natural solutions to optimize gut microbiome and improve nutrient absorption.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    title: "Antibiotic Reduction",
    desc: "Science-based alternatives to reduce or eliminate antibiotics in production.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: "Toxin Risk Management",
    desc: "Advanced clay-based solutions to mitigate mycotoxin contamination in feed.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    ),
  },
  {
    title: "Performance Optimization",
    desc: "Proven feed additives to improve growth rates, feed efficiency, and overall health.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
  },
];

const speciesList = [
  { name: "Poultry", slug: "poultry", image: "/images/species/poultry-hero.png" },
  { name: "Swine", slug: "swine", image: "/images/species/swine-hero.png" },
  { name: "Beef", slug: "beef", image: "/images/species/beef-hero.png" },
  { name: "Dairy", slug: "dairy", image: "/images/species/dairy-hero.png" },
  { name: "Equine", slug: "equine", image: "/images/species/equine-hero.png" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white min-h-[85vh] flex items-center overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left — Text content */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[3px] bg-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Science. Focus. Innovation.</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-primary leading-[1.15] mb-6 font-heading tracking-[-0.02em]">
                Nutritional Solutions<br />
                <span className="text-accent">for Animal Health</span>
              </h1>
              <p className="text-xl text-accent/80 mb-4 font-medium">
                To Improve Performance And Profitability
              </p>
              <p className="text-body leading-relaxed mb-10 max-w-lg">
                At NUTRINAE, we specialize in cutting-edge, science-based nutritional solutions
                that elevate animal health and performance through natural, high-quality ingredients.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/products" className="bg-accent text-white px-8 py-3.5 rounded-[0.2rem] text-[14px] font-bold uppercase tracking-wide hover:bg-dark transition-colors inline-flex items-center gap-2">
                  Our Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/contact" className="border-2 border-accent text-accent px-8 py-3.5 rounded-[0.2rem] text-[14px] font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right — Product slideshow */}
            <div className="flex-1 w-full max-w-[520px]">
              <HeroProductSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">What We Solve</span>
              <div className="w-8 h-[3px] bg-accent" />
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold font-heading">What Are Your Challenges?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c) => (
              <div key={c.title} className="group bg-white border border-border rounded-[0.3rem] p-8 text-center hover:shadow-[0_5px_15px_rgba(0,0,0,0.15)] hover:border-accent transition-all">
                <div className="w-16 h-16 bg-accent-50 rounded-full flex items-center justify-center mx-auto mb-5 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold font-heading mb-3">{c.title}</h3>
                <p className="text-body text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Our Solutions</span>
              <div className="w-8 h-[3px] bg-accent" />
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold font-heading">Featured Products</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-[0.3rem] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-all"
              >
                <div className="relative h-44 bg-white flex items-center justify-center p-4">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-[0.2rem]">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-accent">{product.icon}</div>
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors font-heading text-[15px]">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-body text-sm leading-relaxed">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/products" className="bg-accent text-white px-8 py-3.5 rounded-[0.2rem] text-[14px] font-bold uppercase tracking-wide hover:bg-dark transition-colors inline-flex items-center gap-2">
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Species Section */}
      <section className="py-20 px-4 bg-accent relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[40%] h-[50%] bg-gradient-to-br from-white/10 to-transparent rounded-br-[100px]" />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Industry Solutions</span>
              <div className="w-8 h-[3px] bg-white" />
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold text-white font-heading">Species We Serve</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {speciesList.map((s) => (
              <Link
                key={s.slug}
                href={`/species/${s.slug}`}
                className="group bg-white/15 backdrop-blur-sm border border-white/20 rounded-[0.3rem] p-6 text-center hover:bg-white hover:border-white transition-all"
              >
                <div className="relative h-20 mb-4">
                  <Image src={s.image} alt={s.name} fill className="object-contain group-hover:scale-105 transition-transform" />
                </div>
                <h3 className="font-bold text-white group-hover:text-accent text-sm uppercase tracking-wide font-heading">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          <div>
            <div className="text-4xl md:text-5xl font-bold font-heading mb-2">35+</div>
            <p className="text-white/70 text-sm uppercase tracking-wide font-medium">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold font-heading mb-2">7</div>
            <p className="text-white/70 text-sm uppercase tracking-wide font-medium">Product Lines</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold font-heading mb-2">5</div>
            <p className="text-white/70 text-sm uppercase tracking-wide font-medium">Species Served</p>
          </div>
          <div>
            <div className="text-4xl md:text-5xl font-bold font-heading mb-2">7</div>
            <p className="text-white/70 text-sm uppercase tracking-wide font-medium">Industry Affiliations</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="bg-accent rounded-[0.3rem] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-white/10 to-transparent" />
            <div className="relative">
              <h2 className="text-3xl md:text-[32px] font-bold text-white font-heading mb-3">
                Ready to Elevate Your Program?
              </h2>
              <p className="text-white/70 max-w-lg">
                With more than 35 years of experience in nutrition, health, and genetics, the NUTRINAE
                team is well positioned to help your operations maximize performance.
              </p>
            </div>
            <Link href="/contact" className="relative bg-white text-accent px-10 py-4 rounded-[0.2rem] text-[14px] font-bold uppercase tracking-wide hover:bg-accent-50 transition-colors whitespace-nowrap inline-flex items-center gap-2 flex-shrink-0">
              Get In Touch
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
