import Image from "next/image";

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-dark via-green-brand to-green-light text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-green-100/80 font-medium text-sm uppercase tracking-wider mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-green-100/90 max-w-xl mx-auto">
            Ready to learn more about our science-based nutritional solutions? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm mb-0.5">Phone</p>
                  <a href="tel:+15109566559" className="text-green-brand hover:text-green-dark transition-colors">+1.510.956.6559</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm mb-0.5">Email</p>
                  <a href="mailto:info@nutrinae.com" className="text-green-brand hover:text-green-dark transition-colors">info@nutrinae.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-navy text-sm mb-0.5">Address</p>
                  <p className="text-gray-600">380 Hamilton Ave Unit 1585<br />Palo Alto, CA 94302</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100">
              <Image
                src="/images/logos/New-NUTRINAE_Symbol.png"
                alt="NutriNae"
                width={60}
                height={60}
                className="opacity-30"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-10">
            <h2 className="text-2xl font-bold text-navy mb-2">Send Us a Message</h2>
            <p className="text-gray-500 text-sm mb-8">Fill out the form below and our team will get back to you.</p>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy mb-1.5">Name *</label>
                <input type="text" id="name" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-brand/30 focus:border-green-brand transition-all" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy mb-1.5">Email *</label>
                <input type="email" id="email" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-brand/30 focus:border-green-brand transition-all" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-navy mb-1.5">Phone *</label>
                <input type="tel" id="phone" required className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-brand/30 focus:border-green-brand transition-all" />
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-navy mb-1.5">Comments</label>
                <textarea id="comments" rows={4} className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-brand/30 focus:border-green-brand transition-all resize-none" />
              </div>
              <button type="submit" className="bg-green-brand text-white px-8 py-3.5 rounded-full font-semibold hover:bg-green-dark transition-colors w-full text-sm">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
