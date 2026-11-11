import { useState } from "react";
import { Send, ShieldCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { trackHomepage } from "@/config/homepage";

export function QuoteForm({ location }: { location: "hero" | "footer" }) {
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "pending" || status === "success") return;
    const data = new FormData(e.currentTarget);
    setStatus("pending");
    try {
      const response = await fetch("https://formspree.io/f/mvznwdra", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ name: data.get("name"), email: data.get("email"), subject: data.get("project_type"), description: data.get("brief"), source_page: "/", form_location: location, _subject: `Homepage quote: ${data.get("project_type")}` }) });
      if (!response.ok) throw new Error("Submission failed");
      setStatus("success");
      trackHomepage("generate_lead", { form_location: location });
    } catch { setStatus("error"); }
  }
  return <div className="home-quote-card">
    <div className="home-form-heading"><span className="home-kicker">LET’S BUILD SOMETHING</span><h2>Get your fixed quote</h2><p>A clear scope. A fixed price. Your brand.</p></div>
    {status === "success" ? <div className="home-form-success" role="status"><CheckCircle2 size={32} /><h3>Brief received. Thank you!</h3><p>We’ll email you within one business day.</p></div> : <form onSubmit={submit} aria-label={`${location} quote form`}>
      <div className="home-form-pair">
        <div><Label htmlFor={`${location}-name`}>Name</Label><Input id={`${location}-name`} name="name" autoComplete="name" required maxLength={120} placeholder="Your name" /></div>
        <div><Label htmlFor={`${location}-email`}>Work email</Label><Input id={`${location}-email`} name="email" type="email" autoComplete="email" required maxLength={255} placeholder="you@agency.com" /></div>
      </div>
      <div><Label htmlFor={`${location}-type`}>Project type</Label><select id={`${location}-type`} name="project_type" required defaultValue=""><option value="" disabled>Select your project</option>{["Landing page", "Starter site", "WordPress site", "WooCommerce store", "Maintenance", "Other"].map(t => <option key={t}>{t}</option>)}</select></div>
      <div><Label htmlFor={`${location}-brief`}>Brief</Label><Textarea id={`${location}-brief`} name="brief" required minLength={10} maxLength={4000} rows={2} placeholder="A little about your project, scope and timeline…" /></div>
      {status === "error" && <p className="text-destructive" role="alert">Your brief could not be sent. Please try again.</p>}
      <Button className="home-button w-full" type="submit" disabled={status === "pending"}>{status === "pending" ? "Sending…" : "Send my brief"}<Send /></Button>
      <p className="home-form-note"><ShieldCheck size={14} /> Confidential from the first conversation.</p>
    </form>}
  </div>;
}