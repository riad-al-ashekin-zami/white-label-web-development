import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero, WhatIsWhiteLabel, WhoWeHelp, TexasCustomers, Services, WhyUs, Process,
  Portfolio, Testimonials, FinalCTA, BusinessNAP, PartnerPricing, BecomePartner,
} from "@/components/site/Sections";
import {
  Problem, Comparison, FAQ, HOME_FAQS,
} from "@/components/site/ServiceSections";

const HOME_TITLE = "White Label Web Development for Agencies | WLWD";
const HOME_DESC =
  "White label web development for agencies. We design, build and maintain client websites under your brand — on time, NDA-protected, at partner rates.";
const HOME_URL = "https://whitelabelwebsitedevelopment.com/";


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
        <PartnerPricing />
        <BecomePartner />
        <FAQ />
        <FinalCTA />
        <BusinessNAP />
      </main>
      <Footer />
    </div>
  );
}
