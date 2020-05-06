const Comment = require('../module/comment.module');
const mongoose = require('mongoose');
module.exports.getAllCommentOfProduct = async (req, res, next)=>{
  const result = await Comment.find({productId: req.params.productId});
  console.log(result);
  res.end();
}

module.exports.writeComment= async (req, res, next)=>{
  const {productId, ratingPoint, writtenBy, createAt} = req.body;
  const date = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getUTCFullYear()}`;
  console.log(date);
  const newComment = {
    _id: mongoose.Types.ObjectId(), 
    productId,
    ratingPoint: parseFloat(ratingPoint),
    writtenBy,
    createAt: Date.now()
  }
  console.log(newComment);
  res.end();
}