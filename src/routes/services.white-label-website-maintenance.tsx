import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight, AlertTriangle, Clock, ShieldAlert, Plug, Zap, Bug, MailWarning, Users as UsersIcon,
  ShieldCheck, Activity, Bell, Workflow, FileBarChart2, Headphones, Search,
  Database, RefreshCw, Lock, ScanSearch, HardDriveDownload, Gauge, AlertOctagon, Pencil,
  FileSearch, Link2Off, FileText,
  EyeOff, Layers as LayersIcon, Repeat, Globe, MessageSquare,
  Megaphone, User, Palette, MapPin, Building2,
  CheckCircle2, Star, ArrowUpRight, CircleDot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { RelatedServices } from "@/components/site/RelatedServices";

export const Route = createFileRoute("/services/white-label-website-maintenance")({
  head: () => ({
    meta: [
      { title: "White Label Website Maintenance for Agencies — White Label Website Development" },
      { name: "description", content: "Reliable white label website maintenance for agencies. Updates, security, backups, monitoring and emergency fixes — delivered under your brand." },
      { property: "og:title", content: "White Label Website Maintenance for Agencies — White Label Website Development" },
      { property: "og:description", content: "Reliable white label website maintenance for agencies. Updates, security, backups, monitoring and emergency fixes — delivered under your brand." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/services/white-label-website-maintenance" },
      { name: "twitter:title", content: "White Label Website Maintenance for Agencies — White Label Website Development" },
      { name: "twitter:description", content: "Reliable white label website maintenance for agencies. Updates, security, backups, monitoring and emergency fixes — delivered under your brand." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/services/white-label-website-maintenance" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Services\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"White Label Website Maintenance\", \"item\": \"https://whitelabelwebsitedevelopment.com/services/white-label-website-maintenance\"}]}, {\"@type\": \"Service\", \"name\": \"White Label Website Maintenance\", \"description\": \"Monthly white label website maintenance, updates, backups, security patches and content edits for agencies.\", \"url\": \"https://whitelabelwebsitedevelopment.com/services/white-label-website-maintenance\", \"provider\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#organization\"}, \"areaServed\": \"Global\", \"serviceType\": \"White Label Website Maintenance\", \"audience\": {\"@type\": \"Audience\", \"audienceType\": \"Marketing and SEO agencies\"}}]}",
      },
    ],
  }),
  
  component: MaintenancePage,
});

/* ---------- helpers ---------- */
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

/* ---------- HERO with dashboard mock ---------- */
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
              White Label Website Maintenance
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-6xl">
              Stress-free <span className="text-gradient-brand">website maintenance</span> for your client portfolio.
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              We monitor, update, secure and fix your clients' websites — quietly, under your brand. So your team can focus on growth, not patches.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#pricing">Get Maintenance Pricing <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <a href="#contact">Book a Discovery Call</a>
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-xs text-muted-foreground sm:flex sm:flex-wrap">
              {["White label delivery", "NDA friendly", "Fast support", "Security monitoring", "WordPress experts"].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-brand" /> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Dashboard mock */}
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  const sites = [
    { name: "beaconclinic.com", status: "Healthy", uptime: "99.99%", color: "text-emerald-600", dot: "bg-emerald-500" },
    { name: "northwindroofing.com", status: "Updated", uptime: "99.97%", color: "text-emerald-600", dot: "bg-emerald-500" },
    { name: "linenandloom.shop", status: "Patched", uptime: "99.95%", color: "text-amber-600", dot: "bg-amber-500" },
    { name: "harborrealty.co", status: "Healthy", uptime: "100%", color: "text-emerald-600", dot: "bg-emerald-500" },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-2xl" aria-hidden />
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500" />
            <span className="text-xs font-semibold text-ink">All systems operational</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
            <span className="h-1.5 w-1.5 rounded-full bg-border" />
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "42", v: "Sites managed" },
            { k: "99.98%", v: "Avg uptime" },
            { k: "1.6m", v: "Avg response" },
          ].map((s) => (
            <div key={s.v} className="rounded-xl border border-border bg-background p-3">
              <div className="text-lg font-semibold text-ink">{s.k}</div>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 rounded-xl border border-border bg-background">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="text-xs font-semibold text-ink">Client websites</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">This week</div>
          </div>
          <ul className="divide-y divide-border">
            {sites.map((s) => (
              <li key={s.name} className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <span className={`h-2 w-2 rounded-full ${s.dot}`} />
                  <span className="text-xs font-medium text-ink">{s.name}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[11px] font-medium ${s.color}`}>{s.status}</span>
                  <span className="text-[11px] tabular-nums text-muted-foreground">{s.uptime}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-3 flex items-center justify-between rounded-xl border border-border bg-brand-soft px-4 py-3">
          <div className="flex items-center gap-2">
            <Bell className="h-4 w-4 text-brand" />
            <span className="text-xs font-medium text-ink">3 plugin updates queued for tonight's window</span>
          </div>
          <ArrowUpRight className="h-4 w-4 text-brand" />
        </div>
      </div>
    </div>
  );
}

/* ---------- PROBLEM ---------- */
const problems = [
  { icon: MailWarning, title: "Endless edit requests", desc: "Clients pinging you weekly for tiny tweaks that drown your team." },
  { icon: Plug, title: "Plugin conflicts", desc: "An update breaks a site at 2am and your client notices first." },
  { icon: AlertTriangle, title: "Unexpected crashes", desc: "Sites going down without warning — and no one watching." },
  { icon: ShieldAlert, title: "Security vulnerabilities", desc: "Outdated cores, weak passwords, exposed admin paths." },
  { icon: Clock, title: "Missed updates", desc: "Months of pending updates piling up across your portfolio." },
  { icon: Zap, title: "Slow websites", desc: "Performance quietly degrading until SEO rankings drop." },
  { icon: Bug, title: "Emergency fixes", desc: "Fire drills that derail your team's planned work for days." },
  { icon: UsersIcon, title: "Internal team drained", desc: "Your senior people stuck patching client sites instead of growing the agency." },
];

function Problem() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="The problem"
          title="Maintenance shouldn't be your agency's bottleneck"
          sub="The hidden tax on every agency managing more than a handful of client websites."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map(({ icon: Icon, title, desc }) => (
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

/* ---------- SOLUTION ---------- */
const solutions = [
  { icon: ShieldCheck, title: "Proactive maintenance", desc: "We catch issues before your client does — patch windows, monitoring, alerts." },
  { icon: RefreshCw, title: "Regular updates", desc: "Cores, plugins and themes updated on schedule with rollback safety." },
  { icon: Activity, title: "24/7 website monitoring", desc: "Uptime, performance and SSL checks running every minute." },
  { icon: Headphones, title: "Fast support", desc: "Tickets acknowledged in minutes, not days. Real humans, real fixes." },
  { icon: Lock, title: "Security-first approach", desc: "Hardened configs, malware scanning, firewall and admin lockdown." },
  { icon: LayersIcon, title: "Scalable systems", desc: "Manage 5 sites or 500 — the workflow stays the same." },
  { icon: Workflow, title: "Agency-friendly workflow", desc: "Plug into your tools — Slack, ClickUp, Asana, email." },
  { icon: FileBarChart2, title: "White label reports", desc: "Branded monthly reports your account managers can send straight to clients." },
];

function Solution() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our solution"
          title="A maintenance operation that runs in the background"
          sub="Eight pillars that keep your client portfolio healthy, secure and fast."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map(({ icon: Icon, title, desc }) => (
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

/* ---------- INCLUDED SERVICES ---------- */
const included = [
  { icon: Globe, title: "WordPress Core Updates", desc: "Major and minor versions tested and patched in scheduled windows." },
  { icon: Plug, title: "Plugin & Theme Updates", desc: "Compatibility tested before rollout — no surprise breakages." },
  { icon: ShieldCheck, title: "Security Monitoring", desc: "Realtime intrusion alerts, file change detection, hardened configs." },
  { icon: ScanSearch, title: "Malware Scanning", desc: "Daily deep scans with automatic quarantine and cleanup." },
  { icon: HardDriveDownload, title: "Website Backups", desc: "Daily off-site backups with one-click restore points." },
  { icon: Activity, title: "Uptime Monitoring", desc: "60-second checks across global locations with instant alerts." },
  { icon: Gauge, title: "Speed Optimization", desc: "Caching, image optimization and Core Web Vitals tuning." },
  { icon: AlertOctagon, title: "Emergency Fixes", desc: "Priority response for outages, hacks and critical bugs." },
  { icon: Pencil, title: "Content Updates", desc: "Copy edits, image swaps, blog uploads — handled fast." },
  { icon: FileSearch, title: "Technical SEO Monitoring", desc: "Schema, indexability, sitemaps and crawl errors watched continuously." },
  { icon: Link2Off, title: "Broken Link Checks", desc: "Weekly audits with redirect recommendations." },
  { icon: FileText, title: "Monthly Maintenance Reports", desc: "Branded PDF reports your team can send to clients." },
];

function IncludedServices() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="What's included"
          title="A complete maintenance stack"
          sub="Every service your agency needs to keep client websites healthy — under one roof."
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
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

/* ---------- WHY US ---------- */
const reasons = [
  { icon: EyeOff, title: "Invisible backend support", desc: "Your clients only ever see your team and your branding." },
  { icon: ShieldCheck, title: "No client poaching, ever", desc: "Contractually guaranteed in every partner agreement." },
  { icon: LayersIcon, title: "True white label workflow", desc: "Branded portals, branded reports, branded ticket replies." },
  { icon: UsersIcon, title: "Dedicated maintenance team", desc: "Same engineers handle your portfolio every month." },
  { icon: Headphones, title: "Fast response time", desc: "Tickets acknowledged within 30 minutes during business hours." },
  { icon: MessageSquare, title: "Reliable communication", desc: "Daily standups available, weekly summaries by default." },
  { icon: LayersIcon, title: "Scalable management", desc: "Add or remove sites in minutes — no contracts to renegotiate." },
  { icon: Search, title: "SEO-aware maintenance", desc: "Updates protect rankings — redirects, schema, performance preserved." },
  { icon: Repeat, title: "Proactive prevention", desc: "We patch the vulnerabilities before they become incidents." },
];

function WhyUs() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies choose us"
          title="Trust built into every workflow"
          sub="The reasons agency owners hand us their entire client portfolio."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
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

/* ---------- PROCESS ---------- */
const steps = [
  { n: "01", title: "Website Access & Audit", desc: "Secure credential handover, full health audit, baseline report." },
  { n: "02", title: "Maintenance Setup", desc: "Backups, monitoring, staging environment and update windows configured." },
  { n: "03", title: "Monitoring & Protection", desc: "Uptime, security and performance monitoring switched on 24/7." },
  { n: "04", title: "Ongoing Maintenance", desc: "Weekly update cycles, monthly cleanups, continuous patching." },
  { n: "05", title: "Monthly Reporting", desc: "Branded PDF report covering every action, metric and recommendation." },
  { n: "06", title: "Fast Support & Emergencies", desc: "Priority queue for incidents — hands-on response within minutes." },
];

function Process() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="How it works"
          title="A maintenance workflow built for scale"
          sub="From first audit to ongoing operations — fully systemized."
        />
        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
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

/* ---------- WHO THIS IS FOR ---------- */
const audiences = [
  { icon: Search, title: "SEO Agencies", desc: "Protect rankings with maintenance that respects your technical SEO setup." },
  { icon: Megaphone, title: "Marketing Agencies", desc: "Keep landing pages and campaign sites fast, secure and live." },
  { icon: User, title: "Freelancers", desc: "Offer enterprise-grade care plans without doing the work yourself." },
  { icon: Palette, title: "Website Designers", desc: "Stop being a help desk. Hand off post-launch care to us." },
  { icon: MapPin, title: "Local SEO Consultants", desc: "Maintain dozens of GMB-linked sites without losing your evenings." },
  { icon: Building2, title: "Multi-site Agencies", desc: "Centralize maintenance for entire client portfolios under one workflow." },
];

function WhoFor() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Who it's for"
          title="Built for agencies running multiple websites"
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

/* ---------- DASHBOARD PREVIEW SECTION ---------- */
function DashboardPreview() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Reporting dashboard"
          title="Operational visibility for every site"
          sub="A single pane of glass for your portfolio — uptime, updates, security, tickets and performance."
        />
        <div className="mt-14 overflow-hidden rounded-2xl border border-border bg-background shadow-elevated">
          {/* top bar */}
          <div className="flex items-center justify-between border-b border-border bg-surface-elevated px-5 py-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
              </div>
              <div className="ml-3 text-xs font-medium text-ink">portal.youragency.com / maintenance</div>
            </div>
            <div className="hidden items-center gap-2 text-xs text-muted-foreground md:flex">
              <CircleDot className="h-3 w-3 text-emerald-500" /> Live
            </div>
          </div>

          <div className="grid gap-px bg-border md:grid-cols-3">
            {/* uptime */}
            <div className="bg-background p-6">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Uptime — 30 days</div>
                <span className="text-xs font-semibold text-emerald-600">99.98%</span>
              </div>
              <div className="mt-4 flex items-end gap-1">
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-sm ${i === 17 ? "bg-amber-400" : "bg-emerald-500/80"}`}
                    style={{ height: `${30 + (i % 5) * 6}px` }}
                  />
                ))}
              </div>
              <div className="mt-3 text-xs text-muted-foreground">1 incident · 3m total downtime</div>
            </div>

            {/* updates */}
            <div className="bg-background p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Updates this month</div>
              <div className="mt-4 space-y-3">
                {[
                  { label: "WordPress core", n: "12" },
                  { label: "Plugins", n: "84" },
                  { label: "Themes", n: "18" },
                  { label: "Security patches", n: "9" },
                ].map((r) => (
                  <div key={r.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">{r.label}</span>
                    <span className="font-semibold tabular-nums text-ink">{r.n}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* tickets */}
            <div className="bg-background p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Recent tickets</div>
              <ul className="mt-4 space-y-3 text-sm">
                {[
                  { t: "Update homepage hero copy", s: "Resolved", c: "text-emerald-600" },
                  { t: "Fix checkout redirect", s: "In progress", c: "text-amber-600" },
                  { t: "Add new blog post layout", s: "Queued", c: "text-muted-foreground" },
                  { t: "SSL renewal — beacon.com", s: "Resolved", c: "text-emerald-600" },
                ].map((t) => (
                  <li key={t.t} className="flex items-center justify-between gap-3">
                    <span className="truncate text-ink">{t.t}</span>
                    <span className={`shrink-0 text-xs font-medium ${t.c}`}>{t.s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* performance */}
            <div className="bg-background p-6 md:col-span-2">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Performance trend</div>
                <span className="text-xs text-emerald-600">+8.2% vs last month</span>
              </div>
              <div className="mt-5">
                <svg viewBox="0 0 400 100" className="h-24 w-full">
                  <defs>
                    <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.42 0.17 268)" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="oklch(0.42 0.17 268)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0,70 C40,60 70,80 110,55 C150,30 180,45 220,35 C260,25 300,40 340,20 L400,15 L400,100 L0,100 Z" fill="url(#g1)" />
                  <path d="M0,70 C40,60 70,80 110,55 C150,30 180,45 220,35 C260,25 300,40 340,20 L400,15" stroke="oklch(0.42 0.17 268)" strokeWidth="2" fill="none" />
                </svg>
              </div>
            </div>

            {/* summary */}
            <div className="bg-background p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Maintenance summary</div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { k: "Backups", v: "30/30" },
                  { k: "Scans", v: "30/30" },
                  { k: "Patches", v: "14" },
                  { k: "Reports", v: "Sent" },
                ].map((s) => (
                  <div key={s.k} className="rounded-lg border border-border p-3">
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.k}</div>
                    <div className="mt-1 text-sm font-semibold text-ink">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PRICING ---------- */
const plans = [
  {
    name: "Starter Maintenance",
    price: "$149",
    blurb: "For freelancers and small portfolios",
    features: [
      "Up to 5 client websites",
      "Weekly core, plugin & theme updates",
      "Daily off-site backups",
      "Uptime monitoring (5 min)",
      "Monthly white label report",
      "Email support — 24h response",
    ],
    cta: "Get started",
    highlight: false,
  },
  {
    name: "Growth Maintenance",
    price: "$349",
    blurb: "For growing agencies with active clients",
    features: [
      "Up to 20 client websites",
      "Update windows + staging tests",
      "Daily backups + 1-click restore",
      "60-second uptime monitoring",
      "Malware scanning & cleanup",
      "Branded reporting portal",
      "Priority support — 2h response",
    ],
    cta: "Most popular",
    highlight: true,
  },
  {
    name: "Agency Unlimited",
    price: "Custom",
    blurb: "For agencies running large portfolios",
    features: [
      "Unlimited client websites",
      "Dedicated maintenance team",
      "24/7 emergency response",
      "Quarterly strategy reviews",
      "Custom SLA & integrations",
      "Slack-channel support",
      "Named PM",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Maintenance plans"
          title="Predictable pricing your agency can resell"
          sub="Each plan is built for a different growth stage. Mark up freely — your margin, your clients."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                p.highlight
                  ? "border-2 border-ink bg-card shadow-elevated lg:-translate-y-2"
                  : "border-border bg-card shadow-soft"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ink px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-foreground">
                  Most popular
                </div>
              )}
              <h3 className="text-base font-semibold text-ink">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight text-ink">{p.price}</span>
                {p.price !== "Custom" && <span className="text-sm text-muted-foreground">/ month</span>}
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                size="lg"
                variant={p.highlight ? "default" : "outline"}
                className="mt-8 w-full rounded-full"
              >
                <a href="#contact">{p.cta}</a>
              </Button>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-xl text-center text-xs text-muted-foreground">
          All plans include white label delivery, NDA, and no client contact unless you authorize it.
        </p>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { quote: "We sleep at night. They patched a zero-day across 32 client sites before any of us had read the news.", name: "Hannah Reid", role: "Founder, Northbeam SEO" },
  { quote: "Maintenance used to eat 20 hours a week of senior time. Now it's zero. Margins went up, stress went down.", name: "Marcus Patel", role: "MD, Field Marketing Group" },
  { quote: "Their emergency response is genuinely impressive. Site went down at 11pm, back up by 11:18.", name: "Sara Bennett", role: "Owner, Bennett Digital" },
];

function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="What agency owners say" />
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
  { q: "Do you work under our branding?", a: "Yes. Reports, ticket replies, status pages — every touchpoint is delivered under your agency's brand." },
  { q: "Do you communicate with our clients directly?", a: "Never, unless you explicitly authorize it for a specific account. Default is zero contact." },
  { q: "How fast is your support response?", a: "Acknowledgement in 30 minutes during business hours on Growth plans, faster on Agency Unlimited. Emergency incidents get immediate paging." },
  { q: "What happens if a client website crashes?", a: "Our monitoring alerts our on-call engineer. We diagnose and restore from backups while keeping you in the loop." },
  { q: "Do you offer 24/7 emergency support?", a: "Yes — included on the Agency Unlimited plan, and available as an add-on to Growth." },
  { q: "How does maintenance reporting work?", a: "Every site receives a branded monthly PDF report covering uptime, updates applied, security events, performance and tickets resolved." },
  { q: "Can you manage multiple client websites?", a: "Absolutely. Most of our partners run portfolios of 20–200 sites with us. The workflow is built for scale." },
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
              <Database className="h-3.5 w-3.5 text-brand" /> Trusted with 4,200+ client sites
            </div>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Stop worrying about client website maintenance.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Hand it off to a partner that runs maintenance like an operations team — not a side hustle.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#pricing">Get Maintenance Pricing <ArrowRight className="h-4 w-4" /></a>
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
function MaintenancePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <IncludedServices />
        <WhyUs />
        <Process />
        <WhoFor />
        <DashboardPreview />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <RelatedServices currentKey="maintenance" />
      </main>
      <Footer />
    </div>
  );
}
