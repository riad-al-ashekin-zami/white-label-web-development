import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Prose } from "@/components/site/Prose";
import { getPost } from "@/content/posts";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const url = `https://whitelabelwebsitedevelopment.com/blog/${post.slug}`;
    return {
      meta: [
        { title: "12 Best White Label Website Builders in 2026" },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://whitelabelwebsitedevelopment.com/" },
                  { "@type": "ListItem", position: 2, name: "Blog", item: "https://whitelabelwebsitedevelopment.com/blog" },
                  { "@type": "ListItem", position: 3, name: post.title, item: url },
                ],
              },
              {
                "@type": "BlogPosting",
                headline: post.title,
                description: post.description,
                datePublished: post.date,
                dateModified: post.date,
                mainEntityOfPage: url,
                author: { "@type": "Organization", name: "White Label Website Development" },
                publisher: { "@type": "Organization", name: "White Label Website Development" },
              },
            ],
          }),
        },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <Header />
      <main className="pt-28 md:pt-36">
        <article className="container-page">
          <div className="mx-auto max-w-3xl">
            <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline">
              <ArrowLeft className="h-4 w-4" /> All articles
            </Link>
            <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.18em] text-brand">
              {post.category}
            </span>
            <h1 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">
              {post.title}
            </h1>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readingTime}
              </span>
            </div>

            <hr className="mt-8 border-border" />

            <Prose markdown={post.content.replace(/^#\s.+\n/, "")} />

            <div className="mt-16 rounded-2xl border border-border bg-surface-muted/50 p-8 text-center">
              <h2 className="text-2xl font-semibold tracking-tight text-ink">
                Need production capacity, not another builder?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                We build SEO-ready websites under your brand — NDA friendly, dedicated PM, delivered on schedule.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Get a free white label quote
              </Link>
            </div>
          </div>
        </article>
        <div className="h-20 md:h-28" />
      </main>
      <Footer />
    </>
  );
}
