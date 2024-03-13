const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Database connection
const MONGO_URL = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.odoe0my.mongodb.net/?retryWrites=true&w=majority`;
mongoose.connect(MONGO_URL).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.log('Failed to connect to the database', err);
});

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json


// Routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api', authRoutes); // Use the authRoutes for all routes starting with /api
app.use('/user', userRoutes); // Use the userRoutes for all routes starting with /user


// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the server');
});


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
