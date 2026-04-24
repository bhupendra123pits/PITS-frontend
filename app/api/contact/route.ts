import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { transporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, topic, message, hearAbout } = body;

    if (!name || !email || !topic) {
      return NextResponse.json(
        { success: false, error: "Name, email and enquiry topic are required." },
        { status: 400 }
      );
    }

    // Save to DB — if this fails the whole request fails (correct behaviour)
    const record = await prisma.contactSubmission.create({
      data: { name, email, topic, message: message || null, hearAbout: hearAbout || null },
    });

    // Emails are best-effort — a mail failure must never return 500
    try {
      await transporter.sendMail({
        from: `"Professional ITS" <info@professionalits.com>`,
        to: process.env.MAIL_RECEIVER,
        subject: `New Contact Enquiry — ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 540px; color: #1C1C1C;">
            <h2 style="color: #2D6A4F;">New Contact Enquiry</h2>
            <table style="width:100%; border-collapse:collapse;">
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:8px 0;color:#888;width:160px;">Name</td>
                <td style="padding:8px 0;">${name}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:8px 0;color:#888;">Email</td>
                <td style="padding:8px 0;">${email}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:8px 0;color:#888;">Topic</td>
                <td style="padding:8px 0;">${topic}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:8px 0;color:#888;">Message</td>
                <td style="padding:8px 0; white-space:pre-line;">${message || "—"}</td>
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
    } catch (mailErr) {
      console.error("Admin email failed:", mailErr);
    }

    try {
      await transporter.sendMail({
        from: `"Professional ITS" <info@professionalits.com>`,
        to: email,
        subject: "We received your message — Professional ITS",
        html: `
          <div style="font-family: sans-serif; max-width: 540px; color: #1C1C1C; line-height: 1.6;">
            <h2 style="color: #2D6A4F;">Thanks, ${name}!</h2>
            <p style="color:#555;">We've received your message regarding <strong>${topic}</strong>.</p>
            <p style="color:#555;">Our team will review your message and get back to you within <strong>4 hours</strong> on business days.</p>
            <br/>
            <p style="color:#555; margin-bottom:2px;">— The Professional ITS Team</p>
            <p style="color:#888; font-size:12px; margin:0;">info@professionalits.com · +1 (732) 924-9050</p>
            <br/>
            <p style="color:#aaa; font-size:11px; margin:0;">Professional ITS — E-commerce back-office specialists since 2009</p>
            <p style="color:#aaa; font-size:11px; margin:0;">professionalits.com</p>
          </div>
        `,
      });
    } catch (mailErr) {
      console.error("User confirmation email failed:", mailErr);
    }

    return NextResponse.json({ success: true, id: record.id });

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
