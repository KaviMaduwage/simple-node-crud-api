const express = require('express');
const productController = require('../controllers/product.controller');


const router = express.Router();

router.post('/',productController.saveProduct);

router.get('/',productController.getAllProducts);

router.get('/:id', productController.getProductById);

router.put('/:id', productController.updateProductById);

router.delete('/:id', productController.deleteProduct);

module.exports = router;