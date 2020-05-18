const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    required: [true, 'Forgot the id']
  },
  productId: {
    type: Schema.Types.ObjectId,
    required: [true, 'which product this comment belong to?']
  },
  ratingPoint:{
    type: Number,
    default: 0.0
  },
  writtenBy:{
    type: Schema.Types.ObjectId,
    required: [true, 'who write this?']
  },
  content: {
    type: String,
  },
  createAt:{
    type: Date,
  }
})

const comment = mongoose.model('comment', CommentSchema, 'comment');

module.exports = comment;