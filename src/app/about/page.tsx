export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-dark to-green-brand text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About NutriNae</h1>
          <p className="text-xl text-green-100">Science-Based Natural Solutions</p>
        </div>
      </section>

      {/* History */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto space-y-6 text-gray-700 leading-relaxed">
          <p>
            The founders of NUTRINAE started their careers in the livestock industry in the early
            90&apos;s working with two of the largest swine integrators in the southeastern United States.
          </p>
          <p>
            After several years of experience with various aspects of research, nutrition, production,
            and personnel management, the opportunity to join the global leader in swine genetics materialized.
          </p>
          <p>
            In the early 2000&apos;s, our founding partner was instrumental in developing the first liquid
            feeding program for early weaned pigs, increasing the survival rate of high value breeding stock.
            This technology has been successfully implemented globally in swine production systems.
          </p>
          <p>
            After decades of working for both animal nutrition and pharmaceutical companies, our founders
            became increasingly aware of the customer led demand for naturally fed meat protein.
          </p>
          <p>
            As of 2019 No Antibiotic Ever (NAE) production accounts for 58% of commercial broilers
            produced in the US; this is an increase from 13% in 2015.
          </p>
          <p>
            Given this trend, the founders saw an opportunity to source natural feed ingredients as
            reliable alternatives to reduce or eliminate antibiotics in animal production.
          </p>
          <p>
            NUTRINAE was founded with strong guiding principles: science, regenerative agriculture,
            social responsibility and customer focus.
          </p>
          <p>
            The company not only sources unique products from around the world but also invests resources
            to validate them and understand the science behind their mode of action.
          </p>
          <p className="font-semibold text-gray-900">
            With more than 35 years of experience in nutrition, health, and genetics, the NUTRINAE team
            is well positioned to offer science-based natural solutions and technical services to ensure
            that our customers&apos; operations maximize performance.
          </p>
        </div>
      </section>

      {/* What Drives Us */}
      <section id="what-drives-us" className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Drives Us</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            We understand the growing consumer demand for reduced use of antibiotics in animal protein
            production. At NUTRINAE we source, test and develop unique nutritional solutions such as
            essential oils, saponins, tannins, clays and beta glucans to help producers achieve their
            productivity goals.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section id="our-mission" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Mission</h2>
          <p className="text-gray-600 mb-8">NUTRINAE&apos;s mission is driven by three key principles:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="w-16 h-16 bg-green-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Research</h3>
              <p className="text-gray-600 text-sm">
                Our products are based on rigorous scientific research, utilizing natural components
                with proven benefits for animal health.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="w-16 h-16 bg-green-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600 text-sm">
                We prioritize sourcing the finest ingredients available to ensure that our products
                are both effective and cost-efficient.
              </p>
            </div>
            <div className="text-center p-6 rounded-xl bg-green-50">
              <div className="w-16 h-16 bg-green-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600 text-sm">
                Building long-lasting, collaborative relationships with our customers, suppliers, and
                team members is at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section id="affiliations" className="py-16 px-4 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Affiliations</h2>
          <p className="text-gray-600 mb-8">
            At NUTRINAE, our commitment to advancing animal nutrition extends beyond our products. We
            are proud to support, collaborate with and be a part of leading industry organizations that
            share our dedication to science, animal health, and sustainable practices.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { abbr: "AFIA", name: "American Feed Industry Association", desc: "Advocating for a thriving feed industry as a vital part of the food chain. As members, NUTRINAE stays connected with industry leaders, gaining insight into regulatory updates and best practices in feed production." },
              { abbr: "ASAS", name: "American Society of Animal Science", desc: "Advancing animal science for enhanced animal and human well-being. NUTRINAE's membership keeps the company current with animal science research and expert collaboration." },
              { abbr: "CGFA", name: "California Grain and Feed Association", desc: "Bringing the grain and feed industry together as a united voice. CGFA membership provides regulatory insights and industry best practices." },
              { abbr: "GOA", name: "Global Organic Alliance", desc: "Maintaining ISO 17065 and NOP Accreditation. NUTRINAE meets requirements for organic certified handler status." },
              { abbr: "OMRI", name: "Organic Materials Review Institute", desc: "Supporting organic integrity. OMRI is a 501(c)(3) nonprofit organization reviewing products for certified organic operations." },
              { abbr: "PSA", name: "Poultry Science Association", desc: "Supporting scientific advancement in poultry science. Membership provides access to scientific journals, industry events, and online community resources." },
              { abbr: "TPF", name: "The Poultry Federation", desc: "Promoting the poultry and egg industries through a unified voice. TPF represents Arkansas, Missouri, and Oklahoma in advancing industry interests." },
            ].map((org) => (
              <div key={org.abbr} className="bg-white rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-green-brand text-lg mb-1">{org.abbr}</h3>
                <p className="text-sm font-semibold text-gray-900 mb-2">{org.name}</p>
                <p className="text-sm text-gray-600">{org.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
