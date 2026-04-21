import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Team – Professional ITS",
  description:
    "Meet the specialists behind Professional ITS — e-commerce operators, catalog experts, and marketplace managers who've been doing this since 2010.",
  alternates: {
    canonical: "https://professionalits.com/team",
  },
  openGraph: {
    title: "Team – Professional ITS",
    description:
      "Meet the specialists behind Professional ITS — e-commerce operators, catalog experts, and marketplace managers who've been doing this since 2010.",
    url: "https://professionalits.com/team",
    siteName: "Professional ITS",
    type: "website",
  },
};

const members = [
  {
    name: "ABC",
    role: "Founder & CEO",
    since: "Since 2010",
    bio: "Built PITS from a two-person catalog team into a full back-office operation supporting 1,500+ e-commerce stores. Spent the first decade doing the work himself — every process in the business reflects that.",
    focus: ["Strategy", "Client relationships", "Platform partnerships"],
  },
  {
    name: "ABC",
    role: "Head of Operations",
    since: "Since 2013",
    bio: "Oversees all service delivery across catalog, marketplace, and back-office functions. Designed the SLA framework that keeps response times under 4 hours across every active client.",
    focus: ["SLA management", "Process design", "Team scaling"],
  },
  {
    name: "ABC",
    role: "Senior Catalog Manager",
    since: "Since 2015",
    bio: "Leads bulk upload and data enrichment projects across Shopify, WooCommerce, Magento, and BigCommerce. Has personally overseen the migration of over 2 million SKUs.",
    focus: ["Bulk uploads", "Attribute structuring", "Data normalisation"],
  },
  {
    name: "ABC",
    role: "Marketplace Operations Lead",
    since: "Since 2016",
    bio: "Manages Amazon Seller Central, eBay, and Walmart operations for key accounts. Specialist in Buy Box strategy, suppressed listing recovery, and A+ Content production.",
    focus: ["Amazon", "eBay", "Walmart", "Buy Box strategy"],
  },
  {
    name: "ABC",
    role: "Image & Enrichment Specialist",
    since: "Since 2018",
    bio: "Handles all image processing, background removal, size compliance, and visual enrichment. Ensures every product image meets the exact spec required by each channel.",
    focus: ["Image processing", "Compliance", "Visual QA"],
  },
  {
    name: "ABC",
    role: "Client Success Manager",
    since: "Since 2019",
    bio: "First point of contact for all active clients. Monitors delivery progress, flags risks early, and ensures every engagement stays on track against agreed timelines.",
    focus: ["Account management", "Reporting", "Escalations"],
  },
];

const values = [
  {
    label: "Execution over promises",
    body: "Every person on the team is measured on delivery, not activity. We track output.",
  },
  {
    label: "Domain depth",
    body: "We hire specialists, not generalists. Each team member owns a vertical and stays current in it.",
  },
  {
    label: "Client visibility",
    body: "No black boxes. Clients see exactly what's been done, what's pending, and what's coming.",
  },
  {
    label: "Long-term relationships",
    body: "Our 98% retention rate comes from the team treating every account like it's their only one.",
  },
];

export default function TeamPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <Navbar />

      {/* Hero */}
      <div
        style={{
          background: "#F5F0E8",
          padding: "48px 32px 40px",
          borderBottom: "0.5px solid #D5C9B0",
        }}
      >
        <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, marginBottom: "16px" }}>
          Team
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "32px",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "12px",
          }}
        >
          The people behind{" "}
          <em style={{ color: "#2D6A4F" }}>the execution.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.65, maxWidth: "560px" }}>
          PITS is an operations business. Every result we deliver comes from specialists who&apos;ve
          spent years doing this specific work — not account managers handing tasks to juniors.
        </p>
      </div>

      <style>{`
        .team-section { padding: 56px 32px; }
        .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 56px; }
        .values-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }

        @media (max-width: 1024px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .team-section { padding: 40px 16px; }
          .team-grid { grid-template-columns: 1fr; }
          .values-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="team-section">

        {/* Section label */}
        <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, marginBottom: "8px", letterSpacing: "0.5px" }}>
          THE TEAM
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            color: "#1C1C1C",
            marginBottom: "28px",
          }}
        >
          Specialists, not generalists.
        </div>

        {/* Team grid */}
        <div className="team-grid">
          {members.map((m, i) => (
            <div
              key={i}
              style={{
                background: "#FDFAF5",
                border: "0.5px solid #D5C9B0",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              {/* Avatar placeholder */}
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "#E8F5EE",
                  border: "0.5px solid #9FE1CB",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "14px",
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "#2D6A4F",
                  fontFamily: "var(--font-serif)",
                }}
              >
                {m.name.charAt(0)}
              </div>

              <div style={{ fontSize: "15px", fontWeight: 600, color: "#1C1C1C", marginBottom: "2px" }}>
                {m.name}
              </div>
              <div style={{ fontSize: "12px", color: "#2D6A4F", fontWeight: 500, marginBottom: "4px" }}>
                {m.role}
              </div>
              <div style={{ fontSize: "11px", color: "#B4B2A9", marginBottom: "12px" }}>
                {m.since}
              </div>

              <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65, marginBottom: "14px" }}>
                {m.bio}
              </p>

              {/* Focus tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {m.focus.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "#555550",
                      background: "#F5F0E8",
                      border: "0.5px solid #D5C9B0",
                      borderRadius: "3px",
                      padding: "3px 7px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Values section */}
        <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, marginBottom: "8px", letterSpacing: "0.5px" }}>
          HOW WE WORK
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            color: "#1C1C1C",
            marginBottom: "28px",
          }}
        >
          What the team runs on.
        </div>

        <div className="values-grid">
          {values.map((v) => (
            <div
              key={v.label}
              style={{
                background: "#FDFAF5",
                border: "0.5px solid #D5C9B0",
                borderRadius: "8px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "15px",
                  color: "#1C1C1C",
                  marginBottom: "8px",
                  borderLeft: "3px solid #2D6A4F",
                  paddingLeft: "12px",
                }}
              >
                {v.label}
              </div>
              <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65 }}>{v.body}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            background: "#E8F5EE",
            border: "0.5px solid #9FE1CB",
            borderRadius: "8px",
            padding: "28px 24px",
            marginTop: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div style={{ fontSize: "11px", color: "#085041", fontWeight: 500, letterSpacing: "0.5px" }}>
            WORK WITH THE TEAM
          </div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#085041" }}>
            Ready to hand off the back-office work?
          </div>
          <p style={{ fontSize: "13px", color: "#0F6E56", lineHeight: 1.65, maxWidth: "500px" }}>
            Start with a free catalog audit. We&apos;ll review 50 SKUs, show you exactly what we&apos;d fix,
            and give you a clear scope — no commitment required.
          </p>
          <div style={{ display: "flex", gap: "12px", marginTop: "8px", flexWrap: "wrap" }}>
            <Link
              href="/audit"
              style={{
                background: "#2D6A4F",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Get free audit
            </Link>
            <Link
              href="/contact"
              style={{
                background: "transparent",
                color: "#2D6A4F",
                padding: "10px 20px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: 500,
                textDecoration: "none",
                display: "inline-block",
                border: "0.5px solid #2D6A4F",
              }}
            >
              Contact us
            </Link>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
