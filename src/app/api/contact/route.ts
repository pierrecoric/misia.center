import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, surname, email, message } = await request.json();

    if (!name || !surname || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'contact@misia.center',
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${name} ${surname}`,
      text: `
Name: ${name} ${surname}
Email: ${email}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Something went wrong.' },
      { status: 500 }
    );
  }
}