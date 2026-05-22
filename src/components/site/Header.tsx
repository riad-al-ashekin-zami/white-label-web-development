import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Layers, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  { label: "White Label Website Development", to: "/services/white-label-website-development" },
  { label: "White Label WordPress Development", to: "/services/white-label-wordpress-development" },
  { label: "White Label Website Design", to: "/services/white-label-website-design" },
  { label: "White Label SEO-Friendly Web Development", to: "/services/seo-friendly-web-development" },
  { label: "White Label Web Development for SEO Agencies", to: "/industries/seo-agencies" },
  { label: "White Label WooCommerce Development", to: "/services/white-label-woocommerce-development" },
  { label: "White Label Landing Page Design & Development", to: "/services/white-label-landing-page-design" },
  { label: "White Label Website Maintenance", to: "/services/white-label-website-maintenance" },
  { label: "White Label Website Audit", to: "/services/white-label-website-audit" },
] as const;

const nav = [
  { label: "Home", to: "/" },
  { label: "Process", to: "/process" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Agency Partner", to: "/agency-partner" },
  { label: "Pricing", to: "/pricing" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
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
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-brand-foreground">
            <Layers className="h-4 w-4" />
          </span>
          <span className="text-base font-semibold tracking-tight text-ink">
            Whitelayer<span className="text-brand">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          <Link to="/" className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-ink">
            Home
          </Link>

          {/* Services dropdown */}
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
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-[380px] pt-2">
                <div className="overflow-hidden rounded-xl border border-border bg-background p-2 shadow-elevated">
                  {services.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="block rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-ink"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
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
            <Link to="/contact">Book a Free Call</Link>
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
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-border pt-2">
              <div className="px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Services
              </div>
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-ink"
                >
                  {s.label}
                </Link>
              ))}
            </div>
            <Button asChild className="mt-3 rounded-full">
              <Link to="/contact" onClick={() => setOpen(false)}>Book a Free Call</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
