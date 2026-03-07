"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const products = [
  { name: "Ecodiar\u00AE Powder", href: "/products/ecodiar-powder" },
  { name: "Ecodiar\u00AE Liquid", href: "/products/ecodiar-liquid" },
  { name: "NuQuil\u00AE", href: "/products/nuquil" },
  { name: "MYKOGEO\u00AE", href: "/products/mykogeo" },
  { name: "MYKOGEO\u00AE Plus", href: "/products/mykogeo-plus" },
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

function DesktopDropdown({ label, href, items }: { label: string; href: string; items: { name: string; href: string }[] }) {
  const [open, setOpen] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout>>(undefined);

  const enter = () => { clearTimeout(timeout.current); setOpen(true); };
  const leave = () => { timeout.current = setTimeout(() => setOpen(false), 150); };

  return (
    <div className="relative" onMouseEnter={enter} onMouseLeave={leave}>
      <Link href={href} className="text-gray-700 hover:text-green-brand font-medium transition-colors py-2">
        {label}
      </Link>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
          <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-5 py-2.5 text-sm text-gray-600 hover:bg-green-50 hover:text-green-brand transition-colors"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav className={`bg-white sticky top-0 z-50 transition-shadow ${scrolled ? "shadow-lg" : "shadow-sm"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logos/2025-Logo-Nutrinae-Green.png"
              alt="NutriNae"
              width={180}
              height={52}
              className="h-11 w-auto"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-green-brand font-medium transition-colors">
              Home
            </Link>
            <DesktopDropdown label="About" href="/about" items={aboutLinks} />
            <DesktopDropdown label="Products" href="/products" items={products} />
            <DesktopDropdown label="Species" href="/species" items={species} />
            <Link href="/contact" className="text-gray-700 hover:text-green-brand font-medium transition-colors">
              Contact
            </Link>
            <Link href="/careers" className="bg-green-brand text-white px-6 py-2.5 rounded-full hover:bg-green-dark font-medium transition-colors text-sm">
              Careers
            </Link>
          </div>

          <button className="lg:hidden text-gray-700 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
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

      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pb-6 max-h-[80vh] overflow-y-auto">
          <Link href="/" className="block py-3 text-gray-700 font-medium border-b border-gray-50" onClick={() => setMobileOpen(false)}>Home</Link>

          <div className="border-b border-gray-50">
            <button className="w-full flex items-center justify-between py-3 text-gray-700 font-medium" onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}>
              About
              <svg className={`w-4 h-4 transition-transform ${openDropdown === "about" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === "about" && (
              <div className="pb-2">
                {aboutLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block py-2 pl-4 text-sm text-gray-500 hover:text-green-brand" onClick={() => setMobileOpen(false)}>
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-gray-50">
            <button className="w-full flex items-center justify-between py-3 text-gray-700 font-medium" onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}>
              Products
              <svg className={`w-4 h-4 transition-transform ${openDropdown === "products" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === "products" && (
              <div className="pb-2">
                {products.map((p) => (
                  <Link key={p.href} href={p.href} className="block py-2 pl-4 text-sm text-gray-500 hover:text-green-brand" onClick={() => setMobileOpen(false)}>
                    {p.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="border-b border-gray-50">
            <button className="w-full flex items-center justify-between py-3 text-gray-700 font-medium" onClick={() => setOpenDropdown(openDropdown === "species" ? null : "species")}>
              Species
              <svg className={`w-4 h-4 transition-transform ${openDropdown === "species" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {openDropdown === "species" && (
              <div className="pb-2">
                {species.map((s) => (
                  <Link key={s.href} href={s.href} className="block py-2 pl-4 text-sm text-gray-500 hover:text-green-brand" onClick={() => setMobileOpen(false)}>
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/contact" className="block py-3 text-gray-700 font-medium border-b border-gray-50" onClick={() => setMobileOpen(false)}>Contact</Link>
          <div className="pt-4">
            <Link href="/careers" className="block text-center bg-green-brand text-white px-6 py-3 rounded-full font-medium hover:bg-green-dark transition-colors" onClick={() => setMobileOpen(false)}>
              Careers
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
