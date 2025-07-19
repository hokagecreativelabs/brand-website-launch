// models/Admin.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    default: 'Admin User', // Add default in case it's missing
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6,
  },
}, {
  timestamps: true,
});

// Hash password before saving
adminSchema.pre('save', async function (next) {
  console.log('🔧 Pre-save middleware triggered');
  console.log('- Password modified:', this.isModified('password'));
  
  if (!this.isModified('password')) {
    console.log('- Password not modified, skipping hash');
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(12);
    const originalPassword = this.password;
    this.password = await bcrypt.hash(this.password, salt);
    
    console.log('- Password hashed successfully');
    console.log('- Original length:', originalPassword.length);
    console.log('- Hash length:', this.password.length);
    
    next();
  } catch (error) {
    console.log('❌ Hashing error:', error.message);
    next(error);
  }
});

// Instance method to check password
adminSchema.methods.matchPassword = async function (enteredPassword) {
  console.log('🔍 matchPassword called');
  console.log('- Entered password:', enteredPassword);
  console.log('- Stored hash length:', this.password.length);
  
  try {
    const result = await bcrypt.compare(enteredPassword, this.password);
    console.log('- Comparison result:', result);
    return result;
  } catch (error) {
    console.log('❌ Comparison error:', error.message);
    throw error;
  }
};

// Add a method to test if the model is working
adminSchema.methods.testMethod = function() {
  return 'Admin model is working correctly';
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;