"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      site: "nutrinae.com",
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("comments") as HTMLTextAreaElement).value,
      source: "contact-page",
    };
    try {
      const res = await fetch("https://forms.caltechweb.com/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="relative bg-white py-28 px-4 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[3px] bg-accent" />
              <span className="text-accent font-bold text-sm uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-[48px] font-bold leading-[1.2] font-heading tracking-[-0.02em] text-primary">Contact Us</h1>
            <p className="text-xl text-body mt-4">We&apos;d love to hear from you</p>
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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-primary mb-2 font-heading uppercase tracking-wide">Name *</label>
                <input type="text" id="name" name="name" required className="w-full bg-light-bg border-0 rounded-[0.3rem] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-primary mb-2 font-heading uppercase tracking-wide">Email *</label>
                <input type="email" id="email" name="email" required className="w-full bg-light-bg border-0 rounded-[0.3rem] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset]" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-bold text-primary mb-2 font-heading uppercase tracking-wide">Phone *</label>
                <input type="tel" id="phone" name="phone" required className="w-full bg-light-bg border-0 rounded-[0.3rem] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset]" />
              </div>
              <div>
                <label htmlFor="comments" className="block text-sm font-bold text-primary mb-2 font-heading uppercase tracking-wide">Comments</label>
                <textarea id="comments" name="comments" rows={5} className="w-full bg-light-bg border-0 rounded-[0.3rem] px-4 py-3 text-primary focus:outline-none focus:ring-2 focus:ring-accent shadow-[0_1px_0_0_rgba(0,0,0,0.08)_inset]" />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-accent text-white px-10 py-3.5 rounded-[0.2rem] text-[14px] font-bold uppercase tracking-wide hover:bg-accent-light transition-colors w-full inline-flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {status === "sending" ? "Sending..." : "Submit"}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </button>
              {status === "sent" && <p className="text-accent font-bold text-sm text-center">Thank you! Your message has been sent.</p>}
              {status === "error" && <p className="text-red-600 font-bold text-sm text-center">Something went wrong. Please try again.</p>}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
