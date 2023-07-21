const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')

// Start of route for these routes: /api/products

// Route for getting all products
router.get('/', productController.getProducts);

// Route for getting a specific product by ID
router.get('/:id', productController.getProductById)

// Route for adding a product to db
router.post('/add', productController.addProduct)

module.exports = router;