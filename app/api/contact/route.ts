import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { transporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    console.log("📦 Body received:", body);

    const {
      firstName, lastName, email, phone,
      company, topic, message, hearAbout,
    } = body;

    if (!firstName || !lastName || !email || !company) {
      console.log("❌ Validation failed");
      return NextResponse.json(
        { success: false, error: "Name, email and company are required." },
        { status: 400 }
      );
    }

    console.log("💾 Saving to DB...");
    const record = await prisma.contactSubmission.create({
      data: {
        firstName, lastName, email,
        phone, company, topic, message, hearAbout,
      },
    });
    console.log("✅ Saved to DB, record ID:", record.id);

    console.log("📧 Sending notification email...");
    await transporter.sendMail({
      from: `"Professional ITS" <${process.env.GMAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      subject: `New Contact Enquiry #${record.id} — ${company}`,
      html: `
        <div style="font-family: sans-serif; max-width: 540px; color: #1C1C1C;">
          <h2 style="color: #2D6A4F;">New Contact Enquiry #${record.id}</h2>
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
              <td style="padding:8px 0;color:#888;">Topic</td>
              <td style="padding:8px 0;">${topic || "—"}</td>
            </tr>
            <tr style="border-bottom:1px solid #eee;">
              <td style="padding:8px 0;color:#888;">Message</td>
              <td style="padding:8px 0; white-space: pre-line;">${message || "—"}</td>
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
    await transporter.sendMail({
      from: `"Professional ITS" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: "We received your message — Professional ITS",
      html: `
        <div style="font-family: sans-serif; max-width: 540px; color: #1C1C1C;">
          <h2 style="color: #2D6A4F;">Thanks, ${firstName}!</h2>
          <p style="color:#555; line-height:1.6;">
            We've received your message regarding <strong>${topic || "your enquiry"}</strong>.
          </p>
          <p style="color:#555; line-height:1.6;">
            Our team will review your message and get back to you within <strong>4 hours</strong> on business days.
          </p>
          <br/>
          <p style="color:#888; font-size:12px;">— Team Professional ITS</p>
        </div>
      `,
    });
    console.log("✅ Confirmation email sent to user");

    return NextResponse.json({ success: true, id: record.id });

  } catch (error) {
    console.error("❌ Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}