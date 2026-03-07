import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const productData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  badge?: string;
  badgeImage?: string;
  image: string;
  technicalBulletins?: string[];
}> = {
  "ecodiar-powder": {
    name: "Ecodiar\u00AE Powder",
    tagline: "Oregano Essential Oil for Optimal Animal Gut Health Through the Feed",
    description: "A steam distilled essential oil derived from the oregano plant (Origanum vulgare ssp. hirtum), naturally selected to contain optimal ratios of phenolic compounds including carvacrol and thymol.",
    badge: "OMRI Listed",
    badgeImage: "/images/badges/omri-listed.jpg",
    image: "/images/products/Ecodiar-Powder-Product-Image.png",
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
  },
  "ecodiar-liquid": {
    name: "Ecodiar\u00AE Liquid",
    tagline: "Oregano Essential Oil for Optimal Animal Gut Health Through the Drinking Water",
    description: "A unique combination of oregano essential oil, distilled water and an emulsifier to deliver optimal health benefits.",
    image: "/images/products/Ecodiar-Liquid-Product-Image.png",
    benefits: [
      "Used as a flavor agent in poultry and livestock water systems to increase water intake",
      "It helps preserve sow body condition during lactation due to increased feed intake",
      "It optimizes suckling piglet survival during lactation",
      "It maximizes optimal piglet weaning weight during lactation",
    ],
    technicalBulletins: [
      "Effect of Ecodiar\u00AE liquid supplementation on piglet wean weight and pre-wean mortality during lactation",
      "Growth Performance, Carcass Characteristics and Economic Parameters Comparison between Medicated and Antibiotics Free Programs in Wean-to-Finish Pigs",
      "Effect of Ecodiar\u00AE liquid during lactation on piglets pre-wean mortality and pigs weaned per sow",
    ],
  },
  "nuquil": {
    name: "NuQuil\u00AE",
    tagline: "Pure Saponins for Improved Protozoa Mitigation and Immune System Support",
    description: "100% natural saponins derived from the Quillaja saponaria molina tree. It is rich in triterpenoid saponins, glycol-components, tannins, antioxidants and polyphenols with no preservatives or carriers.",
    badge: "Organic",
    badgeImage: "/images/badges/organic-seal.jpg",
    image: "/images/products/Nuquil-Product-Image.png",
    benefits: [
      "Improves gut health and overall animal performance",
      "Helps mitigate odor and ammonia concentration in animal facilities",
      "Natural immune-boosting properties",
    ],
    technicalBulletins: [
      "Growth Performance, Carcass Characteristics and Economic Parameters Comparison between Medicated and Antibiotics Free Programs in Wean-to-Finish Pigs",
    ],
  },
  "mykogeo": {
    name: "MYKOGEO\u00AE",
    tagline: "Naturally Extracted Clay for Optimal Feed Flow and Immune System Support",
    description: "100% Attapulgite clay (natural hydrated magnesium aluminosilicate) produced through a proprietary technology to increase its surface area and absorption capacity.",
    badge: "OMRI Listed",
    badgeImage: "/images/badges/omri-listed.jpg",
    image: "/images/products/Mykogeo-Product-Image.webp",
    benefits: [
      "One of the larger absorption molecules when compared to other minerals, producing drier litters in poultry and livestock animals",
      "Mitigates the adverse effects of toxins produced by fungi",
    ],
  },
  "mykogeo-plus": {
    name: "MYKOGEO\u00AE Plus",
    tagline: "Proprietary Blend of Clay and Organic Plant Compounds for Targeted Toxin Mitigation",
    description: "A blend of Attapulgite clay and organic compounds formulated to target specific toxins produced by fungi.",
    image: "/images/products/Mykogeo-Plus-Product-Image.png",
    benefits: [
      "One of the larger absorption molecules when compared to other minerals, producing drier litters in poultry and livestock animals",
      "Mitigate the negative effects of specific toxins produced by fungi",
    ],
  },
  "hytann": {
    name: "HyTann",
    tagline: "Water-Soluble Polyphenol Compounds for Enhanced Monogastric and Ruminant Animal Health",
    description: "100% natural hydrolysable tannins derived from the Chestnut castanea sativa tree. Rich in tannic acid with no preservatives or carriers.",
    image: "/images/products/Hytann-Product-Image.png",
    benefits: [
      "Mitigates the harmful effects of oxidation and free radicals",
      "Helps support the immune system against inflammation, bacteria and viruses",
      "Tannic acid chelates (high affinity) with iron which is essential for most pathogenic bacteria",
    ],
  },
  "nuba": {
    name: "NuBA",
    tagline: "Coated, Highly Concentrated Calcium Butyrate",
    description: "Contains at least 65% butyric acid.",
    image: "/images/logos/New-NUTRINAE_Symbol.png",
    benefits: [
      "Stimulates gut integrity",
      "Helps maintain a balanced intestinal flora",
      "Natural immune-boosting properties",
    ],
    technicalBulletins: [
      "Growth Performance, Carcass Characteristics and Economic Parameters Comparison between Medicated and Antibiotics Free Programs in Wean-to-Finish Pigs",
    ],
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
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-dark via-green-brand to-green-light text-white py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/products" className="inline-flex items-center gap-1.5 text-green-100/70 hover:text-white text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Products
          </Link>
          <div className="grid lg:grid-cols-[1fr_300px] gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h1 className="text-4xl md:text-5xl font-bold">{product.name}</h1>
                {product.badge && (
                  <span className="bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-green-100/80 text-lg">{product.tagline}</p>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-60 h-60 bg-white/10 rounded-3xl p-4 backdrop-blur-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Mobile product image */}
          <div className="lg:hidden flex justify-center mb-10">
            <div className="relative w-48 h-48">
              <Image src={product.image} alt={product.name} fill className="object-contain" />
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-12">{product.description}</p>

          <h2 className="text-2xl font-bold text-navy mb-8">Key Benefits</h2>
          <div className="space-y-4 mb-14">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-4 bg-green-50/50 rounded-xl p-5">
                <div className="w-8 h-8 bg-green-brand rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
                </div>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>

          {product.technicalBulletins && product.technicalBulletins.length > 0 && (
            <div className="border-t border-gray-100 pt-12">
              <h2 className="text-2xl font-bold text-navy mb-6">Technical Bulletins</h2>
              <div className="space-y-3">
                {product.technicalBulletins.map((bulletin, i) => (
                  <div key={i} className="flex items-start gap-3 text-gray-600">
                    <svg className="w-5 h-5 text-green-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    <p className="text-sm">{bulletin}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {product.badgeImage && (
            <div className="border-t border-gray-100 pt-12 mt-12">
              <div className="flex items-center gap-4">
                <Image src={product.badgeImage} alt={product.badge || ""} width={80} height={50} className="object-contain" />
                <p className="text-sm text-gray-500">{product.badge} certified product</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Interested in {product.name}?</h3>
          <p className="text-gray-500 mb-8">Get in touch with our team to learn more about how this product can benefit your operations.</p>
          <Link href="/contact" className="bg-green-brand text-white px-10 py-3.5 rounded-full font-semibold hover:bg-green-dark transition-colors text-sm inline-block">
            Request More Information
          </Link>
        </div>
      </section>
    </>
  );
}
