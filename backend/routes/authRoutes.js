const express = require('express');
const router = express.Router();
const { registerAdmin, loginAdmin, verifyToken, getDashboard } = require('../controllers/authController');
const protect = require('../middlewares/authMiddleware');

router.post('/register', registerAdmin);
router.post('/login', loginAdmin);
router.get('/verify', protect, verifyToken); // NEW ROUTE
router.get('/dashboard', protect, getDashboard); // MOVED FROM APP.JS

module.exports = router;