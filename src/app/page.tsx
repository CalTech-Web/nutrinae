import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Ecodiar\u00AE Powder",
    slug: "ecodiar-powder",
    tagline: "Oregano Essential Oil for Feed",
    description: "Steam distilled essential oil of the Oregano plant, naturally selected to contain the optimum balance of phenols such as Carvacrol and Thymol.",
    badge: "OMRI Listed",
    image: "/images/products/Ecodiar-Powder-Product-Image.png",
  },
  {
    name: "Ecodiar\u00AE Liquid",
    slug: "ecodiar-liquid",
    tagline: "Oregano Essential Oil for Water",
    description: "A unique combination of Oregano essential oils and an emulsifier to deliver optimal health benefits through the water.",
    image: "/images/products/Ecodiar-Liquid-Product-Image.png",
  },
  {
    name: "NuQuil\u00AE",
    slug: "nuquil",
    tagline: "Pure Saponins from Quillaja Tree",
    description: "100% natural saponin rich in triterpenoid saponins, glycol-components, tannins, antioxidants and polyphenols.",
    badge: "Organic",
    image: "/images/products/Nuquil-Product-Image.png",
  },
  {
    name: "MYKOGEO\u00AE",
    slug: "mykogeo",
    tagline: "Activated Micronized Attapulgite",
    description: "Natural hydrated magnesium aluminosilicate with proprietary processing to increase surface area and absorption capacity.",
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
    description: "100% natural hydrolysable tannin derived from the Chestnut castanea sativa tree. Rich in tannic acid.",
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
  { name: "Poultry", slug: "poultry", icon: "/images/species/poultry-icon.png" },
  { name: "Swine", slug: "swine", icon: "/images/species/swine-icon.png" },
  { name: "Beef", slug: "beef", icon: "/images/species/beef-icon.png" },
  { name: "Dairy", slug: "dairy", icon: "/images/species/dairy-icon.png" },
  { name: "Equine", slug: "equine", icon: "/images/species/equine-icon.png" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-dark via-green-brand to-green-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Nutritional Solutions
                <span className="block text-green-100 mt-2">for Animal Health</span>
              </h1>
              <p className="text-lg text-green-100/90 leading-relaxed mb-8 max-w-lg">
                At NUTRINAE, we specialize in providing cutting-edge, science-based nutritional solutions that elevate animal health and performance. Our focus on natural, high-quality ingredients ensures effective and sustainable feed solutions.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/products" className="bg-white text-green-brand px-8 py-3.5 rounded-full font-semibold hover:bg-green-50 transition-colors text-sm">
                  Explore Products
                </Link>
                <Link href="/contact" className="border-2 border-white/80 text-white px-8 py-3.5 rounded-full font-semibold hover:bg-white/10 transition-colors text-sm">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-center">
              <Image
                src="/images/about/hero-2.png"
                alt="Animal nutrition illustration"
                width={500}
                height={600}
                className="drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Products Section */}
      <section className="py-20 lg:py-28 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-brand font-semibold text-sm uppercase tracking-wider mb-2">Our Products</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Science-Based Natural Solutions</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Innovative nutritional solutions for optimal animal health, backed by rigorous research and natural ingredients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl hover:border-green-brand/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative w-32 h-32">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-bold text-navy group-hover:text-green-brand transition-colors leading-tight">
                    {product.name}
                  </h3>
                  {product.badge && (
                    <span className="bg-green-50 text-green-brand text-[10px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap">
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-green-brand/70 text-xs font-medium mb-2">{product.tagline}</p>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{product.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="inline-flex items-center gap-2 text-green-brand font-semibold hover:text-green-dark transition-colors">
              View All Products
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Species Section */}
      <section className="py-20 lg:py-28 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-green-brand font-semibold text-sm uppercase tracking-wider mb-2">Species We Serve</p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Tailored for Every Animal</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Specialized nutritional programs designed for the unique needs of each species.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {speciesList.map((s) => (
              <Link
                key={s.slug}
                href={`/species/${s.slug}`}
                className="group bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={s.icon}
                    alt={s.name}
                    width={100}
                    height={100}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold text-navy group-hover:text-green-brand transition-colors">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats / Trust Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-green-brand mb-2">35+</p>
              <p className="text-gray-500 text-sm">Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-brand mb-2">7</p>
              <p className="text-gray-500 text-sm">Natural Products</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-green-brand mb-2">5</p>
              <p className="text-gray-500 text-sm">Species Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-navy text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Image
            src="/images/logos/New-NUTRINAE_Symbol.png"
            alt=""
            width={80}
            height={80}
            className="mx-auto mb-8 opacity-60"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Animal Health Program?</h2>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed">
            With more than 35 years of experience in nutrition, health, and genetics, the NUTRINAE team is well positioned to help your operations maximize performance.
          </p>
          <Link href="/contact" className="bg-green-brand text-white px-10 py-4 rounded-full font-semibold hover:bg-green-light transition-colors text-sm inline-block">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
