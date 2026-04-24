import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Catalog & Product Data Operations – Professional ITS",
  description:
    "High-SKU catalog builds, product data enrichment, attribute structuring, and bulk uploads. AI-assisted processing for faster turnaround without sacrificing accuracy.",
  keywords: ["catalog management", "product data operations", "bulk product uploads", "attribute structuring", "ecommerce catalog"],
  openGraph: {
    title: "Catalog & Product Data Operations – Professional ITS",
    description: "High-SKU catalog builds, enrichment, attribute structuring, and bulk uploads. AI-assisted.",
    url: "https://professionalits.com/solutions/catalog-product-data",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  alternates: {
    canonical: "https://professionalits.com/solutions/catalog-product-data",
  },
};

const includes = [
  { title: "Bulk product uploads", body: "Flat files, CSV feeds, or direct platform tools — Amazon, Shopify, eBay, BigCommerce, WooCommerce, Magento." },
  { title: "Attribute & filter structuring", body: "Standardised attributes mapped to platform taxonomy. Filter-ready for on-site search engines." },
  { title: "AI-assisted enrichment", body: "Automated attribute extraction from PDFs and datasheets. AI-generated descriptions with human QA." },
  { title: "Deduplication", body: "Duplicate detection and merging at scale. Clean SKUs, clean catalog, clean data." },
  { title: "Supplier feed ingestion", body: "We ingest raw supplier data in any format and transform it into platform-ready product records." },
  { title: "Ongoing maintenance", body: "Monthly retainers for catalog upkeep — new products, price changes, attribute updates." },
];

const steps = [
  { n: "01", title: "Data intake", body: "You send us your supplier data, existing catalog export, or raw product information in any format." },
  { n: "02", title: "Mapping & structuring", body: "We map your fields to platform taxonomy, structure attributes, and prepare upload templates." },
  { n: "03", title: "Enrichment & QA", body: "AI-assisted enrichment fills gaps. Human QA checks every record before submission." },
  { n: "04", title: "Upload & verify", body: "Bulk upload to your platform. We monitor for errors and correct them before handoff." },
];

const CheckIcon = () => (
  <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
    <svg viewBox="0 0 10 10" style={{ width: "10px", height: "10px" }} fill="none">
      <path d="M2 5L4.5 7.5L8 3" stroke="#2D6A4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function CatalogProductDataPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/solutions" style={{ color: "#888780", textDecoration: "none" }}>Solutions</Link>
          <span style={{ color: "#2D6A4F" }}> / Catalog & Product Data</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#E8F5EE", color: "#085041", fontSize: "10px", padding: "4px 10px", borderRadius: "3px", marginBottom: "16px" }}>
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2D6A4F" }} />
          AI-assisted
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "14px" }}>
          Catalog &amp; product data <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>operations.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, maxWidth: "580px", marginBottom: "28px" }}>
          High-SKU catalog builds, product data enrichment, attribute structuring, and bulk uploads — for businesses where the catalog is the engine. AI-assisted processing means faster turnaround without sacrificing accuracy.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
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
          { n: "99.1%", l: "Accuracy rate" },
          { n: "48hr", l: "Standard turnaround" },
          { n: "500K+", l: "SKUs processed" },
          { n: "15yrs", l: "Operations experience" },
        ].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500 }}>{s.n}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── WHAT'S INCLUDED ── */}
      <section style={{ padding: "56px 32px", borderBottom: "0.5px solid #D5C9B0" }}>
  <style>{`
    .includes-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    @media (max-width: 1024px) {
      .includes-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    @media (max-width: 640px) {
      .includes-grid {
        grid-template-columns: 1fr;
      }
    }
    @media (max-width: 640px) {
      .includes-section {
        padding: 40px 16px;
      }
      .includes-heading {
        font-size: 22px !important;
      }
    }
  `}</style>

  <div
    className="includes-section"
    style={{ padding: "56px 32px", borderBottom: "0.5px solid #D5C9B0" }}
  >
    <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>
      WHAT&apos;S INCLUDED
    </div>
    <h2
      className="includes-heading"
      style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#1C1C1C", marginBottom: "8px" }}
    >
      Everything in the catalog pipeline.
    </h2>
    <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65, maxWidth: "520px", marginBottom: "36px" }}>
      From raw supplier data to clean, live, platform-ready listings. Every service below is available standalone or as part of a retainer.
    </p>

    <div className="includes-grid">
      {includes.map((item) => (
        <div
          key={item.title}
          style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "20px" }}
        >
          <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "8px" }}>
            <CheckIcon />
            <div style={{ fontSize: "14px", fontWeight: 500, color: "#1C1C1C" }}>{item.title}</div>
          </div>
          <div style={{ fontSize: "12px", color: "#555550", lineHeight: 1.6, paddingLeft: "28px" }}>
            {item.body}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── HOW IT WORKS ── */}
      <section style={{ padding: "56px 32px", background: "#F5F0E8", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>HOW IT WORKS</div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#1C1C1C", marginBottom: "36px" }}>
          From raw data to live listings.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ position: "relative" }}>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: "36px", color: "#D5C9B0", fontWeight: 500, marginBottom: "12px" }}>{s.n}</div>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "#1C1C1C", marginBottom: "8px" }}>{s.title}</div>
              <div style={{ fontSize: "12px", color: "#555550", lineHeight: 1.65 }}>{s.body}</div>
              {i < steps.length - 1 && (
                <div style={{ position: "absolute", top: "20px", right: "-8px", fontSize: "20px", color: "#D5C9B0" }}>→</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── PLATFORMS ── */}
      <section style={{ padding: "40px 32px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "16px" }}>PLATFORMS WE UPLOAD TO</div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {["Amazon", "Shopify", "eBay", "BigCommerce", "WooCommerce", "Magento", "Walmart", "Etsy"].map((p) => (
            <div key={p} style={{ border: "0.5px solid #D5C9B0", borderRadius: "3px", padding: "7px 16px", fontSize: "13px", color: "#555550", background: "#FDFAF5" }}>{p}</div>
          ))}
        </div>
      </section>

      {/* ── CTA BANNER ── */}
        <style>{`
        .audit-banner { background: #1C1C1C; padding: 40px 32px; display: flex; justify-content: space-between; align-items: center; }
        .audit-banner-btn { margin-left: 80px; flex-shrink: 0; }
        @media (max-width: 600px) {
          .audit-banner { flex-direction: column; align-items: flex-start; padding: 32px 20px; }
          .audit-banner-btn { margin-left: 0; margin-top: 20px; }
        }
      `}</style>
      <div className="audit-banner">
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500, marginBottom: "8px" }}>
            Start with a free catalog audit.
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "440px", lineHeight: 1.7 }}>
            We review 50 of your SKUs and deliver a written findings report within 48 hours. No credit card required.
          </div>
        </div>
        <Link href="/audit" className="audit-banner-btn" style={{ background: "#2D6A4F", color: "#fff", padding: "13px 28px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap", marginRight: "120px" }}>
          Get free catalog audit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
