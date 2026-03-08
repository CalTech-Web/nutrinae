import Link from "next/link";
import { notFound } from "next/navigation";

const productData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  benefits: string[];
  badge?: string;
  technicalBulletins?: string[];
}> = {
  "ecodiar-powder": {
    name: "Ecodiar® Powder",
    tagline: "OREGANO ESSENTIAL OIL FOR OPTIMAL ANIMAL GUT HEALTH THROUGH THE FEED",
    description: "A steam distilled essential oil derived from the oregano plant (Origanum vulgare ssp. hirtum), naturally selected to contain optimal ratios of phenolic compounds including carvacrol and thymol.",
    badge: "OMRI Listed",
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
    name: "Ecodiar® Liquid",
    tagline: "OREGANO ESSENTIAL OIL FOR OPTIMAL ANIMAL GUT HEALTH THROUGH THE DRINKING WATER",
    description: "A unique combination of oregano essential oil, distilled water and an emulsifier to deliver optimal health benefits.",
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
  },
  "nuquil": {
    name: "NuQuil®",
    tagline: "PURE SAPONINS FOR IMPROVED PROTOZOA MITIGATION AND IMMUNE SYSTEM SUPPORT",
    description: "100% natural saponins derived from the Quillaja saponaria molina tree. It is rich in triterpenoid saponins, glycol-components, tannins, antioxidants and polyphenols with no preservatives or carriers.",
    badge: "Organic",
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
    name: "MYKOGEO®",
    tagline: "NATURALLY EXTRACTED CLAY FOR OPTIMAL FEED FLOW AND IMMUNE SYSTEM SUPPORT",
    description: "100% Attapulgite clay (natural hydrated magnesium aluminosilicate) produced through a proprietary technology to increase its surface area and absorption capacity.",
    badge: "OMRI Listed",
    benefits: [
      "One of the larger absorption molecules when compared to other minerals, producing drier litters in poultry and livestock animals",
      "Mitigates the adverse effects of toxins produced by fungi",
    ],
  },
  "mykogeo-plus": {
    name: "MYKOGEO® Plus",
    tagline: "PROPRIETARY BLEND OF CLAY AND ORGANIC PLANT COMPOUNDS FOR TARGETED TOXIN MITIGATION",
    description: "A blend of Attapulgite clay and organic compounds formulated to target specific toxins produced by fungi.",
    benefits: [
      "One of the larger absorption molecules when compared to other minerals, producing drier litters in poultry and livestock animals",
      "Mitigate the negative effects of specific toxins produced by fungi",
    ],
  },
  "hytann": {
    name: "HyTann",
    tagline: "WATER-SOLUBLE POLYPHENOL COMPOUNDS FOR ENHANCED MONOGASTRIC AND RUMINANT ANIMAL HEALTH",
    description: "100% natural hydrolysable tannins derived from the Chestnut castanea sativa tree. Rich in tannic acid with no preservatives or carriers.",
    benefits: [
      "Mitigates the harmful effects of oxidation and free radicals",
      "Helps support the immune system against inflammation, bacteria and viruses",
      "Tannic acid chelates (high affinity) with iron which is essential for most pathogenic bacteria",
    ],
  },
  "nuba": {
    name: "NuBA",
    tagline: "COATED, HIGHLY CONCENTRATED CALCIUM BUTYRATE",
    description: "Contains at least 65% butyric acid.",
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
      <section className="bg-gradient-to-br from-green-dark to-green-brand text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/products" className="text-green-200 hover:text-white text-sm mb-4 inline-block">
            ← All Products
          </Link>
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{product.name}</h1>
              <p className="text-green-100 text-lg">{product.tagline}</p>
            </div>
            {product.badge && (
              <span className="bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
                {product.badge}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">{product.description}</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits</h2>
          <div className="space-y-4 mb-12">
            {product.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-brand font-bold text-sm">{i + 1}</span>
                </div>
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>

          {product.technicalBulletins && product.technicalBulletins.length > 0 && (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Bulletins</h2>
              <ul className="space-y-3">
                {product.technicalBulletins.map((bulletin, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-600">
                    <span className="text-green-brand mt-1">•</span>
                    {bulletin}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <section className="py-12 px-4 bg-green-50 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in {product.name}?</h3>
        <Link href="/contact" className="bg-green-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-green-dark transition inline-block">
          Request More Information
        </Link>
      </section>
    </>
  );
}
