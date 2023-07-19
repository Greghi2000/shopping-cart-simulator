const { pool } = require('../config/db')

exports.getAllCarts = (req, res) => {
    pool.query('SELECT * FROM Cart', (error, results) => {
      if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  
    res.status(200).json(results);
    });
}

exports.getCartById = (req, res) => {
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
}

exports.getUsersCartByUserId = (req, res) => {
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
}

exports.getItemsInCartByCartId = (req, res) => {
    const cartId = req.params.cartId;
    pool.query('SELECT * FROM CartItem WHERE CartID = ?', [cartId], (error, results) => {
        if (error) {
            console.error('Error executing the query');
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(200).json(results); 
    })
}

exports.addProductToCart = (req, res) => {
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
}

exports.removeProductFromCartByProductId = (req, res) => {
    const productId = req.params.productId;
    pool.query('DELETE FROM CartItem WHERE ProductID = (?)', [productId], (error, results) => {
        if(error){
            console.error('Error executing the query');
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'CartItem deleted successfully' });
    })
}
exports.removeAllFromCart = (req, res) => {
    pool.query('DELETE FROM CartItem', (error, results) => {
    if(error){
        console.error('Error executing the query');
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    res.status(201).json({ message: 'All Items in CartItem deleted successfully' });
    })
}
exports.updateCartItemQuantity = (req, res) => {
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
}
exports.getTotalPrice = (req, res) => {
    const cartId = req.params.cartId;
    pool.query(
        'SELECT Cart.ID AS CartID, SUM(Product.Price * CartItem.Quantity) AS TotalPrice ' +
        'FROM Cart ' +
        'JOIN CartItem ON Cart.ID = CartItem.CartID ' +
        'JOIN Product ON CartItem.ProductID = Product.ID ' +
        'WHERE Cart.ID = ? ' +
        'GROUP BY Cart.ID',
        [cartId],
        (error, results) => {
            if (error) {
                console.error('Error executing the query');
                console.error(error);
                return res.status(500).json({ error: 'Internal Server Error' });
            }
            res.status(200).json(results); 
        }
    )
}