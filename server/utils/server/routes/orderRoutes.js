const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const authenticateAccessToken = require('../middleware/authenticateAccessToken');
const isAdmin = require('../middleware/isAdmin');

// Get all orders (only admin)
router.get('/', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const orders = await Order.find().populate('products').populate('owner');
        res.json(orders);
    } catch (error) {
        res.status(500).send(`Error fetching orders: ${error.message}`);
    }
});

// Get orders by user
router.get('/user', authenticateAccessToken, async (req, res) => {
    try {
        const userId = req.user.id;
        const orders = await Order.find({ owner: userId }).populate('products');
        if (!orders) {
            return res.status(404).send('No orders found for this user');
        }
        res.json(orders);
    } catch (error) {
        res.status(500).send(`Error fetching user orders: ${error.message}`);
    }
});

module.exports = router;

// Create new order
router.post('/create', authenticateAccessToken, async (req, res) => {
    try {
        const { products } = req.body;
        const userId = req.user.id;

        const newOrder = new Order({
            products,
            owner: userId,
            status: 'Pending'
        });

        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).send(`Error creating order: ${error.message}`);
    }
});

// Update order (only admin)
router.put('/:id', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { products, status } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(
            id,
            { products, status },
            { new: true, runValidators: true }
        );

        if (!updatedOrder) {
            return res.status(404).send('Order not found');
        }

        res.json(updatedOrder);
    } catch (error) {
        res.status(500).send(`Error updating order: ${error.message}`);
    }
});

// Delete  order (only admin)
router.delete('/:id', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findByIdAndDelete(id);
        if (!order) {
            return res.status(404).send('Order not found');
        }
        res.send('Order deleted');
    } catch (error) {
        res.status(500).send(`Error deleting order: ${error.message}`);
    }
});