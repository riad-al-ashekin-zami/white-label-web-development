import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Mail, ArrowRight, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

type LinkItem = { label: string; to?: string; href?: string };
type Col = { title: string; links: LinkItem[] };

const services: LinkItem[] = [
  { label: "WordPress Development", to: "/services/white-label-wordpress-development" },
  { label: "WooCommerce Development", to: "/services/white-label-woocommerce-development" },
  { label: "Website Design", to: "/services/white-label-website-design" },
  { label: "Landing Pages", to: "/services/white-label-landing-page-design" },
  { label: "SEO-Friendly Development", to: "/services/seo-friendly-web-development" },
  { label: "Website Maintenance", to: "/services/white-label-website-maintenance" },
  { label: "Website Audit", to: "/services/white-label-website-audit" },
  { label: "For SEO Agencies", to: "/industries/seo-agencies" },
];

const company: LinkItem[] = [
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Process", to: "/process" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Agency Partner", to: "/agency-partner" },
  { label: "Contact", to: "/contact" },
  { label: "Partners", to: "/partners" },
];

const resources: LinkItem[] = [
  { label: "Email us", href: "mailto:whitelabelwebsitedevelopment@gmail.com" },
  { label: "Book a call", href: "https://calendly.com/" },
  { label: "Get a quote", to: "/contact" },
  { label: "NDA & Confidentiality", to: "/nda-confidentiality" },
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms-of-service" },
];

const cols: Col[] = [
  { title: "Services", links: services },
  { title: "Company", links: company },
  { title: "Resources", links: resources },
];

function LinkRow({ l }: { l: LinkItem }) {
  const cls = "block text-[13px] leading-snug text-muted-foreground transition-colors hover:text-ink";
  return l.to ? (
    <Link to={l.to} className={cls}>{l.label}</Link>
  ) : (
    <a href={l.href} className={cls}>{l.label}</a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface pb-24 lg:pb-0">
      <div className="container-page py-12 md:py-16">
        {/* CTA banner */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-border bg-gradient-to-br from-surface-elevated to-brand-soft/40 p-6 md:flex-row md:items-center md:gap-6 md:p-8">
          <div className="max-w-xl">
            <h3 className="text-balance text-xl font-semibold tracking-tight text-ink md:text-2xl">
               Need a reliable white label web development partner?
            </h3>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Send us your brief. We reply within one business day — NDA on request.
            </p>
          </div>
          <div className="flex w-full flex-col gap-2 sm:flex-row md:w-auto">
            <Button asChild size="lg" className="h-11 rounded-full px-6">
              <Link to="/contact">Get a Free Quote <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 rounded-full px-6">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>

        {/* Main grid — brand spans wider, link cols tighter for balance */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="White Label Web Development logo"
                width={36}
                height={36}
                loading="lazy"
                className="h-9 w-9"
              />
              <span className="text-[15px] font-semibold leading-tight tracking-tight text-ink">
                White Label<br />Website Development
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-muted-foreground">
               The invisible white label web development partner for agencies, marketers and consultants —
              supporting SEO and digital teams across North America and remote partners worldwide.
            </p>

            {/* Trust strip */}
            <ul className="mt-5 space-y-2 text-[12.5px] text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-brand" />
                <span>Remote — serving USA, Canada & globally</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-brand" />
                <span>Overlap with US Eastern & Pacific hours</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-brand" />
                <span>NDA-friendly • 100% white label</span>
              </li>
            </ul>

            <div className="mt-5 flex items-center gap-2">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/whitelabelwebsitedevelopment/", label: "Facebook" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/white-label-website-development/", label: "LinkedIn" },
                { Icon: Instagram, href: "https://www.instagram.com/whitelabelwebsitedevelopment", label: "Instagram" },
                { Icon: Mail, href: "mailto:whitelabelwebsitedevelopment@gmail.com", label: "Email" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-ink hover:text-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:col-span-8 md:grid-cols-3 md:gap-8">
            {cols.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-semibold text-ink">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <LinkRow l={l} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} White Label Web Development. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link to="/privacy" className="hover:text-ink">Privacy</Link>
            <Link to="/terms-of-service" className="hover:text-ink">Terms</Link>
            <Link to="/nda-confidentiality" className="hover:text-ink">NDA</Link>
            <a href="mailto:whitelabelwebsitedevelopment@gmail.com" className="hover:text-ink">
              whitelabelwebsitedevelopment@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
