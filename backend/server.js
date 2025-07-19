const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app'); // Import the Express app

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error('Error: MONGO_URI is not defined in the .env file');
  process.exit(1); // Exit the process if the connection string is missing
}

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) // Ensure compatibility with older drivers
  .then(() => {
    console.log('Connected to MongoDB: hokage 🧠');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1); // Exit the process if the connection fails
  });