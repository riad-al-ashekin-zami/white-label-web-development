import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck, Lock, FileLock2, EyeOff, Database, Cookie, Users,
  Mail, Server, ArrowRight, CheckCircle2, UserCheck, Globe2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | WLWD" },
      { name: "robots", content: "noindex, follow" },
      { name: "description", content: "How WLWD collects, uses, stores and protects personal information, including privacy rights and contact details." },
      { property: "og:title", content: "Privacy Policy | WLWD" },
      { property: "og:description", content: "How WLWD collects, uses, stores and protects personal information, including privacy rights and contact details." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/privacy" },
      { name: "twitter:title", content: "Privacy Policy | WLWD" },
      { name: "twitter:description", content: "How WLWD collects, uses, stores and protects personal information, including privacy rights and contact details." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/privacy" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Privacy Policy\", \"item\": \"https://whitelabelwebsitedevelopment.com/privacy\"}]}, {\"@type\": \"WebPage\", \"name\": \"Privacy Policy | WLWD\", \"description\": \"How WLWD collects, uses, stores and protects personal information, including privacy rights and contact details.\", \"url\": \"https://whitelabelwebsitedevelopment.com/privacy\", \"isPartOf\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#website\"}}]}",
      },
    ],
  }),
  
  component: PrivacyPage,
});

const lastUpdated = "May 22, 2026";

const collectItems = [
  { icon: Mail, title: "Contact form submissions", desc: "Name, email, company, phone (optional) and any details you share when requesting a quote, proposal or call." },
  { icon: Users, title: "Agency & company information", desc: "Agency name, role, region and the type of services you're exploring with us." },
  { icon: FileLock2, title: "Project requirements", desc: "Briefs, scope notes, target timelines, references and any files you choose to share for scoping." },
  { icon: Server, title: "Technical & browser data", desc: "IP address, browser type, device, referring page and pages viewed — used for security and site performance." },
  { icon: Cookie, title: "Cookies & analytics", desc: "Privacy-friendly analytics to understand which pages help agencies and where the experience can be improved." },
];

const useItems = [
  "Communicating about your project, proposal or active engagement",
  "Preparing quotes, scopes of work and timelines",
  "Delivering services, staging links, revisions and final files",
  "Providing support and account assistance",
  "Improving website content, performance and UX",
  "Monitoring for security, abuse and fraudulent activity",
];

const whiteLabelPoints = [
  { icon: EyeOff, title: "Agency-safe workflow", desc: "We work behind your brand. Your clients never see us, hear from us or learn we were involved." },
  { icon: ShieldCheck, title: "Confidential by default", desc: "Briefs, files and credentials shared with us are treated as confidential — internally and externally." },
  { icon: FileLock2, title: "NDA-friendly operations", desc: "We sign mutual NDAs before kickoff and can adapt to your standard partner agreements." },
  { icon: UserCheck, title: "No client poaching", desc: "We do not contact, market to or solicit your clients — during or after an engagement." },
  { icon: Lock, title: "Restricted internal access", desc: "Access to project data is limited to the PM, developers and designers assigned to your account." },
];

const thirdParties = [
  { name: "Supabase", purpose: "Secure database and authentication for lead and project records." },
  { name: "Resend", purpose: "Transactional email delivery for proposals, replies and notifications." },
  { name: "Analytics tools", purpose: "Aggregated, privacy-respecting traffic and UX analytics." },
  { name: "Hosting infrastructure", purpose: "Edge hosting and CDN for website delivery and uptime." },
  { name: "Calendly / scheduling", purpose: "Booking discovery and review calls when you choose to." },
];

const rights = [
  "Request a copy of the information we hold about you",
  "Update or correct submitted information",
  "Request deletion of your data, subject to legal retention",
  "Withdraw consent for marketing communication at any time",
  "Raise a privacy concern and receive a response within a reasonable timeframe",
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
            Privacy & Confidentiality
          </div>
          <h1 className="mt-5 text-balance text-[34px] font-semibold leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl">
            Privacy <span className="text-gradient-brand">Policy</span>
          </h1>
          <p className="mt-5 text-pretty text-[15px] leading-relaxed text-muted-foreground md:text-lg">
            How we collect, use and protect personal information, written in plain language.
          </p>
          <div className="mt-6 text-xs text-muted-foreground">
            Last updated: <span className="font-medium text-ink">{lastUpdated}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section({
  id, eyebrow, title, children,
}: { id?: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-12 md:py-16">
      <div className="container-page">
        <div className="mx-auto max-w-3xl">
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:text-xs">{eyebrow}</div>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />

        {/* Intro / contents */}
        <section className="pb-4">
          <div className="container-page">
            <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface-elevated p-6 md:p-8">
              <p className="text-[15px] leading-relaxed text-ink">
                WLWD ("we", "us", "our") collects and processes information when you visit this site or communicate with us. This policy explains what information we collect when you visit our site or work with us, how we use it, and the safeguards we apply to protect your agency and your clients.
              </p>
              <div className="mt-6 grid gap-2 sm:grid-cols-2">
                {[
                  ["1", "Information we collect", "collect"],
                  ["2", "How information is used", "use"],
                  ["3", "White label & confidentiality", "white-label"],
                  ["4", "Third-party services", "third-parties"],
                  ["5", "Data security", "security"],
                  ["6", "Cookies & analytics", "cookies"],
                  ["7", "Your rights", "rights"],
                  ["8", "Contact us", "contact"],
                ].map(([n, label, href]) => (
                  <a
                    key={href}
                    href={`#${href}`}
                    className="flex items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-sm text-ink transition-colors hover:border-ink/20"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-brand">{n}</span>
                      {label}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 1. Information we collect */}
        <Section id="collect" eyebrow="01" title="Information we collect">
          <p>We collect information you choose to share with us, plus a small amount of technical data needed to run the site safely.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {collectItems.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 2. Use */}
        <Section id="use" eyebrow="02" title="How information is used">
          <p>We use the information you share to deliver a smooth, professional engagement — nothing more, nothing surprising.</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {useItems.map((u) => (
              <li key={u} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{u}</span>
              </li>
            ))}
          </ul>
          <p>We do not sell your information. We do not share it for advertising. We do not use your project details to train public models.</p>
        </Section>

        {/* 3. White label */}
        <Section id="white-label" eyebrow="03" title="White label & confidentiality">
          <p>This is the part that matters most to agencies. Our entire workflow is built around staying invisible and protecting your client relationships.</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {whiteLabelPoints.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink text-brand-foreground">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <h3 className="mt-3 text-sm font-semibold text-ink">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* 4. Third parties */}
        <Section id="third-parties" eyebrow="04" title="Third-party services">
          <p>We rely on a small set of trusted providers to run our operations. These providers may process limited technical data on our behalf under their own security and privacy obligations.</p>
          <div className="overflow-hidden rounded-xl border border-border">
            {thirdParties.map((p, i) => (
              <div
                key={p.name}
                className={`flex flex-col gap-1 bg-card p-4 sm:flex-row sm:items-center sm:gap-6 ${i !== thirdParties.length - 1 ? "border-b border-border" : ""}`}
              >
                <div className="w-40 shrink-0 text-sm font-semibold text-ink">{p.name}</div>
                <div className="text-sm leading-relaxed text-muted-foreground">{p.purpose}</div>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Security */}
        <Section id="security" eyebrow="05" title="Data security">
          <p>We apply reasonable, modern security practices to protect the information you share with us:</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              { icon: Lock, t: "Encrypted in transit", d: "HTTPS across all surfaces — website, dashboards and APIs." },
              { icon: Database, t: "Secure storage", d: "Project and lead data lives in access-controlled databases." },
              { icon: Users, t: "Restricted access", d: "Only assigned team members can access an account's data." },
              { icon: Server, t: "Hardened infrastructure", d: "Hosted on reputable cloud providers with regular updates." },
            ].map(({ icon: Icon, t, d }) => (
              <li key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t}</div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ul>
          <p>No online system is perfectly secure. If we ever become aware of an incident that materially affects your data, we will notify you promptly and explain what happened.</p>
        </Section>

        {/* 6. Cookies */}
        <Section id="cookies" eyebrow="06" title="Cookies & analytics">
          <p>We use a small number of cookies and lightweight analytics to understand how the site is used and to keep it fast and reliable. Specifically, we look at:</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              "Aggregated pageviews and traffic sources",
              "Anonymous usage patterns and scroll depth",
              "Performance metrics (Core Web Vitals)",
              "Errors and broken interactions",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
          <p>You can disable cookies in your browser. The site will continue to work, though some functionality may be limited.</p>
        </Section>

        {/* 7. Rights */}
        <Section id="rights" eyebrow="07" title="Your rights">
          <p>You stay in control of the information you've shared with us. At any time you can:</p>
          <ul className="space-y-2">
            {rights.map((r) => (
              <li key={r} className="flex items-start gap-2 rounded-lg border border-border bg-card p-3 text-sm text-ink">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
          <p>To exercise any of these rights, email us at the address below. We respond to verified requests within a reasonable timeframe.</p>
        </Section>

        {/* 8. Contact */}
        <section id="contact" className="py-12 md:py-20">
          <div className="container-page">
            <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-border bg-ink p-8 text-brand-foreground md:p-12">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">
                <Globe2 className="h-4 w-4" /> Contact
              </div>
              <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                Questions about this policy?
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-brand-foreground/75">
                We're happy to walk through how we handle agency and client data, sign an NDA before any project details are shared, or update information you've submitted to us.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href="mailto:privacy@whitelabelwebsitedevelopment.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-brand-foreground" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand-foreground/70">Privacy</div>
                    <div className="text-sm font-semibold">privacy@whitelabelwebsitedevelopment.com</div>
                  </div>
                </a>
                <a
                  href="mailto:hello@whitelabelwebsitedevelopment.com"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <Mail className="h-5 w-5 text-brand-foreground" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand-foreground/70">General</div>
                    <div className="text-sm font-semibold">hello@whitelabelwebsitedevelopment.com</div>
                  </div>
                </a>
              </div>
              <p className="mt-8 text-xs text-brand-foreground/60">
                We may update this policy from time to time. When we do, we'll revise the "Last updated" date at the top of this page.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
