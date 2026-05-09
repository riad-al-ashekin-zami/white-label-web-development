import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ArrowUpRight, ShoppingBag, ShoppingCart, CreditCard, Smartphone,
  Search, Gauge, Filter, Wrench, Zap, ShieldCheck, EyeOff, FileLock2, UserX,
  MessageSquare, BadgeCheck, Quote, AlertTriangle, Clock, Bug, Package,
  Layers, Code2, Compass, ClipboardCheck, RefreshCw, Rocket, LifeBuoy,
  Activity, Database, ServerCog, Shirt, Cpu, Sparkles, Store, Repeat,
  Briefcase, Download, Grid3x3, Truck, Lock, TrendingUp, Image as ImageIcon,
  ListTree, MousePointerClick, CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/services/white-label-woocommerce-development")({
  head: () => ({
    meta: [
      { title: "White Label WooCommerce & Ecommerce Development — Whitelayer" },
      {
        name: "description",
        content:
          "Reliable white label WooCommerce and ecommerce development for agencies. Conversion-focused stores, optimized checkout, payments, SEO and maintenance — under your brand.",
      },
      { property: "og:title", content: "White Label WooCommerce & Ecommerce Development" },
      {
        property: "og:description",
        content:
          "Scale your agency with expert white label ecommerce fulfillment. NDA-friendly, conversion-focused, fully under your brand.",
      },
    ],
  }),
  component: EcomPage,
});

function SectionHeader({
  eyebrow, title, sub,
}: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</div>
      <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">{title}</h2>
      {sub && <p className="mt-4 text-pretty text-base leading-relaxed text-muted-foreground">{sub}</p>}
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 bg-hero-glow" aria-hidden />
      <div className="absolute inset-0 bg-grid-soft" aria-hidden />
      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 text-xs font-medium text-muted-foreground shadow-soft">
              <ShoppingBag className="h-3.5 w-3.5 text-brand" />
              White Label WooCommerce &amp; Ecommerce
            </div>
            <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
              Reliable ecommerce development <span className="text-brand">under your brand</span>.
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
              Scalable WooCommerce and Shopify fulfillment for agencies — conversion-focused stores, optimized checkout, secure payments and long-term maintenance.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/contact">Request a free quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-6">
                <Link to="/contact">Book a discovery call</Link>
              </Button>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                { icon: TrendingUp, label: "Conversion-focused" },
                { icon: EyeOff, label: "White label" },
                { icon: Search, label: "SEO-ready stores" },
                { icon: Smartphone, label: "Mobile-first" },
                { icon: Lock, label: "Secure payments" },
                { icon: FileLock2, label: "NDA friendly" },
              ].map((it) => (
                <li key={it.label} className="flex items-center gap-2">
                  <it.icon className="h-4 w-4 text-brand" /> {it.label}
                </li>
              ))}
            </ul>
          </div>
          <EcomMock />
        </div>
      </div>
    </section>
  );
}

function EcomMock() {
  return (
    <div className="relative">
      <div className="rounded-3xl border border-border bg-surface-elevated p-5 shadow-elevated">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
            <Store className="h-3.5 w-3.5 text-brand" />
            <span>store-admin · client-shop.com</span>
          </div>
          <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">Live</span>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { k: "Revenue (30d)", v: "$48.2k" },
            { k: "Conv. rate", v: "3.8%" },
            { k: "AOV", v: "$72" },
          ].map((s) => (
            <div key={s.k} className="rounded-xl border border-border bg-background p-3 text-center">
              <div className="text-lg font-semibold text-ink">{s.v}</div>
              <div className="text-[10px] text-muted-foreground">{s.k}</div>
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {[
            { c: "from-rose-100 to-rose-50" },
            { c: "from-amber-100 to-amber-50" },
            { c: "from-indigo-100 to-indigo-50" },
          ].map((p, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-border bg-background">
              <div className={`h-16 bg-gradient-to-br ${p.c}`} />
              <div className="p-2">
                <div className="h-1.5 w-3/4 rounded bg-ink/70" />
                <div className="mt-1 flex items-center justify-between">
                  <div className="h-1 w-1/3 rounded bg-muted" />
                  <span className="text-[9px] font-semibold text-brand">$24</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-3 space-y-2">
          {[
            { icon: ShoppingCart, label: "Checkout", val: "Optimized" },
            { icon: CreditCard, label: "Stripe · PayPal", val: "Connected" },
            { icon: Filter, label: "Product filters", val: "Indexed" },
            { icon: Search, label: "Product schema", val: "Valid" },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between rounded-xl border border-border bg-background px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand/10 text-brand">
                  <r.icon className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-medium text-ink">{r.label}</span>
              </div>
              <span className="text-[11px] font-medium text-emerald-600">{r.val}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -right-6 -top-6 hidden rounded-2xl border border-border bg-background p-3 shadow-soft md:block">
        <div className="flex items-center gap-2 text-xs font-medium text-ink">
          <Lock className="h-4 w-4 text-brand" /> Secure ecommerce stack
        </div>
      </div>
    </div>
  );
}

/* ---------- PAINS ---------- */
function Pains() {
  const pains = [
    { icon: AlertTriangle, t: "Complex ecommerce workflows", d: "Tax, shipping, variations and inventory tangled up." },
    { icon: CreditCard, t: "Payment gateway issues", d: "Failed checkouts, broken webhooks, declined cards." },
    { icon: Zap, t: "Slow ecommerce sites", d: "Bloated themes killing conversion and rankings." },
    { icon: Smartphone, t: "Bad mobile shopping", d: "Layouts that fall apart on real phones." },
    { icon: ShoppingCart, t: "Checkout problems", d: "High cart abandonment, friction at every step." },
    { icon: Package, t: "Inventory complexity", d: "Variations, stock and SKU chaos." },
    { icon: Bug, t: "Unreliable developers", d: "Disappearing devs at the worst moments." },
    { icon: Wrench, t: "Maintenance overload", d: "Updates, plugins and security nobody owns." },
    { icon: Search, t: "Ecommerce SEO challenges", d: "Faceted nav, duplicate content, weak schema." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies outsource ecommerce"
          title="Ecommerce is where agency timelines break"
          sub="The same ecommerce problems show up across every agency — and they directly impact client revenue."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((p) => (
            <div key={p.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
                <p.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{p.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SOLUTION ---------- */
function Solution() {
  const items = [
    { icon: Layers, t: "Scalable ecommerce architecture", d: "Built to handle growth in products, traffic and SKUs." },
    { icon: TrendingUp, t: "Conversion-focused UI", d: "Designed around purchase decisions, not just visuals." },
    { icon: Smartphone, t: "Responsive shopping", d: "Mobile-first across product, cart and checkout." },
    { icon: Compass, t: "Organized workflows", d: "Predictable delivery from scope to launch." },
    { icon: Search, t: "SEO-friendly store structure", d: "Categories, schema, URLs done properly." },
    { icon: Gauge, t: "Performance optimization", d: "Fast LCP, smooth interactions, optimized assets." },
    { icon: Lock, t: "Secure ecommerce", d: "Hardening, payments, compliance handled." },
    { icon: Wrench, t: "Maintenance support", d: "Long-term care for live stores." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our ecommerce solution"
          title="An ecommerce backend that just works"
          sub="A structured fulfillment system designed around how agencies actually deliver ecommerce client work."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft transition-shadow hover:shadow-elevated">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES INCLUDED ---------- */
function ServicesIncluded() {
  const services = [
    { icon: Code2, t: "WooCommerce Development", d: "Custom WooCommerce builds on top of WordPress." },
    { icon: Sparkles, t: "Custom Ecommerce Design", d: "Modern, conversion-focused store design." },
    { icon: Store, t: "Shopify Integration", d: "Themes, sections and Liquid customization." },
    { icon: Package, t: "Product Page Design", d: "High-converting PDPs with social proof." },
    { icon: RefreshCw, t: "Ecommerce Redesign", d: "Modernize and rebuild outdated stores." },
    { icon: ShoppingCart, t: "Checkout Optimization", d: "Streamlined flows that reduce abandonment." },
    { icon: CreditCard, t: "Payment Gateway Integration", d: "Stripe, PayPal, Apple Pay and more." },
    { icon: Smartphone, t: "Mobile Ecommerce", d: "Touch-optimized shopping across devices." },
    { icon: Search, t: "Ecommerce SEO Setup", d: "Product schema, categories, indexability." },
    { icon: Filter, t: "Product Filtering Systems", d: "Faceted nav that ranks and converts." },
    { icon: Gauge, t: "Speed Optimization", d: "Core Web Vitals tuning for stores." },
    { icon: Wrench, t: "Ecommerce Maintenance", d: "Updates, backups, monitoring and edits." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Ecommerce services included"
          title="Everything ecommerce, under one operational roof"
          sub="A complete ecommerce fulfillment menu — pick what you need, scale as you grow."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.t} className="group rounded-2xl border border-border bg-surface-elevated p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <s.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-45" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-ink">{s.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- WHY CHOOSE US ---------- */
function WhyChooseUs() {
  const items = [
    { icon: EyeOff, t: "True white label", d: "Invisible delivery under your brand." },
    { icon: UserX, t: "No client poaching", d: "Strict no-contact policy." },
    { icon: ShoppingBag, t: "Ecommerce expertise", d: "Years of agency-grade store delivery." },
    { icon: TrendingUp, t: "Conversion-focused dev", d: "Designed around purchase outcomes." },
    { icon: Search, t: "SEO-aware stores", d: "Schema, structure, indexability built in." },
    { icon: Wrench, t: "Maintenance support", d: "Long-term store care." },
    { icon: Layers, t: "Scalable fulfillment", d: "Capacity that grows with your agency." },
    { icon: MessageSquare, t: "Organized comms", d: "Slack/ClickUp with clear rhythm." },
    { icon: Smartphone, t: "Responsive dev", d: "Mobile, tablet and desktop fidelity." },
    { icon: Zap, t: "Fast revisions", d: "Predictable cycles, no silence." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Why agencies choose us"
          title="Operationally mature, ecommerce-first"
          sub="The combination of expertise, structure and discipline agencies rarely find in ecommerce vendors."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <it.icon className="h-4.5 w-4.5" />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-ink">{it.t}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PROCESS ---------- */
function Process() {
  const steps = [
    { icon: ClipboardCheck, t: "Ecommerce Requirement Planning", d: "Catalog, payments, shipping, tax." },
    { icon: Compass, t: "Store Structure & UX Planning", d: "Navigation, taxonomies, filters." },
    { icon: Code2, t: "Design & Development", d: "Custom store build with reusable modules." },
    { icon: ShoppingCart, t: "Product & Checkout Optimization", d: "PDPs, cart and checkout tuned for CR." },
    { icon: Smartphone, t: "Responsive Testing", d: "Cross-device shopping QA." },
    { icon: Gauge, t: "QA & Performance Optimization", d: "CWV, security and ecommerce QA." },
    { icon: Rocket, t: "White Label Delivery", d: "Clean handoff under your brand." },
    { icon: LifeBuoy, t: "Maintenance & Growth Support", d: "Long-term care and improvements." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our ecommerce process"
          title="A predictable ecommerce delivery system"
          sub="Every store moves through the same disciplined ecommerce-aware stages — no chaos, no improvisation."
        />
        <div className="relative mt-12">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-border lg:block" aria-hidden />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.t} className="relative rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <span className="text-xs font-semibold text-muted-foreground">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- TYPES OF STORES ---------- */
function StoreTypes() {
  const types = [
    { icon: Shirt, t: "Fashion Stores", color: "from-rose-100 to-rose-50" },
    { icon: Cpu, t: "Electronics", color: "from-slate-100 to-slate-50" },
    { icon: Sparkles, t: "Beauty & Cosmetics", color: "from-amber-100 to-amber-50" },
    { icon: Store, t: "Local Retail", color: "from-emerald-100 to-emerald-50" },
    { icon: Repeat, t: "Subscription Stores", color: "from-violet-100 to-violet-50" },
    { icon: Briefcase, t: "Service-Based Ecommerce", color: "from-sky-100 to-sky-50" },
    { icon: Download, t: "Digital Product Stores", color: "from-indigo-100 to-indigo-50" },
    { icon: Grid3x3, t: "Multi-Category Stores", color: "from-teal-100 to-teal-50" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Types of stores"
          title="Ecommerce builds across every vertical"
          sub="From single-product stores to multi-category catalogs — we ship across the verticals agencies actually serve."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {types.map((p) => (
            <article key={p.t} className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${p.color}`}>
                <p.icon className="h-10 w-10 text-ink/70" />
              </div>
              <div className="p-4">
                <h3 className="text-sm font-semibold text-ink">{p.t}</h3>
                <p className="mt-1 text-xs text-muted-foreground">Conversion-focused · responsive · SEO-ready</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- CONVERSION-FOCUSED ECOM DESIGN ---------- */
function Conversion() {
  const items = [
    { icon: Package, t: "Optimized product pages", d: "Trust signals, social proof and clear CTAs." },
    { icon: ShoppingCart, t: "Fast checkout flow", d: "Reduced steps, fewer fields, clear progress." },
    { icon: Smartphone, t: "Responsive shopping", d: "Mobile-first product, cart and checkout UX." },
    { icon: TrendingUp, t: "Conversion-focused UI", d: "CTAs, badges and microcopy that convert." },
    { icon: ShieldCheck, t: "Trust-building design", d: "Reviews, guarantees and security cues." },
    { icon: MousePointerClick, t: "Mobile shopping optimization", d: "Tap targets, sticky carts, fast actions." },
    { icon: ListTree, t: "User-friendly navigation", d: "Clean menus, filters and product discovery." },
    { icon: Truck, t: "Clear shipping & policies", d: "Visible info that reduces hesitation." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Conversion-focused design"
          title="Stores designed to actually sell"
          sub="Every layout decision is tied to a measurable ecommerce outcome — not just aesthetics."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- ECOM SEO & PERFORMANCE ---------- */
function SEOPerformance() {
  const items = [
    { icon: Search, t: "Ecommerce SEO structure", d: "Categories, URLs and hierarchy done right." },
    { icon: Gauge, t: "Core Web Vitals", d: "LCP, CLS, INP tuned for store templates." },
    { icon: Database, t: "Product schema", d: "Product, Offer, AggregateRating, Review." },
    { icon: ListTree, t: "Category optimization", d: "Faceted nav that ranks and avoids duplication." },
    { icon: Zap, t: "Speed optimization", d: "Caching, asset and font pipeline tuning." },
    { icon: ImageIcon, t: "Image optimization", d: "Modern formats, responsive sizes, lazy load." },
    { icon: Activity, t: "Crawlability", d: "Robots, sitemaps and crawl efficiency." },
    { icon: Smartphone, t: "Mobile performance", d: "Optimized for the device most shoppers use." },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="lg:sticky lg:top-24">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">Ecommerce SEO &amp; performance</div>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-ink md:text-4xl">
              Stores engineered to rank and convert.
            </h2>
            <p className="mt-4 text-pretty text-muted-foreground">
              Performance and SEO are not optional in ecommerce. We bake them in from the architecture stage.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { v: "97+", k: "Avg. Lighthouse" },
                { v: "<1.8s", k: "Avg. LCP" },
                { v: "+38%", k: "Avg. checkout CR" },
              ].map((s) => (
                <div key={s.k} className="rounded-xl border border-border bg-surface-elevated p-3 text-center shadow-soft">
                  <div className="text-base font-semibold text-ink">{s.v}</div>
                  <div className="text-[10px] text-muted-foreground">{s.k}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-surface-elevated p-4 shadow-soft">
              <div className="flex items-center justify-between text-xs">
                <span className="font-medium text-ink">Store performance</span>
                <span className="font-semibold text-emerald-600">96 / 100</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" style={{ width: "96%" }} />
              </div>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <it.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-ink">{it.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- MAINTENANCE ---------- */
function Maintenance() {
  const items = [
    { icon: Layers, t: "Plugin updates", d: "Tested updates without breaking the store." },
    { icon: Database, t: "Backup systems", d: "Automated daily backups, off-site storage." },
    { icon: ShieldCheck, t: "Security monitoring", d: "Hardening, malware scans and login protection." },
    { icon: CreditCard, t: "Payment gateway monitoring", d: "Webhook health and failed payment alerts." },
    { icon: LifeBuoy, t: "Emergency support", d: "Fast response when something breaks." },
    { icon: Package, t: "Inventory issue handling", d: "Stock, SKU and variation triage." },
    { icon: Activity, t: "Performance monitoring", d: "Continuous CWV and uptime monitoring." },
    { icon: BadgeCheck, t: "Long-term partnership", d: "Ongoing optimization and improvements." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Ecommerce maintenance &amp; support"
          title="Long-term store care, agency-grade"
          sub="Keep every client store healthy, fast and secure with structured ongoing support."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{it.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/services/white-label-website-maintenance" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
            Explore maintenance plans <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- SHOWCASE ---------- */
function Showcase() {
  const items = [
    { tag: "Beauty", title: "Lumen Apothecary", color: "from-rose-100 via-amber-50 to-background" },
    { tag: "Fashion", title: "Northbrook Co.", color: "from-violet-100 via-rose-50 to-background" },
    { tag: "Subscription", title: "Field Goods Co.", color: "from-emerald-100 via-teal-50 to-background" },
    { tag: "Electronics", title: "Volt & Wire", color: "from-slate-100 via-indigo-50 to-background" },
    { tag: "Digital", title: "Mavenly Templates", color: "from-indigo-100 via-sky-50 to-background" },
    { tag: "Retail", title: "Cedar & Stone", color: "from-amber-100 via-amber-50 to-background" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader
          eyebrow="Ecommerce showcase"
          title="Recent ecommerce projects"
          sub="A selection of recent ecommerce builds delivered for our agency partners — under their brand."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <article key={p.title} className="group overflow-hidden rounded-2xl border border-border bg-surface-elevated shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-elevated">
              <div className={`relative h-44 bg-gradient-to-br ${p.color}`}>
                <div className="absolute left-3 top-3 rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-ink backdrop-blur">
                  {p.tag}
                </div>
                <div className="absolute inset-x-3 bottom-3 grid grid-cols-3 gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="rounded-md border border-border bg-background/90 p-1.5 backdrop-blur">
                      <div className="h-6 rounded bg-muted" />
                      <div className="mt-1 flex items-center justify-between">
                        <div className="h-1 w-1/2 rounded bg-ink/40" />
                        <span className="text-[8px] font-semibold text-brand">$24</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between p-4">
                <h3 className="text-sm font-semibold text-ink">{p.title}</h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-45" />
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/portfolio" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2.5 transition-all">
            View full portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ---------- STACK ---------- */
function Stack() {
  const tech = [
    { icon: ShoppingBag, t: "WooCommerce", d: "Custom WooCommerce on WordPress." },
    { icon: Store, t: "Shopify", d: "Themes, sections and Liquid." },
    { icon: CreditCard, t: "Stripe", d: "Payments, subscriptions, checkout." },
    { icon: CreditCard, t: "PayPal", d: "Standard and Express integrations." },
    { icon: Layers, t: "Elementor", d: "Builder mastery for stores." },
    { icon: Filter, t: "Product Filtering", d: "FacetWP, JetSmartFilters and custom." },
    { icon: Search, t: "Ecommerce SEO Tools", d: "Schema, sitemaps and crawl tooling." },
    { icon: ServerCog, t: "Performance Systems", d: "Caching, CDN and asset pipelines." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Technology stack" title="A focused, reliable ecommerce stack" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((t) => (
            <div key={t.t} className="rounded-2xl border border-border bg-surface-elevated p-5 shadow-soft">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink text-brand-foreground">
                <t.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold text-ink">{t.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- TESTIMONIALS ---------- */
function Testimonials() {
  const items = [
    { quote: "We've shipped 18 WooCommerce stores with them. Conversion rates consistently jump and our clients have no idea they exist.", name: "Marcus L.", role: "Founder, Ecommerce Agency" },
    { quote: "Their checkout optimization work alone paid for the partnership. Cart abandonment dropped 22% on the first project.", name: "Priya S.", role: "Head of Delivery, Marketing Agency" },
    { quote: "Multi-store maintenance is completely off our plate now. Updates, security, performance — all handled.", name: "Daniel R.", role: "Owner, Digital Agency" },
  ];
  return (
    <section className="border-y border-border bg-muted/30 py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="Testimonials" title="Trusted by agencies for ecommerce fulfillment" />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {items.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-surface-elevated p-6 shadow-soft">
              <Quote className="h-6 w-6 text-brand" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand/10 font-semibold text-brand">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "Do you support WooCommerce?", a: "Yes — WooCommerce is our primary ecommerce platform. We build custom stores, themes, checkout flows and integrations." },
    { q: "Can you optimize ecommerce SEO?", a: "Yes. Product schema, category structure, faceted nav, sitemaps and Core Web Vitals are all part of our standard ecommerce build." },
    { q: "Do you build mobile-first ecommerce stores?", a: "Always. The mobile shopping experience is built first, then scaled up to tablet and desktop with full fidelity." },
    { q: "Do you support payment gateways?", a: "Yes — Stripe, PayPal, Apple Pay, Google Pay and most regional gateways. We handle integration and webhook reliability." },
    { q: "Do you provide ecommerce maintenance?", a: "Yes. We offer dedicated white label maintenance plans for ongoing updates, backups, security, payment monitoring and performance." },
    { q: "How do revisions work?", a: "Each project includes structured revision rounds with clear scope and ownership — no open-ended back-and-forth." },
    { q: "Can you handle large ecommerce stores?", a: "Yes. We build for stores with thousands of SKUs, variations and traffic spikes — with the right caching and architecture." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeader eyebrow="FAQ" title="Ecommerce development questions" />
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-border bg-surface-elevated p-2 shadow-soft">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="px-4 text-left text-sm font-semibold text-ink hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="px-4 text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-ink p-10 text-brand-foreground shadow-elevated md:p-16">
          <div className="absolute inset-0 bg-grid-soft opacity-20" aria-hidden />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-foreground/70">Let's build together</div>
              <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Need a reliable white label ecommerce partner?
              </h2>
              <p className="mt-4 max-w-xl text-pretty text-brand-foreground/70">
                Scale your agency with expert WooCommerce and ecommerce fulfillment — under your brand, on predictable timelines.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Button asChild size="lg" className="rounded-full bg-brand-foreground px-6 text-ink hover:bg-brand-foreground/90">
                <Link to="/contact">Request a free quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-6 text-brand-foreground hover:bg-white/10 hover:text-brand-foreground">
                <Link to="/contact">Schedule a discovery call</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- PAGE ---------- */
function EcomPage() {
  return (
    <div className="min-h-screen bg-background text-ink">
      <Header />
      <main>
        <Hero />
        <Pains />
        <Solution />
        <ServicesIncluded />
        <WhyChooseUs />
        <Process />
        <StoreTypes />
        <Conversion />
        <SEOPerformance />
        <Maintenance />
        <Showcase />
        <Stack />
        <Testimonials />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
