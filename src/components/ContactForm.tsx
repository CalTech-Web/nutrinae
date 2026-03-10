"use client";

import { useState } from "react";

export default function ContactForm() {
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
  );
}
