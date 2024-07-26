const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Product = require('../models/product');
const authenticateAccessToken = require('../middleware/authenticateAccessToken');

// Get
router.get('/', authenticateAccessToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('basket');
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user.basket);
    } catch (error) {
        res.status(500).send(`Error fetching basket: ${error.message}`);
    }
});

// Add
router.post('/add', authenticateAccessToken, async (req, res) => {
    try {
        const { productId } = req.body;

        if (!productId) {
            return res.status(400).send('Product ID is required');
        }

        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).send('Product not found');
        }

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        user.basket.push(productId);
        await user.save();

        res.status(201).json(product);
    } catch (error) {
        res.status(500).send(`Error adding product to basket: ${error.message}`);
    }
});

// Remove
router.delete('/remove/:productId', authenticateAccessToken, async (req, res) => {
    try {
        const { productId } = req.params;

        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).send('User not found');
        }

        user.basket = user.basket.filter(item => item.toString() !== productId);
        await user.save();

        res.send('Product removed from basket');
    } catch (error) {
        res.status(500).send(`Error removing product from basket: ${error.message}`);
    }
});

module.exports = router;
