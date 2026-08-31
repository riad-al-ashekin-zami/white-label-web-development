import bestBuilders from "./blog/best-white-label-website-builders.md?raw";
import bestBuildersImage from "@/assets/best-white-label-website-builders-2026.jpg.asset.json";
import howItWorks from "./blog/how-does-white-label-web-development-work.md?raw";
import howItWorksImage from "@/assets/how-does-white-label-web-development-work.jpg.asset.json";
import whatIsWhiteLabel from "./blog/what-is-white-label-web-development.md?raw";
import whatIsWhiteLabelImage from "@/assets/what-is-white-label-web-development.jpg.asset.json";

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
};

export const posts: Post[] = [
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
    imageAlt: "White label web development workflow from client to agency to partner to website",
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
