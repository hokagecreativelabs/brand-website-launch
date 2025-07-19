// seedAdmin.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('./models/Admin');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected for seeding'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

async function seedAdmin() {
  try {
    const existingAdmin = await Admin.findOne({ email: 'admin@hokage.com' });
    if (existingAdmin) {
      console.log('⚠️ Admin already exists');
      return;
    }

    const admin = await Admin.create({
      name: 'Admin User',
      email: 'admin@hokage.com',
      password: 'AdminPassword123', // plain text! Will be hashed in pre('save')
    });

    console.log('✅ Admin seeded successfully:', admin.email);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
  } finally {
    mongoose.connection.close();
  }
}

seedAdmin();
