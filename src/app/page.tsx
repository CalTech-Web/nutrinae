import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Ecodiar\u00AE Powder",
    slug: "ecodiar-powder",
    tagline: "Oregano Essential Oil for Feed",
    description: "Steam distilled essential oil of the Oregano plant, naturally selected to contain the optimum balance of phenols.",
    badge: "OMRI Listed",
    image: "/images/products/Ecodiar-Powder-Product-Image.png",
  },
  {
    name: "Ecodiar\u00AE Liquid",
    slug: "ecodiar-liquid",
    tagline: "Oregano Essential Oil for Water",
    description: "A unique combination of Oregano essential oils and an emulsifier for optimal health benefits through water.",
    image: "/images/products/Ecodiar-Liquid-Product-Image.png",
  },
  {
    name: "NuQuil\u00AE",
    slug: "nuquil",
    tagline: "Pure Saponins from Quillaja Tree",
    description: "100% natural saponin rich in triterpenoid saponins, glycol-components, tannins, and polyphenols.",
    badge: "Organic",
    image: "/images/products/Nuquil-Product-Image.png",
  },
  {
    name: "MYKOGEO\u00AE",
    slug: "mykogeo",
    tagline: "Activated Micronized Attapulgite",
    description: "Natural hydrated magnesium aluminosilicate with proprietary processing for superior absorption.",
    badge: "OMRI Listed",
    image: "/images/products/Mykogeo-Product-Image.webp",
  },
  {
    name: "MYKOGEO\u00AE Plus",
    slug: "mykogeo-plus",
    tagline: "Clay + Organic Compounds",
    description: "Attapulgite clay blended with organic compounds formulated to target specific fungi toxins.",
    image: "/images/products/Mykogeo-Plus-Product-Image.png",
  },
  {
    name: "HyTann",
    slug: "hytann",
    tagline: "Hydrolysable Tannins from Chestnut Tree",
    description: "100% natural hydrolysable tannin derived from the Chestnut castanea sativa tree.",
    image: "/images/products/Hytann-Product-Image.png",
  },
  {
    name: "NuBA",
    slug: "nuba",
    tagline: "Coated Calcium Butyrate",
    description: "Highly concentrated calcium butyrate with at least 65% butyric acid for gut integrity.",
    image: "/images/logos/New-NUTRINAE_Symbol.png",
  },
];

const speciesList = [
  { name: "Poultry", slug: "poultry", icon: "/images/species/poultry-icon.png", desc: "Broilers, layers & turkeys" },
  { name: "Swine", slug: "swine", icon: "/images/species/swine-icon.png", desc: "Piglets to mature hogs" },
  { name: "Beef", slug: "beef", icon: "/images/species/beef-icon.png", desc: "Growth & productivity" },
  { name: "Dairy", slug: "dairy", icon: "/images/species/dairy-icon.png", desc: "Milk production & health" },
  { name: "Equine", slug: "equine", icon: "/images/species/equine-icon.png", desc: "Health & performance" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-navy">
        {/* Background decorations */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="hero-blob w-[600px] h-[600px] bg-green-brand -top-40 -right-40" />
        <div className="hero-blob w-[400px] h-[400px] bg-green-light bottom-0 left-1/4" />
        <div className="hero-blob w-[300px] h-[300px] bg-green-dark top-1/3 left-0" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5 mb-8">
                <div className="w-2 h-2 bg-green-light rounded-full pulse-glow" />
                <span className="text-green-100 text-xs font-medium tracking-wide uppercase">Nourishing Naturally</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] mb-6 text-white">
                Science-Based
                <span className="block mt-1">Nutritional Solutions</span>
                <span className="block mt-1 text-green-light">for Animal Health</span>
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
                Cutting-edge, natural nutritional solutions that elevate animal health and performance. Backed by 35+ years of research in nutrition, health, and genetics.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/products" className="group bg-green-brand text-white px-8 py-4 rounded-full font-semibold hover:bg-green-light transition-all text-sm inline-flex items-center gap-2">
                  Explore Products
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/contact" className="border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/5 hover:border-white/40 transition-all text-sm">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-brand/20 to-green-dark/20 rounded-[3rem] blur-3xl" />
              <Image
                src="/images/about/hero-2.png"
                alt="Animal nutrition illustration"
                width={480}
                height={580}
                className="relative animate-float drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Products Section */}
      <section className="py-24 lg:py-32 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-green-brand font-semibold text-sm uppercase tracking-widest mb-3">Our Products</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-5">Science-Based Natural Solutions</h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Innovative nutritional solutions for optimal animal health, backed by rigorous research.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger-children">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group relative bg-white rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 hover:border-green-200"
              >
                {/* Product image with gradient bg */}
                <div className="relative mb-5 rounded-xl bg-gradient-to-br from-green-50 to-gray-50 p-4 overflow-hidden group-hover:from-green-50 group-hover:to-green-100/30 transition-colors duration-300">
                  <div className="relative w-full h-28 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-green-brand text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {product.badge}
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-navy group-hover:text-green-brand transition-colors leading-tight mb-1">
                  {product.name}
                </h3>
                <p className="text-green-brand/60 text-xs font-medium mb-2">{product.tagline}</p>
                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">{product.description}</p>
                <div className="mt-4 flex items-center gap-1 text-green-brand text-xs font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  Learn more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link href="/products" className="group inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-full font-semibold hover:bg-navy-light transition-colors text-sm">
              View All Products
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Species Section */}
      <section className="py-24 lg:py-32 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="hero-blob w-[500px] h-[500px] bg-green-50 -right-60 top-0 !opacity-50 !filter-none" style={{opacity: 0.5, filter: 'blur(100px)'}} />
        <div className="max-w-6xl mx-auto relative">
          <div className="text-center mb-20">
            <p className="text-green-brand font-semibold text-sm uppercase tracking-widest mb-3">Species We Serve</p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-5">Tailored for Every Animal</h2>
            <p className="text-gray-400 max-w-xl mx-auto text-lg">
              Specialized nutritional programs designed for the unique needs of each species.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5 stagger-children">
            {speciesList.map((s) => (
              <Link
                key={s.slug}
                href={`/species/${s.slug}`}
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-2 border border-gray-100 hover:border-green-200"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-green-brand/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 blur-xl" />
                    <Image
                      src={s.icon}
                      alt={s.name}
                      width={100}
                      height={100}
                      className="relative group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-navy group-hover:text-green-brand transition-colors mb-1">{s.name}</h3>
                <p className="text-gray-400 text-xs">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-green-dark via-green-brand to-green-light rounded-3xl p-12 lg:p-16 relative overflow-hidden">
            <div className="grid-pattern absolute inset-0" />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 text-center text-white">
              <div>
                <p className="text-5xl lg:text-6xl font-bold mb-2">35+</p>
                <div className="w-8 h-0.5 bg-white/30 mx-auto mb-3" />
                <p className="text-green-100 text-sm font-medium tracking-wide">Years of Experience</p>
              </div>
              <div>
                <p className="text-5xl lg:text-6xl font-bold mb-2">7</p>
                <div className="w-8 h-0.5 bg-white/30 mx-auto mb-3" />
                <p className="text-green-100 text-sm font-medium tracking-wide">Natural Products</p>
              </div>
              <div>
                <p className="text-5xl lg:text-6xl font-bold mb-2">5</p>
                <div className="w-8 h-0.5 bg-white/30 mx-auto mb-3" />
                <p className="text-green-100 text-sm font-medium tracking-wide">Species Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-36 px-4 bg-navy text-white relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="hero-blob w-[500px] h-[500px] bg-green-dark -bottom-60 -left-40" />
        <div className="hero-blob w-[400px] h-[400px] bg-green-brand -top-40 -right-40" />
        <div className="max-w-3xl mx-auto text-center relative">
          <Image
            src="/images/logos/New-NUTRINAE_Symbol.png"
            alt=""
            width={70}
            height={70}
            className="mx-auto mb-10 opacity-40"
          />
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Ready to Elevate Your<br />Animal Health Program?
          </h2>
          <p className="text-gray-400 mb-12 text-lg leading-relaxed max-w-xl mx-auto">
            With more than 35 years of experience in nutrition, health, and genetics, the NUTRINAE team is well positioned to help your operations maximize performance.
          </p>
          <Link href="/contact" className="group bg-green-brand text-white px-10 py-4 rounded-full font-semibold hover:bg-green-light transition-all text-sm inline-flex items-center gap-2">
            Get In Touch
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
