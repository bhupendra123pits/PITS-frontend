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

const CheckIcon = () => (
  <div style={{ width: "16px", height: "16px", borderRadius: "50%", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
    <svg viewBox="0 0 10 10" style={{ width: "9px", height: "9px" }} fill="none">
      <path d="M2 5L4.5 7.5L8 3" stroke="#2D6A4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          Home <span style={{ color: "#2D6A4F" }}>/ Services</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "34px", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "12px" }}>
          Every execution service we <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>provide.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.7, maxWidth: "560px", marginBottom: "24px" }}>
          For buyers who know exactly what they need. All services are available standalone or as part of a monthly retainer. No lock-in.
        </p>
        {/* quick jump links */}
        <style>{`
          .service-jump:hover { border-color: #2D6A4F !important; color: #2D6A4F !important; }
        `}</style>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {Object.values(services).map((s) => (
            <a key={s.slug} href={`#${s.slug}`} className="service-jump"
              style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "4px", padding: "6px 14px", fontSize: "12px", color: "#555550", textDecoration: "none", transition: "all 0.15s" }}>
              {s.name}
            </a>
          ))}
        </div>
      </div>

      {/* ── SERVICES SECTIONS ── */}
      {Object.values(services).map((s, idx) => (
        <section key={s.slug} id={s.slug}
          style={{ padding: "56px 32px", background: idx % 2 === 0 ? "#FDFAF5" : "#F5F0E8", borderBottom: "0.5px solid #D5C9B0", scrollMarginTop: "56px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "56px", alignItems: "start" }}>
            <div>
              <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>
                {String(idx + 1).padStart(2, "0")} — SERVICE
              </div>
              <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#1C1C1C", marginBottom: "6px" }}>
                {s.name}
              </h2>
              <p style={{ fontSize: "13px", color: "#2D6A4F", fontWeight: 500, marginBottom: "14px" }}>{s.tagline}</p>
              <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, marginBottom: "24px", maxWidth: "520px" }}>
                {s.description}
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "20px" }}>
                {s.includes.slice(0, 6).map((item) => (
                  <div key={item} style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
                    <CheckIcon />
                    <span style={{ fontSize: "12px", color: "#555550", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href={`/services/${s.slug}`}
                style={{ fontSize: "13px", color: "#2D6A4F", fontWeight: 500, textDecoration: "none" }}>
                View full service details →
              </Link>
            </div>

            {/* Right — stats + CTA */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "14px" }}>
                {s.stats.slice(0, 2).map((stat) => (
                  <div key={stat.l} style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "16px", textAlign: "center" }}>
                    <div style={{ fontFamily: "var(--font-serif)", fontSize: "24px", fontWeight: 500, color: "#2D6A4F" }}>{stat.n}</div>
                    <div style={{ fontSize: "11px", color: "#888780", marginTop: "4px" }}>{stat.l}</div>
                  </div>
                ))}
              </div>
              <Link href={`/services/${s.slug}`}
                style={{ display: "block", background: "#2D6A4F", color: "#fff", padding: "11px 20px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textAlign: "center", textDecoration: "none", marginBottom: "8px" }}>
                Learn more
              </Link>
              <Link href="/audit"
                style={{ display: "block", border: "0.5px solid #D5C9B0", color: "#555550", padding: "10px 20px", borderRadius: "4px", fontSize: "12px", textAlign: "center", textDecoration: "none" }}>
                Get free audit
              </Link>
            </div>
          </div>
        </section>
      ))}

      {/* ── PRICING NOTE ── */}
      <section style={{ padding: "40px 32px", background: "#E8F5EE", borderBottom: "0.5px solid #9FE1CB" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", fontWeight: 500, color: "#085041", marginBottom: "6px" }}>
              From $0.50 per SKU · Retainers from $350/month
            </div>
            <div style={{ fontSize: "13px", color: "#0F6E56", lineHeight: 1.6 }}>
              All services available standalone or bundled. Volume discounts for 100+ SKUs. No long contracts.
            </div>
          </div>
          <Link href="/pricing" style={{ background: "#2D6A4F", color: "#fff", padding: "12px 24px", borderRadius: "4px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
            View full pricing
          </Link>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div style={{ background: "#1C1C1C", padding: "48px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500, marginBottom: "8px" }}>
            Not sure which service you need?
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "440px", lineHeight: 1.7 }}>
            Start with a free catalog audit. We&apos;ll review your store and recommend exactly which services would have the most impact.
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
