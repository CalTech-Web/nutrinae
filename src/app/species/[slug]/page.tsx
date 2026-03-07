import Link from "next/link";
import { notFound } from "next/navigation";

const speciesData: Record<string, {
  name: string;
  icon: string;
  intro: string;
  research: string;
}> = {
  poultry: {
    name: "Poultry",
    icon: "🐔",
    intro: "NUTRINAE is dedicated to enhancing poultry health and performance through scientifically formulated solutions. Our products are designed to address the unique needs of poultry (broilers, layers and turkeys) at all stages of growth, ensuring optimal health, productivity, and well-being.",
    research: "NUTRINAE addresses poultry health through natural additives that improve gut health and immune support. NuQuil (Quillaja Saponaria) stabilizes gut microbiota, enhancing nutrient absorption and reducing intestinal inflammation, leading to better growth and feed efficiency. Ecodiar (Oregano Essential Oil) acts as a natural antimicrobial, targeting pathogens like Salmonella and Campylobacter, thereby improving flock health. The addition of beta glucans boosts the immune response, increasing disease resistance and reducing antibiotic reliance. These products collectively support sustainable, antibiotic-free poultry production.",
  },
  swine: {
    name: "Swine",
    icon: "🐖",
    intro: "NUTRINAE is dedicated to advancing the well-being and productivity of swine through innovative solutions. Our products are designed to support optimal growth, improve immune function, and enhance overall health. The company focuses on cutting-edge research and natural ingredients to address swine needs from piglets to mature hogs.",
    research: "NUTRINAE's natural products significantly enhance swine health and performance by focusing on gut health and immunity. NuQuil stabilizes gut bacteria, improving nutrient absorption and reducing post-weaning diarrhea risk. Ecodiar provides natural antimicrobial protection against pathogens like E. coli and Salmonella, promoting healthier pigs. Benefits include better feed efficiency and growth rates, enhanced immune function, and reduced antibiotic use.",
  },
  beef: {
    name: "Beef",
    icon: "🐄",
    intro: "Beef cattle require specific nutritional and health management to thrive. Our tailored solutions ensure that your cattle receive the essential nutrients and support needed for optimal growth and productivity.",
    research: "NUTRINAE's products for beef cattle enhance health, growth, and productivity through natural means. NuQuil (Quillaja Saponaria) improves gut health by stabilizing the microbial population, leading to better nutrient absorption and growth performance. Ecodiar® (Oregano Essential Oil) offers antimicrobial protection against common pathogens, which helps reduce infections in feedlot settings. The incorporation of beta glucans strengthens immune function, allowing cattle to better withstand stressors and environmental challenges. Overall, these solutions support healthier beef production while minimizing antibiotic use, aligning with consumer demands for naturally raised meat.",
  },
  dairy: {
    name: "Dairy",
    icon: "🥛",
    intro: "At NUTRINAE, we understand the specific needs of dairy animals. Our solutions are designed to support their overall health and productivity. With a focus on optimizing milk production and ensuring the well-being of dairy animals, we provide effective and natural products to meet their unique requirements.",
    research: "In dairy cattle, NUTRINAE's solutions focus on enhancing health, milk production, and overall herd performance. NuQuil (Quillaja Saponaria) promotes digestive health by stabilizing gut microbiota, leading to improved nutrient absorption and milk yield. Ecodiar (Oregano Essential Oil) provides natural antimicrobial benefits, particularly against mastitis-causing pathogens, improving udder health and milk quality. Additionally, beta glucans enhance the immune system, making cows more resilient during stressful periods. These natural additives contribute to healthier, more productive dairy herds while reducing the need for antibiotics.",
  },
  equine: {
    name: "Equine",
    icon: "🐴",
    intro: "At NUTRINAE, we understand the unique nutritional needs of horses. Our specialized products are designed to support their health, enhance performance, and promote overall well-being. With a focus on quality and efficacy, we provide solutions tailored to help your horses thrive.",
    research: "For equine nutrition, NUTRINAE's products support digestive health, immune response, and overall performance. NuQuil helps maintain gut stability, which is crucial for preventing digestive issues such as colic and ulcers. Meanwhile, Ecodiar (Oregano Essential Oil) offers antimicrobial properties that protect against respiratory and gut infections. Additionally, beta glucans enhance immune function, allowing horses to better cope with stressors like training and competition. Together, these solutions promote healthier, more resilient horses, improving their performance and well-being naturally.",
  },
};

const allProducts = [
  { name: "Ecodiar® Powder", slug: "ecodiar-powder", desc: "Steam distilled essential oil of the Oregano plant for optimal gut health through the feed." },
  { name: "Ecodiar® Liquid", slug: "ecodiar-liquid", desc: "Oregano essential oils and an emulsifier for optimal health benefits through the water." },
  { name: "NuQuil®", slug: "nuquil", desc: "100% natural saponin derived from the Quillaja saponaria molina tree." },
  { name: "MYKOGEO®", slug: "mykogeo", desc: "Natural hydrated magnesium aluminosilicate with increased surface area and absorption capacity." },
  { name: "MYKOGEO® Plus", slug: "mykogeo-plus", desc: "Attapulgite clay blended with organic compounds for targeted toxin mitigation." },
  { name: "HyTann", slug: "hytann", desc: "100% natural hydrolysable tannin from the Chestnut tree. Rich in tannic acid." },
  { name: "NuBA", slug: "nuba", desc: "Coated, highly concentrated calcium butyrate with at least 65% butyric acid." },
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
      <section className="bg-gradient-to-br from-green-dark to-green-brand text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <Link href="/species" className="text-green-200 hover:text-white text-sm mb-4 inline-block">
            ← All Species
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{species.icon}</span>
            <h1 className="text-4xl md:text-5xl font-bold">{species.name}</h1>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 leading-relaxed mb-12">{species.intro}</p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {allProducts.map((p) => (
              <Link
                key={p.slug}
                href={`/products/${p.slug}`}
                className="group border border-gray-200 rounded-lg p-5 hover:shadow-md hover:border-green-brand transition-all"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-green-brand transition-colors mb-1">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-600">{p.desc}</p>
              </Link>
            ))}
          </div>

          <div className="bg-green-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Research</h2>
            <p className="text-gray-700 leading-relaxed">{species.research}</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 bg-green-50 text-center">
        <Link href="/contact" className="bg-green-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-green-dark transition inline-block">
          Request More Information
        </Link>
      </section>
    </>
  );
}
