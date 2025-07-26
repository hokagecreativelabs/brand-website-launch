const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const registrationRouter = require('./routes/registrationRoutes');
const postRoutes = require('./routes/postRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const path = require('path');

const app = express();

app.use(cors({
  origin: ['https://bootcamp.hokagecreativelabs.com', 'http://localhost:3000', 'http://localhost:3001'],
  methods: ['GET', 'POST', 'DELETE'],
  credentials: false
}));

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Routes
app.use('/api/auth', authRoutes);
app.use('/api/register', registrationRouter);
app.use('/api/posts', postRoutes);
app.use('/api/upload-image', uploadRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Backend running 🔥');
});

module.exports = app;
