// Reusable transactional email templates for the lead workflow.
// Minimal, premium B2B style: white bg, dark text, indigo accent, mobile-friendly.

const BRAND = "White Label Website Development";
const ACCENT = "#4f46e5"; // indigo-600
const TEXT = "#0f172a"; // slate-900
const MUTED = "#475569"; // slate-600
const BORDER = "#e2e8f0"; // slate-200
const BG_SOFT = "#f8fafc"; // slate-50

export const escapeHtml = (s: string) =>
  String(s ?? "").replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

function shell(opts: { preview: string; title: string; bodyInner: string }) {
  return `<!doctype html><html><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><title>${escapeHtml(opts.title)}</title></head>
  <body style="margin:0;padding:0;background:${BG_SOFT};font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${TEXT}">
    <span style="display:none!important;opacity:0;color:transparent;height:0;width:0;overflow:hidden">${escapeHtml(opts.preview)}</span>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${BG_SOFT};padding:32px 16px">
      <tr><td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border:1px solid ${BORDER};border-radius:12px;overflow:hidden">
          <tr><td style="padding:24px 28px;border-bottom:1px solid ${BORDER}">
            <div style="font-size:14px;font-weight:700;letter-spacing:.5px;color:${ACCENT};text-transform:uppercase">${BRAND}</div>
          </td></tr>
          <tr><td style="padding:28px">${opts.bodyInner}</td></tr>
          <tr><td style="padding:18px 28px;border-top:1px solid ${BORDER};background:${BG_SOFT};font-size:12px;color:${MUTED}">
            ${BRAND} — White Label Web Development for Agencies
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body></html>`;
}

function button(href: string, label: string) {
  return `<a href="${escapeHtml(href)}" style="display:inline-block;background:${ACCENT};color:#ffffff;padding:12px 22px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:600">${escapeHtml(label)}</a>`;
}

function h1(text: string) {
  return `<h1 style="margin:0 0 14px;font-size:22px;line-height:1.3;color:${TEXT}">${escapeHtml(text)}</h1>`;
}
function p(text: string) {
  return `<p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:${TEXT}">${escapeHtml(text)}</p>`;
}
function muted(text: string) {
  return `<p style="margin:0 0 8px;font-size:13px;line-height:1.6;color:${MUTED}">${escapeHtml(text)}</p>`;
}

export interface AdminLeadVars {
  name: string;
  email: string;
  phone?: string | null;
  company_name?: string | null;
  website_url?: string | null;
  service_needed?: string | null;
  budget?: string | null;
  timeline?: string | null;
  preferred_contact?: string | null;
  nda_required?: boolean;
  source_page?: string | null;
  lead_score: string;
  project_details?: string | null;
  submitted_at: string;
  dashboard_url: string;
}

export function adminLeadEmail(v: AdminLeadVars) {
  const rows: [string, string][] = [
    ["Name", v.name],
    ["Email", v.email],
    ["Phone / WhatsApp", v.phone || "—"],
    ["Company", v.company_name || "—"],
    ["Website", v.website_url || "—"],
    ["Service Needed", v.service_needed || "—"],
    ["Budget", v.budget || "—"],
    ["Timeline", v.timeline || "—"],
    ["Preferred Contact", v.preferred_contact || "—"],
    ["NDA Required", v.nda_required ? "Yes" : "No"],
    ["Source Page", v.source_page || "—"],
    ["Submitted", v.submitted_at],
    ["Lead Score", v.lead_score],
  ];

  const tableRows = rows
    .map(
      ([k, val]) =>
        `<tr><td style="padding:10px 12px;border-bottom:1px solid ${BORDER};font-size:13px;color:${MUTED};width:170px;vertical-align:top">${escapeHtml(k)}</td><td style="padding:10px 12px;border-bottom:1px solid ${BORDER};font-size:14px;color:${TEXT}">${escapeHtml(val)}</td></tr>`,
    )
    .join("");

  const scoreBadge = `<span style="display:inline-block;background:${BG_SOFT};border:1px solid ${BORDER};color:${ACCENT};font-size:12px;font-weight:600;padding:4px 10px;border-radius:999px">Lead score: ${escapeHtml(v.lead_score)}</span>`;

  const body = `
    ${h1("New white label lead received")}
    <div style="margin:0 0 18px">${scoreBadge}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BORDER};border-radius:10px;overflow:hidden;margin:0 0 18px">${tableRows}</table>
    <h2 style="margin:18px 0 8px;font-size:15px;color:${TEXT}">Project details</h2>
    <div style="white-space:pre-wrap;font-size:14px;line-height:1.6;background:${BG_SOFT};border:1px solid ${BORDER};padding:14px;border-radius:10px;color:${TEXT}">${escapeHtml(v.project_details || "—")}</div>
    <div style="margin:24px 0 4px">${button(v.dashboard_url, "View lead in admin dashboard")}</div>
  `;

  return {
    subject: `New White Label Lead Received — ${v.service_needed || "General Inquiry"}`,
    html: shell({ preview: `${v.name} • ${v.service_needed || "General"} • ${v.lead_score}`, title: "New lead", bodyInner: body }),
  };
}

export interface VisitorConfirmationVars {
  name: string;
  service_needed?: string | null;
  budget?: string | null;
  timeline?: string | null;
  company_name?: string | null;
  calendly_url: string;
}

export function visitorConfirmationEmail(v: VisitorConfirmationVars) {
  const first = (v.name || "there").split(" ")[0];
  const details: [string, string][] = [
    ["Service Needed", v.service_needed || "—"],
    ["Budget", v.budget || "—"],
    ["Timeline", v.timeline || "—"],
    ["Company", v.company_name || "—"],
  ];
  const detailRows = details
    .map(
      ([k, val]) =>
        `<tr><td style="padding:8px 12px;font-size:13px;color:${MUTED};width:160px">${escapeHtml(k)}</td><td style="padding:8px 12px;font-size:14px;color:${TEXT}">${escapeHtml(val)}</td></tr>`,
    )
    .join("");

  const body = `
    ${h1("We received your project request")}
    ${p(`Hi ${first},`)}
    ${p("Thanks for reaching out. We've received your project request and our team will review the details shortly.")}
    ${p("We typically review new agency inquiries quickly and will get back to you with the next step.")}
    ${p("If you'd like to move faster, you can book a discovery call below:")}
    <div style="margin:18px 0 22px">${button(v.calendly_url, "Book a discovery call")}</div>
    <h2 style="margin:18px 0 8px;font-size:15px;color:${TEXT}">Your submitted details</h2>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BORDER};border-radius:10px;overflow:hidden;margin:0 0 18px">${detailRows}</table>
    ${muted(`Best regards,`)}
    ${muted(`The ${BRAND} Team`)}
  `;

  return {
    subject: "We Received Your Project Request",
    html: shell({ preview: `Thanks ${first} — we've received your project request.`, title: "Project request received", bodyInner: body }),
  };
}

export interface FollowUpVars {
  name: string;
  service_needed?: string | null;
  calendly_url: string;
}

export function followUpEmail(v: FollowUpVars) {
  const first = (v.name || "there").split(" ")[0];
  const svc = v.service_needed || "your project";
  const body = `
    ${h1("Following up on your project request")}
    ${p(`Hi ${first},`)}
    ${p(`Just following up on your project request for ${svc}.`)}
    ${p("If you're still looking for a white label development partner, we'd be happy to review the details and discuss the best next step.")}
    ${p("You can reply to this email or book a quick discovery call here:")}
    <div style="margin:18px 0 22px">${button(v.calendly_url, "Book a discovery call")}</div>
    ${muted("Best,")}
    ${muted(`The ${BRAND} Team`)}
  `;
  return {
    subject: "Following Up on Your Project Request",
    html: shell({ preview: `Quick follow-up on ${svc}`, title: "Following up", bodyInner: body }),
  };
}

export interface CallReminderVars {
  name: string;
  call_time?: string | null;
  calendly_url?: string;
}

export function callReminderEmail(v: CallReminderVars) {
  const first = (v.name || "there").split(" ")[0];
  const when = v.call_time ? p(`Scheduled for: ${v.call_time}`) : "";
  const body = `
    ${h1("Reminder: your discovery call")}
    ${p(`Hi ${first},`)}
    ${p("This is a quick reminder about your upcoming discovery call.")}
    ${when}
    ${p("We'll discuss your project requirements, timeline, budget, and how we can support your agency under your brand.")}
    ${v.calendly_url ? `<div style="margin:18px 0 22px">${button(v.calendly_url, "Manage your booking")}</div>` : ""}
    ${muted("Talk soon,")}
    ${muted(`The ${BRAND} Team`)}
  `;
  return {
    subject: "Reminder: Your Discovery Call",
    html: shell({ preview: "Quick reminder about your upcoming discovery call.", title: "Call reminder", bodyInner: body }),
  };
}
