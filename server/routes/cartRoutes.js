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

// Route for retrieving the user's cart
router.get('usercart/:userId', (req, res) => {
    const userId = req.params.userId;
    pool.query('SELECT * FROM Cart WHERE id = ?', [userId], (error, results) => {
    if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }

    if (results.length === 0) {
        return res.status(404).json({ error: 'Usercart not found' });
    }

    res.status(200).json(results[0]);
    });
});

// Route for retrieving all cartitems in given cart
router.get('/items/:cartId', (req, res) => {
    const cartId = req.params.cartId;
    pool.query('SELECT * FROM CartItem WHERE CartID = ?', [cartId], (error, results) => {
        if (error) {
            console.error('Error executing the query');
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results); 
    })
});
  
// Route for adding a product to the user's cart
router.post('/cartItem/add', (req, res) => {
    console.log(req.body)
    const { cartId, productId, quantity } = req.body;
    pool.query('INSERT INTO CartItem (CartID, ProductID, Quantity) VALUES (?, ?, ?)', [cartId, productId, quantity], (error, results) => {
        if(error){
            console.error('Error executing the query');
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'CartItem added successfully' });

    })
});
  
// Route for removing a product from the user's cart
router.delete('/cartItem/remove/:cartItemId', (req, res) => {
    const cartItemId = req.params.cartItemId;
    pool.query('DELETE FROM CartItem WHERE ID = (?)', [cartItemId], (error, results) => {
        if(error){
            console.error('Error executing the query');
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'CartItem deleted successfully' });
    })
});
  
// Route for updating the quantity of a product in the user's cart
router.put('/cartItem/update/:cartItemId', (req, res) => {
    const cartItemId = req.params.cartItemId;
    const { quantity } = req.body;
    pool.query('UPDATE CartItem SET Quantity = ? WHERE ID = ?', [quantity, cartItemId], (error, results) => {
        if(error){
            console.error('Error executing the query');
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'CartItem quantity updated successfully' });
    })
});

// return all objs that contain cartId of ???
module.exports = router;