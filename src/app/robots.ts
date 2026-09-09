import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap:
            "https://feras-portfolio-7jknqfrew-mobile12.vercel.app/sitemap.xml",
    };
}