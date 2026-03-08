import Image from "next/image";

export default function CareersPage() {
  return (
    <>
      <section className="relative bg-accent text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about/hero-1.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-accent/90 to-accent-light/50" />
        </div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[30%] bg-gradient-to-tl from-white/10 to-transparent rounded-tl-[80px]" />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em]">Careers</h1>
            <p className="text-xl text-white/80 mt-4">Join our growing team</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[3px] bg-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-wider">About Us</span>
              </div>
              <h2 className="text-2xl font-bold font-heading mb-6">Why Join NutriNae</h2>
              <p className="text-body leading-relaxed mb-12">
                NUTRINAE LLC is a family-owned nutrition company that specializes in providing cutting-edge,
                science-based nutritional solutions that elevate animal health and performance. The company
                prioritizes natural, high-quality ingredients and sustainable feed solutions based on rigorous
                scientific research. We emphasize building long-lasting collaborative relationships with
                customers, suppliers, and team members.
              </p>

              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-[3px] bg-accent" />
                <span className="text-accent font-bold text-sm uppercase tracking-wider">Opportunities</span>
              </div>
              <h2 className="text-2xl font-bold font-heading mb-6">Open Positions</h2>
              <div className="space-y-4">
                <div className="border border-border rounded-[0.3rem] p-6 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:border-accent transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold font-heading">Key Account Manager (Broiler)</h3>
                      <p className="text-body text-sm mt-1">Southeast &bull; Full Time</p>
                    </div>
                    <a href="mailto:jobs@nutrinae.com?subject=Application: Key Account Manager (Broiler)" className="bg-accent text-white px-6 py-2.5 rounded-[0.2rem] text-[13px] font-bold uppercase tracking-wide hover:bg-accent-light transition-colors inline-flex items-center gap-2">
                      Apply Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
                <div className="border border-border rounded-[0.3rem] p-6 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:border-accent transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold font-heading">Key Account Manager (Layers)</h3>
                      <p className="text-body text-sm mt-1">Midwest/East &bull; Full Time</p>
                    </div>
                    <a href="mailto:jobs@nutrinae.com?subject=Application: Key Account Manager (Layers)" className="bg-accent text-white px-6 py-2.5 rounded-[0.2rem] text-[13px] font-bold uppercase tracking-wide hover:bg-accent-light transition-colors inline-flex items-center gap-2">
                      Apply Now
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <div className="bg-accent rounded-[0.3rem] p-8">
                <h3 className="text-white font-bold font-heading text-lg mb-6">What We Offer</h3>
                <div className="space-y-4">
                  {[
                    "Opportunities for advancement",
                    "Openness to new ideas",
                    "New challenges & opportunities",
                    "Competitive benefits package",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-white/20 rounded-[0.2rem] flex items-center justify-center flex-shrink-0">
                        <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      </div>
                      <span className="text-white/80 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-accent rounded-[0.3rem] p-8">
                <p className="text-white leading-relaxed text-sm">
                  If you are interested in applying for any of our roles, please submit your application/resume
                  to <a href="mailto:jobs@nutrinae.com" className="font-bold underline">jobs@nutrinae.com</a> and
                  a member of our hiring team will review your application. Even if you don&apos;t feel like your
                  qualifications match, please don&apos;t hesitate to apply!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
