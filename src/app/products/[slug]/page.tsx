import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const speciesList = [
  { name: "Poultry", slug: "poultry", icon: "/images/species/poultry-illustration.png" },
  { name: "Swine", slug: "swine", icon: "/images/species/swine-illustration.png" },
  { name: "Beef", slug: "beef", icon: "/images/species/beef-illustration.png" },
  { name: "Dairy", slug: "dairy", icon: "/images/species/dairy-illustration.png" },
  { name: "Equine", slug: "equine", icon: "/images/species/equine-illustration.png" },
];

const productData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  badge?: string;
  image?: string;
  badgeImage?: string;
  technicalBulletins?: string[];
  species: string[];
}> = {
  "ecodiar-powder": {
    name: "Ecodiar® Powder",
    tagline: "OREGANO ESSENTIAL OIL FOR OPTIMAL ANIMAL GUT HEALTH THROUGH THE FEED",
    description: "A steam distilled essential oil derived from the oregano plant (Origanum vulgare ssp. hirtum), naturally selected to contain optimal ratios of phenolic compounds including carvacrol and thymol.",
    badge: "OMRI Listed",
    image: "/images/products/Ecodiar-Powder-Product-Image.png",
    badgeImage: "/images/badges/omri-listed.jpg",
    benefits: [
      "Used as a flavor agent in poultry and livestock diets to increase feed intake",
      "Positively modulates the gut microbiome",
      "Proven feed additive shown to improve overall antioxidant status in animals",
    ],
    technicalBulletins: [
      "Effect of Oregano oil supplementation on performance and physiology in laying hens during the pullet phase",
      "The impact of dietary oregano essential oil supplementation on fatty acid composition and lipid stability in eggs stored at room temperature",
      "Oregano-based feed additive as an alternative approach to reduce Salmonella in poultry",
      "Growth Performance, Carcass Characteristics and Economic Parameters Comparison between Medicated and Antibiotics Free Programs in Wean-to-Finish Pigs",
    ],
    species: ["poultry", "swine", "beef", "dairy", "equine"],
  },
  "ecodiar-liquid": {
    name: "Ecodiar® Liquid",
    tagline: "OREGANO ESSENTIAL OIL FOR OPTIMAL ANIMAL GUT HEALTH THROUGH THE DRINKING WATER",
    description: "A unique combination of oregano essential oil, distilled water and an emulsifier to deliver optimal health benefits.",
    image: "/images/products/Ecodiar-Liquid-Product-Image.png",
    benefits: [
      "Used as a flavor agent in poultry and livestock water systems to increase water intake",
      "It helps preserve sow body condition during lactation due to increased feed intake",
      "It optimizes suckling piglet survival during lactation",
      "It maximizes optimal piglet weaning weight during lactation",
    ],
    technicalBulletins: [
      "Effect of Ecodiar® liquid supplementation on piglet wean weight and pre-wean mortality during lactation",
      "Growth Performance, Carcass Characteristics and Economic Parameters Comparison between Medicated and Antibiotics Free Programs in Wean-to-Finish Pigs",
      "Effect of Ecodiar® liquid during lactation on piglets pre-wean mortality and pigs weaned per sow",
    ],
    species: ["poultry", "swine", "beef", "dairy", "equine"],
  },
  "nuquil": {
    name: "NuQuil®",
    tagline: "PURE SAPONINS FOR IMPROVED PROTOZOA MITIGATION AND IMMUNE SYSTEM SUPPORT",
    description: "100% natural saponins derived from the Quillaja saponaria molina tree. It is rich in triterpenoid saponins, glycol-components, tannins, antioxidants and polyphenols with no preservatives or carriers.",
    badge: "Organic",
    image: "/images/products/Nuquil-Product-Image.png",
    badgeImage: "/images/badges/organic-seal.jpg",
    benefits: [
      "Improves gut health and overall animal performance",
      "Helps mitigate odor and ammonia concentration in animal facilities",
      "Natural immune-boosting properties",
    ],
    technicalBulletins: [
      "Growth Performance, Carcass Characteristics and Economic Parameters Comparison between Medicated and Antibiotics Free Programs in Wean-to-Finish Pigs",
    ],
    species: ["poultry", "swine", "beef", "dairy", "equine"],
  },
  "mykogeo": {
    name: "MYKOGEO®",
    tagline: "NATURALLY EXTRACTED CLAY FOR OPTIMAL FEED FLOW AND IMMUNE SYSTEM SUPPORT",
    description: "100% Attapulgite clay (natural hydrated magnesium aluminosilicate) produced through a proprietary technology to increase its surface area and absorption capacity.",
    badge: "OMRI Listed",
    image: "/images/products/Mykogeo-Product-Image.png",
    badgeImage: "/images/badges/omri-listed.jpg",
    benefits: [
      "One of the larger absorption molecules when compared to other minerals, producing drier litters in poultry and livestock animals",
      "Mitigates the adverse effects of toxins produced by fungi",
    ],
    species: ["poultry", "swine", "beef", "dairy", "equine"],
  },
  "mykogeo-plus": {
    name: "MYKOGEO® Plus",
    tagline: "PROPRIETARY BLEND OF CLAY AND ORGANIC PLANT COMPOUNDS FOR TARGETED TOXIN MITIGATION",
    description: "A blend of Attapulgite clay and organic compounds formulated to target specific toxins produced by fungi.",
    image: "/images/products/Mykogeo-Plus-Product-Image.png",
    benefits: [
      "One of the larger absorption molecules when compared to other minerals, producing drier litters in poultry and livestock animals",
      "Mitigate the negative effects of specific toxins produced by fungi",
    ],
    species: ["poultry", "swine", "beef", "dairy", "equine"],
  },
  "hytann": {
    name: "HyTann",
    tagline: "WATER-SOLUBLE POLYPHENOL COMPOUNDS FOR ENHANCED MONOGASTRIC AND RUMINANT ANIMAL HEALTH",
    description: "100% natural hydrolysable tannins derived from the Chestnut castanea sativa tree. Rich in tannic acid with no preservatives or carriers.",
    image: "/images/products/Hytann-Product-Image.png",
    benefits: [
      "Mitigates the harmful effects of oxidation and free radicals",
      "Helps support the immune system against inflammation, bacteria and viruses",
      "Tannic acid chelates (high affinity) with iron which is essential for most pathogenic bacteria",
    ],
    species: ["poultry", "swine", "beef", "dairy", "equine"],
  },
  "nuba": {
    name: "NuBA",
    tagline: "COATED, HIGHLY CONCENTRATED CALCIUM BUTYRATE",
    description: "Contains at least 65% butyric acid.",
    image: "/images/products/NuBA-Product-Image.png",
    benefits: [
      "Stimulates gut integrity",
      "Helps maintain a balanced intestinal flora",
      "Natural immune-boosting properties",
    ],
    technicalBulletins: [
      "Growth Performance, Carcass Characteristics and Economic Parameters Comparison between Medicated and Antibiotics Free Programs in Wean-to-Finish Pigs",
    ],
    species: ["poultry", "swine", "beef", "dairy", "equine"],
  },
};

export function generateStaticParams() {
  return Object.keys(productData).map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productData[slug];
  if (!product) notFound();

  return (
    <>
      <section className="relative bg-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <Link href="/products" className="text-body hover:text-accent text-sm font-bold uppercase tracking-wide mb-6 inline-flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Products
          </Link>
          <div className="flex items-start justify-between flex-wrap gap-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[3px] bg-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Product Details</span>
              </div>
              <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em] text-primary">{product.name}</h1>
              <p className="text-body text-lg mt-3 max-w-xl">{product.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-body leading-relaxed mb-10">{product.description}</p>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[3px] bg-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Key Benefits</span>
              </div>
              <div className="space-y-4 mb-12">
                {product.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-[0.2rem] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <p className="text-body leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>

              {product.technicalBulletins && product.technicalBulletins.length > 0 && (
                <>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-[3px] bg-accent" />
                    <span className="text-accent font-bold text-sm uppercase tracking-wider">Technical Bulletins</span>
                  </div>
                  <ul className="space-y-3">
                    {product.technicalBulletins.map((bulletin, i) => (
                      <li key={i} className="flex items-start gap-3 text-body">
                        <svg className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        <span className="leading-relaxed">{bulletin}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="lg:col-span-1 space-y-6">
              {product.image && (
                <div className="bg-white border border-border rounded-[0.3rem] p-8">
                  <div className="relative h-64">
                    <Image src={product.image} alt={product.name} fill className="object-contain" />
                  </div>
                </div>
              )}
              {product.badgeImage && (
                <div className="bg-white border border-border rounded-[0.3rem] p-6">
                  <div className="relative h-28">
                    <Image src={product.badgeImage} alt={product.badge || "Certification"} fill className="object-contain" />
                  </div>
                </div>
              )}

              {/* Species */}
              <div className="border border-border rounded-[0.3rem] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[3px] bg-accent" />
                  <span className="text-accent font-bold text-xs uppercase tracking-wider">Species</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.species
                    .map((s) => speciesList.find((sp) => sp.slug === s))
                    .filter(Boolean)
                    .map((sp, i) => (
                      <Link
                        key={sp!.slug}
                        href={`/species/${sp!.slug}`}
                        className="group relative flex flex-col items-center gap-1.5"
                      >
                        <div className="relative w-14 h-14 rounded-full bg-accent-50 flex items-center justify-center overflow-hidden">
                          <div
                            className="absolute inset-0 rounded-full bg-accent/20"
                            style={{ animation: `speciesPulse 2s ease-out infinite ${i * 0.3}s` }}
                          />
                          <Image src={sp!.icon} alt={sp!.name} width={36} height={36} className="object-contain relative z-10" />
                        </div>
                        <span className="text-[10px] font-bold text-body group-hover:text-accent transition-colors uppercase tracking-wide">
                          {sp!.name}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>

              {/* CTA */}
              <div className="relative bg-gradient-to-br from-accent to-dark rounded-lg p-8 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <div className="relative">
                  <h3 className="font-bold font-heading text-lg mb-2" style={{ color: '#ffffff' }}>Interested in {product.name}?</h3>
                  <p className="text-white/70 text-sm mb-5">Get in touch with our team for detailed product information.</p>
                  <Link href="/contact" className="bg-white text-accent px-6 py-3 rounded-[0.3rem] text-[13px] font-bold uppercase tracking-wide hover:bg-accent-50 transition-colors inline-flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.15)]">
                    Request Info
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes speciesPulse {
          0% { transform: scale(1); opacity: 0.4; }
          75%, 100% { transform: scale(1.8); opacity: 0; }
        }
      `}</style>
    </>
  );
}
