import Link from "next/link";

const products = [
  {
    name: "Ecodiar® Powder",
    slug: "ecodiar-powder",
    tagline: "Oregano Essential Oil for Optimal Animal Gut Health Through the Feed",
    description: "A steam distilled essential oil of the Oregano plant (Origanum vulgare ssp. hirtum) naturally selected to contain the optimum balance of phenols such as Carvacrol and Thymol.",
    badge: "OMRI Listed",
  },
  {
    name: "Ecodiar® Liquid",
    slug: "ecodiar-liquid",
    tagline: "Oregano Essential Oil for Optimal Animal Gut Health Through the Drinking Water",
    description: "A unique combination of Oregano essential oils and an emulsifier to deliver optimal health benefits through the water.",
  },
  {
    name: "NuQuil®",
    slug: "nuquil",
    tagline: "Pure Saponins for Improved Protozoa Mitigation and Immune System Support",
    description: "100% natural saponins derived from the Quillaja saponaria molina tree. Rich in triterpenoid saponins, glycol-components, tannins, antioxidants and polyphenols. No preservatives or carriers.",
    badge: "Organic",
  },
  {
    name: "MYKOGEO®",
    slug: "mykogeo",
    tagline: "Naturally Extracted Clay for Optimal Feed Flow and Immune System Support",
    description: "100% Attapulgite clay (natural hydrated magnesium aluminosilicate) produced through a proprietary technology to increase its surface area and absorption capacity.",
    badge: "OMRI Listed",
  },
  {
    name: "MYKOGEO® Plus",
    slug: "mykogeo-plus",
    tagline: "Proprietary Blend of Clay and Organic Plant Compounds for Targeted Toxin Mitigation",
    description: "A blend of Attapulgite clay and organic compounds formulated to target specific toxins produced by fungi.",
  },
  {
    name: "HyTann",
    slug: "hytann",
    tagline: "Water-Soluble Polyphenol Compounds for Enhanced Animal Health",
    description: "100% natural hydrolysable tannins derived from the Chestnut castanea sativa tree. Rich in tannic acid. No preservatives or carriers.",
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
      <section className="bg-gradient-to-br from-green-dark to-green-brand text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-green-100">Science-based natural solutions for animal nutrition</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-green-brand transition-all"
            >
              <div className="flex items-start justify-between mb-2">
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-brand transition-colors">
                  {product.name}
                </h2>
                {product.badge && (
                  <span className="bg-green-50 text-green-brand text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-green-brand text-sm font-medium mb-3">{product.tagline}</p>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
