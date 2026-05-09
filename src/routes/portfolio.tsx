import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Briefcase, Building2, Stethoscope, HardHat, Home,
  ShoppingBag, Rocket, Users, Search, Megaphone, Smartphone, Gauge, ShieldCheck,
  Code2, Layers, FileLock2, UserX, Eye, EyeOff, CheckCircle2, Star, Globe2,
  Activity, Zap, Palette, Wrench, Award, TrendingUp, Quote, BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "White Label Portfolio & Case Studies — Whitelayer" },
      {
        name: "description",
        content:
          "Explore white label websites delivered for agencies across healthcare, real estate, ecommerce, contractors and more. Reliable, scalable, agency-safe execution.",
      },
      { property: "og:title", content: "White Label Portfolio & Case Studies — Whitelayer" },
      {
        property: "og:description",
        content:
          "Proven white label web development for agencies. Premium execution, NDA-friendly delivery, multi-industry experience.",
      },
    ],
  }),
  component: PortfolioPage,
});

/* ---------- shared ---------- */
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
              <Briefcase className="h-3.5 w-3.5 text-brand" />
              Portfolio &amp; Case Studies
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              White label projects <span className="text-brand">built for agencies</span>.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Websites delivered under agency brands across multiple industries — engineered for performance, SEO, and long-term scalability. Confidential, reliable, agency-safe execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/contact">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/contact">Book a discovery call</Link>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-4">
              {[
                { icon: Search, label: "SEO-ready" },
                { icon: EyeOff, label: "White label" },
                { icon: Zap, label: "Fast delivery" },
                { icon: Globe2, label: "Multi-industry" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>

          <PortfolioMock />
        </div>
      </div>
    </section>
  );
}

function PortfolioMock() {
  const items = [
    { tag: "Healthcare", title: "Northbridge Clinic", color: "from-emerald-100 to-emerald-50" },
    { tag: "Real Estate", title: "Harbor & Vine Realty", color: "from-amber-100 to-amber-50" },
    { tag: "Ecommerce", title: "Field Goods Co.", color: "from-rose-100 to-rose-50" },
    { tag: "SaaS", title: "Mavenly", color: "from-indigo-100 to-indigo-50" },
  ];
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-4 shadow-elevated md:p-5">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3">portfolio.whitelayer.app</span>
          </div>
          <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
            12 active projects
          </span>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {items.map((it) => (
            <div key={it.title} className="overflow-hidden rounded-xl border border-border bg-background">
              <div className={`h-24 bg-gradient-to-br ${it.color}`} />
              <div className="p-3">
                <div className="text-[10px] font-semibold uppercase tracking-wider text-brand">{it.tag}</div>
                <div className="mt-0.5 text-sm font-semibold text-ink">{it.title}</div>
                <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-emerald-500" /> Delivered</span>
                  <span>White label</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs">
          <span className="font-medium text-ink">Avg. turnaround</span>
          <span className="font-semibold text-brand">12 days</span>
        </div>
      </div>
      <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-border bg-background p-3 shadow-soft md:block">
        <div className="flex items-center gap-2 text-xs font-medium text-ink">
          <Award className="h-4 w-4 text-brand" /> 350+ websites delivered
        </div>
      </div>
    </div>
  );
}

/* ---------- FEATURED CASE STUDIES ---------- */
const caseStudies = [
  {
    industry: "Healthcare",
    type: "Multi-location clinic website",
    title: "Northbridge Family Clinic",
    summary:
      "Rebuilt a slow, outdated WordPress site into a fast, SEO-optimized multi-location experience with appointment booking and service-based landing pages.",
    tech: ["WordPress", "Elementor Pro", "ACF", "Schema SEO"],
    challenges: [
      "Outdated design hurting conversions",
      "Poor mobile experience and 4s+ load time",
      "No structured data for local SEO",
    ],
    solutions: [
      "Custom modular template system",
      "Image, font and CSS optimization pipeline",
      "Full local + medical schema implementation",
    ],
    outcomes: [
      { k: "Page speed", v: "94 / 100" },
      { k: "Bookings", v: "+128%" },
      { k: "Delivered in", v: "14 days" },
    ],
    color: "from-emerald-100 via-emerald-50 to-background",
  },
  {
    industry: "Real Estate",
    type: "Brokerage website + listings",
    title: "Harbor & Vine Realty",
    summary:
      "Designed and built a premium brokerage website with IDX-ready listing templates and agent profile pages — delivered fully under the agency’s brand.",
    tech: ["WordPress", "Custom CMS", "IDX-ready", "Performance"],
    challenges: [
      "Needed scalable agent + listing system",
      "Agency required full white label delivery",
      "Strict branding and typography spec",
    ],
    solutions: [
      "Custom post types for agents & properties",
      "Reusable hero, search & listing modules",
      "Pixel-accurate Figma-to-code build",
    ],
    outcomes: [
      { k: "Lead form CR", v: "+62%" },
      { k: "Lighthouse", v: "97 / 100" },
      { k: "Delivered in", v: "18 days" },
    ],
    color: "from-amber-100 via-amber-50 to-background",
  },
  {
    industry: "Ecommerce",
    type: "WooCommerce store rebuild",
    title: "Field Goods Co.",
    summary:
      "Replaced a fragile theme-based store with a structured WooCommerce build, optimized checkout flow and a maintainable design system.",
    tech: ["WooCommerce", "WordPress", "Stripe", "CWV"],
    challenges: [
      "Cart abandonment over 78%",
      "Theme conflicts breaking checkout",
      "No reliable update workflow",
    ],
    solutions: [
      "Streamlined 2-step checkout",
      "Custom child theme + safe update workflow",
      "Performance & Core Web Vitals tuning",
    ],
    outcomes: [
      { k: "Checkout CR", v: "+41%" },
      { k: "LCP", v: "1.4s" },
      { k: "Delivered in", v: "21 days" },
    ],
    color: "from-rose-100 via-rose-50 to-background",
  },
];

function CaseStudies() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Featured case studies"
          title="Real white label projects, real outcomes"
          sub="A look at how we deliver high-quality websites for agencies across industries — confidentially, reliably, and at scale."
        />
        <div className="mt-12 space-y-10">
          {caseStudies.map((c, i) => (
            <article
              key={c.title}
              className="grid items-stretch gap-8 overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-elevated lg:grid-cols-[1fr_1.1fr]"
            >
              <div className={`relative min-h-[280px] bg-gradient-to-br ${c.color} p-6 md:p-8 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                  {c.industry}
                </div>
                <div className="mt-6 rounded-2xl border border-border bg-background/90 p-4 shadow-soft backdrop-blur">
                  <div className="flex items-center justify-between border-b border-border pb-2 text-[10px] text-muted-foreground">
                    <span>{c.title.toLowerCase().replace(/\s+/g, "")}.com</span>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-emerald-700">Live</span>
                  </div>
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {c.outcomes.map((o) => (
                      <div key={o.k} className="rounded-lg border border-border bg-background p-2 text-center">
                        <div className="text-sm font-semibold text-ink">{o.v}</div>
                        <div className="text-[10px] text-muted-foreground">{o.k}</div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {c.tech.map((t) => (
                      <span key={t} className="rounded-md bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-brand">{c.type}</div>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{c.title}</h3>
                <p className="mt-3 text-muted-foreground">{c.summary}</p>

                <div className="mt-6 grid gap-5 sm:grid-cols-2">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Challenges</div>
                    <ul className="mt-2 space-y-1.5 text-sm text-ink">
                      {c.challenges.map((x) => (
                        <li key={x} className="flex gap-2"><span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand" />{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Our solution</div>
                    <ul className="mt-2 space-y-1.5 text-sm text-ink">
                      {c.solutions.map((x) => (
                        <li key={x} className="flex gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />{x}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all"
                  >
                    Request a similar build <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECT SHOWCASE GRID ---------- */
const projects = [
  { cat: "Local Business", title: "Cedar & Stone Café", tech: ["WordPress", "Elementor"], color: "from-amber-100 to-amber-50" },
  { cat: "Healthcare", title: "Brightpath Dental", tech: ["WordPress", "ACF"], color: "from-emerald-100 to-emerald-50" },
  { cat: "Contractor", title: "Ironclad Roofing", tech: ["WordPress", "Local SEO"], color: "from-slate-100 to-slate-50" },
  { cat: "Real Estate", title: "Marigold Estates", tech: ["Custom CMS"], color: "from-rose-100 to-rose-50" },
  { cat: "Ecommerce", title: "Lumen Apothecary", tech: ["Shopify"], color: "from-violet-100 to-violet-50" },
  { cat: "Agency", title: "Ridgeline Studio", tech: ["WordPress", "Custom"], color: "from-sky-100 to-sky-50" },
  { cat: "SaaS", title: "Mavenly Platform", tech: ["Landing System"], color: "from-indigo-100 to-indigo-50" },
  { cat: "Service", title: "Northwind HVAC", tech: ["WordPress", "ACF"], color: "from-teal-100 to-teal-50" },
];

function ShowcaseGrid() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Project showcase"
          title="A look across recent agency builds"
          sub="A selection of recent white label websites — every project delivered under the agency’s brand."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated"
            >
              <div className={`relative h-36 bg-gradient-to-br ${p.color}`}>
                <div className="absolute left-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                  {p.cat}
                </div>
                <div className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-ink shadow-soft transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">White label delivery · responsive · SEO-ready</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INDUSTRIES ---------- */
const industries = [
  { icon: Search, title: "SEO Agencies", desc: "SEO-ready WordPress builds with proper schema, hierarchy and Core Web Vitals." },
  { icon: Megaphone, title: "Marketing Agencies", desc: "Conversion-focused landing pages and campaign sites at scale." },
  { icon: Stethoscope, title: "Healthcare", desc: "Clinic, dental and multi-location healthcare websites." },
  { icon: HardHat, title: "Contractors", desc: "Service area pages, lead forms and local SEO architecture." },
  { icon: Home, title: "Real Estate", desc: "Brokerage, agent and IDX-ready listing builds." },
  { icon: ShoppingBag, title: "Ecommerce", desc: "WooCommerce and Shopify stores with optimized checkout flows." },
  { icon: Building2, title: "Service Businesses", desc: "Multi-service templates and lead generation funnels." },
  { icon: Users, title: "Local Businesses", desc: "Modern, fast, mobile-first websites built for conversions." },
];

function Industries() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Industries we work with"
          title="Multi-industry execution under one operational system"
          sub="We deliver white label websites across a wide range of agency client verticals."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft transition-shadow hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- RESULTS ---------- */
function Results() {
  const stats = [
    { v: "350+", k: "Websites delivered", icon: Briefcase },
    { v: "10–14d", k: "Average turnaround", icon: Zap },
    { v: "12+", k: "Industries served", icon: Globe2 },
    { v: "120+", k: "Maintenance clients", icon: Wrench },
    { v: "98%", k: "Project satisfaction", icon: Star },
    { v: "<4h", k: "Avg. response speed", icon: Activity },
  ];
  return (
    <section className="border-y border-border bg-ink py-20 text-brand-foreground md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Results &amp; performance</div>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Operational credibility, in numbers.
          </h2>
          <p className="mt-4 text-pretty text-base text-brand-foreground/70">
            A consistent delivery system trusted by agencies for hundreds of client projects.
          </p>
        </div>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div key={s.k} className="bg-ink p-8">
              <s.icon className="h-5 w-5 text-brand-foreground/60" />
              <div className="mt-5 text-4xl font-semibold tracking-tight">{s.v}</div>
              <div className="mt-1 text-sm text-brand-foreground/70">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- DEVELOPMENT STANDARDS ---------- */
function Standards() {
  const items = [
    { icon: Smartphone, title: "Mobile responsive", desc: "Every build tested across phone, tablet and desktop breakpoints." },
    { icon: Search, title: "SEO-friendly structure", desc: "Clean HTML hierarchy, schema markup, sitemap and meta setup." },
    { icon: Gauge, title: "Performance optimized", desc: "Image, font and asset pipeline tuned for Core Web Vitals." },
    { icon: Palette, title: "Clean UI / UX", desc: "Modern, minimal interfaces consistent with the agency's brand." },
    { icon: ShieldCheck, title: "Accessibility", desc: "Semantic HTML, focus states, and WCAG-aligned color contrast." },
    { icon: Layers, title: "Scalable CMS setup", desc: "Reusable components, templates and editor-friendly content models." },
    { icon: BadgeCheck, title: "QA testing", desc: "Cross-browser, device and content QA before every handoff." },
    { icon: TrendingUp, title: "Conversion-focused", desc: "Layouts engineered around CTAs, lead capture and trust signals." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Development standards"
          title="The quality bar behind every project"
          sub="A consistent technical baseline applied to every build, regardless of industry or scope."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BEFORE / AFTER ---------- */
const transformations = [
  {
    title: "From outdated to modern",
    before: { label: "Before", desc: "Cluttered 2014 theme, broken mobile layout, slow load times.", color: "from-slate-200 to-slate-100" },
    after: { label: "After", desc: "Clean responsive design, structured layout, sub-2s load.", color: "from-emerald-100 to-emerald-50" },
    metric: "Speed +71%",
  },
  {
    title: "From slow to optimized",
    before: { label: "Before", desc: "4.2s LCP, 38 perf score, render-blocking assets.", color: "from-rose-100 to-rose-50" },
    after: { label: "After", desc: "1.4s LCP, 96 perf score, deferred + cached pipeline.", color: "from-indigo-100 to-indigo-50" },
    metric: "Lighthouse 38 → 96",
  },
  {
    title: "From cluttered to converting",
    before: { label: "Before", desc: "No CTA hierarchy, weak forms, low conversion rate.", color: "from-amber-100 to-amber-50" },
    after: { label: "After", desc: "Clear CTA flow, trust signals, optimized lead forms.", color: "from-sky-100 to-sky-50" },
    metric: "Lead CR +62%",
  },
];

function BeforeAfter() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Before &amp; after"
          title="Real transformations, real business impact"
          sub="See how outdated, slow or underperforming websites become reliable, conversion-focused assets."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {transformations.map((t) => (
            <div key={t.title} className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-soft">
              <h3 className="text-base font-semibold text-ink">{t.title}</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[t.before, t.after].map((s, idx) => (
                  <div key={s.label} className="overflow-hidden rounded-xl border border-border bg-background">
                    <div className={`h-20 bg-gradient-to-br ${s.color}`} />
                    <div className="p-3">
                      <div className={`text-[10px] font-semibold uppercase tracking-wider ${idx === 0 ? "text-rose-500" : "text-emerald-600"}`}>{s.label}</div>
                      <p className="mt-1 text-xs text-muted-foreground">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs">
                <span className="font-medium text-ink">Outcome</span>
                <span className="font-semibold text-brand">{t.metric}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHITE LABEL DELIVERY ---------- */
function WhiteLabelDelivery() {
  const points = [
    { icon: FileLock2, title: "NDA-friendly delivery", desc: "We sign NDAs and operate strictly under your brand." },
    { icon: EyeOff, title: "Invisible backend support", desc: "We never appear to your clients — ever." },
    { icon: ShieldCheck, title: "Agency-safe workflow", desc: "Communication, files and assets stay inside your space." },
    { icon: UserX, title: "No client poaching", desc: "Strict no-contact policy with your end clients." },
    { icon: Eye, title: "Confidential project handling", desc: "Internal-only access, structured permissions, audit trail." },
    { icon: Briefcase, title: "Professional communication", desc: "Slack, ClickUp, email — always agency-branded." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">White label delivery</div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Built to stay invisible to your clients.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Every project in this portfolio was delivered under the agency’s brand. Confidentiality, NDAs and clean handoffs are not optional — they are the default.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full px-5">
                <Link to="/agency-partner">Become a partner</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5">
                <Link to="/contact">Discuss your project</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {points.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <p.icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TECHNOLOGIES ---------- */
function Technologies() {
  const tech = [
    { name: "WordPress", desc: "Custom themes, ACF, scalable CMS." },
    { name: "Elementor", desc: "Pro-grade page builder mastery." },
    { name: "WooCommerce", desc: "Stores, checkout, payments." },
    { name: "Shopify", desc: "Themes, sections, Liquid." },
    { name: "Custom CMS", desc: "Tailored content architectures." },
    { name: "Landing Systems", desc: "High-converting modular pages." },
    { name: "SEO Optimization", desc: "Schema, hierarchy, indexability." },
    { name: "Performance", desc: "Core Web Vitals & caching." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Technologies &amp; platforms"
          title="The stack behind every delivery"
          sub="A focused, reliable stack chosen for stability, performance and long-term maintainability."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{t.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.desc}</p>
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
    {
      quote:
        "We’ve delivered over 40 client websites with Whitelayer. The quality is consistent, communication is clean, and our clients have no idea they exist. Exactly what a white label partner should be.",
      name: "Marcus L.",
      role: "Founder, SEO Agency",
    },
    {
      quote:
        "From the first project we knew this was different. Clean code, fast turnarounds and an actual operational system behind the scenes. They’ve become an extension of our team.",
      name: "Priya S.",
      role: "Head of Delivery, Marketing Agency",
    },
    {
      quote:
        "We scaled from 3 to 12 client websites under management without hiring a single developer. Their maintenance and dev workflow is enterprise-grade.",
      name: "Daniel R.",
      role: "Owner, Digital Agency",
    },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Testimonials"
          title="What agency partners say about working with us"
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
              <Quote className="h-6 w-6 text-brand" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 font-semibold text-brand">
                  {t.name[0]}
                </div>
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
    { q: "Can projects be delivered under our branding?", a: "Yes. Every project is delivered fully white label — under your brand, your domain, your communication. We never appear to your end clients." },
    { q: "Do you sign NDAs?", a: "Absolutely. NDAs are standard for every partnership and we’re happy to use yours or provide one." },
    { q: "What industries do you work with?", a: "We deliver builds across healthcare, real estate, ecommerce, contractors, SaaS, agencies, and most service-based industries." },
    { q: "Can you handle ongoing projects?", a: "Yes — we support agencies with ongoing development queues, retainers, and dedicated capacity each month." },
    { q: "Do you offer redesigns?", a: "Yes. Many of our projects are full redesigns or rebuilds of outdated, slow or underperforming websites." },
    { q: "How fast is delivery?", a: "Standard websites take 10–18 days depending on scope. Landing pages can be turned around in 3–5 days." },
    { q: "Do you provide maintenance?", a: "Yes — we offer dedicated white label maintenance plans covering updates, backups, security and content edits." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="Portfolio &amp; partnership questions" />
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-surface-elevated p-2 shadow-soft">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="px-4 text-left text-sm font-semibold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 text-sm text-muted-foreground">
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
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Let’s build together</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Ready to deliver better websites for your clients?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Bring us your next client project — we’ll handle design, development, QA and delivery under your brand.
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
function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <CaseStudies />
        <ShowcaseGrid />
        <Industries />
        <Results />
        <Standards />
        <BeforeAfter />
        <WhiteLabelDelivery />
        <Technologies />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
