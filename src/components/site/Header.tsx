import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Menu, X, ChevronDown,
  Code2, Globe, ShoppingCart, Search,
  Palette, LayoutTemplate, Handshake,
  Wrench, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

type ServiceItem = {
  label: string;
  desc: string;
  to: string;
  icon: React.ComponentType<{ className?: string }>;
};

const services: ServiceItem[] = [
  { label: "WordPress Development", desc: "Custom themes & plugins.", to: "/services/white-label-wordpress-development", icon: Globe },
  { label: "WooCommerce Stores", desc: "Scalable online shops.", to: "/services/white-label-woocommerce-development", icon: ShoppingCart },
  { label: "SEO-Friendly Builds", desc: "Engineered to rank.", to: "/services/seo-friendly-web-development", icon: Search },
  { label: "Website Design", desc: "Conversion-focused UI.", to: "/services/white-label-website-design", icon: Palette },
  { label: "Landing Pages", desc: "High-performance pages.", to: "/services/white-label-landing-page-design", icon: LayoutTemplate },
  { label: "Website Maintenance", desc: "Ongoing care & updates.", to: "/services/white-label-website-maintenance", icon: Wrench },
  { label: "Website Migration", desc: "SEO-safe platform moves.", to: "/services/white-label-website-migration", icon: Code2 },
  { label: "Website Audit", desc: "Performance & SEO review.", to: "/services/white-label-website-audit", icon: ShieldCheck },
  { label: "For SEO Agencies", desc: "White label partner program.", to: "/services/seo-agencies", icon: Handshake },
];

const nav = [
  { label: "Home", to: "/" },
  { label: "Process", to: "/process" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Agency Partner", to: "/agency-partner" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logo} alt="WLWD logo" width={40} height={40} className="h-10 w-10 shrink-0 object-contain" />
          <span className="flex flex-col text-[13px] font-semibold leading-[1.15] tracking-tight text-ink sm:text-sm">
            <span>White Label</span>
            <span>Website Development</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-ink">
            Home
          </Link>

          {/* Services mega-menu */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
              onClick={() => setServicesOpen((v) => !v)}
            >
              Services <ChevronDown className={`h-3.5 w-3.5 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-2">
                <div className="w-[640px] overflow-hidden rounded-2xl border border-border bg-background p-3 shadow-elevated">
                  <div className="grid grid-cols-2 gap-1">
                    {services.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.to}
                          to={s.to}
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-muted"
                          onClick={() => setServicesOpen(false)}
                        >
                          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-brand to-brand/70 text-white shadow-sm">
                            <Icon className="h-5 w-5" />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-sm font-semibold text-ink">{s.label}</span>
                            <span className="block truncate text-xs text-muted-foreground">{s.desc}</span>
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {nav.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-ink"
              activeProps={{ className: "rounded-md px-3 py-2 text-sm font-medium text-ink" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild className="rounded-full px-5">
            <Link to="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <button
          aria-label="Toggle menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="animate-fade-in border-t border-border bg-background lg:hidden">
          <div className="container-page max-h-[calc(100dvh-4rem)] overflow-y-auto py-4">
            <div className="flex flex-col gap-0.5">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink active:bg-muted"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-4 border-t border-border pt-4">
              <div className="px-1 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </div>
              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => {
                  const Icon = s.icon;
                  return (
                    <Link
                      key={s.to}
                      to={s.to}
                      onClick={() => setOpen(false)}
                      className="flex items-start gap-2 rounded-xl border border-border bg-surface-elevated p-3 active:scale-[0.98]"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gradient-to-br from-brand to-brand/70 text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-[13px] font-medium leading-tight text-ink">{s.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>
            <Button asChild className="mt-5 h-12 w-full rounded-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
