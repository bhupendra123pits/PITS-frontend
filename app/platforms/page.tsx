import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { platforms } from "@/lib/platforms";

export const metadata: Metadata = {
  title: "E-Commerce Platforms We Support — Professional ITS",
  description:
    "Back-office operations for Shopify, BigCommerce, WooCommerce, Magento, OpenCart, and Volusion. Platform specialists since 2009",
  keywords: ["Amazon back-office", "Shopify management", "eBay operations", "ecommerce platform support"],
  openGraph: {
    title: "Platforms We Support – Professional ITS",
    description: "Platform-specific back-office services for every major marketplace.",
    url: "https://professionalits.com/platforms",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  alternates: {
    canonical: "https://professionalits.com/platforms",
  },
};

export default function PlatformsPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/" style={{ color: "#888780", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#2D6A4F" }}> / Platforms</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "34px", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "12px" }}>
          Every platform you sell on, <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>covered.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.7, maxWidth: "560px" }}>
          We have dedicated specialists for each major marketplace — not generalists who handle everything. Select your platform to see exactly what we do.
        </p>
      </div>

      {/* ── PLATFORMS GRID ── */}
      <section style={{ padding: "56px 32px" }}>
        <style>{`
          .platforms-grid {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            gap: 16px;
          }
          @media (max-width: 900px) {
            .platforms-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          }
          @media (max-width: 540px) {
            .platforms-grid { grid-template-columns: 1fr; }
          }
          .platform-card:hover { border-color: #2D6A4F !important; }
          .platform-card:hover .platform-arrow { color: #2D6A4F; }
        `}</style>
        <div className="platforms-grid">
          {Object.values(platforms).map((p) => (
            <Link key={p.slug} href={`/platforms/${p.slug}`} style={{ textDecoration: "none" }}>
              <div className="platform-card" style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "24px", transition: "border-color 0.15s", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "18px", fontWeight: 600, color: p.color, marginBottom: "10px" }}>{p.name}</div>
                  <div style={{ fontSize: "13px", color: "#555550", lineHeight: 1.6, marginBottom: "16px" }}>{p.tagline}</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                    {p.services.slice(0, 3).map((s) => (
                      <div key={s.title} style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#2D6A4F", flexShrink: 0 }} />
                        <span style={{ fontSize: "12px", color: "#888780" }}>{s.title}</span>
                      </div>
                    ))}
                    <div style={{ fontSize: "11px", color: "#B4B2A9", paddingLeft: "13px" }}>+{p.services.length - 3} more services</div>
                  </div>
                </div>
                <div className="platform-arrow" style={{ fontSize: "12px", color: "#888780", fontWeight: 500 }}>
                  View all services →
                </div>
              </div>
            </Link>
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
            Not sure where to start?
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "440px", lineHeight: 1.7 }}>
            Get a free catalog audit. We&apos;ll review your store and recommend the right service for your platform.
          </div>
        </div>
        <Link href="/audit" style={{ background: "#2D6A4F", color: "#fff", padding: "13px 28px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap", marginRight:"120px"}}>
          Get free catalog audit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
