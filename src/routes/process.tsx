import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, Clock, MessagesSquare, Workflow, ListChecks, EyeOff, Activity,
  AlertTriangle, ShieldQuestion, FileWarning, Repeat, FileSearch, GitPullRequestDraft,
  ClipboardList, Layers as LayersIcon, Code2, ShieldCheck, MessageSquare, Truck, Wrench,
  Smartphone, Gauge, Globe2, Search, Bug, BadgeCheck, Lock, FileLock2, UserX,
  Headphones, Megaphone, User, Palette, Briefcase, Rocket,
  CheckCircle2, Star, CircleDot, ArrowUpRight, FolderKanban, GitBranch,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Our White Label Workflow & Process — White Label Website Development" },
      {
        name: "description",
        content:
          "A structured, transparent white label workflow built for agencies. Discovery, design, development, QA, delivery and ongoing support — operationally engineered.",
      },
      { property: "og:title", content: "Our White Label Workflow & Process" },
      {
        property: "og:description",
        content:
          "Reliable white label process built for agencies. Mature, scalable, NDA-friendly delivery system.",
      },
    ],
  }),
  component: ProcessPage,
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
              <Workflow className="h-3.5 w-3.5 text-brand" />
              Process &amp; Workflow
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              A structured <span className="text-gradient-brand">white label workflow</span> built for agencies.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Every project runs on the same proven seven-step pipeline. Transparent, scalable, agency-safe — engineered to make your team look great in front of every client.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#contact">Start a Project <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <a href="#contact">Book a Discovery Call</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-muted-foreground sm:flex sm:flex-wrap">
              {["Dedicated PM", "White label delivery", "Transparent workflow", "Fast turnaround"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> {t}
                </span>
              ))}
            </div>
          </div>
          <WorkflowMock />
        </div>
      </div>
    </section>
  );
}

function WorkflowMock() {
  const stages = [
    { label: "Discovery", state: "Done", c: "text-emerald-600", dot: "bg-emerald-500" },
    { label: "Planning", state: "Done", c: "text-emerald-600", dot: "bg-emerald-500" },
    { label: "Design & Dev", state: "In progress", c: "text-brand", dot: "bg-brand" },
    { label: "QA", state: "Queued", c: "text-muted-foreground", dot: "bg-border" },
    { label: "Revisions", state: "Queued", c: "text-muted-foreground", dot: "bg-border" },
    { label: "Delivery", state: "Queued", c: "text-muted-foreground", dot: "bg-border" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-brand-foreground">
              <Workflow className="h-3.5 w-3.5" />
            </div>
            <div className="text-xs font-semibold text-ink">Project · Beacon Clinic Redesign</div>
          </div>
          <CircleDot className="h-3.5 w-3.5 text-emerald-500" />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Day 4 / 7", v: "Sprint" },
            { k: "62%", v: "Complete" },
            { k: "On track", v: "Status" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-border bg-background p-3">
              <div className="text-sm font-semibold text-ink">{s.k}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <ol className="mt-5 space-y-2.5">
          {stages.map((s, i) => (
            <li key={s.label} className="flex items-center gap-3 rounded-xl border border-border bg-background px-3 py-2.5">
              <span className={`flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold ${s.state === "Done" ? "bg-emerald-500 text-white" : s.state === "In progress" ? "bg-brand text-brand-foreground" : "bg-muted text-muted-foreground"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-xs font-medium text-ink">{s.label}</span>
              <span className={`text-[11px] font-medium ${s.c}`}>{s.state}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

/* ---------- WHY PROCESS MATTERS ---------- */
const painPoints = [
  { icon: Clock, title: "Missed deadlines", desc: "Launch dates slip and your retainers turn into fire drills." },
  { icon: MessagesSquare, title: "Inconsistent communication", desc: "Slack ghosting, status black holes, no one accountable." },
  { icon: AlertTriangle, title: "Disorganized freelancers", desc: "Different process every project, different quality every time." },
  { icon: Repeat, title: "Endless revisions", desc: "No structured rounds, no scope, no end in sight." },
  { icon: ShieldQuestion, title: "Unclear project status", desc: "You can't quote a date because no one really knows." },
  { icon: FileWarning, title: "Poor delivery systems", desc: "Messy handovers, missing assets, broken documentation." },
  { icon: GitPullRequestDraft, title: "Lack of accountability", desc: "When things break, nobody owns the fix." },
];

function WhyProcessMatters() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why process matters"
          title="Agencies don't lose clients to bad design. They lose them to bad operations."
          sub="The hidden cost of working without a structured fulfillment system."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {painPoints.map(({ icon: Icon, title, desc }) => (
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

/* ---------- FULL WORKFLOW (vertical timeline) ---------- */
const fullSteps = [
  {
    n: "01", icon: ClipboardList, title: "Discovery & Requirement Collection", days: "Day 1",
    desc: "We collect the brief, goals, references and brand assets. Scope is aligned in writing before anything starts.",
    bullets: ["Project requirements & goals", "Brand guidelines & assets", "Reference inspiration", "Written scope alignment"],
  },
  {
    n: "02", icon: LayersIcon, title: "Planning & Internal Setup", days: "Day 1–2",
    desc: "PM assigned, sprint plan locked, sitemap and wireframes drafted, technical stack confirmed.",
    bullets: ["Sitemap & wireframes", "UI/UX direction", "Technical preparation", "Locked timeline"],
  },
  {
    n: "03", icon: Code2, title: "Design & Development", days: "Day 2–6",
    desc: "Responsive design implemented, SEO-ready code shipped, CMS configured, performance tuned daily.",
    bullets: ["Pixel-perfect responsive build", "SEO-friendly semantic code", "Clean CMS setup", "Performance optimization"],
  },
  {
    n: "04", icon: BadgeCheck, title: "Internal QA & Testing", days: "Day 6",
    desc: "We test before you do. Cross-browser, mobile, performance, accessibility and SEO checks pass before review.",
    bullets: ["Mobile responsiveness", "Speed & Core Web Vitals", "Cross-browser checks", "SEO & accessibility audit"],
  },
  {
    n: "05", icon: MessageSquare, title: "Review & Revisions", days: "Day 7",
    desc: "Two structured revision rounds with annotated feedback. Clear scope, fast turnaround, no surprises.",
    bullets: ["Structured revision rounds", "Annotated feedback workflow", "Approval system", "Fast turnaround"],
  },
  {
    n: "06", icon: Truck, title: "White Label Delivery", days: "Day 8",
    desc: "Final files, staging or live deployment, full documentation — all under your branding, ready to ship.",
    bullets: ["Final deliverables", "Staging & live deployment", "White label presentation", "Handover documentation"],
  },
  {
    n: "07", icon: Wrench, title: "Ongoing Maintenance & Support", days: "Continuous",
    desc: "Hand straight into our maintenance team for monitoring, updates, security and long-term care.",
    bullets: ["Monitoring & uptime", "Updates & backups", "Security patches", "Long-term support"],
  },
];

function FullWorkflow() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our complete workflow"
          title="Seven steps. Engineered, repeatable, transparent."
          sub="The same operational pipeline runs every project — so quoting, planning and reselling becomes predictable."
        />
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand/40 via-border to-transparent md:left-7" aria-hidden />
          <ol className="space-y-6">
            {fullSteps.map(({ n, icon: Icon, title, days, desc, bullets }) => (
              <li key={n} className="relative pl-14 md:pl-20">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background shadow-soft md:h-14 md:w-14">
                  <Icon className="h-4.5 w-4.5 text-brand md:h-5 md:w-5" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-7">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-[0.18em] text-brand">STEP {n}</span>
                      <h3 className="text-lg font-semibold text-ink">{title}</h3>
                    </div>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium text-muted-foreground">
                      {days}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2 text-sm text-ink">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- PROJECT MANAGEMENT (Kanban mock) ---------- */
function PMSystem() {
  const cols = [
    {
      name: "To do",
      count: 4,
      cards: [
        { t: "Pricing page wireframe", tag: "Design", c: "bg-brand-soft text-brand" },
        { t: "GA4 event tracking", tag: "SEO", c: "bg-emerald-100 text-emerald-700" },
      ],
    },
    {
      name: "In progress",
      count: 3,
      cards: [
        { t: "Homepage hero build", tag: "Dev", c: "bg-amber-100 text-amber-700" },
        { t: "Schema markup setup", tag: "SEO", c: "bg-emerald-100 text-emerald-700" },
        { t: "WooCommerce integration", tag: "Dev", c: "bg-amber-100 text-amber-700" },
      ],
    },
    {
      name: "Review",
      count: 2,
      cards: [
        { t: "Mobile nav UX", tag: "QA", c: "bg-violet-100 text-violet-700" },
        { t: "Page speed pass 1", tag: "QA", c: "bg-violet-100 text-violet-700" },
      ],
    },
    {
      name: "Delivered",
      count: 6,
      cards: [
        { t: "Brand color tokens", tag: "Design", c: "bg-brand-soft text-brand" },
      ],
    },
  ];
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Project management"
          title="Visibility on every milestone, every day"
          sub="Each partner gets a branded board with milestones, revisions and tickets — fully transparent."
        />
        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
          <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-ink text-brand-foreground">
                <FolderKanban className="h-3.5 w-3.5" />
              </div>
              <div className="text-xs font-semibold text-ink">Sprint board · Bennett Digital × Beacon Clinic</div>
            </div>
            <div className="hidden items-center gap-2 text-xs text-muted-foreground md:flex">
              <CircleDot className="h-3 w-3 text-emerald-500" /> 3 days remaining
            </div>
          </div>
          <div className="grid gap-px bg-border md:grid-cols-4">
            {cols.map((col) => (
              <div key={col.name} className="bg-background p-4">
                <div className="flex items-center justify-between px-1 pb-3">
                  <span className="text-xs font-semibold text-ink">{col.name}</span>
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    {col.count}
                  </span>
                </div>
                <div className="space-y-2">
                  {col.cards.map((c) => (
                    <div key={c.t} className="rounded-lg border border-border bg-surface p-3 shadow-soft">
                      <div className="text-xs font-medium text-ink">{c.t}</div>
                      <div className="mt-2 flex items-center justify-between">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${c.c}`}>{c.tag}</span>
                        <GitBranch className="h-3 w-3 text-muted-foreground" />
                      </div>
                    </div>
                  ))}
                  {col.cards.length === 0 && (
                    <div className="rounded-lg border border-dashed border-border p-3 text-center text-[11px] text-muted-foreground">
                      No items
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMMUNICATION ---------- */
const commPillars = [
  { icon: Headphones, title: "Dedicated project manager", desc: "One named human owns every project end-to-end." },
  { icon: Activity, title: "Hour-level response times", desc: "Acknowledged in <2h during business hours, every time." },
  { icon: ListChecks, title: "Organized daily updates", desc: "Standup-style notes posted to your tool of choice." },
  { icon: GitBranch, title: "Structured revision workflow", desc: "Annotated, versioned, scoped — never freeform." },
  { icon: Workflow, title: "Plug into your stack", desc: "Slack, ClickUp, Asana, Notion, email — wherever you already work." },
  { icon: BadgeCheck, title: "Professional standards", desc: "No weekend pings, no DMs to your team's phones, no chaos." },
];

function Communication() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Communication system"
          title="Calm, structured, agency-friendly communication"
          sub="The way grown-up partners talk to each other — predictable, professional, low-noise."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {commPillars.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface-elevated text-brand">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- QA ---------- */
const qaChecks = [
  { icon: Smartphone, title: "Mobile responsiveness", desc: "Tested across iOS, Android and tablet breakpoints." },
  { icon: Gauge, title: "Speed optimization", desc: "Core Web Vitals, asset compression, caching layers." },
  { icon: Globe2, title: "Cross-browser compatibility", desc: "Chrome, Safari, Firefox, Edge — desktop and mobile." },
  { icon: Search, title: "Technical SEO checks", desc: "Schema, sitemap, indexability, semantic HTML." },
  { icon: Bug, title: "Functionality testing", desc: "Forms, integrations, payments, third-party scripts." },
  { icon: Activity, title: "Performance verification", desc: "Lighthouse, GTmetrix and field data benchmarks." },
];

function QA() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Quality assurance"
          title="Every site passes the same QA gate before you see it"
          sub="A six-point internal QA process so your team never has to play QA on our work."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {qaChecks.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-background p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <Icon className="h-5 w-5" />
                </div>
                <CheckCircle2 className="h-4 w-4 text-emerald-600" />
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

/* ---------- WHITE LABEL DELIVERY ---------- */
const wlPoints = [
  { icon: EyeOff, label: "Invisible backend execution" },
  { icon: FileLock2, label: "NDA-friendly workflow" },
  { icon: UserX, label: "No client poaching, contractually" },
  { icon: Lock, label: "Agency-safe access systems" },
  { icon: BadgeCheck, label: "Branded white label presentation" },
  { icon: ShieldCheck, label: "Brand & reputation protection" },
];

function WhiteLabelDelivery() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-10 text-brand-foreground md:p-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand/20 blur-3xl" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">
                White label delivery system
              </div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Engineered confidentiality at every step.
              </h2>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-brand-foreground/75">
                Our delivery system is built so your client never sees us, hears us, or knows we exist. Confidentiality isn't a checkbox — it's the architecture.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full bg-background px-6 text-ink hover:bg-background/90">
                  <a href="#contact">Request the NDA <ArrowRight className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {wlPoints.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon className="h-4.5 w-4.5 text-brand-foreground" />
                  </div>
                  <span className="pt-1.5 text-sm font-medium leading-relaxed text-brand-foreground/95">{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TIMELINES & TURNAROUND ---------- */
const slas = [
  { label: "Homepage build", time: "3–5 days", note: "Single-page premium build" },
  { label: "Standard website", time: "5–7 days", note: "Up to 8 pages, CMS configured" },
  { label: "WooCommerce store", time: "10–14 days", note: "Catalog, checkout, payments" },
  { label: "Revision turnaround", time: "24–48h", note: "Per structured round" },
  { label: "Maintenance ticket", time: "<2h ack", note: "Resolution same business day" },
  { label: "Emergency support", time: "<15 min", note: "On Agency Unlimited plan" },
];

function Timelines() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Timelines & turnaround"
          title="SLAs you can quote your clients"
          sub="The numbers we run our operations against — published, not promised."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {slas.map((s) => (
            <div key={s.label} className="flex flex-col bg-background p-7">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
              <div className="mt-3 text-3xl font-semibold tracking-tight text-ink">{s.time}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHO IT'S FOR ---------- */
const audiences = [
  { icon: Search, title: "SEO Agencies", desc: "A workflow that respects schema, redirects and rankings." },
  { icon: Megaphone, title: "Marketing Agencies", desc: "Predictable delivery aligned with campaign calendars." },
  { icon: User, title: "Freelancers", desc: "An ops system you can plug into and resell." },
  { icon: Palette, title: "Designers", desc: "A clean handoff workflow from Figma to live site." },
  { icon: Briefcase, title: "Consultants", desc: "Operational backbone behind your strategic recommendations." },
  { icon: Rocket, title: "Scaling agencies", desc: "Capacity that flexes from 1 to 30 parallel projects." },
];

function WhoFor() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="Who this workflow is built for" title="Designed around how agencies actually operate" />
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

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { quote: "The process is the product. We always know where every project stands — that's worth more than the deliverables.", name: "Hannah Reid", role: "Founder, Northbeam SEO" },
  { quote: "Their workflow made our agency look more organized. Our clients started noticing.", name: "Marcus Patel", role: "MD, Field Marketing Group" },
  { quote: "It's the only vendor relationship we have that genuinely reduces stress instead of adding it.", name: "Sara Bennett", role: "Owner, Bennett Digital" },
];

function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="Agency owners on our workflow" />
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
  { q: "How do revisions work?", a: "Each project includes two structured revision rounds with annotated feedback in your project board. Additional rounds are quoted upfront — no scope creep, no surprise invoices." },
  { q: "How does communication work day to day?", a: "You get a dedicated PM and a private channel in your tool of choice — Slack, ClickUp, Asana, Notion or email. Standup-style updates posted daily on active projects." },
  { q: "How long do projects typically take?", a: "Single-page builds in 3–5 days, standard 5–8 page websites in 5–7 days, WooCommerce stores in 10–14 days. Larger custom builds get a committed timeline before kickoff." },
  { q: "Do you provide regular project updates?", a: "Yes. Daily updates on active sprints, weekly summaries for ongoing engagements, and monthly white label reports for maintenance accounts." },
  { q: "How does emergency support work?", a: "Critical incidents page our on-call engineer directly. Acknowledgement in 15 minutes or less on Agency Unlimited, with hands-on response immediately after." },
  { q: "Can we run multiple projects in parallel?", a: "Yes. Most partners run 5–20 active projects with us simultaneously. Capacity flexes — there's no upper bound." },
  { q: "How does white label delivery actually work?", a: "Every staging URL, document, ticket reply and report is presented under your branding. Our team is contractually invisible to your end clients." },
];

function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Process questions, answered" />
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
              <FileSearch className="h-3.5 w-3.5 text-brand" /> Process documentation available on request
            </div>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Scale your agency with a proven delivery system.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Start a project or book a discovery call. We'll walk you through the full workflow and tailor it to your agency's stack.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#contact">Start a Project <ArrowRight className="h-4 w-4" /></a>
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
function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhyProcessMatters />
        <FullWorkflow />
        <PMSystem />
        <Communication />
        <QA />
        <WhiteLabelDelivery />
        <Timelines />
        <WhoFor />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
