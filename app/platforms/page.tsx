import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { platforms } from "@/lib/platforms";

export const metadata: Metadata = {
  title: "ECommerce Platforms We Support",
  description:
    "Back-office operations for Shopify, BigCommerce, WooCommerce, Magento, OpenCart, and Volusion. Platform specialists since 2009.",
  openGraph: {
    title: "ECommerce Platforms We Support | Professional ITS",
    description: "Back-office operations for Shopify, BigCommerce, WooCommerce, Magento, OpenCart, and Volusion. Platform specialists since 2009.",
    url: "https://professionalits.com/platforms",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  alternates: {
    canonical: "https://professionalits.com/platforms",
  },
  twitter: {
    card: "summary_large_image",
    title: "ECommerce Platforms We Support | Professional ITS",
    description:
      "Back-office operations for Shopify, BigCommerce, WooCommerce, Magento, OpenCart, and Volusion. Platform specialists since 2009.",
    images: ["https://professionalits.com/og-image.png"],
  },
};

export default function PlatformsPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: "https://professionalits.com/platforms",
            name: "ECommerce Platforms We Support | Professional ITS",
            description:
              "Back-office operations for Shopify, BigCommerce, WooCommerce, Magento, OpenCart, and Volusion. Platform specialists since 2009.",
            mainEntity: {
              "@type": "ItemList",
              itemListElement: [
                { "@type": "ListItem", position: 1, url: "https://professionalits.com/platforms/shopify", name: "Shopify" },
                { "@type": "ListItem", position: 2, url: "https://professionalits.com/platforms/bigcommerce", name: "BigCommerce" },
                { "@type": "ListItem", position: 3, url: "https://professionalits.com/platforms/woocommerce", name: "WooCommerce" },
                { "@type": "ListItem", position: 4, url: "https://professionalits.com/platforms/magento", name: "Magento" },
                { "@type": "ListItem", position: 5, url: "https://professionalits.com/platforms/opencart", name: "OpenCart" },
                { "@type": "ListItem", position: 6, url: "https://professionalits.com/platforms/volusion", name: "Volusion" },
              ],
            },
          }),
        }}
      />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/" style={{ color: "#888780", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#2D6A4F" }}> / Platforms</span>
        </div>
         <div
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "12px",
            marginTop: "10px",
          }}
        >
          PLATFORMS
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "34px", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "12px" }}>
          Every platform you sell on, <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>covered.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.7, maxWidth: "560px", marginBottom: "28px" }}>
          We have dedicated specialists for each major marketplace — not generalists who handle everything. Select your platform to see exactly what we do.
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

       <div style={{ background: "#2D6A4F", padding: "20px 32px", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }}>
        {[
          { n: "6", l: "Platforms covered" },
          { n: "3x", l: "Avg. visibility lift" },
          { n: "1500+", l: "Stores managed" },
          { n: "17 yrs", l: "Platform experience" },
        ].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500 }}>{s.n}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── PLATFORMS GRID ── */}
      <section style={{ padding: "56px 32px" }}>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>ALL PLATFORMS</div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 500, color: "#1C1C1C", marginBottom: "36px" }}>
          Six platforms. Dedicated specialists.
        </h2>
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
                  <h3 style={{ fontSize: "18px", fontWeight: 600, color: p.color, marginBottom: "10px", marginTop: 0 }}>{p.name}</h3>
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
       {/* ── PRICING NOTE ── */}
      <section style={{ padding: "32px", background: "#E8F5EE", borderTop: "0.5px solid #9FE1CB", borderBottom: "0.5px solid #9FE1CB" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#085041", marginBottom: "6px" }}>
              From $0.50 per SKU · Retainers from $400/month
            </div>
            <div style={{ fontSize: "13px", color: "#0F6E56", lineHeight: 1.6 }}>
              All services available standalone or bundled. Volume discounts for 500+ SKUs. No long contracts.
            </div>
          </div>
          <Link href="/pricing" style={{ background: "#2D6A4F", color: "#fff", padding: "12px 24px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
            View full pricing
          </Link>
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
