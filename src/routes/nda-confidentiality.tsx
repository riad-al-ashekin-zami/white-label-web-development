import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, EyeOff, FileLock2, UserX, MessagesSquare, Lock, Users, Database,
  HandshakeIcon, ArrowRight, CheckCircle2, BadgeCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/nda-confidentiality")({
  head: () => ({
    meta: [
      { title: "NDA & Confidentiality \u2014 White Label Website Development" },
      { name: "description", content: "How we protect agency and client confidentiality: NDA-friendly operations, white label delivery, no client poaching, and secure data handling." },
      { property: "og:title", content: "NDA & Confidentiality \u2014 White Label Website Development" },
      { property: "og:description", content: "How we protect agency and client confidentiality: NDA-friendly operations, white label delivery, no client poaching, and secure data handling." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/nda-confidentiality" },
      { name: "twitter:title", content: "NDA & Confidentiality \u2014 White Label Website Development" },
      { name: "twitter:description", content: "How we protect agency and client confidentiality: NDA-friendly operations, white label delivery, no client poaching, and secure data handling." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/nda-confidentiality" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"NDA & Confidentiality\", \"item\": \"https://whitelabelwebsitedevelopment.com/nda-confidentiality\"}]}, {\"@type\": \"WebPage\", \"name\": \"NDA & Confidentiality — White Label Website Development\", \"description\": \"How we protect agency and client confidentiality: NDA-friendly operations, white label delivery, no client poaching, and secure data handling.\", \"url\": \"https://whitelabelwebsitedevelopment.com/nda-confidentiality\", \"isPartOf\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#website\"}}]}",
      },
    ],
  }),
  
  component: NDAPage,
});

const lastUpdated = "May 22, 2026";

const commitment = [
  "Briefs, files, credentials and client information shared with us are treated as confidential by default.",
  "Confidential information is used only to deliver the agreed project.",
  "Information is never sold, shared with competitors or used for marketing.",
  "Confidentiality continues to apply after a project ends.",
];

const whiteLabel = [
  { icon: EyeOff, t: "Invisible backend support", d: "Your clients never see us. We don't appear on calls, in email threads or in deliverables." },
  { icon: BadgeCheck, t: "Agency branding protection", d: "All staging links, documents and exports are framed under your brand, not ours." },
  { icon: ShieldCheck, t: "White label fulfillment", d: "We operate as an extension of your team — designed to be quietly reliable." },
  { icon: MessagesSquare, t: "Professional communication", d: "Slack, ClickUp, Asana or email — clean updates, on schedule, with one PM." },
];

const agencySafe = [
  "We follow your communication standards and tools.",
  "We use the naming and language your agency prefers in client-facing artifacts.",
  "We will not contact your clients directly under any circumstance.",
  "We will not reveal our involvement, even if asked.",
];

const poaching = [
  "We never directly solicit, market to or pursue your clients.",
  "Client relationships and account ownership remain entirely with your agency.",
  "Your agency stays front-facing on every engagement.",
  "Backend execution remains confidential, including after the project ends.",
];

const ndaOps = [
  { t: "Signed NDA support", d: "We sign mutual NDAs before any project information is shared, and can adapt to your standard partner agreement." },
  { t: "Confidential handling", d: "Project briefs, design files and credentials are treated as confidential by everyone involved." },
  { t: "Secure communication", d: "Discussions stay in approved channels — your workspace, our PM and dev team only." },
  { t: "Restricted project access", d: "Sensitive projects can be scoped to a smaller, named team where appropriate." },
];

const security = [
  { icon: Lock, t: "Encrypted in transit", d: "All credentials and files move over secure, encrypted channels." },
  { icon: Database, t: "Controlled storage", d: "Project data is stored in access-controlled systems with auditable access." },
  { icon: Users, t: "Restricted internal access", d: "Only the PM, developers and designers assigned to your account can access project data." },
  { icon: FileLock2, t: "Credential hygiene", d: "Client credentials are rotated when handed back and removed from our systems on closeout." },
];

function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 bg-grid-soft" aria-hidden />
      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-[11px] font-medium text-muted-foreground shadow-soft md:text-xs">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            Confidential by default
          </div>
          <h1 className="mt-5 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            NDA & <span className="text-gradient-brand">Confidentiality</span>
          </h1>
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            We built our workflow around one principle: your clients stay yours, and your backend operations stay invisible. Here's how we protect both.
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

function NDAPage() {
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
                Agencies trust us with their clients' projects. That trust is the foundation of every engagement we run. This page explains the commitments and operational standards that protect your business.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {[
                  ["1", "Confidentiality commitment", "commitment"],
                  ["2", "White label protection", "white-label"],
                  ["3", "Agency-safe workflow", "agency-safe"],
                  ["4", "No client poaching policy", "no-poaching"],
                  ["5", "NDA-friendly operations", "nda-ops"],
                  ["6", "Restricted internal access", "access"],
                  ["7", "Secure data handling", "security"],
                  ["8", "Partnership philosophy", "philosophy"],
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

        <Section id="commitment" eyebrow="01" title="Confidentiality commitment">
          <p>Confidentiality isn't an add-on — it's a default setting on every engagement.</p>
          <BulletList items={commitment} />
        </Section>

        <Section id="white-label" eyebrow="02" title="White label protection">
          <p>Our entire delivery model is designed to keep your brand front and center while we stay quietly in the background.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {whiteLabel.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-brand-foreground"><Icon className="h-4.5 w-4.5" /></div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="agency-safe" eyebrow="03" title="Agency-safe workflow">
          <p>We plug into your way of working — not the other way around.</p>
          <BulletList items={agencySafe} />
        </Section>

        <Section id="no-poaching" eyebrow="04" title="No client poaching policy">
          <p>This is the most important commitment we make to agency partners. It's non-negotiable.</p>
          <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand"><UserX className="h-4.5 w-4.5" /></div>
            <div className="text-sm text-ink">Your clients are yours. Period.</div>
          </div>
          <BulletList items={poaching} />
        </Section>

        <Section id="nda-ops" eyebrow="05" title="NDA-friendly operations">
          <p>We're set up to sign NDAs quickly and operate inside their boundaries from day one.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {ndaOps.map(({ t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand"><FileLock2 className="h-4.5 w-4.5" /></div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="access" eyebrow="06" title="Restricted internal access">
          <p>Only the people who need to work on your project can see it.</p>
          <BulletList items={[
            "Access is granted on a need-to-know basis to the assigned PM and delivery team.",
            "Credentials and sensitive assets are stored in access-controlled systems.",
            "Team members are bound by internal confidentiality obligations.",
            "Access is revoked when team members rotate off an account.",
          ]} />
        </Section>

        <Section id="security" eyebrow="07" title="Secure data handling">
          <p>Modern, sensible security practices protect everything you share with us.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {security.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand"><Icon className="h-4.5 w-4.5" /></div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{t}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="philosophy" eyebrow="08" title="Partnership philosophy">
          <p>We're not a freelancer marketplace and we're not a body-shop. We're a long-term backend partner for agencies that take their craft seriously.</p>
          <div className="rounded-2xl border border-border bg-ink p-6 text-brand-foreground md:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">
              <HandshakeIcon className="h-4 w-4" /> Our promise
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-foreground/85">
              Show up reliably. Respect the agency's relationship with its clients. Communicate clearly. Ship clean work. Stay invisible when needed, available when called. That's the partnership.
            </p>
          </div>
        </Section>

        {/* Final CTA */}
        <section className="py-12 md:py-20">
          <div className="container-page">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated to-brand-soft p-8 text-center md:p-12">
              <h2 className="text-balance text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                Looking for a confidential white label partner?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
                Scale your agency safely with a backend team built around discretion, reliability and long-term partnership.
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
