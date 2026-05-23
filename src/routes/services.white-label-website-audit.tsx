import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Search, Gauge, Smartphone, ShieldCheck, Wrench,
  FileSearch, BarChart3, Activity, Zap, Eye, EyeOff, FileLock2, UserX,
  ClipboardCheck, Compass, Bug, AlertTriangle, ListTree, Link2, Lock,
  TrendingUp, MousePointerClick, MessageSquare, Quote, CheckCircle2,
  Layers, Code2, FileText, LineChart, Rocket, LifeBuoy, Accessibility,
  Database, Globe, Sparkles, Filter, BadgeCheck, Building2, Briefcase,
  Users, Target, Map, ScanLine, Cpu, ServerCog,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/white-label-website-audit")({
  head: () => ({
    meta: [
      { title: "White Label Website Audit & Technical Review \u2014 White Label Website Development" },
      { name: "description", content: "Professional white label website audits for agencies \u2014 technical SEO, Core Web Vitals, performance, UX and conversion reviews delivered under your brand." },
      { property: "og:title", content: "White Label Website Audit & Technical Review \u2014 White Label Website Development" },
      { property: "og:description", content: "Professional white label website audits for agencies \u2014 technical SEO, Core Web Vitals, performance, UX and conversion reviews delivered under your brand." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/services/white-label-website-audit" },
      { name: "twitter:title", content: "White Label Website Audit & Technical Review \u2014 White Label Website Development" },
      { name: "twitter:description", content: "Professional white label website audits for agencies \u2014 technical SEO, Core Web Vitals, performance, UX and conversion reviews delivered under your brand." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/services/white-label-website-audit" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Services\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"White Label Website Audit\", \"item\": \"https://whitelabelwebsitedevelopment.com/services/white-label-website-audit\"}]}, {\"@type\": \"Service\", \"name\": \"White Label Website Audit\", \"description\": \"Performance, SEO and accessibility website audits delivered as white label reports to agencies.\", \"url\": \"https://whitelabelwebsitedevelopment.com/services/white-label-website-audit\", \"provider\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#organization\"}, \"areaServed\": \"Global\", \"serviceType\": \"White Label Website Audit\", \"audience\": {\"@type\": \"Audience\", \"audienceType\": \"Marketing and SEO agencies\"}}]}",
      },
    ],
  }),
  
  component: AuditPage,
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
              <FileSearch className="h-3.5 w-3.5 text-brand" />
              White Label Website Audits
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              Professional technical audits <span className="text-brand">under your brand</span>.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              SEO-aware, performance-focused website audits for agencies — delivered as agency-ready reports with deep technical analysis and clear, actionable recommendations.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/contact">Request an audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/contact">Book a discovery call</Link>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                { icon: Search, label: "SEO-aware analysis" },
                { icon: EyeOff, label: "White label reports" },
                { icon: Gauge, label: "Core Web Vitals" },
                { icon: Activity, label: "Performance review" },
                { icon: Smartphone, label: "Mobile UX checks" },
                { icon: BadgeCheck, label: "Actionable fixes" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <AuditMock />
        </div>
      </div>
    </section>
  );
}

function AuditMock() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <ScanLine className="h-3.5 w-3.5 text-brand" />
            <span>audit · client-site.com</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Report ready</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Performance", v: "94" },
            { k: "SEO", v: "98" },
            { k: "Accessibility", v: "92" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-background p-3 text-center">
              <div className="text-lg font-semibold text-ink">{s.v}</div>
              <div className="text-[10px] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { l: "LCP", v: "1.6s", c: "text-emerald-600" },
            { l: "CLS", v: "0.02", c: "text-emerald-600" },
            { l: "INP", v: "168ms", c: "text-emerald-600" },
          ].map((m) => (
            <div key={m.l} className="rounded-xl border border-border bg-background p-2 text-center">
              <div className={`text-sm font-semibold ${m.c}`}>{m.v}</div>
              <div className="text-[10px] text-muted-foreground">{m.l}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 space-y-2">
          {[
            { icon: AlertTriangle, label: "Render-blocking JS", val: "12 issues", c: "text-amber-600" },
            { icon: Search, label: "Missing schema", val: "4 pages", c: "text-amber-600" },
            { icon: Smartphone, label: "Mobile usability", val: "Pass", c: "text-emerald-600" },
            { icon: Link2, label: "Broken internal links", val: "0", c: "text-emerald-600" },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <r.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-medium text-ink">{r.label}</span>
              </div>
              <span className={`text-[11px] font-medium ${r.c}`}>{r.val}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-border bg-background p-3 shadow-soft md:block">
        <div className="flex items-center gap-2 text-xs font-medium text-ink">
          <FileText className="h-4 w-4 text-brand" /> White label PDF report
        </div>
      </div>
    </div>
  );
}

/* ---------- WHY AGENCIES NEED AUDITS ---------- */
function Pains() {
  const pains = [
    { icon: Search, t: "Technical SEO issues", d: "Crawl errors, indexation gaps, schema problems." },
    { icon: Zap, t: "Slow-loading websites", d: "Heavy themes and blocking scripts killing speed." },
    { icon: Gauge, t: "Poor Core Web Vitals", d: "LCP, CLS and INP failing on real devices." },
    { icon: ListTree, t: "Indexation problems", d: "Pages missing or duplicated in Google's index." },
    { icon: Smartphone, t: "Mobile usability issues", d: "Tap targets, layout shifts and viewport bugs." },
    { icon: Layers, t: "Messy site structure", d: "Confusing IA hurting both UX and rankings." },
    { icon: MousePointerClick, t: "Broken UX flows", d: "Forms, navigation and CTAs that quietly fail." },
    { icon: TrendingUp, t: "Poor conversions", d: "Traffic without leads — a usability problem." },
    { icon: Bug, t: "Unreliable developers", d: "No clear technical owner for client websites." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies need audits"
          title="Most client websites are quietly broken"
          sub="The same technical, SEO and UX problems show up across agency portfolios — and they're invisible until someone audits them."
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

/* ---------- WHAT OUR AUDITS COVER ---------- */
function AuditCoverage() {
  const items = [
    { icon: Search, t: "Technical SEO Audit", d: "Crawlability, indexation, canonicals, redirects." },
    { icon: Activity, t: "Website Performance Audit", d: "Asset weight, render path, caching, CDN." },
    { icon: Gauge, t: "Core Web Vitals Analysis", d: "LCP, CLS, INP measured on real device data." },
    { icon: Smartphone, t: "Mobile Responsiveness Audit", d: "Viewport, tap targets, layout integrity." },
    { icon: MousePointerClick, t: "UX & Conversion Review", d: "CTA visibility, forms, friction, hierarchy." },
    { icon: ShieldCheck, t: "Security & Maintenance Review", d: "SSL, headers, plugins, updates, hardening." },
    { icon: Wrench, t: "WordPress Health Audit", d: "Themes, plugins, conflicts, core updates." },
    { icon: Code2, t: "Schema & Structured Data", d: "JSON-LD validation, types, coverage gaps." },
    { icon: Layers, t: "Site Structure Analysis", d: "IA, navigation, taxonomies and depth." },
    { icon: Globe, t: "Crawlability & Indexation", d: "Robots, sitemaps, log analysis, coverage." },
    { icon: Zap, t: "Speed Optimization Audit", d: "TTFB, JS bloat, image and font delivery." },
    { icon: Accessibility, t: "Accessibility Review", d: "WCAG checks, contrast, keyboard, ARIA." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="What our audits cover"
          title="A complete technical review of every client website"
          sub="One unified audit framework spanning SEO, performance, UX, security and accessibility — the full technical picture in one report."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((s) => (
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

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { icon: ScanLine, t: "Website Analysis", d: "Initial scan, scope and access setup." },
    { icon: Code2, t: "Technical Review", d: "Architecture, code quality and stack review." },
    { icon: Search, t: "SEO & Performance Evaluation", d: "Indexation, schema, CWV and page speed." },
    { icon: MousePointerClick, t: "UX & Conversion Review", d: "Flow, hierarchy, CTAs and friction points." },
    { icon: Filter, t: "Issue Prioritization", d: "Impact vs. effort scoring across findings." },
    { icon: FileText, t: "White Label Report Creation", d: "Branded, client-ready documentation." },
    { icon: Rocket, t: "Delivery & Recommendations", d: "Walkthrough, fixes, optional implementation." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our audit process"
          title="A structured, repeatable audit system"
          sub="Every website moves through the same disciplined audit stages — no improvisation, no missed checks."
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

/* ---------- WHITE LABEL REPORTING ---------- */
function WhiteLabelReports() {
  const items = [
    { icon: EyeOff, t: "Agency branding support", d: "Your logo, colors, typography on every page." },
    { icon: FileText, t: "Client-ready reports", d: "Polished PDFs designed for client delivery." },
    { icon: BadgeCheck, t: "Professional presentation", d: "Executive summary, scorecards, visuals." },
    { icon: ClipboardCheck, t: "Actionable recommendations", d: "Fixes mapped to impact and priority." },
    { icon: Layers, t: "Organized documentation", d: "Sectioned by SEO, performance, UX, security." },
    { icon: FileLock2, t: "White label workflow", d: "NDA-friendly delivery, no third-party brand." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="White label reporting"
          title="Reports your clients will think you wrote"
          sub="Professionally designed, fully branded audit reports — built for agencies to deliver as their own."
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
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
          <ReportMock />
        </div>
      </div>
    </section>
  );
}

function ReportMock() {
  return (
    <div className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-elevated">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <div className="flex items-center gap-2 text-xs font-medium text-ink">
          <div className="h-5 w-5 rounded bg-brand" />
          <span className="font-semibold">Your Agency</span>
        </div>
        <span className="text-[10px] text-muted-foreground">Audit Report · Q2</span>
      </div>
      <div className="mt-4">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-brand">Executive summary</div>
        <h4 className="mt-1 text-base font-semibold text-ink">Website Health Score: 88 / 100</h4>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-[88%] rounded-full bg-gradient-to-r from-brand to-emerald-400" />
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3">
        {[
          { l: "Critical issues", v: "3", c: "text-rose-600" },
          { l: "High priority", v: "7", c: "text-amber-600" },
          { l: "Medium", v: "14", c: "text-sky-600" },
          { l: "Quick wins", v: "9", c: "text-emerald-600" },
        ].map((m) => (
          <div key={m.l} className="rounded-xl border border-border bg-background p-3">
            <div className={`text-lg font-semibold ${m.c}`}>{m.v}</div>
            <div className="text-[10px] text-muted-foreground">{m.l}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 space-y-2">
        {[
          "1. Optimize LCP image on homepage",
          "2. Add Product schema to 12 pages",
          "3. Fix mobile tap targets in nav",
          "4. Compress hero video asset",
        ].map((r) => (
          <div key={r} className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-xs text-ink">
            <span>{r}</span>
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- TECHNICAL SEO & PERFORMANCE ---------- */
function TechnicalSEO() {
  const items = [
    { icon: Gauge, t: "Core Web Vitals", d: "LCP, CLS, INP measured against field data." },
    { icon: Zap, t: "Page speed", d: "TTFB, asset delivery, render-blocking analysis." },
    { icon: Code2, t: "Schema markup", d: "JSON-LD validation and coverage gaps." },
    { icon: ListTree, t: "Semantic structure", d: "Headings, landmarks, document outline." },
    { icon: Smartphone, t: "Mobile optimization", d: "Mobile-first rendering and usability." },
    { icon: Link2, t: "Internal linking", d: "Depth, anchor distribution, orphan pages." },
    { icon: ScanLine, t: "Indexation", d: "Coverage report, canonicals, duplicates." },
    { icon: Globe, t: "Crawlability", d: "Robots, sitemaps, crawl budget analysis." },
    { icon: FileText, t: "Metadata", d: "Titles, descriptions, OG and Twitter tags." },
    { icon: Map, t: "URL structure", d: "Hierarchy, slugs, parameters, redirects." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Technical SEO & performance"
          title="The full technical layer, examined in depth"
          sub="Dashboard-grade analysis of every signal that shapes ranking and performance."
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

/* ---------- UX & CONVERSION REVIEW ---------- */
function UXReview() {
  const items = [
    { icon: Target, t: "CTA visibility", d: "Placement, contrast and decision clarity." },
    { icon: Smartphone, t: "Mobile UX", d: "Thumb zones, gestures, real-device behavior." },
    { icon: FileText, t: "Readability", d: "Type scale, line length, contrast, rhythm." },
    { icon: Layers, t: "Visual hierarchy", d: "Scannability and information priority." },
    { icon: Compass, t: "Navigation flow", d: "Wayfinding, depth, breadcrumbs, search." },
    { icon: Sparkles, t: "Landing page structure", d: "Hero, proof, offer, friction analysis." },
    { icon: TrendingUp, t: "Lead generation optimization", d: "Forms, fields, friction and intent fit." },
    { icon: MousePointerClick, t: "Interaction quality", d: "Micro-feedback, states, error handling." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="UX & conversion review"
          title="Audits that connect technical health to business outcomes"
          sub="Every audit includes a usability and conversion layer — because rankings without conversions don't move the business."
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

/* ---------- COMMON ISSUES ---------- */
function CommonIssues() {
  const issues = [
    { icon: Zap, t: "Slow-loading pages", d: "Unoptimized images, heavy JS, no caching." },
    { icon: Smartphone, t: "Broken mobile layouts", d: "Overflow, tap target overlap, viewport bugs." },
    { icon: ListTree, t: "Poor heading structure", d: "Missing H1s, skipped levels, no hierarchy." },
    { icon: Search, t: "Technical SEO errors", d: "Canonicals, redirects, robots misconfigured." },
    { icon: TrendingUp, t: "Weak conversion flow", d: "Buried CTAs, friction-heavy forms." },
    { icon: Code2, t: "Missing schema", d: "No structured data on key page types." },
    { icon: Bug, t: "Plugin conflicts", d: "Stack instability and console errors." },
    { icon: Accessibility, t: "Accessibility issues", d: "Contrast, alt text, keyboard navigation." },
    { icon: Link2, t: "Bad internal linking", d: "Orphans, dead ends, weak anchor strategy." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Common issues we find"
          title="Patterns we see across hundreds of audits"
          sub="Most websites quietly fail on the same handful of issues — here's what we routinely surface and fix."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {issues.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
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

/* ---------- WHO IT'S FOR ---------- */
function WhoFor() {
  const items = [
    { icon: Search, t: "SEO Agencies", d: "Add deep technical audits to your SEO retainers." },
    { icon: Briefcase, t: "Marketing Agencies", d: "Diagnose client websites before campaigns launch." },
    { icon: Map, t: "Local SEO Consultants", d: "Find technical blockers hurting local rankings." },
    { icon: Users, t: "Freelancers", d: "Offer enterprise-grade audits without the team." },
    { icon: Wrench, t: "Maintenance Providers", d: "Quarterly health checks for managed websites." },
    { icon: Building2, t: "Agencies Managing Client Sites", d: "Standardize audit quality across your portfolio." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Who this service is for"
          title="Built for agencies that need depth at scale"
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

/* ---------- DASHBOARD SHOWCASE ---------- */
function DashboardShowcase() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Audit dashboards & reports"
          title="A preview of what your clients will receive"
          sub="Modern, dashboard-inspired reporting — every audit comes with scorecards, technical breakdowns and prioritized recommendations."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <BarChart3 className="h-4 w-4 text-brand" /> Website scorecard
            </div>
            <div className="mt-5 space-y-3">
              {[
                { l: "Performance", v: 94 },
                { l: "SEO", v: 98 },
                { l: "Accessibility", v: 92 },
                { l: "Best practices", v: 90 },
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

          <div className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <LineChart className="h-4 w-4 text-brand" /> Performance metrics
            </div>
            <div className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                { l: "LCP", v: "1.6s" }, { l: "CLS", v: "0.02" }, { l: "INP", v: "168ms" },
                { l: "TTFB", v: "240ms" }, { l: "FCP", v: "1.1s" }, { l: "TBT", v: "120ms" },
              ].map((m) => (
                <div key={m.l} className="rounded-xl border border-border bg-background p-3">
                  <div className="text-sm font-semibold text-ink">{m.v}</div>
                  <div className="text-[10px] text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-emerald-50 px-3 py-2 text-xs font-medium text-emerald-700">
              All Core Web Vitals passing on field data
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
            <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
              <ClipboardCheck className="h-4 w-4 text-brand" /> Issue summary
            </div>
            <div className="mt-5 space-y-2">
              {[
                { l: "Critical", v: 3, c: "bg-rose-100 text-rose-700" },
                { l: "High", v: 7, c: "bg-amber-100 text-amber-700" },
                { l: "Medium", v: 14, c: "bg-sky-100 text-sky-700" },
                { l: "Low", v: 21, c: "bg-slate-100 text-slate-700" },
                { l: "Quick wins", v: 9, c: "bg-emerald-100 text-emerald-700" },
              ].map((m) => (
                <div key={m.l} className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-xs">
                  <span className="font-medium text-ink">{m.l}</span>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${m.c}`}>{m.v} issues</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ONGOING SUPPORT ---------- */
function OngoingSupport() {
  const items = [
    { icon: Wrench, t: "Implementation help", d: "We don't just hand off — we can fix what we find." },
    { icon: Code2, t: "Website fixes", d: "Code-level remediation across CMS and stack." },
    { icon: ShieldCheck, t: "Maintenance", d: "Monitoring, updates and security hardening." },
    { icon: TrendingUp, t: "Ongoing optimization", d: "Iterative CWV, conversion and SEO work." },
    { icon: LifeBuoy, t: "Technical support", d: "Dedicated Slack/ClickUp for escalations." },
    { icon: EyeOff, t: "White label development", d: "Audit + build, all under your brand." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Ongoing support"
          title="Audits are just the beginning"
          sub="From audit to implementation to long-term maintenance — one technical partner for the entire lifecycle."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { quote: "Their audit caught a canonical issue that had been bleeding rankings for our client for months. Detailed, actionable, and delivered under our brand.", name: "Hannah B.", role: "Technical SEO Lead, SEO Agency" },
    { quote: "We white-label their audits as part of our retainer onboarding. Clients are blown away every time — feels like an in-house technical team.", name: "Omar K.", role: "Director, Marketing Agency" },
    { quote: "The Core Web Vitals breakdown alone is worth the engagement. Clear, prioritized, and tied directly to revenue impact.", name: "Sofia M.", role: "Founder, Local SEO Consultancy" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="Trusted by agencies for technical audits" />
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
    { q: "Do you provide white label reports?", a: "Yes — every audit is delivered as a fully branded, client-ready PDF using your agency's logo, colors and typography." },
    { q: "Can we use our branding?", a: "Absolutely. We never appear in client-facing deliverables. The report looks and reads as if your agency produced it in-house." },
    { q: "Do you audit WordPress websites?", a: "Yes. WordPress and WooCommerce are core specialties — including theme, plugin and stack-level health reviews." },
    { q: "Do you review Core Web Vitals?", a: "Yes. We analyze LCP, CLS and INP using both lab and field data, with detailed remediation paths for each metric." },
    { q: "Do you provide implementation support?", a: "Yes. We can implement every recommendation as a follow-up engagement under your brand — same team, same standards." },
    { q: "How fast is delivery?", a: "Standard audits are delivered within 5–7 business days. Expedited timelines are available for urgent client work." },
    { q: "Can you audit multiple websites?", a: "Yes. We support agencies running portfolio-wide audits with consistent methodology and standardized reporting." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="Audit & technical review questions" />
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
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Let's audit together</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Need professional white label website audits?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Improve client websites with deep technical reviews, SEO analysis and conversion-focused recommendations — under your brand.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg" className="rounded-full bg-brand-foreground px-6 text-ink hover:bg-brand-foreground/90">
                <Link to="/contact">Request an audit <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
function AuditPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <Pains />
        <AuditCoverage />
        <Process />
        <WhiteLabelReports />
        <TechnicalSEO />
        <UXReview />
        <CommonIssues />
        <WhoFor />
        <DashboardShowcase />
        <OngoingSupport />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
