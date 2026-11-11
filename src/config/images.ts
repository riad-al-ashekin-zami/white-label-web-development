type ImageSlot = { url?: string; alt: string; width: number; height: number; label: string };
export const homepageImages: Record<string, ImageSlot> = {
  ...Object.fromEntries(Array.from({ length: 6 }, (_, i) => [`IMG-0${i + 1}`, { alt: "", width: 1200, height: 750, label: "Portfolio screenshot" }])),
  ...Object.fromEntries(Array.from({ length: 3 }, (_, i) => [`IMG-0${i + 7}`, { alt: "", width: 240, height: 240, label: "Testimonial headshot" }])),
  "IMG-10": { alt: "", width: 1200, height: 800, label: "Team photo" },
  "IMG-11": { alt: "", width: 240, height: 80, label: "Clutch / Google rating badge" },
  "IMG-12": { alt: "", width: 1200, height: 630, label: "Open Graph share image" },
};

const localImages = import.meta.glob<string>("/src/assets/IMG-*.{webp,png,jpg,jpeg,avif}", { eager: true, query: "?url", import: "default" });
const assetPointers = import.meta.glob<{ url: string }>("/src/assets/IMG-*.asset.json", { eager: true, import: "default" });
for (const [path, asset] of Object.entries({ ...localImages, ...assetPointers })) {
  const id = path.match(/IMG-\d{2}/)?.[0];
  if (id && homepageImages[id]) homepageImages[id].url = typeof asset === "string" ? asset : asset.url;
}