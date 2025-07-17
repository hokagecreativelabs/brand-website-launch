import { sendMail } from '@/utils/mailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'All fields required' }), { status: 400 });
    }

    const html = `
      <h3>New Message from ${name}</h3>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `;

    const result = await sendMail({
      to: process.env.MAIL_USER,
      subject: `Message from ${name}`,
      html,
    });

    if (result.success) {
      return new Response(JSON.stringify({ message: 'Message sent!' }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ error: result.error }), { status: 500 });
    }

  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error', details: err.message }), { status: 500 });
  }
}
