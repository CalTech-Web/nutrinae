import Link from "next/link";

const speciesList = [
  { name: "Poultry", slug: "poultry", icon: "🐔", desc: "Broilers, layers and turkeys at all stages of growth" },
  { name: "Swine", slug: "swine", icon: "🐖", desc: "From piglets to mature hogs" },
  { name: "Beef", slug: "beef", icon: "🐄", desc: "Optimal growth and productivity for beef cattle" },
  { name: "Dairy", slug: "dairy", icon: "🥛", desc: "Optimizing milk production and well-being" },
  { name: "Equine", slug: "equine", icon: "🐴", desc: "Supporting health, performance, and well-being" },
];

export default function SpeciesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-green-dark to-green-brand text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Species We Serve</h1>
          <p className="text-xl text-green-100">Tailored nutritional solutions for every animal</p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {speciesList.map((s) => (
            <Link
              key={s.slug}
              href={`/species/${s.slug}`}
              className="group border border-gray-200 rounded-xl p-8 text-center hover:shadow-lg hover:border-green-brand transition-all"
            >
              <div className="text-5xl mb-4">{s.icon}</div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-brand transition-colors mb-2">
                {s.name}
              </h2>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
