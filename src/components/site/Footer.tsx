import { Layers, Linkedin, Twitter, Github, Mail } from "lucide-react";

const cols = [
  {
    title: "Services",
    links: ["WordPress Development", "Website Design", "WooCommerce", "Landing Pages", "Maintenance", "Speed Optimization"],
  },
  {
    title: "Company",
    links: ["About", "Agency Partner", "Portfolio", "Careers", "Contact"],
  },
  {
    title: "Process",
    links: ["How we work", "White Label Promise", "NDA & Confidentiality", "Pricing", "FAQs"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <Layers className="h-4 w-4" />
              </span>
              <span className="text-base font-semibold tracking-tight text-ink">
                Whitelayer<span className="text-brand">.</span>
              </span>
            </div>
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
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-ink">
                      {l}
                    </a>
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
