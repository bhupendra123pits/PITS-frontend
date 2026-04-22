import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Results – Professional ITS",
  description:
    "500+ stores served globally. 98% client retention rate. See what clients consistently experience with Professional ITS.",
  alternates: {
    canonical: "https://professionalits.com/results",
  },
  openGraph: {
    title: "Results – Professional ITS",
    description: "500+ stores served globally. 98% client retention rate. See what clients consistently experience with Professional ITS.",
    url: "https://professionalits.com/results",
    siteName: "Professional ITS",
    type: "website",
  },
};

const stats = [
  { n: "1500+", l: "Stores served globally" },
  { n: "98%", l: "Client retention rate" },
  { n: "4 hr", l: "Average response SLA" },
  { n: "17 yrs", l: "E-commerce operations experience" },
];

const results = [
  {
    quote: "We went from 200 live SKUs to 8,000 in six weeks.",
    body: "A wholesale distributor needed to launch a full product catalog on Amazon and Shopify simultaneously. We managed bulk upload, attribute structuring, and image processing — hitting the launch date at 98.4% listing accuracy.",
    meta: "Wholesale distributor · Amazon + Shopify · US",
  },
  {
    quote: "Our response time dropped from 36 hours to under 4.",
    body: "A mid-size Amazon and eBay seller struggling with SLAs during peak periods. We took over customer support operations and maintained a 3.8-hour average response time in the first 90 days.",
    meta: "Multi-channel seller · Amazon + eBay · UK",
  },
  {
    quote: "We handed over a spreadsheet. They handed back a marketplace.",
    body: "A manufacturer entering e-commerce provided raw supplier data in Excel format. We mapped, cleaned, enriched, and uploaded 1,200 SKUs across Amazon, eBay, and WooCommerce within three weeks.",
    meta: "Manufacturer · Amazon + eBay + WooCommerce · AU",
  },
];

export default function ResultsPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FDFAF5",
        color: "#1C1C1C",
      }}
    >
      <Navbar />

      <div
        style={{
          background: "#F5F0E8",
          padding: "48px 32px 40px",
          borderBottom: "0.5px solid #D5C9B0",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "16px",
          }}
        >
          Results
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
          What clients consistently{" "}
          <em style={{ color: "#2D6A4F" }}>experience.</em>
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#555550",
            lineHeight: 1.65,
            maxWidth: "560px",
          }}
        >
          Detailed case studies coming soon. In the meantime — the outcomes our
          clients tell us about, and the numbers behind them.
        </p>
      </div>

      <section className="results-section" style={{ background: "#FDFAF5" }}>
        <style>{`
    .results-section { padding: 56px 32px; }
    .stats-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 40px; }
    .results-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

    @media (max-width: 1024px) {
      .stats-row { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 640px) {
      .results-section { padding: 40px 16px; }
      .stats-row { grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 28px; }
      .results-grid { grid-template-columns: 1fr; }
    }
  `}</style>

        {/* Stats Row */}
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
              <div
                style={{ fontSize: "12px", color: "#888780", marginTop: "4px" }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>

        {/* Results Grid */}
        <div className="results-grid">
          {results.map((r) => (
            <div
              key={r.meta}
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
                  fontSize: "16px",
                  color: "#1C1C1C",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  marginBottom: "12px",
                  borderLeft: "3px solid #2D6A4F",
                  paddingLeft: "14px",
                }}
              >
                {r.quote}
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "#555550",
                  lineHeight: 1.7,
                  marginBottom: "10px",
                }}
              >
                {r.body}
              </p>
              <div style={{ fontSize: "11px", color: "#888780" }}>{r.meta}</div>
            </div>
          ))}

          {/* CTA Card */}
          <div
            style={{
              background: "#E8F5EE",
              border: "0.5px solid #9FE1CB",
              borderRadius: "8px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#085041",
                marginBottom: "8px",
                fontWeight: 500,
              }}
            >
              YOUR RESULT COULD BE NEXT
            </div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "18px",
                color: "#085041",
                marginBottom: "6px",
              }}
            >
              Start with a free catalog audit
            </div>
            <div
              style={{
                fontSize: "12px",
                color: "#0F6E56",
                marginBottom: "16px",
              }}
            >
              No commitment. We review 50 SKUs and show you exactly what
              we&apos;d fix.
            </div>
            <div
              style={{
                background: "#2D6A4F",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "4px",
                fontSize: "12px",
                fontWeight: 500,
                display: "inline-block",
                width: "fit-content",
                cursor: "pointer",
              }}
            >
              Get free audit
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
