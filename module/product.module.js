const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  rating: Number,
  retail: Number,
  availableSize: Array,
  sellerId: mongoose.Schema.Types.ObjectId
})

const Product = mongoose.model('product',ProductSchema,'product');
module.exports = Product; 