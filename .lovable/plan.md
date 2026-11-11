# Homepage redesign with protected content

## Scope and resolved choices

Redesign `/` only and create `/fort-worth-web-design`. Existing pages, URLs, forms, prices and shared presentation remain unchanged outside the homepage. Use the brief’s new homepage prices even where `/pricing` differs, as confirmed. Keep Hannah Reid’s exact quote; replace the Marcus Patel and Sara Bennett reviews with bracketed placeholders, as confirmed. Remove the “client names anonymized” claim as requested.

Approval of this plan authorizes the requested title, description and heading changes below, overriding the earlier homepage-only keyword-addition plan for this redesign. No website edits or publication have occurred during planning.

## Exact SEO changes

| Element | Current | Proposed |
| --- | --- | --- |
| Title | White Label Web Development for Agencies &#124; WLWD | White Label Web Development for Agencies - From $490 |
| Description | White label web development for agencies: website development services and a dedicated development team, delivered under your brand and NDA-protected. | Agency-ready white label WordPress, WooCommerce & landing page builds. Fixed prices from $490, revisions included, NDA & no-poaching. Get a quote today. |
| H1 | White Label Web Development for Agencies | Unchanged |
| Hero paragraph | Two existing long paragraphs | We build WordPress, WooCommerce and landing pages under your brand. Fixed prices from $490, revisions included, NDA on every project, quote within one business day. |

Move both original hero paragraphs verbatim into the explanatory section rather than deleting their SEO copy. Synchronize Open Graph and Twitter title/description. Keep the homepage URL, self-canonical and exactly one existing index/follow robots tag unchanged.

**Verified baseline on November 11, 2026:** live and preview both have the current title/description above, the same H1, and **28** case-insensitive core-keyword occurrences in rendered body text. The redesigned homepage must retain at least **28** core occurrences; report the actual final count rather than padding copy or projecting an unverified exact number.

## Layout and content

Implement the brief’s section sequence:

1. Sticky WLWD header with Services, Process, Portfolio, Pricing, Agency Partner, About and Blog; desktop quote button and mobile quote bar.
2. High-contrast, image-free split hero with the exact short paragraph, two requested links, three checks and four-field quote form. Show the delivery proof with `[4]` still bracketed; hide ratings until real values are configured.
3. Navy statistics band using the supplied figures and retaining `[3-7]` as a placeholder.
4. Conditional trust row with IMG-11 and platform text badges, hidden while no real badge or rating is configured.
5. Nine service cards with supplied names, descriptions, prices and existing service links. Starter 5-Page Website links to the existing WordPress service because no starter-site URL exists and no other new routes are authorized. Migration remains `From $[X]`. Preserve existing service descriptions and introductory copy alongside the new summary.
6. Four process steps with supplied timing lines. Preserve original process descriptions and `/process` link; keep `[7-10]` bracketed.
7. Pricing snapshot: $490 new-partner pilot, all supplied project rates, $990/$1,990/$3,800 retainers, Dedicated Partner—Custom, rollover/cancellation terms, quarterly savings, deposits and resale table exactly as supplied. Preserve original partner-pricing and partner-program copy/links in this area.
8. Partner-protection cards with supplied guarantees; omit late-delivery credit until a confirmed value replaces the bracketed example.
9. Explanatory two-column layouts retaining the existing model, audience, problem, why-us and comparison copy. Include the two moved hero paragraphs. Keep their original headings as subordinate headings beneath requested section headings where necessary to preserve heading hierarchy and text.
10. Six portfolio items with IMG-01–06, bracketed client/build descriptions, PageSpeed scores and delivery days. No fabricated screenshots or case-study numbers. Retain existing project labels elsewhere in their respective cards; remove only the explicitly rejected anonymization claim.
11. Three reviews with IMG-07–09. Hannah’s existing quote/name/role remain exact; unprovided company link and specific result stay bracketed. Other two reviews use placeholders with no fabricated stars or ratings.
12. IMG-10 team section with bracketed biography/years and “A named project manager on every project.”
13. Accordion with all **14 original questions and answers unchanged**, plus the four supplied questions with `[Answer to be provided]`. Original answers remain in initial HTML. Keep FAQ JSON-LD synchronized for the 14 factual existing answers; do not mark placeholder answers as factual schema.
14. Navy final CTA retaining its original supporting copy, the same four-field form and quote link. Show the calendar placeholder as unavailable until a real link is configured—no broken or invented booking URL.
15. Homepage footer retaining existing columns, social links, contact text and NDA/Privacy/Terms links; add the full Fort Worth address and the new local-page link here only.

Preserve all existing body text and internal-link destinations except the explicitly approved review replacements, anonymization-claim removal and relocation of the two local sections. Existing short headings remain as appropriate subordinate headings when the brief introduces new H2s.

## Fort Worth page

Move “Built for Texas Businesses That Need Websites” and “Roadrunner Media Website Design” with their full original text and links into `/fort-worth-web-design`. Add a unique H1, page-specific title/description/social metadata, self-canonical and one index/follow robots tag. Move the corresponding local-business structured data from the homepage to this page. Link the new page from the homepage footer only; do not change other-page footers, navigation, sitemap or robots.txt under this scope.

## Visual direction and empty images

Use the exact requested Inter typography, 1200px content width, 8px spacing rhythm, 14–22px radii, soft shadows and navy/blue/mint/off-white palette. All new colors are semantic tokens scoped to the homepage, leaving existing site styling unchanged. Remove the homepage dashboard and lavender effects. No stock/AI imagery, fake logos or screenshots.

Provide IMG-01–12 through one image configuration, with optional URL and empty alt text. Empty slots have labeled dashed light-blue boxes at the specified aspect ratios; headshots are circular. Configured images replace placeholders without layout shifts, have explicit dimensions, and lazy-load below the fold. Support ID-named local asset discovery plus optional configured image URLs; uploading alone cannot promise a replacement unless the file is available through that asset mapping. Leave IMG-12 without a social-image tag until a genuine absolute HTTPS URL is configured. Avoid changing the shared root social defaults for other pages.

## Forms, tracking and implementation details

- Two instances of one homepage-only form: Name, Work email, Project type and Brief. Use the existing Formspree endpoint `https://formspree.io/f/mvznwdra`, with field validation, pending/error states and inline success; never show success on a failed submission. Existing `/contact` behavior remains unchanged. No new phone requirement.
- Send `generate_lead` once after a successful submission, with `form_location` equal to `hero` or `footer`. Use existing GA4 if present, otherwise dataLayer pushes without adding an external tracking service.
- Track requested quote/pricing/pilot buttons as `cta_click` with location; retainer contact selections as `plan_click` with plan name. Avoid submitting personal form details into analytics.
- Use dedicated homepage components/configuration and locally scoped theme rules rather than changing shared sections for other pages. Reuse existing design-system controls.
- Add focused tests for the supplied prices, plan limits, rollover, deposits, savings and conditional unconfirmed values. Record the homepage isolation decision in the architecture rules.

## Verification and delivery

Capture baseline text, link destinations and non-homepage output before implementation. Compare all preserved text and all 14 FAQ answers afterward; account explicitly for permitted relocations/replacements. Check one H1, canonical and robots tag, synchronized social descriptions, FAQ schema, and core count at least 28. Compare other existing pages against baseline.

Test desktop/mobile layout, empty image slots, menu, accordion, quote-form validation and real successful Formspree submission for both locations, including inline confirmation and tracking. Acknowledge that this verification creates test inquiries. Verify no horizontal overflow, blocked links or new runtime/build errors.

Deliver the redesign in preview and report checks and remaining placeholders. **Do not publish automatically:** this uploaded brief asks for a redesign, not publication; the live site remains unchanged until separately authorized.
