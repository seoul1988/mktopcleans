import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "RESEND_API_KEY is missing" },
        { status: 500 }
      );
    }

    const body = await req.json();
    const { name, email, phone, facilityType, message } = body;

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "MK Top Cleans <onboarding@resend.dev>",
      to: ["fcbs2023@gmail.com"],
      subject: "New Quote Request - MK Top Cleans",
      replyTo: email || undefined,
      html: `
        <h2>New Quote Request</h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        <p><strong>Email:</strong> ${email || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Facility Type:</strong> ${facilityType || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "N/A"}</p>
      `,
    });

    if (error) {
      console.error("RESEND ERROR:", error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}