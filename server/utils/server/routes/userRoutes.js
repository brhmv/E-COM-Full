const express = require('express');
const router = express.Router();
const User = require('../models/user');
const authenticateAccessToken = require('../middleware/authenticateAccessToken');
const isAdmin = require('../middleware/isAdmin');

//get all users
router.get('/', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const users = await User.find()
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .exec();

        const count = await User.countDocuments();

        res.json({
            users,
            totalPages: Math.ceil(count / limit),
            currentPage: page
        });
    } catch (error) {
        res.status(500).send(`Error fetching users: ${error.message}`);
    }
});

// Search 
router.get('/search', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { searchTerm } = req.query;
        const regex = new RegExp(searchTerm, 'i');
        const users = await User.find({
            $or: [
                { username: { $regex: regex } },
                { email: { $regex: regex } },
                { firstname: { $regex: regex } },
                { lastname: { $regex: regex } }
            ]
        });
        res.json(users);
    } catch (error) {
        res.status(500).send(`Error searching users: ${error.message}`);
    }
});

// get by id
router.get('/:id', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (error) {
        res.status(500).send(`Error fetching user: ${error.message}`);
    }
});

//edit by id
router.put('/:id', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { username, email, password } = req.body;
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        if (username) user.username = username;
        if (email) user.email = email;
        if (password) user.passwordHash = await bcrypt.hash(password, 10);
        await user.save();
        res.json(user);
    } catch (error) {
        res.status(500).send(`Error updating user: ${error.message}`);
    }
});

//delete by id
router.delete('/:id', authenticateAccessToken, isAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send('User deleted');
    } catch (error) {
        res.status(500).send(`Error deleting user: ${error.message}`);
    }
});

module.exports = router;
