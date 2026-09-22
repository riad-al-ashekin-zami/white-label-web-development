import {
  ArrowRight, Search, Megaphone, User, Palette, Briefcase, Building2,
  Code2, MonitorSmartphone, ShoppingCart, Rocket, Wrench, Gauge,
  Timer, ShieldCheck, Users, FileCode2, RefreshCw,
  CheckCircle2, Star, MapPin, Phone, Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-dashboard.webp";

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
              <span className="text-gradient-brand">White Label Web Development</span> for Agencies
            </h1>
            <p className="mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground md:mt-6 md:text-lg">
              We're the white label web development partner behind 120+ agencies, marketing teams and consultants across North America and globally. Our <a href="#services" className="font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-ink">white label web developers</a> handle web design, WordPress, WooCommerce and landing page builds under your brand — SEO-ready, Core Web Vitals optimized, and delivered remotely in 5–7 business days.
            </p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3 md:mt-8">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 rounded-full px-6">
                <Link to="/portfolio">See Agency Projects</Link>
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
                alt="White label web development dashboard showing agency project workflow and delivery"
                width={1200}
                height={1200}
                fetchPriority="high"
                loading="eager"
                decoding="async"
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

/* ---------- WHAT IS WHITE LABEL WEB DEVELOPMENT ---------- */
export function WhatIsWhiteLabel() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page max-w-4xl">
        <h2 className="text-balance text-[26px] font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">
          What Is White Label Web Development?
        </h2>
        <div className="mt-6 space-y-5 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>
            White label web development is a partnership model where a specialized development team builds websites on behalf of agencies, freelancers and consultants — entirely under their brand. The agency sells the finished website to their end client, while the white label web developer stays completely invisible. No direct client contact, no branding exposure, full NDA protection from start to finish.
          </p>
          <p>
            For agencies that sell websites but don't keep developers in-house, a white label web development partner removes the cost and risk of hiring, managing and retaining technical staff. You focus on sales, strategy and client relationships. Our white label web development agency works as the production team behind your web design agency or website design company, handling design, development, QA and delivery — on your timeline, under your brand, at a margin you control.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHO WE HELP ---------- */
const audiences = [
  { icon: Search, title: "SEO Agencies", desc: "We're the white label web development partner SEO agencies trust for client site builds. Every website ships with clean semantic HTML, schema markup, optimized Core Web Vitals and crawlable architecture — so your SEO team never has to clean up after a developer." },
  { icon: Megaphone, title: "Marketing Agencies", desc: "Pixel-perfect landing pages and full websites that ship on your campaign schedule. Our white label web developers work from your briefs, match your design specs, and deliver private staging links you can present to clients as your own work." },
  { icon: User, title: "Freelancers", desc: "Take on bigger web development projects without hiring. We become your invisible production team — a reliable white label web developer for WordPress, WooCommerce and custom builds, project after project." },
  { icon: Palette, title: "Web Design Agencies", desc: "Send us your Figma, Sketch or XD files. We provide the white label web design and development capacity your web design agency needs — responsive, fast-loading, and ready for client handover." },
  { icon: Briefcase, title: "Consultants", desc: "Deliver complete digital solutions to your clients without operational overhead. We handle the full white label web development workflow while you stay focused on advisory work." },
  { icon: Building2, title: "Digital Agencies", desc: "Scale fulfillment capacity instantly with a white label web development partner that protects your brand. Run more projects in parallel without expanding your internal team." },
];

export function WhoWeHelp() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Who we help"
          title="Built for the People Who Sell Websites"
          sub="We work exclusively with agencies, freelancers and consultants — never your clients directly. Whatever you sell, our white label web developers build it under your name."
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
  { icon: Code2, title: "White Label WordPress Development", desc: "Custom themes, ACF, Elementor, Divi and Gutenberg — all built with clean, editable, SEO-ready code. Every WordPress site is mobile-optimized and safe for your client's team to manage.", to: "/services/white-label-wordpress-development" },
  { icon: MonitorSmartphone, title: "White Label Website Design", desc: "Modern, conversion-focused web design delivered in Figma or built straight to development. Give your website design company experienced website designers for small business projects without adding payroll.", to: "/services/white-label-website-design" },
  { icon: ShoppingCart, title: "White Label WooCommerce Development", desc: "Scalable ecommerce storefronts with payment gateways, shipping calculators and inventory management wired in and tested. WooCommerce stores that convert and scale.", to: "/services/white-label-woocommerce-development" },
  { icon: Rocket, title: "White Label Landing Page Design", desc: "High-converting landing pages for ad campaigns, product launches and lead gen. Fast turnaround, A/B-test ready, built to hit your performance benchmarks.", to: "/services/white-label-landing-page-design" },
  { icon: Wrench, title: "White Label Website Maintenance", desc: "WordPress updates, daily backups, security patches and monthly content edits — handled under your brand so you can offer recurring revenue to clients.", to: "/services/white-label-website-maintenance" },
  { icon: Gauge, title: "SEO-Friendly Web Development", desc: "Core Web Vitals tuned, schema-ready code and Lighthouse scores you can sell. SEO-first development baked into every build.", to: "/services/seo-friendly-web-development" },
];

export function Services() {
  return (
    <section id="services" className="bg-surface py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="White label services"
          title="White Label Web Development Services"
           sub="Everything your agency needs to deliver professional websites at scale. Our white label web development services give each web design agency and web development agency a complete production lifecycle — from design and development to launch and maintenance, all under your brand."
        />
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc, to }) => (
            <div key={title} className="group flex flex-col bg-background p-5 transition-colors hover:bg-surface-elevated md:p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <Link to={to} className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand">
                Explore service <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY US ---------- */
const reasons = [
  { icon: Timer, title: "Fast, Predictable Turnaround", desc: "Most projects ship in 5–7 business days. Bigger builds get a committed timeline you can plan client launches around." },
  { icon: Search, title: "SEO-First Development", desc: "Schema markup, semantic HTML, optimized Core Web Vitals and clean crawlable code — your SEO team will thank your white label web developer." },
  { icon: Users, title: "Dedicated Project Manager", desc: "One human point of contact who responds in hours, not days, over Slack, ClickUp, Asana or email — your choice." },
  { icon: ShieldCheck, title: "100% White Label & NDA Protected", desc: "Your branding, your domain, your client relationship. Mutual NDAs signed before kickoff. We never contact your clients." },
  { icon: RefreshCw, title: "Scalable Capacity", desc: "Run 1 project or 30 in parallel. Add white label web development capacity in days, not quarters. Say yes to bigger pipelines." },
  { icon: FileCode2, title: "Higher Profit Margins", desc: "Resell at your rate with no recruiting, onboarding, benefits or bench time. One vendor, one PM, one invoice across every project." },
];

export function WhyUs() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies choose us"
          title="Why Agencies Choose Us as Their White Label Web Development Partner"
          sub="Agency owners renew with us quarter after quarter because we operate like an in-house team — without the payroll. Here's what makes our white label web development different from typical freelancers and generic dev shops."
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
  { n: "01", title: "Send Your Requirements", desc: "Brief us via Slack, ClickUp, Asana, email or your tool of choice. Your dedicated project manager confirms scope, timeline and a fixed price within hours — before any work begins." },
  { n: "02", title: "Your White Label Web Developers Build", desc: "Your PM and development team get to work with daily progress updates and a private staging URL. Every site is built with clean semantic HTML, responsive across all breakpoints, and tuned for Core Web Vitals from day one." },
  { n: "03", title: "Review, Revisions & QA", desc: "You review on a private staging URL under your brand. We run structured revision rounds with clear scope, and our QA team tests across browsers, devices and screen sizes before launch." },
  { n: "04", title: "Deliver to Your Client", desc: "We hand off polished, production-ready files. You ship under your brand. Your client never knows a white label web development team was involved. We stay invisible — that's the promise." },
];

export function Process() {
  return (
    <section id="process" className="bg-surface py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="How we work"
          title="How Our White Label Web Development Process Works"
          sub="We replaced freelancer chaos with a structured white label web development workflow your agency can plan around. Every project runs on the same proven pipeline — whether it's a single landing page or 30 WordPress builds running in parallel."
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
                  <Link to="/nda-confidentiality">Request our NDA <ArrowRight className="h-4 w-4" /></Link>
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
          title="Selected White Label Web Development Projects"
          sub="Real websites delivered for agency partners — client names anonymized for confidentiality."
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
               Ready to Scale Your Agency?
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
               Book a confidential 20-minute call. We'll map your fulfillment bottlenecks and show how a white label web development partner removes them — so you can take on more clients without hiring a single developer.
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

/* ---------- BUSINESS NAP ---------- */
export function BusinessNAP() {
  return (
    <section className="border-y border-border bg-surface py-12 md:py-16" aria-labelledby="business-contact-heading">
      <div className="container-page">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:text-xs">
              Fort Worth web design
            </div>
            <h2 id="business-contact-heading" className="mt-3 text-balance text-2xl font-semibold leading-tight text-ink md:text-3xl">
              Roadrunner Media Website Design
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base">
              White label web development and website design support for agencies and small businesses.
            </p>
          </div>

          <address className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border not-italic sm:grid-cols-3">
            <a
              href="https://www.google.com/maps/search/?api=1&query=3925%20Bryce%20Ave%2C%20Fort%20Worth%2C%20TX%2076107"
              target="_blank"
              rel="noreferrer"
              className="group flex min-h-28 items-start gap-3 bg-background p-5 transition-colors hover:bg-surface-elevated"
            >
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span>
                <span className="block text-xs font-semibold uppercase text-muted-foreground">Address</span>
                <span className="mt-1 block text-sm font-medium leading-relaxed text-ink">3925 Bryce Ave, Fort Worth, TX 76107, United States</span>
              </span>
            </a>
            <a
              href="tel:+18172017558"
              className="group flex min-h-28 items-start gap-3 bg-background p-5 transition-colors hover:bg-surface-elevated"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span>
                <span className="block text-xs font-semibold uppercase text-muted-foreground">Phone</span>
                <span className="mt-1 block text-sm font-medium text-ink">+1 817-201-7558</span>
              </span>
            </a>
            <a
              href="https://whitelabelwebsitedevelopment.com"
              className="group flex min-h-28 items-start gap-3 bg-background p-5 transition-colors hover:bg-surface-elevated"
            >
              <Globe className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase text-muted-foreground">Website</span>
                <span className="mt-1 block break-words text-sm font-medium leading-relaxed text-ink">whitelabelwebsitedevelopment.com</span>
              </span>
            </a>
          </address>
        </div>
      </div>
    </section>
  );
}
