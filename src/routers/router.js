const { Router } = require("express");
const productController = require('../controllers/productController');

const router = Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.get('/products', productController.createProduct);
router.get('/products/:id', productController.updateProducts);
router.get('/products/:id', productController.deleteProducts);

module.exports = router;