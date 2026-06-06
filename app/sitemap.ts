import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://prospectksa.com";
  const changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never" = "weekly";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blasting-coating`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/equipment-rental`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/lifting-materials`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/manpower-services`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/project-completed`,
      lastModified: new Date(),
      changeFrequency,
      priority: 0.7,
    },
  ];
}
