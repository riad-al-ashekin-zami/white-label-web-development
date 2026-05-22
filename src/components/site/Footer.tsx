import { Link } from "@tanstack/react-router";
import { Linkedin, Twitter, Github, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

type Col = { title: string; links: { label: string; to?: string; href?: string }[] };

const cols: Col[] = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Process", to: "/process" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "Agency Partner", to: "/agency-partner" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "White Label Website Development", to: "/services/white-label-website-development" },
      { label: "WordPress Development", to: "/services/white-label-wordpress-development" },
      { label: "Website Design", to: "/services/white-label-website-design" },
      { label: "SEO-Friendly Development", to: "/services/seo-friendly-web-development" },
      { label: "WooCommerce Development", to: "/services/white-label-woocommerce-development" },
      { label: "Landing Pages", to: "/services/white-label-landing-page-design" },
      { label: "Website Maintenance", to: "/services/white-label-website-maintenance" },
      { label: "Website Audit", to: "/services/white-label-website-audit" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Pricing", to: "/pricing" },
      { label: "Case Studies", to: "/portfolio" },
      { label: "FAQ", to: "/contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms", href: "#" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email us", href: "mailto:hello@whitelayer.com" },
      { label: "Book a call", href: "https://calendly.com/" },
      { label: "Get a quote", to: "/contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        {/* Footer CTA */}
        <div className="mb-14 flex flex-col items-start justify-between gap-5 rounded-2xl border border-border bg-surface-elevated p-7 md:flex-row md:items-center md:p-10">
          <div>
            <h3 className="text-balance text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              Need a reliable white label partner?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Send us your project. We'll reply within one business day.
            </p>
          </div>
          <Button asChild size="lg" className="rounded-full px-6">
            <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Whitelayer logo" width={36} height={36} loading="lazy" className="h-9 w-9" />
              <span className="text-base font-semibold tracking-tight text-ink">
                Whitelayer<span className="text-brand">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              The invisible white label web development partner for agencies, marketers and consultants. Your brand. Our execution.
            </p>
            <div className="mt-6 flex items-center gap-2">
              {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="text-sm text-muted-foreground transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-ink">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Whitelayer. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-ink">Privacy Policy</a>
            <a href="#" className="hover:text-ink">Terms of Service</a>
            <a href="#" className="hover:text-ink">NDA</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
