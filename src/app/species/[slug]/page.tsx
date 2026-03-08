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
  { name: "Ecodiar® Powder", slug: "ecodiar-powder", desc: "Steam distilled Oregano essential oil for optimal gut health through the feed.", image: "/images/products/Ecodiar-Powder-Product-Image.png" },
  { name: "Ecodiar® Liquid", slug: "ecodiar-liquid", desc: "Oregano essential oils and emulsifier for health benefits through water.", image: "/images/products/Ecodiar-Liquid-Product-Image.png" },
  { name: "NuQuil®", slug: "nuquil", desc: "100% natural saponins from the Quillaja saponaria tree.", image: "/images/products/Nuquil-Product-Image.png" },
  { name: "MYKOGEO®", slug: "mykogeo", desc: "Natural clay with increased surface area and absorption capacity.", image: "/images/products/Mykogeo-Product-Image.webp" },
  { name: "MYKOGEO® Plus", slug: "mykogeo-plus", desc: "Clay blended with organic compounds for targeted toxin mitigation.", image: "/images/products/Mykogeo-Plus-Product-Image.png" },
  { name: "HyTann", slug: "hytann", desc: "100% natural hydrolysable tannin from the Chestnut tree.", image: "/images/products/Hytann-Product-Image.png" },
  { name: "NuBA", slug: "nuba", desc: "Coated, highly concentrated calcium butyrate." },
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
      <section className="relative bg-accent text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={species.heroImage} alt="" fill className="object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-accent/90 to-accent-light/50" />
        <div className="absolute bottom-0 right-0 w-[40%] h-[40%] bg-gradient-to-tl from-white/10 to-transparent rounded-tl-[80px]" />
        <div className="relative max-w-[1200px] mx-auto">
          <Link href="/species" className="text-white/70 hover:text-white text-sm font-bold uppercase tracking-wide mb-6 inline-flex items-center gap-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Species
          </Link>
          <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em] text-white">{species.name}</h1>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-lg text-body leading-relaxed mb-12">{species.intro}</p>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[3px] bg-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Recommended Products</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

            <div className="lg:col-span-1">
              <div className="bg-white border border-border rounded-[0.3rem] p-4 mb-6">
                <SpeciesIllustration species={slug} />
              </div>
              <div className="bg-accent rounded-[0.3rem] p-6 text-center">
                <h3 className="text-white font-bold font-heading mb-3">Need More Information?</h3>
                <Link href="/contact" className="bg-accent text-white px-6 py-3 rounded-[0.2rem] text-[13px] font-bold uppercase tracking-wide hover:bg-accent-light transition-colors inline-flex items-center gap-2">
                  Contact Us
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[3px] bg-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Scientific Basis</span>
          </div>
          <h2 className="text-2xl font-bold font-heading mb-6">Research</h2>
          <p className="text-body leading-relaxed max-w-4xl">{species.research}</p>
        </div>
      </section>
    </>
  );
}
