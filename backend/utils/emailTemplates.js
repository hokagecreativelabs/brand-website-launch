exports.buildAdminAlertTemplate = ({ fullName, email, phone }) => `
  <h2>🚨 New Bootcamp Registration Alert</h2>
  <p><strong>Name:</strong> ${fullName}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Phone:</strong> ${phone}</p>
  <p>Login to the dashboard to view full details.</p>
`;

exports.buildUserWelcomeTemplate = ({ fullName }) => `
  <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #21083F; border-radius: 10px;">
    <div style="text-align: center;">
      <img src="https://academy.hokagecreativelabs.com/images/LOGO.webp" alt="Hokage Logo" width="120" />
      <h2 style="color: #7FF41A">Welcome to Hokage Creative Labs!</h2>
    </div>
    <p>Hi <strong>${fullName}</strong>,</p>
    <p>Thank you for registering for the August 2025 Bootcamp. We're excited to have you onboard and can't wait to see you grow into your final form 🔥</p>
    <p>Expect more info soon. Stay sharp, stay creative!</p>
    <p style="margin-top: 30px; font-style: italic;">– The Hokage Creative Labs Team</p>
    <p style="font-size: 12px; color: #999;">© ${new Date().getFullYear()} Hokage Creative Labs</p>
  </div>
`;
