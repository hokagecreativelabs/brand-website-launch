const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    country: { type: String, required: true },
    motivation: { type: String, required: true },
    level: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Registration', registrationSchema);
