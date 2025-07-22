import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    //  التحقق من البيانات
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
    }

    if (message.length > 1000) {
      return NextResponse.json({ error: 'Message is too long' }, { status: 400 });
    }

    //  قالب الايميل
    const emailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; background-color: #f2f2f2; padding: 20px;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #ddd;">
            <h2 style="color: #4CAF50; margin-bottom: 20px;">📬 New Contact Form Message</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Name:</td>
                <td style="padding: 8px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Email:</td>
                <td style="padding: 8px;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Phone:</td>
                <td style="padding: 8px;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333;">Subject:</td>
                <td style="padding: 8px;">${subject || 'No subject'}</td>
              </tr>
              <tr>
                <td style="padding: 8px; font-weight: 600; color: #333; vertical-align: top;">Message:</td>
                <td style="padding: 8px;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
        </body>
      </html>
    `;

    //  إرسال الإيميل

    const { data, error } = await resend.emails.send({
      from: 'School Website <onboarding@resend.dev>',   
      to: ['almadarij@gmail.com'],
      subject: `New Message from ${name} via Contact Form`,
      replyTo: email,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Server Error:', error);
    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}
