import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { submitLead } from "@/lib/leads.functions";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight, ArrowLeft, CheckCircle2, Mail, MessageSquare, Slack, Phone,
  Globe, Workflow, Headphones, ShieldCheck, EyeOff, FileLock2, UserX, Lock,
  Timer, LayoutGrid, MessagesSquare, Search, Wrench, Repeat, Star,
  Clock, Send, FileText, Inbox, ClipboardCheck, Rocket, Globe2, Users,
  Sparkles, CircleDot, AlertOctagon, RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Get a Free Quote \u2014 White Label Website Development" },
      { name: "description", content: "Start a confidential white label development partnership. NDA friendly, dedicated PM, fast response \u2014 built for agencies." },
      { property: "og:title", content: "Contact & Get a Free Quote \u2014 White Label Website Development" },
      { property: "og:description", content: "Start a confidential white label development partnership. NDA friendly, dedicated PM, fast response \u2014 built for agencies." },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/contact" },
      { name: "twitter:title", content: "Contact & Get a Free Quote \u2014 White Label Website Development" },
      { name: "twitter:description", content: "Start a confidential white label development partnership. NDA friendly, dedicated PM, fast response \u2014 built for agencies." },
    ],
    links: [
      { rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/contact" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: "{\"@context\": \"https://schema.org\", \"@graph\": [{\"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://whitelabelwebsitedevelopment.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Contact\", \"item\": \"https://whitelabelwebsitedevelopment.com/contact\"}]}, {\"@type\": \"ContactPage\", \"name\": \"Contact & Get a Free Quote \\u2014 White Label Website Development\", \"description\": \"Start a confidential white label development partnership. NDA friendly, dedicated PM, fast response \\u2014 built for agencies.\", \"url\": \"https://whitelabelwebsitedevelopment.com/contact\", \"isPartOf\": {\"@id\": \"https://whitelabelwebsitedevelopment.com/#website\"}}]}",
      },
    ],
  }),
  
  component: ContactPage,
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

/* ---------- VALIDATION SCHEMAS (zod) ---------- */
const stepSchemas = [
  z.object({
    name: z.string().trim().min(2, "Please enter your name").max(100),
    agency: z.string().trim().min(2, "Agency name is required").max(120),
    email: z.string().trim().email("Enter a valid work email").max(255),
    website: z.string().trim().max(255).optional().or(z.literal("")),
  }),
  z.object({
    service: z.string().min(1, "Select a service"),
    projectType: z.string().min(1, "Select a project type"),
    pages: z.string().min(1, "Select page count"),
    platform: z.string().min(1, "Select a platform"),
    timeline: z.string().min(1, "Select a timeline"),
    budget: z.string().min(1, "Select a budget range"),
  }),
  z.object({
    description: z.string().trim().min(10, "Please add at least 10 characters").max(2000),
    references: z.string().trim().max(500).optional().or(z.literal("")),
    features: z.string().trim().max(500).optional().or(z.literal("")),
    maintenance: z.enum(["yes", "no", "maybe"]),
    whiteLabel: z.enum(["yes", "no"]),
  }),
  z.object({
    comms: z.string().min(1, "Pick a preferred channel"),
    nda: z.boolean(),
    consent: z.literal(true, { errorMap: () => ({ message: "Please confirm to continue" }) }),
  }),
];

type FormData = {
  name: string; agency: string; email: string; website: string;
  service: string; projectType: string; pages: string; platform: string; timeline: string; budget: string;
  description: string; references: string; features: string; maintenance: "yes" | "no" | "maybe"; whiteLabel: "yes" | "no";
  comms: string; nda: boolean; consent: boolean;
};

const initial: FormData = {
  name: "", agency: "", email: "", website: "",
  service: "", projectType: "", pages: "", platform: "", timeline: "", budget: "",
  description: "", references: "", features: "", maintenance: "maybe", whiteLabel: "yes",
  comms: "", nda: false, consent: false,
};

/* ---------- HERO + FORM ---------- */
function HeroAndForm() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 bg-grid-soft" aria-hidden />
      <div className="container-page relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          {/* Left: copy */}
          <div className="lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <Mail className="h-3.5 w-3.5 text-brand" />
              Get in touch
            </div>
            <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-ink md:text-5xl lg:text-6xl">
              Let's build your <span className="text-gradient-brand">next client project</span>.
            </h1>
            <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Tell us about a one-off build, an ongoing white label partnership, or a maintenance plan for your client portfolio. We respond within one business day.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                { icon: Timer, label: "Response within 1 business day" },
                { icon: FileLock2, label: "NDA friendly — sent before kickoff" },
                { icon: EyeOff, label: "100% white label delivery" },
                { icon: Headphones, label: "Dedicated PM on every engagement" },
                { icon: Workflow, label: "Agency-focused operational workflow" },
              ].map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3 text-sm text-ink">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface-elevated text-brand">
                    <Icon className="h-4 w-4" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { k: "<1d", v: "First reply" },
                { k: "120+", v: "Agency partners" },
                { k: "9 yrs", v: "Avg. relationship" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border bg-surface-elevated p-4">
                  <div className="text-lg font-semibold text-ink">{s.k}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form card */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-brand/10 via-transparent to-transparent blur-2xl" aria-hidden />
            <div className="relative rounded-2xl border border-border bg-surface-elevated p-2 shadow-elevated">
              <MultiStepForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MULTI-STEP FORM ---------- */
const stepLabels = ["Basics", "Project", "Details", "Submit"];

function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [hp, setHp] = useState("");
  const navigate = useNavigate();
  const send = useServerFn(submitLead);

  const update = <K extends keyof FormData>(k: K, v: FormData[K]) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k as string]) setErrors((e) => { const n = { ...e }; delete n[k as string]; return n; });
  };

  const validateStep = () => {
    const schema = stepSchemas[step];
    const result = schema.safeParse(data);
    if (!result.success) {
      const map: Record<string, string> = {};
      result.error.issues.forEach((i) => { if (i.path[0]) map[i.path[0] as string] = i.message; });
      setErrors(map);
      return false;
    }
    setErrors({});
    return true;
  };

  const next = () => { if (validateStep()) setStep((s) => Math.min(s + 1, stepSchemas.length - 1)); };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    if (!validateStep()) return;
    setSubmitting(true);
    try {
      await send({
        data: {
          name: data.name,
          email: data.email,
          phone: "",
          company_name: data.agency,
          website_url: data.website,
          service_needed: data.service,
          budget: data.budget,
          timeline: data.timeline,
          project_details: [
            data.description,
            data.features ? `\n\nKey features: ${data.features}` : "",
            data.references ? `\n\nReferences: ${data.references}` : "",
            `\n\nProject type: ${data.projectType} | Pages: ${data.pages} | Platform: ${data.platform}`,
            `\nMaintenance: ${data.maintenance} | White-label: ${data.whiteLabel}`,
          ].join(""),
          preferred_contact: data.comms,
          nda_required: data.nda,
          source_page: typeof window !== "undefined" ? window.location.pathname + window.location.search : "/contact",
          referrer: typeof document !== "undefined" ? document.referrer : "",
          company_website: hp,
        },
      });
      navigate({ to: "/thank-you" });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or contact us directly.");
      setSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl bg-background p-6 md:p-8">
      {/* progress */}
      <div className="mb-7">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground">
          <span>Step {step + 1} of {stepLabels.length}</span>
          <span className="text-ink">{stepLabels[step]}</span>
        </div>
        <div className="mt-2 grid grid-cols-4 gap-1.5">
          {stepLabels.map((_, i) => (
            <div key={i} className={`h-1 rounded-full ${i <= step ? "bg-brand" : "bg-muted"}`} />
          ))}
        </div>
      </div>

      {step === 0 && (
        <div className="space-y-5">
          <FieldRow>
            <Field label="Your name" error={errors.name}>
              <Input value={data.name} onChange={(e) => update("name", e.target.value)} placeholder="Jane Doe" maxLength={100} />
            </Field>
            <Field label="Agency name" error={errors.agency}>
              <Input value={data.agency} onChange={(e) => update("agency", e.target.value)} placeholder="Acme Digital" maxLength={120} />
            </Field>
          </FieldRow>
          <FieldRow>
            <Field label="Work email" error={errors.email}>
              <Input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} placeholder="jane@acme.com" maxLength={255} />
            </Field>
            <Field label="Agency website" hint="Optional" error={errors.website}>
              <Input value={data.website} onChange={(e) => update("website", e.target.value)} placeholder="acme.com" maxLength={255} />
            </Field>
          </FieldRow>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-5">
          <FieldRow>
            <Field label="Service needed" error={errors.service}>
              <SelectField value={data.service} onChange={(v) => update("service", v)} placeholder="Choose a service"
                options={["Website Development", "WordPress Build", "WooCommerce", "Landing Pages", "Website Redesign", "Maintenance Plan", "Speed Optimization", "Technical SEO Fixes"]} />
            </Field>
            <Field label="Project type" error={errors.projectType}>
              <SelectField value={data.projectType} onChange={(v) => update("projectType", v)} placeholder="Choose type"
                options={["New build", "Redesign", "Migration", "Ongoing partnership", "One-off fix"]} />
            </Field>
          </FieldRow>
          <FieldRow>
            <Field label="Number of pages" error={errors.pages}>
              <SelectField value={data.pages} onChange={(v) => update("pages", v)} placeholder="Estimate"
                options={["1 page", "2–5 pages", "6–10 pages", "11–25 pages", "25+ pages"]} />
            </Field>
            <Field label="Platform" error={errors.platform}>
              <SelectField value={data.platform} onChange={(v) => update("platform", v)} placeholder="Choose platform"
                options={["WordPress", "WooCommerce", "Webflow", "Shopify", "Custom React / Next.js", "Not sure yet"]} />
            </Field>
          </FieldRow>
          <FieldRow>
            <Field label="Timeline" error={errors.timeline}>
              <SelectField value={data.timeline} onChange={(v) => update("timeline", v)} placeholder="When do you need it?"
                options={["ASAP (within a week)", "2–3 weeks", "1 month", "1–3 months", "Flexible"]} />
            </Field>
            <Field label="Budget range (USD)" error={errors.budget}>
              <SelectField value={data.budget} onChange={(v) => update("budget", v)} placeholder="Select range"
                options={["< $1,000", "$1,000 – $3,000", "$3,000 – $7,500", "$7,500 – $15,000", "$15,000+", "Ongoing retainer"]} />
            </Field>
          </FieldRow>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <Field label="Project description" error={errors.description}>
            <Textarea
              rows={5}
              value={data.description}
              onChange={(e) => update("description", e.target.value)}
              placeholder="Tell us what you're building, who it's for, and any constraints we should know about."
              maxLength={2000}
            />
            <div className="mt-1 text-right text-[11px] text-muted-foreground">{data.description.length}/2000</div>
          </Field>
          <FieldRow>
            <Field label="Reference websites" hint="Optional" error={errors.references}>
              <Input value={data.references} onChange={(e) => update("references", e.target.value)} placeholder="https://..." maxLength={500} />
            </Field>
            <Field label="Required features" hint="Optional" error={errors.features}>
              <Input value={data.features} onChange={(e) => update("features", e.target.value)} placeholder="Booking, multilingual, payments..." maxLength={500} />
            </Field>
          </FieldRow>
          <FieldRow>
            <Field label="Ongoing maintenance needed?" error={errors.maintenance}>
              <RadioGroup
                value={data.maintenance}
                onValueChange={(v) => update("maintenance", v as FormData["maintenance"])}
                className="grid grid-cols-3 gap-2"
              >
                {[
                  { v: "yes", l: "Yes" },
                  { v: "no", l: "No" },
                  { v: "maybe", l: "Maybe" },
                ].map((o) => (
                  <Label
                    key={o.v}
                    htmlFor={`m-${o.v}`}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors ${data.maintenance === o.v ? "border-ink bg-surface" : "border-border bg-background hover:bg-surface"}`}
                  >
                    <RadioGroupItem id={`m-${o.v}`} value={o.v} />
                    <span className="text-ink">{o.l}</span>
                  </Label>
                ))}
              </RadioGroup>
            </Field>
            <Field label="White label requirement?" error={errors.whiteLabel}>
              <RadioGroup
                value={data.whiteLabel}
                onValueChange={(v) => update("whiteLabel", v as FormData["whiteLabel"])}
                className="grid grid-cols-2 gap-2"
              >
                {[
                  { v: "yes", l: "Yes — under our brand" },
                  { v: "no", l: "Not required" },
                ].map((o) => (
                  <Label
                    key={o.v}
                    htmlFor={`w-${o.v}`}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2.5 text-sm transition-colors ${data.whiteLabel === o.v ? "border-ink bg-surface" : "border-border bg-background hover:bg-surface"}`}
                  >
                    <RadioGroupItem id={`w-${o.v}`} value={o.v} />
                    <span className="text-ink">{o.l}</span>
                  </Label>
                ))}
              </RadioGroup>
            </Field>
          </FieldRow>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <Field label="Preferred communication" error={errors.comms}>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {[
                { v: "Email", icon: Mail },
                { v: "Slack", icon: Slack },
                { v: "Call", icon: Phone },
                { v: "Async", icon: MessageSquare },
              ].map(({ v, icon: Icon }) => (
                <button
                  key={v}
                  type="button"
                  onClick={() => update("comms", v)}
                  className={`flex flex-col items-center gap-1.5 rounded-lg border px-3 py-3 text-sm transition-colors ${data.comms === v ? "border-ink bg-surface text-ink" : "border-border bg-background text-muted-foreground hover:bg-surface"}`}
                >
                  <Icon className="h-4 w-4" />
                  {v}
                </button>
              ))}
            </div>
          </Field>

          <div className="rounded-xl border border-border bg-surface p-4">
            <Label className="flex cursor-pointer items-start gap-3">
              <Checkbox checked={data.nda} onCheckedChange={(c) => update("nda", Boolean(c))} className="mt-0.5" />
              <span className="text-sm leading-relaxed text-ink">
                Send me a mutual NDA before our first call.
                <span className="block text-xs font-normal text-muted-foreground">
                  Standard practice for partner agencies — takes under a minute to sign.
                </span>
              </span>
            </Label>
          </div>

          <div className="rounded-xl border border-dashed border-border bg-background p-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2 text-ink">
              <FileText className="h-4 w-4 text-brand" />
              <span className="font-medium">Attach files</span>
              <span className="text-xs font-normal text-muted-foreground">Optional · briefs, sitemaps, brand kits</span>
            </div>
            <p className="mt-2 text-xs">After submission you'll receive a secure upload link in your confirmation email.</p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-4">
            <Label className="flex cursor-pointer items-start gap-3">
              <Checkbox checked={data.consent} onCheckedChange={(c) => update("consent", Boolean(c))} className="mt-0.5" />
              <span className="text-sm leading-relaxed text-ink">
                I understand my information will be used only to respond to this enquiry.
                {errors.consent && <span className="mt-1 block text-xs font-medium text-destructive">{errors.consent}</span>}
              </span>
            </Label>
          </div>
        </div>
      )}

      {/* nav */}
      <div className="mt-8 flex flex-col-reverse items-stretch gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="button"
          variant="ghost"
          onClick={back}
          disabled={step === 0}
          className="rounded-full"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        {step < stepSchemas.length - 1 ? (
          <Button type="button" onClick={next} className="rounded-full px-6">
            Continue <ArrowRight className="h-4 w-4" />
          </Button>
        ) : (
          <Button type="button" onClick={submit} disabled={submitting} className="rounded-full px-6">
            {submitting ? "Submitting..." : (<>Request a Free Quote <Send className="h-4 w-4" /></>)}
          </Button>
        )}
      </div>
    </div>
  );
}

function FieldRow({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-5 sm:grid-cols-2">{children}</div>;
}
function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-baseline justify-between">
        <Label className="text-sm font-medium text-ink">{label}</Label>
        {hint && <span className="text-[11px] text-muted-foreground">{hint}</span>}
      </div>
      {children}
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}
function SelectField({ value, onChange, placeholder, options }: { value: string; onChange: (v: string) => void; placeholder: string; options: string[] }) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger><SelectValue placeholder={placeholder} /></SelectTrigger>
      <SelectContent>
        {options.map((o) => <SelectItem key={o} value={o}>{o}</SelectItem>)}
      </SelectContent>
    </Select>
  );
}

/* ---------- WHY AGENCIES CONTACT US ---------- */
const whyContact = [
  { icon: Timer, title: "Fast turnaround", desc: "Most projects ship in 5–7 business days." },
  { icon: Workflow, title: "Organized workflow", desc: "Same proven seven-step pipeline, every time." },
  { icon: MessagesSquare, title: "Reliable communication", desc: "Dedicated PM, daily standups, plug into your stack." },
  { icon: EyeOff, title: "White label fulfillment", desc: "Your brand. Our execution. Always." },
  { icon: LayoutGrid, title: "Scalable support", desc: "From 1 to 30 parallel projects without losing quality." },
  { icon: Search, title: "SEO-aware development", desc: "Schema, semantic HTML, Core Web Vitals — built in." },
  { icon: Wrench, title: "Maintenance support", desc: "Long-term care plans for your client portfolio." },
  { icon: Repeat, title: "Built for partnerships", desc: "Most partners stay 5+ years. Not a project shop." },
];

function WhyContact() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies contact us"
          title="What you get when you start a conversation"
        />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {whyContact.map(({ icon: Icon, title, desc }) => (
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

/* ---------- WHAT HAPPENS AFTER ---------- */
const afterSteps = [
  { icon: Inbox, title: "Requirement Review", time: "Within 4 hours", desc: "Our PM team reviews your brief and flags any clarifications needed." },
  { icon: Mail, title: "Initial Response", time: "Within 1 business day", desc: "You receive a detailed first reply with NDA and next steps." },
  { icon: Phone, title: "Discovery Discussion", time: "Day 2–3", desc: "30-minute call to align on scope, goals and constraints." },
  { icon: ClipboardCheck, title: "Scope & Proposal", time: "Day 3–5", desc: "Written proposal with timeline, deliverables and committed pricing." },
  { icon: Rocket, title: "Project Kickoff", time: "Within 1 week", desc: "Project board live, PM assigned, first sprint underway." },
];

function AfterSubmission() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="What happens next"
          title="From submit to kickoff in under a week"
          sub="Published response times — not best-case promises."
        />
        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-brand/40 via-border to-transparent md:left-7" aria-hidden />
          <ol className="space-y-5">
            {afterSteps.map(({ icon: Icon, title, time, desc }, i) => (
              <li key={title} className="relative pl-14 md:pl-20">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-background shadow-soft md:h-14 md:w-14">
                  <Icon className="h-4.5 w-4.5 text-brand md:h-5 md:w-5" />
                </div>
                <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold tracking-[0.18em] text-brand">{String(i + 1).padStart(2, "0")}</span>
                      <h3 className="text-base font-semibold text-ink">{title}</h3>
                    </div>
                    <span className="rounded-full border border-border bg-surface px-3 py-1 text-[11px] font-medium text-muted-foreground">
                      {time}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- PARTNERSHIP OPTIONS ---------- */
const options = [
  { icon: Sparkles, title: "One-time projects", desc: "Single builds, redesigns or landing pages on a defined scope." },
  { icon: Repeat, title: "Ongoing white label fulfillment", desc: "Continuous capacity for your sales pipeline — monthly or quarterly." },
  { icon: Wrench, title: "Maintenance partnerships", desc: "Manage your entire client portfolio under monthly care plans." },
  { icon: Headphones, title: "Dedicated agency support", desc: "Embedded engineers and PMs working as your operational backbone." },
  { icon: AlertOctagon, title: "Emergency support", desc: "Priority response for client incidents — 24/7 on top tier." },
];

function PartnershipOptions() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Partnership options"
          title="Pick the engagement that fits your stage"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {options.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-background p-6 transition-all hover:border-ink/20 hover:shadow-soft">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-brand-foreground">
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

/* ---------- COMMUNICATION & SUPPORT ---------- */
const channels = [
  { icon: Mail, label: "Email", desc: "Threaded, archived, searchable." },
  { icon: Slack, label: "Slack Connect", desc: "Shared channel with your team." },
  { icon: MessagesSquare, label: "ClickUp / Asana", desc: "Native project board integration." },
  { icon: Phone, label: "Scheduled calls", desc: "Discovery, planning and reviews." },
];

function CommunicationSupport() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Communication & support"
          title="We work where your team already works"
          sub="Plug us into your existing communication and project management stack."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {channels.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="bg-background p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft text-brand">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-5 text-sm font-semibold text-ink">{label}</div>
                <div className="mt-1 text-sm text-muted-foreground">{desc}</div>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-surface p-7">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Support workflow</div>
            <ul className="mt-5 space-y-4">
              {[
                { t: "Acknowledged in <2h during business hours" },
                { t: "Daily standup notes on active projects" },
                { t: "Structured revision tracking with version history" },
                { t: "Weekly summaries for ongoing engagements" },
                { t: "Monthly white label reports for maintenance" },
              ].map((s) => (
                <li key={s.t} className="flex items-start gap-3 text-sm text-ink">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                  <span>{s.t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TRUST & RELIABILITY ---------- */
const trust = [
  { icon: UserX, label: "No client poaching, contractually" },
  { icon: FileLock2, label: "NDA-friendly workflow" },
  { icon: Lock, label: "Confidential communication" },
  { icon: ShieldCheck, label: "Agency-safe access systems" },
  { icon: EyeOff, label: "Invisible backend execution" },
  { icon: RefreshCw, label: "Reliable long-term support" },
];

function TrustReliability() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader
          eyebrow="Trust & reliability"
          title="Confidentiality engineered into every workflow"
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trust.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-xl border border-border bg-background p-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-ink text-brand-foreground">
                <Icon className="h-4.5 w-4.5" />
              </div>
              <span className="text-sm font-medium text-ink">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- GLOBAL ---------- */
function GlobalSupport() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <div className="grid gap-10 rounded-3xl border border-border bg-card p-10 md:p-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Global agency support</div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Working with agencies across every timezone
            </h2>
            <p className="mt-5 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Remote-first by design. Overlapping hours with North America, Europe and APAC — and async-friendly workflows for everywhere in between.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { k: "27", v: "Countries" },
                { k: "3 regions", v: "Coverage" },
                { k: "16h/day", v: "Live overlap" },
                { k: "24/7", v: "Emergency" },
              ].map((s) => (
                <div key={s.v} className="rounded-xl border border-border bg-surface p-4">
                  <div className="text-xl font-semibold text-ink">{s.k}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                <Globe2 className="h-4 w-4 text-brand" /> Live coverage
              </div>
              <ul className="mt-5 space-y-3">
                {[
                  { region: "North America", hours: "9am – 9pm ET", dot: "bg-emerald-500" },
                  { region: "Europe", hours: "8am – 8pm CET", dot: "bg-emerald-500" },
                  { region: "APAC", hours: "9am – 7pm SGT", dot: "bg-emerald-500" },
                  { region: "On-call", hours: "24/7 emergencies", dot: "bg-brand" },
                ].map((r) => (
                  <li key={r.region} className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 rounded-full ${r.dot}`} />
                      <span className="text-sm font-medium text-ink">{r.region}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{r.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
const testimonials = [
  { quote: "Their onboarding was the smoothest vendor experience we've had. NDA, PM intro and project board — all live in 24 hours.", name: "Hannah Reid", role: "Founder, Northbeam SEO" },
  { quote: "Replies arrive within hours. Always. Most agencies don't even respond to RFPs that fast.", name: "Marcus Patel", role: "MD, Field Marketing Group" },
  { quote: "From first email to first deliverable in seven days. They earned a long-term contract on day one.", name: "Sara Bennett", role: "Owner, Bennett Digital" },
];

function Testimonials() {
  return (
    <section className="bg-surface py-24 md:py-32">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="What new partners say after week one" />
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
  { q: "How fast do you respond to new enquiries?", a: "Within one business day for the first reply. Most enquiries get an initial acknowledgement within 4 hours during business hours." },
  { q: "Do you sign an NDA before our first call?", a: "Yes. Tick the NDA box in the form and we'll send a mutual NDA the same day — before any sensitive details are exchanged." },
  { q: "Can you work entirely under our branding?", a: "Yes. Every staging URL, document, ticket reply and report is presented under your agency's brand. Your client never sees us." },
  { q: "What platforms and stacks do you support?", a: "WordPress (custom, Elementor, Gutenberg), WooCommerce, Webflow, Shopify, and custom React / Next.js builds. Happy to work in your preferred stack." },
  { q: "Do you offer ongoing maintenance?", a: "Yes — three plans covering updates, monitoring, security, backups and content edits. Add maintenance to any new build." },
  { q: "How does pricing work?", a: "Fixed-price for defined scope projects, monthly retainers for ongoing partnerships, and tiered plans for maintenance. You receive a written proposal within 3–5 business days." },
  { q: "Can you handle ongoing fulfillment for our agency?", a: "Absolutely. Most of our partners run continuous pipelines with us — anywhere from 5 to 30+ active projects at any time." },
];

function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page max-w-3xl">
        <SectionHeader eyebrow="FAQ" title="Lead questions, answered" />
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
    <section className="pb-24 md:pb-32">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface-elevated to-brand-soft p-10 text-center md:p-20">
          <div className="absolute inset-0 bg-grid-soft opacity-60" aria-hidden />
          <div className="relative mx-auto max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-ink shadow-soft">
              <Users className="h-3.5 w-3.5 text-brand" /> Now onboarding new agency partners
            </div>
            <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              Let's discuss your next project.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              Send a brief or book a 20-minute discovery call. Confidential, no obligation, no sales theatre.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <a href="#top">Request a Free Quote <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-background px-6">
                <a href="#top">Book a Discovery Call</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */
function ContactPage() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroAndForm />
        <WhyContact />
        <AfterSubmission />
        <PartnershipOptions />
        <CommunicationSupport />
        <TrustReliability />
        <GlobalSupport />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
