import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing – Professional ITS",
  description: "Transparent pricing with no surprises. Per SKU, monthly retainers, and virtual assistant options. Start with a free catalog audit.",
};

export default function PricingPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <style>{`
        .pricing-hero { background: #F5F0E8; padding: 48px 32px 40px; border-bottom: 0.5px solid #D5C9B0; }
        .pricing-section { padding: 56px 32px; background: #FDFAF5; }
        .pricing-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 32px; }
        .audit-banner { background: #1C1C1C; padding: 40px 32px; display: flex; justify-content: space-between; align-items: center; border-radius: 8px; gap: 24px; }
        .audit-banner-btn { background: #2D6A4F; color: #fff; padding: 13px 28px; border-radius: 4px; font-size: 13px; font-weight: 500; white-space: nowrap; cursor: pointer; flex-shrink: 0; }

        @media (max-width: 1024px) {
          .pricing-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 640px) {
          .pricing-hero { padding: 36px 16px 32px; }
          .pricing-hero h1 { font-size: 26px !important; }
          .pricing-section { padding: 40px 16px; }
          .pricing-grid { grid-template-columns: 1fr; }
          .audit-banner { flex-direction: column; align-items: flex-start; padding: 28px 20px; }
          .audit-banner-title { font-size: 18px !important; }
          .audit-banner-btn { width: 100%; text-align: center; }
        }
      `}</style>

      <Navbar />

      <div className="pricing-hero">
        <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, marginBottom: "16px" }}>Pricing</div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: "32px", fontWeight: 500, color: "#1C1C1C", marginBottom: "12px" }}>
          Transparent pricing. <em style={{ color: "#2D6A4F" }}>No surprises.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.65, maxWidth: "560px" }}>
          No long contracts. No hidden fees. Start with a free catalog audit and scale as you grow. Custom scopes quoted on request.
        </p>
      </div>

      <section className="pricing-section">
        <div className="pricing-grid">

          {/* Catalog & Listing */}
          <div style={{ border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "24px", background: "#FDFAF5" }}>
            <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, letterSpacing: "0.5px", marginBottom: "10px" }}>CATALOG &amp; LISTING</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#1C1C1C", marginBottom: "16px" }}>Per SKU / per hour</div>
            {["Data entry (standard) — from $0.50/SKU", "Listing creation + copy — from $2.00/SKU", "Listing optimisation — from $1.50/SKU", "AI-assisted writing — from $1.00/SKU", "Catalog enrichment — by scope"].map((b) => (
              <div key={b} style={{ fontSize: "13px", color: "#555550", padding: "5px 0 5px 16px", borderLeft: "2px solid #E8F5EE", marginBottom: "6px" }}>{b}</div>
            ))}
          </div>

          {/* Monthly Retainer - Featured */}
          <div style={{ border: "2px solid #2D6A4F", borderRadius: "8px", padding: "24px", background: "#FDFAF5", position: "relative" }}>
            <div style={{ position: "absolute", top: "-12px", left: "20px", background: "#2D6A4F", color: "#fff", fontSize: "10px", padding: "4px 12px", borderRadius: "3px", fontWeight: 500 }}>
              MOST POPULAR
            </div>
            <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, letterSpacing: "0.5px", marginBottom: "10px" }}>MONTHLY RETAINER</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#1C1C1C", marginBottom: "16px" }}>Ongoing operational support</div>
            {["Starter — 40 hrs/month", "Growth — 80 hrs/month", "Scale — 160 hrs/month + account mgr"].map((b) => (
              <div key={b} style={{ fontSize: "13px", color: "#555550", padding: "5px 0 5px 16px", borderLeft: "2px solid #E8F5EE", marginBottom: "6px" }}>{b}</div>
            ))}
            <div style={{ marginTop: "14px", fontSize: "11px", color: "#888780" }}>Includes weekly reporting + dedicated contact</div>
          </div>

          {/* Virtual Assistants */}
          <div style={{ border: "0.5px solid #D5C9B0", borderRadius: "8px", padding: "24px", background: "#FDFAF5" }}>
            <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, letterSpacing: "0.5px", marginBottom: "10px" }}>VIRTUAL ASSISTANTS</div>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "14px", color: "#1C1C1C", marginBottom: "16px" }}>E-commerce trained specialists</div>
            {["Part-time (20 hrs/wk) — from $350/mo", "Full-time (40 hrs/wk) — from $600/mo", "Onboarding in 48–72 hours", "Replacement guarantee"].map((b) => (
              <div key={b} style={{ fontSize: "13px", color: "#555550", padding: "5px 0 5px 16px", borderLeft: "2px solid #E8F5EE", marginBottom: "6px" }}>{b}</div>
            ))}
          </div>
        </div>

        {/* Audit Banner */}
        <div className="audit-banner">
          <div>
            <div className="audit-banner-title" style={{ fontFamily: "var(--font-serif)", fontSize: "22px", color: "#fff", fontWeight: 500 }}>
              Not sure which plan fits? Start with the free audit.
            </div>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.6)", marginTop: "6px" }}>
              We review 50 of your SKUs, deliver a written report, and recommend the right engagement. No credit card required.
            </div>
          </div>
          <div className="audit-banner-btn">
            Get free catalog audit
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}