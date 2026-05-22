import { useEffect, useState, type ReactNode } from "react";
import { useNavigate, Link, useLocation } from "@tanstack/react-router";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { LayoutGrid, LogOut, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

type State = "loading" | "ok" | "no-session" | "not-admin";

export function AdminGuard({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [state, setState] = useState<State>("loading");
  const [email, setEmail] = useState<string>("");

  useEffect(() => {
    let cancelled = false;
    const check = async () => {
      const { data: sess } = await supabase.auth.getSession();
      if (cancelled) return;
      if (!sess.session) {
        setState("no-session");
        return;
      }
      setEmail(sess.session.user.email ?? "");
      const { data: roles, error } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", sess.session.user.id);
      if (cancelled) return;
      if (error) {
        setState("not-admin");
        return;
      }
      const isAdmin = (roles || []).some((r) => r.role === "admin");
      setState(isAdmin ? "ok" : "not-admin");
    };
    check();
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (!session) setState("no-session");
      else check();
    });
    return () => {
      cancelled = true;
      sub.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (state === "no-session") {
      navigate({ to: "/admin/login" });
    }
  }, [state, navigate]);

  if (state === "loading" || state === "no-session") {
    return (
      <div className="min-h-screen grid place-items-center bg-background">
        <div className="text-sm text-muted-foreground">Checking access…</div>
      </div>
    );
  }

  if (state === "not-admin") {
    return (
      <div className="min-h-screen grid place-items-center bg-background px-4">
        <div className="max-w-md rounded-2xl border border-border bg-surface-elevated p-8 text-center shadow-elevated">
          <ShieldCheck className="mx-auto h-8 w-8 text-brand" />
          <h1 className="mt-4 text-xl font-semibold text-ink">Not authorized</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Your account ({email}) is signed in but doesn't have admin access.
            Ask an existing admin to grant you the role.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={async () => {
              await supabase.auth.signOut();
              navigate({ to: "/admin/login" });
            }}
          >
            <LogOut className="mr-2 h-4 w-4" /> Sign out
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Toaster />
      <header className="sticky top-0 z-30 border-b border-border bg-surface-elevated/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4">
          <div className="flex items-center gap-6">
            <Link to="/admin/leads" className="flex items-center gap-2 text-sm font-semibold text-ink">
              <LayoutGrid className="h-4 w-4 text-brand" />
              White Label Website Development Admin
            </Link>
            <nav className="hidden gap-4 md:flex">
              <Link
                to="/admin/leads"
                className="text-sm text-muted-foreground hover:text-ink"
                activeProps={{ className: "text-sm text-ink font-medium" }}
              >
                Leads
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs text-muted-foreground sm:inline">{email}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={async () => {
                await supabase.auth.signOut();
                toast.success("Signed out");
                navigate({ to: "/admin/login" });
              }}
            >
              <LogOut className="mr-2 h-4 w-4" /> Sign out
            </Button>
          </div>
        </div>
      </header>
      <main key={location.pathname}>{children}</main>
    </div>
  );
}
