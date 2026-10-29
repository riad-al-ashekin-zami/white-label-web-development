import { createFileRoute, redirect } from "@tanstack/react-router";

// Moved to /services/seo-agencies — permanent redirect preserves SEO equity.
export const Route = createFileRoute("/industries/seo-agencies")({
  beforeLoad: () => {
    throw redirect({ to: "/services/seo-agencies", statusCode: 301 });
  },
});
