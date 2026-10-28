import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Check, Sparkles, Rocket, Crown, Layers,
  Code2, Palette, ShoppingBag, Wrench, FileSearch, Search, Gauge,
  EyeOff, FileLock2, UserX, Smartphone, ShieldCheck, MessageSquare,
  ClipboardCheck, Compass, Zap, TrendingUp, BadgeCheck, LineChart,
  Quote, CheckCircle2, Clock, Building2, Briefcase, Globe, MapPin,
  RefreshCw, LifeBuoy, Database, FileText, Users, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: "White Label Web Development Pricing | WLWD" },
      { name: "description", content: "Clear white label web development pricing for agencies: project rates, maintenance plans and what's included." },
      { property: "og:title", content: "White Label Web Development Pricing | WLWD" },
      { property: "og:description", content: "Clear white label web development pricing for agencies: project rates, maintenance plans and what's included." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/pricing" },
      { name: "twitter:title", content: "White Label Web Development Pricing | WLWD" },
      { name: "twitter:description", content: "Clear white label web development pricing for agencies: project rates, maintenance plans and what's included." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/pricing" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Pricing\", \"item\": \"https://whitelabelwebsitedevelopment.com/pricing\"}]}, {\"@type\": \"WebPage\", \"name\": \"Pricing & Agency Plans — White Label Web Development\", \"description\": \"Transparent white label development pricing for agencies. Flexible project pricing, retainers and partnership plans built for predictable, profitable fulfillment.\", \"url\": \"https://whitelabelwebsitedevelopment.com/pricing\", \"isPartOf\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#website\"}}]}",
      },
    ],
  }),
  
  component: PricingPage,
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
              <LineChart className="h-3.5 w-3.5 text-brand" />
              Pricing &amp; Agency Plans
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              <span className="text-brand">White Label Web Development Pricing</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Transparent agency development pricing across projects, landing pages, ecommerce builds and white label maintenance retainers — engineered so your team keeps healthy markups while we handle delivery quietly under your brand.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/contact">Request custom pricing <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/contact">Book a discovery call</Link>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                { icon: EyeOff, label: "White label delivery" },
                { icon: BadgeCheck, label: "Transparent pricing" },
                { icon: Layers, label: "Scalable fulfillment" },
                { icon: FileLock2, label: "NDA friendly" },
                { icon: LifeBuoy, label: "Ongoing support" },
                { icon: UserX, label: "No client poaching" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <PricingMock />
        </div>
      </div>
    </section>
  );
}

function PricingMock() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Database className="h-3.5 w-3.5 text-brand" />
            <span>agency-billing · Q2</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Active partner</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Projects MTD", v: "12" },
            { k: "Avg. margin", v: "62%" },
            { k: "Avg. TAT", v: "6d" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-background p-3 text-center">
              <div className="text-lg font-semibold text-ink">{s.v}</div>
              <div className="text-[10px] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-2">
          {[
            { l: "Landing Page · client A", v: "$1,200" },
            { l: "WordPress build · client B", v: "$3,800" },
            { l: "WooCommerce build · client C", v: "$6,500" },
            { l: "Maintenance retainer · 4 sites", v: "$1,600/mo" },
          ].map((r) => (
            <div key={r.l} className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5">
              <span className="text-xs font-medium text-ink">{r.l}</span>
              <span className="text-[11px] font-semibold text-brand">{r.v}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl bg-brand/10 px-3 py-2.5 text-xs font-medium text-brand">
          Estimated agency margin this month · 58–65%
        </div>
      </div>
      <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-border bg-background p-3 shadow-soft md:block">
        <div className="flex items-center gap-2 text-xs font-medium text-ink">
          <TrendingUp className="h-4 w-4 text-brand" /> Predictable fulfillment
        </div>
      </div>
    </div>
  );
}

/* ---------- WHY OUR MODEL ---------- */
function WhyModel() {
  const items = [
    { icon: BadgeCheck, t: "Predictable costs", d: "Transparent rates that protect your margins." },
    { icon: Layers, t: "Scalable fulfillment", d: "Capacity that grows with your client base." },
    { icon: TrendingUp, t: "Profitable reselling", d: "Healthy markup room without sacrificing quality." },
    { icon: Users, t: "Reduced hiring costs", d: "Skip the cost and risk of in-house dev teams." },
    { icon: Compass, t: "Operational simplicity", d: "One partner, one workflow, one invoice." },
    { icon: RefreshCw, t: "Flexible project support", d: "From single pages to ongoing retainers." },
    { icon: ShieldCheck, t: "Long-term partnerships", d: "Built for years of agency collaboration." },
    { icon: MessageSquare, t: "Clear communication", d: "Slack/ClickUp with structured rhythm." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies choose this model"
          title="Pricing that's built around how agencies actually grow"
          sub="A pricing system designed for agency margins, predictable fulfillment, and long-term partnerships."
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

/* ---------- CORE SERVICE PRICING ---------- */
function ServicePricing() {
  const services = [
    {
      icon: Palette, t: "White Label Website Design",
      from: "$1,800", tat: "7–14 days",
      features: ["Custom UI/UX design", "Mobile-first layouts", "Up to 8 unique screens", "2 revision rounds"],
    },
    {
      icon: Code2, t: "WordPress Development",
      from: "$2,400", tat: "10–21 days",
      features: ["Custom WordPress build", "Editable in Elementor / blocks", "SEO-aware structure", "Launch & QA included"],
    },
    {
      icon: Rocket, t: "Landing Page Development",
      from: "$650", tat: "3–7 days",
      features: ["Conversion-focused layout", "Mobile-first build", "Form & analytics integration", "1 revision round"],
    },
    {
      icon: ShoppingBag, t: "WooCommerce Development",
      from: "$3,800", tat: "14–28 days",
      features: ["Up to 25 products at launch", "Payment & shipping setup", "Product schema & SEO", "Editable PDP system"],
    },
    {
      icon: Wrench, t: "Website Maintenance",
      from: "$220/mo", tat: "Ongoing",
      features: ["Core/plugin updates", "Daily backups", "Uptime monitoring", "Monthly health report"],
    },
    {
      icon: FileSearch, t: "Website Audits",
      from: "$450", tat: "5–7 days",
      features: ["Technical SEO audit", "Core Web Vitals review", "UX & conversion review", "White label PDF report"],
    },
    {
      icon: Search, t: "SEO-Friendly Development",
      from: "$2,100", tat: "10–18 days",
      features: ["Schema-ready markup", "Semantic HTML5", "Indexation controls", "CWV-optimized build"],
    },
    {
      icon: Gauge, t: "Speed Optimization",
      from: "$520", tat: "5–10 days",
      features: ["Core Web Vitals tuning", "Asset & image pipeline", "Caching & CDN setup", "Before/after report"],
    },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Core service pricing"
          title="Transparent starting prices for every service"
          sub="Indicative starting prices — every project is scoped and quoted to match your client's actual requirements."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div key={s.t} className="flex flex-col rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{s.t}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-xs text-muted-foreground">from</span>
                <span className="text-2xl font-semibold tracking-tight text-ink">{s.from}</span>
              </div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {s.tat}
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="outline" className="mt-6 w-full rounded-full">
                <Link to="/contact">Request quote</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AGENCY PARTNERSHIP PLANS ---------- */
function PartnershipPlans() {
  const plans = [
    {
      icon: Sparkles, name: "Starter Agency", price: "$1,500", per: "/mo",
      tagline: "Occasional projects and light support.",
      featured: false,
      features: [
        "Up to 2 active projects / mo",
        "Standard turnaround (5–10 days)",
        "Email + ClickUp communication",
        "1 revision round per task",
        "Basic maintenance available",
        "White label delivery",
      ],
    },
    {
      icon: Rocket, name: "Growth Agency", price: "$3,800", per: "/mo",
      tagline: "Ongoing monthly fulfillment with faster support.",
      featured: true,
      features: [
        "Up to 6 active projects / mo",
        "Priority turnaround (3–6 days)",
        "Slack + ClickUp + weekly calls",
        "2 revision rounds per task",
        "Includes maintenance for 5 sites",
        "Dedicated project manager",
      ],
    },
    {
      icon: Crown, name: "Dedicated Agency Partner", price: "Custom", per: "",
      tagline: "Large-scale fulfillment with priority workflow.",
      featured: false,
      features: [
        "Unlimited project pipeline",
        "Same-day priority response",
        "Dedicated dev + design pod",
        "Unlimited revision rounds",
        "Unlimited maintenance sites",
        "Quarterly strategy reviews",
      ],
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Agency partnership plans"
          title="Long-term plans built for scaling agencies"
          sub="Choose the partnership tier that matches your fulfillment volume — upgrade as your client base grows."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-soft transition-all hover:-translate-y-0.5 ${
                p.featured
                  ? "border-brand bg-ink text-brand-foreground shadow-elevated"
                  : "border-border bg-surface-elevated"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-foreground">
                  Most popular
                </div>
              )}
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${p.featured ? "bg-brand/20 text-brand-foreground" : "bg-brand/10 text-brand"}`}>
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className={`mt-5 text-xl font-semibold ${p.featured ? "" : "text-ink"}`}>{p.name}</h3>
              <p className={`mt-1.5 text-sm ${p.featured ? "text-brand-foreground/70" : "text-muted-foreground"}`}>
                {p.tagline}
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className={`text-4xl font-semibold tracking-tight ${p.featured ? "" : "text-ink"}`}>{p.price}</span>
                <span className={`text-sm ${p.featured ? "text-brand-foreground/70" : "text-muted-foreground"}`}>{p.per}</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.featured ? "text-brand-foreground" : "text-brand"}`} />
                    <span className={p.featured ? "text-brand-foreground/90" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className={`mt-8 w-full rounded-full ${
                  p.featured
                    ? "bg-brand-foreground text-ink hover:bg-brand-foreground/90"
                    : ""
                }`}
                variant={p.featured ? "default" : "outline"}
              >
                <Link to="/contact">{p.price === "Custom" ? "Talk to sales" : "Start partnership"}</Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INCLUDED + ADD-ONS ---------- */
function Included() {
  const included = [
    { icon: EyeOff, t: "White label delivery" },
    { icon: FileLock2, t: "NDA-friendly workflow" },
    { icon: Smartphone, t: "Responsive development" },
    { icon: Search, t: "SEO-aware structure" },
    { icon: ClipboardCheck, t: "Project management" },
    { icon: RefreshCw, t: "Revision workflow" },
    { icon: BadgeCheck, t: "QA testing" },
    { icon: Smartphone, t: "Mobile optimization" },
  ];
  const addons = [
    { icon: Wrench, t: "Maintenance retainers" },
    { icon: LifeBuoy, t: "Emergency support" },
    { icon: Search, t: "Technical SEO" },
    { icon: FileText, t: "Content uploads" },
    { icon: ShoppingBag, t: "Ecommerce integrations" },
    { icon: Gauge, t: "Speed optimization" },
    { icon: Database, t: "CRM & API integrations" },
    { icon: ShieldCheck, t: "Security hardening" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="What's included"
          title="Everything you'd expect from a real agency partner"
          sub="Standard inclusions on every engagement, plus optional add-ons when client needs go deeper."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" /> Included in every engagement
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {included.map((it) => (
                <li key={it.t} className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-ink">{it.t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
            <div className="flex items-center gap-2 text-sm font-semibold text-ink">
              <Sparkles className="h-5 w-5 text-brand" /> Optional add-ons
            </div>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {addons.map((it) => (
                <li key={it.t} className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-brand-foreground">
                    <it.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-ink">{it.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW PRICING WORKS ---------- */
function HowPricing() {
  const factors = [
    { icon: ClipboardCheck, t: "Project scope", d: "Total scope, deliverables and acceptance criteria." },
    { icon: Layers, t: "Number of pages", d: "Unique templates and content variants." },
    { icon: Code2, t: "Functionality complexity", d: "Custom logic, dynamic features, integrations." },
    { icon: ShoppingBag, t: "Ecommerce requirements", d: "Catalog size, payments, shipping, tax." },
    { icon: Database, t: "Integrations", d: "CRM, marketing, analytics, third-party APIs." },
    { icon: Zap, t: "Timeline urgency", d: "Standard vs. expedited / launch-week delivery." },
    { icon: Wrench, t: "Maintenance requirements", d: "Ongoing care, monitoring, support tier." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="How pricing works"
          title="Transparent inputs, no surprise invoices"
          sub="Every project is quoted from the same set of clear factors — you'll always know what shapes the price."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {factors.map((f) => (
            <div key={f.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{f.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY THIS HELPS AGENCIES SCALE ---------- */
function ScaleBenefits() {
  const items = [
    { icon: TrendingUp, t: "Increase profit margins", d: "Healthy markup room on every fulfillment line." },
    { icon: Users, t: "Avoid hiring developers", d: "No salaries, no benefits, no bench risk." },
    { icon: BadgeCheck, t: "Predictable fulfillment", d: "Known capacity, known timelines, known cost." },
    { icon: Layers, t: "Scalable workflows", d: "Same delivery quality at 2 or 20 projects." },
    { icon: ShieldCheck, t: "Reduced operational stress", d: "One reliable partner instead of five vendors." },
    { icon: LifeBuoy, t: "Long-term partnership support", d: "Same team, same standards, every project." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why this pricing helps you scale"
          title="A pricing model that compounds with your agency"
          sub="Built for the operational and financial outcomes agencies actually care about."
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

/* ---------- PROJECT RANGES ---------- */
function ProjectRanges() {
  const ranges = [
    { icon: Rocket, t: "Landing Pages", r: "$650 – $1,800", tat: "3–7 days" },
    { icon: Briefcase, t: "Service Business Websites", r: "$2,400 – $5,500", tat: "10–18 days" },
    { icon: Building2, t: "Agency Websites", r: "$3,500 – $8,000", tat: "14–24 days" },
    { icon: ShoppingBag, t: "Ecommerce Stores", r: "$3,800 – $12,000", tat: "14–28 days" },
    { icon: MapPin, t: "Multi-Location Websites", r: "$4,200 – $10,000", tat: "16–28 days" },
    { icon: RefreshCw, t: "Website Redesigns", r: "$2,800 – $7,500", tat: "12–22 days" },
    { icon: Wrench, t: "Maintenance Plans", r: "$220 – $1,200/mo", tat: "Ongoing" },
    { icon: FileSearch, t: "Technical Audits", r: "$450 – $1,400", tat: "5–7 days" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Project types & estimated ranges"
          title="Realistic ranges for the work agencies actually sell"
          sub="Indicative budget ranges to help you scope and price client engagements with confidence."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ranges.map((r) => (
            <div key={r.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <r.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{r.t}</h3>
              <div className="mt-2 text-base font-semibold text-ink">{r.r}</div>
              <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" /> {r.tat}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- MAINTENANCE PLANS ---------- */
function MaintenancePlans() {
  const plans = [
    {
      icon: Sparkles, name: "Starter Maintenance", price: "$220", per: "/mo",
      tagline: "Essential care for individual client sites.",
      featured: false,
      features: [
        "Monthly core & plugin updates",
        "Weekly backups",
        "Uptime monitoring",
        "48h response time",
        "Monthly health summary",
      ],
    },
    {
      icon: Rocket, name: "Growth Maintenance", price: "$520", per: "/mo",
      tagline: "Active care for growing client portfolios.",
      featured: true,
      features: [
        "Weekly updates & monitoring",
        "Daily backups",
        "Security hardening & malware scans",
        "12h priority response",
        "Up to 2 hours of dev edits / mo",
        "Monthly performance report",
      ],
    },
    {
      icon: Crown, name: "Unlimited Agency Maintenance", price: "$1,400", per: "/mo",
      tagline: "All-in care across your whole portfolio.",
      featured: false,
      features: [
        "Up to 10 sites covered",
        "Daily updates & monitoring",
        "24/7 uptime + emergency response",
        "Same-day priority response",
        "Up to 6 hours of dev edits / mo",
        "Quarterly portfolio reviews",
      ],
    },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Maintenance & retainer options"
          title="Recurring care that protects your client relationships"
          sub="Predictable monthly retainers covering monitoring, updates, backups, security and on-call support."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-3xl border p-7 shadow-soft transition-all hover:-translate-y-0.5 ${
                p.featured
                  ? "border-brand bg-ink text-brand-foreground shadow-elevated"
                  : "border-border bg-surface-elevated"
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-foreground">
                  Recommended
                </div>
              )}
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${p.featured ? "bg-brand/20 text-brand-foreground" : "bg-brand/10 text-brand"}`}>
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className={`mt-5 text-xl font-semibold ${p.featured ? "" : "text-ink"}`}>{p.name}</h3>
              <p className={`mt-1.5 text-sm ${p.featured ? "text-brand-foreground/70" : "text-muted-foreground"}`}>
                {p.tagline}
              </p>
              <div className="mt-6 flex items-baseline gap-1.5">
                <span className={`text-4xl font-semibold tracking-tight ${p.featured ? "" : "text-ink"}`}>{p.price}</span>
                <span className={`text-sm ${p.featured ? "text-brand-foreground/70" : "text-muted-foreground"}`}>{p.per}</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <Check className={`mt-0.5 h-4 w-4 flex-shrink-0 ${p.featured ? "text-brand-foreground" : "text-brand"}`} />
                    <span className={p.featured ? "text-brand-foreground/90" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                className={`mt-8 w-full rounded-full ${
                  p.featured
                    ? "bg-brand-foreground text-ink hover:bg-brand-foreground/90"
                    : ""
                }`}
                variant={p.featured ? "default" : "outline"}
              >
                <Link to="/contact">Start retainer</Link>
              </Button>
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
    { quote: "Switched our entire fulfillment to their Growth plan and immediately doubled our profit margin on web projects.", name: "Daniel A.", role: "Founder, Digital Agency" },
    { quote: "Their maintenance retainer alone has saved us from hiring two junior developers. Reliable, fast, and fully white label.", name: "Sara K.", role: "COO, Marketing Agency" },
    { quote: "The pricing is transparent, the work is enterprise-grade, and they actually scale with us. Best agency partnership we've had.", name: "Michael P.", role: "Director, SEO Agency" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="Trusted by agencies for long-term partnerships" />
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
    { q: "Do you offer custom quotes?", a: "Yes — every project is scoped individually. Listed prices are starting points; we send detailed quotes after a short discovery." },
    { q: "Can we white label everything?", a: "Yes. Every engagement is delivered fully under your brand — no third-party logos, no client-facing contact, NDA-friendly." },
    { q: "How do revisions work?", a: "Each project includes a defined number of revision rounds within scope. Additional rounds are available transparently as add-ons." },
    { q: "Do you support ongoing projects?", a: "Yes. Most agencies start with a single project and move into a Growth or Dedicated partnership as fulfillment volume grows." },
    { q: "Do you offer maintenance retainers?", a: "Yes — three tiers (Starter, Growth, Unlimited Agency) covering updates, backups, security, monitoring and dev edits." },
    { q: "How fast is turnaround?", a: "Landing pages in 3–7 days, websites in 10–24 days, ecommerce in 14–28 days. Expedited timelines are available." },
    { q: "Can you scale with agencies?", a: "Absolutely. The pricing model is built for agencies running 1 to 100+ active client sites — capacity scales without losing quality." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="Pricing & partnership questions" />
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
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Long-term partnership</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Ready to scale your agency profitably?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Let's design a fulfillment plan around your client base — predictable cost, premium delivery, and margins that compound.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg" className="rounded-full bg-brand-foreground px-6 text-ink hover:bg-brand-foreground/90">
                <Link to="/contact">Request custom pricing <ArrowRight className="ml-2 h-4 w-4" /></Link>
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
function PricingPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <WhyModel />
        <ServicePricing />
        <PartnershipPlans />
        <Included />
        <HowPricing />
        <ScaleBenefits />
        <ProjectRanges />
        <MaintenancePlans />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
