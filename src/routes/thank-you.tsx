import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle2, ArrowRight, ShieldCheck, EyeOff, UserX, Workflow, Timer,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title: "Thank You — White Label Website Development" },
      { name: "description", content: "Your project request has been received. Our team will review the details and reach out shortly." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Thank You — White Label Website Development" },
      { property: "og:description", content: "Your white label project request has been received." },
    ],
  }),
  component: ThankYou,
});

const trust = [
  { icon: ShieldCheck, label: "NDA friendly" },
  { icon: EyeOff, label: "White label delivery" },
  { icon: UserX, label: "No client poaching" },
  { icon: Workflow, label: "Agency-safe workflow" },
  { icon: Timer, label: "Fast communication" },
];

function ThankYou() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-hero-glow" aria-hidden />
        <div className="absolute inset-0 bg-grid-soft" aria-hidden />
        <section className="container-page relative pb-24 md:pb-32">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="mt-7 text-balance text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Your project request has been received
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Our team will review your details and get back to you within one business day. In the meantime, explore how we work with agencies.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="https://calendly.com/" target="_blank" rel="noreferrer">
                  Book a discovery call <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-background px-6">
                <Link to="/portfolio">View portfolio</Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full px-6">
                <Link to="/agency-partner">Explore agency partnership</Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-5">
            {trust.map(({ icon: Icon, label }) => (
              <div key={label} className="rounded-xl border border-border bg-surface-elevated p-4 text-center">
                <Icon className="mx-auto h-5 w-5 text-brand" />
                <div className="mt-2 text-xs font-medium text-ink">{label}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
