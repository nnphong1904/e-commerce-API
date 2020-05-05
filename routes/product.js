const express = require('express');
const router = express.Router();


const Product = require('../module/product.module');

/* GET products. */
router.get('/',  async (req, res, next) => {
  try{
    const product = await Product.find();
    res.status(200).json({success: true, data: product}).end();
  }
  catch(error){
    res.send(error).end();
  } 
}); //get all products of a seller

/* SEARCH products*/
router.get('/search', async (req, res, next)=>{
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
}) //search by name for a product



router.get('/:productId', async (req, res, next)=>{
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

}) //get a specific product of a seller


/*Add a product to store*/
router.post('/',(req,res,next)=>{
  const {name, price, availableSize, rating, retail, color, sellerId}= req.body;
  // const newProduct = new Product(
  //   {
  //     name,
  //     price: parseFloat(price), 
  //     availableSize: JSON.parse(availableSize), 
  //     rating: parseFloat(rating), 
  //     retail: parseInt(retail), 
  //     color: JSON.parse(color),
  //     sellerId
  //   }
  // );
  console.log(req.body.name);
  //newProduct.save();
  res.status(200).json({success: true, msg: 'add new product success'});
}) //add a new item to store, must login as seller to add

router.delete('/:productId',(req,res,next)=>{
  res.send(`remove product has id is ${req.params.productId} from store`);
}) //remove a item from store, must login as seller to remove



module.exports = router;
