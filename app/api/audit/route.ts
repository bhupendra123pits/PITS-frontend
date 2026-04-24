import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { transporter } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, email, storeUrl, primaryPlatform, challenge, hearAbout } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required." },
        { status: 400 }
      );
    }

    // Save to DB — if this fails the whole request fails (correct behaviour)
    const record = await prisma.auditRequest.create({
      data: { name, email, storeUrl: storeUrl || null, primaryPlatform: primaryPlatform || null, challenge: challenge || null, hearAbout: hearAbout || null },
    });

    // Emails are best-effort — a mail failure must never return 500
    try {
      await transporter.sendMail({
        from: `"Professional ITS" <info@professionalits.com>`,
        to: process.env.MAIL_RECEIVER,
        subject: `New Audit Request #${record.id} — ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 540px; color: #1C1C1C;">
            <h2 style="color: #2D6A4F;">New Catalog Audit Request #${record.id}</h2>
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
                <td style="padding:8px 0;color:#888;">Store URL</td>
                <td style="padding:8px 0;">${storeUrl || "—"}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:8px 0;color:#888;">Primary Channel</td>
                <td style="padding:8px 0;">${primaryPlatform || "—"}</td>
              </tr>
              <tr style="border-bottom:1px solid #eee;">
                <td style="padding:8px 0;color:#888;">Challenge</td>
                <td style="padding:8px 0;">${challenge || "—"}</td>
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
        subject: "We received your audit request — Professional ITS",
        html: `
          <div style="font-family: sans-serif; max-width: 560px; color: #1C1C1C; line-height: 1.6;">
            <p style="color:#555;">Hi ${name},</p>
            <p style="color:#555;">We've received your free catalog audit request. Here's a summary of what we have on file:</p>

            <div style="background:#F5F0E8; border-radius:6px; padding:16px 20px; margin:20px 0;">
              <p style="margin:0 0 6px 0; color:#555;">— Name: <strong>${name}</strong></p>
              <p style="margin:0 0 6px 0; color:#555;">— URL: <strong>${storeUrl || "Not provided"}</strong></p>
              <p style="margin:0; color:#555;">— Channel: <strong>${primaryPlatform || "Not provided"}</strong></p>
            </div>

            <p style="color:#1C1C1C; font-weight:600; margin-bottom:6px;">What happens next:</p>
            <p style="color:#555; margin-top:0;">Within 4 business hours (typically sooner), someone from our audit team will reach out by email to confirm scope and pick the 50 SKUs we'll review. Once scope is confirmed, your written audit report is delivered within 48 hours.</p>

            <p style="color:#1C1C1C; font-weight:600; margin-bottom:6px;">Your written report will include:</p>
            <p style="color:#555; margin:0 0 4px 0;">— 50-SKU data completeness review</p>
            <p style="color:#555; margin:0 0 4px 0;">— Listing quality score</p>
            <p style="color:#555; margin:0 0 4px 0;">— Attribute and filter accuracy check</p>
            <p style="color:#555; margin:0 0 16px 0;">— Prioritised recommendations — what we'd fix first</p>

            <p style="color:#555;">At the end, you can optionally book a 15-minute walkthrough call with the auditor. No sales pitch, just the findings.</p>
            <p style="color:#555;">No credit card required. No commitment. No lock-in, ever.</p>
            <p style="color:#555;">Questions before then? Just reply to this email.</p>

            <br/>
            <p style="color:#555; margin-bottom:2px;">— The Professional ITS Audit Team</p>
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
    console.error("Audit API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
