import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions – Professional ITS",
  description:
    "End-to-end e-commerce solutions — catalog operations, marketplace management, backoffice support, product data cleanup, and high-SKU scaling. Handled by specialists.",
  keywords: [
    "ecommerce solutions",
    "catalog operations",
    "marketplace management",
    "ecommerce backoffice",
    "product data cleanup",
  ],
  openGraph: {
    title: "Solutions – Professional ITS",
    description:
      "End-to-end e-commerce solutions handled by specialists. From catalog builds to marketplace operations.",
    url: "https://professionalits.com/solutions",
    siteName: "Professional ITS",
    type: "website",
  },
  alternates: {
    canonical: "https://professionalits.com/solutions",
  },
};

const solutions = [
  {
    num: "01",
    title: "Catalog & product data operations",
    href: "/solutions/catalog-product-data",
    ai: true,
    tagline: "Build, enrich, and maintain your product catalog at any scale.",
    bullets: [
      "Bulk product uploads to any platform",
      "Attribute & filter structuring",
      "AI-assisted description enrichment",
      "Deduplication and data cleanup",
      "Supplier feed ingestion",
      "Ongoing catalog maintenance retainers",
    ],
    platforms: ["Amazon", "Shopify", "eBay", "BigCommerce", "WooCommerce", "Magento"],
  },
  {
    num: "02",
    title: "Marketplace operations",
    href: "/solutions/marketplace-operations",
    ai: false,
    tagline: "Listing optimisation, Buy Box strategy, and competitor intelligence across every major marketplace.",
    bullets: [
      "Listing creation — titles, bullets, descriptions",
      "A+ Content and Enhanced Brand Content",
      "Buy Box monitoring and repricing",
      "Suppressed & stranded listing recovery",
      "FBA shipment planning and reconciliation",
      "Account health monitoring",
    ],
    platforms: ["Amazon", "eBay", "Walmart", "Etsy", "BestBuy", "Newegg"],
  },
  {
    num: "03",
    title: "Ecommerce backoffice management",
    href: "/solutions/ecommerce-backoffice",
    ai: false,
    tagline: "Customer support, order processing, and inventory monitoring — on an SLA you can hold us to.",
    bullets: [
      "Customer support — email, chat, and ticket management",
      "Order processing and fulfilment coordination",
      "Inventory monitoring and low-stock alerts",
      "Returns and refund handling",
      "Repricing and competitor monitoring",
      "Escalation management and reporting",
    ],
    platforms: ["Shopify", "WooCommerce", "Amazon", "eBay", "BigCommerce"],
  },
  {
    num: "04",
    title: "Product data cleanup & optimisation",
    href: "/solutions/product-data-cleanup",
    ai: true,
    tagline: "Messy data costs you sales. We audit, deduplicate, enrich, and restructure at scale.",
    bullets: [
      "Full catalog audit — completeness and quality scoring",
      "Duplicate detection and merging",
      "Attribute normalisation and gap-filling",
      "Image compliance review",
      "SEO-optimised title and description rewrites",
      "Structured findings report with recommendations",
    ],
    platforms: ["All platforms"],
  },
  {
    num: "05",
    title: "High-SKU catalog scaling",
    href: "/solutions/high-sku-scaling",
    ai: false,
    tagline: "For distributors, wholesalers, and multi-brand sellers. Scale to 500,000+ SKUs without scaling headcount.",
    bullets: [
      "Supplier feed ingestion in any format",
      "Automated field mapping to platform taxonomy",
      "High-volume bulk upload pipelines — 500+ SKUs/day",
      "Multi-brand catalog architecture",
      "Cross-platform synchronisation",
      "Dedicated account manager for large accounts",
    ],
    platforms: ["Amazon", "eBay", "Shopify", "BigCommerce", "WooCommerce"],
  },
];

const CheckIcon = () => (
  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
    <svg viewBox="0 0 10 10" style={{ width: "9px", height: "9px" }} fill="none">
      <path d="M2 5L4.5 7.5L8 3" stroke="#2D6A4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function SolutionsPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/" style={{ color: "#888780", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#2D6A4F" }}> / Solutions</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "14px" }}>
          Everything we handle,{" "}
          <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>end to end.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, maxWidth: "560px", marginBottom: "28px" }}>
          Five core solutions covering every operational layer of e-commerce — catalog, marketplace, backoffice, data quality, and scaling. Each handled by dedicated specialists, not generalists.
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Link href="/audit" style={{ background: "#2D6A4F", color: "#fff", padding: "12px 24px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>
            Get free catalog audit
          </Link>
          <Link href="/pricing" style={{ border: "0.5px solid #B4B2A9", color: "#555550", padding: "12px 24px", borderRadius: "4px", fontSize: "13px", textDecoration: "none" }}>
            View pricing
          </Link>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div style={{ background: "#2D6A4F", padding: "20px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {[
          { n: "5", l: "Core solution areas" },
          { n: "1500+", l: "Stores served globally" },
          { n: "15 yrs", l: "E-commerce operations" },
          { n: "98%", l: "Client retention rate" },
        ].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500 }}>{s.n}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── SOLUTIONS LIST ── */}
      <style>{`
        .solutions-page { padding: 56px 32px; }
        .sol-card { background: #fff; border: 0.5px solid #D5C9B0; border-radius: 8px; padding: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 16px; transition: border-color 0.15s; text-decoration: none; color: inherit; }
        .sol-card:hover { border-color: #2D6A4F; }
        .sol-card:hover .sol-learn { color: #1a4a35; }
        .sol-bullets { display: flex; flex-direction: column; gap: 8px; }
        @media (max-width: 768px) {
          .solutions-page { padding: 40px 16px; }
          .sol-card { grid-template-columns: 1fr; gap: 16px; }
        }
      `}</style>

      <section className="solutions-page">
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>ALL SOLUTIONS</div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 500, color: "#1C1C1C", marginBottom: "36px" }}>
          Five areas. One team.
        </h2>

        {solutions.map((s) => (
          <Link key={s.num} href={s.href} className="sol-card">
            {/* Left — info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "#D5C9B0", fontWeight: 500 }}>{s.num}</span>
                {s.ai && (
                  <span style={{ fontSize: "10px", color: "#2D6A4F", background: "#E8F5EE", padding: "3px 8px", borderRadius: "3px", fontWeight: 500 }}>
                    AI-assisted
                  </span>
                )}
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#1C1C1C", marginBottom: "8px", lineHeight: 1.25 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65, marginBottom: "16px" }}>
                {s.tagline}
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                {s.platforms.map((p) => (
                  <span key={p} style={{ fontSize: "10px", color: "#888780", border: "0.5px solid #D5C9B0", borderRadius: "3px", padding: "2px 8px", background: "#F5F0E8" }}>
                    {p}
                  </span>
                ))}
              </div>
              <span className="sol-learn" style={{ fontSize: "12px", color: "#2D6A4F", fontWeight: 500, transition: "color 0.15s" }}>
                Learn more →
              </span>
            </div>

            {/* Right — bullets */}
            <div className="sol-bullets">
              {s.bullets.map((b) => (
                <div key={b} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <CheckIcon />
                  <span style={{ fontSize: "12px", color: "#555550", lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </section>

      {/* ── CTA ── */}
      <div style={{ background: "#1C1C1C", padding: "48px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "24px", flexWrap: "wrap" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500, marginBottom: "8px" }}>
            Not sure which solution fits?
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "420px", lineHeight: 1.7 }}>
            Start with a free catalog audit. We&apos;ll review your setup and recommend exactly where we can have the most impact.
          </div>
        </div>
        <Link href="/audit" style={{ background: "#2D6A4F", color: "#fff", padding: "13px 28px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
          Get free catalog audit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
