import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const emailUser = process.env.EMAIL_USER || "kamathambhuvanesh@gmail.com";
    const emailPass = process.env.EMAIL_PASS;

    if (!emailPass) {
      console.warn("SMTP EMAIL_PASS environment variable is missing. Logging submission details:");
      console.log(`Lead Submission: Name: ${name}, Email: ${email}, Company: ${company}, Message: ${message}`);
      return NextResponse.json({
        success: true,
        message: "Submission logged (SMTP credentials not configured in env)"
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: emailUser,
        pass: emailPass, // Gmail App Password
      },
    });

    const mailOptions = {
      from: emailUser,
      to: "kamathambhuvanesh@gmail.com",
      subject: `New Lead: ${name} (${company || "No Company"})`,
      text: `You have received a new contact submission:\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n` +
            `Company: ${company || "N/A"}\n\n` +
            `Message:\n${message}`
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email dispatched successfully" });
  } catch (error: any) {
    console.error("Nodemailer Send Error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
