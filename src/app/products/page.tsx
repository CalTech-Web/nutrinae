import Link from "next/link";
import Image from "next/image";

const products = [
  {
    name: "Ecodiar® Powder",
    slug: "ecodiar-powder",
    tagline: "Oregano Essential Oil for Optimal Animal Gut Health Through the Feed",
    description: "A steam distilled essential oil of the Oregano plant (Origanum vulgare ssp. hirtum) naturally selected to contain the optimum balance of phenols such as Carvacrol and Thymol.",
    image: "/images/products/Ecodiar-Powder-Product-Image.png",
    badge: "OMRI Listed",
  },
  {
    name: "Ecodiar® Liquid",
    slug: "ecodiar-liquid",
    tagline: "Oregano Essential Oil for Optimal Animal Gut Health Through the Drinking Water",
    description: "A unique combination of Oregano essential oils and an emulsifier to deliver optimal health benefits through the water.",
    image: "/images/products/Ecodiar-Liquid-Product-Image.png",
  },
  {
    name: "NuQuil®",
    slug: "nuquil",
    tagline: "Pure Saponins for Improved Protozoa Mitigation and Immune System Support",
    description: "100% natural saponins derived from the Quillaja saponaria molina tree. Rich in triterpenoid saponins, glycol-components, tannins, antioxidants and polyphenols.",
    image: "/images/products/Nuquil-Product-Image.png",
    badge: "Organic",
  },
  {
    name: "MYKOGEO®",
    slug: "mykogeo",
    tagline: "Naturally Extracted Clay for Optimal Feed Flow and Immune System Support",
    description: "100% Attapulgite clay produced through a proprietary technology to increase its surface area and absorption capacity.",
    image: "/images/products/Mykogeo-Product-Image.webp",
    badge: "OMRI Listed",
  },
  {
    name: "MYKOGEO® Plus",
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
  },
];

export default function ProductsPage() {
  return (
    <>
      <section className="relative bg-dark text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about/hero-1.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        </div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[30%] bg-gradient-to-tl from-accent/15 to-transparent rounded-tl-[80px]" />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Our Solutions</span>
            </div>
            <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em]">Our Products</h1>
            <p className="text-xl text-gray-300 mt-4">Science-based natural solutions for animal nutrition</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group bg-white border border-border rounded-[0.3rem] overflow-hidden hover:shadow-[0_5px_15px_rgba(0,0,0,0.15)] hover:border-accent transition-all flex flex-col"
            >
              {product.image && (
                <div className="relative h-52 bg-light-bg">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-6" />
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-[0.2rem]">
                      {product.badge}
                    </span>
                  )}
                </div>
              )}
              <div className="p-6 flex-1">
                <h2 className="text-xl font-bold group-hover:text-accent transition-colors font-heading mb-2">
                  {product.name}
                </h2>
                <p className="text-accent text-sm font-bold mb-3">{product.tagline}</p>
                <p className="text-body text-sm leading-relaxed">{product.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
