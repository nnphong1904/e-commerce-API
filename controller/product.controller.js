const mongoose = require('mongoose');
const Product = require('../module/product.module');
module.exports.getAllProducts = async (req, res, next)=>{
  try{
    const product = await Product.find();
    res.status(200).json({success: true, data: product}).end();
  }
  catch(error){
    res.send(error).end();
  } 
}//get all products in the db 

module.exports.searchProduct = async (req, res, next)=>{
  Product.findOne({name: req.query.name})
          .then(product =>{
            if (product){
              res.status(200).json({success: true, data: product});
              return;
            }
            res.status(404).json({success: false, data:[]})
          })
          .catch(error=>{
            res.status(400).json({success: false, error: error});
          })
}; //search by name for a product

module.exports.getProductById =  async (req, res, next)=>{
  Product.findOne({_id:req.params.productId})
          .then((product)=>{
            if (product){
              res.status(200).json({success: true, data: product});
              return;
            }
            res.status(404).json({success: false, data: []});
          })
          .catch(err => {
              res.status(400).json({success: false, error: err});
          })

} //get product by id

module.exports.addNewProduct = async (req,res,next)=>{
  const {name, price, availableSize, rating, retail, color, sellerId}= req.body;
  if (!name || !price || !availableSize || !rating || !retail || !color || !sellerId){
    res.status(400).json({success: false, msg: 'add new product fail'});
    return;
  }
  const newAvailableSize = availableSize.split(',').map(size => size.trim());
  const newColor = color.split(',').map(color => color.trim());
  let product = {
    _id: mongoose.Types.ObjectId(),
    name,
    price: parseFloat(price), 
    availableSize: newAvailableSize, 
    rating: parseFloat(rating), 
    retail: parseInt(retail), 
    color: newColor, 
    sellerId
  };

  const newProduct = new Product(product);
  await newProduct.save();
  res.status(200).json({success: true, msg: 'add new product success'});
} //add a new item to store, must login as seller to add

module.exports.removeAProduct = async (req,res,next)=>{
  const product = await Product.findOneAndDelete({name: req.params.productName}, (err, doc)=>{
    if (doc === null ){
      res.status(404).json({success: false, msg: 'can not remove product'});
      return;
    }
    res.status(200).json({success: false, msg: 'remove product success'});
  })
 
} //remove a item from store, must login as seller to remove
