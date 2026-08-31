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

export function Prose({ markdown }: { markdown: string }) {
  return (
    <div className="max-w-none text-[17px] leading-relaxed text-muted-foreground">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h2 id={slugify(children)} className="mt-14 scroll-mt-28 text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              {children}
            </h2>
          ),
          h2: ({ children }) => (
            <h2 id={slugify(children)} className="mt-12 scroll-mt-28 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 id={slugify(children)} className="mt-10 scroll-mt-28 text-xl font-semibold tracking-tight text-ink md:text-2xl">
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
              className="font-medium text-brand underline underline-offset-4 hover:no-underline"
              {...(href && href.startsWith("http") && !href.includes("whitelabelwebsitedevelopment.com")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {children}
            </a>
          ),
          ul: ({ children }) => <ul className="mt-5 list-disc space-y-2 pl-6">{children}</ul>,
          ol: ({ children }) => <ol className="mt-5 list-decimal space-y-2 pl-6">{children}</ol>,
          li: ({ children }) => <li className="pl-1">{children}</li>,
          strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
          blockquote: ({ children }) => (
            <blockquote className="mt-6 border-l-4 border-brand/40 bg-surface-muted/50 px-5 py-3 italic">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-12 border-border" />,
          code: ({ children }) => (
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-ink">{children}</code>
          ),
          table: ({ children }) => (
            <div className="mt-8 w-full overflow-x-auto rounded-xl border border-border">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => <thead className="bg-surface-muted/70">{children}</thead>,
          th: ({ children }) => (
            <th className="border-b border-border px-4 py-3 font-semibold text-ink">{children}</th>
          ),
          td: ({ children }) => (
            <td className="border-b border-border/70 px-4 py-3 align-top">{children}</td>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
