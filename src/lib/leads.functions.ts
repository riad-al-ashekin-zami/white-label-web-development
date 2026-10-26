import { createServerFn } from "@tanstack/react-start";
import { getRequestHeader } from "@tanstack/react-start/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import {
  adminLeadEmail,
  visitorConfirmationEmail,
} from "./email-templates";

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

type SendResult = { ok: true } | { ok: false; error: string };

async function sendEmail(payload: {
  from: string;
  to: string[];
  subject: string;
  html: string;
  reply_to?: string;
}): Promise<SendResult> {
  const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
    const error = "Email service not configured (missing API keys)";
    console.warn(error);
    return { ok: false, error };
  }
  try {
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
      const error = `Resend ${res.status}: ${body.slice(0, 300)}`;
      console.error(error);
      return { ok: false, error };
    }
    return { ok: true };
  } catch (e) {
    const error = e instanceof Error ? e.message : String(e);
    console.error("Resend network error:", error);
    return { ok: false, error };
  }
}

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

    // Request metadata (best-effort; Cloudflare headers when present)
    const fwd = getRequestHeader("x-forwarded-for") || "";
    const ipRaw =
      getRequestHeader("cf-connecting-ip") ||
      getRequestHeader("x-real-ip") ||
      fwd.split(",")[0]?.trim() ||
      "";
    const ip_address = ipRaw.slice(0, 64) || null;
    const country = (getRequestHeader("cf-ipcountry") || "").slice(0, 8) || null;
    const user_agent = (getRequestHeader("user-agent") || "").slice(0, 500) || null;

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
      ip_address,
      country,
      user_agent,
    };

    const { data: inserted, error } = await admin
      .from("leads")
      .insert(row)
      .select("id")
      .single();

    if (error || !inserted) {
      console.error("Lead insert failed:", error);
      throw new Error("Could not save your request. Please try again.");
    }

    const leadId = inserted.id as string;
    const FROM = process.env.EMAIL_FROM || "White Label Web Development <onboarding@resend.dev>";
    const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
    const APP_URL =
      process.env.APP_URL ||
      process.env.SITE_URL ||
      "https://whitelabelwebsitedevelopment.com";
    const CALENDLY_URL = process.env.CALENDLY_URL || "https://calendly.com/";
    const submittedAt = new Date().toISOString();

    const adminTpl = adminLeadEmail({
      name: row.name,
      email: row.email,
      phone: row.phone,
      company_name: row.company_name,
      website_url: row.website_url,
      service_needed: row.service_needed,
      budget: row.budget,
      timeline: row.timeline,
      preferred_contact: row.preferred_contact,
      nda_required: row.nda_required,
      source_page: row.source_page,
      lead_score,
      project_details: row.project_details,
      submitted_at: submittedAt,
      dashboard_url: `${APP_URL.replace(/\/$/, "")}/admin/leads/${leadId}`,
    });

    const visitorTpl = visitorConfirmationEmail({
      name: row.name,
      service_needed: row.service_needed,
      budget: row.budget,
      timeline: row.timeline,
      company_name: row.company_name,
      calendly_url: CALENDLY_URL,
    });

    const adminPromise = ADMIN_EMAIL
      ? sendEmail({
          from: FROM,
          to: [ADMIN_EMAIL],
          subject: adminTpl.subject,
          html: adminTpl.html,
          reply_to: row.email,
        })
      : Promise.resolve<SendResult>({ ok: false, error: "ADMIN_EMAIL not configured" });

    const visitorPromise = sendEmail({
      from: FROM,
      to: [row.email],
      subject: visitorTpl.subject,
      html: visitorTpl.html,
    });

    const [adminRes, visitorRes] = await Promise.all([adminPromise, visitorPromise]);

    const errors: string[] = [];
    if (!adminRes.ok) errors.push(`admin: ${adminRes.error}`);
    if (!visitorRes.ok) errors.push(`visitor: ${visitorRes.error}`);

    // Best-effort status update — never block the user flow.
    try {
      await admin
        .from("leads")
        .update({
          admin_email_sent: adminRes.ok,
          visitor_email_sent: visitorRes.ok,
          last_email_error: errors.length ? errors.join(" | ").slice(0, 1000) : null,
        })
        .eq("id", leadId);
    } catch (e) {
      console.error("Lead email status update failed:", e);
    }

    return { ok: true };
  });
