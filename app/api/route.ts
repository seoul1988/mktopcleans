import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: unknown) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, phone, facilityType, message } = await req.json();

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Name and phone are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "MK Top Cleans <noreply@mktopcleans.com>",
      to: ["sales@mktopcleans.com"],
      replyTo: email ? String(email) : undefined,
      subject: "New Quote Request - MK Top Cleans",
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#13294B;">
          <h2>New Quote Request</h2>

          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Facility Type:</strong> ${escapeHtml(facilityType)}</p>

          <p><strong>Message:</strong></p>
          <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      { success: false, message: "Failed to send email." },
      { status: 500 }
    );
  }
}