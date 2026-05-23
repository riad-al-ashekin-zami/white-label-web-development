import { Link } from "@tanstack/react-router";
import {
  Code2, Globe, ShoppingCart, Search, Palette, LayoutTemplate,
  Wrench, ShieldCheck, Handshake, ArrowRight,
} from "lucide-react";

const services = [
  { label: "White Label WordPress Development", to: "/services/white-label-wordpress-development", icon: Globe },
  { label: "White Label WooCommerce Development", to: "/services/white-label-woocommerce-development", icon: ShoppingCart },
  { label: "SEO-Friendly Web Development", to: "/services/seo-friendly-web-development", icon: Search },
  { label: "White Label Website Design", to: "/services/white-label-website-design", icon: Palette },
  { label: "White Label Landing Page Design", to: "/services/white-label-landing-page-design", icon: LayoutTemplate },
  { label: "White Label Website Maintenance", to: "/services/white-label-website-maintenance", icon: Wrench },
  { label: "White Label Website Audit", to: "/services/white-label-website-audit", icon: ShieldCheck },
  { label: "White Label for SEO Agencies", to: "/industries/seo-agencies", icon: Handshake },
] as const;

const company = [
  { label: "About Us", to: "/about" },
  { label: "Our Process", to: "/process" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Agency Partner Program", to: "/agency-partner" },
  { label: "Contact", to: "/contact" },
] as const;

const trust = [
  { label: "NDA & Confidentiality", to: "/nda-confidentiality" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms-of-service" },
] as const;

export function SiteLinks() {
  return (
    <section className="border-t border-border bg-surface-muted/40 py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
            Explore our white label services
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Everything an agency needs to deliver websites under their brand — engineered for SEO, speed and scale.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Services</h3>
            <ul className="mt-4 space-y-2">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <li key={s.to}>
                    <Link
                      to={s.to}
                      className="group flex items-center gap-3 rounded-lg px-2 py-2 text-sm font-medium text-ink transition-colors hover:bg-muted"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-brand to-brand/70 text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex-1">{s.label}</span>
                      <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Company</h3>
            <ul className="mt-4 space-y-2">
              {company.map((c) => (
                <li key={c.to}>
                  <Link
                    to={c.to}
                    className="group flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-ink transition-colors hover:bg-muted"
                  >
                    <Code2 className="h-4 w-4 text-brand" />
                    <span className="flex-1">{c.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-brand">Trust & Legal</h3>
            <ul className="mt-4 space-y-2">
              {trust.map((t) => (
                <li key={t.to}>
                  <Link
                    to={t.to}
                    className="group flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-ink transition-colors hover:bg-muted"
                  >
                    <ShieldCheck className="h-4 w-4 text-brand" />
                    <span className="flex-1">{t.label}</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-border bg-surface-muted/60 p-4">
              <p className="text-sm font-semibold text-ink">Ready to start?</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Get a free white label quote within one business day.
              </p>
              <Link
                to="/contact"
                className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
              >
                Request a quote <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
