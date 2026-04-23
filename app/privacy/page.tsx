import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Privacy Policy – Professional ITS",
  description:
    "How Professional ITS collects, uses, and protects the information you share with us.",
  openGraph: {
    title: "Privacy Policy – Professional ITS",
    description: "How Professional ITS collects, uses, and protects the information you share with us.",
    url: "https://professionalits.com/privacy",
    siteName: "Professional ITS",
    type: "website",
    images: [{ url: "https://professionalits.com/og-image.png", width: 1200, height: 630, alt: "Professional ITS" }],
  },
  alternates: {
    canonical: "https://professionalits.com/privacy",
  },
};

const sections = [
  {
    title: "Information we collect",
    body: [
      "When you contact us, request a catalog audit, or fill out any form on this site, we collect the information you voluntarily provide — your name, business email address, company name, and any details about your e-commerce operation you choose to share.",
      "When you visit our website, we may automatically collect standard technical data such as your IP address, browser type, pages visited, and time spent on pages. This data is used in aggregate to improve site performance and is not linked to any individual.",
    ],
  },
  {
    title: "How we use your information",
    body: [
      "We use the information you provide to respond to your inquiry, deliver the free catalog audit you requested, and follow up about our services. We do not use your information for unrelated marketing without your consent.",
      "Technical usage data is used solely to maintain and improve the performance and relevance of this website.",
    ],
  },
  {
    title: "Information sharing",
    body: [
      "We do not sell, rent, or trade your personal information to third parties. We do not share your information with advertisers or data brokers.",
      "We may share information with trusted service providers who assist us in operating this website or delivering our services — for example, email infrastructure or CRM tools — under strict confidentiality obligations. These providers are not permitted to use your data for any other purpose.",
      "We may disclose information if required by law or to protect our legal rights.",
    ],
  },
  {
    title: "Cookies",
    body: [
      "This website uses cookies to understand how visitors interact with the site. We use standard analytics cookies (such as Google Analytics) to measure traffic and usage patterns. These cookies do not collect personally identifiable information.",
      "You can disable cookies in your browser settings at any time. Disabling cookies will not affect your ability to use this site.",
    ],
  },
  {
    title: "Data retention",
    body: [
      "We retain contact and inquiry information for as long as it is relevant to an active or potential business relationship. If you would like us to delete your information, contact us at the address below and we will do so promptly.",
    ],
  },
  {
    title: "Data security",
    body: [
      "We take reasonable technical and organisational precautions to protect your information against unauthorised access, disclosure, alteration, or destruction. No method of internet transmission is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "This website may contain links to third-party sites. We are not responsible for the privacy practices of those sites and encourage you to read their privacy policies before sharing any information with them.",
    ],
  },
  {
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. When we do, we will update the effective date at the top of this page. Continued use of this website after any changes constitutes acceptance of the updated policy.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have any questions about this Privacy Policy or how we handle your information, please contact us at:",
    ],
    contact: true,
  },
];

export default function PrivacyPage() {
  return (
    <div
      style={{
        fontFamily: "var(--font-sans)",
        background: "#FDFAF5",
        color: "#1C1C1C",
      }}
    >
      <Navbar />

      {/* Header */}
      <section
        style={{
          padding: "56px 32px 48px",
          borderBottom: "0.5px solid #D5C9B0",
          maxWidth: "760px",
        }}
      >
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "1.5px",
            color: "#2D6A4F",
            fontWeight: 500,
            marginBottom: "16px",
          }}
        >
          LEGAL
        </div>
        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: 500,
            lineHeight: 1.2,
            color: "#1C1C1C",
            marginBottom: "16px",
          }}
        >
          Privacy Policy
        </h1>
        <p style={{ fontSize: "13px", color: "#888780" }}>
          Effective date: 1 January 2026 · Professional IT Sols Pvt. Ltd.
        </p>
      </section>

      {/* Body */}
      <section
        style={{
          padding: "48px 32px 72px",
          maxWidth: "760px",
        }}
      >
        <style>{`
          .privacy-section {
            margin-bottom: 40px;
          }
          .privacy-section h2 {
            font-family: var(--font-serif);
            font-size: 18px;
            font-weight: 500;
            color: #1C1C1C;
            margin-bottom: 12px;
          }
          .privacy-section p {
            font-size: 14px;
            color: #555550;
            line-height: 1.8;
            margin-bottom: 12px;
          }
          .privacy-section p:last-child {
            margin-bottom: 0;
          }
          .privacy-divider {
            border: none;
            border-top: 0.5px solid #D5C9B0;
            margin-bottom: 40px;
          }
          @media (max-width: 768px) {
            .privacy-section {
              padding: 0 20px;
            }
          }
        `}</style>

        {sections.map((s, i) => (
          <div key={s.title} className="privacy-section">
            <h2>{i + 1}. {s.title}</h2>
            {s.body.map((para, j) => (
              <p key={j}>{para}</p>
            ))}
            {s.contact && (
              <div
                style={{
                  marginTop: "16px",
                  background: "#F5F0E8",
                  border: "0.5px solid #D5C9B0",
                  borderRadius: "6px",
                  padding: "20px 24px",
                  fontSize: "13px",
                  color: "#555550",
                  lineHeight: 1.8,
                }}
              >
                <div style={{ fontWeight: 500, color: "#1C1C1C", marginBottom: "6px" }}>
                  Professional IT Sols Pvt. Ltd.
                </div>
                <div>Gwalior, Madhya Pradesh, India</div>
                <div>
                  Email:{" "}
                  <a
                    href="mailto:info@professionalits.com"
                    style={{ color: "#2D6A4F", textDecoration: "none" }}
                  >
                    info@professionalits.com
                  </a>
                </div>
                <div>US: +1 (732) 924-9050 · India: +91 98110 18501</div>
              </div>
            )}
            {i < sections.length - 1 && <hr className="privacy-divider" style={{ marginTop: "40px" }} />}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
