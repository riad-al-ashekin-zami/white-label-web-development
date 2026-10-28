import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, EyeOff, Headphones, Search, Users, Building2, Sparkles,
  HandshakeIcon, Heart, Layers, Workflow, MessageSquare, Briefcase, Rocket,
  Code2, Smartphone, Gauge, Wrench, FileLock2, UserX, BadgeCheck, Quote,
  Compass, Network, ClipboardCheck, LifeBuoy, Megaphone, Palette, User,
  CheckCircle2, ArrowUpRight, Activity, Target, Scale, Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | WLWD" },
      { name: "robots", content: "noindex, nofollow" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "description", content: "Meet the team behind WLWD: our story, how we work with agencies, and the values behind every project we deliver." },
      { property: "og:title", content: "About Us | WLWD" },
      { property: "og:description", content: "Meet the team behind WLWD: our story, how we work with agencies, and the values behind every project we deliver." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/about" },
      { name: "twitter:title", content: "About Us | WLWD" },
      { name: "twitter:description", content: "Meet the team behind WLWD: our story, how we work with agencies, and the values behind every project we deliver." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/about" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"About\", \"item\": \"https://whitelabelwebsitedevelopment.com/about\"}]}, {\"@type\": \"AboutPage\", \"name\": \"About Us | WLWD\", \"description\": \"Meet the team behind WLWD: our story, how we work with agencies, and the values behind every project we deliver.\", \"url\": \"https://whitelabelwebsitedevelopment.com/about\", \"isPartOf\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#website\"}}]}",
      },
    ],
  }),
  
  component: AboutPage,
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
              <Sparkles className="h-3.5 w-3.5 text-brand" />
              About WLWD
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              About <span className="text-brand">WLWD</span>
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              We're a small, senior team that grew up inside agencies. We care about dependable collaboration, clear responsibilities and respect for every client relationship.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/agency-partner">Start a partnership <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/contact">Book a discovery call</Link>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-4">
              {[
                { icon: EyeOff, label: "White label" },
                { icon: FileLock2, label: "NDA friendly" },
                { icon: Headphones, label: "Dedicated support" },
                { icon: Search, label: "SEO-aware dev" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <AboutMock />
        </div>
      </div>
    </section>
  );
}

function AboutMock() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
            <span className="ml-3">workspace.whitelabelwebsitedevelopment.com</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">All systems on</span>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Active partners", v: "48" },
            { k: "Live projects", v: "23" },
            { k: "Maintenance", v: "120+" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-background p-3 text-center">
              <div className="text-lg font-semibold text-ink">{s.v}</div>
              <div className="text-[10px] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          {[
            { icon: Workflow, label: "Project Management", val: "On track" },
            { icon: Code2, label: "Development", val: "12 in progress" },
            { icon: ClipboardCheck, label: "QA & Testing", val: "Reviewing 4" },
            { icon: LifeBuoy, label: "Maintenance Support", val: "Monitored" },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <r.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-medium text-ink">{r.label}</span>
              </div>
              <span className="text-[11px] font-medium text-muted-foreground">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -left-6 -bottom-6 hidden rounded-2xl border border-border bg-background p-3 shadow-soft md:block">
        <div className="flex items-center gap-2 text-xs font-medium text-ink">
          <ShieldCheck className="h-4 w-4 text-brand" /> NDA-protected workspace
        </div>
      </div>
    </div>
  );
}

/* ---------- OUR STORY ---------- */
function OurStory() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Our story</div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Built from inside the agency world.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                WLWD was started by people who spent years inside agencies — managing client websites, juggling unreliable freelancers, and absorbing the operational stress of broken fulfillment.
              </p>
              <p>
                We saw the same problems repeat across every agency we worked with: missed deadlines, inconsistent quality, weak communication, and developers who would quietly disappear at the worst moments.
              </p>
              <p>
                So we built the opposite. A structured, agency-first development team operating like a real backend department — predictable delivery, structured workflows, NDA-protected communication, and a long-term partnership mindset.
              </p>
              <p>
                Today we provide{" "}
                <Link to="/" className="font-semibold text-brand hover:underline">white label web development services</Link>{" "}
                to agencies across North America, and most of them work with us through our{" "}
                <Link to="/agency-partner" className="font-semibold text-brand hover:underline">partner program</Link>.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Target, k: "Agency-first", v: "Built around how agencies actually operate." },
              { icon: Scale, k: "Operationally mature", v: "Systems, SLAs, structured handoffs." },
              { icon: HandshakeIcon, k: "Long-term partner", v: "We grow as your agency grows." },
              { icon: ShieldCheck, k: "Reliability first", v: "Predictable delivery, every time." },
            ].map((it) => (
              <div key={it.k} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{it.k}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY WE EXIST ---------- */
function WhyWeExist() {
  const points = [
    { icon: Rocket, title: "Help agencies scale", desc: "Add senior development capacity without hiring." },
    { icon: ShieldCheck, title: "Reliable fulfillment", desc: "Predictable, consistent project delivery." },
    { icon: Heart, title: "Reduce operational stress", desc: "Take the development burden off your plate." },
    { icon: BadgeCheck, title: "Delivery consistency", desc: "Same quality bar across every project." },
    { icon: HandshakeIcon, title: "Long-term partnership", desc: "Built around multi-year relationships." },
    { icon: EyeOff, title: "Invisible backend support", desc: "We stay behind the curtain — always." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why we exist"
          title="To make agency fulfillment quietly reliable"
          sub="Most agencies don't need another vendor — they need a dependable backend they can stop worrying about."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{p.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- VALUES ---------- */
function Values() {
  const values = [
    { icon: ShieldCheck, k: "Reliability", v: "We deliver what we promise, when we promise it." },
    { icon: Activity, k: "Transparency", v: "Clear status, clear ownership, no surprises." },
    { icon: MessageSquare, k: "Professional communication", v: "Structured, calm, on time — every time." },
    { icon: HandshakeIcon, k: "Long-term partnership", v: "We invest in relationships, not transactions." },
    { icon: BadgeCheck, k: "Operational excellence", v: "Mature systems behind every deliverable." },
    { icon: EyeOff, k: "White label integrity", v: "Your brand, your client, your reputation — protected." },
    { icon: Layers, k: "Scalability", v: "Capacity that grows with your agency." },
    { icon: ClipboardCheck, k: "Accountability", v: "Owners on every project. No finger-pointing." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our values"
          title="The principles behind every project"
          sub="The operational DNA that makes WLWD trusted by agency owners."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.k} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft transition-shadow hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{v.k}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{v.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHAT MAKES US DIFFERENT ---------- */
function Different() {
  const items = [
    { icon: Users, title: "Agency-first mindset", desc: "Designed around how agencies actually operate, sell and deliver." },
    { icon: EyeOff, title: "True white label systems", desc: "NDA-friendly, brand-safe, client-invisible by default." },
    { icon: Search, title: "SEO-aware development", desc: "Schema, hierarchy and Core Web Vitals built in from day one." },
    { icon: Workflow, title: "Operational workflow", desc: "Structured stages, milestones, QA gates and clean handoffs." },
    { icon: MessageSquare, title: "Structured communication", desc: "Slack, ClickUp, email — predictable channels and rhythm." },
    { icon: Compass, title: "Dedicated PM", desc: "A single point of contact owning your delivery end-to-end." },
    { icon: Layers, title: "Scalable fulfillment", desc: "Capacity that flexes with your monthly demand." },
    { icon: Wrench, title: "Maintenance expertise", desc: "Long-term care for client sites at agency scale." },
    { icon: UserX, title: "No client poaching", desc: "Strict no-contact policy with your end clients." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="What makes us different"
          title="A backend department, not just a vendor"
          sub="The combination of mindset, systems and discipline that agencies don't usually find in development partners."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHO WE WORK WITH ---------- */
function Audiences() {
  const items = [
    { icon: Search, title: "SEO Agencies", desc: "SEO-ready builds with proper schema, structure and CWV." },
    { icon: Megaphone, title: "Marketing Agencies", desc: "Conversion-focused landing pages and campaign sites at scale." },
    { icon: Palette, title: "Creative Agencies", desc: "Pixel-accurate Figma-to-code with design fidelity." },
    { icon: User, title: "Freelancers", desc: "Reliable backend dev capacity to take on bigger client work." },
    { icon: Briefcase, title: "Consultants", desc: "Trusted execution partner for client-facing recommendations." },
    { icon: Rocket, title: "Fast-growing agencies", desc: "Capacity that scales without hiring overhead." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Who we work with"
          title="Built for agency teams of every shape"
          sub="From boutique consultancies to fast-scaling agencies — WLWD adapts to your delivery model."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{it.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WORKFLOW PHILOSOPHY ---------- */
function WorkflowPhilosophy() {
  const phases = [
    { icon: Compass, title: "Discover", desc: "Scope, requirements, success criteria." },
    { icon: Workflow, title: "Plan", desc: "Milestones, timeline, ownership." },
    { icon: Code2, title: "Build", desc: "Structured, reviewed, version-controlled." },
    { icon: ClipboardCheck, title: "QA", desc: "Cross-device, performance and SEO checks." },
    { icon: Rocket, title: "Deliver", desc: "Clean, documented handoff under your brand." },
    { icon: LifeBuoy, title: "Support", desc: "Long-term care, updates and improvements." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Workflow philosophy"
          title="Predictable systems, mature delivery"
          sub="Every project moves through the same disciplined stages — no chaos, no improvisation."
        />
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {phases.map((p, i) => (
              <div key={p.title} className="relative rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                    <p.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/process" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
            See the full workflow <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- WHITE LABEL PROMISE ---------- */
function WhiteLabelPromise() {
  const points = [
    { icon: FileLock2, title: "NDA-friendly", desc: "Standard on every partnership." },
    { icon: UserX, title: "No client poaching", desc: "Strict no-contact with your clients." },
    { icon: EyeOff, title: "Confidential delivery", desc: "Private workspaces, scoped access." },
    { icon: ShieldCheck, title: "Invisible backend", desc: "Your clients never see us." },
    { icon: MessageSquare, title: "Agency-safe comms", desc: "Branded channels, branded files." },
    { icon: BadgeCheck, title: "Professional handling", desc: "Mature, calm, predictable." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-8 text-brand-foreground shadow-elevated md:p-12">
          <div className="absolute inset-0 bg-grid-soft opacity-20" aria-hidden />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">White label promise</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
                Your brand, your clients, your reputation — protected.
              </h2>
              <p className="mt-4 text-pretty text-brand-foreground/70">
                Confidentiality is not an add-on. It's how we operate by default — across every email, file, project and conversation.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-brand-foreground">
                    <p.icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold">{p.title}</h3>
                  <p className="mt-1 text-xs text-brand-foreground/70">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TECHNOLOGY ---------- */
function Technology() {
  const tech = [
    { icon: Code2, name: "WordPress", desc: "Custom themes, ACF, scalable CMS architecture." },
    { icon: Layers, name: "Elementor", desc: "Pro-grade page builder mastery & templates." },
    { icon: Briefcase, name: "WooCommerce", desc: "Stores, checkout flows and payments." },
    { icon: Rocket, name: "Landing Pages", desc: "High-converting modular page systems." },
    { icon: Search, name: "Technical SEO", desc: "Schema, hierarchy and indexability." },
    { icon: Wrench, name: "Website Maintenance", desc: "Updates, backups, monitoring and care." },
    { icon: Gauge, name: "Speed Optimization", desc: "Core Web Vitals and asset pipelines." },
    { icon: Smartphone, name: "Responsive Dev", desc: "Mobile-first, cross-device perfection." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Technology &amp; expertise"
          title="A focused, reliable stack"
          sub="Chosen for stability, performance and long-term maintainability — not novelty."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{t.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- OPERATIONAL STRUCTURE ---------- */
function Structure() {
  const cells = [
    { icon: Compass, title: "Project Management", desc: "Dedicated PM owning timeline, scope and communication." },
    { icon: Code2, title: "Development", desc: "Structured engineering team across WordPress, Woo and custom." },
    { icon: ClipboardCheck, title: "QA & Testing", desc: "Independent QA for every milestone before client handoff." },
    { icon: LifeBuoy, title: "Maintenance Support", desc: "Ongoing care team handling updates, monitoring and fixes." },
    { icon: Network, title: "Communication Workflow", desc: "Defined channels, response SLAs and escalation paths." },
    { icon: Headphones, title: "Account Management", desc: "Long-term partner relationships and capacity planning." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Operational structure"
          title="An organized team, not a freelancer pool"
          sub="WLWD is structured like a real backend department — with clear roles, ownership and systems."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cells.map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <c.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{c.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-600">
                <CheckCircle2 className="h-3.5 w-3.5" /> Active
              </div>
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
    {
      quote:
        "WLWD feels less like a vendor and more like an actual department. Their communication, structure and reliability are what we'd expect from a senior in-house team.",
      name: "Elena R.", role: "Founder, Marketing Agency",
    },
    {
      quote:
        "We've worked with them for over two years. Not a single missed deadline, not a single uncomfortable client moment. That's incredibly rare in this industry.",
      name: "Tomas P.", role: "Director, SEO Agency",
    },
    {
      quote:
        "What sold us was the maturity. NDAs, structured channels, real PMs, real QA. They run like a proper operation — and our clients have no idea they exist.",
      name: "Aisha K.", role: "Owner, Creative Agency",
    },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="What agency partners say about us" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
              <Quote className="h-6 w-6 text-brand" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 font-semibold text-brand">
                  {t.name[0]}
                </div>
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
    { q: "How long have you worked with agencies?", a: "WLWD has been operating as an agency-focused delivery partner for years, supporting agencies of every size across multiple regions." },
    { q: "Do you work under agency branding?", a: "Yes — every project is delivered fully under your brand, your domain and your communication channels. We never appear to your end clients." },
    { q: "How does communication work?", a: "You get a dedicated PM and shared workspace (Slack, ClickUp or email) with structured updates, response SLAs and clear escalation paths." },
    { q: "Do you sign NDAs?", a: "Absolutely. NDAs are standard for every partnership. We're happy to sign yours or provide one." },
    { q: "What platforms do you support?", a: "WordPress, Elementor, WooCommerce, custom CMS, landing page systems, and SEO/performance tooling." },
    { q: "Do you provide maintenance?", a: "Yes — we offer dedicated white label maintenance plans for ongoing updates, backups, monitoring, security and content edits." },
    { q: "Can you scale long-term?", a: "Yes. We're built for multi-year partnerships and routinely scale capacity month-over-month with our agency partners." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="Common questions about us" />
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-surface-elevated p-2 shadow-soft">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="px-4 text-left text-sm font-semibold text-ink hover:no-underline">
                  {f.q}
                </AccordionTrigger>
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
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Long-term partnership</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Looking for a reliable white label partner?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Let's build long-term agency growth together — backed by a mature, agency-first development team.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg" className="rounded-full bg-brand-foreground px-6 text-ink hover:bg-brand-foreground/90">
                <Link to="/agency-partner">Start a partnership <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-6 text-brand-foreground hover:bg-white/10 hover:text-brand-foreground">
                <Link to="/contact">Request a free quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */
function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <OurStory />
        <WhyWeExist />
        <Values />
        <Different />
        <Audiences />
        <WorkflowPhilosophy />
        <WhiteLabelPromise />
        <Technology />
        <Structure />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
