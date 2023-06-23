const express = require('express');
const router = express.Router();
const { connect, pool } = require('../config/db');

// Route for retrieving all users
router.get('/', (req, res) => {
    pool.query('SELECT * FROM User', (error, results) => {
      if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  
      res.status(200).json(results);
    });
});

router.get('/:id', (req, res) => {
    const productId = req.params.id;
    pool.query('SELECT * FROM User WHERE id = ?', [productId], (error, results) => {
        if (error) {
            console.error('Error executing the query');
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.status(200).json(results[0]); // We do this because result is [{user}], so we just want the 0th val
    });
});

router.post('/register', (req, res) => {
  // Handle registration logic
  // ...
});

// Route for logging in a user
router.post('/login', (req, res) => {
  // Handle login logic
  // ...
});

// Route for logging out a user
router.post('/logout', (req, res) => {
  // Handle logout logic
  // ...
});

// Export the router
module.exports = router;