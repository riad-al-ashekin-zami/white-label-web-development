import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, AlertTriangle, Clock, MessageSquareOff, Smartphone, Search, Repeat,
  ShieldCheck, Workflow, Gauge, Headphones, Layers as LayersIcon, Code2, MonitorSmartphone,
  ShoppingCart, Rocket, RefreshCw, Wrench, Settings2, FileSearch, EyeOff, Users,
  CheckCircle2, XCircle, Briefcase, Stethoscope, Home, Hammer, Building2, Store,
  Globe, TrendingUp, DollarSign, Zap, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import heroImg from "@/assets/hero-dashboard.jpg";

export const Route = createFileRoute("/services/white-label-website-development")({
  head: () => ({
    meta: [
      { title: "White Label Website Development for Agencies — White Label Website Development" },
      {
        name: "description",
        content:
          "Outsource website development under your own brand. SEO-ready, fast turnaround, NDA friendly. The reliable backend dev team for SEO, marketing and digital agencies.",
      },
      { property: "og:title", content: "White Label Website Development for Agencies" },
      {
        property: "og:description",
        content:
          "Scale your agency without hiring developers. Premium white label web development with structured workflow and dedicated PM.",
      },
    ],
  }),
  component: WhiteLabelServicePage,
});

/* ---------- helpers ---------- */
function SectionHeader({
  eyebrow, title, sub, align = "center",
}: { eyebrow: string; title: string; sub?: string; align?: "center" | "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
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
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              White Label Website Development
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              The invisible <span className="text-gradient-brand">website development</span> team for agencies.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Outsource website development under your own brand. SEO-first, conversion-ready, on-schedule — built by a team that disappears behind your logo.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <a href="#contact">Book a Discovery Call</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-muted-foreground sm:flex sm:flex-wrap">
              {["Fast turnaround", "NDA friendly", "SEO-ready", "White label delivery"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> {t}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-2 shadow-elevated">
              <img src={heroImg} alt="White label development pipeline" width={1280} height={960} className="h-auto w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROBLEM ---------- */
const problems = [
  { icon: MessageSquareOff, title: "Developers who go dark", desc: "Freelancers vanish mid-project, leaving you to explain delays to your client." },
  { icon: Clock, title: "Missed deadlines", desc: "Launch dates slip, campaigns stall, and your reputation takes the hit." },
  { icon: AlertTriangle, title: "Inconsistent quality", desc: "Every project looks different. Code is messy. Handovers are painful." },
  { icon: Smartphone, title: "Broken on mobile", desc: "Sites that look great in desktop mockups but fall apart on a phone." },
  { icon: Search, title: "SEO ignored", desc: "Slow sites, poor schema, no semantic structure — and your SEO team has to clean up." },
  { icon: Repeat, title: "Endless revisions", desc: "No structured rounds, no version control, no clear scope." },
];

function Problem() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="The problem"
          title="Agency growth shouldn't depend on unreliable developers"
          sub="Most agencies hit the same fulfillment wall. Here's what we hear from new partners every week."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SOLUTION ---------- */
const solutions = [
  { icon: Workflow, title: "Structured workflow", desc: "Every project runs on the same proven pipeline — briefs, kickoff, sprints, QA, handover." },
  { icon: Headphones, title: "Dedicated project manager", desc: "One human point of contact who responds in hours, not days." },
  { icon: Gauge, title: "Reliable turnaround", desc: "Most websites ship in 5–7 business days. Bigger builds get a hard committed timeline." },
  { icon: Search, title: "SEO-first development", desc: "Clean semantic HTML, schema, perfect Core Web Vitals — your SEO team will thank us." },
  { icon: LayersIcon, title: "Scalable delivery", desc: "Run 1 project or 30 in parallel. Capacity flexes to your pipeline." },
  { icon: ShieldCheck, title: "Operational reliability", desc: "Process documentation, version control, backups, QA checklists — built in." },
];

function Solution() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our solution"
          title="A backend dev team engineered for agencies"
          sub="We replaced freelancer chaos with a production studio your agency can plan around."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- INCLUDED SERVICES ---------- */
const included = [
  { icon: Code2, title: "Custom Website Development", desc: "Bespoke builds in the stack of your choice." },
  { icon: Globe, title: "WordPress Development", desc: "Custom themes, ACF, Gutenberg blocks, no plugin bloat." },
  { icon: LayersIcon, title: "Elementor Development", desc: "Pixel-perfect Elementor builds, fully editable." },
  { icon: ShoppingCart, title: "WooCommerce Development", desc: "Storefronts with payments, shipping and inventory." },
  { icon: Rocket, title: "Landing Pages", desc: "Conversion-focused pages for ads and launches." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize legacy sites without losing SEO equity." },
  { icon: Gauge, title: "Speed Optimization", desc: "Tuned Core Web Vitals and Lighthouse scores." },
  { icon: MonitorSmartphone, title: "Mobile Optimization", desc: "Responsive across every device and breakpoint." },
  { icon: FileSearch, title: "Technical SEO Setup", desc: "Schema, sitemaps, indexing and crawlability done right." },
  { icon: Wrench, title: "Website Maintenance", desc: "Updates, backups, security and content edits monthly." },
];

function IncludedServices() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="What's included"
          title="Everything your agency needs to deliver websites"
          sub="A full production stack — order what you need, when you need it."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {included.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-brand-foreground">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-5 text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY AGENCIES WORK WITH US (comparison) ---------- */
const whitelayerWins = [
  "Strict white label delivery — your brand only",
  "Mutual NDA before kickoff",
  "Dedicated PM with hour-level response time",
  "SEO-ready, semantic, fast-loading code",
  "Structured revision rounds with clear scope",
  "Capacity that flexes from 1 to 30 parallel builds",
  "Documented handovers and clean codebases",
];
const otherFails = [
  "Generic dev shops talking directly to your clients",
  "No NDA, no formal confidentiality",
  "Slack ghosting and 48h+ response times",
  "Plugin-bloated, slow, hard-to-rank sites",
  "Endless revisions with shifting scope",
  "One developer, one project at a time",
  "Messy handovers your team has to fix",
];

function WhyAgencies() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies work with us"
          title="A partner built around your operating model"
          sub="Compare us to the typical freelancer or generic dev shop."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-ink bg-card p-8 shadow-elevated">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-ink">White Label Website Development</h3>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">Recommended</span>
            </div>
            <ul className="mt-6 space-y-3">
              {whitelayerWins.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold text-muted-foreground">Typical freelancers / dev shops</h3>
            <ul className="mt-6 space-y-3">
              {otherFails.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground/70" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS TIMELINE ---------- */
const processSteps = [
  { n: "01", title: "Requirement Collection", desc: "Brief intake call, asset checklist, scope confirmation." },
  { n: "02", title: "Planning & Wireframing", desc: "Sitemap, IA, wireframes and timeline locked in writing." },
  { n: "03", title: "Design & Development", desc: "Design system, page builds, integrations, daily updates." },
  { n: "04", title: "QA & Optimization", desc: "Cross-browser, mobile, accessibility, Core Web Vitals." },
  { n: "05", title: "Revisions", desc: "Two structured rounds with annotated feedback workflow." },
  { n: "06", title: "Final White Label Delivery", desc: "Polished handover under your brand, ready to ship." },
];

function Process() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Development process"
          title="Six steps. Zero surprises."
          sub="A predictable pipeline you can quote, plan and resell with confidence."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((s) => (
            <div key={s.n} className="bg-background p-8">
              <div className="text-xs font-semibold tracking-[0.18em] text-brand">{s.n}</div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TYPES OF WEBSITES ---------- */
const types = [
  { icon: Store, label: "Local Business" },
  { icon: Hammer, label: "Contractor" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: Home, label: "Real Estate" },
  { icon: ShoppingCart, label: "Ecommerce" },
  { icon: Briefcase, label: "Agency" },
  { icon: Rocket, label: "Landing Pages" },
  { icon: Building2, label: "Service Business" },
];

function Types() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Types of websites we build"
          title="Production capacity across every vertical"
          sub="From local service sites to ecommerce stores — we've shipped them all under partner brands."
        />
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {types.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-ink">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
const projects = [
  { tag: "Healthcare", title: "Beacon Family Clinic", color: "from-indigo-100 to-blue-50" },
  { tag: "Contractor", title: "Northwind Roofing", color: "from-slate-200 to-slate-100" },
  { tag: "Ecommerce", title: "Linen & Loom", color: "from-rose-100 to-pink-50" },
];

function Portfolio() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Portfolio"
          title="A glimpse of recent white label projects"
          sub="Names anonymized to protect partner confidentiality."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-6 rounded-xl border border-white bg-white/85 shadow-soft backdrop-blur-sm">
                  <div className="flex h-6 items-center gap-1.5 border-b border-border px-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-border" />
                    <span className="h-1.5 w-1.5 rounded-full bg-border" />
                    <span className="h-1.5 w-1.5 rounded-full bg-border" />
                  </div>
                  <div className="space-y-2 p-4">
                    <div className="h-2.5 w-3/5 rounded bg-ink/10" />
                    <div className="h-2 w-2/5 rounded bg-ink/10" />
                    <div className="mt-3 h-16 rounded-md bg-ink/5" />
                    <div className="grid grid-cols-3 gap-2 pt-1">
                      <div className="h-8 rounded bg-ink/5" />
                      <div className="h-8 rounded bg-ink/5" />
                      <div className="h-8 rounded bg-ink/5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-border p-5">
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-brand">{p.tag}</div>
                  <div className="mt-1 text-sm font-semibold text-ink">{p.title}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- AGENCY PARTNER BENEFITS ---------- */
const benefits = [
  { icon: TrendingUp, title: "Increase profit margins", desc: "Resell at your rate. Keep the spread without an internal payroll." },
  { icon: Users, title: "Avoid hiring developers", desc: "Skip recruiting, onboarding, benefits and bench time." },
  { icon: Zap, title: "Scale faster", desc: "Add capacity in days, not quarters. Say yes to bigger pipelines." },
  { icon: DollarSign, title: "Focus on sales", desc: "Spend time closing deals, not babysitting fulfillment." },
  { icon: Gauge, title: "Faster delivery", desc: "Predictable timelines mean shorter sales cycles and faster cash." },
  { icon: Settings2, title: "Operational simplicity", desc: "One vendor, one PM, one invoice — across every project." },
];

function PartnerBenefits() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Agency partner benefits"
          title="Why a white label partner beats hiring"
          sub="The economics of fulfillment — done the modern way."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-brand-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { quote: "Three years in and they've never blown a deadline. Our PMs treat them like an internal team.", name: "Hannah Reid", role: "Founder, Northbeam SEO" },
  { quote: "We onboarded them for one site and now they're our entire web fulfillment arm.", name: "Marcus Patel", role: "MD, Field Marketing Group" },
  { quote: "Clean code, fast turnarounds, and they actually understand SEO. Rare combo.", name: "Sara Bennett", role: "Owner, Bennett Digital" },
];

function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="Trusted by agency owners worldwide" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-background p-7 shadow-soft">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 flex-1 text-pretty text-[15px] leading-relaxed text-ink">"{t.quote}"</blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const faqs = [
  { q: "Do you sign an NDA?", a: "Yes. We sign a mutual NDA before any briefing call. Confidentiality is the foundation of every white label relationship." },
  { q: "Do you communicate with our clients?", a: "Never directly. All communication runs through your team. We stay completely invisible to your clients." },
  { q: "Can we use our own branding?", a: "Absolutely. Every deliverable — staging URLs, documentation, handover files — is presented under your branding." },
  { q: "What platforms do you build on?", a: "WordPress (custom themes, ACF, Gutenberg, Elementor), WooCommerce, Webflow, Shopify, and custom React/Next.js stacks." },
  { q: "How fast is your turnaround?", a: "Most websites ship in 5–7 business days. Larger custom builds get a committed timeline before kickoff." },
  { q: "How do revisions work?", a: "Each project includes two structured revision rounds with annotated feedback. Additional rounds are quoted upfront — no scope creep." },
  { q: "Do you provide ongoing maintenance?", a: "Yes. We offer monthly maintenance plans covering updates, backups, security patches and content edits." },
];

function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Answers for agency owners" />
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

/* ---------- FINAL CTA ---------- */
function FinalCTA() {
  return (
    <section id="contact" className="pb-24 md:pb-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated to-brand-soft p-10 text-center md:p-20">
          <div className="absolute inset-0 bg-grid-soft opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-ink shadow-soft">
              <EyeOff className="h-3.5 w-3.5 text-brand" /> 100% confidential
            </div>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Need a reliable white label development partner?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Tell us about your pipeline. We'll send a custom quote and timeline within one business day.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-background px-6">
                <a href="#contact">Schedule a Call</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */
function WhiteLabelServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <IncludedServices />
        <WhyAgencies />
        <Process />
        <Types />
        <Portfolio />
        <PartnerBenefits />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
