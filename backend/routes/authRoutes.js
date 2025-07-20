const express = require('express');
const router = express.Router();

const {
  registerAdmin,
  loginAdmin,
  verifyToken,
  getDashboard
} = require('../controllers/authController');

const { getDashboardStats } = require('../controllers/dashboardController');
const protect = require('../middlewares/authMiddleware');

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/verify', protect, verifyToken);
router.get('/dashboard', protect, getDashboardStats); // Only this route for dashboard stats

module.exports = router;
