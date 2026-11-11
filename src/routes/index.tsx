import { createFileRoute } from "@tanstack/react-router";
import { Homepage } from "@/components/homepage/Homepage";
import { HOME_FAQS } from "@/components/site/ServiceSections";
import { homepageImages } from "@/config/images";
import homepageCss from "@/components/homepage/homepage.css?url";

const HOME_TITLE = "White Label Web Development for Agencies - From $490";
const HOME_DESC =
  "Agency-ready white label WordPress, WooCommerce & landing page builds. Fixed prices from $490, revisions included, NDA & no-poaching. Get a quote today.";
const HOME_URL = "https://whitelabelwebsitedevelopment.com/";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:url", content: HOME_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
      ...(homepageImages["IMG-12"]?.url?.startsWith("https://") ? [
        { property: "og:image", content: homepageImages["IMG-12"].url },
        { name: "twitter:image", content: homepageImages["IMG-12"].url },
      ] : []),
    ],
    links: [{ rel: "canonical", href: HOME_URL }, { rel: "stylesheet", href: homepageCss }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Service",
              name: "White Label Web Development",
              description:
                "End-to-end white label website development for SEO, marketing and digital agencies. WordPress, WooCommerce, custom builds — delivered under your brand.",
              url: HOME_URL,
              provider: { "@id": "https://whitelabelwebsitedevelopment.com/#organization" },
              areaServed: "Global",
              serviceType: "White Label Web Development",
              audience: { "@type": "Audience", audienceType: "Marketing, SEO and digital agencies" },
            },
            {
              "@type": "FAQPage",
              mainEntity: HOME_FAQS.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <Homepage />;
}
