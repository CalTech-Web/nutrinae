export default function CareersPage() {
  return (
    <>
      <section className="relative bg-white py-28 px-4 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Join Our Team</span>
            </div>
            <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em] text-primary">Careers</h1>
            <p className="text-xl text-body mt-4">Join our growing team</p>
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
              <div className="relative bg-gradient-to-br from-accent to-dark rounded-lg p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <div className="relative">
                  <h3 className="font-bold font-heading text-lg mb-6" style={{ color: '#ffffff' }}>What We Offer</h3>
                  <div className="space-y-4">
                    {[
                      { text: "Opportunities for advancement", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
                      { text: "Openness to new ideas", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
                      { text: "New challenges & opportunities", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg> },
                      { text: "Competitive benefits package", icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg> },
                    ].map((item) => (
                      <div key={item.text} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                          {item.icon}
                        </div>
                        <span className="text-white/90 text-sm font-medium">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative bg-gradient-to-br from-accent to-dark rounded-lg p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                <div className="relative">
                  <div className="w-10 h-10 bg-white/15 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <p className="text-white/90 leading-relaxed text-sm mb-5">
                    If you are interested in applying for any of our roles, please submit your application/resume
                    to <a href="mailto:jobs@nutrinae.com" className="font-bold text-white underline underline-offset-2">jobs@nutrinae.com</a> and
                    a member of our hiring team will review your application.
                  </p>
                  <p className="text-white/70 text-sm italic">
                    Even if you don&apos;t feel like your qualifications match, please don&apos;t hesitate to apply!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
