import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import SpeciesIllustration from "@/components/SpeciesIllustration";

const speciesData: Record<string, {
  name: string;
  heroImage: string;
  intro: string;
  research: string;
}> = {
  poultry: {
    name: "Poultry",
    heroImage: "/images/species/poultry-hero.png",
    intro: "NUTRINAE is dedicated to enhancing poultry health and performance through scientifically formulated solutions. Our products are designed to address the unique needs of poultry (broilers, layers and turkeys) at all stages of growth, ensuring optimal health, productivity, and well-being.",
    research: "NUTRINAE addresses poultry health through natural additives that improve gut health and immune support. NuQuil (Quillaja Saponaria) stabilizes gut microbiota, enhancing nutrient absorption and reducing intestinal inflammation, leading to better growth and feed efficiency. Ecodiar (Oregano Essential Oil) acts as a natural antimicrobial, targeting pathogens like Salmonella and Campylobacter, thereby improving flock health. The addition of beta glucans boosts the immune response, increasing disease resistance and reducing antibiotic reliance.",
  },
  swine: {
    name: "Swine",
    heroImage: "/images/species/swine-hero.png",
    intro: "NUTRINAE is dedicated to advancing the well-being and productivity of swine through innovative solutions. Our products are designed to support optimal growth, improve immune function, and enhance overall health. The company focuses on cutting-edge research and natural ingredients to address swine needs from piglets to mature hogs.",
    research: "NUTRINAE's natural products significantly enhance swine health and performance by focusing on gut health and immunity. NuQuil stabilizes gut bacteria, improving nutrient absorption and reducing post-weaning diarrhea risk. Ecodiar provides natural antimicrobial protection against pathogens like E. coli and Salmonella, promoting healthier pigs. Benefits include better feed efficiency and growth rates, enhanced immune function, and reduced antibiotic use.",
  },
  beef: {
    name: "Beef",
    heroImage: "/images/species/beef-hero.png",
    intro: "Beef cattle require specific nutritional and health management to thrive. Our tailored solutions ensure that your cattle receive the essential nutrients and support needed for optimal growth and productivity.",
    research: "NUTRINAE's products for beef cattle enhance health, growth, and productivity through natural means. NuQuil improves gut health by stabilizing the microbial population, leading to better nutrient absorption and growth performance. Ecodiar® offers antimicrobial protection against common pathogens, which helps reduce infections in feedlot settings. The incorporation of beta glucans strengthens immune function, allowing cattle to better withstand stressors and environmental challenges.",
  },
  dairy: {
    name: "Dairy",
    heroImage: "/images/species/dairy-hero.png",
    intro: "At NUTRINAE, we understand the specific needs of dairy animals. Our solutions are designed to support their overall health and productivity. With a focus on optimizing milk production and ensuring the well-being of dairy animals, we provide effective and natural products to meet their unique requirements.",
    research: "In dairy cattle, NUTRINAE's solutions focus on enhancing health, milk production, and overall herd performance. NuQuil promotes digestive health by stabilizing gut microbiota, leading to improved nutrient absorption and milk yield. Ecodiar provides natural antimicrobial benefits, particularly against mastitis-causing pathogens, improving udder health and milk quality. Additionally, beta glucans enhance the immune system, making cows more resilient during stressful periods.",
  },
  equine: {
    name: "Equine",
    heroImage: "/images/species/equine-hero.png",
    intro: "At NUTRINAE, we understand the unique nutritional needs of horses. Our specialized products are designed to support their health, enhance performance, and promote overall well-being. With a focus on quality and efficacy, we provide solutions tailored to help your horses thrive.",
    research: "For equine nutrition, NUTRINAE's products support digestive health, immune response, and overall performance. NuQuil helps maintain gut stability, which is crucial for preventing digestive issues such as colic and ulcers. Meanwhile, Ecodiar offers antimicrobial properties that protect against respiratory and gut infections. Additionally, beta glucans enhance immune function, allowing horses to better cope with stressors like training and competition.",
  },
};

const allProducts = [
  { name: "Ecodiar® Powder", slug: "ecodiar-powder", desc: "Steam distilled Oregano essential oil for optimal gut health through the feed.", image: "/images/products/Ecodiar-Powder-Product-Image.webp" },
  { name: "Ecodiar® Liquid", slug: "ecodiar-liquid", desc: "Oregano essential oils and emulsifier for health benefits through water.", image: "/images/products/Ecodiar-Liquid-Product-Image.webp" },
  { name: "NuQuil®", slug: "nuquil", desc: "100% natural saponins from the Quillaja saponaria tree.", image: "/images/products/Nuquil-Product-Image.webp" },
  { name: "MYKOGEO®", slug: "mykogeo", desc: "Natural clay with increased surface area and absorption capacity.", image: "/images/products/Mykogeo-Product-Image.webp" },
  { name: "MYKOGEO® Plus", slug: "mykogeo-plus", desc: "Clay blended with organic compounds for targeted toxin mitigation.", image: "/images/products/Mykogeo-Plus-Product-Image.webp" },
  { name: "HyTann", slug: "hytann", desc: "100% natural hydrolysable tannin from the Chestnut tree.", image: "/images/products/Hytann-Product-Image.webp" },
  { name: "NuBA", slug: "nuba", desc: "Coated, highly concentrated calcium butyrate.", image: "/images/products/NuBA-Product-Image.webp" },
];

export function generateStaticParams() {
  return Object.keys(speciesData).map((slug) => ({ slug }));
}

export default async function SpeciesDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const species = speciesData[slug];
  if (!species) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <Link href="/species" className="text-body hover:text-accent text-sm font-bold uppercase tracking-wide mb-6 inline-flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Species
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-[3px] bg-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Species</span>
          </div>
          <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em] text-primary">{species.name}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-lg text-body leading-relaxed max-w-4xl">{species.intro}</p>
        </div>
      </section>

      {/* Science Focus Key Visual */}
      <SpeciesIllustration species={slug} />

      {/* Recommended Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[3px] bg-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Recommended Products</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group border border-border rounded-[0.3rem] p-4 flex items-center gap-4 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:border-accent transition-all"
              >
                {p.image && (
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image src={p.image} alt={p.name} fill className="object-contain" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-sm group-hover:text-accent transition-colors font-heading">{p.name}</h3>
                  <p className="text-xs text-body mt-0.5">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-16 px-4 bg-light-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[3px] bg-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Scientific Basis</span>
          </div>
          <h2 className="text-2xl font-bold font-heading mb-6">Research</h2>
          <p className="text-body leading-relaxed max-w-4xl">{species.research}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-accent to-dark overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative max-w-[1200px] mx-auto text-center">
          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4" style={{ color: '#ffffff' }}>Need More Information?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">Our team of experts is ready to help you find the right solutions for your {species.name.toLowerCase()} operation.</p>
          <Link href="/contact" className="bg-white text-accent px-8 py-3.5 rounded-[0.3rem] text-[14px] font-bold uppercase tracking-wide hover:bg-accent-50 transition-colors inline-flex items-center gap-2 shadow-[0_4px_12px_rgba(0,0,0,0.15)]">
            Contact Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
