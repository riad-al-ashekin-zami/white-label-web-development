import { Link } from "@tanstack/react-router";
import { MessageSquare, CalendarClock } from "lucide-react";

/**
 * Sticky bottom CTA bar — mobile only.
 * Sits above the iOS home indicator using env(safe-area-inset-bottom).
 */
export function MobileCTABar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <Link
          to="/contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-ink text-sm font-semibold text-brand-foreground shadow-soft active:scale-[0.98]"
        >
          <MessageSquare className="h-4 w-4" /> Get Quote
        </Link>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-border bg-surface-elevated text-sm font-semibold text-ink active:scale-[0.98]"
        >
          <CalendarClock className="h-4 w-4" /> Book Call
        </a>
      </div>
    </div>
  );
}
