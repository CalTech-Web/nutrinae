import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Ecodiar\u00AE Powder",
    slug: "ecodiar-powder",
    tagline: "Oregano Essential Oil for Optimal Animal Gut Health Through the Feed",
    description: "A steam distilled essential oil of the Oregano plant (Origanum vulgare ssp. hirtum) naturally selected to contain the optimum balance of phenols such as Carvacrol and Thymol.",
    badge: "OMRI Listed",
    image: "/images/products/Ecodiar-Powder-Product-Image.png",
  },
  {
    name: "Ecodiar\u00AE Liquid",
    slug: "ecodiar-liquid",
    tagline: "Oregano Essential Oil for Optimal Animal Gut Health Through the Drinking Water",
    description: "A unique combination of Oregano essential oils and an emulsifier to deliver optimal health benefits through the water.",
    image: "/images/products/Ecodiar-Liquid-Product-Image.png",
  },
  {
    name: "NuQuil\u00AE",
    slug: "nuquil",
    tagline: "Pure Saponins for Improved Protozoa Mitigation and Immune System Support",
    description: "100% natural saponins derived from the Quillaja saponaria molina tree. Rich in triterpenoid saponins, glycol-components, tannins, antioxidants and polyphenols.",
    badge: "Organic",
    image: "/images/products/Nuquil-Product-Image.png",
  },
  {
    name: "MYKOGEO\u00AE",
    slug: "mykogeo",
    tagline: "Naturally Extracted Clay for Optimal Feed Flow and Immune System Support",
    description: "100% Attapulgite clay produced through a proprietary technology to increase its surface area and absorption capacity.",
    badge: "OMRI Listed",
    image: "/images/products/Mykogeo-Product-Image.webp",
  },
  {
    name: "MYKOGEO\u00AE Plus",
    slug: "mykogeo-plus",
    tagline: "Proprietary Blend of Clay and Organic Plant Compounds for Targeted Toxin Mitigation",
    description: "A blend of Attapulgite clay and organic compounds formulated to target specific toxins produced by fungi.",
    image: "/images/products/Mykogeo-Plus-Product-Image.png",
  },
  {
    name: "HyTann",
    slug: "hytann",
    tagline: "Water-Soluble Polyphenol Compounds for Enhanced Animal Health",
    description: "100% natural hydrolysable tannins derived from the Chestnut castanea sativa tree. Rich in tannic acid. No preservatives or carriers.",
    image: "/images/products/Hytann-Product-Image.png",
  },
  {
    name: "NuBA",
    slug: "nuba",
    tagline: "Coated, Highly Concentrated Calcium Butyrate",
    description: "Contains at least 65% butyric acid. Stimulates gut integrity and helps maintain balanced intestinal flora.",
    image: "/images/logos/New-NUTRINAE_Symbol.png",
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-dark via-green-brand to-green-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-100/80 font-medium text-sm uppercase tracking-wider mb-3">Science-Based Solutions</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg text-green-100/90 max-w-2xl mx-auto">
            Natural nutritional solutions backed by rigorous scientific research for optimal animal health and performance.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto space-y-6">
          {products.map((product, index) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 items-center border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-green-brand/20 transition-all duration-300"
            >
              <div className="flex justify-center">
                <div className="relative w-40 h-40">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-2xl font-bold text-navy group-hover:text-green-brand transition-colors">
                    {product.name}
                  </h2>
                  <div className="flex gap-2 flex-shrink-0">
                    {product.badge && (
                      <span className="bg-green-50 text-green-brand text-xs font-bold px-3 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-green-brand/70 text-sm font-medium mb-3">{product.tagline}</p>
                <p className="text-gray-500 leading-relaxed">{product.description}</p>
                <span className="inline-flex items-center gap-1.5 text-green-brand font-semibold text-sm mt-4 group-hover:gap-3 transition-all">
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Badges Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-8">Certified and Trusted</p>
          <div className="flex items-center justify-center gap-12">
            <Image src="/images/badges/omri-listed.jpg" alt="OMRI Listed" width={120} height={75} className="opacity-80 hover:opacity-100 transition-opacity" />
            <Image src="/images/badges/organic-seal.jpg" alt="USDA Organic" width={75} height={75} className="opacity-80 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </section>
    </>
  );
}
