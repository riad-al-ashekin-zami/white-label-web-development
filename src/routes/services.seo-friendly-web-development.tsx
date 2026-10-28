import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Search, Gauge, Code2, Layers, Smartphone, Rocket,
  Network, Link2, FileCode2, Zap, ShieldCheck, EyeOff, FileLock2, UserX,
  MessageSquare, BadgeCheck, Quote, AlertTriangle, Bug, Database, Globe2,
  ClipboardCheck, Compass, Workflow, RefreshCw, Activity, FileSearch,
  TrendingUp, Wrench, ServerCog, LifeBuoy, Building2, Stethoscope, HardHat,
  Briefcase, Target, MapPin, FileCheck2, ListTree, Image as ImageIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RelatedServices } from "@/components/site/RelatedServices";

export const Route = createFileRoute("/services/seo-friendly-web-development")({
  head: () => ({
    meta: [
      { title: "White Label SEO-Friendly Web Development" },
      { name: "description", content: "SEO-friendly web development for agencies — Core Web Vitals, schema, semantic HTML and crawl-ready architecture under your brand." },
      { property: "og:title", content: "White Label SEO-Friendly Web Development" },
      { property: "og:description", content: "SEO-friendly web development for agencies — Core Web Vitals, schema, semantic HTML and crawl-ready architecture under your brand." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/services/seo-friendly-web-development" },
      { name: "twitter:title", content: "White Label SEO-Friendly Web Development" },
      { name: "twitter:description", content: "SEO-friendly web development for agencies — Core Web Vitals, schema, semantic HTML and crawl-ready architecture under your brand." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/services/seo-friendly-web-development" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Services\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO-Friendly Web Development\", \"item\": \"https://whitelabelwebsitedevelopment.com/services/seo-friendly-web-development\"}]}, {\"@type\": \"Service\", \"name\": \"SEO-Friendly Web Development\", \"description\": \"SEO-first web development with schema, semantic HTML and Core Web Vitals optimization for agency clients.\", \"url\": \"https://whitelabelwebsitedevelopment.com/services/seo-friendly-web-development\", \"provider\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#organization\"}, \"areaServed\": \"Global\", \"serviceType\": \"SEO-Friendly Web Development\", \"audience\": {\"@type\": \"Audience\", \"audienceType\": \"Marketing and SEO agencies\"}}]}",
      },
    ],
  }),
  
  component: SEOPage,
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
              <Search className="h-3.5 w-3.5 text-brand" />
              SEO-Friendly Web Development
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              <span className="text-brand">SEO-Friendly Web Development</span> for agencies that rank, load fast and convert.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Technical SEO web development built for SEO and marketing agencies — semantic HTML, schema, crawl-ready architecture and Core Web Vitals tuning shipped cleanly under your brand. Hand your team a site that's already optimized on day one.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/contact">Get a free quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/contact">Book a discovery call</Link>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                { icon: Gauge, label: "Core Web Vitals" },
                { icon: ListTree, label: "SEO-ready architecture" },
                { icon: Smartphone, label: "Mobile-first dev" },
                { icon: EyeOff, label: "White label" },
                { icon: Database, label: "Schema-ready" },
                { icon: FileLock2, label: "NDA friendly" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <SEOMock />
        </div>
      </div>
    </section>
  );
}

function SEOMock() {
  const vitals = [
    { k: "LCP", v: "1.4s", good: true },
    { k: "CLS", v: "0.02", good: true },
    { k: "INP", v: "120ms", good: true },
  ];
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Activity className="h-3.5 w-3.5 text-brand" />
            <span>performance · client-site.com</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Passing</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {vitals.map((v) => (
            <div key={v.k} className="rounded-xl border border-border bg-background p-3 text-center">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{v.k}</div>
              <div className="mt-1 text-lg font-semibold text-ink">{v.v}</div>
              <div className="mt-1 inline-flex items-center gap-1 text-[10px] font-medium text-emerald-600">
                <CheckCircle2Inline /> Good
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border bg-background p-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-ink">Lighthouse</span>
            <span className="font-semibold text-emerald-600">97 / 100</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full rounded-full bg-emerald-500" style={{ width: "97%" }} />
          </div>
        </div>

        <div className="mt-3 space-y-2">
          {[
            { icon: ListTree, label: "Heading hierarchy", val: "Valid" },
            { icon: Database, label: "Schema markup", val: "Implemented" },
            { icon: Link2, label: "Internal linking", val: "Optimized" },
            { icon: FileCheck2, label: "Sitemap & robots", val: "Indexed" },
          ].map((r) => (
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
          <Gauge className="h-4 w-4 text-brand" /> CWV monitored 24/7
        </div>
      </div>
    </div>
  );
}

function CheckCircle2Inline() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" />
    </svg>
  );
}

/* ---------- PAINS ---------- */
function Pains() {
  const pains = [
    { icon: AlertTriangle, t: "Devs breaking SEO", d: "Rebuilds that destroy rankings overnight." },
    { icon: Gauge, t: "Poor Core Web Vitals", d: "Slow LCP, layout shift, sluggish interactions." },
    { icon: Zap, t: "Slow-loading sites", d: "Bloated themes, unoptimized assets, no caching." },
    { icon: Smartphone, t: "Bad mobile responsiveness", d: "Broken layouts on real mobile devices." },
    { icon: ListTree, t: "Wrong heading structure", d: "Multiple H1s, skipped levels, weak hierarchy." },
    { icon: Bug, t: "Technical SEO issues", d: "Broken canonicals, duplicate content, redirects." },
    { icon: Database, t: "Poor schema implementation", d: "Missing or invalid structured data." },
    { icon: FileCode2, t: "Messy codebases", d: "Hard to maintain, hard to optimize." },
    { icon: FileSearch, t: "Indexation problems", d: "Pages stuck in crawl loops or de-indexed." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why SEO agencies need SEO-aware devs"
          title="Most developers quietly destroy SEO"
          sub="The same technical SEO problems show up across every agency project — and they directly hurt rankings."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{p.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- APPROACH ---------- */
function Approach() {
  const items = [
    { icon: ListTree, t: "Technical SEO architecture", d: "Hierarchy, taxonomies and URL structure done right." },
    { icon: Gauge, t: "Speed optimization", d: "Asset, font, JS and image pipelines tuned for CWV." },
    { icon: Smartphone, t: "Responsive structure", d: "Mobile-first markup and adaptive layouts." },
    { icon: FileCode2, t: "Clean semantic code", d: "Proper HTML5 semantics, accessible by default." },
    { icon: Database, t: "Schema readiness", d: "Organization, LocalBusiness, Product, FAQ schema." },
    { icon: Network, t: "Crawlability", d: "Clean internal linking, sitemap and robots config." },
    { icon: FileCheck2, t: "Indexation best practices", d: "Canonicals, noindex, hreflang handled cleanly." },
    { icon: Target, t: "Conversion-focused UX", d: "Layouts that rank and convert, not just one." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our SEO-first approach"
          title="Built for rankings from the architecture stage"
          sub="SEO is not a checklist applied at the end — it's how we structure the build from day one."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft transition-shadow hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function ServicesIncluded() {
  const services = [
    { icon: Code2, t: "SEO-Friendly WordPress Development", d: "Custom WordPress builds with SEO baked in." },
    { icon: Gauge, t: "Core Web Vitals Optimization", d: "LCP, CLS, INP tuned across templates." },
    { icon: Search, t: "Technical SEO Setup", d: "Crawl, index, hierarchy and metadata config." },
    { icon: Database, t: "Schema Markup Integration", d: "Structured data for the right page types." },
    { icon: Smartphone, t: "Mobile-First Development", d: "Mobile experience built first, scaled up." },
    { icon: Zap, t: "Performance Optimization", d: "Caching, lazy loading, asset pipelines." },
    { icon: Rocket, t: "SEO-Friendly Landing Pages", d: "Single-purpose pages designed to rank." },
    { icon: ListTree, t: "Site Structure Optimization", d: "Taxonomies, silos and URL architecture." },
    { icon: FileSearch, t: "Crawlability Optimization", d: "Robots, sitemaps and crawl efficiency." },
    { icon: Link2, t: "Internal Linking Structure", d: "Programmatic and contextual linking." },
    { icon: Smartphone, t: "Responsive UX Optimization", d: "Touch, tap targets and reflow tuning." },
    { icon: Activity, t: "Website Speed Improvements", d: "Targeted speed audits and fixes." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="SEO-friendly dev services"
          title="Everything technical, under one operational roof"
          sub="A full SEO-aware development menu — pick what you need, scale as you grow."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="group rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-45" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE US ---------- */
function WhyChooseUs() {
  const items = [
    { icon: Search, t: "SEO-aware developers", d: "Devs who think like SEO strategists." },
    { icon: EyeOff, t: "True white label", d: "Invisible delivery under your brand." },
    { icon: UserX, t: "No client poaching", d: "Strict no-contact with your end clients." },
    { icon: ShieldCheck, t: "Technical reliability", d: "Predictable, structured engineering." },
    { icon: Zap, t: "Fast-loading dev", d: "Performance baked into every template." },
    { icon: Layers, t: "Scalable fulfillment", d: "Capacity that grows with your agency." },
    { icon: MessageSquare, t: "Organized comms", d: "Slack/ClickUp with clear rhythm." },
    { icon: Wrench, t: "Maintenance support", d: "Long-term care for every site." },
    { icon: Gauge, t: "Performance optimization", d: "CWV monitoring and tuning." },
    { icon: ClipboardCheck, t: "SEO-focused QA", d: "Pre-launch SEO gate on every project." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies choose us"
          title="A technical partner SEO agencies can trust"
          sub="The combination of SEO awareness, structure and discipline agencies rarely find in dev vendors."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <it.icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-ink">{it.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{it.d}</p>
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
    { icon: ClipboardCheck, t: "SEO Requirement Analysis", d: "Goals, target keywords, technical baseline." },
    { icon: Compass, t: "Site Structure Planning", d: "Hierarchy, URLs, internal linking plan." },
    { icon: Code2, t: "SEO-Friendly Development", d: "Semantic, schema-ready, fast templates." },
    { icon: Gauge, t: "Performance Optimization", d: "Caching, assets, fonts, JS pipeline." },
    { icon: FileCheck2, t: "Technical SEO QA", d: "Crawl, schema, index and hierarchy checks." },
    { icon: Smartphone, t: "Responsive Testing", d: "Cross-device validation under load." },
    { icon: Rocket, t: "White Label Delivery", d: "Clean handoff under your brand and domain." },
    { icon: LifeBuoy, t: "Maintenance & Monitoring", d: "Ongoing CWV and SEO health monitoring." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our process"
          title="A predictable SEO development system"
          sub="Every project moves through the same disciplined SEO-aware stages."
        />
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.t} className="relative rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- CORE WEB VITALS ---------- */
function CoreWebVitals() {
  const items = [
    { icon: Zap, t: "Page speed", d: "Sub-2s load times across templates." },
    { icon: Gauge, t: "Performance optimization", d: "End-to-end audits and tuning." },
    { icon: Activity, t: "Core Web Vitals", d: "LCP, CLS, INP within Google thresholds." },
    { icon: ImageIcon, t: "Image optimization", d: "Modern formats, responsive sizes, lazy loading." },
    { icon: FileCode2, t: "Script optimization", d: "Defer, async and code-split JS bundles." },
    { icon: ServerCog, t: "Caching strategies", d: "Edge, page and object cache layers." },
    { icon: Smartphone, t: "Responsive loading", d: "Asset delivery tuned per device class." },
    { icon: Database, t: "Lazy loading", d: "Off-screen media loaded only when needed." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-24">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Core Web Vitals &amp; performance</div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Performance that supports rankings.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Performance is no longer optional for SEO. Every site we ship is engineered for Core Web Vitals from the architecture stage.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { v: "97+", k: "Avg. Lighthouse" },
                { v: "<1.8s", k: "Avg. LCP" },
                { v: "<0.05", k: "Avg. CLS" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-border bg-surface-elevated p-3 text-center shadow-soft">
                  <div className="text-base font-semibold text-ink">{s.v}</div>
                  <div className="text-[10px] text-muted-foreground">{s.k}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-surface-elevated p-4 shadow-soft">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-ink">Performance score</span>
                <span className="font-semibold text-emerald-600">97 / 100</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" style={{ width: "97%" }} />
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{it.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TECHNICAL SEO FEATURES ---------- */
function TechnicalSEO() {
  const items = [
    { icon: Database, t: "Schema-ready architecture", d: "Org, LocalBusiness, Product, FAQ, Article." },
    { icon: FileCode2, t: "Semantic HTML structure", d: "Proper sectioning, landmarks and roles." },
    { icon: ListTree, t: "Optimized heading hierarchy", d: "Single H1, clean H2/H3 nesting." },
    { icon: Link2, t: "Clean URL structure", d: "Readable, hierarchical, slug-friendly." },
    { icon: Network, t: "Internal linking optimization", d: "Contextual + programmatic linking." },
    { icon: FileCheck2, t: "Metadata support", d: "Title, description, OG and Twitter tags." },
    { icon: FileSearch, t: "Sitemap readiness", d: "XML sitemaps split by content type." },
    { icon: ShieldCheck, t: "Robots.txt optimization", d: "Crawl budget and access controls." },
    { icon: Search, t: "Indexation control", d: "Canonicals, noindex, hreflang handled cleanly." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Technical SEO features"
          title="The technical foundation rankings need"
          sub="A complete technical SEO baseline applied to every site we ship — not bolted on later."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECT TYPES ---------- */
function ProjectTypes() {
  const types = [
    { icon: MapPin, t: "Local SEO Websites", color: "from-amber-100 to-amber-50" },
    { icon: Briefcase, t: "Service Business", color: "from-sky-100 to-sky-50" },
    { icon: Target, t: "Lead Generation", color: "from-rose-100 to-rose-50" },
    { icon: HardHat, t: "Contractor Sites", color: "from-slate-100 to-slate-50" },
    { icon: Stethoscope, t: "Healthcare", color: "from-emerald-100 to-emerald-50" },
    { icon: Building2, t: "Agency Websites", color: "from-indigo-100 to-indigo-50" },
    { icon: Rocket, t: "Landing Pages", color: "from-violet-100 to-violet-50" },
    { icon: Globe2, t: "Multi-Location", color: "from-teal-100 to-teal-50" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Types of SEO projects"
          title="SEO-friendly builds across every vertical"
          sub="From local SEO sites to multi-location architectures — we ship across the verticals SEO agencies actually serve."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${p.color}`}>
                <p.icon className="h-10 w-10 text-ink/70" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink">{p.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">SEO-ready · responsive · CWV-optimized</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BEFORE / AFTER SHOWCASE ---------- */
function PerformanceShowcase() {
  const cases = [
    { t: "Slow site → optimized", before: { score: 38, lcp: "4.2s" }, after: { score: 97, lcp: "1.4s" } },
    { t: "Broken hierarchy → clean SEO", before: { score: 52, lcp: "3.6s" }, after: { score: 95, lcp: "1.6s" } },
    { t: "Bloated WP → lean rebuild", before: { score: 41, lcp: "5.1s" }, after: { score: 96, lcp: "1.5s" } },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Performance &amp; SEO showcase"
          title="Real before / after improvements"
          sub="A snapshot of measurable performance and SEO improvements after our rebuilds."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cases.map((c) => (
            <div key={c.t} className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
              <h3 className="text-base font-semibold text-ink">{c.t}</h3>
              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-rose-50/60 p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-rose-600">Before</div>
                  <div className="mt-2 text-2xl font-semibold text-ink">{c.before.score}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">Lighthouse</div>
                  <div className="mt-3 text-xs text-muted-foreground">LCP <span className="font-semibold text-ink">{c.before.lcp}</span></div>
                </div>
                <div className="rounded-2xl border border-border bg-emerald-50/60 p-4">
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-emerald-700">After</div>
                  <div className="mt-2 text-2xl font-semibold text-ink">{c.after.score}</div>
                  <div className="mt-1 text-[11px] text-muted-foreground">Lighthouse</div>
                  <div className="mt-3 text-xs text-muted-foreground">LCP <span className="font-semibold text-ink">{c.after.lcp}</span></div>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                <TrendingUp className="h-3 w-3" /> +{c.after.score - c.before.score} score gain
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MAINTENANCE ---------- */
function Maintenance() {
  const items = [
    { icon: Wrench, t: "Technical maintenance", d: "Updates, fixes and architectural care." },
    { icon: Gauge, t: "Speed monitoring", d: "Continuous CWV monitoring and alerts." },
    { icon: ShieldCheck, t: "SEO-safe updates", d: "Updates that respect rankings and structure." },
    { icon: LifeBuoy, t: "Emergency fixes", d: "Fast response when something breaks." },
    { icon: Layers, t: "Plugin management", d: "Tested updates without breakage." },
    { icon: Activity, t: "Uptime monitoring", d: "24/7 monitoring with alerting." },
    { icon: TrendingUp, t: "Performance reporting", d: "Monthly reports — agency-branded." },
    { icon: BadgeCheck, t: "Long-term partnership", d: "Ongoing optimization, not just fixes." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Maintenance &amp; support"
          title="Long-term technical care for SEO clients"
          sub="Keep every client site fast, healthy and rank-safe with structured ongoing support."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- STACK ---------- */
function Stack() {
  const tech = [
    { icon: Code2, t: "WordPress", d: "Custom themes & scalable CMS." },
    { icon: Layers, t: "Elementor", d: "Builder mastery without bloat." },
    { icon: Gauge, t: "Core Web Vitals Tools", d: "Lighthouse, CrUX, PSI workflow." },
    { icon: Database, t: "Schema Systems", d: "JSON-LD across page types." },
    { icon: Search, t: "SEO Plugins", d: "Yoast, Rank Math configured properly." },
    { icon: Activity, t: "Performance Tools", d: "Caching, image and asset optimization." },
    { icon: Smartphone, t: "Responsive Frameworks", d: "Mobile-first system across builds." },
    { icon: ServerCog, t: "Caching Systems", d: "Edge, page and object cache." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Technology stack" title="A focused, performance-first SEO stack" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((t) => (
            <div key={t.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{t.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { quote: "Finally a dev partner that doesn't break our SEO. CWV scores went from 42 to 96 across our agency portfolio in three months.", name: "Marcus L.", role: "Founder, SEO Agency" },
    { quote: "Their schema and internal linking implementation is the cleanest we've seen. Our local clients are ranking faster than ever.", name: "Priya S.", role: "Lead SEO Strategist" },
    { quote: "We trust them with every technical SEO migration we run. Zero ranking drops, every time.", name: "Daniel R.", role: "Owner, Digital Agency" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="Trusted by SEO agencies" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
              <Quote className="h-6 w-6 text-brand" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 font-semibold text-brand">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "Do you optimize for Core Web Vitals?", a: "Yes. CWV is part of our standard build process — LCP, CLS and INP are tuned across templates and validated before launch." },
    { q: "Do you implement schema markup?", a: "Yes. We implement JSON-LD schema for the relevant page types — Organization, LocalBusiness, Product, FAQ, Article and more." },
    { q: "Do you build mobile-first?", a: "Always. Mobile experience is built first, then scaled up to tablet and desktop with full fidelity." },
    { q: "Do you support SEO agencies?", a: "Yes — SEO agencies are our primary partners. We work as an extension of your team under your brand." },
    { q: "Do you provide maintenance?", a: "Yes — we offer ongoing maintenance plans including CWV monitoring, SEO-safe updates, backups and performance reporting." },
    { q: "How do revisions work?", a: "Each project includes structured revision rounds with clear scope and ownership." },
    { q: "Can you handle ongoing optimization?", a: "Yes. We support long-term technical SEO and performance optimization as a recurring engagement." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="SEO development questions" />
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-surface-elevated p-2 shadow-soft">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="px-4 text-left text-sm font-semibold text-ink hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="px-4 text-sm text-muted-foreground">{f.a}</AccordionContent>
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
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Build for rankings</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Need an SEO-aware white label dev partner?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Scale your SEO agency with a development team that protects rankings, performance and conversions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg" className="rounded-full bg-brand-foreground px-6 text-ink hover:bg-brand-foreground/90">
                <Link to="/contact">Request a free quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-6 text-brand-foreground hover:bg-white/10 hover:text-brand-foreground">
                <Link to="/contact">Schedule a discovery call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */
function SEOPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <Pains />
        <Approach />
        <ServicesIncluded />
        <WhyChooseUs />
        <Process />
        <CoreWebVitals />
        <TechnicalSEO />
        <ProjectTypes />
        <PerformanceShowcase />
        <Maintenance />
        <Stack />
        <Testimonials />
        <FAQ />
        <CTA />
        <RelatedServices currentKey="seo" />
      </main>
      <Footer />
    </div>
  );
}
