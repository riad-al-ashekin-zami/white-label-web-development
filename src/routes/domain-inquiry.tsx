import { useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { toast } from "sonner";
import { Globe, Mail, Phone, User, FileText, ShieldCheck, Send } from "lucide-react";
import { submitLead } from "@/lib/leads.functions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

const PAGE_TITLE = "Domain Inquiry | White Label Web Development";
const PAGE_DESC =
  "Have a domain or website you'd like to discuss with us? Send us the details and we'll get back to you shortly.";
const PAGE_URL = "https://whitelabelwebsitedevelopment.com/domain-inquiry";

export const Route = createFileRoute("/domain-inquiry")({
  head: () => ({
    meta: [
      { name: "robots", content: "noindex, follow" },
      { title: PAGE_TITLE },
      { name: "description", content: PAGE_DESC },
      { property: "og:title", content: PAGE_TITLE },
      { property: "og:description", content: PAGE_DESC },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:title", content: PAGE_TITLE },
      { name: "twitter:description", content: PAGE_DESC },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: BuyWebsitePage,
});

const Schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(4, "Please enter your phone").max(60),
  domain: z.string().trim().min(3, "Please enter the domain name").max(255),
  description: z.string().trim().min(10, "Add a short description (min 10 chars)").max(4000),
});

function BuyWebsitePage() {
  const navigate = useNavigate();
  const send = useServerFn(submitLead);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
    description: "",
    company_website: "", // honeypot
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
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

    // Fire both channels in parallel, but never let one failure block the other.
    const formspreePromise = fetch("https://formspree.io/f/xnjedypj", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: parsed.data.name,
        email: parsed.data.email,
        phone: parsed.data.phone,
        domain: parsed.data.domain,
        description: parsed.data.description,
        _subject: `Domain inquiry: ${parsed.data.domain}`,
        source_page: "/domain-inquiry",
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
        website_url: parsed.data.domain,
        service_needed: "Domain Inquiry",
        project_details: parsed.data.description,
        preferred_contact: "Email",
        source_page: "/domain-inquiry",
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
      toast.success("Request sent! We'll email you shortly.");
      navigate({ to: "/thank-you" });
      return;
    }

    setSubmitting(false);
    toast.error("Could not send your request. Please try again or email us directly.");
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Toaster />
      <main className="pt-28 pb-20">
        <section className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-4 py-1.5 text-xs font-medium text-muted-foreground">
              <Globe className="h-3.5 w-3.5" /> Buy a Website
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Interested in one of our websites?
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us which domain you'd like to buy. We'll reply with pricing, a live preview and the full transfer process.
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
                <Input id="name" value={form.name} onChange={set("name")} placeholder="Your name" className="mt-1.5" />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>

              <div className="md:col-span-1">
                <Label htmlFor="phone" className="flex items-center gap-1.5">
                  <Phone className="h-3.5 w-3.5" /> Phone
                </Label>
                <Input id="phone" value={form.phone} onChange={set("phone")} placeholder="+1 555 000 0000" className="mt-1.5" />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="email" className="flex items-center gap-1.5">
                  <Mail className="h-3.5 w-3.5" /> Email
                </Label>
                <Input id="email" type="email" value={form.email} onChange={set("email")} placeholder="you@company.com" className="mt-1.5" />
                {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="domain" className="flex items-center gap-1.5">
                  <Globe className="h-3.5 w-3.5" /> Domain name you're interested in
                </Label>
                <Input
                  id="domain"
                  value={form.domain}
                  onChange={set("domain")}
                  placeholder="example.com"
                  className="mt-1.5"
                />
                {errors.domain && <p className="mt-1 text-xs text-destructive">{errors.domain}</p>}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="description" className="flex items-center gap-1.5">
                  <FileText className="h-3.5 w-3.5" /> Description
                </Label>
                <Textarea
                  id="description"
                  value={form.description}
                  onChange={set("description")}
                  placeholder="Tell us why you're interested, intended use, budget range, timeline…"
                  rows={5}
                  className="mt-1.5"
                />
                {errors.description && <p className="mt-1 text-xs text-destructive">{errors.description}</p>}
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" /> Your details stay private. No spam, ever.
              </p>
              <Button type="submit" disabled={submitting} className="rounded-full px-6">
                {submitting ? "Sending…" : (<>Send inquiry <Send className="ml-1.5 h-4 w-4" /></>)}
              </Button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
