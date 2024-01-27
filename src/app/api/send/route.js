'use server'
// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: "dyanajbutler98@gmail.com",
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>{`"${email}" sent you a message`}</p>
          <p>Message submitted:</p>
          <p>{message}</p>
        </>
      ),
    });
    await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting Dyana!</p>
          <p>Your correspondence:</p>
          <p>{message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
