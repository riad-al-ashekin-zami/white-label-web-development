import {
  ArrowRight, Search, Megaphone, User, Palette, Briefcase, Building2,
  Code2, MonitorSmartphone, ShoppingCart, Rocket, Wrench, Gauge,
  Timer, ShieldCheck, Users, EyeOff, Smartphone, FileCode2, RefreshCw, MessageSquare,
  CheckCircle2, Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-dashboard.jpg";

/* ---------- HERO ---------- */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 md:pt-36">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 bg-grid-soft" aria-hidden />
      <div className="container-page relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-soft md:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Trusted by 120+ agencies worldwide
            </div>
            <h1 className="mt-5 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[64px] lg:leading-[1.05]">
              <span className="text-gradient-brand">White Label Website Development</span> for agencies.
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              Scale your agency without hiring developers. SEO-first, conversion-ready websites built under your brand — quietly, reliably, on time.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:mt-8">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6">
                <a href="#portfolio">See our work</a>
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2 text-[11px] text-muted-foreground sm:flex sm:flex-wrap sm:gap-x-6 sm:gap-y-2 sm:text-xs md:mt-8">
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand" /> NDA friendly</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand" /> No poaching</span>
              <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 shrink-0 text-brand" /> Dedicated PM</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/15 via-transparent to-transparent blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-elevated p-2 shadow-elevated">
              <img
                src={heroImg}
                alt="Agency project workflow dashboard"
                width={1280}
                height={960}
                className="h-auto w-full rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-20 md:grid-cols-4">
          {[
            { k: "1,200+", v: "Websites delivered" },
            { k: "5–7 days", v: "Avg turnaround" },
            { k: "120+", v: "Agency partners" },
            { k: "24/7", v: "Project support" },
          ].map((s) => (
            <div key={s.v} className="bg-background p-5 md:p-8">
              <div className="text-xl font-semibold tracking-tight text-ink md:text-3xl">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground md:text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Section header ---------- */
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:text-xs">{eyebrow}</div>
      <h2 className="mt-3 text-balance text-[26px] font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-base">{sub}</p>}
    </div>
  );
}

/* ---------- WHO WE HELP ---------- */
const audiences = [
  { icon: Search, title: "SEO Agencies", desc: "Hand off SEO-ready websites we build to your specs — fast turnarounds, clean schema, Core Web Vitals optimized." },
  { icon: Megaphone, title: "Marketing Agencies", desc: "Pixel-perfect landing pages and full sites that ship on schedule for your campaigns." },
  { icon: User, title: "Freelancers", desc: "Take on bigger projects without hiring. We become your invisible production team." },
  { icon: Palette, title: "Designers", desc: "Send us your Figma — we build it cleanly in WordPress, Webflow or custom code." },
  { icon: Briefcase, title: "Consultants", desc: "Deliver complete digital solutions to your clients without operational overhead." },
  { icon: Building2, title: "Digital Agencies", desc: "Scale fulfillment capacity instantly with a partner that protects your brand." },
];

export function WhoWeHelp() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Who we help"
          title="Built for the people who sell websites"
          sub="We work exclusively with agencies, freelancers and consultants — never your clients directly."
        />
        <div className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:gap-4 lg:grid-cols-3">
          {audiences.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card p-4 transition-all hover:border-ink/20 hover:shadow-soft md:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-soft text-brand">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
const services = [
  { icon: Code2, title: "White Label WordPress", desc: "Custom themes, ACF, Elementor or Gutenberg — built clean and fully editable." },
  { icon: MonitorSmartphone, title: "Website Design", desc: "Modern, conversion-focused designs delivered in Figma or directly to dev." },
  { icon: ShoppingCart, title: "WooCommerce Development", desc: "Scalable storefronts with payments, shipping and inventory wired in." },
  { icon: Rocket, title: "Landing Page Development", desc: "High-converting pages built for ad campaigns, launches and lead gen." },
  { icon: Wrench, title: "Website Maintenance", desc: "Updates, backups, security patches and content edits — handled monthly." },
  { icon: Gauge, title: "Speed Optimization", desc: "Core Web Vitals tuned, lighthouse scores you can sell to your clients." },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Services"
          title="Production-grade web development, on demand"
          sub="Everything your agency needs to deliver websites at scale — under your brand."
        />
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group flex flex-col bg-background p-5 transition-colors hover:bg-surface-elevated md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <a href="#contact" className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
const reasons = [
  { icon: Timer, title: "Fast turnaround", desc: "Most projects ship in 5–7 business days." },
  { icon: Search, title: "SEO-ready code", desc: "Schema, semantic HTML, fast Core Web Vitals." },
  { icon: Users, title: "Dedicated PM", desc: "One point of contact across every project." },
  { icon: ShieldCheck, title: "White label delivery", desc: "Your branding, your domain, your client." },
  { icon: EyeOff, title: "NDA friendly", desc: "Mutual NDAs signed before kickoff." },
  { icon: Smartphone, title: "Mobile optimized", desc: "Responsive across every breakpoint." },
  { icon: FileCode2, title: "Clean code", desc: "Maintainable, documented, no plugin bloat." },
  { icon: RefreshCw, title: "Revision workflow", desc: "Structured rounds with clear scope." },
  { icon: MessageSquare, title: "Agency comms", desc: "Slack, ClickUp, Asana — we plug in." },
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies choose us"
          title="Operational trust, built into every project"
          sub="The reasons agency owners renew with us — quarter after quarter."
        />
        <div className="mt-10 grid grid-cols-2 gap-4 md:mt-14 md:gap-6 lg:grid-cols-3">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 rounded-xl p-2">
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
  { n: "01", title: "Send Requirements", desc: "Brief us via your tool of choice. We confirm scope, timeline and price within hours." },
  { n: "02", title: "We Build", desc: "Your dedicated PM and dev team get to work. Daily updates, no surprises." },
  { n: "03", title: "Review & Revisions", desc: "Structured revision rounds with a private staging URL — fully under your brand." },
  { n: "04", title: "Deliver to Your Client", desc: "We hand off polished files. You ship. We stay invisible." },
];

export function Process() {
  return (
    <section id="process" className="bg-surface py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Process"
          title="A workflow built for agencies"
          sub="Predictable, transparent and engineered to make you look great in front of your clients."
        />
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-16 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="relative bg-background p-5 md:p-8">
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
  "No client poaching — ever",
  "Mutual NDAs signed before kickoff",
  "100% confidential collaboration",
  "Invisible backend partner",
  "Your branding stays front-facing",
  "Agency-safe communication channels",
];

export function WhiteLabel() {
  return (
    <section id="white-label" className="py-16 md:py-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-10 text-brand-foreground md:p-16">
          <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand/40 blur-3xl" aria-hidden />
          <div className="absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-brand/20 blur-3xl" aria-hidden />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">
                The white label promise
              </div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                We work behind your brand. Always.
              </h2>
              <p className="mt-5 max-w-lg text-pretty leading-relaxed text-brand-foreground/75">
                Your clients never hear from us. Your team gets a reliable production partner that protects your reputation as if it were ours.
              </p>
              <div className="mt-8">
                <Button asChild size="lg" className="rounded-full bg-background px-6 text-ink hover:bg-background/90">
                  <a href="#contact">Request our NDA <ArrowRight className="h-4 w-4" /></a>
                </Button>
              </div>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {promises.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-foreground" />
                  <span className="text-sm leading-relaxed text-brand-foreground/90">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PORTFOLIO ---------- */
const projects = [
  { tag: "Contractor", title: "Northwind Roofing", color: "from-slate-200 to-slate-100" },
  { tag: "Healthcare", title: "Beacon Family Clinic", color: "from-indigo-100 to-blue-50" },
  { tag: "Local Business", title: "Stoneyard Coffee Co.", color: "from-amber-100 to-orange-50" },
  { tag: "Agency", title: "Field Marketing Group", color: "from-violet-100 to-indigo-50" },
  { tag: "Ecommerce", title: "Linen & Loom", color: "from-rose-100 to-pink-50" },
  { tag: "Real Estate", title: "Harbor Realty Partners", color: "from-emerald-100 to-teal-50" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-surface py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected white label projects"
          sub="Real work delivered for agency partners — names anonymized for confidentiality."
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-background shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative aspect-[4/3] bg-gradient-to-br ${p.color}`}>
                <div className="absolute inset-6 rounded-xl border border-white bg-white/80 shadow-soft backdrop-blur-sm">
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

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  {
    quote: "They helped us deliver multiple client websites without overwhelming our internal team. The workflow felt more like an in-house dev department than an outside vendor.",
    name: "Hannah Reid",
    role: "Founder, Northbeam SEO",
  },
  {
    quote: "Communication and turnaround were noticeably more organized than the freelancers we'd used before. Weekly check-ins, clean staging links, and revisions handled inside the scope we agreed on.",
    name: "Marcus Patel",
    role: "Operations Lead, Field Marketing Group",
  },
  {
    quote: "Our agency needed a reliable backend partner for WordPress and landing page work. Six months in, every project has shipped on schedule and our clients still think we built it ourselves.",
    name: "Sara Bennett",
    role: "Owner, Bennett Digital",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Testimonials"
          title="Agency owners, in their own words"
        />
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 md:mt-14 md:gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex gap-0.5 text-brand">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-pretty text-[15px] leading-relaxed text-ink">
                "{t.quote}"
              </blockquote>
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

/* ---------- FINAL CTA ---------- */
export function FinalCTA() {
  return (
    <section id="contact" className="pb-20 md:pb-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated to-brand-soft p-10 text-center md:p-20">
          <div className="absolute inset-0 bg-grid-soft opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Ready to scale your agency?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Book a confidential 20-minute call. We'll map your fulfillment bottlenecks and show how a white label partner removes them.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-background px-6">
                <a href="https://calendly.com/" target="_blank" rel="noreferrer">Book a Discovery Call</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
