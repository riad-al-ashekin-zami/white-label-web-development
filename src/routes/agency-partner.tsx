import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Handshake, TrendingUp, UserMinus, Workflow, Layers as LayersIcon, Search,
  Wrench, Gauge, ShieldCheck, MessageSquareOff, Users as UsersIcon, Coins,
  AlertTriangle, Clock, Inbox, UserX, EyeOff, FileLock2, Lock, MessagesSquare,
  Globe, MonitorSmartphone, ShoppingCart, Rocket, RefreshCw, FileSearch, AlertOctagon,
  Megaphone, User, Brush, Briefcase, Sparkles,
  CheckCircle2, XCircle, Star, FolderKanban, FileBarChart2, Image as ImageIcon, GitBranch,
  CircleDot, ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/agency-partner")({
  head: () => ({
    meta: [
      { title: "Agency Partner Program \u2014 White Label Website Development White Label Partnership" },
      { name: "description", content: "Become a white label partner. Outsource website development and maintenance under your brand with NDA, dedicated PM and zero client poaching." },
      { property: "og:title", content: "Agency Partner Program \u2014 White Label Website Development White Label Partnership" },
      { property: "og:description", content: "Become a white label partner. Outsource website development and maintenance under your brand with NDA, dedicated PM and zero client poaching." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/agency-partner" },
      { name: "twitter:title", content: "Agency Partner Program \u2014 White Label Website Development White Label Partnership" },
      { name: "twitter:description", content: "Become a white label partner. Outsource website development and maintenance under your brand with NDA, dedicated PM and zero client poaching." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/agency-partner" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Agency Partner\", \"item\": \"https://whitelabelwebsitedevelopment.com/agency-partner\"}]}, {\"@type\": \"WebPage\", \"name\": \"Agency Partner Program \\u2014 White Label Website Development White Label Partnership\", \"description\": \"Become a white label partner. Outsource website development and maintenance under your brand with NDA, dedicated PM and zero client poaching.\", \"url\": \"https://whitelabelwebsitedevelopment.com/agency-partner\", \"isPartOf\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#website\"}}]}",
      },
    ],
  }),
  
  component: AgencyPartnerPage,
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
              <Handshake className="h-3.5 w-3.5 text-brand" />
              Agency Partner Program
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Your trusted <span className="text-gradient-brand">white label</span> development partner.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Scale your agency without building an internal team. We deliver development, maintenance and technical execution under your brand — while you keep the client relationship.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#contact">Become an Agency Partner <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <a href="#contact">Book a Partnership Call</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-muted-foreground sm:flex sm:flex-wrap">
              {["NDA Friendly", "White Label Delivery", "Dedicated Support", "No Client Poaching"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> {t}
                </span>
              ))}
            </div>
          </div>
          <PartnershipMock />
        </div>

        <div className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-4">
          {[
            { k: "120+", v: "Active agency partners" },
            { k: "4,200+", v: "Sites under management" },
            { k: "9 yrs", v: "Avg. partnership length" },
            { k: "0", v: "Confidentiality breaches" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-6 md:p-8">
              <div className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{s.k}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnershipMock() {
  const projects = [
    { name: "Beacon Clinic — Redesign", state: "In dev", color: "text-brand", dot: "bg-brand" },
    { name: "Linen & Loom — WooCommerce", state: "QA", color: "text-amber-600", dot: "bg-amber-500" },
    { name: "Northwind — Landing pages", state: "Delivered", color: "text-emerald-600", dot: "bg-emerald-500" },
    { name: "Harbor Realty — Maintenance", state: "Live", color: "text-emerald-600", dot: "bg-emerald-500" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-brand-foreground">
              <Handshake className="h-3.5 w-3.5" />
            </div>
            <div className="text-xs font-semibold text-ink">Partner workspace · Bennett Digital</div>
          </div>
          <CircleDot className="h-3.5 w-3.5 text-emerald-500" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "12", v: "Active projects" },
            { k: "98%", v: "On-time rate" },
            { k: "2.1h", v: "Avg reply" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-border bg-background p-3">
              <div className="text-lg font-semibold text-ink">{s.k}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border bg-background">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="text-xs font-semibold text-ink">Pipeline</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">This sprint</div>
          </div>
          <ul className="divide-y divide-border">
            {projects.map((p) => (
              <li key={p.name} className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${p.dot}`} />
                  <span className="text-xs font-medium text-ink">{p.name}</span>
                </div>
                <span className={`text-[11px] font-medium ${p.color}`}>{p.state}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-brand-soft px-4 py-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-brand" />
            <span className="text-xs font-medium text-ink">Capacity unlocked: +3 builds for next month</span>
          </div>
          <ArrowUpRight className="h-4 w-4 text-brand" />
        </div>
      </div>
    </div>
  );
}

/* ---------- WHY PARTNER ---------- */
const partnerReasons = [
  { icon: TrendingUp, title: "Scale faster", desc: "Add fulfillment capacity in days, not quarters. Say yes to bigger pipelines." },
  { icon: UserMinus, title: "No hiring headaches", desc: "Skip recruiting, onboarding, benefits, severance — and the bench time in between." },
  { icon: ShieldCheck, title: "Reliable delivery", desc: "Committed timelines, structured QA, accountable PM on every project." },
  { icon: Workflow, title: "Operational efficiency", desc: "One vendor, one PM, one invoice — across every project and every site." },
  { icon: LayersIcon, title: "Predictable workflow", desc: "Same pipeline every time, so your AMs can quote and plan with confidence." },
  { icon: Coins, title: "Scalable fulfillment", desc: "Run 1 build or 30 in parallel. Capacity flexes with your sales." },
  { icon: Search, title: "SEO-aware development", desc: "Schema, semantic HTML, Core Web Vitals — your SEO team will thank us." },
  { icon: Wrench, title: "Maintenance support", desc: "We don't disappear at handover. Ongoing care plans included." },
];

function WhyPartner() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies partner with us"
          title="The economics of fulfillment, modernized"
          sub="Eight reasons agencies choose a long-term partnership over hiring."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {partnerReasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CHALLENGES ---------- */
const challenges = [
  { icon: MessageSquareOff, title: "Unreliable freelancers", desc: "Talent vanishes mid-sprint, leaving your client hanging." },
  { icon: AlertTriangle, title: "Communication gaps", desc: "Slack ghosting, vague status, no accountability." },
  { icon: Coins, title: "Expensive internal hires", desc: "$150k+ per senior dev, plus benefits, plus bench time." },
  { icon: AlertOctagon, title: "Inconsistent quality", desc: "Every project looks different. Code is messy. Handovers hurt." },
  { icon: Clock, title: "Delayed projects", desc: "Launch dates slip, retainers feel like fire drills." },
  { icon: Inbox, title: "Overloaded internal staff", desc: "Senior people stuck building instead of selling." },
  { icon: UserX, title: "Lost clients", desc: "Slow delivery erodes trust. Clients churn quietly." },
  { icon: Wrench, title: "Maintenance overwhelm", desc: "Plugins, patches, edits drowning your team every week." },
];

function Challenges() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="The agency reality"
          title="The fulfillment problems holding agencies back"
          sub="Sound familiar? You're not alone — and you don't have to solve it by hiring."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {challenges.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-background p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-sm font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHITE LABEL SYSTEM (workflow) ---------- */
const systemSteps = [
  { n: "01", title: "Agency Sends Requirements", desc: "Brief intake via your tool. Scope, assets and timeline confirmed in writing." },
  { n: "02", title: "Internal Planning & Setup", desc: "PM assigned, project board created, sprint plan locked." },
  { n: "03", title: "Development & QA", desc: "Daily updates, private staging, structured QA before any review." },
  { n: "04", title: "White Label Delivery", desc: "All deliverables presented under your brand. We stay invisible." },
  { n: "05", title: "Revisions & Support", desc: "Two structured revision rounds with annotated workflow." },
  { n: "06", title: "Ongoing Maintenance", desc: "Hand straight into our maintenance team for long-term care." },
];

function System() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our white label system"
          title="A partnership built on operational maturity"
          sub="The same six-step workflow runs every project, every week, every partner."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {systemSteps.map((s) => (
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

/* ---------- WHITE LABEL PROMISE ---------- */
const promises = [
  { icon: UserX, label: "No client poaching, ever" },
  { icon: FileLock2, label: "Mutual NDA before kickoff" },
  { icon: Lock, label: "Confidential systems & access" },
  { icon: EyeOff, label: "Invisible backend execution" },
  { icon: Handshake, label: "Agency-first mindset" },
  { icon: MessagesSquare, label: "Communication professionalism" },
];

function Promise() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-10 text-brand-foreground md:p-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand/20 blur-3xl" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">
                The white label promise
              </div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Your client relationship stays yours. Always.
              </h2>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-brand-foreground/75">
                Confidentiality isn't a marketing line for us — it's contractually enforced and operationally engineered into every workflow.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full bg-background px-6 text-ink hover:bg-background/90">
                  <a href="#contact">Request our partner NDA <ArrowRight className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {promises.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-4.5 w-4.5 text-brand-foreground" />
                  </div>
                  <span className="pt-1.5 text-sm font-medium leading-relaxed text-brand-foreground/95">
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHAT YOU CAN OUTSOURCE ---------- */
const outsource = [
  { icon: Globe, title: "WordPress Development", desc: "Custom themes, ACF, Gutenberg — clean and editable." },
  { icon: MonitorSmartphone, title: "Website Design", desc: "Conversion-focused designs delivered in Figma." },
  { icon: ShoppingCart, title: "WooCommerce", desc: "Storefronts wired with payments and shipping." },
  { icon: Rocket, title: "Landing Pages", desc: "High-converting pages for ads, launches, lead gen." },
  { icon: Wrench, title: "Website Maintenance", desc: "Updates, backups, monitoring under your brand." },
  { icon: Gauge, title: "Speed Optimization", desc: "Tuned Core Web Vitals and Lighthouse scores." },
  { icon: FileSearch, title: "Technical SEO Fixes", desc: "Schema, redirects, indexability — done right." },
  { icon: RefreshCw, title: "Website Redesign", desc: "Modernize legacy sites without losing SEO equity." },
  { icon: AlertOctagon, title: "Emergency Fixes", desc: "Priority response when client sites go sideways." },
];

function Outsource() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="What you can outsource"
          title="Everything technical. Nothing else."
          sub="Hand off execution. Keep strategy, sales and the client relationship."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {outsource.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col bg-background p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHO WE WORK WITH ---------- */
const audiences = [
  { icon: Search, title: "SEO Agencies", desc: "Get sites built with technical SEO baked in — schema, speed, semantic markup." },
  { icon: Megaphone, title: "Marketing Agencies", desc: "Ship campaign sites and landing pages on schedule, every sprint." },
  { icon: Brush, title: "Creative Agencies", desc: "Send us your designs — we build them clean and editable, full stop." },
  { icon: User, title: "Freelancers", desc: "Take on bigger projects without hiring or losing margin." },
  { icon: Briefcase, title: "Consultants", desc: "Deliver complete digital execution to your clients without overhead." },
  { icon: Sparkles, title: "Branding Agencies", desc: "Translate brand systems into perfectly engineered websites." },
];

function WhoWeWorkWith() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Who we work with"
          title="Built for agencies — and only agencies"
          sub="We never sell direct to end clients. Our entire business is partnership-led."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6 transition-all hover:border-ink/20 hover:shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
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

/* ---------- AGENCY DASHBOARD / COLLABORATION ---------- */
function CollaborationDashboard() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Partner workspace"
          title="One operational hub for every project"
          sub="Track work, request revisions, share assets and review reports — all under your branding."
        />
        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
          <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
              </div>
              <div className="ml-3 text-xs font-medium text-ink">portal.youragency.com / partner</div>
            </div>
            <div className="hidden items-center gap-2 text-xs text-muted-foreground md:flex">
              <CircleDot className="h-3 w-3 text-emerald-500" /> Live workspace
            </div>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            {/* tracking */}
            <div className="bg-background p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <FolderKanban className="h-3.5 w-3.5 text-brand" /> Project tracking
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { t: "Beacon Clinic — Phase 2", p: 72 },
                  { t: "Linen & Loom — Storefront", p: 45 },
                  { t: "Harbor Realty — Listings", p: 90 },
                ].map((r) => (
                  <li key={r.t}>
                    <div className="flex items-center justify-between">
                      <span className="text-ink">{r.t}</span>
                      <span className="text-xs text-muted-foreground">{r.p}%</span>
                    </div>
                    <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-muted">
                      <div className="h-full rounded-full bg-brand" style={{ width: `${r.p}%` }} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* revisions */}
            <div className="bg-background p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <GitBranch className="h-3.5 w-3.5 text-brand" /> Revisions
              </div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { t: "Hero copy v3", s: "Pending review", c: "text-amber-600" },
                  { t: "Pricing layout", s: "Approved", c: "text-emerald-600" },
                  { t: "Footer redesign", s: "In progress", c: "text-brand" },
                  { t: "Mobile nav", s: "Approved", c: "text-emerald-600" },
                ].map((r) => (
                  <li key={r.t} className="flex items-center justify-between">
                    <span className="truncate text-ink">{r.t}</span>
                    <span className={`shrink-0 text-xs font-medium ${r.c}`}>{r.s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* communication */}
            <div className="bg-background p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <MessagesSquare className="h-3.5 w-3.5 text-brand" /> Communication
              </div>
              <ul className="mt-4 space-y-3">
                {[
                  { who: "Sara · PM", msg: "Staging URL ready for review.", t: "2m ago" },
                  { who: "You", msg: "Could we tighten the H1 spacing?", t: "1h ago" },
                  { who: "Dev team", msg: "Schema markup deployed.", t: "Yesterday" },
                ].map((m) => (
                  <li key={m.msg} className="rounded-lg border border-border bg-surface p-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span className="font-semibold text-ink">{m.who}</span>
                      <span>{m.t}</span>
                    </div>
                    <p className="mt-1 text-sm text-ink">{m.msg}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* delivery + reports */}
            <div className="bg-background p-6 md:col-span-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <FileBarChart2 className="h-3.5 w-3.5 text-brand" /> Maintenance reports
                </div>
                <span className="text-xs text-emerald-600">All up to date</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { k: "Backups", v: "30/30" },
                  { k: "Patches", v: "14" },
                  { k: "Uptime", v: "99.98%" },
                  { k: "Tickets", v: "8 closed" },
                ].map((s) => (
                  <div key={s.k} className="rounded-lg border border-border p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
                    <div className="mt-1 text-sm font-semibold text-ink">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* assets */}
            <div className="bg-background p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <ImageIcon className="h-3.5 w-3.5 text-brand" /> Client assets
              </div>
              <ul className="mt-4 space-y-2 text-sm">
                {["Brand-guidelines.pdf", "Logo-pack.zip", "Hero-imagery/", "Copy-deck-v4.docx"].map((f) => (
                  <li key={f} className="flex items-center justify-between rounded-lg border border-border bg-surface px-3 py-2">
                    <span className="truncate text-ink">{f}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY WE'RE DIFFERENT ---------- */
const us = [
  "Built specifically for agencies — not direct clients",
  "SEO-aware development on every build",
  "Fast, committed turnarounds with dated milestones",
  "Engineered white label systems, not promises",
  "Structured communication with named PMs",
  "Long-term operational support, not one-off gigs",
];
const them = [
  "Generic dev shops also serving direct clients",
  "SEO an afterthought, slow & plugin-heavy code",
  "Vague timelines and shifting deadlines",
  "Client-facing emails, branded portals exposed",
  "Loose Slack DMs, no accountable PM",
  "Project-by-project mindset, ghosting after handover",
];

function Different() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why we're different"
          title="Built for agencies, by people who ran them"
          sub="A side-by-side look at how we operate vs the typical alternative."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-ink bg-card p-8 shadow-elevated">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-ink">White Label Website Development partnership</h3>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">Recommended</span>
            </div>
            <ul className="mt-6 space-y-3">
              {us.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-8">
            <h3 className="text-lg font-semibold text-muted-foreground">Generic dev shops</h3>
            <ul className="mt-6 space-y-3">
              {them.map((t) => (
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

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { quote: "We tripled our retainer revenue without adding a single FTE. They're an extension of our agency at this point.", name: "Hannah Reid", role: "Founder, Northbeam SEO" },
  { quote: "What stands out is the operational maturity. Status, scope, billing — all clean, every month.", name: "Marcus Patel", role: "MD, Field Marketing Group" },
  { quote: "Five years partnered. Zero confidentiality issues. Zero missed launches. That's the whole pitch.", name: "Sara Bennett", role: "Owner, Bennett Digital" },
];

function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="What partner agencies say" />
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
  { q: "Will you ever contact our clients?", a: "No. Default policy is zero contact. We only interact with end clients if you explicitly request it for a specific account." },
  { q: "Do you sign NDA agreements?", a: "Yes. A mutual NDA is signed before any briefing call. We can also accept your agency's NDA if preferred." },
  { q: "Can we use our own branding everywhere?", a: "Yes. Every staging URL, document, ticket reply and report is presented under your brand." },
  { q: "How does communication work day to day?", a: "You get a dedicated PM. We plug into your tools — Slack, ClickUp, Asana, Notion, email — whatever your workflow is." },
  { q: "What platforms do you support?", a: "WordPress (custom, Elementor, Gutenberg), WooCommerce, Webflow, Shopify, and custom React / Next.js stacks." },
  { q: "Do you provide maintenance after launch?", a: "Yes — our maintenance team covers updates, monitoring, security and emergency fixes under structured monthly plans." },
  { q: "Can you scale with a growing agency?", a: "Absolutely. Most partners start with 1–2 projects and grow into 20+ active engagements with us. Capacity flexes." },
];

function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Partnership questions, answered" />
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
              <UsersIcon className="h-3.5 w-3.5 text-brand" /> Now onboarding new partners
            </div>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Build more without hiring more.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Start a confidential partnership conversation. We'll map your fulfillment needs and propose a workflow that fits your agency.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#contact">Become an Agency Partner <ArrowRight className="h-4 w-4" /></a>
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
function AgencyPartnerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyPartner />
        <Challenges />
        <System />
        <Promise />
        <Outsource />
        <WhoWeWorkWith />
        <CollaborationDashboard />
        <Different />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
