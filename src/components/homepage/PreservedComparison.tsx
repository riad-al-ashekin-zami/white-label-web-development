import { MessageSquareOff, Clock, AlertTriangle, Smartphone, Search, Repeat, CheckCircle2, XCircle } from "lucide-react";
function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand md:text-xs">{eyebrow}</div>
      <h2 className="mt-3 text-balance text-[26px] font-semibold leading-tight tracking-tight text-ink sm:text-3xl md:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground md:mt-4 md:text-base">{sub}</p>}
    </div>
  );
}

/* ---------- PROBLEM ---------- */
const problems = [
  { icon: MessageSquareOff, title: "Developers who go dark", desc: "Freelancers vanish mid-project, leaving you to explain delays to your client." },
  { icon: Clock, title: "Missed deadlines", desc: "Launch dates slip, campaigns stall, and your reputation takes the hit." },
  { icon: AlertTriangle, title: "Inconsistent quality", desc: "Every project looks different. Code is messy. Handovers are painful." },
  { icon: Smartphone, title: "Broken on mobile", desc: "Sites that look great in desktop mockups but fall apart on a phone." },
  { icon: Search, title: "SEO ignored", desc: "Slow sites, poor schema, no semantic structure — and your SEO team has to clean up." },
  { icon: Repeat, title: "Endless revisions", desc: "No structured rounds, no version control, no clear scope." },
];

export function Problem() {
  return (
    <section className="bg-surface py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="The problem"
          title="Agency Growth Shouldn't Depend on Unreliable Developers"
          sub="Most agencies hit the same fulfillment wall. Here's what we hear from new partners every week — and exactly what a white label web development partner is built to fix."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {problems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-background p-5 md:p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
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

/* ---------- COMPARISON ---------- */
const wins = [
  "Strict white label delivery — your brand only",
  "Mutual NDA before kickoff",
  "Dedicated PM with hour-level response time",
  "SEO-ready, semantic, fast-loading code",
  "Structured revision rounds with clear scope",
  "Capacity that flexes from 1 to 30 parallel builds",
  "Documented handovers and clean codebases",
];
const fails = [
  "Generic dev shops talking directly to your clients",
  "No NDA, no formal confidentiality",
  "Slack ghosting and 48h+ response times",
  "Plugin-bloated, slow, hard-to-rank sites",
  "Endless revisions with shifting scope",
  "One developer, one project at a time",
  "Messy handovers your team has to fix",
];

export function Comparison() {
  return (
    <section className="py-16 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies work with us"
          title="A White Label Web Development Partner Built Around Your Operating Model"
          sub="See how a dedicated white label web development partner compares to the typical freelancer or generic dev shop."
        />
        <div className="mt-10 grid gap-5 md:mt-14 md:gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-ink bg-card p-6 shadow-elevated md:p-8">
            <div className="flex items-center justify-between gap-3">
              <h3 className="text-base font-semibold text-ink md:text-lg">White Label Web Development</h3>
              <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">Recommended</span>
            </div>
            <ul className="mt-5 space-y-3 md:mt-6">
              {wins.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="text-base font-semibold text-muted-foreground md:text-lg">Typical freelancers / dev shops</h3>
            <ul className="mt-5 space-y-3 md:mt-6">
              {fails.map((t) => (
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

