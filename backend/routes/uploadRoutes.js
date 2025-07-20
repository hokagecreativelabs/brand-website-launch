// routes/uploadRoutes.js
const express = require('express');
const router = express.Router();
const { uploadImage } = require('../controllers/uploadImage');
// const { protect } = require('../middleware/authMiddleware'); // if needed

router.post('/', /*protect,*/ uploadImage);

module.exports = router;
