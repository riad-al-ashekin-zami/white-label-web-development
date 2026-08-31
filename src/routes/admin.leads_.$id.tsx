import { useEffect, useState } from "react";
import { createFileRoute, Link, useParams } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Trash2, ExternalLink } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/leads_/$id")({
  head: () => ({
    meta: [
      { title: "Lead Detail — Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: () => (
    <AdminGuard>
      <LeadDetailPage />
    </AdminGuard>
  ),
});

const STATUS_OPTIONS = ["New", "Contacted", "Call Scheduled", "Proposal Sent", "Won", "Lost"];

type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string | null;
  company_name: string | null;
  website_url: string | null;
  service_needed: string | null;
  budget: string | null;
  timeline: string | null;
  project_details: string | null;
  preferred_contact: string | null;
  nda_required: boolean;
  source_page: string | null;
  status: string;
  lead_score: string;
};

type Note = {
  id: string;
  content: string;
  created_at: string;
  author_email: string | null;
};

function LeadDetailPage() {
  const { id } = Route.useParams();
  const [lead, setLead] = useState<Lead | null>(null);
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [noteText, setNoteText] = useState("");
  const [savingNote, setSavingNote] = useState(false);
  const [me, setMe] = useState<{ id: string; email: string | null } | null>(null);

  const load = async () => {
    setLoading(true);
    const { data: u } = await supabase.auth.getUser();
    if (u.user) setMe({ id: u.user.id, email: u.user.email ?? null });
    const [{ data: leadRow, error: leadErr }, { data: noteRows, error: noteErr }] = await Promise.all([
      supabase.from("leads").select("*").eq("id", id).maybeSingle(),
      supabase.from("lead_notes").select("id, content, created_at, author_email").eq("lead_id", id).order("created_at", { ascending: false }),
    ]);
    setLoading(false);
    if (leadErr || !leadRow) {
      toast.error("Lead not found");
      return;
    }
    setLead(leadRow as Lead);
    if (!noteErr) setNotes((noteRows ?? []) as Note[]);
  };

  useEffect(() => { load(); /* eslint-disable-next-line */ }, [id]);

  const updateStatus = async (newStatus: string) => {
    if (!lead) return;
    const prev = lead.status;
    setLead({ ...lead, status: newStatus });
    const { error } = await supabase.from("leads").update({ status: newStatus }).eq("id", lead.id);
    if (error) {
      setLead({ ...lead, status: prev });
      toast.error("Failed to update status");
    } else {
      toast.success("Status updated");
    }
  };

  const addNote = async () => {
    const content = noteText.trim();
    if (!content || !me) return;
    setSavingNote(true);
    const { data, error } = await supabase
      .from("lead_notes")
      .insert({ lead_id: id, author_id: me.id, author_email: me.email, content })
      .select("id, content, created_at, author_email")
      .single();
    setSavingNote(false);
    if (error) {
      toast.error("Failed to save note");
      return;
    }
    setNotes((n) => [data as Note, ...n]);
    setNoteText("");
    toast.success("Note added");
  };

  const deleteNote = async (noteId: string) => {
    const prev = notes;
    setNotes((n) => n.filter((x) => x.id !== noteId));
    const { error } = await supabase.from("lead_notes").delete().eq("id", noteId);
    if (error) {
      setNotes(prev);
      toast.error("Failed to delete note");
    }
  };

  if (loading) {
    return <div className="mx-auto max-w-5xl px-4 py-16 text-sm text-muted-foreground">Loading lead…</div>;
  }
  if (!lead) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16">
        <Link to="/admin/leads" className="text-sm text-brand hover:underline">← Back to leads</Link>
        <p className="mt-4 text-sm text-muted-foreground">Lead not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      <Link to="/admin/leads" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-ink">
        <ArrowLeft className="h-4 w-4" /> Back to leads
      </Link>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink">{lead.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {lead.company_name || "—"} · Submitted {new Date(lead.created_at).toLocaleString()}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-wider text-muted-foreground">Status</span>
          <Select value={lead.status} onValueChange={updateStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS.map((s) => (<SelectItem key={s} value={s}>{s}</SelectItem>))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <Card title="Contact">
            <Field k="Name" v={lead.name} />
            <Field k="Email" v={<a href={`mailto:${lead.email}`} className="text-brand hover:underline">{lead.email}</a>} />
            <Field k="Phone" v={lead.phone || "—"} />
            <Field k="Company" v={lead.company_name || "—"} />
            <Field
              k="Website"
              v={lead.website_url
                ? <a href={lead.website_url.startsWith("http") ? lead.website_url : `https://${lead.website_url}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-brand hover:underline">{lead.website_url} <ExternalLink className="h-3 w-3" /></a>
                : "—"}
            />
            <Field k="Preferred contact" v={lead.preferred_contact || "—"} />
          </Card>

          <Card title="Project">
            <Field k="Service needed" v={lead.service_needed || "—"} />
            <Field k="Budget" v={lead.budget || "—"} />
            <Field k="Timeline" v={lead.timeline || "—"} />
            <Field k="NDA required" v={lead.nda_required ? "Yes" : "No"} />
            <Field k="Source page" v={lead.source_page || "—"} />
            <div className="mt-3">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Project details</div>
              <div className="mt-2 whitespace-pre-wrap rounded-lg border border-border bg-background p-4 text-sm text-ink">
                {lead.project_details || "—"}
              </div>
            </div>
          </Card>

          <Card title="Internal notes">
            <div className="space-y-3">
              <Textarea
                rows={3}
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder="Add an internal note — only visible to admins."
              />
              <div className="flex justify-end">
                <Button size="sm" onClick={addNote} disabled={!noteText.trim() || savingNote}>
                  {savingNote ? "Saving…" : "Add note"}
                </Button>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {notes.length === 0 && (
                <p className="text-sm text-muted-foreground">No notes yet.</p>
              )}
              {notes.map((n) => (
                <div key={n.id} className="rounded-lg border border-border bg-background p-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{n.author_email || "Admin"} · {new Date(n.created_at).toLocaleString()}</span>
                    <button
                      onClick={() => deleteNote(n.id)}
                      className="inline-flex items-center gap-1 text-muted-foreground hover:text-rose-600"
                      title="Delete note"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap text-sm text-ink">{n.content}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="space-y-6">
          <Card title="Summary">
            <Field k="Lead score" v={<span className="font-medium text-ink">{lead.lead_score}</span>} />
            <Field k="Status" v={<span className="font-medium text-ink">{lead.status}</span>} />
            <Field k="Created" v={new Date(lead.created_at).toLocaleString()} />
          </Card>
          <Card title="Quick actions">
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${lead.email}?subject=Re%3A%20your%20project%20request`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-ink hover:bg-surface"
              >
                Reply by email
              </a>
              {lead.website_url && (
                <a
                  href={lead.website_url.startsWith("http") ? lead.website_url : `https://${lead.website_url}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-sm font-medium text-ink hover:bg-surface"
                >
                  Visit website <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-border bg-surface-elevated p-5">
      <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">{title}</h2>
      <div className="mt-4 space-y-2">{children}</div>
    </section>
  );
}

function Field({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="grid grid-cols-[140px_1fr] gap-3 text-sm">
      <div className="text-muted-foreground">{k}</div>
      <div className="text-ink">{v}</div>
    </div>
  );
}
