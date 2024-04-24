import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, text } = await body;
    if (!name || !email || !text) {
      return NextResponse.json({ status: 404, text: "Missing Fields" });
    } else {
      const res = await sendEmail(email, text);
      return NextResponse.json({ response: res });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      error: error,
    });
  }
}

if (!process.env.NEXT_PUBLIC_SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable is not set");
}

const resend = new Resend(process.env.NEXT_PUBLIC_SENDGRID_API_KEY!);

export const sendEmail = async (email: string, text: string) => {
  try {
    const res = await resend.emails.send({
      from: "info@eagleviewsecurity.ca",
      to: email,
      subject: "Hello World",
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });

    return res;
  } catch (error) {
    console.error(error);
  }
};
