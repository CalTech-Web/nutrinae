import Link from "next/link";

export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-dark via-green-brand to-green-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-100/80 font-medium text-sm uppercase tracking-wider mb-3">Join Our Team</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-lg text-green-100/90 max-w-xl mx-auto">
            Help us advance animal nutrition with science-based natural solutions.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* About working here */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-4">Why Join NutriNae</h2>
            <p className="text-gray-600 leading-relaxed">
              NUTRINAE LLC is a family-owned nutrition company that specializes in providing cutting-edge,
              science-based nutritional solutions that elevate animal health and performance. The company
              prioritizes natural, high-quality ingredients and sustainable feed solutions based on rigorous
              scientific research. We emphasize building long-lasting collaborative relationships with
              customers, suppliers, and team members.
            </p>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-navy mb-6">What We Offer</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Opportunities for advancement", desc: "Grow your career in a rapidly expanding company" },
                { title: "Openness to new ideas", desc: "Your voice and insights are valued here" },
                { title: "New challenges & opportunities", desc: "Work on exciting projects in animal nutrition" },
                { title: "Competitive benefits package", desc: "Comprehensive benefits to support you and your family" },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4 bg-green-50/50 rounded-xl p-5 border border-green-100/30">
                  <div className="w-8 h-8 bg-green-brand rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-sm">{item.title}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-2">Open Positions</h2>
            <p className="text-gray-500 text-sm mb-8">Current openings at NUTRINAE</p>
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-green-brand/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-navy">Key Account Manager (Broiler)</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Southeast</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Full Time</span>
                    </div>
                  </div>
                  <a href="mailto:jobs@nutrinae.com?subject=Application: Key Account Manager (Broiler)" className="bg-green-brand text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-dark transition-colors">
                    Apply Now
                  </a>
                </div>
              </div>
              <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-green-brand/20 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-navy">Key Account Manager (Layers)</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Midwest/East</span>
                      <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Full Time</span>
                    </div>
                  </div>
                  <a href="mailto:jobs@nutrinae.com?subject=Application: Key Account Manager (Layers)" className="bg-green-brand text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-green-dark transition-colors">
                    Apply Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Apply CTA */}
          <div className="bg-navy rounded-2xl p-8 lg:p-10 text-center">
            <p className="text-gray-300 leading-relaxed mb-6">
              If you are interested in applying for any of our roles, please submit your application/resume
              to <a href="mailto:jobs@nutrinae.com" className="text-green-light font-semibold hover:underline">jobs@nutrinae.com</a> and
              a member of our hiring team will review your application. Even if you don&apos;t feel like your
              qualifications match, please don&apos;t hesitate to apply.
            </p>
            <a href="mailto:jobs@nutrinae.com" className="bg-green-brand text-white px-10 py-3.5 rounded-full font-semibold hover:bg-green-light transition-colors text-sm inline-block">
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
