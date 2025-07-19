const express = require('express');
const router = express.Router();
const protect = require('../middleware/authMiddleware');

// Sample protected route
router.get('/', protect, (req, res) => {
  res.json({
    message: `Welcome Admin: ${req.admin.name}`,
    admin: req.admin,
  });
});

module.exports = router;
