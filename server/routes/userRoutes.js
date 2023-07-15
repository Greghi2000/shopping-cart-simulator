const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

// Start of route for these routes: /api/users

// Route for retrieving all users
router.get('/', userController.getAllUsers);

// Route for retrieving user by id
router.get('/:id', userController.getUserById);

// Route for registering
router.post('/register', userController.registerUser);

// Route for logging in a user
router.post('/login', (req, res) => {
  // Handle login logic
  // ...
});

// Route for logging out a user
// router.post('/logout', userController.userLogout);

// Export the router
module.exports = router;