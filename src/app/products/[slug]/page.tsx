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
      <section className="relative bg-navy text-white py-20 lg:py-28 px-4 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 grid-pattern" />
        <div className="hero-blob w-[500px] h-[500px] bg-green-brand -top-40 -right-40" />
        <div className="hero-blob w-[350px] h-[350px] bg-green-dark bottom-0 left-0" />
        <div className="hero-blob w-[250px] h-[250px] bg-green-light top-1/2 left-1/3" />

        <div className="relative max-w-6xl mx-auto">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white text-sm mb-10 transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            All Products
          </Link>

          <div className="grid lg:grid-cols-[1fr_320px] gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-[1.1]">{product.name}</h1>
                {product.badge && (
                  <span className="bg-white/10 backdrop-blur-sm border border-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    {product.badge}
                  </span>
                )}
              </div>
              <p className="text-lg text-gray-400 leading-relaxed max-w-xl">{product.tagline}</p>
            </div>

            {/* Desktop product image */}
            <div className="hidden lg:flex justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-brand/20 to-green-dark/20 rounded-[3rem] blur-3xl" />
              <div className="relative w-64 h-64 bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-6 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 animate-float drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Mobile product image */}
          <div className="lg:hidden flex justify-center mb-12">
            <div className="relative w-52 h-52 bg-gradient-to-br from-green-50 to-gray-50 rounded-[2rem] p-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-4 animate-float"
              />
            </div>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up">
            <p className="text-lg text-gray-600 leading-relaxed mb-16">{product.description}</p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-brand rounded-xl flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-navy">Key Benefits</h2>
            </div>
            <div className="space-y-4 stagger-children">
              {product.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 bg-gradient-to-r from-green-50/80 to-transparent rounded-xl p-5 border border-green-100/40 hover:border-green-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-8 h-8 bg-green-brand rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Bulletins */}
          {product.technicalBulletins && product.technicalBulletins.length > 0 && (
            <div className="border-t border-gray-100 pt-14 mb-14">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-navy">Technical Bulletins</h2>
              </div>
              <div className="space-y-3 stagger-children">
                {product.technicalBulletins.map((bulletin, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-gray-600 bg-gray-50/80 rounded-lg p-4 border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <svg className="w-5 h-5 text-green-brand flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <p className="text-sm leading-relaxed">{bulletin}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Certification Badge */}
          {product.badgeImage && (
            <div className="border-t border-gray-100 pt-12">
              <div className="flex items-center gap-5 bg-gradient-to-r from-green-50/60 to-transparent rounded-xl p-6 border border-green-100/30">
                <Image src={product.badgeImage} alt={product.badge || ""} width={80} height={50} className="object-contain" />
                <div>
                  <p className="text-sm font-semibold text-navy">{product.badge}</p>
                  <p className="text-sm text-gray-500">Certified product</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 lg:py-32 px-4 bg-navy text-white overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="hero-blob w-[500px] h-[500px] bg-green-dark -bottom-60 -left-40" />
        <div className="hero-blob w-[400px] h-[400px] bg-green-brand -top-40 -right-40" />

        <div className="relative max-w-2xl mx-auto text-center animate-fade-in-up">
          <Image
            src="/images/logos/New-NUTRINAE_Symbol.png"
            alt=""
            width={60}
            height={60}
            className="mx-auto mb-8 opacity-40"
          />
          <h3 className="text-3xl md:text-4xl font-bold mb-5 leading-tight">
            Interested in {product.name}?
          </h3>
          <p className="text-gray-400 mb-10 text-lg leading-relaxed max-w-lg mx-auto">
            Get in touch with our team to learn more about how this product can benefit your operations.
          </p>
          <Link
            href="/contact"
            className="group bg-green-brand text-white px-10 py-4 rounded-full font-semibold hover:bg-green-light transition-all text-sm inline-flex items-center gap-2"
          >
            Request More Information
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
