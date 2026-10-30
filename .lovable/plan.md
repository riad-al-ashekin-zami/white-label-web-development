# Homepage-only keyword additions — approval required

## Phase 1: no website changes

The live homepage was checked on October 30, 2026. No website content, settings or published pages have been changed. This plan proposes five edits only; applying them and publishing must wait for approval. Ranking improvements cannot be guaranteed.

### Two conflicts in the supplied wording

- The supplied meta description is **162 characters**, not under 160. The proposed version below is **150 characters** and keeps the required opening.
- The supplied additions introduce the literal phrase **“white label website developer” five times** across visible copy and the meta description (plural “developers” contains that literal phrase). To keep new occurrences at two, the meta description, hero addition and process addition below use “development team” instead. The requested new FAQ is unchanged.

These three deviations are proposals, not applied changes. Approving this plan approves precisely the wording below rather than the conflicting supplied versions.

## Exact current → proposed text

All existing sentences and links remain. Only the description is replaced; all visible edits are additions.

| Element | Current text | Proposed text |
| --- | --- | --- |
| A — Meta description | White label web development for agencies. We design, build and maintain client websites under your brand — on time, NDA-protected, at partner rates. | White label web development for agencies: website development services and a dedicated development team, delivered under your brand and NDA-protected. |
| B — First hero paragraph | We're the white label web development team behind 120+ agencies, marketing teams and consultants across North America. You sell the website, we build it, and your client only ever sees your brand — SEO-ready, Core Web Vitals optimized and delivered in 5–7 business days. | We're the white label web development team behind 120+ agencies, marketing teams and consultants across North America. As a white label web development agency, we provide white label website development services through a dedicated development team that works as an extension of your team. You sell the website, we build it, and your client only ever sees your brand — SEO-ready, Core Web Vitals optimized and delivered in 5–7 business days. |
| C — Services introduction, below H2 “White Label Web Development Services” | Everything your agency needs to deliver professional websites at scale. Our white label web development services give each web design agency and web development agency a complete production lifecycle — from design and development to launch and maintenance, all under your brand. | Everything your agency needs to deliver professional websites at scale. Our white label web development services give each web design agency and web development agency a complete production lifecycle — from design and development to launch and maintenance, all under your brand. Every service below is part of our white label website development offering, delivered under your agency's brand. |
| D — Step “02 Your White Label Web Developers Build” description | Your PM and development team get to work with daily progress updates and a private staging URL. Every site is built with clean semantic HTML, responsive across all breakpoints, and tuned for Core Web Vitals from day one. | Your PM and development team get to work with daily progress updates and a private staging URL. Every site is built with clean semantic HTML, responsive across all breakpoints, and tuned for Core Web Vitals from day one. Your dedicated development team stays on the project from kickoff to launch. |
| E — FAQ insertion point | **How is a white label web developer different from a freelancer?** — A white label web developer operates as a structured production partner with dedicated project managers, QA processes, version control and documented workflows. Unlike freelancers who often work alone and communicate inconsistently, a white label web development agency provides reliable turnaround, scalable capacity and formal confidentiality through NDAs — agency-grade infrastructure without the freelancer risk. | Keep this question and answer unchanged. Immediately after it, insert **What does a white label website developer do for an agency?** — A white label website developer designs, builds, tests and maintains websites for your clients under your agency's brand. You manage the client relationship; we handle the development work behind the scenes and hand over finished, branded deliverables. |
| E — FAQPage JSON-LD | The new question is absent. Existing 13 questions remain. | Append the identical new question/answer at the matching position in the homepage’s FAQPage data; total becomes 14. |

The second hero paragraph stays exactly as it is:

> White label website development lets you add capacity without hiring. Work with a white label web developer through one dedicated project manager, review on private staging links and hand over a tested site under your name.

### New FAQ, word for word

**What does a white label website developer do for an agency?**

A white label website developer designs, builds, tests and maintains websites for your clients under your agency's brand. You manage the client relationship; we handle the development work behind the scenes and hand over finished, branded deliverables.

The answer will remain in first-load HTML, not loaded only after a click. The homepage already renders FAQ answers this way.

## Before / projected after counts

Counting method: case-insensitive literal substring occurrences in the live rendered **body text**, including header, footer and every FAQ answer; exclude metadata, image alt text and JSON-LD. “Projected after” adds only the approved visible sentences; no changes have been applied.

| Phrase | Visible BEFORE | Visible projected AFTER | New occurrences across visible additions + proposed description |
| --- | ---: | ---: | ---: |
| white label web development | 27 | 28 | 2 |
| white label web development services | 2 | 2 | 0 |
| white label website development | 1 | 3 | 2 |
| white label website developer | 0 | 2 | 2 |
| white label web development agency | 2 | 3 | 1 |
| white label website development services | 0 | 1 | 1 |

**Core keyword: 27 before → 28 projected after.** The supplied, unadjusted additions would also produce 28 core occurrences, but would violate the developer-phrase limit.

The two-occurrence limit here concerns new authored copy and the replacement meta description, not existing occurrences. Matching FAQ JSON-LD repeats the same FAQ entry as required; it is not an additional visible placement. Counting raw source including that required schema mirror would add another two developer-phrase occurrences. Social descriptions currently share the homepage description; keep this synchronization if A is approved, rather than adding different promotional text.

## Protected elements — stay unchanged

| Element | Exact live value |
| --- | --- |
| Title | White Label Web Development for Agencies | WLWD |
| H1 | White Label Web Development for Agencies |
| URL / canonical | https://whitelabelwebsitedevelopment.com/ |
| Robots | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 |

Every existing H2/H3, sentence, section, FAQ item and link remains. No new page or URL, other-page edits, platform changes, or invented claims. Shared header/footer text stays unchanged.

## Other-page check — report only

**24 non-homepage sitemap URLs audited, including all 7 blog posts; 57 matching title/H1/H2/H3 elements across 23 pages; zero failed requests.** `/white-label-services`, `/agency-partner` and `/pricing` were all included. `/partners` has no matches.

The attached **Homepage-keyword-other-pages-audit.md** contains the complete table: full page URL, heading level and exact live text for every match, plus coverage for every checked URL. It includes shared footer headings because they appear in each page’s rendered HTML. No changes to these matches are proposed or authorized by this task.

## Phase 2 — only after approval

1. Apply exactly A–E above on the homepage only. Scope shared components to homepage use; preserve all other rendered pages.
2. Verify the rendered title, H1, canonical, robots and every existing H2/H3 against the saved baseline. Confirm no existing text, FAQ or link was removed.
3. Verify the new FAQ in first-load HTML and identical FAQPage JSON-LD; recount the core phrase from the rendered page. Check added text fits without changing the design.
4. Provide pasted evidence: before/after description, exact new sentences, actual before/after counts, unchanged rendered title/H1, and visible/schema FAQ entry. Confirm no other page changed.
5. Publish the approved homepage-only changes, then repeat the key checks against the live domain and report the actual result.

**Stop here and await approval.**
