const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');
const { sendMail } = require('../../utils/mailer');

router.post('/', async (req, res) => {
    try {
      const { fullName, email, phone, country, level, motivation } = req.body;
  
      // Check for existing registration with same email or phone
      const existing = await Registration.findOne({
        $or: [{ email }, { phone }],
      });
  
      if (existing) {
        return res.status(409).json({
          success: false,
          error: 'You’ve already registered using this email or phone number.',
        });
      }
  
      // Save to DB
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
  
      // Send Team Notification Email
      const teamEmailResult = await sendMail({
        to: process.env.TO_EMAIL,
        subject: '🎓 New Bootcamp Registration',
        html: `...`, // leave as-is
      });
  
      // Send Thank You Email to User
      const userEmailResult = await sendMail({
        to: email,
        subject: '🎉 Welcome to Hokage Creative Labs Bootcamp!',
        html: `...`, // leave as-is
      });
  
      return res.status(201).json({
        success: true,
        message: 'Registered, saved to DB, and emails sent',
        emailStatus: {
          admin: teamEmailResult.success,
          user: userEmailResult.success,
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
  
  

module.exports = router;
