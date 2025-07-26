const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const { sendMail } = require('../utils/mailer');
const { buildAdminAlertTemplate, buildUserWelcomeTemplate } = require('../utils/emailTemplates');

router.post('/', async (req, res) => {
  try {
    const { fullName, email, phone, country, level, motivation } = req.body;

    const existing = await Registration.findOne({
      $or: [{ email }, { phone }],
    });

    if (existing) {
      return res.status(409).json({
        success: false,
        error: 'You have already registered using this email or phone number.',
      });
    }

    const newRegistration = new Registration({
      fullName,
      email,
      phone,
      country,
      level,
      motivation,
      submittedAt: new Date(),
    });

    await newRegistration.save();

    // Send to Admin
    const adminResult = await sendMail({
      to: process.env.TO_EMAIL,
      subject: '🚨 New Bootcamp Form Submission',
      html: buildAdminAlertTemplate({ fullName, email, phone }),
    });

    // Prevent duplicate if user = admin
    let userResult = { success: false };
    if (email !== process.env.TO_EMAIL) {
      userResult = await sendMail({
        to: email,
        subject: '🎉 You’re in! Welcome to Hokage Bootcamp',
        html: buildUserWelcomeTemplate({ fullName }),
      });
    }

    return res.status(201).json({
      success: true,
      message: 'Registered, saved to DB, and emails sent',
      emailStatus: {
        admin: adminResult.success,
        user: userResult.success,
      },
    });
  } catch (err) {
    console.error('Registration failed:', err.message);
    return res.status(500).json({
      success: false,
      error: 'Something went wrong with registration.',
    });
  }
});

// GET all registrations
router.get('/', async (req, res) => {
    try {
      const registrations = await Registration.find().sort({ submittedAt: -1 });
      res.status(200).json({ success: true, data: registrations });
    } catch (err) {
      console.error('Fetching registrations failed:', err.message);
      res.status(500).json({ success: false, error: 'Could not fetch registrations' });
    }
});

// DELETE a specific registration
router.delete('/:id', async (req, res) => {
    try {
      const { id } = req.params;
      
      // Find and delete the registration
      const deletedRegistration = await Registration.findByIdAndDelete(id);
      
      if (!deletedRegistration) {
        return res.status(404).json({
          success: false,
          error: 'Registration not found'
        });
      }
      
      res.status(200).json({
        success: true,
        message: 'Registration deleted successfully',
        data: deletedRegistration
      });
      
    } catch (err) {
      console.error('Delete registration failed:', err.message);
      res.status(500).json({
        success: false,
        error: 'Could not delete registration'
      });
    }
});

module.exports = router;