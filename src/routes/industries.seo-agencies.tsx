import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Search, Gauge, MapPin, Code2, Layers,
  Smartphone, EyeOff, FileLock2, UserX, Zap, ShieldCheck, Wrench,
  Compass, ClipboardCheck, Rocket, LifeBuoy, Quote, BadgeCheck,
  TrendingUp, Activity, MessageSquare, ListTree, Link2, Globe,
  Building2, Briefcase, HeartPulse, FormInput, Target, Sparkles,
  Database, BarChart3, LineChart, FileText, RefreshCw, Star,
  CheckCircle2, AlertTriangle, Bug, Filter, ScanLine,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/industries/seo-agencies")({
  head: () => ({
    meta: [
      { title: "Website Delivery for SEO Agencies | WLWD" },
      { name: "description", content: "Website delivery for SEO agencies. Local SEO sites, multi-location, schema, Core Web Vitals — built to rank, under your brand." },
      { property: "og:title", content: "Website Delivery for SEO Agencies | WLWD" },
      { property: "og:description", content: "Website delivery for SEO agencies. Local SEO sites, multi-location, schema, Core Web Vitals — built to rank, under your brand." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/industries/seo-agencies" },
      { name: "twitter:title", content: "Website Delivery for SEO Agencies | WLWD" },
      { name: "twitter:description", content: "Website delivery for SEO agencies. Local SEO sites, multi-location, schema, Core Web Vitals — built to rank, under your brand." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/industries/seo-agencies" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://whitelabelwebsitedevelopment.com/industries/seo-agencies\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Agencies\", \"item\": \"https://whitelabelwebsitedevelopment.com/industries/seo-agencies\"}]}, {\"@type\": \"WebPage\", \"name\": \"Website Delivery for SEO Agencies | WLWD — White Label Web Development\", \"description\": \"Website delivery for SEO agencies. Local SEO sites, multi-location, schema, Core Web Vitals — built to rank, under your brand.\", \"url\": \"https://whitelabelwebsitedevelopment.com/industries/seo-agencies\", \"isPartOf\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#website\"}}]}",
      },
    ],
  }),
  
  component: SeoAgenciesPage,
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
              Built for SEO Agencies
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              <span className="text-brand">Website Delivery for SEO Agencies</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              A specialized SEO agency backend development partner — technical SEO implementation, multi-location architecture, local landing pages and Core Web Vitals work, all shipped quietly under your brand so your strategy team can keep selling and scaling.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/contact">Request a free quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/contact">Book a discovery call</Link>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                { icon: Search, label: "SEO-aware development" },
                { icon: Gauge, label: "Core Web Vitals" },
                { icon: EyeOff, label: "White label delivery" },
                { icon: Code2, label: "Technical SEO support" },
                { icon: Layers, label: "Scalable fulfillment" },
                { icon: FileLock2, label: "NDA friendly" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <SeoMock />
        </div>
      </div>
    </section>
  );
}

function SeoMock() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <ScanLine className="h-3.5 w-3.5 text-brand" />
            <span>seo-dashboard · client-site.com</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Indexed</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Organic +90d", v: "+184%" },
            { k: "LCP", v: "1.5s" },
            { k: "CWV pass", v: "100%" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-background p-3 text-center">
              <div className="text-lg font-semibold text-ink">{s.v}</div>
              <div className="text-[10px] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {[
            { icon: Code2, label: "Schema markup", val: "Valid · 12 types" },
            { icon: ListTree, label: "Heading hierarchy", val: "Clean" },
            { icon: Link2, label: "Internal linking", val: "Optimized" },
            { icon: MapPin, label: "Local landing pages", val: "32 cities" },
            { icon: Smartphone, label: "Mobile-first build", val: "Pass" },
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
          <TrendingUp className="h-4 w-4 text-brand" /> Built to rank
        </div>
      </div>
    </div>
  );
}

/* ---------- PAINS ---------- */
function Pains() {
  const pains = [
    { icon: AlertTriangle, t: "Developers breaking SEO structure", d: "Rebuilds that wipe out canonicals, schema and metadata." },
    { icon: Gauge, t: "Poor Core Web Vitals", d: "Themes and builders failing LCP, CLS and INP." },
    { icon: Code2, t: "Weak technical SEO", d: "Missing schema, broken canonicals, unindexed pages." },
    { icon: Zap, t: "Slow websites", d: "Heavy assets killing both rankings and conversions." },
    { icon: Smartphone, t: "Poor mobile UX", d: "Layouts that fail on real mobile devices." },
    { icon: Database, t: "No schema support", d: "Devs that don't ship structured data." },
    { icon: Bug, t: "SEO-unfriendly page builders", d: "Bloated DOM and unsemantic markup." },
    { icon: Filter, t: "Inconsistent execution", d: "Quality drifts every project, every dev." },
    { icon: ClipboardCheck, t: "Missed campaign deadlines", d: "Dev delays blocking SEO launches." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why SEO agencies need specialists"
          title="Generic developers quietly destroy SEO performance"
          sub="The same technical problems show up across SEO agency portfolios — and they directly hurt rankings."
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

/* ---------- SOLUTION ---------- */
function Solution() {
  const items = [
    { icon: Search, t: "SEO-first development", d: "Every build engineered around ranking signals." },
    { icon: Code2, t: "Technical SEO implementation", d: "Schema, canonicals, robots, sitemaps shipped right." },
    { icon: Zap, t: "Fast-loading websites", d: "Optimized assets, minimal JS, fast TTFB." },
    { icon: Target, t: "Conversion-focused UX", d: "Rankings turned into leads and revenue." },
    { icon: Layers, t: "Scalable workflows", d: "Multi-site, multi-location capacity ready." },
    { icon: Wrench, t: "Maintenance systems", d: "SEO-safe updates and ongoing care." },
    { icon: MessageSquare, t: "Organized communication", d: "Slack/ClickUp with structured rhythm." },
    { icon: EyeOff, t: "White label fulfillment", d: "Invisible delivery under your brand." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our SEO-agency-focused solution"
          title="A development partner that thinks like an SEO"
          sub="A structured fulfillment system designed around how SEO agencies actually deliver client work."
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
function Services() {
  const services = [
    { icon: Search, t: "SEO-Friendly Website Development", d: "Schema-ready, semantic, indexable builds." },
    { icon: MapPin, t: "Local SEO Landing Pages", d: "City and service-area pages that rank." },
    { icon: Building2, t: "Multi-Location Website Development", d: "Scalable architecture for 10–500+ locations." },
    { icon: Code2, t: "Technical SEO Implementation", d: "Canonicals, robots, sitemaps, hreflang." },
    { icon: Gauge, t: "Core Web Vitals Optimization", d: "LCP, CLS and INP tuned to pass." },
    { icon: Layers, t: "White Label WordPress Development", d: "Custom builds, agency-friendly editing." },
    { icon: RefreshCw, t: "Website Redesigns", d: "Modernize without losing rankings." },
    { icon: Wrench, t: "Technical SEO Fixes", d: "Indexation, crawl and migration cleanup." },
    { icon: ScanLine, t: "Website Audits", d: "Technical, SEO, performance and UX audits." },
    { icon: Rocket, t: "Landing Page Development", d: "Conversion-focused pages for SEO traffic." },
    { icon: LifeBuoy, t: "Website Maintenance", d: "SEO-safe updates and monitoring." },
    { icon: Database, t: "Schema Markup Implementation", d: "Org, LocalBusiness, FAQ, Product, Article." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Services for SEO agencies"
          title="A complete SEO development menu"
          sub="Everything an SEO agency needs from a development partner — under one operational roof."
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
    { icon: Search, t: "SEO-aware developers", d: "Devs who understand ranking signals." },
    { icon: EyeOff, t: "True white label", d: "Invisible delivery under your brand." },
    { icon: UserX, t: "No client poaching", d: "Strict no-contact policy." },
    { icon: ShieldCheck, t: "Technical reliability", d: "QA-gated builds, predictable output." },
    { icon: MessageSquare, t: "Organized communication", d: "Slack/ClickUp with clear rhythm." },
    { icon: Wrench, t: "Maintenance support", d: "SEO-safe ongoing care." },
    { icon: Layers, t: "Scalable fulfillment", d: "Capacity for multi-client portfolios." },
    { icon: Activity, t: "Fast revisions", d: "Predictable cycles, no silence." },
    { icon: Gauge, t: "CWV optimization", d: "Sub-2s LCP across devices." },
    { icon: BadgeCheck, t: "Structured technical QA", d: "Schema, indexation and CWV gates." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why SEO agencies choose us"
          title="Operationally mature, SEO-first"
          sub="The combination of technical expertise, structure and discipline that SEO agencies rarely find in dev vendors."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <it.icon className="h-4 w-4" />
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
    { icon: ClipboardCheck, t: "SEO Requirement Analysis", d: "Keywords, intent, competitors, KPIs." },
    { icon: Compass, t: "Site Structure Planning", d: "IA, taxonomies, internal linking strategy." },
    { icon: Sparkles, t: "SEO-Friendly UI/UX", d: "Semantic, accessible, conversion-focused." },
    { icon: Code2, t: "Technical Optimization", d: "Schema, canonicals, performance, crawl." },
    { icon: Gauge, t: "Core Web Vitals QA", d: "LCP, CLS, INP validated pre-launch." },
    { icon: Smartphone, t: "Responsive Testing", d: "Real-device QA across breakpoints." },
    { icon: Rocket, t: "White Label Delivery", d: "Clean handoff under your brand." },
    { icon: LifeBuoy, t: "Maintenance & Ongoing Support", d: "SEO-safe long-term care." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our SEO development process"
          title="A predictable, SEO-aware delivery system"
          sub="Every project moves through the same disciplined SEO-aware stages — no shortcuts, no surprises."
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

/* ---------- LOCAL & MULTI-LOCATION ---------- */
function LocalSeo() {
  const items = [
    { icon: MapPin, t: "City pages", d: "Templated, unique-content city landing pages." },
    { icon: Globe, t: "Local SEO architecture", d: "Hub-and-spoke IA built around geo intent." },
    { icon: Compass, t: "Service-area structure", d: "Service × location matrices that scale." },
    { icon: Link2, t: "Internal linking systems", d: "Programmatic, contextual cross-linking." },
    { icon: FormInput, t: "Location-based landing pages", d: "Per-location lead capture and proof." },
    { icon: Database, t: "Local schema support", d: "LocalBusiness, GeoCoordinates, OpeningHours." },
    { icon: Layers, t: "Scalable SEO structures", d: "10 to 1,000+ pages on one foundation." },
    { icon: TrendingUp, t: "Performance-aware scaling", d: "Speed maintained as page count grows." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Local SEO & multi-location"
          title="Built for agencies that scale local SEO programs"
          sub="The technical backbone for city pages, multi-location architecture and programmatic local SEO."
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

/* ---------- CWV & PERFORMANCE ---------- */
function Performance() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Core Web Vitals & performance"
          title="Engineered for the metrics that move rankings"
          sub="Every site we ship is tuned for Core Web Vitals, mobile speed and SEO-friendly code structure."
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Zap, t: "Speed optimization", d: "Caching, CDN, asset pipelines." },
              { icon: Gauge, t: "Core Web Vitals", d: "LCP, CLS, INP measured on field data." },
              { icon: Sparkles, t: "Image optimization", d: "AVIF/WebP, responsive sizes, lazy load." },
              { icon: Code2, t: "Script optimization", d: "Defer, split, remove blocking JS." },
              { icon: Database, t: "Caching systems", d: "Page, object, edge and browser caches." },
              { icon: Smartphone, t: "Responsive performance", d: "Mobile-first speed budgets enforced." },
              { icon: ListTree, t: "SEO-friendly code", d: "Semantic HTML5, clean DOM, valid markup." },
              { icon: BadgeCheck, t: "QA gates", d: "Schema, CWV and indexation pre-launch." },
            ].map((it) => (
              <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{it.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-elevated">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <BarChart3 className="h-4 w-4 text-brand" /> Performance scorecard
              </div>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">All passing</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                { l: "LCP", v: "1.5s" }, { l: "CLS", v: "0.02" }, { l: "INP", v: "152ms" },
                { l: "TTFB", v: "220ms" }, { l: "FCP", v: "1.0s" }, { l: "TBT", v: "98ms" },
              ].map((m) => (
                <div key={m.l} className="rounded-xl border border-border bg-background p-3">
                  <div className="text-sm font-semibold text-ink">{m.v}</div>
                  <div className="text-[10px] text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {[
                { l: "Performance", v: 96 },
                { l: "SEO", v: 100 },
                { l: "Accessibility", v: 94 },
                { l: "Best practices", v: 95 },
              ].map((m) => (
                <div key={m.l}>
                  <div className="flex items-center justify-between text-xs text-ink">
                    <span>{m.l}</span><span className="font-semibold">{m.v}</span>
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand to-emerald-400" style={{ width: `${m.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WORKFLOW / WHITE LABEL ---------- */
function Workflow() {
  const items = [
    { icon: EyeOff, t: "Agency-safe workflow", d: "Invisible to your clients, end-to-end." },
    { icon: FileLock2, t: "NDA-friendly process", d: "Signed before discovery if required." },
    { icon: UserX, t: "No client contact", d: "Strict no-poaching policy enforced." },
    { icon: MessageSquare, t: "Organized communication", d: "Shared Slack and ClickUp channels." },
    { icon: ClipboardCheck, t: "Structured revisions", d: "Defined rounds, clear ownership." },
    { icon: LifeBuoy, t: "Ongoing support", d: "Same team, every project, every month." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="SEO agency workflow"
          title="A white label system built for SEO operations"
          sub="The operational backbone that makes outsourcing development genuinely safe for SEO agencies."
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
    { icon: MapPin, t: "Local SEO Websites", color: "from-emerald-100 to-emerald-50" },
    { icon: FormInput, t: "Lead Generation Websites", color: "from-amber-100 to-amber-50" },
    { icon: Wrench, t: "Contractor SEO Websites", color: "from-slate-100 to-slate-50" },
    { icon: HeartPulse, t: "Healthcare SEO Websites", color: "from-rose-100 to-rose-50" },
    { icon: Building2, t: "Multi-Location Businesses", color: "from-sky-100 to-sky-50" },
    { icon: Briefcase, t: "Service Business Websites", color: "from-indigo-100 to-indigo-50" },
    { icon: Rocket, t: "SEO Landing Pages", color: "from-violet-100 to-violet-50" },
    { icon: Sparkles, t: "Agency Websites", color: "from-teal-100 to-teal-50" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Types of SEO projects"
          title="Across every vertical SEO agencies serve"
          sub="From contractors to multi-location healthcare — we ship SEO-aware sites built for the way each vertical actually ranks."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${p.color}`}>
                <p.icon className="h-10 w-10 text-ink/70" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink">{p.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">SEO-aware · responsive · CWV-optimized</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MAINTENANCE ---------- */
function Maintenance() {
  const items = [
    { icon: Wrench, t: "Technical maintenance", d: "Core, plugin and stack updates." },
    { icon: Activity, t: "Speed monitoring", d: "Continuous CWV and uptime tracking." },
    { icon: Search, t: "SEO-safe updates", d: "Changes that protect canonicals & structure." },
    { icon: Layers, t: "Plugin management", d: "Audit, replace and harden plugins." },
    { icon: LifeBuoy, t: "Emergency fixes", d: "Same-day response for ranking issues." },
    { icon: TrendingUp, t: "Ongoing optimization", d: "Iterative CWV and conversion gains." },
    { icon: FileText, t: "Reporting support", d: "Monthly health and performance reports." },
    { icon: ShieldCheck, t: "Security hardening", d: "Headers, WAF, malware scanning." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Long-term maintenance & support"
          title="Recurring care that protects rankings over time"
          sub="Ongoing support designed around the SEO lifecycle — not just bug fixes."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
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
    { icon: Globe, t: "WordPress", d: "Reliable, editable foundation." },
    { icon: Layers, t: "Elementor", d: "Agency-friendly visual builds." },
    { icon: Code2, t: "Technical SEO Systems", d: "Indexation and crawl tooling." },
    { icon: Database, t: "Schema Markup", d: "JSON-LD across all key types." },
    { icon: Gauge, t: "Performance Optimization", d: "Caching, CDN, asset pipelines." },
    { icon: Search, t: "SEO Plugins", d: "Yoast, RankMath, custom solutions." },
    { icon: Smartphone, t: "Responsive Frameworks", d: "Mobile-first design systems." },
    { icon: ScanLine, t: "Caching Systems", d: "Edge, page and object caching." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Technology stack" title="A focused, SEO-grade stack" />
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
    { quote: "They migrated a 240-page local SEO site without losing a single ranking. Schema, redirects, CWV — handled flawlessly.", name: "Hannah B.", role: "Technical SEO Lead, SEO Agency" },
    { quote: "Finally, developers who understand canonicals, internal linking and crawl budgets. Our entire dev pipeline runs through them now.", name: "Omar K.", role: "Director, Search Marketing Agency" },
    { quote: "We ship 8–12 city pages a month with them. Same template quality, every time, fully under our brand.", name: "Sofia M.", role: "Founder, Local SEO Consultancy" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="Trusted by SEO agencies" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
              <div className="flex items-center gap-1 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand" />
                ))}
              </div>
              <Quote className="mt-3 h-6 w-6 text-brand" />
              <blockquote className="mt-3 text-sm leading-relaxed text-ink">“{t.quote}”</blockquote>
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
    { q: "Do you optimize for SEO?", a: "Every build is SEO-aware by default — semantic HTML5, schema, indexation controls, Core Web Vitals and clean URLs are part of the standard delivery." },
    { q: "Do you support local SEO websites?", a: "Yes. Local SEO is a core specialty — city pages, service-area architecture, LocalBusiness schema and programmatic location pages." },
    { q: "Do you implement schema?", a: "Yes — JSON-LD across Organization, LocalBusiness, FAQ, Product, Article, Review and custom types as needed for ranking." },
    { q: "Can you support multiple SEO clients?", a: "Yes. We're built for agencies running 5 to 100+ active SEO client sites with consistent quality across every deliverable." },
    { q: "Do you provide maintenance?", a: "Yes — three retainer tiers covering SEO-safe updates, monitoring, security, performance and dev edits." },
    { q: "How do revisions work?", a: "Each project includes structured revision rounds with clear scope and same-day cycles during launches." },
    { q: "Do you work under agency branding?", a: "Always. Fully white label, NDA-friendly, no client-facing contact — your brand, end-to-end." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="SEO agency questions" />
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
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Built for SEO agencies</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Need a reliable backend partner for your SEO agency?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Scale your SEO agency with SEO-aware development support — faster sites, cleaner technical SEO, and fulfillment that actually understands rankings.
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
function SeoAgenciesPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <Pains />
        <Solution />
        <Services />
        <WhyChooseUs />
        <Process />
        <LocalSeo />
        <Performance />
        <Workflow />
        <ProjectTypes />
        <Maintenance />
        <Stack />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
