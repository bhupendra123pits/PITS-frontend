import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Company – Professional ITS",
  description:
    "Professional ITS has been running e-commerce back-office operations since 2010. Learn who we are, what we stand for, and why 1,500+ stores trust us with their operations.",
  alternates: {
    canonical: "https://professionalits.com/company",
  },
  openGraph: {
    title: "Company – Professional ITS",
    description:
      "Professional ITS has been running e-commerce back-office operations since 2010. Learn who we are, what we stand for, and why 1,500+ stores trust us with their operations.",
    url: "https://professionalits.com/company",
    siteName: "Professional ITS",
    type: "website",
  },
};

const milestones = [
  { year: "2010", event: "Founded as a two-person catalog data team serving UK e-commerce retailers." },
  { year: "2013", event: "Expanded into marketplace operations — Amazon and eBay Seller Central support added." },
  { year: "2015", event: "Crossed 100 active clients. Built dedicated teams for image processing and attribute structuring." },
  { year: "2018", event: "Launched SLA-backed order and inventory support. Average response time locked at under 4 hours." },
  { year: "2021", event: "Reached 1,000+ stores served. Expanded marketplace coverage to Walmart, Etsy, Houzz, and Newegg." },
  { year: "2024", event: "1,500+ stores served globally. 98% client retention. Operations active across 9 marketplaces and 6 platforms." },
];

const stats = [
  { n: "1,500+", l: "Stores served globally" },
  { n: "15 yrs", l: "In e-commerce operations" },
  { n: "98%", l: "Client retention rate" },
  { n: "9", l: "Marketplaces supported" },
];

const principles = [
  {
    title: "Operations-first",
    body: "We are not a consultancy. We do not produce reports or strategies. We execute — catalog work, marketplace management, order support — and measure ourselves on output, not hours.",
  },
  {
    title: "No lock-in",
    body: "Every engagement is month-to-month. We keep clients because the work is good, not because leaving is difficult. This keeps us honest and keeps standards high.",
  },
  {
    title: "Specialists over generalists",
    body: "Each person on the team owns a vertical. The catalog manager does not cover customer support. The marketplace specialist does not do image processing. Depth beats breadth at this scale.",
  },
  {
    title: "Transparency by default",
    body: "Clients see exactly what has been done, what is in progress, and what is scheduled. No black boxes. No chasing updates. Visibility is part of the service.",
  },
  {
    title: "SLA-backed delivery",
    body: "Every service has a defined turnaround. We track against it, report on it, and own it when we miss. Accountability is not a differentiator — it is a baseline.",
  },
  {
    title: "Long-term by design",
    body: "Our average client has been with us for over three years. We scope, onboard, and communicate with that horizon in mind — not to close a deal, but to build something that lasts.",
  },
];

export default function CompanyPage() {
  return (
    <div style={{ fontFamily: "var(--font-sans)", background: "#FDFAF5", color: "#1C1C1C" }}>
      <style>{`
        .company-section { padding: 56px 32px; }
        .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 56px; }
        .principles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 56px; }
        .timeline { display: flex; flex-direction: column; gap: 0; margin-bottom: 56px; }

        @media (max-width: 1024px) {
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .principles-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .company-section { padding: 40px 16px; }
          .stats-row { grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 36px; }
          .principles-grid { grid-template-columns: 1fr; }
        }
      `}</style>

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
          Company
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
          Built to run{" "}
          <em style={{ color: "#2D6A4F" }}>e-commerce operations.</em>
        </h1>
        <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.65, maxWidth: "560px" }}>
          Professional ITS has been the back-office for e-commerce businesses since 2010. We handle
          the catalog work, marketplace management, and operational support that brands and retailers
          can&apos;t afford to get wrong — and can&apos;t afford to do themselves.
        </p>
      </div>

      <section className="company-section">

        {/* Stats */}
        <div className="stats-row">
          {stats.map((s) => (
            <div
              key={s.l}
              style={{
                background: "#F5F0E8",
                borderRadius: "6px",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "28px",
                  color: "#2D6A4F",
                  fontWeight: 500,
                }}
              >
                {s.n}
              </div>
              <div style={{ fontSize: "12px", color: "#888780", marginTop: "4px" }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Story */}
        <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, marginBottom: "8px", letterSpacing: "0.5px" }}>
          OUR STORY
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            color: "#1C1C1C",
            marginBottom: "16px",
          }}
        >
          Fifteen years of doing the work.
        </div>
        <p
          style={{
            fontSize: "14px",
            color: "#555550",
            lineHeight: 1.75,
            maxWidth: "680px",
            marginBottom: "40px",
          }}
        >
          PITS started as a catalog data operation — two people cleaning up product data for UK
          e-commerce retailers who could not keep up with their own growth. The problem turned out to
          be everywhere. Stores with thousands of SKUs, no internal bandwidth to manage them, and
          channels demanding accurate, compliant, optimised listings. We built the team, the
          processes, and the SLA framework to solve it at scale. Fifteen years later, the work is the
          same. The scale is different.
        </p>

        {/* Timeline */}
        <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, marginBottom: "20px", letterSpacing: "0.5px" }}>
          MILESTONES
        </div>
        <div className="timeline">
          {milestones.map((m, i) => (
            <div
              key={m.year}
              style={{
                display: "grid",
                gridTemplateColumns: "72px 1fr",
                gap: "20px",
                alignItems: "stretch",
                borderBottom: i < milestones.length - 1 ? "0.5px solid #D5C9B0" : "none",
                padding: "16px 0",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "20px",
                  fontWeight: 500,
                  color: "#2D6A4F",
                  paddingTop: "2px",
                }}
              >
                {m.year}
              </div>
              <div style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65 }}>
                {m.event}
              </div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div style={{ fontSize: "11px", color: "#2D6A4F", fontWeight: 500, marginBottom: "8px", letterSpacing: "0.5px" }}>
          HOW WE OPERATE
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "20px",
            color: "#1C1C1C",
            marginBottom: "28px",
          }}
        >
          What we stand for.
        </div>
        <div className="principles-grid">
          {principles.map((p) => (
            <div
              key={p.title}
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
                {p.title}
              </div>
              <p style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65 }}>{p.body}</p>
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
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <div style={{ fontSize: "11px", color: "#085041", fontWeight: 500, letterSpacing: "0.5px" }}>
            WORK WITH US
          </div>
          <div style={{ fontFamily: "var(--font-serif)", fontSize: "20px", color: "#085041" }}>
            Let&apos;s take the back-office off your plate.
          </div>
          <p style={{ fontSize: "13px", color: "#0F6E56", lineHeight: 1.65, maxWidth: "500px" }}>
            Start with a free catalog audit — we review 50 SKUs and show you exactly what we&apos;d fix.
            No commitment, no sales call required.
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
              href="/team"
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
              Meet the team
            </Link>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
