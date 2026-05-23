import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero, WhoWeHelp, Services, WhyUs, Process, WhiteLabel,
  Portfolio, Testimonials, FinalCTA,
} from "@/components/site/Sections";
import {
  Problem, Solution, IncludedServices, Comparison, Types, PartnerBenefits, FAQ,
} from "@/components/site/ServiceSections";

const HOME_TITLE = "White Label Website Development for Agencies | Invisible Web Dev Partner";
const HOME_DESC =
  "White label website development for SEO, marketing and digital agencies. SEO-ready WordPress, WooCommerce and custom builds delivered under your brand — NDA friendly, on schedule.";
const HOME_URL = "https://whitelabelwebsitedevelopment.com/";

const HOME_FAQS = [
  { q: "What is white label website development?", a: "White label website development is when an outside production team builds websites under your agency's brand. Your client sees your logo, your domain, your communication — we stay invisible in the background." },
  { q: "Do you sign an NDA?", a: "Yes. We sign a mutual NDA before any briefing call. Confidentiality is the foundation of every white label relationship." },
  { q: "Do you communicate with our clients?", a: "Never directly. All communication runs through your team. We stay completely invisible to your clients." },
  { q: "What platforms do you build on?", a: "WordPress (custom themes, ACF, Gutenberg, Elementor), WooCommerce, Webflow, Shopify, and custom React/Next.js stacks." },
  { q: "How fast is your turnaround?", a: "Most websites ship in 5–7 business days. Larger custom builds get a committed timeline before kickoff." },
  { q: "How do revisions work?", a: "Each project includes two structured revision rounds with annotated feedback. Additional rounds are quoted upfront — no scope creep." },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:url", content: HOME_URL },
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
              name: "White Label Website Development",
              description:
                "End-to-end white label website development for SEO, marketing and digital agencies. WordPress, WooCommerce, custom builds — delivered under your brand.",
              url: HOME_URL,
              provider: { "@id": "https://whitelabelwebsitedevelopment.com/#organization" },
              areaServed: "Global",
              serviceType: "White Label Website Development",
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhoWeHelp />
        <Problem />
        <Solution />
        <Services />
        <IncludedServices />
        <WhyUs />
        <Comparison />
        <Process />
        <Types />
        <WhiteLabel />
        <Portfolio />
        <PartnerBenefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
