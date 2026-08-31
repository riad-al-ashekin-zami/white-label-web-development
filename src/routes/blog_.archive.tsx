import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { posts } from "@/content/posts";

const TITLE = "Blog Archive — White Label Website Development";
const DESC =
  "Full archive of every white label website development article, guide and agency resource, organized by year.";
const URL = "https://whitelabelwebsitedevelopment.com/blog/archive";

export const Route = createFileRoute("/blog_/archive")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: BlogArchive,
});

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function BlogArchive() {
  const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
  const years = Array.from(new Set(sorted.map((p) => p.date.slice(0, 4))));

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36">
        <section className="container-page">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <Link to="/blog" className="hover:text-ink">Blog</Link>
            <span className="mx-2">/</span>
            <span className="text-ink">Archive</span>
          </nav>

          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Archive</div>
            <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight text-ink md:text-5xl">
              Blog Archive
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Every article we&rsquo;ve published on white label website development, agency
              delivery and reseller growth — {posts.length} post{posts.length === 1 ? "" : "s"} in total.
            </p>
          </div>

          <div className="mt-14 space-y-14">
            {years.map((year) => (
              <div key={year}>
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-semibold tracking-tight text-ink">{year}</h2>
                  <div className="h-px flex-1 bg-border" />
                  <span className="text-sm text-muted-foreground">
                    {sorted.filter((p) => p.date.startsWith(year)).length} posts
                  </span>
                </div>

                <ul className="mt-6 divide-y divide-border rounded-2xl border border-border bg-surface-elevated">
                  {sorted
                    .filter((p) => p.date.startsWith(year))
                    .map((p) => (
                      <li key={p.slug}>
                        <Link
                          to="/blog/$slug"
                          params={{ slug: p.slug }}
                          className="group flex flex-col gap-4 p-5 transition-colors hover:bg-muted md:flex-row md:items-center md:gap-6"
                        >
                          {p.image && (
                            <img
                              src={p.image}
                              alt={p.imageAlt ?? p.title}
                              loading="lazy"
                              className="h-32 w-full shrink-0 rounded-xl border border-border object-cover md:h-24 md:w-40"
                            />
                          )}
                          <div className="min-w-0 flex-1">
                            <span className="inline-flex rounded-full border border-border px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                              {p.category}
                            </span>
                            <h3 className="mt-2 text-base font-semibold text-ink group-hover:text-brand md:text-lg">
                              {p.title}
                            </h3>
                            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">{p.description}</p>
                          </div>
                          <div className="flex shrink-0 items-center gap-4 text-xs text-muted-foreground">
                            <span className="inline-flex items-center gap-1.5">
                              <CalendarDays className="h-3.5 w-3.5" /> {formatDate(p.date)}
                            </span>
                            <span className="inline-flex items-center gap-1.5">
                              <Clock className="h-3.5 w-3.5" /> {p.readingTime}
                            </span>
                            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 mb-24 text-center">
            <Link to="/blog" className="text-sm font-medium text-brand hover:underline">
              &larr; Back to the blog
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
