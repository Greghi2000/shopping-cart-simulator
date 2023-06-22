const express = require('express');
const router = express.Router();
const { connect, pool } = require('../config/db');

// Route for getting the cart
router.get('/', (req, res) => {
    pool.query('SELECT * FROM Cart', (error, results) => {
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
    pool.query('SELECT * FROM Cart WHERE id = ?', [productId], (error, results) => {
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

// Route for adding an item to the cart
router.post('/add', (req, res) => {
    
});

// Route for removing an item from the cart
router.delete('/remove/:id', (req, res) => {
  const itemId = req.params.id;
  // Handle removing an item from the cart
  // ...
});

// Route for updating the quantity of an item in the cart
router.put('/update/:id', (req, res) => {
  const itemId = req.params.id;
  // Handle updating the quantity of an item in the cart
  // ...
});

// Export the router
module.exports = router;