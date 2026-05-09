import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  Hero, WhoWeHelp, Services, WhyUs, Process, WhiteLabel,
  Portfolio, Testimonials, FinalCTA,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Whitelayer — White Label Web Development for Agencies" },
      {
        name: "description",
        content:
          "The invisible white label web development partner for agencies, marketers and consultants. SEO-first websites built under your brand.",
      },
      { property: "og:title", content: "Whitelayer — White Label Web Development for Agencies" },
      {
        property: "og:description",
        content:
          "Scale your agency without hiring developers. SEO-ready websites delivered under your brand.",
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
        <Services />
        <WhyUs />
        <Process />
        <WhiteLabel />
        <Portfolio />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
