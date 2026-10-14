import bestBuilders from "./blog/best-white-label-website-builders.md?raw";
import bestBuildersImage from "@/assets/best-white-label-website-builders-2026.jpg.asset.json";
import howItWorks from "./blog/how-does-white-label-web-development-work.md?raw";
import howItWorksImage from "@/assets/how-does-white-label-web-development-work.jpg.asset.json";
import inHouse from "./blog/white-label-development-vs-in-house-developers.md?raw";
import inHouseImage from "@/assets/white-label-development-vs-in-house-developers.jpg.asset.json";
import pricing from "./blog/white-label-web-development-pricing.md?raw";
import pricingImage from "@/assets/white-label-web-development-pricing.jpg.asset.json";
import whatIsWhiteLabel from "./blog/what-is-white-label-web-development.md?raw";
import whatIsWhiteLabelImage from "@/assets/what-is-white-label-web-development.jpg.asset.json";
import wordpressAgencies from "./blog/white-label-wordpress-development-for-agencies.md?raw";
import wordpressAgenciesImage from "@/assets/white-label-wordpress-development-for-agencies.jpg.asset.json";
import topBenefits from "./blog/top-5-benefits-of-white-label-web-development-for-digital-agencies.md?raw";
import topBenefitsImage from "@/assets/top-6-white-label-companies-benefits.jpg.asset.json";

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  content: string;
  image?: string;
  imageAlt?: string;
  showRelatedCta?: boolean;
};

export const posts: Post[] = [
  {
    slug: "top-5-benefits-of-white-label-web-development-for-digital-agencies",
    title: "Top 6 White Label Web Development Companies & 5 Benefits for Digital Agencies",
    description:
      "Using a white label development service is a way for digital agencies to increase their capabilities technologically without building a development department within the organization.",
    date: "2026-10-14",
    readingTime: "6 min read",
    category: "Agency Growth",
    content: topBenefits,
    image: topBenefitsImage.url,
    imageAlt: "Top 6 white label web development companies and 5 benefits for digital agencies",
    showRelatedCta: false,
  },
  {
    slug: "white-label-wordpress-development-for-agencies",
    title: "White Label WordPress Development for Agencies: Complete Guide",
    description:
      "Learn how white label WordPress development works for agencies: services, pricing, workflow, partner selection, NDAs, and scaling.",
    date: "2026-08-31",
    readingTime: "38 min read",
    category: "Agency Growth",
    content: wordpressAgencies,
    image: wordpressAgenciesImage.url,
    imageAlt: "White label WordPress development workflow for agencies",
  },
  {
    slug: "white-label-development-vs-in-house-developers",
    title: "White Label Development vs In-House Developers: Which Is Better for Agencies?",
    description:
      "Compare white label development vs in-house developers for agencies: cost, control, scalability, quality, hybrid models, and which to choose.",
    date: "2026-08-31",
    readingTime: "28 min read",
    category: "Agency Growth",
    content: inHouse,
    image: inHouseImage.url,
    imageAlt: "White label development vs in-house developers comparison for agencies",
  },
  {
    slug: "white-label-web-development-pricing",
    title: "White Label Web Development Pricing: Costs, Markups & Agency Margins",
    description:
      "Learn how white label web development pricing works: costs, markups, margins, pricing models, scope creep, recurring revenue, and how to build profitable agency pricing.",
    date: "2026-08-31",
    readingTime: "32 min read",
    category: "Agency Growth",
    content: pricing,
    image: pricingImage.url,
    imageAlt: "White label web development pricing, markups, and agency margin strategy",
  },
  {
    slug: "how-does-white-label-web-development-work",
    title: "How Does White Label Web Development Work? Complete Workflow Explained",
    description:
      "Learn how white label web development works from first client inquiry through launch and maintenance: workflow stages, roles, pricing, revisions, and FAQ.",
    date: "2026-08-31",
    readingTime: "30 min read",
    category: "Agency Growth",
    content: howItWorks,
    image: howItWorksImage.url,
    imageAlt: "How white label web development works: client to agency to delivered website",
  },
  {
    slug: "what-is-white-label-web-development",
    title: "What Is White Label Web Development? Complete 2026 Guide",
    description:
      "Learn what white label web development is, how it works, its benefits, costs, services, and how agencies use white label partners to scale.",
    date: "2026-08-31",
    readingTime: "30 min read",
    category: "Agency Growth",
    content: whatIsWhiteLabel,
    image: whatIsWhiteLabelImage.url,
    imageAlt: "What is white label web development — your brand, our code",
  },
  {
    slug: "best-white-label-website-builders",
    title: "12 Best White Label Website Builders for Agencies (2026)",
    description:
      "Compare the best white label website builder options for agencies and resellers in 2026: branding depth, AI, APIs, WordPress, pricing and reseller programs.",
    date: "2026-08-31",
    readingTime: "28 min read",
    category: "Agency Growth",
    content: bestBuilders,
    image: bestBuildersImage.url,
    imageAlt: "Best white label website builders for agencies and resellers in 2026",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
