# Architecture rules
- Blog articles are source-controlled Markdown registered in `src/content/posts.ts` and rendered by the shared blog route, so archive, metadata, and article content use one source.
- Posts may disable the shared promotional CTA when supplied articles must contain no additional editorial content.
- Keep homepage redesign components, commercial configuration, image-slot mapping and theme scoped to the homepage so shared pages retain their existing presentation and rules.