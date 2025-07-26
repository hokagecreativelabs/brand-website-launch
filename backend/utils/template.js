// utils/templates.js

const buildUserEmailTemplate = (data) => {
    const { fullName, email, phone, country, level, motivation } = data;
  
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background-color: #f9f9f9; padding: 20px; border-radius: 10px;">
      
      <!-- HEADER / LOGO -->
      <div style="text-align: center;">
        <img src="https://yourwebsite.com/images/logo.png" alt="Hokage Logo" width="120" style="margin-bottom: 10px;" />
        <h2 style="color: #7F5283;">Welcome to Hokage Creative Labs Bootcamp 🎉</h2>
      </div>
  
      <!-- BODY -->
      <p>Hello <strong>${fullName}</strong>,</p>
      <p>Thank you for registering for the August 2025 Bootcamp! We’re excited to have you onboard.</p>
  
      <h3 style="margin-top: 20px; color: #3D3C42;">📋 Your Registration Details</h3>
      <ul style="padding-left: 20px;">
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Country:</strong> ${country}</li>
        <li><strong>Experience Level:</strong> ${level}</li>
        <li><strong>Motivation:</strong> ${motivation}</li>
      </ul>
  
      <!-- FOOTER -->
      <div style="margin-top: 30px;">
        <p style="color: #555;">We'll reach out shortly with next steps. If you have questions, reply to this email.</p>
        <br />
        <p style="font-style: italic; color: #7F5283;">– Hokage Creative Labs Team</p>
        <p style="font-size: 12px; color: #aaa;">© ${new Date().getFullYear()} Hokage Creative Labs. All rights reserved.</p>
      </div>
  
    </div>
    `;
  };
  