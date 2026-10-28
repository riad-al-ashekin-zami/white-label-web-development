import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, Palette, Layers, Rocket, ShoppingBag, RefreshCw,
  Smartphone, Target, Sparkles, Layout, Code2, Search, EyeOff, FileLock2,
  UserX, MessageSquare, Zap, BadgeCheck, Quote, AlertTriangle, Clock,
  Building2, Stethoscope, HardHat, Briefcase, Globe2, CheckCircle2, Compass,
  ClipboardCheck, Figma, Type, Eye, MousePointerClick, Accessibility,
  Gauge, TrendingUp, MoveHorizontal, Frame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RelatedServices } from "@/components/site/RelatedServices";

export const Route = createFileRoute("/services/white-label-website-design")({
  head: () => ({
    meta: [
      { title: "White Label Website Design for Agencies | WLWD" },
      { name: "description", content: "White label website design for agencies: custom, conversion-focused designs delivered under your brand and ready for development." },
      { property: "og:title", content: "White Label Website Design for Agencies | WLWD" },
      { property: "og:description", content: "White label website design for agencies: custom, conversion-focused designs delivered under your brand and ready for development." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/services/white-label-website-design" },
      { name: "twitter:title", content: "White Label Website Design for Agencies | WLWD" },
      { name: "twitter:description", content: "White label website design for agencies: custom, conversion-focused designs delivered under your brand and ready for development." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/services/white-label-website-design" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: DESIGN_FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }),
      },
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Services\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"White Label Website Design\", \"item\": \"https://whitelabelwebsitedevelopment.com/services/white-label-website-design\"}]}, {\"@type\": \"Service\", \"name\": \"White Label Website Design\", \"description\": \"Conversion-focused white label website design delivered in Figma or directly to development.\", \"url\": \"https://whitelabelwebsitedevelopment.com/services/white-label-website-design\", \"provider\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#organization\"}, \"areaServed\": \"Global\", \"serviceType\": \"White Label Website Design\", \"audience\": {\"@type\": \"Audience\", \"audienceType\": \"Marketing and SEO agencies\"}}]}",
      },
    ],
  }),
  
  component: DesignPage,
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
              <Palette className="h-3.5 w-3.5 text-brand" />
              White Label Website Design
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              <span className="text-brand">White Label Website Design</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Outsource web design to a modern, agency-first studio. Conversion-focused UI, responsive layouts and developer-ready Figma files delivered under your agency brand — so your team ships premium design without expanding payroll.
             Approved designs move straight into <Link to="/" className="font-semibold text-brand hover:underline">white label web development</Link>, and campaign pages are covered by our <Link to="/services/white-label-landing-page-design" className="font-semibold text-brand hover:underline">white label landing page design</Link>.
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
                { icon: Smartphone, label: "Responsive design" },
                { icon: EyeOff, label: "White label" },
                { icon: Search, label: "SEO-aware layouts" },
                { icon: Target, label: "Conversion-focused" },
                { icon: Zap, label: "Fast turnaround" },
                { icon: FileLock2, label: "NDA friendly" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <DesignMock />
        </div>
      </div>
    </section>
  );
}

function DesignMock() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Figma className="h-3.5 w-3.5 text-brand" />
            <span>client-site · Design system v2</span>
          </div>
          <span className="rounded-full bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand">In review</span>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-3">
          <div className="col-span-3 overflow-hidden rounded-xl border border-border bg-background">
            <div className="h-32 bg-gradient-to-br from-indigo-100 via-sky-50 to-emerald-50" />
            <div className="space-y-1.5 p-3">
              <div className="h-2 w-2/3 rounded bg-ink/80" />
              <div className="h-1.5 w-full rounded bg-muted" />
              <div className="h-1.5 w-5/6 rounded bg-muted" />
              <div className="mt-2 flex gap-1.5">
                <div className="h-5 w-16 rounded bg-ink" />
                <div className="h-5 w-12 rounded border border-border" />
              </div>
            </div>
          </div>
          <div className="col-span-2 space-y-3">
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <div className="h-16 bg-gradient-to-br from-amber-100 to-rose-50" />
              <div className="p-2">
                <div className="h-1.5 w-3/4 rounded bg-ink/70" />
                <div className="mt-1 h-1 w-full rounded bg-muted" />
              </div>
            </div>
            <div className="overflow-hidden rounded-xl border border-border bg-background">
              <div className="h-16 bg-gradient-to-br from-violet-100 to-indigo-50" />
              <div className="p-2">
                <div className="h-1.5 w-2/3 rounded bg-ink/70" />
                <div className="mt-1 h-1 w-full rounded bg-muted" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Primary", "Ink", "Surface"].map((c, i) => (
            <div key={c} className="rounded-lg border border-border bg-background p-2">
              <div className={`h-8 rounded ${i === 0 ? "bg-brand" : i === 1 ? "bg-ink" : "bg-muted"}`} />
              <div className="mt-1.5 text-[10px] font-medium text-muted-foreground">{c}</div>
            </div>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-muted/40 px-3 py-2 text-xs">
          <span className="font-medium text-ink">Breakpoints</span>
          <span className="font-semibold text-brand">Mobile · Tablet · Desktop</span>
        </div>
      </div>
      <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-border bg-background p-3 shadow-soft md:block">
        <div className="flex items-center gap-2 text-xs font-medium text-ink">
          <Sparkles className="h-4 w-4 text-brand" /> Design system ready
        </div>
      </div>
    </div>
  );
}

/* ---------- WHY OUTSOURCE ---------- */
function WhyOutsource() {
  const pains = [
    { icon: AlertTriangle, t: "Inconsistent quality", d: "Different look and feel across every project." },
    { icon: Frame, t: "Outdated layouts", d: "Designs that feel 5 years behind modern standards." },
    { icon: Smartphone, t: "Poor mobile experience", d: "Layouts that fall apart on real devices." },
    { icon: Clock, t: "Slow designers", d: "Weeks of silence between revisions." },
    { icon: Target, t: "Weak conversion UI", d: "Pretty designs that don't generate leads." },
    { icon: Layers, t: "Overloaded internal team", d: "Design becoming the agency bottleneck." },
    { icon: AlertTriangle, t: "Missed deadlines", d: "Pushed launches and unhappy clients." },
    { icon: Eye, t: "Weak UX standards", d: "Hard-to-use interfaces and unclear hierarchy." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies outsource design"
          title="Design is where most agencies bottleneck"
          sub="The same design problems show up across every agency — and they quietly damage client trust and timelines."
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

/* ---------- DESIGN APPROACH ---------- */
function Approach() {
  const items = [
    { icon: Target, t: "Conversion-focused layouts", d: "Every section designed around CTAs and lead capture." },
    { icon: Smartphone, t: "Responsive UI/UX", d: "Mobile-first across phone, tablet and desktop." },
    { icon: Layout, t: "Clean visual hierarchy", d: "Typography, spacing and rhythm done properly." },
    { icon: Search, t: "SEO-aware structure", d: "Layouts that respect heading hierarchy and indexability." },
    { icon: Sparkles, t: "Modern SaaS aesthetics", d: "Premium, minimal, enterprise-grade visual style." },
    { icon: Layers, t: "Scalable design systems", d: "Reusable components, tokens and patterns." },
    { icon: MessageSquare, t: "Agency collaboration", d: "Structured Figma handoff and revision flow." },
    { icon: BadgeCheck, t: "Consistent quality bar", d: "Same standard across every project we ship." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our design approach"
          title="White Label Web Design Services"
          sub="A design philosophy built around scalability, performance and conversion — not just aesthetics."
        />
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>We design websites for the clients agencies actually sell to: local service businesses such as contractors, clinics and law firms, B2B and SaaS companies that need product and pricing pages, ecommerce stores, and agency client sites of every size.</p>
          <p>Each design starts from your client's brand and business goal, not a template. The result is a site that looks like your agency made it and gives the client a clear path to call, book or buy.</p>
        </div>
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

/* ---------- DESIGN SERVICES ---------- */
function ServicesIncluded() {
  const services = [
    { icon: Layout, t: "Website UI/UX Design", d: "Full website design from wireframe to polished UI." },
    { icon: Rocket, t: "Landing Page Design", d: "Conversion-focused single-page layouts." },
    { icon: Code2, t: "WordPress Design", d: "Designs built specifically for WordPress execution." },
    { icon: Layers, t: "Elementor Design", d: "Builder-ready templates and global modules." },
    { icon: ShoppingBag, t: "Ecommerce Design", d: "Product, category and checkout experiences." },
    { icon: RefreshCw, t: "Website Redesign", d: "Modernize outdated brand and product sites." },
    { icon: Smartphone, t: "Mobile Responsive Design", d: "Pixel-accurate adaptation across breakpoints." },
    { icon: Target, t: "Conversion-Focused Layouts", d: "Page structures designed around outcomes." },
    { icon: Palette, t: "Brand-Aligned Web Design", d: "Designs that respect each client's brand system." },
    { icon: Sparkles, t: "Design System Creation", d: "Tokens, components and reusable patterns." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Design services included"
          title="What You Get"
          sub="A complete design fulfillment menu — pick what you need, scale as you grow."
        />
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
          <p>Every white label website design project is handed over ready for your client review and for development:</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Organised, editable Figma files</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />A small design system: colours, type, buttons and components</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Mobile and desktop layouts for every page</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Exported images, icons and logo files</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Notes on interactions and hover states</li>
            <li className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />Unbranded presentation links under your agency</li>
          </ul>
        </div>
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
    { icon: UserX, t: "No client poaching", d: "Strict no-contact with your end clients." },
    { icon: Sparkles, t: "Modern design quality", d: "Premium, current, on-trend execution." },
    { icon: Search, t: "SEO-aware layouts", d: "Hierarchy and structure done properly." },
    { icon: Target, t: "Conversion-focused", d: "Designed around real business outcomes." },
    { icon: Layers, t: "Scalable fulfillment", d: "Capacity that grows with your agency." },
    { icon: Zap, t: "Fast revisions", d: "Predictable cycles, no weeks of silence." },
    { icon: Smartphone, t: "Responsive standards", d: "Mobile, tablet and desktop fidelity." },
    { icon: MessageSquare, t: "Organized comms", d: "Slack/ClickUp with clear rhythm." },
    { icon: FileLock2, t: "Agency-safe collaboration", d: "NDAs, scoped access, private files." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies choose us"
          title="Operationally mature, design-first"
          sub="The combination of taste, structure and discipline agencies rarely find in design vendors."
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
    { icon: ClipboardCheck, t: "Requirement Collection", d: "Scope, references, brand, success criteria." },
    { icon: Compass, t: "Brand & Style Research", d: "Mood, references and visual direction." },
    { icon: Frame, t: "Wireframe Planning", d: "Structure, hierarchy and content blocks." },
    { icon: Palette, t: "UI/UX Design", d: "High-fidelity Figma design and components." },
    { icon: Smartphone, t: "Responsive Optimization", d: "Mobile and tablet adaptations." },
    { icon: RefreshCw, t: "Review & Revisions", d: "Structured rounds, clean ownership." },
    { icon: Rocket, t: "White Label Delivery", d: "Clean Figma handoff under your brand." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our design process"
          title="Our Design Process"
          sub="Every project moves through the same disciplined design stages — no chaos, no improvisation."
        />
        <div className="mx-auto mt-6 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-muted-foreground">
          <p><strong className="text-ink">1. Brief.</strong> You share the client's goals, brand assets, competitors and page list. We confirm scope and timeline in writing.</p>
          <p><strong className="text-ink">2. Wireframes.</strong> We map page structure and content order in simple grey layouts, so layout decisions are made before visual design.</p>
          <p><strong className="text-ink">3. Figma design.</strong> We design the homepage first, then the remaining pages on the agreed style, for both mobile and desktop.</p>
          <p><strong className="text-ink">4. Revisions.</strong> Each project includes two rounds of revisions. You send one consolidated list of feedback per round and we turn it around in 1–2 business days.</p>
          <p><strong className="text-ink">5. Developer handoff.</strong> We hand over clean files to your developers, or straight to our own team for build.</p>
          <p>Turnaround: a homepage design usually takes 3–5 business days, and a typical 5–8 page site takes 7–10 business days. Extra revision rounds or new pages outside the agreed scope are quoted before we start them.</p>
        </div>
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

/* ---------- DESIGN SHOWCASE ---------- */
function Showcase() {
  const items = [
    { tag: "Agency", title: "Ridgeline Studio", color: "from-sky-100 via-indigo-50 to-background" },
    { tag: "HVAC", title: "BluePeak HVAC", color: "from-sky-100 via-indigo-50 to-background" },
    { tag: "Contractor", title: "Ironclad Roofing", color: "from-slate-100 via-slate-50 to-background" },
    { tag: "Ecommerce", title: "Lumen Apothecary", color: "from-rose-100 via-amber-50 to-background" },
    { tag: "Landing", title: "Northwind Launch", color: "from-emerald-100 via-teal-50 to-background" },
    { tag: "Service", title: "Cedar HVAC", color: "from-amber-100 via-amber-50 to-background" },
    { tag: "Healthcare", title: "Brightpath Dental", color: "from-emerald-100 via-emerald-50 to-background" },
    { tag: "Branding", title: "Harbor & Vine", color: "from-indigo-100 via-sky-50 to-background" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Design showcase"
          title="A look across recent design work"
          sub="A selection of recent design projects delivered for our agency partners — under their brand."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative h-40 bg-gradient-to-br ${p.color}`}>
                <div className="absolute left-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                  {p.tag}
                </div>
                <div className="absolute inset-x-3 bottom-3 rounded-lg border border-border bg-background/90 p-2 backdrop-blur">
                  <div className="h-1.5 w-2/3 rounded bg-ink/70" />
                  <div className="mt-1 h-1 w-full rounded bg-muted" />
                  <div className="mt-1 h-1 w-5/6 rounded bg-muted" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-45" />
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

/* ---------- MOBILE FIRST ---------- */
function MobileFirst() {
  const items = [
    { icon: MoveHorizontal, t: "Responsive breakpoints", d: "Mobile, tablet and desktop adaptations." },
    { icon: Smartphone, t: "Mobile-first layouts", d: "Designed for the smallest screen first." },
    { icon: Gauge, t: "Fast-loading design", d: "Asset-light, performance-aware decisions." },
    { icon: Accessibility, t: "Accessibility", d: "Contrast, focus states and semantic structure." },
    { icon: Target, t: "Conversion optimization", d: "CTAs and hierarchy tuned for mobile users." },
    { icon: MousePointerClick, t: "Touch-friendly UI", d: "Tap targets, spacing and gesture-friendly nav." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-24">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Mobile-first design</div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Designed for mobile first, scaled up beautifully.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Most users land on mobile. We design that experience first — then scale up to tablet and desktop without losing fidelity.
            </p>
            <div className="mt-6 flex items-end gap-3">
              <div className="flex h-40 w-20 flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-soft">
                <div className="h-12 bg-gradient-to-b from-brand/20 to-transparent" />
                <div className="flex-1 space-y-1.5 p-2">
                  <div className="h-1.5 w-full rounded bg-muted" />
                  <div className="h-1.5 w-4/5 rounded bg-muted" />
                  <div className="mt-2 h-4 w-2/3 rounded bg-ink" />
                </div>
              </div>
              <div className="flex h-48 w-32 flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-soft">
                <div className="h-16 bg-gradient-to-b from-brand/20 to-transparent" />
                <div className="flex-1 space-y-1.5 p-2.5">
                  <div className="h-2 w-full rounded bg-muted" />
                  <div className="h-2 w-4/5 rounded bg-muted" />
                  <div className="mt-2 h-5 w-2/3 rounded bg-ink" />
                </div>
              </div>
              <div className="flex h-56 flex-1 flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-soft">
                <div className="h-20 bg-gradient-to-b from-brand/20 to-transparent" />
                <div className="flex-1 space-y-2 p-3">
                  <div className="h-2 w-full rounded bg-muted" />
                  <div className="h-2 w-5/6 rounded bg-muted" />
                  <div className="mt-3 h-6 w-1/3 rounded bg-ink" />
                </div>
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

/* ---------- SEO & CONVERSION ---------- */
function SEOConversion() {
  const items = [
    { icon: Search, t: "SEO structure", d: "Heading hierarchy, semantics, indexability." },
    { icon: Eye, t: "User experience", d: "Clear flow, intuitive nav, low friction." },
    { icon: Target, t: "Conversion optimization", d: "CTAs, social proof, decision triggers." },
    { icon: TrendingUp, t: "Lead generation", d: "Form placement, trust signals, micro-CTAs." },
    { icon: Gauge, t: "Core Web Vitals", d: "Asset-aware design that respects performance." },
    { icon: Type, t: "Readability", d: "Type scale, line length and contrast tuned for reading." },
    { icon: Layout, t: "Visual hierarchy", d: "Size, weight and spacing guiding the eye." },
    { icon: BadgeCheck, t: "Trust signals", d: "Logos, testimonials and proof in the right places." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="SEO &amp; conversion-focused design"
          title="Design that ranks, converts and reads cleanly"
          sub="Beautiful is not enough. We design layouts that respect SEO, performance and the metrics agencies actually report on."
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

/* ---------- TOOLS & TECHNOLOGY ---------- */
function Tools() {
  const tech = [
    { icon: Figma, t: "Figma", d: "Source-of-truth design files and handoff." },
    { icon: Code2, t: "WordPress", d: "Designs built for clean WordPress execution." },
    { icon: Layers, t: "Elementor", d: "Builder-ready templates and modules." },
    { icon: MoveHorizontal, t: "Responsive Frameworks", d: "Mobile-first design systems." },
    { icon: Target, t: "Conversion Optimization", d: "Layouts engineered around outcomes." },
    { icon: Sparkles, t: "UI Systems", d: "Tokens, components, patterns and rules." },
    { icon: Palette, t: "Modern CSS Systems", d: "Design tokens that translate to clean code." },
    { icon: Search, t: "SEO Architecture", d: "Hierarchy and structure designed for search." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Design tools &amp; technology" title="A focused, premium design stack" />
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
    { quote: "Every design they ship looks like it was made for our agency. Premium, modern, on-brand — our clients consistently love the result.", name: "Elena R.", role: "Founder, Marketing Agency" },
    { quote: "We saw an immediate jump in lead conversion after redesigning two client sites with them. They actually understand UX, not just visuals.", name: "Tomas P.", role: "Director, SEO Agency" },
    { quote: "Their responsiveness and design system thinking is what really sold us. We can scale design across 10+ client sites without losing quality.", name: "Aisha K.", role: "Owner, Creative Agency" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="What agencies say about our design work" />
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
const DESIGN_FAQS = [
  { q: "Do you work under our agency brand?", a: "Yes. Files, presentation links and any notes are delivered under your agency's name. We never appear to your clients." },
  { q: "How long does a website design take?", a: "A homepage design usually takes 3–5 business days and a typical 5–8 page site takes 7–10 business days, depending on scope." },
  { q: "How many revisions are included?", a: "Two rounds of revisions are included. Additional rounds or changes outside the agreed scope are quoted before we start." },
  { q: "Can you build the site after designing it?", a: "Yes. Our team can develop the approved design in WordPress or another platform, or hand clean Figma files to your own developers." },
];

function FAQ() {
  const faqs = DESIGN_FAQS;
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="FAQ" />
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
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Let's design together</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Need reliable white label website design?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Scale your agency with premium UI/UX design — under your brand, on predictable timelines.
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
function DesignPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <WhyOutsource />
        <Approach />
        <ServicesIncluded />
        <WhyChooseUs />
        <Process />
        <Showcase />
        <MobileFirst />
        <SEOConversion />
        <Tools />
        <Testimonials />
        <FAQ />
        <CTA />
        <RelatedServices currentKey="design" />
      </main>
      <Footer />
    </div>
  );
}
