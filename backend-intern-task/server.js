// server.js
const express = require('express');
const connectDB = require('./config/db');
const bookRoutes = require('./routes/bookRoutes');
const logger = require('./middleware/logger');

const app = express();
const port = 3001;

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

// Start server
app.listen(port, '0.0.0.0', () => {
  console.log(`📚 Book API server running at http://0.0.0.0:${port}`);
});

