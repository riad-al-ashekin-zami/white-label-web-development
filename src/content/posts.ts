import bestBuilders from "./blog/best-white-label-website-builders.md?raw";
import bestBuildersImage from "@/assets/best-white-label-website-builders-2026.jpg.asset.json";

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
