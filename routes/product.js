const express = require('express');
const router = express.Router();

const productController = require('../controller/product.controller');

/* GET products. */
router.get('/',  productController.getAllProducts); //get all products of a seller

/* SEARCH products*/
router.get('/search', productController.searchProduct) //search by name for a product



router.get('/:productId', productController.getProductById) //get a specific product of a seller


/*Add a product to store*/
router.post('/', productController.addNewProduct); //add a new item to store, must login as seller to add

router.delete('/:productName', productController.removeAProduct); //remove a item from store, must login as seller to remove



module.exports = router;
