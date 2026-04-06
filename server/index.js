const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

// Middleware
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('CORS blocked for this origin.'));
    },
  })
);
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Routes
app.use('/api/contact', contactRoutes);
app.use('/contact', contactRoutes); // Fallback for easier frontend setup

app.get('/', (req, res) => {
  res.json({ message: 'Pranav Portfolio API is running 🚀' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI || 'mongodb://localhost:27017/pranavportfolio')
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
    // Run server anyway so frontend contact form shows a proper error
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT} (no DB)`));
  });
