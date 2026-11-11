import { Link, useLocation } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";
import { trackHomepage } from "@/config/homepage";

/**
 * Sticky bottom CTA bar — mobile only.
 * Sits above the iOS home indicator using env(safe-area-inset-bottom).
 */
export function MobileCTABar() {
  const isHomepage = useLocation().pathname === "/";
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="p-3">
        <Link
          to="/contact"
          onClick={() => { if (isHomepage) trackHomepage("cta_click", { button_text: "Get a Free Quote", button_location: "mobile-bar" }); }}
          className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-brand-foreground shadow-soft active:scale-[0.98]"
        >
          <MessageSquare className="h-4 w-4" /> Get a Free Quote
        </Link>
      </div>
    </div>
  );
}
