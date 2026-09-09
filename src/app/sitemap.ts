import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://feras-portfolio-7jknqfrew-mobile12.vercel.app",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}