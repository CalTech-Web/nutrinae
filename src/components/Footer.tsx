import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">NutriNae</h3>
            <p className="text-green-200 text-sm">
              Science-based nutritional solutions for animal health and performance.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link href="/products/ecodiar-powder" className="hover:text-white">Ecodiar® Powder</Link></li>
              <li><Link href="/products/ecodiar-liquid" className="hover:text-white">Ecodiar® Liquid</Link></li>
              <li><Link href="/products/nuquil" className="hover:text-white">NuQuil®</Link></li>
              <li><Link href="/products/mykogeo" className="hover:text-white">MYKOGEO®</Link></li>
              <li><Link href="/products/mykogeo-plus" className="hover:text-white">MYKOGEO® Plus</Link></li>
              <li><Link href="/products/hytann" className="hover:text-white">HyTann</Link></li>
              <li><Link href="/products/nuba" className="hover:text-white">NuBA</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Species</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li><Link href="/species/poultry" className="hover:text-white">Poultry</Link></li>
              <li><Link href="/species/swine" className="hover:text-white">Swine</Link></li>
              <li><Link href="/species/beef" className="hover:text-white">Beef</Link></li>
              <li><Link href="/species/dairy" className="hover:text-white">Dairy</Link></li>
              <li><Link href="/species/equine" className="hover:text-white">Equine</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-green-200">
              <li>+1.510.956.6559</li>
              <li><a href="mailto:info@nutrinae.com" className="hover:text-white">info@nutrinae.com</a></li>
              <li>380 Hamilton Ave Unit 1585<br />Palo Alto, CA 94302</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-8 text-center text-sm text-green-300">
          &copy; 2026 NUTRINAE LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
