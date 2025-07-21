
import { sendMail } from '../../../utils/mailer'; // Adjust path to your mailer.js

export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Received registration data:', body);

    // Check required environment variables for email only
    const requiredEnvVars = ['MAIL_USER', 'MAIL_PASS', 'TO_EMAIL'];
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar]) {
        console.error(`Missing environment variable: ${envVar}`);
        return new Response(
          JSON.stringify({ success: false, error: `Missing ${envVar}` }), 
          { status: 500 }
        );
      }
    }

    // Send team notification email
    console.log('Sending team notification...');
    const teamEmailResult = await sendMail({
      to: process.env.TO_EMAIL,
      subject: '🎓 New Bootcamp Registration',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7F5283;">New Bootcamp Registration</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Name:</strong> ${body.fullName}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Phone:</strong> ${body.phone}</p>
            <p><strong>Country:</strong> ${body.country}</p>
            <p><strong>Experience Level:</strong> ${body.level}</p>
            <p><strong>Motivation:</strong></p>
            <blockquote style="background: white; padding: 15px; border-left: 4px solid #7F5283; margin: 10px 0;">
              ${body.motivation}
            </blockquote>
          </div>
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            <em>Submitted on: ${new Date().toLocaleString()}</em>
          </p>
        </div>
      `
    });

    // Send thank you email to user
    console.log('Sending thank you email...');
    const userEmailResult = await sendMail({
      to: body.email,
      subject: '🎉 Welcome to Hokage Creative Labs Bootcamp!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #7F5283;">Welcome to Hokage Creative Labs Academy!</h2>
          <p>Hi <strong>${body.fullName}</strong>,</p>
          <p>Thank you for registering for our August 2025 Bootcamp! We've received your application and will be in touch soon.</p>
          
          <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #7F5283; margin-top: 0;">Your Registration Details:</h3>
            <p><strong>Experience Level:</strong> ${body.level}</p>
            <p><strong>Country:</strong> ${body.country}</p>
            <p><strong>Contact:</strong> ${body.phone}</p>
          </div>

          <p>We're excited to have you join our creative community!</p>
          <p>Best regards,<br><strong>The Hokage Creative Labs Team</strong></p>
        </div>
      `
    });

    console.log('Team email result:', teamEmailResult);
    console.log('User email result:', userEmailResult);

    if (teamEmailResult.success || userEmailResult.success) {
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Registration received! Check your email for confirmation.' 
      }), { status: 200 });
    } else {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Failed to send emails' 
      }), { status: 500 });
    }

  } catch (err) {
    console.error('Error:', err);
    return new Response(
      JSON.stringify({ success: false, error: err.message }), 
      { status: 500 }
    );
  }
}