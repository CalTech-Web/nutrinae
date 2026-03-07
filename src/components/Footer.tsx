import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Image
              src="/images/logos/2025-Nutrinae-Logo-White.png"
              alt="NutriNae"
              width={180}
              height={52}
              className="h-10 w-auto mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Science-based nutritional solutions for animal health and performance. Nourishing Naturally.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Products</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/products/ecodiar-powder" className="text-gray-400 hover:text-white transition-colors">Ecodiar&reg; Powder</Link></li>
              <li><Link href="/products/ecodiar-liquid" className="text-gray-400 hover:text-white transition-colors">Ecodiar&reg; Liquid</Link></li>
              <li><Link href="/products/nuquil" className="text-gray-400 hover:text-white transition-colors">NuQuil&reg;</Link></li>
              <li><Link href="/products/mykogeo" className="text-gray-400 hover:text-white transition-colors">MYKOGEO&reg;</Link></li>
              <li><Link href="/products/mykogeo-plus" className="text-gray-400 hover:text-white transition-colors">MYKOGEO&reg; Plus</Link></li>
              <li><Link href="/products/hytann" className="text-gray-400 hover:text-white transition-colors">HyTann</Link></li>
              <li><Link href="/products/nuba" className="text-gray-400 hover:text-white transition-colors">NuBA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Species</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/species/poultry" className="text-gray-400 hover:text-white transition-colors">Poultry</Link></li>
              <li><Link href="/species/swine" className="text-gray-400 hover:text-white transition-colors">Swine</Link></li>
              <li><Link href="/species/beef" className="text-gray-400 hover:text-white transition-colors">Beef</Link></li>
              <li><Link href="/species/dairy" className="text-gray-400 hover:text-white transition-colors">Dairy</Link></li>
              <li><Link href="/species/equine" className="text-gray-400 hover:text-white transition-colors">Equine</Link></li>
            </ul>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4 mt-8">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-300 mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:+15109566559" className="hover:text-white transition-colors">+1.510.956.6559</a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-green-light flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:info@nutrinae.com" className="hover:text-white transition-colors">info@nutrinae.com</a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 text-green-light flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>380 Hamilton Ave Unit 1585<br />Palo Alto, CA 94302</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} NUTRINAE LLC. All rights reserved.</p>
          <p>Nourishing Naturally</p>
        </div>
      </div>
    </footer>
  );
}
