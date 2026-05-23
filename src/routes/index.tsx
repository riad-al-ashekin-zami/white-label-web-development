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

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "White Label Website Development for Agencies | Invisible Web Dev Partner" },
      {
        name: "description",
        content:
          "White label website development for SEO, marketing and digital agencies. SEO-ready WordPress, WooCommerce and custom builds delivered under your brand — NDA friendly, on schedule.",
      },
      { name: "keywords", content: "white label website development, white label web development, white label website development for agencies, white label wordpress development" },
      { property: "og:title", content: "White Label Website Development for Agencies" },
      {
        property: "og:description",
        content:
          "Scale your agency without hiring developers. SEO-ready white label website development delivered under your brand.",
      },
    ],
    links: [{ rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/" }],
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
