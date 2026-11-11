export const homepagePricing = {
  pilot: 490,
  projects: { landing: 590, starter: 890, wordpress: 1490, woocommerce: 3490, design: 1800, maintenance: 99, audit: 450, seo: 2100 },
  plans: [
    { name: "Starter", price: 990, projects: 2, each: 495, features: ["Up to 2 small projects", "About $495 each"] },
    { name: "Growth", price: 1990, projects: 4, each: 498, features: ["Up to 4 projects", "About $498 each", "Dedicated PM"] },
    { name: "Scale", price: 3800, projects: 8, each: 475, features: ["Up to 8 projects", "About $475 each", "Dedicated PM", "Weekly call", "Maintenance for 5 sites"] },
  ],
  rolloverMonths: 1, quarterlyDiscountPercent: 10, depositPercent: 50, launchPercent: 50,
  pilotRevisions: 2, wordpressRevisions: 3, bugFixDays: 30,
};

export const homepageProof: { rating: string; ratingSource: string; ratingUrl: string; lateDeliveryCredit: string; calendarUrl: string; migrationPrice: number | null } = {
  rating: "", ratingSource: "", ratingUrl: "", lateDeliveryCredit: "", calendarUrl: "", migrationPrice: null,
};

export function trackHomepage(event: string, parameters: Record<string, string>) {
  if (typeof window === "undefined") return;
  const analytics = window as Window & { gtag?: (...args: unknown[]) => void; dataLayer?: Record<string, string>[] };
  if (analytics.gtag) analytics.gtag("event", event, parameters);
  else { analytics.dataLayer ??= []; analytics.dataLayer.push({ event, ...parameters }); }
}