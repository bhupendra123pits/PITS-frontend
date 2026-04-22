import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services – Professional ITS | E-Commerce Execution Services",
  description:
    "Product data management, bulk product uploads, attribute structuring, image processing, and order & inventory support. Execution services for e-commerce businesses.",
  keywords: [
    "product data management",
    "bulk product uploads",
    "attribute structuring",
    "image processing ecommerce",
    "order inventory support",
  ],
  openGraph: {
    title: "Services – Professional ITS",
    description: "Execution services for e-commerce businesses. Available standalone or as a managed retainer.",
    url: "https://professionalits.com/services",
    siteName: "Professional ITS",
    type: "website",
  },
  alternates: {
    canonical: "https://professionalits.com/services",
  },
};

const nums = ["01", "02", "03", "04", "05"];

const CheckIcon = () => (
  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
    <svg viewBox="0 0 10 10" style={{ width: "9px", height: "9px" }} fill="none">
      <path d="M2 5L4.5 7.5L8 3" stroke="#2D6A4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function ServicesPage() {
  const serviceList = Object.values(services);

  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/" style={{ color: "#888780", textDecoration: "none" }}>Home</Link>
          <span style={{ color: "#2D6A4F" }}> / Services</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "14px" }}>
          Every execution service we{" "}
          <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>provide.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, maxWidth: "560px", marginBottom: "28px" }}>
          For buyers who know exactly what they need. All services are available standalone or as part of a monthly retainer. No lock-in.
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
          { n: "5", l: "Core execution services" },
          { n: "99.1%", l: "Data accuracy rate" },
          { n: "500+", l: "SKUs per day" },
          { n: "17 yrs", l: "Operations experience" },
        ].map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500 }}>{s.n}</div>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.l}</div>
          </div>
        ))}
      </div>

      {/* ── SERVICE CARDS ── */}
      <style>{`
        .svc-page { padding: 56px 32px; }
        .svc-card { background: #fff; border: 0.5px solid #D5C9B0; border-radius: 8px; padding: 28px; display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 16px; text-decoration: none; color: inherit; transition: border-color 0.15s; }
        .svc-card:hover { border-color: #2D6A4F; }
        .svc-card:hover .svc-learn { color: #1a4a35; }
        .svc-bullets { display: flex; flex-direction: column; gap: 8px; }
        @media (max-width: 768px) {
          .svc-page { padding: 40px 16px; }
          .svc-card { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 640px) {
          .svc-stats { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>

      <section className="svc-page">
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>ALL SERVICES</div>
        <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 500, color: "#1C1C1C", marginBottom: "36px" }}>
          Five services. One execution team.
        </h2>

        {serviceList.map((s, i) => (
          <Link key={s.slug} href={`/services/${s.slug}`} className="svc-card">
            {/* Left — info */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "24px", color: "#D5C9B0", fontWeight: 500 }}>
                  {nums[i]}
                </span>
              </div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#1C1C1C", marginBottom: "8px", lineHeight: 1.25 }}>
                {s.name}
              </h3>
              <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65, marginBottom: "16px" }}>
                {s.tagline}
              </p>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "16px" }}>
                {s.platforms.slice(0, 5).map((p) => (
                  <span key={p} style={{ fontSize: "10px", color: "#888780", border: "0.5px solid #D5C9B0", borderRadius: "3px", padding: "2px 8px", background: "#F5F0E8" }}>
                    {p}
                  </span>
                ))}
                {s.platforms.length > 5 && (
                  <span style={{ fontSize: "10px", color: "#888780", border: "0.5px solid #D5C9B0", borderRadius: "3px", padding: "2px 8px", background: "#F5F0E8" }}>
                    +{s.platforms.length - 5} more
                  </span>
                )}
              </div>
              <div style={{ display: "flex", gap: "24px", marginBottom: "16px" }}>
                {s.stats.slice(0, 2).map((stat) => (
                  <div key={stat.l}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#2D6A4F" }}>{stat.n}</div>
                    <div style={{ fontSize: "10px", color: "#888780", marginTop: "2px" }}>{stat.l}</div>
                  </div>
                ))}
              </div>
              <span className="svc-learn" style={{ fontSize: "12px", color: "#2D6A4F", fontWeight: 500, transition: "color 0.15s" }}>
                Learn more →
              </span>
            </div>

            {/* Right — bullets */}
            <div className="svc-bullets">
              {s.includes.slice(0, 6).map((b) => (
                <div key={b} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <CheckIcon />
                  <span style={{ fontSize: "12px", color: "#555550", lineHeight: 1.5 }}>{b}</span>
                </div>
              ))}
            </div>
          </Link>
        ))}
      </section>

      {/* ── PRICING NOTE ── */}
      <section style={{ padding: "32px", background: "#E8F5EE", borderTop: "0.5px solid #9FE1CB", borderBottom: "0.5px solid #9FE1CB" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#085041", marginBottom: "6px" }}>
              From $0.50 per SKU · Retainers from $350/month
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
        .audit-banner { background: #1C1C1C; padding: 40px 32px; display: flex; justify-content: flex-start; align-items: center; }
        .audit-banner-btn { margin-left: 80px; flex-shrink: 0; }
        @media (max-width: 600px) {
          .audit-banner { flex-direction: column; align-items: flex-start; padding: 32px 20px; }
          .audit-banner-btn { margin-left: 0; margin-top: 20px; }
        }
      `}</style>
      <div className="audit-banner">
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500, marginBottom: "8px" }}>
            Not sure which service you need?
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "440px", lineHeight: 1.7 }}>
            Start with a free catalog audit. We&apos;ll review your store and recommend exactly which services would have the most impact.
          </div>
        </div>
        <Link href="/audit" className="audit-banner-btn" style={{ background: "#2D6A4F", color: "#fff", padding: "13px 28px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
          Get free catalog audit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
