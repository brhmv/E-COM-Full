const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors package
require('dotenv').config();
const orderRoutes = require('./routes/orderRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const basketRoutes = require('./routes/basketRoutes');

const app = express();
const port = process.env.PORT || 8080;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Connection error:', err));

// Middleware
app.use(express.json());

// Routes
app.use('/orders', orderRoutes);
app.use('/products', productRoutes);
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/basket', basketRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
