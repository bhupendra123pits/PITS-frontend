import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "About Professional ITS – E-Commerce Back-Office Specialists Since 2009",
  description:
    "Nineteen years in business. Seventeen focused exclusively on e-commerce catalog, marketplace, and back-office work. Independent, founder-led, and built around operators who've worked inside the platforms.",
  alternates: {
    canonical: "https://professionalits.com/about",
  },
  openGraph: {
    title:
      "About Professional ITS – E-Commerce Back-Office Specialists Since 2009",
    description:
      "Nineteen years in business. Seventeen focused exclusively on e-commerce catalog, marketplace, and back-office work.",
    url: "https://professionalits.com/about",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
};

const stats = [
  { n: "19 yrs", l: "In business" },
  { n: "17 yrs", l: "Exclusively in e-commerce" },
  { n: "1,500+", l: "Stores served globally" },
  { n: "98%", l: "Client retention, year on year" },
];

const teamPoints = [
  "100+ years combined e-commerce operations experience",
  "Dedicated account lead on every engagement, regardless of size",
  "Capacity scaled up or down within 48–72 hours",
  "4-hour response SLA, consistent at every scale",
];

export default function AboutPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FDFAF5",
        color: "#1C1C1C",
      }}
    >
      <Navbar />

      <style>{`
        .about-section {
          padding: 56px 32px;
          border-bottom: 0.5px solid #D5C9B0;
          background: #FDFAF5;
        }
        .about-section-alt {
          padding: 56px 32px;
          background: #F5F0E8;
          border-bottom: 0.5px solid #D5C9B0;
        }
        .about-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .about-team-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 56px;
          align-items: start;
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .about-stat-card {
          padding: 20px 16px;
          background: rgba(255,255,255,0.1);
          border: 0.5px solid rgba(255,255,255,0.2);
          border-radius: 10px;
          text-align: center;
        }
        .about-bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 14px;
          font-size: 13px;
          color: #555550;
          line-height: 1.65;
        }
        .about-bullet-dot {
          width: 6px;
          height: 6px;
          background: #2D6A4F;
          border-radius: 50%;
          margin-top: 6px;
          flex-shrink: 0;
        }
        .about-cta-banner { background: #1C1C1C; padding: 40px 32px; display: flex; justify-content: flex-start; align-items: center; }
        .about-cta-banner-btn { margin-left: 80px; flex-shrink: 0; }
        @media (max-width: 600px) {
          .about-cta-banner { flex-direction: column; align-items: flex-start; padding: 32px 20px; }
          .about-cta-banner-btn { margin-left: 0; margin-top: 20px; }
        }
        @media (max-width: 1024px) {
          .about-two-col {
            gap: 40px;
          }
          .about-team-grid {
            gap: 40px;
          }
        }
        @media (max-width: 768px) {
          .about-two-col {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .about-team-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .about-section, .about-section-alt {
            padding: 40px 20px;
          }
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 540px) {
          .about-cta-banner {
            flex-direction: column;
            align-items: flex-start;
            padding: 36px 20px;
          }
        }
      `}</style>

      {/* Section 1 — Hero */}
      <section className="about-section">
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "16px",
          }}
        >
          ABOUT
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(28px, 3vw, 40px)",
            fontWeight: 500,
            lineHeight: 1.15,
            color: "#1C1C1C",
            marginBottom: "20px",
            maxWidth: "680px",
          }}
        >
          Nineteen years. Seventeen focused exclusively on e-commerce
          back-office.
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "#555550",
            lineHeight: 1.75,
            maxWidth: "600px",
          }}
        >
          We&apos;ve been in e-commerce operations longer than most e-commerce
          agencies have been in business. Nineteen years. Seventeen focused
          exclusively on catalog, marketplace, and back-office work — across
          engagements that have ranged from dedicated two-person teams to
          fifty-plus operators on a single account.
        </p>
      </section>

      {/* Section 2 — Origin */}
      <section className="about-section">
        <div className="about-two-col">
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "1.5px",
                color: "#2D6A4F",
                fontWeight: 500,
                marginBottom: "14px",
              }}
            >
              ORIGIN
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 500,
                color: "#1C1C1C",
                lineHeight: 1.25,
              }}
            >
              A business that started by doing one thing, then narrowed to do it
              better.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
                marginBottom: "18px",
              }}
            >
              Professional ITS started in 2007 as a partnership doing outsourced
              business process work for international clients. Two years in, we
              saw what was happening in e-commerce: sellers scaling fast,
              catalogs growing faster, and back-office capacity quietly becoming
              the bottleneck nobody talked about.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
                marginBottom: "18px",
              }}
            >
              In 2009, we made the decision that shaped everything since — stop
              being a generalist outsourcing firm, and become the specialists we
              wished existed. Only e-commerce. Only back-office. No pivots.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
              }}
            >
              We incorporated as Professional IT Sols Pvt. Ltd. in 2010 and have
              operated under that structure ever since. The focus hasn&apos;t
              changed in 17 years. It won&apos;t change in the next 17.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Why we exist */}
      <section className="about-section-alt">
        <div className="about-two-col">
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "1.5px",
                color: "#2D6A4F",
                fontWeight: 500,
                marginBottom: "14px",
              }}
            >
              WHY WE EXIST
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 500,
                color: "#1C1C1C",
                lineHeight: 1.25,
              }}
            >
              The operational gap most e-commerce businesses don&apos;t talk
              about.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
                marginBottom: "18px",
              }}
            >
              Most e-commerce agencies are built around what gets talked about
              in founder groups and on LinkedIn — growth, ads, conversion rate,
              brand. The work underneath all of that — the catalog, the
              listings, the attributes, the order queues, the marketplace cases,
              the data cleanup — gets treated as someone else&apos;s problem.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
              }}
            >
              It&apos;s rarely someone else&apos;s problem. It&apos;s usually a
              bottleneck that slowly costs stores sales, ranking, and margin. We
              built Professional ITS to be the specialist team that handles this
              layer well — on an SLA, at scale, and without asking the client to
              become an expert in platform taxonomy.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — How we work */}
      <section className="about-section">
        <div className="about-two-col">
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "1.5px",
                color: "#2D6A4F",
                fontWeight: 500,
                marginBottom: "14px",
              }}
            >
              HOW WE WORK
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 500,
                color: "#1C1C1C",
                lineHeight: 1.25,
              }}
            >
              We hire specialists, not generalists.
            </h2>
          </div>
          <div>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
                marginBottom: "18px",
              }}
            >
              Every account at Professional ITS is handled by people who&apos;ve
              worked inside the platforms they support — Seller Central, Shopify
              admin, Walmart Seller Center — not just read about them. We
              organize teams around platform expertise, not around pools of
              interchangeable staff. That&apos;s why our SLA is 4 hours and our
              retention is 98%.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
                marginBottom: "18px",
              }}
            >
              We staff each engagement based on the actual work, not a fixed
              rate card. A client with 5,000 SKUs gets a different team shape
              than a client with 500,000 — and both get the same 4-hour SLA, the
              same dedicated account lead, and the same operational discipline.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
              }}
            >
              We&apos;re founder-led, independent, and privately held. No
              private equity quarterly pressure. No rotating leadership. The
              people who started the company in 2007 still set the operational
              standards today.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — The team */}
      <section className="about-section-alt">
        <div className="about-team-grid">
          {/* <div
            style={{
              background: "#E8EDEA",
              border: "0.5px solid #D5C9B0",
              borderRadius: "8px",
              aspectRatio: "4/3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#B4B2A9",
              fontSize: "13px",
            }}
          >
            Team photo
          </div> */}
          <div
            style={{
              background: "#E8EDEA",
              border: "0.5px solid #D5C9B0",
              borderRadius: "8px",
              aspectRatio: "4/3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <img
              src="/PITS_TEAM3.jpg"
              alt="Team photo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: "11px",
                letterSpacing: "1.5px",
                color: "#2D6A4F",
                fontWeight: 500,
                marginBottom: "14px",
              }}
            >
              THE TEAM
            </div>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(20px, 3vw, 28px)",
                fontWeight: 500,
                color: "#1C1C1C",
                marginBottom: "16px",
                lineHeight: 1.25,
              }}
            >
              A scalable operations team. Delivered from India.
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
                marginBottom: "16px",
              }}
            >
              Our delivery team is based in Gwalior, India — senior operators,
              catalog specialists, and account leads who&apos;ve spent years
              inside the platforms you sell on. We&apos;ve scaled engagements
              from small dedicated teams to fifty-plus operators on a single
              account, and we architect every engagement to grow or shrink with
              the client&apos;s actual load. Seasonal push, catalog migration,
              marketplace expansion — we ramp capacity within days, not weeks.
            </p>
            <p
              style={{
                fontSize: "14px",
                color: "#555550",
                lineHeight: 1.75,
                marginBottom: "28px",
              }}
            >
              Every client, at every size, gets the same infrastructure, the
              same SLA, and the same account lead seeing the engagement through.
            </p>
            <div>
              {teamPoints.map((point) => (
                <div key={point} className="about-bullet-item">
                  <div className="about-bullet-dot" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — By the numbers */}
      <section
        className="about-section"
        style={{
          background: "#2D6A4F",
          borderBottom: "none",
          padding: "40px 32px",
        }}
      >
        <div className="about-stats-grid">
          {stats.map((s, i) => (
            <div key={i} className="about-stat-card">
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  background: "rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    background: "#fff",
                    borderRadius: "50%",
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#fff",
                  marginBottom: "4px",
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "rgba(255,255,255,0.7)",
                  lineHeight: 1.5,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 7 — CTA */}
      <div className="about-cta-banner">
        <div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(18px, 3vw, 24px)",
              color: "#fff",
              fontWeight: 500,
              marginBottom: "8px",
            }}
          >
            Want to see how we&apos;d handle your catalog?
          </div>
          <div
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.65,
              maxWidth: "480px",
            }}
          >
            Start with a free catalog audit. We review 50 of your SKUs and
            deliver a written findings report — no credit card, no commitment.
          </div>
        </div>
        <Link
          href="/audit"
          className="about-cta-banner-btn"
          style={{
            background: "#2D6A4F",
            color: "#fff",
            padding: "13px 28px",
            borderRadius: "4px",
            fontSize: "13px",
            fontWeight: 500,
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          Get free catalog audit
        </Link>
      </div>

      <Footer />
    </div>
  );
}
