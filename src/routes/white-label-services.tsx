import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Globe, ShoppingCart, Search, Palette,
  LayoutTemplate, Wrench, ShieldCheck, Handshake, ArrowRight,
  RefreshCw,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Button } from "@/components/ui/button";

const TITLE = "Our Services | WLWD";
const DESC =
  "Browse every service we deliver for agencies — WordPress, WooCommerce, design, landing pages, maintenance, audits and SEO-friendly builds.";
const URL = "https://whitelabelwebsitedevelopment.com/white-label-services";

const services = [
  { label: "White Label WordPress Development", desc: "Custom themes, ACF, Gutenberg blocks and clean plugin-light WordPress builds.", to: "/services/white-label-wordpress-development", icon: Globe },
  { label: "White Label WooCommerce Development", desc: "Scalable online stores with payments, shipping, inventory and conversion-tuned UX.", to: "/services/white-label-woocommerce-development", icon: ShoppingCart },
  { label: "SEO-Friendly Web Development", desc: "Semantic HTML, schema, Core Web Vitals — engineered for your SEO team to rank.", to: "/services/seo-friendly-web-development", icon: Search },
  { label: "White Label Website Design", desc: "Conversion-focused UI and brand-aligned design systems your clients will love.", to: "/services/white-label-website-design", icon: Palette },
  { label: "White Label Landing Page Design", desc: "High-performance landing pages built for paid traffic, launches and campaigns.", to: "/services/white-label-landing-page-design", icon: LayoutTemplate },
  { label: "White Label Website Maintenance", desc: "Ongoing care, updates, backups, security patches and monthly content edits.", to: "/services/white-label-website-maintenance", icon: Wrench },
  { label: "White Label Website Audit", desc: "Deep performance, SEO and UX audits with prioritised, actionable recommendations.", to: "/services/white-label-website-audit", icon: ShieldCheck },
  { label: "White Label Website Migration", desc: "SEO-safe platform, host and domain moves with zero data loss.", to: "/services/white-label-website-migration", icon: RefreshCw },
  { label: "Website Delivery for SEO Agencies", desc: "Our partner program purpose-built for SEO and digital agencies.", to: "/services/seo-agencies", icon: Handshake },
] as const;

export const Route = createFileRoute("/white-label-services")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: URL },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: WhiteLabelServicesPage,
});

function WhiteLabelServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="border-b border-border bg-surface pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="container-page max-w-3xl text-center">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:text-xs">
              Service catalog
            </div>
            <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl md:text-5xl">
              Our Services
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              A complete production catalog — from WordPress and WooCommerce to landing pages, maintenance and audits. Delivered under your brand, on your timeline.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Everything here is part of our{" "}
              <Link to="/" className="font-semibold text-brand underline-offset-4 hover:underline">
                white label web development
              </Link>{" "}
              offering for agencies.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container-page">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-elevated"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand/70 text-white shadow-sm">
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-lg font-semibold text-ink">{s.label}</h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface-elevated p-8 text-center md:p-12">
              <h3 className="text-balance text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Need a custom scope or bundled retainer?
              </h3>
              <p className="max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Tell us about your pipeline and we'll put together a white label plan tailored to your agency's workflow.
              </p>
              <Button asChild size="lg" className="mt-2 rounded-full px-6">
                <Link to="/contact">Get a free quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
