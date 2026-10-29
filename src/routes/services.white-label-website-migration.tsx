import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, RefreshCw, Globe, Server, ShieldCheck, Search, Link2, Database,
  FileText, Gauge, CheckCircle2, EyeOff, FileLock2, UserX, Zap, Smartphone,
  ClipboardCheck, Compass, Code2, Rocket, LifeBuoy, AlertTriangle, Clock,
  TrendingUp, Workflow, HardDriveDownload, ScanSearch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RelatedServices } from "@/components/site/RelatedServices";

const faqs = [
  { q: "Will we lose rankings during the migration?", a: "No — protecting rankings is the core of the job. We map every old URL to its new destination with 301 redirects, carry over titles, meta descriptions and schema, and verify indexation in Search Console after launch. Traffic is monitored closely during the first weeks." },
  { q: "How long does a website migration take?", a: "A standard brochure site or blog typically takes 5–10 business days. Large content sites, WooCommerce stores and multi-location builds usually take 2–4 weeks depending on URL count and complexity. You get a committed timeline before work begins." },
  { q: "Can you move our site off Wix, Squarespace or Webflow?", a: "Yes. We regularly migrate sites from Wix, Squarespace, Webflow, Shopify and other closed platforms onto WordPress, rebuilding templates, content, forms and SEO settings so nothing is lost in the move." },
  { q: "What happens to our content, images and customer data?", a: "Everything is exported, validated and re-imported — pages, posts, media, products, orders, customer accounts and form entries. We run content counts and spot checks against the old site before DNS is switched." },
  { q: "Is the migration white label?", a: "Fully. We work under your agency's brand, communicate through your channels and never contact your end client. Staging links, documentation and handover files all carry your name." },
];

export const Route = createFileRoute("/services/white-label-website-migration")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: "White Label Website Migration for Agencies | WLWD" },
      { name: "description", content: "White label website migration for agencies: move client sites between platforms and hosts without losing rankings, content or data." },
      { property: "og:title", content: "White Label Website Migration for Agencies | WLWD" },
      { property: "og:description", content: "White label website migration for agencies: move client sites between platforms and hosts without losing rankings, content or data." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/services/white-label-website-migration" },
      { name: "twitter:title", content: "White Label Website Migration for Agencies | WLWD" },
      { name: "twitter:description", content: "White label website migration for agencies: move client sites between platforms and hosts without losing rankings, content or data." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/services/white-label-website-migration" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }),
      },
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Services\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"White Label Website Migration\", \"item\": \"https://whitelabelwebsitedevelopment.com/services/white-label-website-migration\"}]}, {\"@type\": \"Service\", \"name\": \"White Label Website Migration\", \"description\": \"SEO-safe website migration for agencies: platform, host and domain moves with rankings, content and data preserved.\", \"url\": \"https://whitelabelwebsitedevelopment.com/services/white-label-website-migration\", \"provider\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#organization\"}, \"areaServed\": \"Global\", \"serviceType\": \"White Label Website Migration\", \"audience\": {\"@type\": \"Audience\", \"audienceType\": \"Marketing and SEO agencies\"}}]}",
      },
    ],
  }),
  component: MigrationPage,
});

function SectionHeader({
  eyebrow, title, sub,
}: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 bg-grid-soft" aria-hidden />
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <RefreshCw className="h-3.5 w-3.5 text-brand" />
              White Label Website Migration
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              <span className="text-brand">White Label Website Migration</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Move your clients' websites between platforms, hosts and domains without losing rankings, content or data. We plan, execute and verify every migration under your agency's brand — part of our wider <Link to="/" className="font-semibold text-brand hover:underline">white label web development</Link> offering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                { icon: Search, label: "Rankings protected" },
                { icon: EyeOff, label: "White label" },
                { icon: FileLock2, label: "NDA friendly" },
                { icon: Database, label: "Zero data loss" },
                { icon: Gauge, label: "Performance checked" },
                { icon: ShieldCheck, label: "Tested before launch" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <MigrationMock />
        </div>
      </div>
    </section>
  );
}

function MigrationMock() {
  const steps = [
    { icon: ClipboardCheck, label: "Full site audit & URL inventory", val: "Done" },
    { icon: Link2, label: "301 redirect map", val: "248 rules" },
    { icon: Database, label: "Content & data export", val: "Verified" },
    { icon: Server, label: "New environment build", val: "Staged" },
    { icon: ScanSearch, label: "Pre-launch SEO checks", val: "Passed" },
  ];
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3">migration-runbook · client project</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">On track</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "URLs mapped", v: "248" },
            { k: "Content items", v: "1,120" },
            { k: "Downtime", v: "0 min" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-background p-3 text-center">
              <div className="text-lg font-semibold text-ink">{s.v}</div>
              <div className="text-[10px] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {steps.map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <r.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-medium text-ink">{r.label}</span>
              </div>
              <span className="text-[11px] font-medium text-emerald-600">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-border bg-background p-3 shadow-soft md:block">
        <div className="flex items-center gap-2 text-xs font-medium text-ink">
          <TrendingUp className="h-4 w-4 text-brand" /> Rankings preserved
        </div>
      </div>
    </div>
  );
}

/* ---------- MIGRATIONS WE HANDLE ---------- */
function MigrationTypes() {
  const types = [
    { icon: Globe, t: "Platform-to-platform", d: "Wix, Squarespace, Webflow or Shopify to WordPress — templates, content and SEO settings rebuilt cleanly." },
    { icon: RefreshCw, t: "WordPress to WordPress", d: "Theme rebuilds, page-builder changes and multisite consolidations without breaking URLs." },
    { icon: Server, t: "Host-to-host moves", d: "Full server migrations with zero-downtime DNS cutover and post-move performance checks." },
    { icon: ShieldCheck, t: "HTTP to HTTPS", d: "SSL rollout, mixed-content cleanup and canonical updates across the whole site." },
    { icon: Link2, t: "Domain changes", d: "Rebrands and domain swaps with complete redirect mapping and Search Console change-of-address." },
    { icon: Database, t: "Ecommerce migrations", d: "Products, orders, customer accounts and payment settings moved with full data validation." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Migrations we handle"
          title="Every kind of move, handled end to end"
          sub="From a simple host change to a full platform rebuild — scoped, planned and executed under your brand."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {types.map((t) => (
            <div key={t.t} className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{t.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SEO-SAFE MIGRATION ---------- */
function SeoSafe() {
  const items = [
    { icon: Link2, t: "Complete URL mapping", d: "Every old URL is inventoried and mapped to its new destination — nothing left to 404." },
    { icon: RefreshCw, t: "301 redirects", d: "Server-level redirect rules tested before launch so link equity flows to the new URLs." },
    { icon: FileText, t: "Metadata carried over", d: "Titles, meta descriptions, canonicals and Open Graph tags moved or improved, never dropped." },
    { icon: ScanSearch, t: "Schema preserved", d: "Existing structured data is migrated and revalidated against current guidelines." },
    { icon: Workflow, t: "Internal links updated", d: "In-content links rewritten to the new structure so crawlers don't wade through redirect chains." },
    { icon: Search, t: "Search Console checks", d: "Coverage, sitemaps and change-of-address verified after launch, with monitoring during the transition." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="SEO-safe migration"
          title="Rankings are the first thing we protect"
          sub="A migration done wrong can erase years of SEO work. Our process is built around protecting it."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{it.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { n: "01", icon: ClipboardCheck, t: "Audit & inventory", d: "We crawl the current site, inventory every URL, content type, form and integration, and flag risks before quoting." },
    { n: "02", icon: Compass, t: "Migration plan", d: "URL map, redirect rules, content export strategy and a rollback plan — documented and approved before anything moves." },
    { n: "03", icon: Code2, t: "Build & migrate on staging", d: "The new site is built and populated on a private staging environment. Content, media and data are imported and validated." },
    { n: "04", icon: BadgeCheck, t: "Pre-launch QA", d: "Redirects tested, metadata checked, forms submitted, checkout run, speed measured — against a written launch checklist." },
    { n: "05", icon: Rocket, t: "Launch & monitor", d: "DNS cutover at a low-traffic window, then close monitoring of rankings, traffic, errors and Search Console for the first weeks." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our migration process"
          title="Five steps, zero surprises"
          sub="The same disciplined runbook on every migration — so your agency can promise dates with confidence."
        />
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute bottom-2 left-5 top-2 w-px bg-gradient-to-b from-brand/40 via-border to-transparent md:left-7" aria-hidden />
          <ol className="space-y-6">
            {steps.map((s) => (
              <li key={s.n} className="relative pl-14 md:pl-20">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background shadow-soft md:h-14 md:w-14">
                  <s.icon className="h-4.5 w-4.5 text-brand md:h-5 md:w-5" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-7">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold tracking-[0.18em] text-brand">STEP {s.n}</span>
                    <h3 className="text-lg font-semibold text-ink">{s.t}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHAT'S INCLUDED ---------- */
function Included() {
  const items = [
    { icon: ClipboardCheck, t: "Full pre-migration audit" },
    { icon: Link2, t: "URL map & 301 redirects" },
    { icon: Database, t: "Content, media & data transfer" },
    { icon: FileText, t: "Metadata & schema migration" },
    { icon: Smartphone, t: "Responsive & cross-browser QA" },
    { icon: Gauge, t: "Performance & Core Web Vitals check" },
    { icon: HardDriveDownload, t: "Full backup & rollback plan" },
    { icon: Search, t: "Search Console setup & monitoring" },
    { icon: LifeBuoy, t: "Post-launch support window" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="What's included"
          title="Everything the move requires, in one fixed scope"
          sub="No surprise line items — the quote covers the complete migration from audit to post-launch monitoring."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="flex items-center gap-3 rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-ink">{it.t}</span>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>
            Migrations fail in the details: a forgotten redirect, a form that silently stops working, a sitemap that still points at the old domain. Our runbook exists to catch exactly those details — before your client or their rankings notice.
          </p>
          <p>
            After launch, we stay on for a monitoring window: watching crawl errors, rankings and conversions, and fixing anything that surfaces. If you want the new site cared for long-term, our <Link to="/services/white-label-website-maintenance" className="font-semibold text-brand hover:underline">white label website maintenance</Link> plans pick up right where the migration ends.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
function WhyUs() {
  const items = [
    { icon: EyeOff, t: "Fully white label", d: "Your brand on every staging link, document and update." },
    { icon: UserX, t: "No client poaching", d: "We never contact your end clients — contractually." },
    { icon: AlertTriangle, t: "Risk-first planning", d: "Every migration ships with a tested rollback plan." },
    { icon: Clock, t: "Committed timelines", d: "A hard launch date agreed before work begins." },
    { icon: Zap, t: "Performance focus", d: "The new site launches faster than the old one." },
    { icon: ShieldCheck, t: "SEO accountability", d: "Rankings and traffic monitored after launch, not assumed." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies trust us with migrations"
          title="The partner you hand the risky projects to"
          sub="Migrations are where agencies get burned by generalist developers. This is the work we're built for."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{it.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Migration questions, answered" />
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-semibold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-10 text-brand-foreground shadow-elevated md:p-16">
          <div className="absolute inset-0 bg-grid-soft opacity-20" aria-hidden />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Planning a move?</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Migrate without losing what you built.
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Send us the current site and the destination — we'll reply with a scoped plan, a fixed quote and a committed launch date.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg" className="rounded-full bg-brand-foreground px-6 text-ink hover:bg-brand-foreground/90">
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */
function MigrationPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <MigrationTypes />
        <SeoSafe />
        <Process />
        <Included />
        <WhyUs />
        <FAQ />
        <CTA />
        <RelatedServices currentKey="migration" />
      </main>
      <Footer />
    </div>
  );
}
