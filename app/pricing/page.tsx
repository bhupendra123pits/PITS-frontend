import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PricingFaq from "./PricingFaq";

export const metadata: Metadata = {
  title: "Pricing – Professional ITS",
  description:
    "Transparent pricing for e-commerce back-office services. From $0.50 per SKU. Retainers from $350/month. No lock-in contracts",
  alternates: {
    canonical: "https://professionalits.com/pricing",
  },
  openGraph: {
    title: "Pricing – Professional ITS",
    description:
      "Transparent pricing with no surprises. Per SKU, monthly retainers, and virtual assistant options.",
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
      }}
    >
      <style>{`
        .pricing-hero { background: #F5F0E8; padding: 48px 32px 40px; border-bottom: 0.5px solid #D5C9B0; }
        .pricing-section { padding: 56px 32px; background: #FDFAF5; }
        .pricing-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; margin-bottom: 32px; }
        .inclusions-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
        .pricing-cta-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }

        @media (max-width: 1024px) {
          .pricing-grid { grid-template-columns: 1fr 1fr; }
        }

        #card-catalog, #card-retainer, #card-va {
          scroll-margin-top: 64px;
        }

        @media (max-width: 640px) {
          .pricing-hero { padding: 36px 16px 32px; }
          .pricing-hero h1 { font-size: 26px !important; }
          .pricing-decision { padding: 32px 16px 0; }
          .pricing-section { padding: 40px 16px; }
          .pricing-grid { grid-template-columns: 1fr; }
          .inclusions-grid { grid-template-columns: 1fr 1fr; }
          .pricing-cta-row { grid-template-columns: 1fr; }
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
              "Transparent ecommerce outsourcing pricing. Per-SKU catalog services from $0.50, monthly retainers from 40 hrs, VAs from $350/month.",
            mainEntity: {
              "@type": "Offer",
              name: "Ecommerce Back-Office Services",
              description:
                "Per-SKU catalog services, monthly retainers, and dedicated ecommerce VAs.",
              seller: {
                "@id": "https://professionalits.com/#organization",
              },
              priceSpecification: [
                {
                  "@type": "UnitPriceSpecification",
                  name: "Data entry (standard)",
                  price: "0.50",
                  priceCurrency: "USD",
                  unitText: "per SKU",
                  minPrice: "0.50",
                },
                {
                  "@type": "UnitPriceSpecification",
                  name: "Listing creation + copy",
                  price: "2.00",
                  priceCurrency: "USD",
                  unitText: "per SKU",
                  minPrice: "2.00",
                },
                {
                  "@type": "UnitPriceSpecification",
                  name: "Part-time ecommerce VA (20 hrs/wk)",
                  price: "350.00",
                  priceCurrency: "USD",
                  unitText: "per month",
                  minPrice: "350.00",
                },
                {
                  "@type": "UnitPriceSpecification",
                  name: "Full-time ecommerce VA (40 hrs/wk)",
                  price: "600.00",
                  priceCurrency: "USD",
                  unitText: "per month",
                  minPrice: "600.00",
                },
              ],
            },
          }),
        }}
      />

      <div className="pricing-hero">
        <div
          style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}
        >
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
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "32px",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "12px",
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
          }}
        >
          No long contracts. No hidden fees. Three ways to engage — pick what
          fits, scale as you grow. Start with a free catalog audit if
          you&apos;re not sure.
        </p>
      </div>

      {/* Decision aid */}
      <div
        style={{ padding: "22px 32px", background: "#2D6A4F" }}
        className="pricing-decision"
      >
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
        <div className="pricing-grid" style={{ marginBottom: 0 }}>
          {[
            {
              title: "One-time work",
              body: "Catalog cleanup, listing creation, migrations, image processing, attribute fixes.",
              tag: "Per SKU",
              anchor: "#card-catalog",
            },
            {
              title: "Ongoing managed operations",
              body: "Account-managed engagement with weekly reporting and a dedicated contact.",
              tag: "Monthly retainer",
              anchor: "#card-retainer",
            },
            {
              title: "Dedicated team member",
              body: "A specialist working your hours, on tasks you assign. You direct the workflow.",
              tag: "Virtual assistant",
              anchor: "#card-va",
            },
          ].map((opt) => (
            <div
              key={opt.title}
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "0.5px solid rgba(255,255,255,0.15)",
                borderRadius: "10px",
                padding: "10px 20px 10px",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#ffffff",
                  marginBottom: "10px",
                  lineHeight: 1.35,
                  fontFamily: "var(--font-serif)",
                }}
              >
                {opt.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.65,
                  marginBottom: "18px",
                }}
              >
                {opt.body}
              </div>
              <a
                href={opt.anchor}
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#7ECBA7",
                  letterSpacing: "0.2px",
                  textDecoration: "none",
                }}
              >
                → {opt.tag}
              </a>
            </div>
          ))}
        </div>
      </div>

      <section className="pricing-section">
        <div className="pricing-grid">
          {/* Catalog & Listing */}
          <div
            id="card-catalog"
            style={{
              border: "0.5px solid #D5C9B0",
              borderRadius: "8px",
              padding: "24px",
              background: "#FDFAF5",
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                fontSize: "11px",
                color: "#2D6A4F",
                fontWeight: 500,
                letterSpacing: "0.5px",
                marginBottom: "10px",
              }}
            >
              CATALOG &amp; LISTING
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "6px",
                lineHeight: 1.2,
              }}
            >
              Per SKU
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: "12px",
                color: "#888780",
                marginBottom: "20px",
                lineHeight: 1.5,
              }}
            >
              Best for one-time work. Invoiced monthly, no minimum commitment.
            </div>

            {/* Line items */}
            {[
              "Data entry (standard) — from $0.50 per SKU",
              "Listing creation + copywriting — from $2.00 per SKU",
              "Listing optimisation — from $1.50 per SKU",
              "AI-assisted writing — from $1.00 per SKU",
              "Catalog enrichment — from $1.50 per SKU",
            ].map((b) => (
              <div
                key={b}
                style={{
                  fontSize: "13px",
                  color: "#555550",
                  padding: "5px 0 5px 16px",
                  borderLeft: "2px solid #E8F5EE",
                  marginBottom: "6px",
                }}
              >
                {b}
              </div>
            ))}

            {/* Footnote */}
            <div
              style={{
                marginTop: "16px",
                paddingTop: "14px",
                borderTop: "0.5px solid #E8E4DC",
                fontSize: "11px",
                color: "#888780",
                lineHeight: 1.65,
              }}
            >
              AI-assisted writing: drafted with AI, reviewed and refined by a
              human specialist. Catalog enrichment pricing varies by attribute
              depth and language requirements — contact us for a scoped quote.
            </div>
          </div>

          {/* Monthly Retainer - Featured */}
          <div
            id="card-retainer"
            style={{
              border: "2px solid #2D6A4F",
              borderRadius: "8px",
              padding: "24px",
              background: "#FDFAF5",
              position: "relative",
            }}
          >
            {/* Badge */}
            <div
              style={{
                position: "absolute",
                top: "-12px",
                left: "20px",
                background: "#2D6A4F",
                color: "#fff",
                fontSize: "10px",
                padding: "4px 12px",
                borderRadius: "3px",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              MOST POPULAR
            </div>

            {/* Eyebrow */}
            <div
              style={{
                fontSize: "11px",
                color: "#2D6A4F",
                fontWeight: 500,
                letterSpacing: "0.5px",
                marginBottom: "10px",
              }}
            >
              MONTHLY RETAINER
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "6px",
                lineHeight: 1.2,
              }}
            >
              Ongoing operational support
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: "12px",
                color: "#888780",
                marginBottom: "20px",
                lineHeight: 1.5,
              }}
            >
              Best for stores needing managed operations. Month-to-month, 30-day
              cancellation. Includes weekly reporting + a dedicated account
              contact.
            </div>

            {/* Tiers */}
            {[
              {
                label: "Starter",
                hours: "40 hours per month",
                price: "from $400 per month",
                rate: "$10.00/hour",
              },
              {
                label: "Growth",
                hours: "80 hours per month",
                price: "from $720 per month",
                rate: "$9.00/hour",
              },
              {
                label: "Scale",
                hours: "160 hours per month + dedicated account manager",
                price: "from $1,200 per month",
                rate: "$7.50/hour",
              },
            ].map((tier) => (
              <div
                key={tier.label}
                style={{
                  padding: "12px 14px",
                  background: "#F0F7F4",
                  border: "0.5px solid #C2DDD4",
                  borderRadius: "6px",
                  marginBottom: "8px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: "3px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#1C1C1C",
                      letterSpacing: "0.2px",
                    }}
                  >
                    {tier.label}
                  </span>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#2D6A4F",
                      fontWeight: 500,
                    }}
                  >
                    {tier.rate}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#555550",
                    marginBottom: "4px",
                  }}
                >
                  {tier.hours}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#1C1C1C",
                  }}
                >
                  {tier.price}
                </div>
              </div>
            ))}

            {/* Footnote */}
            <div
              style={{
                marginTop: "16px",
                paddingTop: "14px",
                borderTop: "0.5px solid #C2DDD4",
                fontSize: "11px",
                color: "#888780",
                lineHeight: 1.65,
              }}
            >
              All retainer engagements include weekly reporting, a dedicated
              contact, and platform-trained operators. Custom hour blocks
              available on request.
            </div>
          </div>

          {/* Virtual Assistants */}
          <div
            id="card-va"
            style={{
              border: "0.5px solid #D5C9B0",
              borderRadius: "8px",
              padding: "24px",
              background: "#FDFAF5",
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                fontSize: "11px",
                color: "#2D6A4F",
                fontWeight: 500,
                letterSpacing: "0.5px",
                marginBottom: "10px",
              }}
            >
              VIRTUAL ASSISTANTS
            </div>

            {/* Title */}
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "6px",
                lineHeight: 1.2,
              }}
            >
              E-commerce trained specialists
            </div>

            {/* Subtitle */}
            <div
              style={{
                fontSize: "12px",
                color: "#888780",
                marginBottom: "20px",
                lineHeight: 1.5,
              }}
            >
              Best when you want a dedicated team member. Month-to-month, 30-day
              cancellation. You direct the work; we provide the operator.
            </div>

            {/* Line items */}
            {[
              {
                text: "Part-time (20 hrs/week) — from $200 per week",
                rate: "$10.00/hour",
              },
              {
                text: "Full-time (40 hrs/week) — from $360 per week",
                rate: "$9.00/hour",
              },
            ].map((item) => (
              <div
                key={item.text}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  fontSize: "13px",
                  color: "#555550",
                  padding: "5px 0 5px 16px",
                  borderLeft: "2px solid #E8F5EE",
                  marginBottom: "6px",
                  gap: "8px",
                }}
              >
                <span>{item.text}</span>
                <span
                  style={{
                    fontSize: "11px",
                    color: "#2D6A4F",
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  {item.rate}
                </span>
              </div>
            ))}

            {/* Inclusions */}
            <div
              style={{
                marginTop: "16px",
                paddingTop: "14px",
                borderTop: "0.5px solid #E8E4DC",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  letterSpacing: "0.3px",
                  marginBottom: "8px",
                }}
              >
                INCLUDED
              </div>
              {[
                "Onboarding within 48–72 hours",
                "Replacement within 7 days at no additional cost if a VA isn't the right fit",
                "Weekly check-in with the assigned operator",
              ].map((inc) => (
                <div
                  key={inc}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: "#E8F5EE",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "1px",
                    }}
                  >
                    <svg viewBox="0 0 10 10" width="8" height="8" fill="none">
                      <path
                        d="M2 5L4 7L8 3"
                        stroke="#2D6A4F"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#555550",
                      lineHeight: 1.55,
                    }}
                  >
                    {inc}
                  </span>
                </div>
              ))}
            </div>

            {/* Footnote */}
            <div
              style={{
                marginTop: "16px",
                paddingTop: "14px",
                borderTop: "0.5px solid #E8E4DC",
                fontSize: "11px",
                color: "#888780",
                lineHeight: 1.65,
              }}
            >
              Pricing reflects standard skill profiles. Senior or
              platform-specialist VAs available at higher rates. Contact us for
              a scoped quote.
            </div>
          </div>
        </div>

        {/* Included across every engagement */}
        <div
          style={{
            borderTop: "0.5px solid #D5C9B0",
            paddingTop: "40px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              fontSize: "13px",
              fontWeight: 500,
              color: "#1C1C1C",
              marginBottom: "20px",
              letterSpacing: "0.1px",
            }}
          >
            INCLUDED ACROSS EVERY ENGAGEMENT
          </div>
          <div className="inclusions-grid">
            {[
              {
                icon: (
                  <path
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    stroke="#2D6A4F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                ),
                title: "4-hour response SLA",
                body: "Across every account, every size.",
              },
              {
                icon: (
                  <path
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    stroke="#2D6A4F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ),
                title: "Dedicated point of contact",
                body: "Same person, every conversation.",
              },
              {
                icon: (
                  <path
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    stroke="#2D6A4F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ),
                title: "Platform-trained specialists",
                body: "Seller Central, Shopify admin, Walmart Seller Center, and more.",
              },
              {
                icon: (
                  <path
                    d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                    stroke="#2D6A4F"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ),
                title: "No long contracts",
                body: "Month-to-month with 30-day cancellation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: "#F5F0E8",
                  border: "0.5px solid #D5C9B0",
                  borderRadius: "8px",
                  padding: "18px 16px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#E8F5EE",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "12px",
                  }}
                >
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none">
                    {item.icon}
                  </svg>
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 600,
                    color: "#1C1C1C",
                    marginBottom: "4px",
                    lineHeight: 1.4,
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "#555550",
                    lineHeight: 1.6,
                  }}
                >
                  {item.body}
                </div>
              </div>
            ))}
          </div>

          {/* Footnote */}
          <div
            style={{
              marginTop: "16px",
              fontSize: "11px",
              color: "#888780",
              lineHeight: 1.65,
            }}
          >
            All prices in USD. Quotes available in GBP, EUR, and AUD on request.
            Prices exclusive of applicable taxes (GST, VAT, sales tax).
          </div>
        </div>

        {/* CTA Row */}
        <div className="pricing-cta-row">
          {/* Free audit CTA */}
          <div
            style={{
              background: "#1C1C1C",
              borderRadius: "8px",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom: "10px",
                  lineHeight: 1.25,
                }}
              >
                Not sure which plan fits?
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.7,
                }}
              >
                Start with a free catalog audit. We review 50 of your SKUs,
                deliver a written findings report, and recommend the right
                engagement. No credit card. No commitment.
              </div>
            </div>
            <Link
              href="/audit"
              style={{
                display: "inline-block",
                background: "#2D6A4F",
                color: "#fff",
                textDecoration: "none",
                padding: "13px 24px",
                borderRadius: "4px",
                fontSize: "13px",
                fontWeight: 500,
                alignSelf: "flex-start",
              }}
            >
              Get free catalog audit →
            </Link>
          </div>

          {/* Talk to our team CTA */}
          <div
            style={{
              background: "#F5F0E8",
              border: "0.5px solid #D5C9B0",
              borderRadius: "8px",
              padding: "36px 32px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "24px",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  marginBottom: "10px",
                  lineHeight: 1.25,
                }}
              >
                Already know what you need?
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#555550",
                  lineHeight: 1.7,
                }}
              >
                Tell us about your store and the work involved. We&apos;ll come
                back with a scoped quote within 4 business hours.
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              <Link
                href="/contact"
                style={{
                  display: "inline-block",
                  background: "#2D6A4F",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "13px 24px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  fontWeight: 500,
                  alignSelf: "flex-start",
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
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#25D366">
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
