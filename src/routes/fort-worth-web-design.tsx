import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { TexasCustomers, BusinessNAP } from "@/components/site/Sections";

const URL = "https://whitelabelwebsitedevelopment.com/fort-worth-web-design";
const TITLE = "Fort Worth Web Design | WLWD";
const DESCRIPTION = "Website design and development for Fort Worth and Texas businesses, startups and professionals. Contact Roadrunner Media Website Design.";

export const Route = createFileRoute("/fort-worth-web-design")({
  head: () => ({
    meta: [
      { title: TITLE }, { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: TITLE }, { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL }, { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: TITLE }, { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({
      "@context": "https://schema.org", "@type": "ProfessionalService", "@id": `${URL}#fort-worth-business`,
      name: "Roadrunner Media Website Design", url: URL, telephone: "+1-817-201-7558",
      description: "White label web development and website design support for agencies and small businesses.",
      address: { "@type": "PostalAddress", streetAddress: "3925 Bryce Ave", addressLocality: "Fort Worth", addressRegion: "TX", postalCode: "76107", addressCountry: "US" },
      areaServed: { "@type": "City", name: "Fort Worth" },
    }) }],
  }),
  component: FortWorthPage,
});

function FortWorthPage() {
  return <div className="min-h-screen bg-background"><Header /><main className="pt-28"><div className="container-page py-8"><h1 className="text-4xl font-bold text-ink">Fort Worth Web Design</h1></div><TexasCustomers /><BusinessNAP /></main><Footer /></div>;
}