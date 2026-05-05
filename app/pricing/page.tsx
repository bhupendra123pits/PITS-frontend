import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PricingFaq from "./PricingFaq";

export const metadata: Metadata = {
  title: "Pricing – E-Commerce Back-Office Services | Professional ITS",
  description:
    "Transparent pricing for e-commerce back-office services. Per-SKU catalog work from $0.50, monthly retainers from $400, and dedicated e-commerce specialists from $9/hour. No long-term contracts.",
  alternates: {
    canonical: "https://professionalits.com/pricing",
  },
  openGraph: {
    title: "Pricing – E-Commerce Back-Office Services | Professional ITS",
    description:
      "Transparent pricing for e-commerce back-office services. Per-SKU catalog work from $0.50, monthly retainers from $400, and dedicated e-commerce specialists from $9/hour. No long-term contracts.",
    url: "https://professionalits.com/pricing",
    siteName: "Professional ITS",
    type: "website",
    images: [
      {
        url: "https://professionalits.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Professional ITS",
      },
    ],
  },
};

export default function PricingPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FDFAF5",
        color: "#1C1C1C",
        lineHeight: 1.5,
      }}
    >
      <style>{`
        .decision-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .roi-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .inclusions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin-top: 8px; }
        .price-line { display: flex; justify-content: space-between; align-items: center; padding: 9px 0; font-size: 13.5px; border-bottom: 0.5px dashed #E8E0CC; }
        .price-line:last-of-type { border-bottom: none; margin-bottom: 8px; }
        .plan { padding: 14px 0; border-bottom: 0.5px dashed #E8E0CC; }
        .plan:last-of-type { border-bottom: none; }
        .plan-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px; }

        #card-catalog, #card-retainer, #card-va { scroll-margin-top: 64px; }

        @media (max-width: 880px) {
          .decision-grid, .pricing-grid, .roi-grid, .inclusions-grid { grid-template-columns: 1fr; }
          .pricing-hero-h1 { font-size: 32px !important; }
        }
        @media (max-width: 640px) {
          .inclusions-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <Navbar />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: "https://professionalits.com/pricing",
            name: "Pricing — Ecommerce Outsourcing Services | Professional ITS",
            description:
              "Transparent ecommerce outsourcing pricing. Per-SKU catalog services from $0.50, monthly retainers from 40 hrs, VAs from $200/week.",
            mainEntity: {
              "@type": "Offer",
              name: "Ecommerce Back-Office Services",
              description:
                "Per-SKU catalog services, monthly retainers, and dedicated ecommerce VAs.",
              seller: { "@id": "https://professionalits.com/#organization" },
              priceSpecification: [
                {
                  "@type": "UnitPriceSpecification",
                  name: "Data entry",
                  price: "0.50",
                  priceCurrency: "USD",
                  unitText: "per SKU",
                  minPrice: "0.50",
                },
                {
                  "@type": "UnitPriceSpecification",
                  name: "Listing creation",
                  price: "2.00",
                  priceCurrency: "USD",
                  unitText: "per SKU",
                  minPrice: "2.00",
                },
                {
                  "@type": "UnitPriceSpecification",
                  name: "Part-time VA (20 hrs/wk)",
                  price: "200.00",
                  priceCurrency: "USD",
                  unitText: "per week",
                  minPrice: "200.00",
                },
                {
                  "@type": "UnitPriceSpecification",
                  name: "Full-time VA (40 hrs/wk)",
                  price: "360.00",
                  priceCurrency: "USD",
                  unitText: "per week",
                  minPrice: "360.00",
                },
              ],
            },
          }),
        }}
      />

      {/* Hero */}
      <header
        style={{
          background: "#F5F0E8",
          padding: "48px 32px 40px",
          borderBottom: "0.5px solid #D5C9B0",
        }}
      >
        <div style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}>
          <Link href="/" style={{ color: "#888780", textDecoration: "none" }}>
            Home
          </Link>
          <span> / </span>
          <span style={{ color: "#2D6A4F" }}>Pricing</span>
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
          PRICING
        </div>
        <h1
          className="pricing-hero-h1"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "32px",
            fontWeight: 500,
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#1C1C1C",
          }}
        >
          Transparent pricing.{" "}
          <em style={{ color: "#2D6A4F" }}>No surprises.</em>
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#555550",
            lineHeight: 1.65,
            maxWidth: "560px",
            margin: 0,
          }}
        >
          No long contracts. No hidden fees. Three ways to engage — pick what
          fits, scale as you grow. Start with a free catalog audit if
          you&apos;re not sure.
        </p>
      </header>

      {/* Decision Aid */}
      <section style={{ padding: "28px 32px", background: "#2D6A4F" }}>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "rgba(255,255,255,0.45)",
            fontWeight: 500,
            marginBottom: "10px",
          }}
        >
          CHOOSE BY WHAT YOU NEED
        </div>
        <div className="decision-grid">
          {[
            {
              title: "One-time work",
              body: "Catalog cleanup, listing creation, migrations, image processing, and attribute fixes.",
              anchor: "#card-catalog",
              tag: "Per SKU",
            },
            {
              title: "Ongoing managed operations",
              body: "Account-managed engagement with weekly reporting and a dedicated point of contact.",
              anchor: "#card-retainer",
              tag: "Monthly retainer",
            },
            {
              title: "Dedicated team member",
              body: "A specialist working your hours, on tasks you assign. You direct the workflow.",
              anchor: "#card-va",
              tag: "Virtual assistant",
            },
          ].map((opt) => (
            <div
              key={opt.title}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "0.5px solid rgba(255,255,255,0.15)",
                borderRadius: "10px",
                padding: "18px 20px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "18px",
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom: "8px",
                }}
              >
                {opt.title}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.6,
                  marginBottom: "14px",
                }}
              >
                {opt.body}
              </div>
              <a
                href={opt.anchor}
                style={{
                  color: "#7ECBA7",
                  fontSize: "12px",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                → {opt.tag}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Stats */}
      <section style={{ padding: "56px 32px", background: "#FDFAF5" }}>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "12px",
          }}
        >
          BUILT ON TRUST
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "28px",
            fontWeight: 500,
            lineHeight: 1.2,
            marginBottom: "8px",
            color: "#1C1C1C",
          }}
        >
          Why clients pick us — and stay.
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#555550",
            lineHeight: 1.65,
            maxWidth: "560px",
            marginBottom: "28px",
          }}
        >
          Pricing is one part of the decision. These four numbers are the rest of it.
        </p>
        <div className="roi-grid">
          {[
            {
              number: "1,500+",
              title: "Stores served globally",
              body: "Across 15+ platforms and marketplaces — small catalogs to 500,000-SKU enterprises.",
            },
            {
              number: "98%",
              title: "Client retention",
              body: "Year-on-year. The work renews because the operations team earns it.",
            },
            {
              number: "4 hr",
              title: "Response SLA",
              body: "Across every account, every size — measured and reported weekly.",
            },
            {
              number: "17 yrs",
              title: "In e-commerce ops",
              body: "Exclusively. We've never pivoted, never become a generalist agency.",
            },
          ].map((stat) => (
            <div
              key={stat.title}
              style={{
                background: "#F5F0E8",
                border: "0.5px solid #D5C9B0",
                borderRadius: "6px",
                padding: "16px",
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
                {stat.number}
              </div>
              <strong style={{ display: "block", fontSize: "13px", marginBottom: "4px", marginTop: "4px" }}>
                {stat.title}
              </strong>
              <p style={{ fontSize: "12px", color: "#555550", lineHeight: 1.6, margin: 0 }}>
                {stat.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Cards */}
      <section style={{ padding: "0 32px 56px", background: "#FDFAF5" }}>
        <div className="pricing-grid">

          {/* Per SKU */}
          <div
            id="card-catalog"
            style={{
              background: "#fff",
              border: "0.5px solid #E8E0CC",
              borderRadius: "10px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "1.4px",
                color: "#888780",
                fontWeight: 700,
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              Catalog &amp; Listing
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                margin: "0 0 8px",
              }}
            >
              Per SKU
            </h2>
            <div
              style={{
                fontSize: "13px",
                color: "#555550",
                lineHeight: 1.6,
                marginBottom: "20px",
                paddingBottom: "18px",
                borderBottom: "0.5px solid #E8E0CC",
              }}
            >
              Best for one-time catalog work. Invoiced monthly, no minimum commitment.
            </div>

            <div className="price-line">
              <span>Data entry</span>
              <strong>from $0.50/SKU</strong>
            </div>
            <div className="price-line">
              <span>Listing creation</span>
              <strong>from $2.00/SKU</strong>
            </div>
            <div className="price-line">
              <span>Listing optimisation</span>
              <strong>from $1.50/SKU</strong>
            </div>
            <div className="price-line">
              <span>AI-assisted writing</span>
              <strong>from $1.00/SKU</strong>
            </div>
            <div className="price-line">
              <span>Catalog enrichment</span>
              <strong>from $1.50/SKU</strong>
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "#888780",
                lineHeight: 1.65,
                paddingTop: "14px",
                marginTop: "auto",
              }}
            >
              AI-assisted writing is drafted with AI, reviewed and refined by a human
              specialist. Catalog enrichment pricing varies by attribute depth and
              language requirements — contact us for a scoped quote.
            </div>
          </div>

          {/* Monthly Retainer */}
          <div
            id="card-retainer"
            style={{
              background: "#fff",
              border: "2px solid #2D6A4F",
              borderRadius: "10px",
              padding: "28px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 4px 18px rgba(45,106,79,0.08)",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "20px",
                background: "#2D6A4F",
                color: "#fff",
                fontSize: "10px",
                letterSpacing: "0.5px",
                padding: "4px 12px",
                borderRadius: "3px",
                fontWeight: 500,
              }}
            >
              MOST POPULAR
            </div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "1.4px",
                color: "#888780",
                fontWeight: 700,
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              Monthly Retainer
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                margin: "0 0 8px",
              }}
            >
              Ongoing operational support
            </h2>
            <div
              style={{
                fontSize: "13px",
                color: "#555550",
                lineHeight: 1.6,
                marginBottom: "20px",
                paddingBottom: "18px",
                borderBottom: "0.5px solid #E8E0CC",
              }}
            >
              Month-to-month. Weekly reporting + dedicated contact. Best for stores
              needing managed operations.
            </div>

            {[
              {
                label: "Starter",
                rate: "$10.00/hour",
                sub: "40 hours/month · ~300–500 simple SKU updates/month",
                price: "from $400 per month",
              },
              {
                label: "Growth",
                rate: "$9.00/hour",
                sub: "80 hours/month · ~700–1,000 simple SKU updates/month",
                price: "from $720 per month",
              },
              {
                label: "Scale",
                rate: "$7.50/hour",
                sub: "160 hours/month · dedicated account manager included",
                price: "from $1,200 per month",
              },
            ].map((tier) => (
              <div className="plan" key={tier.label}>
                <div className="plan-head">
                  <strong style={{ fontSize: "14px", fontWeight: 600 }}>{tier.label}</strong>
                  <span style={{ color: "#2D6A4F", fontWeight: 500, fontSize: "12px" }}>
                    {tier.rate}
                  </span>
                </div>
                <small
                  style={{ display: "block", color: "#888780", fontSize: "12px", marginBottom: "4px" }}
                >
                  {tier.sub}
                </small>
                <div style={{ color: "#2D6A4F", fontWeight: 500, fontSize: "13px" }}>
                  {tier.price}
                </div>
              </div>
            ))}

            <div
              style={{
                fontSize: "11px",
                color: "#888780",
                lineHeight: 1.65,
                paddingTop: "14px",
                marginTop: "auto",
              }}
            >
              All retainer engagements include weekly reporting, a dedicated contact, and
              platform-trained operators. Custom hour blocks available on request.
            </div>
          </div>

          {/* Virtual Assistants */}
          <div
            id="card-va"
            style={{
              background: "#fff",
              border: "0.5px solid #E8E0CC",
              borderRadius: "10px",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "1.4px",
                color: "#888780",
                fontWeight: 700,
                marginBottom: "12px",
                textTransform: "uppercase",
              }}
            >
              Virtual Assistants
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                margin: "0 0 8px",
              }}
            >
              E-commerce trained specialists
            </h2>
            <div
              style={{
                fontSize: "13px",
                color: "#555550",
                lineHeight: 1.6,
                marginBottom: "20px",
                paddingBottom: "18px",
                borderBottom: "0.5px solid #E8E0CC",
              }}
            >
              Best when you want a dedicated team member. You direct the work; we provide
              the operator.
            </div>

            <div className="price-line">
              <span>Part-time, 20 hrs/week</span>
              <span>
                <strong>from $200/wk</strong>{" "}
                <span style={{ color: "#2D6A4F", fontWeight: 700, fontSize: "11px" }}>
                  $10/hr
                </span>
              </span>
            </div>
            <div className="price-line">
              <span>Full-time, 40 hrs/week</span>
              <span>
                <strong>from $360/wk</strong>{" "}
                <span style={{ color: "#2D6A4F", fontWeight: 700, fontSize: "11px" }}>
                  $9/hr
                </span>
              </span>
            </div>

            <div
              style={{
                fontSize: "11px",
                color: "#888780",
                lineHeight: 1.65,
                paddingTop: "14px",
                marginTop: "auto",
              }}
            >
              <strong style={{ color: "#1C1C1C", fontSize: "12px" }}>Included with every VA</strong>
              {[
                "Onboarding within 48–72 hours",
                "Replacement within 7 days at no additional cost",
                "Weekly check-in with the assigned operator",
                "Senior or platform-specialist VAs available at higher rates",
              ].map((item) => (
                <div
                  key={item}
                  style={{ display: "flex", gap: "8px", margin: "5px 0", fontSize: "12px", color: "#555550" }}
                >
                  <span style={{ color: "#2D6A4F", fontWeight: 700 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Table */}
      <section
        style={{
          background: "#F5F0E8",
          borderTop: "0.5px solid #D5C9B0",
          borderBottom: "0.5px solid #D5C9B0",
          padding: "56px 32px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "12px",
          }}
        >
          HOW WE COMPARE
        </div>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "28px",
            fontWeight: 500,
            lineHeight: 1.2,
            marginBottom: "8px",
            color: "#1C1C1C",
          }}
        >
          Outsourced partner, freelancer, or in-house hire?
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#555550",
            lineHeight: 1.65,
            maxWidth: "560px",
            marginBottom: "24px",
          }}
        >
          Three ways to get e-commerce back-office work done. Here&apos;s an honest look
          at when each fits — including when we&apos;re not the right answer.
        </p>
        <div
          style={{
            overflowX: "auto",
            borderRadius: "8px",
            border: "0.5px solid #D5C9B0",
            background: "#fff",
          }}
        >
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "13px",
              minWidth: "720px",
            }}
          >
            <thead>
              <tr>
                {[
                  { label: "Factor", us: false, w: "16%" },
                  { label: "Professional ITS", us: true, w: "30%" },
                  { label: "Freelancer", us: false, w: undefined },
                  { label: "In-house hire", us: false, w: undefined },
                ].map((h) => (
                  <th
                    key={h.label}
                    style={{
                      background: h.us ? "#1F4D38" : "#2D6A4F",
                      color: "#fff",
                      textAlign: "left",
                      padding: "14px 16px",
                      fontWeight: 600,
                      fontSize: "12px",
                      borderRight: "0.5px solid rgba(255,255,255,0.2)",
                      width: h.w,
                    }}
                  >
                    {h.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                {
                  factor: "Speed to start",
                  us: "Onboarded in 48–72 hours",
                  freelancer: "Days to weeks (sourcing + trial)",
                  inhouse: "2–4 months (hire + onboard + ramp)",
                },
                {
                  factor: "Cost predictability",
                  us: "Fixed monthly or per-SKU. No surprises.",
                  freelancer: "Project-by-project. Inconsistent quality at the same rate.",
                  inhouse: "High fixed cost: salary + benefits + management + recruiting",
                },
                {
                  factor: "Continuity",
                  us: "Dedicated contact, weekly reports, no key-person risk",
                  freelancer: "Tied to one individual — can disappear or leave no documentation",
                  inhouse: "Stable, but you carry cost during slow periods and attrition risk",
                },
                {
                  factor: "Scalability",
                  us: "Ramp 2 to 50+ operators within 48–72 hours",
                  freelancer: "Limited to that one freelancer's capacity",
                  inhouse: "Slow — hiring cycles run quarterly at best",
                },
                {
                  factor: "Platform expertise",
                  us: "Specialists across 15+ platforms — Seller Central, Shopify, Walmart Seller Center, and more",
                  freelancer: "Varies. Often deep in 1–2 platforms, gaps elsewhere",
                  inhouse: "Single hire = single skill set. Multi-platform requires multiple hires.",
                },
                {
                  factor: "Best when",
                  us: "Catalog or back-office is real, ongoing operational work",
                  freelancer: "One-off, well-scoped, low-stakes tasks",
                  inhouse: "Strategic role you want fully embedded in your team",
                },
              ].map((row) => (
                <tr key={row.factor}>
                  <td
                    style={{
                      padding: "14px 16px",
                      borderTop: "0.5px solid #E8E0CC",
                      color: "#1C1C1C",
                      fontWeight: 600,
                      verticalAlign: "top",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.factor}
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      borderTop: "0.5px solid #E8E0CC",
                      background: "#E8F5EE",
                      color: "#1C1C1C",
                      fontWeight: 500,
                      verticalAlign: "top",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.us}
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      borderTop: "0.5px solid #E8E0CC",
                      color: "#555550",
                      verticalAlign: "top",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.freelancer}
                  </td>
                  <td
                    style={{
                      padding: "14px 16px",
                      borderTop: "0.5px solid #E8E0CC",
                      color: "#555550",
                      verticalAlign: "top",
                      lineHeight: 1.5,
                    }}
                  >
                    {row.inhouse}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Inclusions */}
      <section
        style={{
          background: "#F5F0E8",
          borderBottom: "0.5px solid #D5C9B0",
          padding: "56px 32px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "20px",
          }}
        >
          INCLUDED ACROSS EVERY ENGAGEMENT
        </div>
        <div className="inclusions-grid">
          {[
            { title: "4-hour SLA", body: "Across every account, every size." },
            { title: "Dedicated contact", body: "Same person, every conversation." },
            { title: "Trained specialists", body: "Seller Central, Shopify, Walmart Seller Center, and more." },
            { title: "No long contracts", body: "Month-to-month with 30-day cancellation." },
          ].map((item) => (
            <div key={item.title}>
              <strong style={{ display: "block", fontSize: "14px", marginBottom: "4px" }}>
                {item.title}
              </strong>
              <p style={{ fontSize: "13px", color: "#555550", margin: 0, lineHeight: 1.55 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <div
          style={{
            marginTop: "28px",
            paddingTop: "20px",
            borderTop: "0.5px solid #D5C9B0",
            fontSize: "11px",
            color: "#888780",
            lineHeight: 1.6,
          }}
        >
          All prices in USD. Quotes available in GBP, EUR, and AUD on request. Prices
          exclusive of applicable taxes — see FAQ below for jurisdiction-specific tax
          treatment.
        </div>
      </section>

      {/* CTAs */}
      <section style={{ background: "#FDFAF5", padding: "56px 32px" }}>
        <div style={{ display: "grid", gap: "16px" }}>
          {/* Primary green */}
          <div
            style={{
              background: "#2D6A4F",
              borderRadius: "8px",
              padding: "32px",
              color: "#fff",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                color: "#fff",
                marginBottom: "10px",
              }}
            >
              Not sure which plan fits?
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.85)",
                margin: "0 0 20px",
                fontSize: "13px",
                lineHeight: 1.7,
                maxWidth: "600px",
              }}
            >
              Start with a free catalog audit. We review 50 of your SKUs, deliver a
              written findings report, and recommend the right engagement. No credit card.
              No commitment.
            </p>
            <Link
              href="/audit"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "#2D6A4F",
                textDecoration: "none",
                padding: "12px 22px",
                borderRadius: "4px",
                fontSize: "13px",
                fontWeight: 500,
              }}
            >
              Get free catalog audit →
            </Link>
          </div>

          {/* Secondary */}
          <div
            style={{
              background: "#F5F0E8",
              border: "0.5px solid #D5C9B0",
              borderRadius: "8px",
              padding: "32px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "10px",
              }}
            >
              Already know what you need?
            </div>
            <p
              style={{
                fontSize: "13px",
                color: "#555550",
                lineHeight: 1.7,
                margin: "0 0 20px",
              }}
            >
              Tell us about your store and the work involved. We&apos;ll come back with a
              scoped quote within 4 business hours.
            </p>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#2D6A4F",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "12px 22px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Get a custom quote →
              </Link>
              <a
                href="https://wa.me/919811018501?text=Hi%2C%20I%27d%20like%20a%20custom%20quote%20for%20Professional%20ITS%20services"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  color: "#555550",
                  textDecoration: "none",
                }}
              >
                
                Or message us on WhatsApp
                <svg viewBox="0 0 24 24" width="20" height="20" fill="#25D366">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <PricingFaq />
      <Footer />
    </div>
  );
}
