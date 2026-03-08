import Link from "next/link";

const products = [
  {
    name: "Ecodiar® Powder",
    slug: "ecodiar-powder",
    description: "A steam distilled essential oil of the Oregano plant (Origanum vulgare ssp. hirtum) naturally selected to contain the optimum balance of phenols such as Carvacrol and Thymol.",
    badge: "OMRI Listed",
  },
  {
    name: "Ecodiar® Liquid",
    slug: "ecodiar-liquid",
    description: "A unique combination of Oregano essential oils and an emulsifier to deliver optimal health benefits through the water.",
  },
  {
    name: "NuQuil®",
    slug: "nuquil",
    description: "A 100% natural saponin derived from the Quillaja saponaria molina tree. Rich in triterpenoid saponins, glycol-components, tannins, antioxidants and polyphenols. No preservatives or carriers.",
    badge: "Organic",
  },
  {
    name: "MYKOGEO®",
    slug: "mykogeo",
    description: "Natural hydrated magnesium aluminosilicate that has undergone a proprietary process to increase its surface area and absorption capacity.",
    badge: "OMRI Listed",
  },
  {
    name: "MYKOGEO® Plus",
    slug: "mykogeo-plus",
    description: "Natural hydrated magnesium aluminosilicate with proprietary processing, blended with organic compounds formulated to target specific fungi toxins.",
  },
  {
    name: "HyTann",
    slug: "hytann",
    description: "A 100% natural hydrolysable tannin derived from the Chestnut castanea sativa tree. Rich in tannic acid. No preservatives or carriers.",
  },
  {
    name: "NuBA",
    slug: "nuba",
    description: "Coated, highly concentrated calcium butyrate. Contains at least 65% butyric acid.",
  },
];

const speciesList = [
  { name: "Poultry", slug: "poultry", icon: "🐔" },
  { name: "Swine", slug: "swine", icon: "🐖" },
  { name: "Beef", slug: "beef", icon: "🐄" },
  { name: "Dairy", slug: "dairy", icon: "🥛" },
  { name: "Equine", slug: "equine", icon: "🐴" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-dark to-green-brand text-white py-24 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Nutritional Solutions for Animal Health
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6 text-green-100">
            To Improve Performance And Profitability
          </p>
          <p className="max-w-3xl mx-auto text-lg text-green-50 leading-relaxed mb-8">
            At NUTRINAE, we specialize in providing cutting-edge, science-based nutritional solutions
            that elevate animal health and performance. Our focus on natural, high-quality ingredients
            ensures that we deliver effective and sustainable feed solutions.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/products" className="bg-white text-green-brand px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
              Our Products
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Our Products</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Science-based natural solutions for optimal animal health
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-green-brand transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-brand transition-colors">
                    {product.name}
                  </h3>
                  {product.badge && (
                    <span className="bg-green-50 text-green-brand text-xs font-semibold px-2 py-1 rounded-full">
                      {product.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Species Section */}
      <section className="py-20 px-4 bg-green-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">Species We Serve</h2>
          <p className="text-center text-gray-500 mb-12">
            Tailored nutritional solutions for every animal
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {speciesList.map((s) => (
              <Link
                key={s.slug}
                href={`/species/${s.slug}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg hover:scale-105 transition-all"
              >
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-semibold text-gray-900">{s.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-brand text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Animal Health Program?</h2>
          <p className="text-green-100 mb-8 text-lg">
            With more than 35 years of experience in nutrition, health, and genetics, the NUTRINAE
            team is well positioned to help your operations maximize performance.
          </p>
          <Link href="/contact" className="bg-white text-green-brand px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
