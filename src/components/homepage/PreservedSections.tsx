import { ArrowRight, Search, Megaphone, User, Palette, Briefcase, Building2, Users, Code2, ShieldCheck, Timer, RefreshCw, FileCode2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
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
const modelCards = [
  { icon: Users, title: "Your client hires you", desc: "You sell web development under your brand at your price. You keep full control of the client relationship and the project scope." },
  { icon: Code2, title: "We build behind the scenes", desc: "Our white label web developers handle design, coding, QA and deployment — completely invisible to your end client." },
  { icon: ShieldCheck, title: "You deliver under your brand", desc: "The finished website ships with your branding, your domain and your invoice. We never contact your client or claim credit." },
];

export function WhatIsWhiteLabel() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:text-xs">The model</div>
            <h2 className="mt-3 text-balance text-[26px] font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">
              Delivery Behind Your Brand
            </h2>
            <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                A simple partnership model: a specialized development team builds websites on behalf of your agency — entirely under your brand. You sell the project, we deliver the work, your client sees only your name.
              </p>
              <p>
                No direct client contact, no branding exposure, full NDA protection. You get production capacity without hiring, payroll risk or bench time.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="h-12 rounded-full px-6">
                <Link to="/contact">Get a Free Quote <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {modelCards.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand text-brand-foreground">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
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
          title="Why Agencies Choose a White Label Web Development Agency"
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


/* ---------- PARTNER PRICING ---------- */
export function PartnerPricing() {
  return (
    <section className="py-16 md:py-24">
      <div className="container-page max-w-3xl text-center">
        <SectionHeader
          eyebrow="Partner rates"
          title="Transparent Partner Pricing"
          sub="Every project is quoted up front with a fixed scope, clear deliverables and agreed payment milestones — no hourly surprises. Our partner rates leave room for a healthy markup, so you can resell at your own price and protect your margin."
        />
        <p className="mt-8 text-sm text-muted-foreground">
          Compare project rates and care plans on our{" "}
          <Link to="/pricing" className="font-semibold text-brand hover:underline">white label web development pricing</Link> page.
        </p>
      </div>
    </section>
  );
}

/* ---------- BECOME A PARTNER ---------- */
export function BecomePartner() {
  return (
    <section className="bg-surface py-16 md:py-24">
      <div className="container-page max-w-3xl text-center">
        <SectionHeader
          eyebrow="Agency partnerships"
          title="Become a Partner"
          sub="Start with one scoped project and grow into a repeatable delivery relationship as your pipeline grows. Partners get priority scheduling, a dedicated project manager and volume rates."
        />
        <p className="mt-8 text-sm text-muted-foreground">
          Learn how our{" "}
          <Link to="/agency-partner" className="font-semibold text-brand hover:underline">white label web development partner program</Link> works.
        </p>
      </div>
    </section>
  );
}
