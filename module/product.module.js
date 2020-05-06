const mongoose = require('mongoose');


const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
          type: String, 
          required:[true, 'no product name']
        },
  price: {
          type: Number,
          required:[true, 'no price']
        },
  rating: Number,
  retail: {
          type: Number, 
          required: [true, 'no retail']
        },
  availableSize: {
          type: Array,
        },
  sellerId: {
          type: mongoose.Schema.Types.ObjectId,
          required: [true, 'who sold this?']
        }
})

const Product = mongoose.model('product',ProductSchema,'product');
module.exports = Product; 