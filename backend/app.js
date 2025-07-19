const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(cors({ origin: '*' })); // Allow all origins for CORS
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Backend running 🔥');
});

// Removed the dashboard route - it's now in authRoutes as /api/auth/dashboard

module.exports = app;