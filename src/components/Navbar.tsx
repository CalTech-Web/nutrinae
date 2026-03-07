"use client";

import Link from "next/link";
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
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link href="/" className="text-2xl font-bold text-green-brand">
            NutriNae
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-gray-700 hover:text-green-brand font-medium">
              Home
            </Link>

            <div className="relative group">
              <Link href="/about" className="text-gray-700 hover:text-green-brand font-medium">
                About
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 min-w-[180px]">
                {aboutLinks.map((link) => (
                  <Link key={link.href} href={link.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-brand">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <Link href="/products" className="text-gray-700 hover:text-green-brand font-medium">
                Products
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 min-w-[200px]">
                {products.map((p) => (
                  <Link key={p.href} href={p.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-brand">
                    {p.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative group">
              <Link href="/species" className="text-gray-700 hover:text-green-brand font-medium">
                Species
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 min-w-[160px]">
                {species.map((s) => (
                  <Link key={s.href} href={s.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-brand">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="text-gray-700 hover:text-green-brand font-medium">
              Contact
            </Link>
            <Link href="/careers" className="bg-green-brand text-white px-5 py-2 rounded-full hover:bg-green-dark font-medium">
              Careers
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-gray-700" onClick={() => setMobileOpen(!mobileOpen)}>
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
        <div className="lg:hidden bg-white border-t px-4 pb-4">
          <Link href="/" className="block py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Home</Link>

          <button className="w-full text-left py-2 text-gray-700 font-medium" onClick={() => setOpenDropdown(openDropdown === "about" ? null : "about")}>
            About {openDropdown === "about" ? "▾" : "▸"}
          </button>
          {openDropdown === "about" && aboutLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block py-1 pl-4 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>
              {link.name}
            </Link>
          ))}

          <button className="w-full text-left py-2 text-gray-700 font-medium" onClick={() => setOpenDropdown(openDropdown === "products" ? null : "products")}>
            Products {openDropdown === "products" ? "▾" : "▸"}
          </button>
          {openDropdown === "products" && products.map((p) => (
            <Link key={p.href} href={p.href} className="block py-1 pl-4 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>
              {p.name}
            </Link>
          ))}

          <button className="w-full text-left py-2 text-gray-700 font-medium" onClick={() => setOpenDropdown(openDropdown === "species" ? null : "species")}>
            Species {openDropdown === "species" ? "▾" : "▸"}
          </button>
          {openDropdown === "species" && species.map((s) => (
            <Link key={s.href} href={s.href} className="block py-1 pl-4 text-sm text-gray-600" onClick={() => setMobileOpen(false)}>
              {s.name}
            </Link>
          ))}

          <Link href="/contact" className="block py-2 text-gray-700" onClick={() => setMobileOpen(false)}>Contact</Link>
          <Link href="/careers" className="block py-2 text-green-brand font-medium" onClick={() => setMobileOpen(false)}>Careers</Link>
        </div>
      )}
    </nav>
  );
}
