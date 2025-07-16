// server.js
require('dotenv').config(); // Load environment variables

const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const authRoutes = require('./routes/authRoutes');
const logger = require('./middleware/logger');

const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(logger); // custom logger middleware

// Routes
app.get('/', (req, res) => {
  res.send('📚 Welcome to the Book CRUD API!');
});
app.use('/books', bookRoutes);
app.use('/auth', authRoutes); // Add auth routes: /auth/register, /auth/login

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`📚 Book API server running at http://0.0.0.0:${port}`);
});


