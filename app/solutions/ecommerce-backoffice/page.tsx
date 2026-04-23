import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ecommerce Backoffice Management – Professional ITS",
  description:
    "Customer support, order processing, inventory monitoring, repricing, and store maintenance. SLA-backed backoffice management that scales with your store.",
  keywords: ["ecommerce backoffice", "customer support outsourcing", "order processing", "inventory monitoring", "ecommerce operations"],
  openGraph: {
    title: "Ecommerce Backoffice Management – Professional ITS",
    description: "Customer support, order processing, inventory monitoring, repricing — on an SLA you can hold us to.",
    url: "https://professionalits.com/solutions/ecommerce-backoffice",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  alternates: {
    canonical: "https://professionalits.com/solutions/ecommerce-backoffice",
  },
};

const services = [
  { title: "Customer support", body: "Email, chat, and marketplace messaging — Amazon, eBay, Shopify. Managed to your SLA with weekly reporting.", icon: "💬" },
  { title: "Order processing", body: "Order routing, fulfilment coordination, tracking updates, and exception handling. Every order tracked end to end.", icon: "📦" },
  { title: "Inventory monitoring", body: "Stock level alerts, reorder point management, and low-stock notifications before you run out.", icon: "📊" },
  { title: "Repricing", body: "Rule-based repricing execution across Amazon, eBay, and Walmart. Buy Box strategy aligned with your margin targets.", icon: "🏷️" },
  { title: "Returns & refunds", body: "Returns processing, refund management, and dispute resolution — handled according to your policy.", icon: "↩️" },
  { title: "Store maintenance", body: "Listing health checks, policy compliance, account health monitoring, and ongoing store upkeep.", icon: "🛒" },
];

const slaItems = [
  { metric: "4hr", label: "Average response SLA" },
  { metric: "98%", label: "Client retention rate" },
  { metric: "24/5", label: "Coverage window" },
  { metric: "Weekly", label: "Reporting cadence" },
];


const CheckIcon = () => (
  <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: "#E8F5EE", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "2px" }}>
    <svg viewBox="0 0 10 10" style={{ width: "10px", height: "10px" }} fill="none">
      <path d="M2 5L4.5 7.5L8 3" stroke="#2D6A4F" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
);

export default function EcommerceBackofficePage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* ── HERO ── */}
      <div style={{ background: "#F5F0E8", padding: "48px 32px 40px", borderBottom: "0.5px solid #D5C9B0" }}>
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/solutions" style={{ color: "#888780", textDecoration: "none" }}>Solutions</Link>
          <span style={{ color: "#2D6A4F" }}> / Ecommerce Backoffice</span>
        </div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "36px", fontWeight: 500, lineHeight: 1.15, color: "#1C1C1C", marginBottom: "14px" }}>
          Your full back-office. <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>Handled.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, maxWidth: "580px", marginBottom: "28px" }}>
          Customer support, order processing, inventory monitoring, repricing, and store maintenance. We handle the recurring operational work that grows with your store — on an SLA you can hold us to.
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

      {/* ── SLA BAR ── */}
      <style>{`
        .sla-bar {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        @media (max-width: 640px) {
          .sla-bar {
            grid-template-columns: repeat(4, 1fr);
            gap: 0;
            padding: 16px 12px !important;
          }
          .sla-bar > div {
            padding: 0 4px;
          }
          .sla-bar .sla-metric {
            font-size: 16px !important;
          }
          .sla-bar .sla-label {
            font-size: 9px !important;
          }
          .sla-promise-grid {
            grid-template-columns: 1fr !important;
          }
          .sla-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .cta-banner {
            flex-direction: column !important;
            gap: 20px !important;
            padding: 40px 16px !important;
          }
          .hero-buttons {
            flex-direction: column !important;
          }
        }
        @media (max-width: 1024px) {
          .sla-promise-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      <div className="sla-bar" style={{ background: "#2D6A4F", padding: "20px 32px" }}>
        {slaItems.map((s) => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div className="sla-metric" style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500 }}>{s.metric}</div>
            <div className="sla-label" style={{ fontSize: "11px", color: "rgba(255,255,255,0.7)", marginTop: "2px" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── SERVICES GRID ── */}
      <section style={{ padding: "56px 32px", borderBottom: "0.5px solid #D5C9B0" }}>
        <style>{`
          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          @media (max-width: 640px) {
            .services-grid {
              grid-template-columns: 1fr;
            }
            .services-section {
              padding: 40px 16px;
            }
            .services-heading {
              font-size: 22px !important;
            }
          }
        `}</style>
        <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>WHAT WE MANAGE</div>
        <h2 className="services-heading" style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#1C1C1C", marginBottom: "8px" }}>
          Every recurring back-office task.
        </h2>
        <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65, maxWidth: "520px", marginBottom: "36px" }}>
          Available as individual services or as a full managed backoffice retainer. All delivered with agreed SLAs and weekly reporting.
        </p>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.title} style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "24px" }}>
              <div style={{ fontSize: "24px", marginBottom: "12px" }}>{s.icon}</div>
              <div style={{ fontSize: "14px", fontWeight: 500, color: "#1C1C1C", marginBottom: "8px" }}>{s.title}</div>
              <div style={{ fontSize: "12px", color: "#555550", lineHeight: 1.65 }}>{s.body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SLA PROMISE ── */}
      <section style={{ padding: "56px 32px", background: "#F5F0E8", borderBottom: "0.5px solid #D5C9B0" }}>
        <div className="sla-promise-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "10px", letterSpacing: "1.5px", color: "#2D6A4F", fontWeight: 500, marginBottom: "10px" }}>THE SLA PROMISE</div>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#1C1C1C", marginBottom: "14px" }}>
              An SLA you can actually hold us to.
            </h2>
            <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75, marginBottom: "24px" }}>
              We operate as an extension of your team, not a one-off contractor. Every engagement comes with documented SLAs, a dedicated contact, and weekly operational reports.
            </p>
            {[
              "Documented response and resolution SLAs",
              "Dedicated point of contact for your account",
              "Weekly operational report — activity, tickets, metrics",
              "Monthly review call included in all retainers",
              "Replacement guarantee on all VA placements",
            ].map((item) => (
              <div key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start", marginBottom: "10px" }}>
                <CheckIcon />
                <span style={{ fontSize: "13px", color: "#555550", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
            {[
              { n: "4hr", l: "Response SLA", sub: "Across all accounts" },
              { n: "98%", l: "Retention rate", sub: "Year on year" },
              { n: "500+", l: "Stores managed", sub: "Globally" },
              { n: "15yrs", l: "Experience", sub: "E-commerce only" },
            ].map((s) => (
              <div key={s.l} style={{ background: "#FFFFFF", border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "20px", textAlign: "center" }}>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "26px", fontWeight: 500, color: "#2D6A4F" }}>{s.n}</div>
                <div style={{ fontSize: "12px", fontWeight: 500, color: "#1C1C1C", marginTop: "4px" }}>{s.l}</div>
                <div style={{ fontSize: "11px", color: "#888780", marginTop: "2px" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <div style={{ background: "#1C1C1C", padding: "48px 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500, marginBottom: "8px" }}>
            Ready to hand over your back-office?
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", maxWidth: "440px", lineHeight: 1.7 }}>
            Start with a free catalog audit. We&apos;ll review your current setup and recommend the right engagement.
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
