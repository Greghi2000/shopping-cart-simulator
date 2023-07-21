const express = require('express');
const router = express.Router();
const allergenController = require('../controllers/allergenController')

// Start of route for these routes: /api/allergens

// Route for getting all products
router.get('/', allergenController.getAllAllergens);

// Route for getting a specific product NOT containing specific allergen by ID
router.get('/:id', allergenController.getAllAllergensNotContainingProductId)

// // Route for adding a product to db
// router.post('/add', productController.addProduct)

module.exports = router;