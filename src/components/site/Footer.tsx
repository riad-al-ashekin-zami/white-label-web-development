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
      { label: "White Label Website Development", to: "/" },
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
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Service", to: "/terms-of-service" },
      { label: "NDA & Confidentiality", to: "/nda-confidentiality" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email us", href: "mailto:hello@whitelabelwebsitedevelopment.com" },
      { label: "Book a call", href: "https://calendly.com/" },
      { label: "Get a quote", to: "/contact" },
    ],
  },

];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-24 lg:pb-0">
      <div className="container-page py-12 md:py-16">
        {/* Footer CTA */}
        <div className="mb-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-surface-elevated p-5 md:mb-14 md:flex-row md:items-center md:gap-5 md:p-10">
          <div>
            <h3 className="text-balance text-xl font-semibold tracking-tight text-ink md:text-3xl">
              Need a reliable white label partner?
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Send us your project. We'll reply within one business day.
            </p>
          </div>
          <Button asChild size="lg" className="h-12 w-full rounded-full px-6 md:w-auto">
            <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
          </Button>
        </div>

        {/* Brand */}
        <div className="mb-10 md:mb-12">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="White Label Website Development logo" width={36} height={36} loading="lazy" className="h-9 w-9" />
            <span className="text-[15px] font-semibold leading-tight tracking-tight text-ink">
              White Label<br />Website Development
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            The invisible white label web development partner for agencies, marketers and consultants. Your brand. Our execution.
          </p>
          <div className="mt-5 flex items-center gap-2">
            {[Linkedin, Twitter, Github, Mail].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-ink hover:text-ink"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns: 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-10">
          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
              <ul className="mt-3 space-y-2.5 md:mt-4 md:space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.to ? (
                      <Link to={l.to} className="block text-[13px] leading-snug text-muted-foreground transition-colors hover:text-ink">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="block text-[13px] leading-snug text-muted-foreground transition-colors hover:text-ink">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:mt-14 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} White Label Website Development. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-ink">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-ink">Terms</Link>
            <Link to="/nda-confidentiality" className="hover:text-ink">NDA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
