import Image from "next/image";

const affiliations = [
  { abbr: "AFIA", name: "American Feed Industry Association", logo: "/images/affiliations/afia.png" },
  { abbr: "ASAS", name: "American Society of Animal Science", logo: "/images/affiliations/asas.png" },
  { abbr: "CGFA", name: "California Grain and Feed Association", logo: "/images/affiliations/cgfa.png" },
  { abbr: "GOA", name: "Global Organic Alliance", logo: "/images/affiliations/goa.png" },
  { abbr: "OMRI", name: "Organic Materials Review Institute", logo: "/images/affiliations/omri.jpg" },
  { abbr: "PSA", name: "Poultry Science Association", logo: "/images/affiliations/psa.jpg" },
  { abbr: "TPF", name: "The Poultry Federation", logo: "/images/affiliations/tpf.png" },
];

export default function TrustBar() {
  return (
    <div className="bg-accent-50 border-y border-accent/10 py-5 overflow-hidden">
      <p className="text-center text-[10px] font-bold uppercase tracking-widest text-accent/60 mb-4">
        Affiliated With Industry Leaders
      </p>
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-accent-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-accent-50 to-transparent z-10 pointer-events-none" />
        {/* Scrolling track — duplicated for seamless loop */}
        <div
          className="flex items-center gap-12"
          style={{ animation: "marquee 28s linear infinite", width: "max-content" }}
        >
          {[...affiliations, ...affiliations].map((a, i) => (
            <div key={i} className="flex items-center gap-3 flex-shrink-0">
              <div className="relative w-9 h-9 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                <Image src={a.logo} alt={a.name} fill className="object-contain" sizes="36px" />
              </div>
              <span className="text-[11px] font-bold text-primary/50 uppercase tracking-wide whitespace-nowrap">
                {a.abbr}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
