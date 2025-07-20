// routes/uploadRoutes.js
const express = require('express');
const router = express.Router();
const { uploadImage } = require('../controllers/uploadImage');

router.post('/', uploadImage);

module.exports = router;
