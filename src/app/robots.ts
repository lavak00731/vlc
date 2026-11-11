import type { MetadataRoute } from "next";

const siteUrl = "https://www.viverodelgolf.com.ar";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/buscar", "/cotizacion"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
