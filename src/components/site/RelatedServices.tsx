import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Item = { to: string; title: string; desc: string };

const ALL: Record<string, Item> = {
  wordpress: {
    to: "/services/white-label-wordpress-development",
    title: "White Label WordPress Development",
    desc: "Custom themes, ACF, and editor-friendly builds shipped under your agency brand.",
  },
  woo: {
    to: "/services/white-label-woocommerce-development",
    title: "White Label WooCommerce Development",
    desc: "Conversion-ready storefronts with payments, shipping, and inventory wired in.",
  },
  design: {
    to: "/services/white-label-website-design",
    title: "White Label Website Design",
    desc: "Modern, conversion-focused web design delivered in Figma — ready for handoff.",
  },
  landing: {
    to: "/services/white-label-landing-page-design",
    title: "White Label Landing Page Design",
    desc: "High-converting landing pages for ad campaigns, launches, and lead gen.",
  },
  seo: {
    to: "/services/seo-friendly-web-development",
    title: "SEO-Friendly Web Development",
    desc: "Semantic HTML, schema, and Core Web Vitals optimization built in from day one.",
  },
  audit: {
    to: "/services/white-label-website-audit",
    title: "White Label Website Audit",
    desc: "Technical SEO, performance, and UX audits delivered as agency-ready reports.",
  },
  maintenance: {
    to: "/services/white-label-website-maintenance",
    title: "White Label Website Maintenance",
    desc: "Updates, backups, security patches, and content edits — handled monthly.",
  },
  pricing: {
    to: "/pricing",
    title: "White Label Pricing",
    desc: "Transparent project and retainer pricing built for agency margins.",
  },
  partner: {
    to: "/agency-partner",
    title: "Agency Partner Program",
    desc: "Become a long-term white label partner with priority capacity and SLAs.",
  },
  portfolio: {
    to: "/portfolio",
    title: "Agency Portfolio",
    desc: "Selected white label projects delivered for agencies and consultants.",
  },
};

export function RelatedServices({
  currentKey,
  keys,
}: {
  currentKey?: string;
  keys?: (keyof typeof ALL)[];
}) {
  const order: (keyof typeof ALL)[] =
    keys ??
    (["wordpress", "woo", "design", "landing", "seo", "audit", "maintenance", "pricing"] as const);
  const items = order.filter((k) => k !== currentKey).slice(0, 4).map((k) => ALL[k]);

  return (
    <section className="border-t border-border bg-surface py-16 md:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:text-xs">
            Related white label services
          </div>
          <h2 className="mt-3 text-balance text-[24px] font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
            Build a complete agency fulfillment stack
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Pair this service with the rest of our white label web development suite — one partner, one workflow, one invoice.
          </p>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
          {items.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="group flex flex-col rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-soft"
            >
              <h3 className="text-sm font-semibold text-ink">{it.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{it.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Explore service <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
