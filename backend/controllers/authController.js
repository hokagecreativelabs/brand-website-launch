// controllers/authController.js - Add the verify function
const Admin = require('../models/Admin');
const generateToken = require('../utils/generateToken');

// @desc    Register admin
exports.registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const adminExists = await Admin.findOne({ email });
    if (adminExists) return res.status(400).json({ message: 'Admin already exists' });

    const admin = await Admin.create({ name, email, password });

    res.status(201).json({
      success: true,
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// @desc    Login admin
exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    if (admin && (await admin.matchPassword(password))) {
      res.json({
        success: true,
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        token: generateToken(admin._id),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// @desc    Verify token - THIS IS NEW
exports.verifyToken = async (req, res) => {
  try {
    // The protect middleware already verified the token and set req.admin
    res.json({
      success: true,
      admin: {
        id: req.admin._id,
        name: req.admin.name,
        email: req.admin.email,
      },
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error during verification' });
  }
};

// @desc    Get dashboard data
exports.getDashboard = async (req, res) => {
  try {
    // You can add real dashboard logic here later
    res.json({
      success: true,
      message: `Welcome Admin: ${req.admin.name}`,
      admin: {
        id: req.admin._id,
        name: req.admin.name,
        email: req.admin.email,
      },
      stats: {
        totalUsers: 1234,
        totalOrders: 567,
        totalRevenue: 12345,
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error fetching dashboard data' });
  }
};