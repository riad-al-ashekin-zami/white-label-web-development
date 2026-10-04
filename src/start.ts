import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

const BLOCKED_COUNTRIES = new Set(["IN", "PK"]);

function renderGeoBlockPage(): string {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<title>Access Not Available</title>
<style>
  body{margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f8fafc;font-family:ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;color:#0f172a}
  .card{max-width:28rem;padding:2.5rem 2rem;text-align:center}
  h1{font-size:1.5rem;font-weight:600;margin:0 0 .75rem}
  p{font-size:.95rem;line-height:1.6;color:#475569;margin:0}
</style>
</head>
<body>
  <main class="card">
    <h1>Access not available</h1>
    <p>Access to this website is not available in your region.</p>
  </main>
</body>
</html>`;
}

const geoBlockMiddleware = createMiddleware().server(async ({ next, request }) => {
  // Country detected by the hosting edge from the visitor's IP (not browser settings).
  const country = request.headers.get("cf-ipcountry");
  if (country && BLOCKED_COUNTRIES.has(country.toUpperCase())) {
    return new Response(renderGeoBlockPage(), {
      status: 403,
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
      },
    });
  }
  return next();
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [geoBlockMiddleware, errorMiddleware],
}));
