import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://whitelabelwebsitedevelopment.com";

interface SitemapEntry {
  path: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const entries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/process", changefreq: "monthly", priority: "0.7" },
  { path: "/portfolio", changefreq: "monthly", priority: "0.8" },
  { path: "/pricing", changefreq: "monthly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.9" },
  { path: "/agency-partner", changefreq: "monthly", priority: "0.8" },
  { path: "/white-label-services", changefreq: "monthly", priority: "0.9" },
  { path: "/industries/seo-agencies", changefreq: "monthly", priority: "0.7" },
  { path: "/services/white-label-wordpress-development", changefreq: "monthly", priority: "0.9" },
  { path: "/services/white-label-website-design", changefreq: "monthly", priority: "0.9" },
  { path: "/services/white-label-woocommerce-development", changefreq: "monthly", priority: "0.9" },
  { path: "/services/white-label-landing-page-design", changefreq: "monthly", priority: "0.9" },
  { path: "/services/white-label-website-maintenance", changefreq: "monthly", priority: "0.8" },
  { path: "/services/white-label-website-audit", changefreq: "monthly", priority: "0.8" },
  { path: "/services/seo-friendly-web-development", changefreq: "monthly", priority: "0.9" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/blog/top-5-benefits-of-white-label-web-development-for-digital-agencies", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/best-white-label-website-builders", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/how-does-white-label-web-development-work", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/white-label-development-vs-in-house-developers", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/white-label-web-development-pricing", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/what-is-white-label-web-development", changefreq: "monthly", priority: "0.7" },
  { path: "/blog/white-label-wordpress-development-for-agencies", changefreq: "monthly", priority: "0.7" },
  { path: "/partners", changefreq: "monthly", priority: "0.5" },
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
