import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Missing RESEND_API_KEY" },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await req.json();

    const { name, email, phone, facilityType, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required" },
        { status: 400 }
      );
    }

    const result = await resend.emails.send({
      from: "MK Top Cleans <onboarding@resend.dev>",
      to: ["sales@mktopcleans.com"],
      subject: "New Quote Request - MK Top Cleans",
      replyTo: email || undefined,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Facility Type:</strong> ${facilityType || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "N/A"}</p>
      `,
    });

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}