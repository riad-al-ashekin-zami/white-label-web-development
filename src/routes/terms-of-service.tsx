import { createFileRoute, Link } from "@tanstack/react-router";
import {
  FileText, Code2, MonitorSmartphone, ShoppingCart, Rocket, Wrench, Gauge, Search,
  Workflow, CreditCard, Clock, Copyright, Scale, XCircle, ArrowRight, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title: "Terms of Service \u2014 White Label Website Development" },
      { name: "description", content: "Clear, partnership-focused terms covering services, workflow, payments, delivery, IP and support for agencies working with White Label Website Development." },
      { property: "og:title", content: "Terms of Service \u2014 White Label Website Development" },
      { property: "og:description", content: "Clear, partnership-focused terms covering services, workflow, payments, delivery, IP and support for agencies working with White Label Website Development." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/terms-of-service" },
      { name: "twitter:title", content: "Terms of Service \u2014 White Label Website Development" },
      { name: "twitter:description", content: "Clear, partnership-focused terms covering services, workflow, payments, delivery, IP and support for agencies working with White Label Website Development." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/terms-of-service" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Terms of Service\", \"item\": \"https://whitelabelwebsitedevelopment.com/terms-of-service\"}]}, {\"@type\": \"WebPage\", \"name\": \"Terms of Service \\u2014 White Label Website Development\", \"description\": \"Clear, partnership-focused terms covering services, workflow, payments, delivery, IP and support for agencies working with White Label Website Development.\", \"url\": \"https://whitelabelwebsitedevelopment.com/terms-of-service\", \"isPartOf\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#website\"}}]}",
      },
    ],
  }),
  
  component: TermsPage,
});

const lastUpdated = "May 22, 2026";

const services = [
  { icon: Code2, t: "White Label Website Development", d: "Custom builds delivered under your brand for agency clients." },
  { icon: Code2, t: "WordPress Development", d: "Themes, ACF, Elementor and Gutenberg builds, cleanly structured." },
  { icon: MonitorSmartphone, t: "Website Design", d: "Conversion-focused design delivered in Figma or directly to dev." },
  { icon: Rocket, t: "Landing Pages", d: "High-performing pages for ad campaigns, launches and lead gen." },
  { icon: ShoppingCart, t: "WooCommerce Development", d: "Storefronts with payments, shipping and inventory wired in." },
  { icon: Wrench, t: "Website Maintenance", d: "Updates, backups, security patches and monthly content edits." },
  { icon: Gauge, t: "Website Audits", d: "Performance, SEO, accessibility and code-quality audits." },
  { icon: Search, t: "SEO-Friendly Development", d: "Semantic HTML, schema and Core Web Vitals optimization." },
];

const workflow = [
  { t: "Requirements", d: "Each project starts with a written brief covering goals, scope, references and timeline." },
  { t: "Revisions", d: "Structured revision rounds are included per project. Additional rounds can be scoped as needed." },
  { t: "Timelines", d: "Schedules are agreed before kickoff. Timely feedback from your side keeps delivery on track." },
  { t: "Communication", d: "We work over Slack, ClickUp, Asana, Trello or email — whatever your team already uses." },
  { t: "Approvals", d: "Each milestone is reviewed and signed off via a staging link before moving forward." },
  { t: "Scope", d: "Scope is agreed in writing. Changes outside the original scope are flagged and quoted separately." },
];

const payments = [
  "Quotes are provided in writing before any work begins.",
  "Most engagements start with a project deposit and are settled on milestones or delivery.",
  "Maintenance plans run as monthly retainers, billed in advance.",
  "Scope adjustments are quoted and approved before they're executed.",
  "Standard revision rounds are included; additional rounds are billed transparently.",
];

const delivery = [
  "Most websites ship in 5–7 business days, depending on scope.",
  "Larger or multi-template builds run on agreed milestone schedules.",
  "Delivery timelines depend on feedback speed from your side.",
  "We don't guarantee unrealistic turnarounds — we commit to realistic ones and meet them.",
];

const ip = [
  "Your agency, and ultimately your client, owns the final deliverables once the project is paid in full.",
  "Branding, content and assets you provide remain your (or your client's) property at all times.",
  "Our internal tools, frameworks and reusable code remain ours and may be reused on future projects.",
  "We will not display your projects or client names in our portfolio without your written permission.",
];

const termination = [
  { t: "Project cancellation", d: "Projects can be paused or cancelled in writing. Work completed up to that point is invoiced based on scope." },
  { t: "Maintenance cancellation", d: "Monthly maintenance plans can be cancelled with 14 days' notice before the next renewal." },
  { t: "Support scope", d: "Support covers the scope of the active engagement or retainer. Out-of-scope work is quoted separately." },
  { t: "Ongoing service", d: "Long-term partners typically run on a retainer with predictable monthly capacity." },
];

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 bg-grid-soft" aria-hidden />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-soft md:text-xs">
            <FileText className="h-3.5 w-3.5 text-brand" />
            Partnership Terms
          </div>
          <h1 className="mt-5 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Terms of <span className="text-gradient-brand">Service</span>
          </h1>
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            Clear, partnership-first terms that explain how we work with agencies, freelancers and consultants — written to be readable, not intimidating.
          </p>
          <div className="mt-6 text-xs text-muted-foreground">
            Last updated: <span className="font-medium text-ink">{lastUpdated}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:text-xs">{eyebrow}</div>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm text-ink">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        {/* Contents */}
        <section className="pb-4">
          <div className="container-page">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface-elevated p-6 md:p-8">
              <p className="text-[15px] leading-relaxed text-ink">
                These terms describe how White Label Website Development ("we", "us") works with agencies, freelancers and consultants ("you"). Engaging us for a project means you agree to the terms below.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {[
                  ["1", "Services provided", "services"],
                  ["2", "Workflow & responsibilities", "workflow"],
                  ["3", "Payments & pricing", "payments"],
                  ["4", "Delivery & timelines", "delivery"],
                  ["5", "Intellectual property", "ip"],
                  ["6", "Limitation of liability", "liability"],
                  ["7", "Termination & support", "termination"],
                  ["8", "Contact", "contact"],
                ].map(([n, label, href]) => (
                  <a key={href} href={`#${href}`} className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-sm text-ink transition-colors hover:border-ink/20">
                    <span className="flex items-center gap-2"><span className="text-xs font-semibold text-brand">{n}</span>{label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Section id="services" eyebrow="01" title="Services provided">
          <p>We provide white label web development services, delivered quietly under your brand. Our core offering includes:</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {services.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand"><Icon className="h-4.5 w-4.5" /></div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="workflow" eyebrow="02" title="Project workflow & responsibilities">
          <p>We run every engagement on a predictable, transparent workflow so that you and your clients always know where things stand.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {workflow.map(({ t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-brand-foreground"><Workflow className="h-4.5 w-4.5" /></div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="payments" eyebrow="03" title="Payments & pricing">
          <p>Our pricing is transparent. There are no surprise invoices and no hidden fees.</p>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand"><CreditCard className="h-4.5 w-4.5" /></div>
            <div className="text-sm text-ink">How billing typically works on our partnerships.</div>
          </div>
          <BulletList items={payments} />
        </Section>

        <Section id="delivery" eyebrow="04" title="Delivery & timelines">
          <p>We commit to realistic timelines and meet them. Schedules depend on scope and on how quickly feedback comes back from your side.</p>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand"><Clock className="h-4.5 w-4.5" /></div>
            <div className="text-sm text-ink">Reasonable, dependable turnaround — not aggressive promises.</div>
          </div>
          <BulletList items={delivery} />
        </Section>

        <Section id="ip" eyebrow="05" title="Intellectual property">
          <p>Ownership is straightforward and built around protecting your agency and your client.</p>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand"><Copyright className="h-4.5 w-4.5" /></div>
            <div className="text-sm text-ink">Your branding stays yours. Final deliverables transfer on payment.</div>
          </div>
          <BulletList items={ip} />
        </Section>

        <Section id="liability" eyebrow="06" title="Limitation of liability">
          <p>We take responsibility for the quality of what we ship. At the same time, like any service provider, our liability has reasonable limits.</p>
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand"><Scale className="h-4.5 w-4.5" /></div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              To the maximum extent permitted by law, our total liability for any claim related to a project is limited to the fees paid to us for that specific project. We're not liable for indirect or consequential losses such as lost revenue, lost profits or third-party costs. We do not provide legal, compliance or financial advice — those remain the responsibility of you and your client.
            </p>
          </div>
        </Section>

        <Section id="termination" eyebrow="07" title="Termination & support">
          <p>Engagements can wind down cleanly. There are no long-term lock-ins.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {termination.map(({ t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-brand-foreground"><XCircle className="h-4.5 w-4.5" /></div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Final CTA */}
        <section id="contact" className="py-12 md:py-20">
          <div className="container-page">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated to-brand-soft p-8 text-center md:p-12">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Need a reliable white label partner?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Scale your agency with confidence. We'll review your pipeline and show you how a backend partner removes fulfillment bottlenecks.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button asChild size="lg" className="rounded-full px-6">
                  <Link to="/contact">Start a Partnership <ArrowRight className="h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full bg-background px-6">
                  <a href="https://calendly.com/" target="_blank" rel="noreferrer">Book a Discovery Call</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
