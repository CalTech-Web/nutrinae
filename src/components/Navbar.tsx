"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const products = [
  { name: "Ecodiar® Powder", href: "/products/ecodiar-powder" },
  { name: "Ecodiar® Liquid", href: "/products/ecodiar-liquid" },
  { name: "NuQuil®", href: "/products/nuquil" },
  { name: "MYKOGEO®", href: "/products/mykogeo" },
  { name: "MYKOGEO® Plus", href: "/products/mykogeo-plus" },
  { name: "HyTann", href: "/products/hytann" },
  { name: "NuBA", href: "/products/nuba" },
];

const species = [
  { name: "Poultry", href: "/species/poultry" },
  { name: "Swine", href: "/species/swine" },
  { name: "Beef", href: "/species/beef" },
  { name: "Dairy", href: "/species/dairy" },
  { name: "Equine", href: "/species/equine" },
];

const aboutLinks = [
  { name: "What Drives Us", href: "/about#what-drives-us" },
  { name: "Our Mission", href: "/about#our-mission" },
  { name: "Affiliations", href: "/about#affiliations" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <>
      {/* Top Accent Bar */}
      <div className="bg-dark">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center text-white text-sm font-medium">
          <div className="flex items-center gap-6">
            <a href="mailto:info@nutrinae.com" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              info@nutrinae.com
            </a>
            <a href="tel:+15109566559" className="hidden sm:flex items-center gap-2 hover:opacity-80 transition-opacity">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +1.510.956.6559
            </a>
          </div>
          <span className="hidden md:block text-white/80 text-xs">Science-Based Animal Nutrition</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav className="bg-white sticky top-0 z-50 shadow-[0_2px_15px_rgba(0,0,0,0.08)]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-[80px] items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/images/logos/2025-Logo-Nutrinae-Green.png"
                alt="NutriNae"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              <Link href="/" className="px-4 py-2 text-[14px] font-bold uppercase tracking-wide text-primary hover:text-accent transition-colors">
                Home
              </Link>

              <div className="relative group">
                <Link href="/about" className="px-4 py-2 text-[14px] font-bold uppercase tracking-wide text-primary hover:text-accent transition-colors">
                  About
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block">
                  <div className="bg-white rounded-[0.3rem] shadow-[0_5px_15px_rgba(0,0,0,0.15)] py-2 min-w-[200px] border-t-[3px] border-accent">
                    {aboutLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="block px-5 py-2.5 text-sm text-primary hover:text-accent hover:bg-accent-50 transition-colors">
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link href="/products" className="px-4 py-2 text-[14px] font-bold uppercase tracking-wide text-primary hover:text-accent transition-colors">
                  Products
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block">
                  <div className="bg-white rounded-[0.3rem] shadow-[0_5px_15px_rgba(0,0,0,0.15)] py-2 min-w-[220px] border-t-[3px] border-accent">
                    {products.map((p) => (
                      <Link key={p.href} href={p.href} className="block px-5 py-2.5 text-sm text-primary hover:text-accent hover:bg-accent-50 transition-colors">
                        {p.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative group">
                <Link href="/species" className="px-4 py-2 text-[14px] font-bold uppercase tracking-wide text-primary hover:text-accent transition-colors">
                  Species
                </Link>
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 hidden group-hover:block">
                  <div className="bg-white rounded-[0.3rem] shadow-[0_5px_15px_rgba(0,0,0,0.15)] py-2 min-w-[180px] border-t-[3px] border-accent">
                    {species.map((s) => (
                      <Link key={s.href} href={s.href} className="block px-5 py-2.5 text-sm text-primary hover:text-accent hover:bg-accent-50 transition-colors">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/contact" className="px-4 py-2 text-[14px] font-bold uppercase tracking-wide text-primary hover:text-accent transition-colors">
                Contact
              </Link>

              <Link href="/careers" className="ml-3 bg-accent text-white px-6 py-2.5 rounded-[0.2rem] text-[14px] font-bold uppercase tracking-wide hover:bg-dark transition-colors">
                Careers
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button className="lg:hidden text-primary p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border px-4 pb-6 max-h-[80vh] overflow-y-auto">
            <Link href="/" className="block py-3 text-sm font-bold uppercase text-primary border-b border-gray-100" onClick={() => setMobileOpen(false)}>Home</Link>

            <button className="w-full text-left py-3 text-sm font-bold uppercase text-primary border-b border-gray-100 flex justify-between items-center" onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}>
              About <svg className={`w-4 h-4 transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === "about" && (
              <div className="bg-accent-50 py-1">
                {aboutLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block py-2.5 px-5 text-sm text-primary hover:text-accent" onClick={() => setMobileOpen(false)}>{link.name}</Link>
                ))}
              </div>
            )}

            <button className="w-full text-left py-3 text-sm font-bold uppercase text-primary border-b border-gray-100 flex justify-between items-center" onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}>
              Products <svg className={`w-4 h-4 transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === "products" && (
              <div className="bg-accent-50 py-1">
                {products.map((p) => (
                  <Link key={p.href} href={p.href} className="block py-2.5 px-5 text-sm text-primary hover:text-accent" onClick={() => setMobileOpen(false)}>{p.name}</Link>
                ))}
              </div>
            )}

            <button className="w-full text-left py-3 text-sm font-bold uppercase text-primary border-b border-gray-100 flex justify-between items-center" onClick={() => setOpenDropdown(openDropdown === "species" ? null : "species")}>
              Species <svg className={`w-4 h-4 transition-transform ${openDropdown === "species" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === "species" && (
              <div className="bg-accent-50 py-1">
                {species.map((s) => (
                  <Link key={s.href} href={s.href} className="block py-2.5 px-5 text-sm text-primary hover:text-accent" onClick={() => setMobileOpen(false)}>{s.name}</Link>
                ))}
              </div>
            )}

            <Link href="/contact" className="block py-3 text-sm font-bold uppercase text-primary border-b border-gray-100" onClick={() => setMobileOpen(false)}>Contact</Link>
            <Link href="/careers" className="block mt-4 bg-accent text-white text-center px-6 py-3 rounded-[0.2rem] text-sm font-bold uppercase" onClick={() => setMobileOpen(false)}>Careers</Link>
          </div>
        )}
      </nav>
    </>
  );
}
