const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
    gallery: { type: [String], required: true },
    category: { type: String, required: true, enum: ["Tech", "Clothing", "Cars"], },
    order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' }
});

module.exports = mongoose.model('Product', productSchema);