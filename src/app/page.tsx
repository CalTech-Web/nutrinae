import Link from "next/link";
import Image from "next/image";
import HeroProductSlideshow from "@/components/HeroProductSlideshow";

const products = [
  {
    name: "Ecodiar® Powder",
    slug: "ecodiar-powder",
    description: "Steam distilled Oregano essential oil for optimal gut health through the feed.",
    image: "/images/products/Ecodiar-Powder-Product-Image.png",
    badge: "OMRI Listed",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
  },
  {
    name: "Ecodiar® Liquid",
    slug: "ecodiar-liquid",
    description: "Oregano essential oils and emulsifier for health benefits through drinking water.",
    image: "/images/products/Ecodiar-Liquid-Product-Image.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
    ),
  },
  {
    name: "NuQuil®",
    slug: "nuquil",
    description: "100% natural saponins from the Quillaja saponaria tree for immune support.",
    image: "/images/products/Nuquil-Product-Image.png",
    badge: "Organic",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    name: "MYKOGEO®",
    slug: "mykogeo",
    description: "Natural clay with proprietary processing for feed flow and toxin mitigation.",
    image: "/images/products/Mykogeo-Product-Image.png",
    badge: "OMRI Listed",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" /></svg>
    ),
  },
  {
    name: "MYKOGEO® Plus",
    slug: "mykogeo-plus",
    description: "Blend of clay and organic plant compounds for targeted toxin mitigation.",
    image: "/images/products/Mykogeo-Plus-Product-Image.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    ),
  },
  {
    name: "HyTann",
    slug: "hytann",
    description: "Water-soluble polyphenol compounds from Chestnut tree for enhanced animal health.",
    image: "/images/products/Hytann-Product-Image.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
    ),
  },
  {
    name: "NuBA",
    slug: "nuba",
    description: "Coated, highly concentrated calcium butyrate for gut integrity and balanced flora.",
    image: "/images/products/NuBA-Product-Image.png",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
];

const challenges = [
  {
    title: "Gut Health Management",
    desc: "Natural solutions to optimize gut microbiome and improve nutrient absorption.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    ),
  },
  {
    title: "Antibiotic Reduction",
    desc: "Science-based alternatives to reduce or eliminate antibiotics in production.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    ),
  },
  {
    title: "Toxin Risk Management",
    desc: "Advanced clay-based solutions to mitigate mycotoxin contamination in feed.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    ),
  },
  {
    title: "Performance Optimization",
    desc: "Proven feed additives to improve growth rates, feed efficiency, and overall health.",
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
    ),
  },
];

const speciesList = [
  { name: "Poultry", slug: "poultry", image: "/images/species/poultry-illustration.png", desc: "Enhancing poultry health and performance through scientifically formulated solutions for broilers, layers, and turkeys." },
  { name: "Swine", slug: "swine", image: "/images/species/swine-illustration.png", desc: "Advancing swine well-being and productivity with solutions that support optimal growth and immune function." },
  { name: "Beef", slug: "beef", image: "/images/species/beef-illustration.png", desc: "Tailored nutritional solutions to ensure your cattle receive the essential support needed for optimal growth." },
  { name: "Dairy", slug: "dairy", image: "/images/species/dairy-illustration.png", desc: "Supporting overall dairy herd health and productivity with solutions designed for their specific needs." },
  { name: "Equine", slug: "equine", image: "/images/species/equine-illustration.png", desc: "Specialized products to support horse health, enhance performance, and promote overall well-being." },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white min-h-[85vh] flex items-center overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left — Text content */}
            <div className="flex-1 max-w-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[3px] bg-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Science. Focus. Innovation.</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-primary leading-[1.15] mb-6 font-heading tracking-[-0.02em]">
                Nutritional Solutions<br />
                <span className="text-accent">for Animal Health</span>
              </h1>
              <p className="text-xl text-accent/80 mb-4 font-medium">
                To Improve Performance And Profitability
              </p>
              <p className="text-body leading-relaxed mb-10 max-w-lg">
                At NUTRINAE, we specialize in cutting-edge, science-based nutritional solutions
                that elevate animal health and performance through natural, high-quality ingredients.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/products" className="bg-accent text-white px-8 py-3.5 rounded-[0.2rem] text-[14px] font-bold uppercase tracking-wide hover:bg-dark transition-colors inline-flex items-center gap-2">
                  Our Products
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </Link>
                <Link href="/contact" className="border-2 border-accent text-accent px-8 py-3.5 rounded-[0.2rem] text-[14px] font-bold uppercase tracking-wide hover:bg-accent hover:text-white transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right — Product slideshow */}
            <div className="flex-1 w-full max-w-[520px]">
              <HeroProductSlideshow />
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 px-4 bg-light-bg relative overflow-hidden">
        {/* Subtle decorative background */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">What We Solve</span>
              <div className="w-8 h-[3px] bg-accent" />
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold font-heading">What Are Your Challenges?</h2>
            <p className="text-body mt-3 max-w-xl mx-auto">
              We address the most pressing challenges in animal nutrition with proven, natural solutions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((c, idx) => (
              <div key={c.title} className="group relative bg-white rounded-[0.3rem] p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(46,125,50,0.15)] hover:-translate-y-1 transition-all duration-300">
                {/* Green top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent rounded-t-[0.3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Number badge */}
                <span className="absolute top-4 right-4 text-[40px] font-bold font-heading text-accent/[0.07] leading-none select-none">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-5 text-accent group-hover:bg-accent group-hover:text-white group-hover:rounded-full transition-all duration-300">
                  {c.icon}
                </div>
                <h3 className="text-lg font-bold font-heading mb-3 group-hover:text-accent transition-colors">{c.title}</h3>
                <p className="text-body text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-light-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Our Solutions</span>
              <div className="w-8 h-[3px] bg-accent" />
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold font-heading">Our Products</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="group bg-white rounded-[0.3rem] overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.08)] hover:shadow-[0_5px_15px_rgba(0,0,0,0.15)] transition-all"
              >
                <div className="relative h-44 bg-white flex items-center justify-center p-4">
                  <Image src={product.image} alt={product.name} fill className="object-contain p-4" />
                  {product.badge && (
                    <span className="absolute top-3 right-3 bg-accent text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-[0.2rem]">
                      {product.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 border-t border-gray-100">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="text-accent">{product.icon}</div>
                    <h3 className="font-bold text-primary group-hover:text-accent transition-colors font-heading text-[15px]">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-body text-sm leading-relaxed">{product.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Species Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Industry Solutions</span>
              <div className="w-8 h-[3px] bg-accent" />
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold font-heading">Species We Serve</h2>
            <p className="text-body mt-3 max-w-xl mx-auto">
              Tailored nutritional programs backed by science for every species.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {speciesList.map((s) => (
              <Link
                key={s.slug}
                href={`/species/${s.slug}`}
                className="group bg-white border border-border rounded-lg overflow-hidden shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(46,125,50,0.15)] hover:border-accent/30 transition-all duration-300"
              >
                {/* Image area */}
                <div className="relative h-44 sm:h-48 bg-accent-50/50 flex items-center justify-center p-4 overflow-hidden">
                  <div className="relative w-full h-full">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    />
                  </div>
                </div>
                {/* Text area */}
                <div className="p-5 text-center">
                  <h3 className="font-bold text-primary group-hover:text-accent text-base uppercase tracking-wide font-heading transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-body text-xs mt-2 leading-relaxed line-clamp-3">
                    {s.desc}
                  </p>
                  {/* Arrow */}
                  <div className="mt-3 flex justify-center">
                    <span className="w-7 h-7 rounded-full bg-accent/10 group-hover:bg-accent flex items-center justify-center transition-all duration-300">
                      <svg className="w-3.5 h-3.5 text-accent group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-dark relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 text-center text-white">
            {[
              { value: "35+", label: "Years Experience", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { value: "7", label: "Product Lines", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg> },
              { value: "5", label: "Species Served", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { value: "7", label: "Industry Affiliations", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
            ].map((stat, idx) => (
              <div key={stat.label} className={`flex flex-col items-center py-4 ${idx < 3 ? 'md:border-r md:border-white/10' : ''}`}>
                <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-4 text-accent-light">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold font-heading mb-1 text-white">{stat.value}</div>
                <div className="w-8 h-[2px] bg-accent-light/50 my-2" />
                <p className="text-white/60 text-xs uppercase tracking-widest font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-accent to-dark overflow-hidden">
        {/* Diamond pattern overlay */}
        <div className="absolute inset-0 opacity-[0.06]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20Z' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px',
        }} />
        {/* Favicon watermarks */}
        <Image src="/images/logos/favicon.webp" alt="" width={250} height={250} className="absolute -top-8 -right-8 opacity-[0.05] pointer-events-none select-none" aria-hidden="true" />
        <Image src="/images/logos/favicon.webp" alt="" width={150} height={150} className="absolute -bottom-6 -left-6 opacity-[0.04] pointer-events-none select-none" aria-hidden="true" />
        <div className="relative max-w-[700px] mx-auto text-center">
          <span className="text-accent-light font-bold text-sm uppercase tracking-widest mb-4 block">Let&apos;s Work Together</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold !text-white font-heading mb-5 leading-tight">
            Ready to Elevate Your Program?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed mb-10">
            With more than 35 years of experience in nutrition, health, and genetics, the NUTRINAE
            team is well positioned to help your operations maximize performance.
          </p>
          <Link href="/contact" className="bg-white text-dark px-10 py-4 rounded-full text-[14px] font-bold uppercase tracking-wide hover:bg-accent-light hover:text-dark transition-all duration-300 inline-flex items-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_6px_30px_rgba(0,0,0,0.3)] hover:-translate-y-0.5">
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
