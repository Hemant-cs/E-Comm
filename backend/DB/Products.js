const mongoose = require('mongoose');

//for connecting to db
require("./ConnectDb");

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    price: { type: Number, required: true, min: 0 },
    brand: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    addedBy : {type: String, required:false, trim: true}
}, { timestamps: true });

module.exports = mongoose.models.products || mongoose.model("products", ProductSchema);