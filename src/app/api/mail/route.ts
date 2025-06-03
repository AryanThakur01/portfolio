export const dynamic = "force-static";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, subject, message } = await req.json();
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // use env vars
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.SMTP_EMAIL, // You (the recipient)
      subject: `[Portfolio] ${subject}`,
      text: `${name} <${email}> says:\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
