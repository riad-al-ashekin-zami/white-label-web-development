import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Prose } from "@/components/site/Prose";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getPost } from "@/content/posts";

const FAQ_HEADING = "# White Label Website Builder FAQs";

function splitFaq(content: string): {
  body: string;
  faqs: { q: string; a: string }[];
} {
  const idx = content.indexOf(FAQ_HEADING);
  if (idx === -1) return { body: content, faqs: [] };
  const body = content.slice(0, idx);
  const faqSection = content.slice(idx + FAQ_HEADING.length);
  const faqs = faqSection
    .split(/^## /m)
    .slice(1)
    .map((chunk) => {
      const [q, ...rest] = chunk.split("\n");
      return { q: q.trim(), a: rest.join("\n").trim() };
    })
    .filter((f) => f.q && f.a);
  return { body, faqs };
}

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
    const imageUrl = post.image
      ? `https://whitelabelwebsitedevelopment.com${post.image}`
      : undefined;
    return {
      meta: [
        { title: "12 Best White Label Website Builders for Agencies (2026)" },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        ...(imageUrl ? [{ property: "og:image", content: imageUrl }] : []),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
        ...(imageUrl ? [{ name: "twitter:image", content: imageUrl }] : []),
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
                ...(imageUrl ? { image: imageUrl } : {}),
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
  const { body, faqs } = splitFaq(post.content.replace(/^#\s.+\n/, ""));

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

            {post.image && (
              <img
                src={post.image}
                alt={post.imageAlt ?? post.title}
                fetchPriority="high"
                className="mt-8 w-full rounded-2xl border border-border object-cover shadow-sm"
              />
            )}

            <hr className="mt-8 border-border" />

            <Prose markdown={body} />

            {faqs.length > 0 && (
              <section id="white-label-website-builder-faqs" className="mt-16 scroll-mt-28">
                <span className="mb-4 block h-1.5 w-12 rounded-full bg-brand" />
                <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  White Label Website Builder FAQs
                </h2>
                <Accordion type="single" collapsible className="mt-8 space-y-3">
                  {faqs.map((f, i) => (
                    <AccordionItem
                      key={i}
                      value={`faq-${i}`}
                      className="rounded-xl border border-border bg-surface-elevated px-5 shadow-sm transition-colors data-[state=open]:border-brand/40"
                    >
                      <AccordionTrigger className="py-4 text-left text-[15px] font-semibold text-ink hover:no-underline">
                        {f.q}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-[15px] leading-relaxed text-muted-foreground">
                        <Prose markdown={f.a} />
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            )}

            <div className="mt-16 rounded-2xl border border-brand/20 bg-brand/[0.04] p-8 text-center shadow-sm">
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
