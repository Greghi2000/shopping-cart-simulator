const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController')

// Start of route for these routes: /api/cart

// Route for getting the cart
router.get('/', cartController.getAllCarts);

// Route for getting the cart by id
router.get('/:id', cartController.getCartById)

// Route for retrieving the user's cart
router.get('usercart/:userId', cartController.getUsersCartByUserId)

// Route for retrieving all cartitems in given cart by ID
router.get('/items/:cartId', cartController.getItemsInCartByCartId);
  
// Route for adding a product to the user's cart
router.post('/cartItem/add', cartController.addProductToCart)
  
// Route for removing a product from the user's cart with product ID
router.delete('/cartItem/remove/:productId', cartController.removeProductFromCartByProductId);

// Route for removing all products from the user's cart
router.delete('/cartItem/delete', cartController.removeAllFromCart);

// Route for updating the quantity of a product
router.put('/cartItem/update/:cartItemId', cartController.updateCartItemQuantity);

module.exports = router;