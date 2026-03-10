import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-white py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Who We Are</span>
            </div>
            <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em] text-primary">About NutriNae</h1>
            <p className="text-xl text-body mt-4">Science-Based Natural Solutions</p>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 space-y-5 text-body leading-relaxed">
              <p>The founders of NUTRINAE started their careers in the livestock industry in the early 90&apos;s working with two of the largest swine integrators in the southeastern United States.</p>
              <p>After several years of experience with various aspects of research, nutrition, production, and personnel management, the opportunity to join the global leader in swine genetics materialized.</p>
              <p>In the early 2000&apos;s, our founding partner was instrumental in developing the first liquid feeding program for early weaned pigs, increasing the survival rate of high value breeding stock. This technology has been successfully implemented globally in swine production systems.</p>
              <p>After decades of working for both animal nutrition and pharmaceutical companies, our founders became increasingly aware of the customer led demand for naturally fed meat protein.</p>
              <p>As of 2019 No Antibiotic Ever (NAE) production accounts for 58% of commercial broilers produced in the US; this is an increase from 13% in 2015.</p>
              <p>Given this trend, the founders saw an opportunity to source natural feed ingredients as reliable alternatives to reduce or eliminate antibiotics in animal production.</p>
              <p>NUTRINAE was founded with strong guiding principles: science, regenerative agriculture, social responsibility and customer focus.</p>
              <p>The company not only sources unique products from around the world but also invests resources to validate them and understand the science behind their mode of action.</p>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-accent text-white p-8 rounded-[0.3rem]">
                <p className="font-bold text-lg leading-relaxed">
                  With more than 35 years of experience in nutrition, health, and genetics, the NUTRINAE team is well positioned to offer science-based natural solutions and technical services to ensure that our customers&apos; operations maximize performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Drives Us */}
      <section id="what-drives-us" className="py-20 px-4 bg-light-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[3px] bg-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Our Purpose</span>
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold font-heading mb-6">What Drives Us</h2>
          <p className="text-body leading-relaxed text-lg max-w-4xl">
            We understand the growing consumer demand for reduced use of antibiotics in animal protein production. At NUTRINAE we source, test and develop unique nutritional solutions such as essential oils, saponins, tannins, clays and beta glucans to help producers achieve their productivity goals.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section id="our-mission" className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Our Principles</span>
              <div className="w-8 h-[3px] bg-accent" />
            </div>
            <h2 className="text-3xl md:text-[32px] font-bold font-heading">Our Mission</h2>
            <p className="text-body mt-3">NUTRINAE&apos;s mission is driven by three key principles:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Research", desc: "Our products are based on rigorous scientific research, utilizing natural components with proven benefits for animal health.", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
              { title: "Quality", desc: "We prioritize sourcing the finest ingredients available to ensure that our products are both effective and cost-efficient.", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg> },
              { title: "Partnership", desc: "Building long-lasting, collaborative relationships with our customers, suppliers, and team members is at the heart of everything we do.", icon: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
            ].map((item) => (
              <div key={item.title} className="group relative bg-white rounded-lg p-10 text-center shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(46,125,50,0.15)] transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent-bright scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-16 h-16 bg-accent-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-white group-hover:scale-110 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold font-heading mb-3">{item.title}</h3>
                <p className="text-body text-[15px] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section id="affiliations" className="py-20 px-4 bg-light-bg">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-[3px] bg-accent" />
            <span className="text-accent font-bold text-sm uppercase tracking-wider">Our Network</span>
          </div>
          <h2 className="text-3xl md:text-[32px] font-bold font-heading mb-4">Affiliations</h2>
          <p className="text-body mb-10 max-w-3xl">
            At NUTRINAE, our commitment to advancing animal nutrition extends beyond our products. We are proud to support, collaborate with and be a part of leading industry organizations.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              { abbr: "AFIA", name: "American Feed Industry Association", desc: "Advocating for a thriving feed industry as a vital part of the food chain.", logo: "/images/affiliations/afia.png" },
              { abbr: "ASAS", name: "American Society of Animal Science", desc: "Advancing animal science for enhanced animal and human well-being.", logo: "/images/affiliations/asas.png" },
              { abbr: "CGFA", name: "California Grain and Feed Association", desc: "Bringing the grain and feed industry together as a united voice.", logo: "/images/affiliations/cgfa.png" },
              { abbr: "GOA", name: "Global Organic Alliance", desc: "Maintaining ISO 17065 and NOP Accreditation for organic certification.", logo: "/images/affiliations/goa.png" },
              { abbr: "OMRI", name: "Organic Materials Review Institute", desc: "Supporting organic integrity through product review for certified organic operations.", logo: "/images/affiliations/omri.jpg" },
              { abbr: "PSA", name: "Poultry Science Association", desc: "Supporting scientific advancement in poultry science.", logo: "/images/affiliations/psa.jpg" },
              { abbr: "TPF", name: "The Poultry Federation", desc: "Promoting the poultry and egg industries through a unified voice.", logo: "/images/affiliations/tpf.png" },
            ].map((org) => (
              <div key={org.abbr} className="bg-white border border-border rounded-[0.3rem] p-6 flex items-start gap-4 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition-shadow">
                <div className="w-12 h-12 rounded-[0.3rem] flex items-center justify-center flex-shrink-0 overflow-hidden relative bg-white">
                  <Image src={org.logo} alt={org.name} fill className="object-contain p-1" />
                </div>
                <div>
                  <h3 className="font-bold text-primary text-sm mb-1">{org.name}</h3>
                  <p className="text-sm text-body leading-relaxed">{org.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
