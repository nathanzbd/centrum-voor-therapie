import type { MetadataRoute } from "next";
import { conditions } from "@/lib/content";

const SITE = "https://centrumvoortherapie.nl";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    "",
    "/over",
    "/werkwijze",
    "/klachten",
    "/praktijk",
    "/tarieven",
    "/reviews",
    "/contact",
    "/privacy",
    "/disclaimer",
  ];

  const conditionPages = conditions.map((c) => `/klachten/${c.slug}`);

  return [...staticPages, ...conditionPages].map((path) => ({
    url: `${SITE}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/klachten") ? 0.8 : 0.7,
  }));
}
