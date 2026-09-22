import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero, WhatIsWhiteLabel, WhoWeHelp, TexasCustomers, Services, WhyUs, Process,
  Portfolio, Testimonials, FinalCTA, BusinessNAP,
} from "@/components/site/Sections";
import {
  Problem, Comparison, FAQ,
} from "@/components/site/ServiceSections";

const HOME_TITLE = "We're White Label Web Development Agency in Texas";
const HOME_DESC =
  "White label web development, web design and WordPress builds for agencies. NDA-friendly delivery under your brand with a 5–7 day turnaround.";
const HOME_URL = "https://whitelabelwebsitedevelopment.com/";

const HOME_FAQS = [
  { q: "What is white label web development?", a: "White label web development is when a specialized development team builds websites on behalf of an agency, freelancer or consultant — entirely under their brand. The white label web developer handles design, coding, testing and deployment while staying invisible to the agency's end client. It lets agencies offer professional web development services without maintaining an in-house development team." },
  { q: "How is a white label web developer different from a freelancer?", a: "A white label web developer operates as a structured production partner with dedicated project managers, QA processes, version control and documented workflows. Unlike freelancers, a white label web development agency provides reliable turnaround, scalable capacity and formal confidentiality through NDAs." },
  { q: "Do you sign an NDA before starting work?", a: "Yes. We sign a mutual NDA before every engagement. Your client relationships, project details and brand identity stay fully protected. We never contact your clients directly." },
  { q: "Do you communicate with our clients?", a: "Never. We work strictly behind your brand. All communication runs through your team, and we appear nowhere in the delivery." },
  { q: "Can we use our own branding?", a: "Absolutely. Every deliverable ships under your branding, on your domain, presented as your agency's work." },
  { q: "What platforms do your white label web developers build on?", a: "Our team builds on WordPress, WooCommerce, Shopify, Webflow and custom HTML/CSS/JS. WordPress is our strongest capability." },
  { q: "How fast is your turnaround?", a: "Most standard websites ship in 5–7 business days. Complex WordPress sites or WooCommerce stores typically take 2–3 weeks depending on scope." },
  { q: "How do revisions work?", a: "Every project includes structured revision rounds with clearly defined scope. You review on a private staging URL and our team implements consolidated feedback within 24–48 hours." },
  { q: "Do you provide ongoing website maintenance?", a: "Yes. We offer white label website maintenance covering updates, daily backups, security monitoring, uptime checks and monthly content edits." },
  { q: "Do you work with agencies remotely across North America?", a: "Yes. We partner with agencies across the United States and Canada, plus remote partners worldwide, with overlap across US Eastern and Pacific hours." },
  { q: "Can you handle multi-location and local SEO websites?", a: "Yes. We build multi-location websites with location-specific schema, optimized landing pages, NAP consistency and crawlable architecture." },
  { q: "Do you provide website design for Fort Worth agencies and small businesses?", a: "Yes. We provide remote white label website design for Fort Worth agencies serving local companies. Our team works behind your brand as website designers for small business projects, delivering responsive web design and SEO-ready development without presenting ourselves as a local Fort Worth office." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:url", content: HOME_URL },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
    ],
    links: [{ rel: "canonical", href: HOME_URL }],
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
            {
              "@type": "ProfessionalService",
              "@id": `${HOME_URL}#fort-worth-business`,
              name: "Roadrunner Media Website Design",
              url: HOME_URL,
              telephone: "+1-817-201-7558",
              description: "White label web development and website design support for agencies and small businesses.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "3925 Bryce Ave",
                addressLocality: "Fort Worth",
                addressRegion: "TX",
                postalCode: "76107",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "City",
                name: "Fort Worth",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhatIsWhiteLabel />
        <WhoWeHelp />
        <Problem />
        <Process />
        <Services />
        <WhyUs />
        <TexasCustomers />
        <Comparison />
        <Portfolio />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <BusinessNAP />
      </main>
      <Footer />
    </div>
  );
}
