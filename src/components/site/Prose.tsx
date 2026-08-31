import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function slugify(children: React.ReactNode): string {
  const text = Array.isArray(children) ? children.join("") : String(children ?? "");
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Strip editorial [VISUAL: ...] placeholder markers before rendering. */
function clean(markdown: string): string {
  return markdown.replace(/^\[VISUAL:[^\]]*\]\s*$/gm, "");
}

export function Prose({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-none text-[17px] leading-relaxed text-muted-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h2
              id={slugify(children)}
              className="mt-16 scroll-mt-28 border-t border-border pt-10 text-3xl font-semibold tracking-tight text-ink md:text-4xl"
            >
              <span className="mb-4 block h-1.5 w-12 rounded-full bg-brand" />
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h2
              id={slugify(children)}
              className="mt-12 scroll-mt-28 text-2xl font-semibold tracking-tight text-ink md:text-3xl"
            >
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3
              id={slugify(children)}
              className="mt-10 scroll-mt-28 text-xl font-semibold tracking-tight text-ink md:text-2xl"
            >
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="mt-8 text-lg font-semibold text-ink">{children}</h4>
          ),
          p: ({ children }) => <p className="mt-5 text-pretty">{children}</p>,
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-brand underline decoration-brand/40 underline-offset-4 transition-colors hover:decoration-brand"
              {...(href && href.startsWith("http") && !href.includes("whitelabelwebsitedevelopment.com")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {children}
            </a>
          ),
          ul: ({ children }) => (
            <ul className="mt-5 list-disc space-y-2.5 pl-6 marker:text-brand">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mt-5 list-decimal space-y-2.5 pl-6 marker:font-semibold marker:text-brand">
              {children}
            </ol>
          ),
          li: ({ children }) => <li className="pl-1">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
          blockquote: ({ children }) => (
            <blockquote className="relative mt-8 overflow-hidden rounded-2xl border border-brand/20 bg-brand/[0.04] px-6 py-5 shadow-sm [&_p]:mt-3 [&_p:first-child]:mt-0 [&_h2]:mt-0 [&_h2]:border-0 [&_h2]:pt-0 [&_h2]:text-xl [&_h2]:md:text-2xl">
              <span className="absolute inset-y-0 left-0 w-1 bg-brand" />
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-12 border-border" />,
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-ink">{children}</code>
          ),
          table: ({ children }) => (
            <div className="mt-8 w-full overflow-x-auto rounded-2xl border border-border shadow-sm">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-ink text-background">{children}</thead>,
          th: ({ children }) => (
            <th className="whitespace-nowrap px-4 py-3.5 text-[13px] font-semibold uppercase tracking-wide">
              {children}
            </th>
          ),
          tr: ({ children }) => (
            <tr className="transition-colors odd:bg-surface-muted/40 hover:bg-brand/[0.04]">{children}</tr>
          ),
          td: ({ children }) => (
            <td className="border-t border-border/60 px-4 py-3.5 align-top">{children}</td>
          ),
        }}
      >
        {clean(markdown)}
      </ReactMarkdown>
    </div>
  );
}
