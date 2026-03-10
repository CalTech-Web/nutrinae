import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://nutrinae.com";
  const products = [
    "ecodiar-powder",
    "ecodiar-liquid",
    "nuquil",
    "mykogeo",
    "mykogeo-plus",
    "hytann",
    "nuba",
  ];
  const species = ["poultry", "swine", "beef", "dairy", "equine"];

  return [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...products.map((slug) => ({
      url: `${base}/products/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/species`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    ...species.map((slug) => ({
      url: `${base}/species/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/careers`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
  ];
}
