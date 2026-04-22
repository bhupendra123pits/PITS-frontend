import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Terms of Service – Professional ITS",
  description:
    "Terms governing your use of the Professional ITS website and services.",
  alternates: {
    canonical: "https://professionalits.com/terms",
  },
};

const sections = [
  {
    title: "Acceptance of terms",
    body: [
      "By accessing or using the Professional ITS website (professionalits.com), you agree to be bound by these Terms of Service. If you do not agree, please do not use this website.",
      "These terms apply to all visitors, leads, and clients who access the site or engage with our services.",
    ],
  },
  {
    title: "Services",
    body: [
      "Professional ITS provides e-commerce back-office services including catalog operations, marketplace management, and store back-office support. The specific scope, deliverables, pricing, and SLAs for any engagement are governed by a separate written agreement between Professional ITS and the client.",
      "Nothing on this website constitutes a binding offer or guarantee of service availability. All engagements are subject to a signed agreement.",
    ],
  },
  {
    title: "Free catalog audit",
    body: [
      "We offer a free catalog audit covering up to 50 SKUs. This audit is provided at no cost and with no obligation to engage our services. Submitting an audit request does not create a client relationship or any contractual obligation on either party.",
      "We reserve the right to decline audit requests at our discretion.",
    ],
  },
  {
    title: "Intellectual property",
    body: [
      "All content on this website — including text, design, graphics, and code — is the property of Professional IT Sols Pvt. Ltd. and is protected by applicable copyright and intellectual property laws.",
      "You may not reproduce, distribute, or create derivative works from any content on this site without our prior written permission.",
    ],
  },
  {
    title: "Accuracy of information",
    body: [
      "We make reasonable efforts to keep the information on this website accurate and up to date. However, we do not warrant that all information is complete, current, or error-free. We reserve the right to change or update content at any time without notice.",
    ],
  },
  {
    title: "Limitation of liability",
    body: [
      "To the fullest extent permitted by law, Professional IT Sols Pvt. Ltd. shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website or reliance on any information presented here.",
      "Our total liability to you for any claim arising out of your use of this website shall not exceed the amount you have paid us in the three months preceding the claim, or zero if no payment has been made.",
    ],
  },
  {
    title: "Third-party links",
    body: [
      "This website may link to third-party websites. These links are provided for convenience only. We have no control over the content or practices of those sites and accept no responsibility for them.",
    ],
  },
  {
    title: "Governing law",
    body: [
      "These Terms of Service are governed by the laws of India. Any disputes arising from these terms or your use of this website shall be subject to the exclusive jurisdiction of the courts located in Gwalior, Madhya Pradesh, India.",
    ],
  },
  {
    title: "Changes to these terms",
    body: [
      "We may update these Terms of Service at any time. Changes take effect when posted to this page. Continued use of this website after changes are posted constitutes your acceptance of the revised terms.",
    ],
  },
  {
    title: "Contact",
    body: [
      "If you have questions about these Terms of Service, please contact us at:",
    ],
    contact: true,
  },
];

export default function TermsPage() {
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
          Terms of Service
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
          .terms-section {
            margin-bottom: 40px;
          }
          .terms-section h2 {
            font-family: var(--font-serif);
            font-size: 18px;
            font-weight: 500;
            color: #1C1C1C;
            margin-bottom: 12px;
          }
          .terms-section p {
            font-size: 14px;
            color: #555550;
            line-height: 1.8;
            margin-bottom: 12px;
          }
          .terms-section p:last-child {
            margin-bottom: 0;
          }
          .terms-divider {
            border: none;
            border-top: 0.5px solid #D5C9B0;
            margin-top: 40px;
            margin-bottom: 40px;
          }
          @media (max-width: 768px) {
            .terms-section {
              padding: 0 20px;
            }
          }
        `}</style>

        {sections.map((s, i) => (
          <div key={s.title} className="terms-section">
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
            {i < sections.length - 1 && <hr className="terms-divider" />}
          </div>
        ))}
      </section>

      <Footer />
    </div>
  );
}
