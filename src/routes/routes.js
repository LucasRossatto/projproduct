const { Router } = require("express");
const productController = require('../controllers/productController');
const userController = require('../controllers/userController');

const router = Router();

router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProducts);
router.delete('/products/:id', productController.deleteProducts);

router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUsers);
router.delete('/users/:id', userController.deleteUser);

module.exports = router;