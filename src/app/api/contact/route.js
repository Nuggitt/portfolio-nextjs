import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const body = await req.json();

  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["phulip.nielsen@gmail.com"], // din e-mail
      subject: "Ny besked fra din portfolio",
      reply_to: body.email,
      text: `
        Navn: ${body.name}
        Email: ${body.email}
        Telefon: ${body.phone}
        Besked: ${body.message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("FEJL VED SEND:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
