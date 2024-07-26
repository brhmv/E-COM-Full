const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const authenticateAccessToken = require('../middleware/authenticateAccessToken');
const isAdmin = require('../middleware/isAdmin');

// Get products
router.get('/', async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;

        const products = await Product.find()
            .skip((page - 1) * limit)
            .limit(parseInt(limit));

        const totalProducts = await Product.countDocuments();
        const totalPages = Math.ceil(totalProducts / limit);

        res.json({
            products,
            totalProducts,
            totalPages,
            currentPage: parseInt(page),
            perPage: parseInt(limit)
        });

    } catch (error) {
        res.status(500).send(`Error fetching products: ${error.message}`);
    }
});

//search
router.get('/search', async (req, res) => {
    try {
        const { searchTerm } = req.query;
        const regex = new RegExp(searchTerm, 'i');
        const products = await Product.find({
            $or: [
                { name: { $regex: regex } },
                { description: { $regex: regex } },
                { category: { $regex: regex } }
            ]
        });
        res.json(products);
    } catch (error) {
        res.status(500).send(`Error searching products: ${error.message}`);
    }
});

// Create 
router.post('/create', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { name, description, price, stock, gallery, category } = req.body;

        if (!name || !description || !price || !stock || !gallery || !category) {
            return res.status(400).send('All fields are required');
        }

        const newProduct = new Product({
            name,
            description,
            price,
            stock,
            gallery,
            category
        });

        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).send(`Error creating product: ${error.message}`);
    }
});

// Get product by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (error) {
        res.status(500).send(`Error fetching product: ${error.message}`);
    }
});

// Update product
router.put('/:id', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, price, stock, gallery, category } = req.body;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        product.name = name || product.name;
        product.description = description || product.description;
        product.price = price || product.price;
        product.stock = stock || product.stock;
        product.gallery = gallery || product.gallery;
        product.category = category || product.category;
        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).send(`Error updating product: ${error.message}`);
    }
});

// Delete product
router.delete('/:id', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.send('Product deleted');
    } catch (error) {
        res.status(500).send(`Error deleting product: ${error.message}`);
    }
});

module.exports = router;
