export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-dark to-green-brand text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <p className="text-xl text-green-100">Get in touch with our team</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+15109566559" className="text-green-brand hover:underline">+1.510.956.6559</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:info@nutrinae.com" className="text-green-brand hover:underline">info@nutrinae.com</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">380 Hamilton Ave Unit 1585<br />Palo Alto, CA 94302</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input type="text" id="name" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input type="email" id="email" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                <input type="tel" id="phone" required className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent" />
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
                <textarea id="comments" rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-brand focus:border-transparent" />
              </div>
              <button type="submit" className="bg-green-brand text-white px-8 py-3 rounded-full font-semibold hover:bg-green-dark transition w-full">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
