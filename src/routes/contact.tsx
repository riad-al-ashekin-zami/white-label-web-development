import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { toast } from "sonner";
import { submitLead } from "@/lib/leads.functions";
import {
  Mail,
  Phone,
  User,
  FileText,
  ShieldCheck,
  Send,
  Clock,
  Inbox,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const PAGE_TITLE = "Contact Us | WLWD";
const PAGE_DESC =
  "Contact WLWD to discuss a project, ask a question or explore working together. Fast, confidential replies by email.";
const PAGE_URL = "https://whitelabelwebsitedevelopment.com/contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://whitelabelwebsitedevelopment.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Contact",
                  item: PAGE_URL,
                },
              ],
            },
            {
              "@type": "ContactPage",
              name: PAGE_TITLE,
              description: PAGE_DESC,
              url: PAGE_URL,
              isPartOf: {
                "@id": "https://whitelabelwebsitedevelopment.com/#website",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ContactPage,
});

const Schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(4, "Please enter your phone").max(60),
  subject: z.string().trim().min(3, "Please enter a subject").max(160),
  description: z
    .string()
    .trim()
    .min(10, "Add a short description (min 10 chars)")
    .max(4000),
});

const benefits = [
  { icon: Clock, text: "Reply within 1 business day" },
  { icon: ShieldCheck, text: "NDA-friendly from first contact" },
  { icon: CheckCircle2, text: "100% white label delivery" },
  { icon: MessageCircle, text: "Dedicated project manager" },
];

const nextSteps = [
  { icon: Inbox, title: "We review your inquiry", desc: "Within 4 hours during business hours." },
  { icon: Mail, title: "First reply by email", desc: "With next steps and optional NDA." },
  { icon: Clock, title: "Proposal within 3–5 days", desc: "Clear scope, timeline and pricing." },
];

function ContactPage() {
  const navigate = useNavigate();
  const send = useServerFn(submitLead);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
    company_website: "", // honeypot
  });

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (submitting) return;

    const parsed = Schema.safeParse(form);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const iss of parsed.error.issues) errs[String(iss.path[0])] = iss.message;
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Honeypot — silently accept and bail
    if (form.company_website) {
      navigate({ to: "/thank-you" });
      return;
    }

    // Fire both channels in parallel, but never let one failure block the other.
    const formspreePromise = fetch("https://formspree.io/f/mvznwdra", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        subject: parsed.data.subject,
        description: parsed.data.description,
        _subject: `Contact inquiry: ${parsed.data.subject}`,
        source_page: "/contact",
      }),
    })
      .then((r) => (r.ok ? { ok: true as const } : Promise.reject(new Error(`Formspree ${r.status}`))))
      .catch((err) => {
        console.error("Formspree error:", err);
        return { ok: false as const };
      });

    const leadPromise = send({
      data: {
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        service_needed: parsed.data.subject,
        project_details: parsed.data.description,
        preferred_contact: "Email",
        source_page: "/contact",
        company_website: form.company_website,
      },
    })
      .then(() => ({ ok: true as const }))
      .catch((err) => {
        console.error("Lead submit error:", err);
        return { ok: false as const };
      });

    const [fs, lead] = await Promise.all([formspreePromise, leadPromise]);

    if (fs.ok || lead.ok) {
      toast.success("Message sent! We'll email you shortly.");
      navigate({ to: "/thank-you" });
      return;
    }

    setSubmitting(false);
    toast.error("Could not send your message. Please try again or email us directly.");
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Toaster />
      <main className="pt-28 pb-20">
        <section className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Mail className="h-3.5 w-3.5" /> Contact Us
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Send us a quick message. We reply within one business day — confidential, white label, no spam.
            </p>
          </div>

          <form
            onSubmit={onSubmit}
            className="mx-auto mt-10 max-w-2xl rounded-2xl border border-border bg-surface-elevated p-6 shadow-elevated md:p-8"
          >
            {/* honeypot */}
            <input
              type="text"
              name="company_website"
              value={form.company_website}
              onChange={set("company_website")}
              autoComplete="off"
              tabIndex={-1}
              aria-hidden="true"
              className="absolute h-0 w-0 opacity-0"
            />

            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-1">
                <Label htmlFor="name" className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" /> Full name
                </Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className="mt-1.5"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="md:col-span-1">
                <Label htmlFor="phone" className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" /> Phone
                </Label>
                <Input
                  id="phone"
                  value={form.phone}
                  onChange={set("phone")}
                  placeholder="+1 555 000 0000"
                  className="mt-1.5"
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="email" className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={set("email")}
                  placeholder="you@company.com"
                  className="mt-1.5"
                />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="subject" className="flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5" /> Subject of inquiry
                </Label>
                <Input
                  id="subject"
                  value={form.subject}
                  onChange={set("subject")}
                  placeholder="e.g. White label web development partnership"
                  className="mt-1.5"
                />
                {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject}</p>}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="description" className="flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5" /> Description details
                </Label>
                <Textarea
                  id="description"
                  value={form.description}
                  onChange={set("description")}
                  placeholder="Tell us about your project, timeline, budget and anything else we should know."
                  rows={5}
                  className="mt-1.5"
                />
                {errors.description && (
                  <p className="mt-1 text-xs text-destructive">{errors.description}</p>
                )}
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" /> Your details stay private. No spam, ever.
              </p>
              <Button type="submit" disabled={submitting} className="rounded-full px-6">
                {submitting ? (
                  "Sending…"
                ) : (
                  <>
                    Send message <Send className="ml-1.5 h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </form>

          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-4">
            {benefits.map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-xs font-medium text-ink"
              >
                <Icon className="h-3.5 w-3.5 text-brand" />
                {text}
              </div>
            ))}
          </div>
        </section>

        <section className="container-page mt-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-semibold tracking-tight text-ink">
              What happens next
            </h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {nextSteps.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-surface-elevated p-6 text-center shadow-soft"
                >
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-brand-soft text-brand">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-ink">{title}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
