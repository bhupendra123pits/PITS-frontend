import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "High-SKU Catalog Scaling – Professional ITS",
  description:
    "Built for distributors, wholesalers, and multi-brand sellers. Scale your catalog to 500,000+ SKUs without scaling headcount. New product lines, seasonal launches, supplier integrations.",
  keywords: ["high SKU catalog", "catalog scaling", "wholesale ecommerce", "distributor catalog", "bulk SKU management"],
  openGraph: {
    title: "High-SKU Catalog Scaling – Professional ITS",
    description: "Scale to 500,000 SKUs without scaling headcount. Built for distributors and wholesalers.",
    url: "https://professionalits.com/solutions/high-sku-scaling",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  alternates: {
    canonical: "https://professionalits.com/solutions/high-sku-scaling",
  },
};

const forWho = [
  { title: "Distributors", body: "You have thousands of SKUs from multiple suppliers and need them live on Amazon, eBay, or your own store — fast." },
  { title: "Wholesalers", body: "Large catalog, multiple brands, complex attribute requirements. We handle the data pipeline so you can focus on sourcing." },
  { title: "Multi-brand sellers", body: "Managing products across multiple brands with different taxonomies, attributes, and platform requirements." },
  { title: "Seasonal launchers", body: "Launching hundreds or thousands of new SKUs for a season or product line — on a tight timeline." },
];

const capabilities = [
  "Supplier feed ingestion in any format — CSV, XML, XLSX, EDI",
  "Automated field mapping to platform taxonomy",
  "High-volume bulk upload pipelines — 500+ SKUs/day",
  "Multi-brand catalog architecture and governance",
  "Cross-platform synchronisation — one feed, multiple platforms",
  "Ongoing scaled maintenance retainers",
  "Dedicated account manager for large accounts",
  "AI-assisted attribute extraction at scale",
];

const CheckIcon = () => (
  <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
    <svg viewBox="0 0 10 10" style={{ width: "10px", height: "10px" }} fill="none">
      <path d="M2 5L4.5 7.5L8 3" stroke="#2D6A4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function HighSkuScalingPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/solutions" style={{ color: "#888780", textDecoration: "none" }}>Solutions</Link>
          <span style={{ color: "#2D6A4F" }}> / High-SKU Catalog Scaling</span>
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", background: "#E8F5EE", color: "#085041", fontSize: "10px", padding: "4px 10px", borderRadius: "3px", marginBottom: "16px" }}>
          <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2D6A4F" }} />
          AI-assisted
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "14px" }}>
          Scale to 500,000 SKUs without <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>scaling headcount.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, maxWidth: "580px", marginBottom: "28px" }}>
          Built for distributors, wholesalers, and multi-brand sellers. When your catalog needs to grow at speed — new product lines, seasonal launches, supplier integrations — we scale with you.
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
          { n: "500K+", l: "SKUs managed" },
          { n: "500+", l: "SKUs per day" },
          { n: "99.1%", l: "Accuracy rate" },
          { n: "15yrs", l: "Operations experience" },
        ].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500 }}>{s.n}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── WHO IT'S FOR ── */}
      <section style={{ padding: "56px 32px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>WHO IT&apos;S FOR</div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#1C1C1C", marginBottom: "8px" }}>
          Built for volume sellers.
        </h2>
        <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65, maxWidth: "520px", marginBottom: "36px" }}>
          This solution is designed for businesses where catalog size is the bottleneck — not product quality or demand.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "16px" }}>
          {forWho.map((f) => (
            <div key={f.title} style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "24px", borderLeft: "3px solid #2D6A4F" }}>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "#1C1C1C", marginBottom: "8px" }}>{f.title}</div>
              <div style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65 }}>{f.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section style={{ padding: "56px 32px", background: "#F5F0E8", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>CAPABILITIES</div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#1C1C1C", marginBottom: "36px" }}>
          The full scaling pipeline.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "12px" }}>
          {capabilities.map((c) => (
            <div key={c} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
              <CheckIcon />
              <span style={{ fontSize: "13px", color: "#555550", lineHeight: 1.5 }}>{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CASE STUDY SNIPPET ── */}
      <section style={{ padding: "56px 32px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "24px" }}>RESULT</div>
        <div style={{ background: "#F5F0E8", borderRadius: "8px", padding: "32px", maxWidth: "640px" }}>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#1C1C1C", fontStyle: "italic", lineHeight: 1.5, marginBottom: "16px", borderLeft: "3px solid #2D6A4F", paddingLeft: "20px" }}>
            We went from 200 live SKUs to 8,000 in six weeks.
          </div>
          <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.7, marginBottom: "12px" }}>
            A wholesale distributor needed to launch a full product catalog on Amazon and Shopify simultaneously. We managed bulk upload, attribute structuring, and image processing — hitting the launch date at 98.4% listing accuracy.
          </p>
          <div style={{ fontSize: "11px", color: "#888780" }}>Wholesale distributor · Amazon + Shopify · US</div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div style={{ background: "#1C1C1C", padding: "48px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500, marginBottom: "8px" }}>
            Ready to scale your catalog?
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "440px", lineHeight: 1.7 }}>
            Start with a free audit. We&apos;ll scope your catalog, assess the pipeline requirements, and recommend the right approach.
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
