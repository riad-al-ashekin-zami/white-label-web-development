import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Code2, Layers, ShoppingBag, Rocket, RefreshCw,
  Palette, Gauge, Search, ShieldCheck, Wrench, Settings, Smartphone, EyeOff,
  FileLock2, UserX, MessageSquare, Headphones, Zap, BadgeCheck, Quote,
  AlertTriangle, Puzzle, Clock, Bug, Building2, Stethoscope, Home, HardHat,
  Briefcase, Globe2, CheckCircle2, Compass, Workflow, ClipboardCheck,
  LifeBuoy, Database, ServerCog, Activity, FileCheck2, Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/white-label-wordpress-development")({
  head: () => ({
    meta: [
      { title: "White Label WordPress Development for Agencies — Whitelayer" },
      {
        name: "description",
        content:
          "Reliable white label WordPress development for SEO, marketing and creative agencies. Custom themes, Elementor, WooCommerce, performance and SEO — delivered under your brand.",
      },
      { property: "og:title", content: "White Label WordPress Development for Agencies" },
      {
        property: "og:description",
        content:
          "Scale your agency with expert white label WordPress fulfillment. NDA-friendly, SEO-aware, fully under your brand.",
      },
    ],
  }),
  component: WPPage,
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
              <Code2 className="h-3.5 w-3.5 text-brand" />
              White Label WordPress Development
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              Reliable WordPress fulfillment <span className="text-brand">under your brand</span>.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Outsource WordPress projects to a structured, agency-first development team — clean code, SEO-aware builds, NDA-protected delivery, and predictable timelines.
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
                { icon: Search, label: "SEO-ready builds" },
                { icon: EyeOff, label: "White label" },
                { icon: FileLock2, label: "NDA friendly" },
                { icon: Zap, label: "Fast turnaround" },
                { icon: Smartphone, label: "Mobile optimized" },
                { icon: ShieldCheck, label: "Maintained long-term" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <WPMock />
        </div>
      </div>
    </section>
  );
}

function WPMock() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3">wp-admin · client-site.com</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Healthy</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Lighthouse", v: "97" },
            { k: "LCP", v: "1.4s" },
            { k: "Plugins", v: "12 OK" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-background p-3 text-center">
              <div className="text-lg font-semibold text-ink">{s.v}</div>
              <div className="text-[10px] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {[
            { icon: Layers, label: "Theme: Custom child theme", val: "v2.4" },
            { icon: Puzzle, label: "ACF Pro · Elementor Pro", val: "Active" },
            { icon: ShoppingBag, label: "WooCommerce checkout", val: "Optimized" },
            { icon: Search, label: "Schema & sitemaps", val: "Indexed" },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <r.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-medium text-ink">{r.label}</span>
              </div>
              <span className="text-[11px] font-medium text-muted-foreground">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-border bg-background p-3 shadow-soft md:block">
        <div className="flex items-center gap-2 text-xs font-medium text-ink">
          <ShieldCheck className="h-4 w-4 text-brand" /> NDA-protected build
        </div>
      </div>
    </div>
  );
}

/* ---------- WHY OUTSOURCE ---------- */
function WhyOutsource() {
  const pains = [
    { icon: AlertTriangle, t: "Unreliable freelancers", d: "Disappearing devs at the worst moments." },
    { icon: Bug, t: "Poor WordPress quality", d: "Bloated themes, messy builders, broken updates." },
    { icon: Puzzle, t: "Plugin conflicts", d: "Stacked plugins breaking layout and checkout." },
    { icon: Clock, t: "Slow delivery", d: "Missed deadlines, no clear timeline ownership." },
    { icon: Wrench, t: "Maintenance headaches", d: "Updates, backups and fixes nobody owns." },
    { icon: Smartphone, t: "Weak mobile builds", d: "Layouts that fall apart on real devices." },
    { icon: Search, t: "SEO issues", d: "Bad structure, missing schema, slow Core Web Vitals." },
    { icon: Activity, t: "Inconsistent standards", d: "Every project built differently." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies outsource"
          title="WordPress fulfillment is where agencies bleed time"
          sub="The same problems show up across every agency — and they quietly damage client relationships and margins."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

/* ---------- OUR SOLUTION ---------- */
function Solution() {
  const items = [
    { icon: Workflow, t: "Structured workflow", d: "Defined stages, milestones and ownership." },
    { icon: Layers, t: "Scalable delivery", d: "Capacity that flexes with your monthly demand." },
    { icon: Code2, t: "Clean dev standards", d: "Reusable, maintainable WordPress code." },
    { icon: Search, t: "SEO-first approach", d: "Schema, hierarchy, CWV built in from day one." },
    { icon: MessageSquare, t: "Organized communication", d: "Slack / ClickUp with predictable rhythm." },
    { icon: LifeBuoy, t: "Ongoing support", d: "Long-term care for every site we ship." },
    { icon: Wrench, t: "Maintenance systems", d: "Updates, backups, monitoring on autopilot." },
    { icon: BadgeCheck, t: "Consistent quality", d: "Same QA bar across every project." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our WordPress solution"
          title="A backend WordPress team that just works"
          sub="A structured fulfillment system designed around how agencies actually deliver client work."
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

/* ---------- SERVICES INCLUDED ---------- */
function ServicesIncluded() {
  const services = [
    { icon: Code2, t: "Custom WordPress Development", d: "Tailored themes built from clean, scalable code." },
    { icon: Layers, t: "Elementor Development", d: "Pro-grade templates and reusable global modules." },
    { icon: ShoppingBag, t: "WooCommerce Development", d: "Stores, checkout flows and payment integrations." },
    { icon: Rocket, t: "Landing Pages", d: "High-converting modular page systems." },
    { icon: RefreshCw, t: "Website Redesign", d: "Modernize and rebuild outdated WordPress sites." },
    { icon: Palette, t: "Theme Customization", d: "Design and behavior tweaks on existing themes." },
    { icon: Gauge, t: "Performance Optimization", d: "Core Web Vitals, caching, asset pipeline." },
    { icon: Search, t: "Technical SEO Setup", d: "Schema, sitemap, hierarchy and indexability." },
    { icon: Lock, t: "Security Hardening", d: "Login, firewall, malware and update policy." },
    { icon: Wrench, t: "Website Maintenance", d: "Backups, updates, monitoring and edits." },
    { icon: Settings, t: "CMS Configuration", d: "Editor-friendly content models and roles." },
    { icon: Smartphone, t: "Responsive Development", d: "Mobile-first across phone, tablet, desktop." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Services included"
          title="Everything WordPress, under one operational roof"
          sub="A full-stack WordPress fulfillment menu — pick what you need, scale as you grow."
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
    { icon: EyeOff, t: "True white label", d: "Invisible delivery under your brand, every time." },
    { icon: UserX, t: "No client poaching", d: "Strict no-contact policy with your end clients." },
    { icon: FileLock2, t: "NDA-friendly", d: "Standard on every partnership." },
    { icon: Code2, t: "WordPress expertise", d: "Years of agency-grade WordPress delivery." },
    { icon: Search, t: "SEO-aware development", d: "Schema, hierarchy, performance baked in." },
    { icon: Compass, t: "Dedicated PM", d: "One owner for your delivery end-to-end." },
    { icon: Zap, t: "Fast revisions", d: "Predictable revision cycles, not weeks of silence." },
    { icon: Layers, t: "Scalable fulfillment", d: "Add capacity month-over-month as you grow." },
    { icon: Wrench, t: "Maintenance support", d: "Long-term care for every site we ship." },
    { icon: MessageSquare, t: "Reliable communication", d: "Structured channels with response SLAs." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies choose us"
          title="Operationally mature, agency-first WordPress"
          sub="The combination of expertise, structure and discipline agencies rarely find in WordPress vendors."
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
    { icon: ClipboardCheck, t: "Requirement Collection", d: "Scope, references, branding, success criteria." },
    { icon: Compass, t: "WordPress Planning", d: "Architecture, content models, plugin stack." },
    { icon: Code2, t: "UI/UX & Development", d: "Custom build with reusable components." },
    { icon: Search, t: "SEO Optimization", d: "Schema, hierarchy, sitemap, indexability." },
    { icon: ClipboardCheck, t: "QA & Responsiveness", d: "Cross-device, performance and content QA." },
    { icon: RefreshCw, t: "Revisions", d: "Structured revision rounds with clear ownership." },
    { icon: Rocket, t: "White Label Delivery", d: "Clean handoff under your brand and domain." },
    { icon: LifeBuoy, t: "Maintenance & Support", d: "Long-term care for the live site." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our process"
          title="A predictable WordPress delivery system"
          sub="Every project moves through the same disciplined stages — no chaos, no improvisation."
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

/* ---------- PROJECT TYPES ---------- */
function ProjectTypes() {
  const types = [
    { icon: Building2, t: "Local Business", color: "from-amber-100 to-amber-50" },
    { icon: Briefcase, t: "Agency Websites", color: "from-sky-100 to-sky-50" },
    { icon: ShoppingBag, t: "Ecommerce Stores", color: "from-rose-100 to-rose-50" },
    { icon: Stethoscope, t: "Healthcare", color: "from-emerald-100 to-emerald-50" },
    { icon: Home, t: "Real Estate", color: "from-violet-100 to-violet-50" },
    { icon: HardHat, t: "Contractor Sites", color: "from-slate-100 to-slate-50" },
    { icon: Rocket, t: "Landing Pages", color: "from-indigo-100 to-indigo-50" },
    { icon: Globe2, t: "Service Business", color: "from-teal-100 to-teal-50" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Types of projects"
          title="WordPress builds across every agency vertical"
          sub="From local business sites to ecommerce stores — we deliver across the verticals agencies actually sell."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${p.color}`}>
                <p.icon className="h-10 w-10 text-ink/70" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink">{p.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">White label · responsive · SEO-ready</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PERFORMANCE & SEO ---------- */
function PerformanceSEO() {
  const items = [
    { icon: Gauge, t: "Core Web Vitals", d: "LCP, CLS, INP tuned across every page template." },
    { icon: Search, t: "Technical SEO", d: "Hierarchy, robots, sitemap, canonical URLs." },
    { icon: Database, t: "Schema readiness", d: "Organization, LocalBusiness, Product, Article." },
    { icon: Smartphone, t: "Responsive performance", d: "Optimized assets for every device class." },
    { icon: Zap, t: "Speed optimization", d: "Caching, image, font and JS pipeline." },
    { icon: Code2, t: "Clean code structure", d: "Maintainable, predictable, well-documented." },
    { icon: Layers, t: "SEO-friendly architecture", d: "Page hierarchy designed for indexability." },
    { icon: FileCheck2, t: "Pre-launch SEO QA", d: "Checklist gates before every site goes live." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-24">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Performance &amp; SEO</div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              WordPress builds engineered for performance and SEO.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Most WordPress sites underperform because performance and SEO are afterthoughts. We bake them in from the architecture stage.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { v: "97+", k: "Avg. Lighthouse" },
                { v: "<1.8s", k: "Avg. LCP" },
                { v: "100%", k: "Schema coverage" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-border bg-surface-elevated p-3 text-center shadow-soft">
                  <div className="text-base font-semibold text-ink">{s.v}</div>
                  <div className="text-[10px] text-muted-foreground">{s.k}</div>
                </div>
              ))}
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

/* ---------- MAINTENANCE ---------- */
function Maintenance() {
  const items = [
    { icon: Puzzle, t: "Plugin updates", d: "Tested updates without breaking the site." },
    { icon: Database, t: "Backups", d: "Automated daily backups, off-site storage." },
    { icon: Activity, t: "Monitoring", d: "Uptime and performance monitoring 24/7." },
    { icon: ShieldCheck, t: "Security", d: "Hardening, malware scans, login protection." },
    { icon: Headphones, t: "Emergency support", d: "Fast response when something breaks." },
    { icon: FileCheck2, t: "Maintenance reporting", d: "Monthly reports — agency-branded." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Maintenance &amp; support"
          title="Long-term WordPress care, agency-grade"
          sub="Keep every client site healthy, fast and secure with structured ongoing support."
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
        <div className="mt-8 text-center">
          <Link to="/services/white-label-website-maintenance" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
            Explore maintenance plans <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO SHOWCASE ---------- */
function PortfolioShowcase() {
  const items = [
    { tag: "Agency", title: "Ridgeline Studio", color: "from-sky-100 to-sky-50" },
    { tag: "Ecommerce", title: "Lumen Apothecary", color: "from-violet-100 to-violet-50" },
    { tag: "Healthcare", title: "Brightpath Dental", color: "from-emerald-100 to-emerald-50" },
    { tag: "Service", title: "Northwind HVAC", color: "from-teal-100 to-teal-50" },
    { tag: "Real Estate", title: "Marigold Estates", color: "from-rose-100 to-rose-50" },
    { tag: "Local", title: "Cedar &amp; Stone Café", color: "from-amber-100 to-amber-50" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Portfolio"
          title="Recent WordPress projects"
          sub="A selection of recent WordPress builds delivered for our agency partners."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative h-40 bg-gradient-to-br ${p.color}`}>
                <div className="absolute left-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                  {p.tag}
                </div>
                <div className="absolute bottom-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background text-ink shadow-soft transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink" dangerouslySetInnerHTML={{ __html: p.title }} />
                <p className="mt-1 text-xs text-muted-foreground">WordPress · responsive · SEO-ready</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
            View full portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- TECHNOLOGY STACK ---------- */
function Stack() {
  const tech = [
    { icon: Code2, t: "WordPress", d: "Custom themes & scalable architecture." },
    { icon: Layers, t: "Elementor", d: "Pro-grade builder mastery." },
    { icon: ShoppingBag, t: "WooCommerce", d: "Stores & checkout flows." },
    { icon: Database, t: "ACF", d: "Editor-friendly content models." },
    { icon: Gauge, t: "Performance", d: "CWV, caching, asset pipeline." },
    { icon: Search, t: "SEO Plugins", d: "Yoast, Rank Math, schema." },
    { icon: ServerCog, t: "Security Systems", d: "Wordfence, hardening, firewalls." },
    { icon: Smartphone, t: "Responsive Frameworks", d: "Mobile-first across devices." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Technology stack" title="A focused, reliable WordPress stack" />
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
    { quote: "We've shipped 30+ WordPress sites with Whitelayer. Clean code, reliable timelines, and our clients have no idea they exist.", name: "Marcus L.", role: "Founder, SEO Agency" },
    { quote: "Their WordPress expertise is the real deal — proper architecture, real SEO awareness, and zero plugin chaos.", name: "Priya S.", role: "Head of Delivery, Marketing Agency" },
    { quote: "Maintenance is where they really shine. Multi-site monitoring and updates are completely off our plate.", name: "Daniel R.", role: "Owner, Digital Agency" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="Trusted by agencies for WordPress fulfillment" />
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
    { q: "Do you work under our branding?", a: "Yes. Every project is delivered fully under your brand, your domain and your communication channels. We never appear to your end clients." },
    { q: "Do you sign NDAs?", a: "Absolutely. NDAs are standard for every partnership — we'll sign yours or provide one." },
    { q: "Which builders do you support?", a: "We work primarily with Elementor Pro, native Gutenberg blocks, and ACF-driven custom themes. We can also support existing builds in other builders." },
    { q: "Do you optimize for SEO?", a: "Yes — schema, hierarchy, sitemap, Core Web Vitals and indexability are baked in from day one, not added later." },
    { q: "Do you provide maintenance?", a: "Yes. We offer dedicated white label maintenance plans for ongoing updates, backups, monitoring, security and content edits." },
    { q: "How do revisions work?", a: "Each project includes structured revision rounds with clear scope, timeline and ownership — no open-ended back-and-forth." },
    { q: "Can you handle multiple projects?", a: "Yes. We're built for multi-project delivery and can scale capacity month-over-month with your agency." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="WordPress development questions" />
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
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Let's build together</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Need a reliable white label WordPress partner?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Scale your agency with expert WordPress fulfillment — under your brand, on predictable timelines.
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
function WPPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <WhyOutsource />
        <Solution />
        <ServicesIncluded />
        <WhyChooseUs />
        <Process />
        <ProjectTypes />
        <PerformanceSEO />
        <Maintenance />
        <PortfolioShowcase />
        <Stack />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
