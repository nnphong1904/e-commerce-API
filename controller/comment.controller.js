const Comment = require('../module/comment.module');
const mongoose = require('mongoose');
module.exports.getAllCommentOfProduct = async (req, res, next)=>{
  const result = await Comment.find({productId: req.params.productId});
  console.log(result);
  res.end();
}

module.exports.writeComment= async (req, res, next)=>{
  const {productId, ratingPoint,content, writtenBy, createAt} = req.body;
  const date = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getUTCFullYear()}`;
  const comment = {
    _id: mongoose.Types.ObjectId(), 
    productId,
    ratingPoint: parseFloat(ratingPoint),
    writtenBy,
    createAt: date
  }
  try{
    const newComment = new Comment(comment);
    await newComment.save();
    res.status(200).json({success: true, msg: 'write comment success'});
  }
  catch(err){
    res.status(400).json({success: false, msg: err.message});
  }
  res.end();
}