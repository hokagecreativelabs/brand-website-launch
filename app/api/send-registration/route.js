import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();

    // 👇 Save to backend
    await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/registrations`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    // 👇 Setup email transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const notifyTeam = {
      from: `"Bootcamp Signup" <${process.env.EMAIL_USER}>`,
      to: process.env.TO_EMAIL,
      subject: '🎓 New Bootcamp Registration',
      html: `
        <div style="background-color: #FEFBF6; padding: 40px; font-family: Arial, sans-serif; color: #3D3C42;">
          <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.05); overflow: hidden;">
            <div style="background-color: #7F5283; color: white; padding: 24px 32px;">
              <h1 style="margin: 0;">New Bootcamp Registration</h1>
              <p style="margin: 0;">You've received a new signup!</p>
            </div>
            <div style="padding: 32px;">
              <table style="width: 100%; font-size: 16px;">
                <tr><td style="font-weight: bold;">Full Name:</td><td>${body.fullName}</td></tr>
                <tr><td style="font-weight: bold;">Email:</td><td>${body.email}</td></tr>
                <tr><td style="font-weight: bold;">Phone:</td><td>${body.phone}</td></tr>
                <tr><td style="font-weight: bold;">Country:</td><td>${body.country}</td></tr>
                <tr><td style="font-weight: bold;">Motivation:</td><td>${body.motivation}</td></tr>
                <tr><td style="font-weight: bold;">Level:</td><td>${body.level}</td></tr>
              </table>
            </div>
            <div style="background-color: #A6D1E6; padding: 20px; text-align: center;">
              <p style="margin: 0;">This message was sent from the Bootcamp site.</p>
            </div>
          </div>
        </div>
      `,
    };

    const thankUser = {
      from: `"Bootcamp Team" <${process.env.EMAIL_USER}>`,
      to: body.email,
      subject: '🎉 Thanks for Registering!',
      html: `
        <div style="background-color: #FEFBF6; padding: 40px; font-family: Arial, sans-serif; color: #3D3C42;">
          <div style="max-width: 600px; margin: auto; background-color: white; border-radius: 8px; padding: 32px;">
            <h2 style="color: #7F5283;">Hi ${body.fullName},</h2>
            <p>Thank you for signing up for our bootcamp!</p>
            <p>We’ll review your application and get back to you if you qualify.</p>
            <p style="margin-top: 24px;">Regards,<br>The Bootcamp Team</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(notifyTeam);
    await transporter.sendMail(thankUser);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error('Email sending failed:', err);
    return new Response(JSON.stringify({ success: false, error: err.message }), {
      status: 500,
    });
  }
}
