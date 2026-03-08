import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <section className="relative bg-accent text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/about/hero-2.png" alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-accent/90 to-accent-light/50" />
        </div>
        <div className="absolute bottom-0 right-0 w-[50%] h-[30%] bg-gradient-to-tl from-white/10 to-transparent rounded-tl-[80px]" />
        <div className="relative max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-white" />
              <span className="text-white font-bold text-sm uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em]">Contact Us</h1>
            <p className="text-xl text-white/80 mt-4">We&apos;d love to hear from you</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Reach Out</span>
            </div>
            <h2 className="text-2xl font-bold font-heading mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-[0.3rem] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-primary font-heading text-sm uppercase tracking-wide">Phone</p>
                  <a href="tel:+15109566559" className="text-accent hover:underline mt-1 inline-block">+1.510.956.6559</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-[0.3rem] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-primary font-heading text-sm uppercase tracking-wide">Email</p>
                  <a href="mailto:info@nutrinae.com" className="text-accent hover:underline mt-1 inline-block">info@nutrinae.com</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-[0.3rem] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <p className="font-bold text-primary font-heading text-sm uppercase tracking-wide">Address</p>
                  <p className="text-body mt-1">380 Hamilton Ave Unit 1585<br />Palo Alto, CA 94302</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Message Us</span>
            </div>
            <h2 className="text-2xl font-bold font-heading mb-8">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-primary mb-2 font-heading uppercase tracking-wide">Name *</label>
                <input type="text" id="name" required className="w-full bg-light-bg border-0 rounded-[0.3rem] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 font-heading uppercase tracking-wide">Email *</label>
                <input type="email" id="email" required className="w-full bg-light-bg border-0 rounded-[0.3rem] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset]" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2 font-heading uppercase tracking-wide">Phone *</label>
                <input type="tel" id="phone" required className="w-full bg-light-bg border-0 rounded-[0.3rem] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset]" />
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-bold text-primary mb-2 font-heading uppercase tracking-wide">Comments</label>
                <textarea id="comments" rows={5} className="w-full bg-light-bg border-0 rounded-[0.3rem] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset]" />
              </div>
              <button type="submit" className="bg-accent text-white px-10 py-3.5 rounded-[0.2rem] text-[14px] font-bold uppercase tracking-wide hover:bg-accent-light transition-colors w-full inline-flex items-center justify-center gap-2">
                Submit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
