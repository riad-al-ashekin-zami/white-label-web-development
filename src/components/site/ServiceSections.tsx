import {
  AlertTriangle, Clock, MessageSquareOff, Smartphone, Search, Repeat,
  ShieldCheck, Workflow, Gauge, Headphones, Layers as LayersIcon, Code2, MonitorSmartphone,
  ShoppingCart, Rocket, RefreshCw, Wrench, Settings2, FileSearch, Users,
  CheckCircle2, XCircle, Briefcase, Stethoscope, Home, Hammer, Building2, Store,
  Globe, TrendingUp, DollarSign, Zap,
} from "lucide-react";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:text-xs">{eyebrow}</div>
      <h2 className="mt-3 text-balance text-[26px] font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-base">{sub}</p>}
    </div>
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

export function Problem() {
  return (
    <section className="bg-surface py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="The problem"
          title="Agency growth shouldn't depend on unreliable developers"
          sub="Most agencies hit the same fulfillment wall. Here's what we hear from new partners every week."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-background p-5 md:p-6">
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

export function Solution() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our solution"
          title="A white label website development team engineered for agencies"
          sub="We replaced freelancer chaos with a production studio your agency can plan around."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-14 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-5 md:p-8">
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

export function IncludedServices() {
  return (
    <section className="bg-surface py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="What's included"
          title="Everything your agency needs to deliver websites"
          sub="A full white label website development stack — order what you need, when you need it."
        />
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:mt-14 lg:grid-cols-5">
          {included.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col bg-background p-5 md:p-6">
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

/* ---------- COMPARISON ---------- */
const wins = [
  "Strict white label delivery — your brand only",
  "Mutual NDA before kickoff",
  "Dedicated PM with hour-level response time",
  "SEO-ready, semantic, fast-loading code",
  "Structured revision rounds with clear scope",
  "Capacity that flexes from 1 to 30 parallel builds",
  "Documented handovers and clean codebases",
];
const fails = [
  "Generic dev shops talking directly to your clients",
  "No NDA, no formal confidentiality",
  "Slack ghosting and 48h+ response times",
  "Plugin-bloated, slow, hard-to-rank sites",
  "Endless revisions with shifting scope",
  "One developer, one project at a time",
  "Messy handovers your team has to fix",
];

export function Comparison() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies work with us"
          title="A partner built around your operating model"
          sub="Compare us to the typical freelancer or generic dev shop."
        />
        <div className="mt-10 grid gap-5 md:mt-14 md:gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-ink bg-card p-6 shadow-elevated md:p-8">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-ink md:text-lg">White Label Website Development</h3>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">Recommended</span>
            </div>
            <ul className="mt-5 space-y-3 md:mt-6">
              {wins.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="text-base font-semibold text-muted-foreground md:text-lg">Typical freelancers / dev shops</h3>
            <ul className="mt-5 space-y-3 md:mt-6">
              {fails.map((t) => (
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

/* ---------- TYPES ---------- */
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

export function Types() {
  return (
    <section className="bg-surface py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Types of websites we build"
          title="Production capacity across every vertical"
          sub="From local service sites to ecommerce stores — we've shipped them all under partner brands."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:gap-4 sm:grid-cols-4">
          {types.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-soft md:p-6">
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

/* ---------- PARTNER BENEFITS ---------- */
const benefits = [
  { icon: TrendingUp, title: "Increase profit margins", desc: "Resell at your rate. Keep the spread without an internal payroll." },
  { icon: Users, title: "Avoid hiring developers", desc: "Skip recruiting, onboarding, benefits and bench time." },
  { icon: Zap, title: "Scale faster", desc: "Add capacity in days, not quarters. Say yes to bigger pipelines." },
  { icon: DollarSign, title: "Focus on sales", desc: "Spend time closing deals, not babysitting fulfillment." },
  { icon: Gauge, title: "Faster delivery", desc: "Predictable timelines mean shorter sales cycles and faster cash." },
  { icon: Settings2, title: "Operational simplicity", desc: "One vendor, one PM, one invoice — across every project." },
];

export function PartnerBenefits() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Agency partner benefits"
          title="Why a white label website development partner beats hiring"
          sub="The economics of fulfillment — done the modern way."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-5 shadow-soft md:p-6">
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

/* ---------- FAQ ---------- */
const faqs = [
  { q: "What is white label website development?", a: "White label website development is when an outside production team builds websites under your agency's brand. Your client sees your logo, your domain, your communication — we stay invisible in the background." },
  { q: "Do you sign an NDA?", a: "Yes. We sign a mutual NDA before any briefing call. Confidentiality is the foundation of every white label relationship." },
  { q: "Do you communicate with our clients?", a: "Never directly. All communication runs through your team. We stay completely invisible to your clients." },
  { q: "Can we use our own branding?", a: "Absolutely. Every deliverable — staging URLs, documentation, handover files — is presented under your branding." },
  { q: "What platforms do you build on?", a: "WordPress (custom themes, ACF, Gutenberg, Elementor), WooCommerce, Webflow, Shopify, and custom React/Next.js stacks." },
  { q: "How fast is your turnaround?", a: "Most websites ship in 5–7 business days. Larger custom builds get a committed timeline before kickoff." },
  { q: "How do revisions work?", a: "Each project includes two structured revision rounds with annotated feedback. Additional rounds are quoted upfront — no scope creep." },
  { q: "Do you provide ongoing maintenance?", a: "Yes. We offer monthly maintenance plans covering updates, backups, security patches and content edits." },
  { q: "Do you work with agencies remotely across North America?", a: "Yes. We partner with SEO, marketing and digital agencies across the United States, Canada and worldwide. Our team overlaps with both US Eastern and Pacific business hours, so daily standups and async updates fit your workflow." },
  { q: "Can you handle multi-location and local SEO websites?", a: "Yes. We build scalable city-page architectures, service-area templates and multi-location WordPress sites engineered for local SEO — schema, internal linking and Core Web Vitals included." },
];

export function FAQ() {
  return (
    <section className="bg-surface py-16 md:py-32">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="White label website development — answers for agencies" />
        <div className="mt-10 md:mt-12">
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
