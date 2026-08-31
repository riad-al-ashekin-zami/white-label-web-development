import { useEffect, useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { AdminGuard } from "@/components/admin/AdminGuard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { Search, Filter, RefreshCw, ExternalLink, Flame, CircleDot } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/leads")({
  head: () => ({
    meta: [
      { title: "Leads — Admin" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: () => (
    <AdminGuard>
      <LeadsListPage />
    </AdminGuard>
  ),
});

type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  company_name: string | null;
  service_needed: string | null;
  budget: string | null;
  timeline: string | null;
  lead_score: string;
  status: string;
  project_details: string | null;
  website_url: string | null;
};

const STATUS_OPTIONS = ["New", "Contacted", "Call Scheduled", "Proposal Sent", "Won", "Lost"];
const SCORE_OPTIONS = ["High", "Medium", "Low", "Unreviewed"];

function statusBadge(s: string) {
  const map: Record<string, string> = {
    New: "bg-blue-50 text-blue-700 border-blue-200",
    Contacted: "bg-amber-50 text-amber-700 border-amber-200",
    "Call Scheduled": "bg-indigo-50 text-indigo-700 border-indigo-200",
    "Proposal Sent": "bg-violet-50 text-violet-700 border-violet-200",
    Won: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Lost: "bg-rose-50 text-rose-700 border-rose-200",
  };
  return `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${map[s] || "bg-muted text-muted-foreground border-border"}`;
}

function scoreBadge(s: string) {
  const map: Record<string, string> = {
    High: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Medium: "bg-amber-50 text-amber-700 border-amber-200",
    Low: "bg-rose-50 text-rose-700 border-rose-200",
    Unreviewed: "bg-muted text-muted-foreground border-border",
  };
  return `inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${map[s] || "bg-muted text-muted-foreground border-border"}`;
}

function LeadsListPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<string>("all");
  const [score, setScore] = useState<string>("all");
  const [service, setService] = useState<string>("all");
  const [budget, setBudget] = useState<string>("all");
  const [dateRange, setDateRange] = useState<string>("all");

  const load = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("id, created_at, name, email, company_name, service_needed, budget, timeline, lead_score, status, project_details, website_url")
      .order("created_at", { ascending: false })
      .limit(500);
    setLoading(false);
    if (error) {
      toast.error("Failed to load leads");
      return;
    }
    setLeads(data as Lead[]);
  };

  useEffect(() => { load(); }, []);

  const services = useMemo(
    () => Array.from(new Set(leads.map((l) => l.service_needed).filter(Boolean))) as string[],
    [leads],
  );
  const budgets = useMemo(
    () => Array.from(new Set(leads.map((l) => l.budget).filter(Boolean))) as string[],
    [leads],
  );

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    const now = Date.now();
    const ranges: Record<string, number> = {
      "7d": 7 * 86400000,
      "30d": 30 * 86400000,
      "90d": 90 * 86400000,
    };
    return leads.filter((l) => {
      if (status !== "all" && l.status !== status) return false;
      if (score !== "all" && l.lead_score !== score) return false;
      if (service !== "all" && l.service_needed !== service) return false;
      if (budget !== "all" && l.budget !== budget) return false;
      if (dateRange !== "all") {
        const ms = ranges[dateRange];
        if (ms && now - new Date(l.created_at).getTime() > ms) return false;
      }
      if (q) {
        const hay = `${l.name} ${l.email} ${l.company_name ?? ""} ${l.service_needed ?? ""}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [leads, search, status, score, service, budget, dateRange]);

  const updateStatus = async (id: string, newStatus: string) => {
    const prev = leads;
    setLeads((ls) => ls.map((l) => (l.id === id ? { ...l, status: newStatus } : l)));
    const { error } = await supabase.from("leads").update({ status: newStatus }).eq("id", id);
    if (error) {
      setLeads(prev);
      toast.error("Failed to update status");
    } else {
      toast.success("Status updated");
    }
  };

  const counts = useMemo(() => ({
    total: leads.length,
    hot: leads.filter((l) => l.lead_score === "High").length,
    new: leads.filter((l) => l.status === "New").length,
    won: leads.filter((l) => l.status === "Won").length,
  }), [leads]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex items-end justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-ink">Leads</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            All inbound project requests from the website.
          </p>
        </div>
        <Button variant="outline" size="sm" onClick={load} disabled={loading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} /> Refresh
        </Button>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { k: counts.total, v: "Total leads" },
          { k: counts.new, v: "New" },
          { k: counts.hot, v: "Hot (High score)" },
          { k: counts.won, v: "Won" },
        ].map((s) => (
          <div key={s.v} className="rounded-xl border border-border bg-surface-elevated p-4">
            <div className="text-2xl font-semibold text-ink">{s.k}</div>
            <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>

      <div className="mt-6 rounded-xl border border-border bg-surface-elevated p-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="relative min-w-[240px] flex-1">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search name, email, company, service…"
              className="pl-9"
            />
          </div>
          <FilterSelect label="Status" value={status} onChange={setStatus} options={STATUS_OPTIONS} />
          <FilterSelect label="Score" value={score} onChange={setScore} options={SCORE_OPTIONS} />
          <FilterSelect label="Service" value={service} onChange={setService} options={services} />
          <FilterSelect label="Budget" value={budget} onChange={setBudget} options={budgets} />
          <FilterSelect label="Date" value={dateRange} onChange={setDateRange} options={["7d", "30d", "90d"]} renderLabel={(v) => ({ "7d": "Last 7 days", "30d": "Last 30 days", "90d": "Last 90 days" }[v] || v)} />
          <div className="ml-auto text-xs text-muted-foreground">
            <Filter className="mr-1 inline h-3 w-3" />
            {filtered.length} of {leads.length}
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-border bg-surface-elevated">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-4 py-3 font-medium">Name</th>
                <th className="px-4 py-3 font-medium">Company</th>
                <th className="px-4 py-3 font-medium">Email</th>
                <th className="px-4 py-3 font-medium">Service</th>
                <th className="px-4 py-3 font-medium">Details</th>
                <th className="px-4 py-3 font-medium">Budget</th>
                <th className="px-4 py-3 font-medium">Timeline</th>
                <th className="px-4 py-3 font-medium">Score</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Created</th>
                <th className="px-4 py-3 font-medium"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {loading && (
                <tr><td colSpan={11} className="px-4 py-10 text-center text-muted-foreground">Loading leads…</td></tr>
              )}
              {!loading && filtered.length === 0 && (
                <tr><td colSpan={11} className="px-4 py-10 text-center text-muted-foreground">No leads match your filters.</td></tr>
              )}
              {filtered.map((l) => (
                <tr key={l.id} className="hover:bg-muted/30">
                  <td className="px-4 py-3 font-medium text-ink">
                    <Link to="/admin/leads/$id" params={{ id: l.id }} className="hover:underline">
                      {l.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{l.company_name || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    <a href={`mailto:${l.email}`} className="hover:text-ink">{l.email}</a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{l.service_needed || "—"}</td>
                  <td className="max-w-[260px] px-4 py-3 text-xs text-muted-foreground">
                    <span className="line-clamp-2" title={l.project_details ?? undefined}>
                      {l.website_url ? <span className="font-medium text-ink">{l.website_url} — </span> : null}
                      {l.project_details || "—"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{l.budget || "—"}</td>
                  <td className="px-4 py-3 text-muted-foreground">{l.timeline || "—"}</td>
                  <td className="px-4 py-3">
                    <span className={scoreBadge(l.lead_score)}>
                      {l.lead_score === "High" ? <Flame className="h-3 w-3" /> : <CircleDot className="h-3 w-3" />}
                      {l.lead_score}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Select value={l.status} onValueChange={(v) => updateStatus(l.id, v)}>
                      <SelectTrigger className="h-7 w-[140px] text-xs">
                        <span className={statusBadge(l.status)}>{l.status}</span>
                      </SelectTrigger>
                      <SelectContent>
                        {STATUS_OPTIONS.map((s) => (
                          <SelectItem key={s} value={s}>{s}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </td>
                  <td className="px-4 py-3 text-xs text-muted-foreground">
                    {new Date(l.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      to="/admin/leads/$id"
                      params={{ id: l.id }}
                      className="inline-flex items-center gap-1 text-xs font-medium text-brand hover:underline"
                    >
                      Open <ExternalLink className="h-3 w-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function FilterSelect({
  label, value, onChange, options, renderLabel,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: string[];
  renderLabel?: (v: string) => string;
}) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="h-9 w-[160px] text-sm">
        <SelectValue placeholder={label} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All {label.toLowerCase()}</SelectItem>
        {options.map((o) => (
          <SelectItem key={o} value={o}>{renderLabel ? renderLabel(o) : o}</SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
