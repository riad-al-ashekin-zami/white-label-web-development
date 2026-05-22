import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";

const LeadSchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(60).optional().or(z.literal("")),
  company_name: z.string().trim().max(160).optional().or(z.literal("")),
  website_url: z.string().trim().max(255).optional().or(z.literal("")),
  service_needed: z.string().trim().max(160).optional().or(z.literal("")),
  budget: z.string().trim().max(60).optional().or(z.literal("")),
  timeline: z.string().trim().max(60).optional().or(z.literal("")),
  project_details: z.string().trim().max(4000).optional().or(z.literal("")),
  preferred_contact: z.string().trim().max(60).optional().or(z.literal("")),
  nda_required: z.boolean().optional(),
  source_page: z.string().trim().max(500).optional().or(z.literal("")),
  referrer: z.string().trim().max(500).optional().or(z.literal("")),
  // honeypot — must be empty
  company_website: z.string().max(0).optional().or(z.literal("")),
});

const FREE_EMAIL_DOMAINS = new Set([
  "gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "live.com",
  "icloud.com", "aol.com", "proton.me", "protonmail.com", "gmx.com", "mail.com",
]);

function scoreLead(d: z.infer<typeof LeadSchema>): "High" | "Medium" | "Low" | "Unreviewed" {
  let score = 0;
  const domain = d.email.split("@")[1]?.toLowerCase() ?? "";
  const isFree = FREE_EMAIL_DOMAINS.has(domain);
  if (!isFree) score += 2;
  if (d.company_name && d.company_name.length > 1) score += 1;
  if (d.website_url && d.website_url.length > 3) score += 1;

  const budget = (d.budget || "").toLowerCase();
  if (/15,?000|retainer|ongoing/.test(budget)) score += 3;
  else if (/7,?500|7500/.test(budget)) score += 2;
  else if (/3,?000|3000/.test(budget)) score += 1;
  else if (/< ?\$?1,?000|<1000/.test(budget)) score -= 1;

  const timeline = (d.timeline || "").toLowerCase();
  if (/asap|week/.test(timeline)) score += 1;

  if ((d.project_details || "").length > 200) score += 1;
  if (d.nda_required) score += 1;

  if (score >= 5) return "High";
  if (score >= 2) return "Medium";
  if (score <= 0) return "Low";
  return "Medium";
}

const GATEWAY_URL = "https://connector-gateway.lovable.dev/resend";

async function sendEmail(payload: {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
}) {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    console.warn("Resend keys missing — skipping email send");
    return;
  }
  const res = await fetch(`${GATEWAY_URL}/emails`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": RESEND_API_KEY,
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const body = await res.text();
    console.error(`Resend send failed [${res.status}]: ${body}`);
  }
}

const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

export const submitLead = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => LeadSchema.parse(input))
  .handler(async ({ data }) => {
    // Honeypot — silently accept and bail
    if (data.company_website) {
      return { ok: true };
    }

    const SUPABASE_URL = process.env.SUPABASE_URL!;
    const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    const admin = createClient(SUPABASE_URL, SERVICE_KEY, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const lead_score = scoreLead(data);
    const sourceCombined = data.referrer
      ? `${data.source_page || ""} (ref: ${data.referrer})`.slice(0, 500)
      : data.source_page || null;

    const row = {
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      company_name: data.company_name || null,
      website_url: data.website_url || null,
      service_needed: data.service_needed || null,
      budget: data.budget || null,
      timeline: data.timeline || null,
      project_details: data.project_details || null,
      preferred_contact: data.preferred_contact || null,
      nda_required: !!data.nda_required,
      source_page: sourceCombined,
      lead_score,
    };

    const { error } = await admin.from("leads").insert(row);
    if (error) {
      console.error("Lead insert failed:", error);
      throw new Error("Could not save your request. Please try again.");
    }

    const FROM = process.env.EMAIL_FROM || "Whitelayer <onboarding@resend.dev>";
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const submittedAt = new Date().toISOString();

    const rows: [string, string][] = [
      ["Name", row.name],
      ["Email", row.email],
      ["Phone", row.phone || "—"],
      ["Company", row.company_name || "—"],
      ["Website", row.website_url || "—"],
      ["Service", row.service_needed || "—"],
      ["Budget", row.budget || "—"],
      ["Timeline", row.timeline || "—"],
      ["Preferred contact", row.preferred_contact || "—"],
      ["NDA required", row.nda_required ? "Yes" : "No"],
      ["Source page", row.source_page || "—"],
      ["Lead score", lead_score],
      ["Submitted", submittedAt],
    ];

    const adminHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#111">
        <h2 style="margin:0 0 16px">New White Label Lead Received</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:8px 10px;border-bottom:1px solid #eee;color:#666;width:160px">${escapeHtml(k)}</td><td style="padding:8px 10px;border-bottom:1px solid #eee">${escapeHtml(v)}</td></tr>`,
            )
            .join("")}
        </table>
        <h3 style="margin:20px 0 8px">Project details</h3>
        <p style="white-space:pre-wrap;font-size:14px;line-height:1.55;background:#f7f7f8;padding:14px;border-radius:8px">${escapeHtml(row.project_details || "—")}</p>
      </div>`;

    const visitorHtml = `
      <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#111">
        <h2 style="margin:0 0 12px">We received your project request</h2>
        <p style="font-size:15px;line-height:1.6;color:#333">Hi ${escapeHtml(row.name.split(" ")[0] || "there")},</p>
        <p style="font-size:15px;line-height:1.6;color:#333">
          Thanks for reaching out to Whitelayer. We received your project request and our team
          will review the details and get back to you within one business day.
        </p>
        <p style="font-size:15px;line-height:1.6;color:#333">
          If you want to move faster, you can also book a discovery call directly:
        </p>
        <p style="margin:18px 0">
          <a href="https://calendly.com/" style="background:#111;color:#fff;padding:12px 20px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600">Book a discovery call</a>
        </p>
        <p style="font-size:14px;color:#666;line-height:1.6">
          We look forward to learning more about your agency and how we can support your client projects.
        </p>
        <p style="font-size:14px;color:#666;margin-top:24px">— The Whitelayer Team</p>
      </div>`;

    // Fire-and-forget so a slow Resend doesn't block the redirect.
    const sends: Promise<void>[] = [];
    if (ADMIN_EMAIL) {
      sends.push(
        sendEmail({
          from: FROM,
          to: [ADMIN_EMAIL],
          subject: "New White Label Lead Received",
          html: adminHtml,
          reply_to: row.email,
        }),
      );
    }
    sends.push(
      sendEmail({
        from: FROM,
        to: [row.email],
        subject: "We Received Your Project Request",
        html: visitorHtml,
      }),
    );
    await Promise.allSettled(sends);

    return { ok: true };
  });
