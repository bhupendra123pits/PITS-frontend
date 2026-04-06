import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { transporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  // console.log("✅ API route hit");

  try {
    const body = await req.json();
    console.log("📦 Body received:", body);

    const {
      firstName, lastName, email, phone, company,
      storeUrl, skuCount, primaryPlatform, otherPlatforms,
      challenge, orderVolume, hearAbout,
    } = body;

    // Validation
    if (!firstName || !lastName || !email || !company) {
      console.log("❌ Validation failed");
      return NextResponse.json(
        { success: false, error: "Name, email and company are required." },
        { status: 400 }
      );
    }

    console.log("💾 Saving to Supabase...");
    // 1. Save to Supabase
    const record = await prisma.auditRequest.create({
      data: {
        firstName, lastName, email, phone, company,
        storeUrl, skuCount, primaryPlatform, otherPlatforms,
        challenge, orderVolume, hearAbout,
      },
    });
    console.log("✅ Saved to DB, record ID:", record.id);

    console.log("📧 Sending notification email...");
    // 2. Mail to you
    await transporter.sendMail({
      from: `"Professional ITS" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: `New Audit Request #${record.id} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 540px; color: #1C1C1C;">
          <h2 style="color: #2D6A4F;">New Catalog Audit Request #${record.id}</h2>
          <table style="width:100%; border-collapse:collapse;">
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;width:160px;">Name</td>
              <td style="padding:8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Email</td>
              <td style="padding:8px 0;">${email}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Phone</td>
              <td style="padding:8px 0;">${phone || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Company</td>
              <td style="padding:8px 0;">${company}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Store URL</td>
              <td style="padding:8px 0;">${storeUrl || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">SKU Count</td>
              <td style="padding:8px 0;">${skuCount || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Primary Platform</td>
              <td style="padding:8px 0;">${primaryPlatform || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Other Platforms</td>
              <td style="padding:8px 0;">${otherPlatforms || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Challenge</td>
              <td style="padding:8px 0;">${challenge || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Order Volume</td>
              <td style="padding:8px 0;">${orderVolume || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Heard About Us</td>
              <td style="padding:8px 0;">${hearAbout || "—"}</td>
            </tr>
            <tr>
              <td style="padding:8px 0;color:#888;">Submitted</td>
              <td style="padding:8px 0;">${new Date().toLocaleString()}</td>
            </tr>
          </table>
        </div>
      `,
    });
    console.log("✅ Notification email sent");

    console.log("📧 Sending confirmation to user...");
    // 3. Confirmation to user
    await transporter.sendMail({
      from: `"Professional ITS" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your audit request — Professional ITS",
      html: `
        <div style="font-family: sans-serif; max-width: 540px; color: #1C1C1C;">
          <h2 style="color: #2D6A4F;">Thanks, ${firstName}!</h2>
          <p style="color:#555; line-height:1.6;">
            We've received your free catalog audit request for <strong>${company}</strong>.
          </p>
          <p style="color:#555; line-height:1.6;">
            Our team will review your details and get back to you within <strong>4 hours</strong>.
            Your written audit report will be delivered within <strong>48 hours</strong>.
          </p>
          <br/>
          <p style="color:#888; font-size:12px;">— Team Professional ITS</p>
        </div>
      `,
    });
    console.log("✅ Confirmation email sent to user");

    return NextResponse.json({ success: true, id: record.id });

  } catch (error) {
    console.error("❌ Audit API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}