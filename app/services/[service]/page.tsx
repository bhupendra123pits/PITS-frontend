import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services, serviceSlugs } from "@/lib/services";
import { platforms } from "@/lib/platforms";

export async function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ service: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const s = services[slug];
  if (!s) return { title: "Not Found" };

  return {
    title: `${s.name} – Professional ITS`,
    description: s.description,
    keywords: [
      s.name.toLowerCase(),
      "ecommerce back-office",
      "product data services",
      "catalog management",
    ],
    openGraph: {
      title: `${s.name} – Professional ITS`,
      description: s.description,
      url: `https://professionalits.com/services/${slug}`,
      siteName: "Professional ITS",
      type: "website",
      images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
    },
    alternates: {
      canonical: `https://professionalits.com/services/${slug}`,
    },
  };
}

const CheckIcon = () => (
  <div
    style={{
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      background: "#E8F5EE",
      flexShrink: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "2px",
    }}
  >
    <svg
      viewBox="0 0 10 10"
      style={{ width: "10px", height: "10px" }}
      fill="none"
    >
      <path
        d="M2 5L4.5 7.5L8 3"
        stroke="#2D6A4F"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service: slug } = await params;
  const s = services[slug];

  if (!s) notFound();

  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FDFAF5",
        color: "#1C1C1C",
      }}
    >
      <Navbar />

      {/* ── HERO ── */}
      <div
        style={{
          background: "#F5F0E8",
          padding: "48px 32px 40px",
          borderBottom: "0.5px solid #D5C9B0",
        }}
      >
        <div
          style={{ fontSize: "11px", color: "#888780", marginBottom: "14px" }}
        >
          <Link
            href="/services"
            style={{ color: "#888780", textDecoration: "none" }}
          >
            Services
          </Link>
          <span style={{ color: "#2D6A4F" }}> / {s.name}</span>
        </div>
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "14px",
          }}
        >
          EXECUTION SERVICE
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "36px",
            fontWeight: 500,
            lineHeight: 1.15,
            color: "#1C1C1C",
            marginBottom: "14px",
          }}
        >
          {s.heroHeadline}
          <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>{s.heroEm}</em>
        </h1>
        <p
          style={{
            fontSize: "14px",
            color: "#555550",
            lineHeight: 1.75,
            maxWidth: "580px",
            marginBottom: "28px",
          }}
        >
          {s.description}
        </p>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Link
            href="/audit"
            style={{
              background: "#2D6A4F",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Get free catalog audit
          </Link>
          <Link
            href="/pricing"
            style={{
              border: "0.5px solid #B4B2A9",
              color: "#555550",
              padding: "12px 24px",
              borderRadius: "4px",
              fontSize: "13px",
              textDecoration: "none",
            }}
          >
            View pricing
          </Link>
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <div
        style={{
          background: "#2D6A4F",
          padding: "20px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
        }}
      >
        {s.stats.map((stat) => (
          <div key={stat.l} style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              {stat.n}
            </div>
            <div
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "2px",
              }}
            >
              {stat.l}
            </div>
          </div>
        ))}
      </div>

      {/* ── WHY IT MATTERS ── */}
      <section
        className="why-section"
        style={{ borderBottom: "0.5px solid #D5C9B0" }}
      >
        <style>{`
    .why-section { padding: 56px 32px; }
    .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
    .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

    .whatwedo-section { padding: 56px 32px; }
    .whatwedo-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }

    .included-section { padding: 56px 32px; }
    .included-outer-grid { display: grid; grid-template-columns: 1fr 340px; gap: 48px; align-items: start; }
    .included-checks-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 28px; }

    @media (max-width: 1024px) {
      .whatwedo-grid { grid-template-columns: repeat(2, 1fr); }
      .included-outer-grid { grid-template-columns: 1fr; }
      .included-cta { max-width: 480px; }
    }

    @media (max-width: 640px) {
      .why-section, .whatwedo-section, .included-section { padding: 40px 16px; }
      .why-grid { grid-template-columns: 1fr; gap: 28px; }
      .stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
      .whatwedo-grid { grid-template-columns: 1fr; }
      .included-outer-grid { grid-template-columns: 1fr; gap: 28px; }
      .included-checks-grid { grid-template-columns: 1fr; }
      .section-heading { font-size: 22px !important; }
    }
  `}</style>

        <div className="why-grid">
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "1.5px",
                color: "#2D6A4F",
                fontWeight: 500,
                marginBottom: "10px",
              }}
            >
              WHY IT MATTERS
            </div>
            <h2
              className="section-heading"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "26px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "16px",
              }}
            >
              The operational cost of getting this wrong.
            </h2>
            <p style={{ fontSize: "14px", color: "#555550", lineHeight: 1.75 }}>
              {s.whyItMatters}
            </p>
          </div>
          <div className="stats-grid">
            {s.stats.map((stat) => (
              <div
                key={stat.l}
                style={{
                  background: "#F5F0E8",
                  border: "0.5px solid #D5C9B0",
                  borderRadius: "8px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "28px",
                    fontWeight: 500,
                    color: "#2D6A4F",
                  }}
                >
                  {stat.n}
                </div>
                <div
                  style={{
                    fontSize: "11px",
                    color: "#888780",
                    marginTop: "4px",
                  }}
                >
                  {stat.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ── */}
      <section
        className="whatwedo-section"
        style={{ background: "#F5F0E8", borderBottom: "0.5px solid #D5C9B0" }}
      >
        <div
          style={{
            fontSize: "10px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "10px",
          }}
        >
          WHAT WE DO
        </div>
        <h2
          className="section-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "26px",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "8px",
          }}
        >
          Every part of the {s.name.toLowerCase()} process.
        </h2>
        <p
          style={{
            fontSize: "13px",
            color: "#555550",
            lineHeight: 1.65,
            maxWidth: "520px",
            marginBottom: "36px",
          }}
        >
          Available standalone or as part of a monthly managed retainer.
        </p>
        <div className="whatwedo-grid">
          {s.items.map((item, i) => (
            <div
              key={item.title}
              style={{
                background: i === 0 ? "#E8F5EE" : "#FFFFFF",
                border: `0.5px solid ${i === 0 ? "#9FE1CB" : "#D5C9B0"}`,
                borderRadius: "8px",
                padding: "22px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  marginBottom: "8px",
                }}
              >
                {item.title}
              </div>
              <div
                style={{ fontSize: "12px", color: "#555550", lineHeight: 1.65 }}
              >
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT'S INCLUDED + CTA ── */}
      <section
        className="included-section"
        style={{ borderBottom: "0.5px solid #D5C9B0" }}
      >
        <div className="included-outer-grid">
          <div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "1.5px",
                color: "#2D6A4F",
                fontWeight: 500,
                marginBottom: "10px",
              }}
            >
              WHAT&apos;S INCLUDED
            </div>
            <h2
              className="section-heading"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "26px",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "24px",
              }}
            >
              Everything in the engagement.
            </h2>
            <div className="included-checks-grid">
              {s.includes.map((item) => (
                <div
                  key={item}
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                  }}
                >
                  <CheckIcon />
                  <span
                    style={{
                      fontSize: "13px",
                      color: "#555550",
                      lineHeight: 1.5,
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                fontSize: "10px",
                letterSpacing: "1.5px",
                color: "#2D6A4F",
                fontWeight: 500,
                marginBottom: "12px",
              }}
            >
              PLATFORMS
            </div>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {s.platforms.map((p) => {
                const slug = p.toLowerCase().replace(/\s+/g, "");
                const hasPage = !!platforms[slug];
                const tagStyle = {
                  border: "0.5px solid #D5C9B0",
                  borderRadius: "3px",
                  padding: "5px 12px",
                  fontSize: "12px",
                  background: "#FDFAF5",
                };
                return hasPage ? (
                  <Link
                    key={p}
                    href={`/platforms/${slug}`}
                    style={{ ...tagStyle, color: "#2D6A4F", textDecoration: "none", fontWeight: 500 }}
                  >
                    {p}
                  </Link>
                ) : (
                  <div key={p} style={{ ...tagStyle, color: "#555550" }}>
                    {p}
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA sidebar */}
          <div className="included-cta">
            <div
              style={{
                background: "#FFFFFF",
                border: "0.5px solid #D5C9B0",
                borderRadius: "8px",
                padding: "24px",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 500,
                  color: "#1C1C1C",
                  marginBottom: "6px",
                }}
              >
                Interested in {s.name}?
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#888780",
                  lineHeight: 1.6,
                  marginBottom: "18px",
                }}
              >
                Start with a free 50-SKU audit. We&apos;ll review your current
                setup and show you exactly what we&apos;d fix.
              </div>
              <Link
                href="/audit"
                style={{
                  display: "block",
                  background: "#2D6A4F",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "4px",
                  fontSize: "13px",
                  fontWeight: 500,
                  textAlign: "center",
                  textDecoration: "none",
                  marginBottom: "10px",
                }}
              >
                Get free catalog audit
              </Link>
              <Link
                href="/pricing"
                style={{
                  display: "block",
                  border: "0.5px solid #D5C9B0",
                  color: "#555550",
                  padding: "10px 20px",
                  borderRadius: "4px",
                  fontSize: "12px",
                  textAlign: "center",
                  textDecoration: "none",
                }}
              >
                View pricing
              </Link>
            </div>
            <div
              style={{
                background: "#E8F5EE",
                border: "0.5px solid #9FE1CB",
                borderRadius: "6px",
                padding: "14px",
              }}
            >
              <div
                style={{ fontSize: "11px", color: "#085041", lineHeight: 1.6 }}
              >
                <span style={{ fontWeight: 500 }}>No lock-in.</span> All
                services available standalone or as part of a monthly retainer.
                Scale up or down as needed.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED SERVICES ── */}
      {s.relatedServices.length > 0 && (
        <section
          style={{
            padding: "40px 32px",
            background: "#F5F0E8",
            borderBottom: "0.5px solid #D5C9B0",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "1.5px",
              color: "#2D6A4F",
              fontWeight: 500,
              marginBottom: "16px",
            }}
          >
            RELATED SERVICES
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            {s.relatedServices.map((relSlug) => {
              const rel = services[relSlug];
              if (!rel) return null;
              return (
                <Link
                  key={relSlug}
                  href={`/services/${relSlug}`}
                  style={{
                    background: "#FFFFFF",
                    border: "0.5px solid #D5C9B0",
                    borderRadius: "6px",
                    padding: "12px 18px",
                    textDecoration: "none",
                    display: "block",
                  }}
                >
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#1C1C1C",
                      marginBottom: "2px",
                    }}
                  >
                    {rel.name}
                  </div>
                  <div style={{ fontSize: "11px", color: "#888780" }}>
                    {rel.tagline}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* ── CTA BANNER ── */}
      <div
        style={{
          background: "#1C1C1C",
          padding: "48px 32px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "22px",
              color: "#fff",
              fontWeight: 500,
              marginBottom: "8px",
            }}
          >
            Ready to hand over {s.name.toLowerCase()}?
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "440px",
              lineHeight: 1.7,
            }}
          >
            Start with a free catalog audit. We&apos;ll review your store and
            show you exactly what we&apos;d fix first.
          </div>
        </div>
        <Link
          href="/audit"
          style={{
            background: "#2D6A4F",
            color: "#fff",
            padding: "13px 28px",
            borderRadius: "4px",
            fontSize: "13px",
            fontWeight: 500,
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Get free catalog audit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
