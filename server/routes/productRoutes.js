const express = require('express');
const router = express.Router();
const { connect, pool } = require('../config/db');

// Route for getting all products
router.get('/', (req, res) => {
    pool.query('SELECT * FROM Product', (error, results) => {
      if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  
    res.status(200).json(results);
    });
});

// Route for getting a specific product by ID
router.get('/:id', (req, res) => {
    const productId = req.params.id;
    pool.query('SELECT * FROM Product WHERE id = ?', [productId], (error, results) => {
      if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  
      if (results.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
    }
  
      res.status(200).json(results[0]);
    });
});

router.post('/add', (req, res) => {
    console.log(req.body)
    const { title, price, description, imageURL } = req.body;
  
    // Validation and error handling logic here
  
    pool.query('INSERT INTO Product (Title, Price, Description, ImageURL) VALUES (?, ?, ?, ?)', [title, price, description, imageURL], (error, results) => {
      if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    
      res.status(201).json({ message: 'User added successfully' });
    });
});

// Export the router
module.exports = router;