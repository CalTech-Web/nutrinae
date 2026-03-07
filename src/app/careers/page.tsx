export default function CareersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-dark to-green-brand text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="text-xl text-green-100">Join our growing team</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Join NutriNae</h2>
          <p className="text-gray-700 leading-relaxed mb-8">
            NUTRINAE LLC is a family-owned nutrition company that specializes in providing cutting-edge,
            science-based nutritional solutions that elevate animal health and performance. The company
            prioritizes natural, high-quality ingredients and sustainable feed solutions based on rigorous
            scientific research. We emphasize building long-lasting collaborative relationships with
            customers, suppliers, and team members.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
            {[
              "Opportunities for advancement",
              "Openness to new ideas",
              "New challenges & opportunities",
              "Competitive benefits package",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-green-50 rounded-lg p-4">
                <svg className="w-5 h-5 text-green-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Open Positions</h2>
          <div className="space-y-4 mb-12">
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Key Account Manager (Broiler)</h3>
                  <p className="text-gray-500 text-sm mt-1">Southeast &bull; Full Time</p>
                </div>
                <a href="mailto:jobs@nutrinae.com?subject=Application: Key Account Manager (Broiler)" className="bg-green-brand text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-dark transition">
                  Apply Now
                </a>
              </div>
            </div>
            <div className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Key Account Manager (Layers)</h3>
                  <p className="text-gray-500 text-sm mt-1">Midwest/East &bull; Full Time</p>
                </div>
                <a href="mailto:jobs@nutrinae.com?subject=Application: Key Account Manager (Layers)" className="bg-green-brand text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-green-dark transition">
                  Apply Now
                </a>
              </div>
            </div>
          </div>

          <div className="bg-green-50 rounded-xl p-8 text-center">
            <p className="text-gray-700 leading-relaxed">
              If you are interested in applying for any of our roles, please submit your application/resume
              to <a href="mailto:jobs@nutrinae.com" className="text-green-brand font-semibold hover:underline">jobs@nutrinae.com</a> and
              a member of our hiring team will review your application. Even if you don&apos;t feel like your
              qualifications match, please don&apos;t hesitate to apply. Thank you for your interest!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
