import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

const speciesData: Record<string, {
  name: string;
  icon: string;
  hero: string;
  intro: string;
  research: string;
}> = {
  poultry: {
    name: "Poultry",
    icon: "/images/species/poultry-icon.png",
    hero: "/images/species/poultry-hero.png",
    intro: "NUTRINAE is dedicated to enhancing poultry health and performance through scientifically formulated solutions. Our products are designed to address the unique needs of poultry (broilers, layers and turkeys) at all stages of growth, ensuring optimal health, productivity, and well-being.",
    research: "NUTRINAE addresses poultry health through natural additives that improve gut health and immune support. NuQuil (Quillaja Saponaria) stabilizes gut microbiota, enhancing nutrient absorption and reducing intestinal inflammation, leading to better growth and feed efficiency. Ecodiar (Oregano Essential Oil) acts as a natural antimicrobial, targeting pathogens like Salmonella and Campylobacter, thereby improving flock health. The addition of beta glucans boosts the immune response, increasing disease resistance and reducing antibiotic reliance. These products collectively support sustainable, antibiotic-free poultry production.",
  },
  swine: {
    name: "Swine",
    icon: "/images/species/swine-icon.png",
    hero: "/images/species/swine-hero.png",
    intro: "NUTRINAE is dedicated to advancing the well-being and productivity of swine through innovative solutions. Our products are designed to support optimal growth, improve immune function, and enhance overall health. The company focuses on cutting-edge research and natural ingredients to address swine needs from piglets to mature hogs.",
    research: "NUTRINAE\u2019s natural products significantly enhance swine health and performance by focusing on gut health and immunity. NuQuil stabilizes gut bacteria, improving nutrient absorption and reducing post-weaning diarrhea risk. Ecodiar provides natural antimicrobial protection against pathogens like E. coli and Salmonella, promoting healthier pigs. Benefits include better feed efficiency and growth rates, enhanced immune function, and reduced antibiotic use.",
  },
  beef: {
    name: "Beef",
    icon: "/images/species/beef-icon.png",
    hero: "/images/species/beef-hero.png",
    intro: "Beef cattle require specific nutritional and health management to thrive. Our tailored solutions ensure that your cattle receive the essential nutrients and support needed for optimal growth and productivity.",
    research: "NUTRINAE\u2019s products for beef cattle enhance health, growth, and productivity through natural means. NuQuil (Quillaja Saponaria) improves gut health by stabilizing the microbial population, leading to better nutrient absorption and growth performance. Ecodiar\u00AE (Oregano Essential Oil) offers antimicrobial protection against common pathogens, which helps reduce infections in feedlot settings. The incorporation of beta glucans strengthens immune function, allowing cattle to better withstand stressors and environmental challenges. Overall, these solutions support healthier beef production while minimizing antibiotic use, aligning with consumer demands for naturally raised meat.",
  },
  dairy: {
    name: "Dairy",
    icon: "/images/species/dairy-icon.png",
    hero: "/images/species/dairy-hero.png",
    intro: "At NUTRINAE, we understand the specific needs of dairy animals. Our solutions are designed to support their overall health and productivity. With a focus on optimizing milk production and ensuring the well-being of dairy animals, we provide effective and natural products to meet their unique requirements.",
    research: "In dairy cattle, NUTRINAE\u2019s solutions focus on enhancing health, milk production, and overall herd performance. NuQuil (Quillaja Saponaria) promotes digestive health by stabilizing gut microbiota, leading to improved nutrient absorption and milk yield. Ecodiar (Oregano Essential Oil) provides natural antimicrobial benefits, particularly against mastitis-causing pathogens, improving udder health and milk quality. Additionally, beta glucans enhance the immune system, making cows more resilient during stressful periods. These natural additives contribute to healthier, more productive dairy herds while reducing the need for antibiotics.",
  },
  equine: {
    name: "Equine",
    icon: "/images/species/equine-icon.png",
    hero: "/images/species/equine-hero.png",
    intro: "At NUTRINAE, we understand the unique nutritional needs of horses. Our specialized products are designed to support their health, enhance performance, and promote overall well-being. With a focus on quality and efficacy, we provide solutions tailored to help your horses thrive.",
    research: "For equine nutrition, NUTRINAE\u2019s products support digestive health, immune response, and overall performance. NuQuil helps maintain gut stability, which is crucial for preventing digestive issues such as colic and ulcers. Meanwhile, Ecodiar (Oregano Essential Oil) offers antimicrobial properties that protect against respiratory and gut infections. Additionally, beta glucans enhance immune function, allowing horses to better cope with stressors like training and competition. Together, these solutions promote healthier, more resilient horses, improving their performance and well-being naturally.",
  },
};

const allProducts = [
  { name: "Ecodiar\u00AE Powder", slug: "ecodiar-powder", desc: "Steam distilled essential oil of the Oregano plant for optimal gut health through the feed.", image: "/images/products/Ecodiar-Powder-Product-Image.png" },
  { name: "Ecodiar\u00AE Liquid", slug: "ecodiar-liquid", desc: "Oregano essential oils and an emulsifier for optimal health benefits through the water.", image: "/images/products/Ecodiar-Liquid-Product-Image.png" },
  { name: "NuQuil\u00AE", slug: "nuquil", desc: "100% natural saponin derived from the Quillaja saponaria molina tree.", image: "/images/products/Nuquil-Product-Image.png" },
  { name: "MYKOGEO\u00AE", slug: "mykogeo", desc: "Natural hydrated magnesium aluminosilicate with increased surface area.", image: "/images/products/Mykogeo-Product-Image.webp" },
  { name: "MYKOGEO\u00AE Plus", slug: "mykogeo-plus", desc: "Attapulgite clay blended with organic compounds for targeted toxin mitigation.", image: "/images/products/Mykogeo-Plus-Product-Image.png" },
  { name: "HyTann", slug: "hytann", desc: "100% natural hydrolysable tannin from the Chestnut tree.", image: "/images/products/Hytann-Product-Image.png" },
  { name: "NuBA", slug: "nuba", desc: "Coated, highly concentrated calcium butyrate with at least 65% butyric acid.", image: "/images/logos/New-NUTRINAE_Symbol.png" },
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
      <section className="bg-gradient-to-br from-green-dark via-green-brand to-green-light text-white py-16 lg:py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Link href="/species" className="inline-flex items-center gap-1.5 text-green-100/70 hover:text-white text-sm mb-8 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            All Species
          </Link>
          <div className="grid lg:grid-cols-[1fr_250px] gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{species.name}</h1>
              <p className="text-green-100/80 text-lg leading-relaxed max-w-2xl">{species.intro}</p>
            </div>
            <div className="hidden lg:flex justify-center">
              <Image
                src={species.hero}
                alt={species.name}
                width={220}
                height={280}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products for this species */}
      <section className="py-16 lg:py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          {/* Mobile species image */}
          <div className="lg:hidden flex justify-center mb-10">
            <Image src={species.hero} alt={species.name} width={160} height={200} />
          </div>

          <h2 className="text-2xl font-bold text-navy mb-2">Recommended Products</h2>
          <p className="text-gray-500 mb-8">Our full range of products can be used to support {species.name.toLowerCase()} health and performance.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {allProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group border border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-green-brand/20 transition-all duration-300"
              >
                <div className="flex justify-center mb-3">
                  <div className="relative w-20 h-20">
                    <Image src={p.image} alt={p.name} fill className="object-contain" />
                  </div>
                </div>
                <h3 className="font-bold text-navy group-hover:text-green-brand transition-colors text-sm mb-1">
                  {p.name}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
              </Link>
            ))}
          </div>

          {/* Research */}
          <div className="bg-green-50/50 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-brand rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
              <h2 className="text-2xl font-bold text-navy">Research</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">{species.research}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-navy mb-4">Need Help Choosing the Right Products?</h3>
          <p className="text-gray-500 mb-8">Our team has 35+ years of experience in animal nutrition and can help you find the perfect solution.</p>
          <Link href="/contact" className="bg-green-brand text-white px-10 py-3.5 rounded-full font-semibold hover:bg-green-dark transition-colors text-sm inline-block">
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  );
}
