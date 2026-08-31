import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { posts } from "@/content/posts";

const TITLE = "Blog — White Label Website Development";
const DESC =
  "Guides and insights for agencies scaling with white label website development, WordPress builds, and reseller-ready delivery.";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://whitelabelwebsitedevelopment.com/blog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: "https://whitelabelwebsitedevelopment.com/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36">
        <section className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Blog</div>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              White label insights for agencies
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">
              Practical guides on scaling delivery, choosing platforms, and selling websites under your own brand.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {posts.map((p) => (
              <Link
                key={p.slug}
                to="/blog/$slug"
                params={{ slug: p.slug }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-sm transition-colors hover:border-brand/50"
              >
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.imageAlt ?? p.title}
                    loading="lazy"
                    className="aspect-[2/1] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                )}
                <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand">{p.category}</span>
                <h2 className="mt-3 text-xl font-semibold tracking-tight text-ink">{p.title}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-3.5 w-3.5" />
                    {new Date(p.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {p.readingTime}
                  </span>
                </div>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
        <div className="h-20 md:h-28" />
      </main>
      <Footer />
    </>
  );
}
