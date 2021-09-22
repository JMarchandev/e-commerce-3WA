const express = require('express');
const router = express.Router();

const productController = require('../controllers/admin')

router.get('/', productController.getAddProduct);
router.post('/add-product', productController.postAddProduct);
<<<<<<< HEAD
router.post('/remove', productController.removeProduct);
router.post('/unshow', productController.toggleShowProduct);
=======
router.post('/remove', productController.removeProduct)
router.post('/unshow', productController.toggleShowProduct)
>>>>>>> 0bac29410903abda07f4669c90f9fc1362a577ca

// module.exports.products = products;
module.exports.routes = router;