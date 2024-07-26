const mongoose = require('mongoose');

const order = new mongoose.Schema({
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    status: { type: String, enum: ['Pending', 'Canceled', 'Completed'], default: 'Pending' },
});

module.exports = mongoose.model('Order', order);