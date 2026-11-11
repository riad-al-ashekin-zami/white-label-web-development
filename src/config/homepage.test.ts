import { describe, it, expect } from "vitest";
import { homepagePricing as p, homepageProof } from "./homepage";

describe("approved homepage commercial rules", () => {
  it("sets the new-partner pilot to $490 with two revisions", () => { expect(p.pilot).toBe(490); expect(p.pilotRevisions).toBe(2); });
  it("sets all requested project prices", () => { expect(p.projects).toEqual({ landing: 590, starter: 890, wordpress: 1490, woocommerce: 3490, design: 1800, maintenance: 99, audit: 450, seo: 2100 }); });
  it("sets Starter to $990 for up to two projects", () => { expect(p.plans[0]?.price).toBe(990); expect(p.plans[0]?.projects).toBe(2); });
  it("sets Growth to $1990 for up to four projects", () => { expect(p.plans[1]?.price).toBe(1990); expect(p.plans[1]?.projects).toBe(4); });
  it("sets Scale to $3800 for up to eight projects", () => { expect(p.plans[2]?.price).toBe(3800); expect(p.plans[2]?.projects).toBe(8); expect(p.plans[2]?.features).toContain("Maintenance for 5 sites"); });
  it("rolls credits over for one month", () => expect(p.rolloverMonths).toBe(1));
  it("discounts quarterly billing by 10 percent", () => expect(p.quarterlyDiscountPercent).toBe(10));
  it("requires 50 percent deposit and 50 percent on launch", () => { expect(p.depositPercent).toBe(50); expect(p.launchPercent).toBe(50); });
  it("includes three WordPress revision rounds", () => expect(p.wordpressRevisions).toBe(3));
  it("includes a thirty-day bug fix window", () => expect(p.bugFixDays).toBe(30));
  it("keeps unconfirmed migration pricing and late credits unset", () => { expect(homepageProof.migrationPrice).toBeNull(); expect(homepageProof.lateDeliveryCredit).toBe(""); });
  it("keeps ratings and calendar unavailable without real values", () => { expect(homepageProof.rating).toBe(""); expect(homepageProof.calendarUrl).toBe(""); });
});