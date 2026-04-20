import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { platforms, platformSlugs } from "@/lib/platforms";

// ── Generate all 6 static routes at build time ──
export async function generateStaticParams() {
  return platformSlugs.map((slug) => ({ platform: slug }));
}

// ── Dynamic SEO metadata per platform ──
export async function generateMetadata({
  params,
}: {
  params: Promise<{ platform: string }>;
}): Promise<Metadata> {
  const { platform: slug } = await params;
  const p = platforms[slug];
  if (!p) return { title: "Not Found" };

  return {
    title: `${p.name} Back-Office Services – Professional ITS`,
    description: p.description,
    keywords: [
      `${p.name} catalog management`,
      `${p.name} product uploads`,
      `${p.name} back-office`,
      `${p.name} order management`,
      "ecommerce back-office",
    ],
    openGraph: {
      title: `${p.name} Back-Office Services – Professional ITS`,
      description: p.description,
      url: `https://professionalits.com/platforms/${slug}`,
      siteName: "Professional ITS",
      type: "website",
    },
    alternates: {
      canonical: `https://professionalits.com/platforms/${slug}`,
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

export default async function PlatformPage({
  params,
}: {
  params: Promise<{ platform: string }>;
}) {
  const { platform: slug } = await params;
  const p = platforms[slug];

  // 404 if slug not found
  if (!p) notFound();

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
            href="/platforms"
            style={{ color: "#888780", textDecoration: "none" }}
          >
            Platforms
          </Link>
          <span style={{ color: "#2D6A4F" }}> / {p.name}</span>
        </div>

        {/* Platform name badge */}
        <div
          style={{
            display: "inline-block",
            background: "#FFFFFF",
            border: `1px solid ${p.color}`,
            borderRadius: "4px",
            padding: "4px 12px",
            fontSize: "12px",
            fontWeight: 600,
            color: p.color,
            marginBottom: "16px",
            letterSpacing: "0.3px",
          }}
        >
          {p.name}
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
          {p.heroHeadline}
          <em style={{ color: "#2D6A4F", fontStyle: "italic" }}>{p.heroEm}</em>
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
          {p.description}
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
      <style>{`
        .plat-stats { display: grid; grid-template-columns: repeat(${p.stats.length}, 1fr); background: #2D6A4F; padding: 20px 32px; }
        @media (max-width: 640px) { .plat-stats { padding: 16px; gap: 8px; } .plat-stats > div .stat-n { font-size: 16px !important; } .plat-stats > div .stat-l { font-size: 9px !important; } }
      `}</style>
      <div className="plat-stats">
        {p.stats.map((s) => (
          <div key={s.l} style={{ textAlign: "center" }}>
            <div
              className="stat-n"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                color: "#fff",
                fontWeight: 500,
              }}
            >
              {s.n}
            </div>
            <div
              className="stat-l"
              style={{
                fontSize: "11px",
                color: "rgba(255,255,255,0.7)",
                marginTop: "2px",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>

      {/* ── WHAT WE HANDLE (optional) ── */}
      {p.whatWeHandle && p.whatWeHandle.length > 0 && (
        <section style={{ padding: "56px 32px", borderBottom: "0.5px solid #D5C9B0" }}>
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "1.5px",
              color: "#2D6A4F",
              fontWeight: 500,
              marginBottom: "10px",
            }}
          >
            WHAT WE HANDLE
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "26px",
              fontWeight: 500,
              color: "#1C1C1C",
              marginBottom: "40px",
            }}
          >
            How we run your {p.name} store.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "36px",maxWidth:"720px" }}>
            {p.whatWeHandle.map((item) => (
              <div key={item.title}>
                <div
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "#2D6A4F",
                    marginBottom: "8px",
                  }}
                >
                  {item.title}
                </div>
                {item.body && (
                  <p
                    style={{
                      fontSize: "13px",
                      color: "#555550",
                      lineHeight: 1.75,
                      marginBottom: item.bullets.length > 0 ? "12px" : 0,
                    }}
                  >
                    {item.body}
                  </p>
                )}
                {item.bullets.length > 0 && (
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                    {item.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                        <span style={{ color: "#2D6A4F", fontSize: "14px", lineHeight: "22px", flexShrink: 0 }}>•</span>
                        <span style={{ fontSize: "13px", color: "#555550", lineHeight: 1.65 }}>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ── WHY SECTION (optional) ── */}
      {p.whySection && (
        <section
          style={{
            background: "#1C1C1C",
            padding: "48px 32px",
            borderBottom: "0.5px solid #333",
          }}
        >
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "1.5px",
              color: "#9FE1CB",
              fontWeight: 500,
              marginBottom: "12px",
            }}
          >
            WHY IT MATTERS
          </div>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "22px",
              fontWeight: 500,
              color: "#fff",
              marginBottom: "16px",
              maxWidth: "640px",
            }}
          >
            {p.whySection.title}
          </h2>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.65)",
              lineHeight: 1.8,
              maxWidth: "680px",
            }}
          >
            {p.whySection.body}
          </p>
        </section>
      )}

      {/* ── SERVICES GRID ── */}
      <section
        className="services-section"
        style={{ borderBottom: "0.5px solid #D5C9B0" }}
      >
        <style>{`
    .services-section { padding: 56px 32px; }
    .services-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }

    .included-section2 { padding: 56px 32px; }
    .included-grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: start; }

    @media (max-width: 1024px) {
      .services-grid { grid-template-columns: repeat(2, 1fr); }
    }

    @media (max-width: 640px) {
      .services-section { padding: 40px 16px; }
      .services-grid { grid-template-columns: 1fr; }
      .services-heading { font-size: 22px !important; }

      .included-section2 { padding: 40px 16px; }
      .included-grid2 { grid-template-columns: 1fr; gap: 28px; }
      .included-heading2 { font-size: 22px !important; }
    }
  `}</style>

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
          className="services-heading"
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "26px",
            fontWeight: 500,
            color: "#1C1C1C",
            marginBottom: "8px",
          }}
        >
          Services for {p.name}.
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
          Every service below is available standalone or as part of a monthly
          managed retainer.
        </p>
        <div className="services-grid">
          {p.services.map((s, i) => (
            <div
              key={s.title}
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
                {s.title}
              </div>
              <div
                style={{ fontSize: "12px", color: "#555550", lineHeight: 1.65 }}
              >
                {s.body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section
        className="included-section2"
        style={{ background: "#F5F0E8", borderBottom: "0.5px solid #D5C9B0" }}
      >
        <div className="included-grid2">
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
              className="included-heading2"
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "10px",
              }}
            >
              {p.includes.map((item) => (
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
          </div>

          {/* CTA card */}
          <div>
            <div
              style={{
                background: "#FFFFFF",
                border: "0.5px solid #D5C9B0",
                borderRadius: "8px",
                padding: "28px",
                marginBottom: "16px",
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
                Start with a free catalog audit
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#888780",
                  lineHeight: 1.6,
                  marginBottom: "20px",
                }}
              >
                We review 50 of your {p.name} SKUs — data completeness, listing
                quality, and attribute accuracy — and deliver a written findings
                report within 48 hours.
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

            {/* Trust note */}
            <div
              style={{
                background: "#E8F5EE",
                border: "0.5px solid #9FE1CB",
                borderRadius: "6px",
                padding: "16px",
              }}
            >
              <div
                style={{ fontSize: "11px", color: "#085041", lineHeight: 1.6 }}
              >
                <span style={{ fontWeight: 500 }}>No lock-in, ever.</span> The
                audit is genuinely free. We&apos;ll show you what we found and
                what we&apos;d fix — whether you work with us or not.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER PLATFORMS ── */}
      <section
        style={{ padding: "40px 32px", borderBottom: "0.5px solid #D5C9B0" }}
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
          WE ALSO SUPPORT
        </div>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {p.also.map((name) => {
            const otherSlug = Object.values(platforms).find(
              (pl) => pl.name === name || pl.name.startsWith(name),
            )?.slug;
            return otherSlug ? (
              <Link
                key={name}
                href={`/platforms/${otherSlug}`}
                style={{
                  border: "0.5px solid #D5C9B0",
                  borderRadius: "3px",
                  padding: "7px 16px",
                  fontSize: "13px",
                  color: "#555550",
                  background: "#FDFAF5",
                  textDecoration: "none",
                }}
              >
                {name}
              </Link>
            ) : (
              <div
                key={name}
                style={{
                  border: "0.5px solid #D5C9B0",
                  borderRadius: "3px",
                  padding: "7px 16px",
                  fontSize: "13px",
                  color: "#555550",
                  background: "#FDFAF5",
                }}
              >
                {name}
              </div>
            );
          })}
        </div>
      </section>

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
            Ready to hand over your {p.name} operations?
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
