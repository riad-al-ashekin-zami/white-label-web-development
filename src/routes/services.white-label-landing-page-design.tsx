import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Rocket, Target, MousePointerClick, Smartphone,
  Gauge, Zap, EyeOff, FileLock2, UserX, Search, TrendingUp, Layers,
  Compass, ClipboardCheck, Code2, Wrench, LifeBuoy, Quote, BadgeCheck,
  Sparkles, Activity, Filter, MessageSquare, CheckCircle2, LineChart,
  BarChart3, Megaphone, MapPin, FormInput, Video, Briefcase, ShoppingBag,
  Building2, Users, HeartPulse, Database, Globe, FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RelatedServices } from "@/components/site/RelatedServices";

export const Route = createFileRoute("/services/white-label-landing-page-design")({
  head: () => ({
    meta: [
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { title: "White Label Landing Page Design for Agencies" },
      { name: "description", content: "High-converting white label landing pages for agencies. PPC, local SEO, lead gen and SaaS pages built fast, mobile-first and under your brand." },
      { property: "og:title", content: "White Label Landing Page Design for Agencies" },
      { property: "og:description", content: "High-converting white label landing pages for agencies. PPC, local SEO, lead gen and SaaS pages built fast, mobile-first and under your brand." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/services/white-label-landing-page-design" },
      { name: "twitter:title", content: "White Label Landing Page Design for Agencies" },
      { name: "twitter:description", content: "High-converting white label landing pages for agencies. PPC, local SEO, lead gen and SaaS pages built fast, mobile-first and under your brand." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/services/white-label-landing-page-design" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Services\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"White Label Landing Page Development\", \"item\": \"https://whitelabelwebsitedevelopment.com/services/white-label-landing-page-design\"}]}, {\"@type\": \"Service\", \"name\": \"White Label Landing Page Development\", \"description\": \"High-converting landing pages for ads, launches and lead generation, built under your agency brand.\", \"url\": \"https://whitelabelwebsitedevelopment.com/services/white-label-landing-page-design\", \"provider\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#organization\"}, \"areaServed\": \"Global\", \"serviceType\": \"White Label Landing Page Development\", \"audience\": {\"@type\": \"Audience\", \"audienceType\": \"Marketing and SEO agencies\"}}]}",
      },
    ],
  }),
  
  component: LandingPage,
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
              <Rocket className="h-3.5 w-3.5 text-brand" />
              White Label Landing Pages
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              <span className="text-brand">White Label Landing Page Design</span> &amp; development for PPC and lead-gen campaigns.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Conversion-focused landing page development for agencies running paid ads, local SEO and outbound campaigns. Mobile-first builds, fast deploys, A/B-ready structure — quietly delivered under your agency brand.
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
                { icon: TrendingUp, label: "Conversion-focused" },
                { icon: Zap, label: "Fast turnaround" },
                { icon: Smartphone, label: "Mobile-first" },
                { icon: EyeOff, label: "White label delivery" },
                { icon: Search, label: "SEO & PPC ready" },
                { icon: Gauge, label: "Speed optimized" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <HeroMock />
        </div>
      </div>
    </section>
  );
}

function HeroMock() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Megaphone className="h-3.5 w-3.5 text-brand" />
            <span>campaign · client-landing.com</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Live</span>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-brand/10 via-background to-background p-4">
          <div className="h-2 w-2/3 rounded bg-ink/80" />
          <div className="mt-2 h-1.5 w-1/2 rounded bg-muted" />
          <div className="mt-1 h-1.5 w-1/3 rounded bg-muted" />
          <div className="mt-3 inline-flex h-6 items-center rounded-full bg-brand px-3 text-[10px] font-semibold text-brand-foreground">
            Get started →
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Conv. rate", v: "12.4%" },
            { k: "CPL", v: "$8.20" },
            { k: "LCP", v: "1.4s" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-background p-3 text-center">
              <div className="text-lg font-semibold text-ink">{s.v}</div>
              <div className="text-[10px] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 space-y-2">
          {[
            { icon: FormInput, label: "Lead form", val: "Optimized" },
            { icon: MousePointerClick, label: "Above-fold CTA", val: "Visible" },
            { icon: Smartphone, label: "Mobile-first UI", val: "Pass" },
            { icon: Activity, label: "Analytics + Pixel", val: "Connected" },
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
          <TrendingUp className="h-4 w-4 text-brand" /> Built for conversions
        </div>
      </div>
    </div>
  );
}

/* ---------- PAINS ---------- */
function Pains() {
  const pains = [
    { icon: Zap, t: "Slow internal production", d: "Campaign teams blocked by design queues." },
    { icon: TrendingUp, t: "Poor conversion rates", d: "Pretty pages that don't generate leads." },
    { icon: Smartphone, t: "Weak mobile UX", d: "Mobile traffic dropping at the form." },
    { icon: Layers, t: "Inconsistent design quality", d: "Each freelancer ships a different system." },
    { icon: Briefcase, t: "Overloaded campaign teams", d: "Strategists stuck doing production work." },
    { icon: UserX, t: "Unreliable freelancers", d: "Disappearing right before campaign launch." },
    { icon: MessageSquare, t: "Slow revisions", d: "Days of silence on small change requests." },
    { icon: ClipboardCheck, t: "Campaign launch delays", d: "Ad spend waiting on landing page delivery." },
    { icon: EyeOff, t: "No white label workflow", d: "Vendors that aren't safe in front of clients." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies outsource landing pages"
          title="Landing pages are where campaigns silently break"
          sub="The same production bottlenecks delay launches across every agency — and they cost real ad spend."
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
    { icon: Target, t: "Conversion-focused layouts", d: "Every section earns its place toward the CTA." },
    { icon: Zap, t: "Fast turnaround", d: "Launch-ready pages in days, not weeks." },
    { icon: Smartphone, t: "Responsive UI/UX", d: "Mobile-first design across all breakpoints." },
    { icon: Layers, t: "Scalable campaign support", d: "Multi-page rollouts under one system." },
    { icon: Search, t: "SEO & PPC-friendly structure", d: "Quality-Score-aware copy and markup." },
    { icon: Compass, t: "Organized workflows", d: "Clear scope, predictable delivery rhythm." },
    { icon: MessageSquare, t: "Rapid revisions", d: "Same-day cycles during campaign sprints." },
    { icon: Gauge, t: "Performance optimization", d: "Core Web Vitals tuned for paid traffic." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our landing page solution"
          title="A landing page system built around campaigns"
          sub="A structured fulfillment model designed for agencies that ship landing pages every week."
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
    { icon: Megaphone, t: "PPC Landing Pages", d: "Quality-Score-aware pages for Google & Bing." },
    { icon: MapPin, t: "Local SEO Landing Pages", d: "City and service-area pages that rank." },
    { icon: FormInput, t: "Lead Generation Pages", d: "Forms tuned for cost-per-lead efficiency." },
    { icon: Briefcase, t: "Service Business Landing Pages", d: "Conversion-focused service pages." },
    { icon: Sparkles, t: "SaaS Landing Pages", d: "Product-led pages with trial-focused CTAs." },
    { icon: ShoppingBag, t: "Ecommerce Landing Pages", d: "Promo and product campaign pages." },
    { icon: Filter, t: "Funnel Pages", d: "Multi-step funnels with clear progression." },
    { icon: LineChart, t: "ClickFunnels-Style Layouts", d: "Long-form pages with proof and offer stacking." },
    { icon: Code2, t: "Elementor Landing Pages", d: "Editable, agency-friendly Elementor builds." },
    { icon: Smartphone, t: "Mobile-Optimized Pages", d: "Built mobile-first for paid social traffic." },
    { icon: Target, t: "Conversion-Focused UI", d: "Every UI decision tied to lift." },
    { icon: Wrench, t: "Landing Page Redesigns", d: "Modernize and recover underperforming pages." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Landing page services"
          title="Everything campaign teams need, in one place"
          sub="A complete landing page menu for every channel and offer — pick what you need, scale as you grow."
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
    { icon: EyeOff, t: "True white label", d: "Invisible delivery under your brand." },
    { icon: Zap, t: "Fast delivery", d: "Days, not weeks, per page." },
    { icon: UserX, t: "No client poaching", d: "Strict no-contact policy." },
    { icon: Target, t: "Conversion-focused", d: "Designed around CR, not just visuals." },
    { icon: Smartphone, t: "Mobile-first", d: "Optimized for paid mobile traffic." },
    { icon: Layers, t: "Scalable fulfillment", d: "Capacity for multi-page campaigns." },
    { icon: Megaphone, t: "Campaign-ready structure", d: "QS-aware copy and structure." },
    { icon: MessageSquare, t: "Organized comms", d: "Slack/ClickUp with clear rhythm." },
    { icon: Activity, t: "Fast revisions", d: "Same-day cycles during launches." },
    { icon: Search, t: "SEO-aware design", d: "Indexable, schema-ready pages." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies choose us"
          title="Built for agencies running campaigns at speed"
          sub="The combination of conversion expertise, structure and speed agencies rarely find in landing page vendors."
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
    { icon: ClipboardCheck, t: "Campaign Requirement Analysis", d: "Offer, audience, channel, KPIs." },
    { icon: Compass, t: "Wireframe & Conversion Planning", d: "Section flow tied to user intent." },
    { icon: Sparkles, t: "UI/UX Design", d: "Polished, brand-aligned visual design." },
    { icon: Code2, t: "Development & Optimization", d: "Clean, fast, editable build." },
    { icon: Smartphone, t: "Responsive Testing", d: "Real-device QA across breakpoints." },
    { icon: BadgeCheck, t: "QA & Conversion Review", d: "CTA, form and analytics validation." },
    { icon: Rocket, t: "White Label Delivery", d: "Clean handoff under your brand." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our landing page process"
          title="A predictable, campaign-focused delivery system"
          sub="Every page moves through the same disciplined stages — fast, organized, and built for paid traffic."
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

/* ---------- TYPES OF LANDING PAGES ---------- */
function PageTypes() {
  const types = [
    { icon: Megaphone, t: "Google Ads Landing Pages", color: "from-sky-100 to-sky-50" },
    { icon: Users, t: "Facebook Ads Landing Pages", color: "from-indigo-100 to-indigo-50" },
    { icon: MapPin, t: "Local SEO City Pages", color: "from-emerald-100 to-emerald-50" },
    { icon: FormInput, t: "Lead Capture Pages", color: "from-amber-100 to-amber-50" },
    { icon: Video, t: "Webinar Registration Pages", color: "from-violet-100 to-violet-50" },
    { icon: Briefcase, t: "Service Landing Pages", color: "from-slate-100 to-slate-50" },
    { icon: Sparkles, t: "SaaS Campaign Pages", color: "from-teal-100 to-teal-50" },
    { icon: ShoppingBag, t: "Product Promotion Pages", color: "from-rose-100 to-rose-50" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Types of landing pages"
          title="Built for every channel and offer"
          sub="From paid social to local SEO — landing pages designed for the way each channel actually converts."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${p.color}`}>
                <p.icon className="h-10 w-10 text-ink/70" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink">{p.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Conversion-focused · responsive · campaign-ready</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONVERSION OPTIMIZATION ---------- */
function ConversionOpt() {
  const items = [
    { icon: Target, t: "CTA positioning", d: "Above-fold, repeated, contextual placement." },
    { icon: Layers, t: "Visual hierarchy", d: "Eyes guided to offer, proof, then action." },
    { icon: Smartphone, t: "Mobile UX", d: "Thumb-zone CTAs and frictionless forms." },
    { icon: BadgeCheck, t: "Trust-building sections", d: "Reviews, logos, badges, guarantees." },
    { icon: FormInput, t: "Lead form optimization", d: "Field count, labels, error states tuned." },
    { icon: Gauge, t: "Page speed", d: "Sub-2s LCP for paid traffic efficiency." },
    { icon: Compass, t: "User flow", d: "Single-purpose paths from headline to action." },
    { icon: FileText, t: "Readability", d: "Scannable copy, type scale, contrast." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Conversion optimization"
          title="Every page engineered to convert"
          sub="A repeatable conversion framework applied to every landing page we build — no guesswork."
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

/* ---------- MOBILE & PERFORMANCE ---------- */
function MobilePerf() {
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Mobile-first & performance"
          title="Pages built for paid mobile traffic"
          sub="Speed and mobile UX are non-negotiable on landing pages. We engineer for both from the first pixel."
        />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Smartphone, t: "Responsive optimization", d: "Real-device QA across breakpoints." },
              { icon: Gauge, t: "Core Web Vitals", d: "LCP, CLS and INP tuned for paid traffic." },
              { icon: Zap, t: "Page speed", d: "Sub-2s LCP, minimal JS, optimized assets." },
              { icon: Sparkles, t: "Fast-loading UI", d: "Instant feel from first paint to interaction." },
              { icon: Layers, t: "Lightweight layouts", d: "No bloated builders or unused code." },
              { icon: TrendingUp, t: "Mobile conversion focus", d: "Designed around thumb behavior." },
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
                { l: "LCP", v: "1.4s" }, { l: "CLS", v: "0.01" }, { l: "INP", v: "142ms" },
                { l: "TTFB", v: "210ms" }, { l: "FCP", v: "0.9s" }, { l: "TBT", v: "90ms" },
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
                { l: "Accessibility", v: 94 },
                { l: "SEO", v: 100 },
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

/* ---------- SHOWCASE ---------- */
function Showcase() {
  const items = [
    { icon: Wrench, t: "Local Service", d: "Plumbing campaign · 14% CR", color: "from-sky-100 to-sky-50" },
    { icon: Sparkles, t: "SaaS Trial", d: "B2B SaaS · 9.2% CR", color: "from-violet-100 to-violet-50" },
    { icon: ShoppingBag, t: "Ecommerce Promo", d: "Seasonal sale · 7.8% CR", color: "from-rose-100 to-rose-50" },
    { icon: FormInput, t: "Lead Generation", d: "Insurance quotes · 18% CR", color: "from-amber-100 to-amber-50" },
    { icon: Building2, t: "Contractor Page", d: "Roofing leads · 15% CR", color: "from-slate-100 to-slate-50" },
    { icon: HeartPulse, t: "Healthcare Campaign", d: "Clinic booking · 11% CR", color: "from-emerald-100 to-emerald-50" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Landing page showcase"
          title="Real campaign pages, real conversion lift"
          sub="A snapshot of the verticals we ship landing pages for — every project optimized for measurable performance."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-3xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-0 bg-grid-soft opacity-40" aria-hidden />
                <p.icon className="relative h-12 w-12 text-ink/70" />
              </div>
              <div className="flex items-center justify-between p-5">
                <div>
                  <h3 className="text-sm font-semibold text-ink">{p.t}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{p.d}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-45" />
              </div>
            </article>
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
    { icon: Target, t: "Conversion Tools", d: "Heatmaps, A/B testing, recordings." },
    { icon: Rocket, t: "Landing Page Builders", d: "Unbounce, Instapage, Leadpages." },
    { icon: BarChart3, t: "Analytics Integration", d: "GA4, GTM, server-side tracking." },
    { icon: Database, t: "CRM Form Integration", d: "HubSpot, Salesforce, Pipedrive." },
    { icon: Smartphone, t: "Responsive Frameworks", d: "Modern, mobile-first systems." },
    { icon: Gauge, t: "Speed Optimization", d: "Caching, CDN, asset pipelines." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Technology stack" title="A focused, conversion-grade stack" />
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
    { quote: "Our PPC client's CR went from 4% to 11% on the first redesigned page. Same traffic, same offer — better page.", name: "Elena R.", role: "Head of Paid, PPC Agency" },
    { quote: "We ship 6–10 local SEO landing pages per month with them. Fast, on-brand, and our clients have no idea they exist.", name: "Marcus T.", role: "Founder, Local SEO Agency" },
    { quote: "Same-day revisions during a campaign launch. That alone changed how we scope landing page work internally.", name: "Priya N.", role: "Director, Lead Gen Agency" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="Trusted by agencies running campaigns" />
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
    { q: "How fast can you build landing pages?", a: "Standard landing pages ship in 5–7 business days. Expedited timelines are available for active campaign launches." },
    { q: "Do you optimize for conversions?", a: "Yes — every page applies our conversion framework: hierarchy, CTA placement, form optimization, mobile UX and trust elements." },
    { q: "Do you support PPC agencies?", a: "Absolutely. We build Quality-Score-aware landing pages aligned to ad copy, keywords and audience intent." },
    { q: "Can you build mobile-first landing pages?", a: "Always. Mobile is designed first, then scaled up — optimized for paid social and mobile search traffic." },
    { q: "Do you work under agency branding?", a: "Yes. Fully white label delivery — we never appear in client communication or deliverables." },
    { q: "How do revisions work?", a: "Each page includes structured revision rounds with same-day cycles during active campaigns." },
    { q: "Can you handle multiple campaign pages?", a: "Yes. We support multi-page rollouts (city pages, audience variants, A/B variants) under one consistent system." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="Landing page questions" />
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
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Let's launch together</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Need high-converting white label landing pages?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Scale your campaign fulfillment with reliable landing page support — fast, conversion-focused, and fully under your brand.
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
function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <Pains />
        <Solution />
        <ServicesIncluded />
        <WhyChooseUs />
        <Process />
        <PageTypes />
        <ConversionOpt />
        <MobilePerf />
        <Showcase />
        <Stack />
        <Testimonials />
        <FAQ />
        <CTA />
        <RelatedServices currentKey="landing" />
      </main>
      <Footer />
    </div>
  );
}
