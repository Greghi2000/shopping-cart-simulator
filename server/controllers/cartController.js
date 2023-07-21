// Import database pool and models
const { pool } = require('../config/db')
const Cart = require('../models/Cart')
const CartItem = require('../models/CartItem')


exports.getAllCarts = (req, res) => {
    pool.query('SELECT * FROM Cart', (error, results) => {
        if (error) {
            console.error('Error executing the query', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const carts = results.map(row => new Cart(row.ID, row.UserID));
            res.status(200).json(carts);
        }
    });
}

exports.getCartById = (req, res) => {
    const cartId = req.params.id;
    pool.query('SELECT * FROM Cart WHERE ID = ?', [cartId], (error, results) => {
        if (error) {
            console.error('Error executing the query', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'Cart not found' });
        } else {
            const cart = new Cart(results[0].ID, results[0].UserID);
            res.status(200).json(cart);
        }
    });
}

exports.getUsersCartByUserId = (req, res) => {
    const userId = req.params.userId;
    pool.query('SELECT * FROM Cart WHERE UserID = ?', [userId], (error, results) => {
        if (error) {
            console.error('Error executing the query', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else if (results.length === 0) {
            res.status(404).json({ error: 'User cart not found' });
        } else {
            const cart = new Cart(results[0].ID, results[0].UserID);
            res.status(200).json(cart);
        }
    });
}

exports.getItemsInCartByCartId = (req, res) => {
    const cartId = req.params.cartId;
    pool.query('SELECT * FROM CartItem WHERE CartID = ?', [cartId], (error, results) => {
        if (error) {
            console.error('Error executing the query', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const cartItems = results.map(row => new CartItem(row.ID, row.Quantity, new Cart(row.CartID, null), row.ProductID));
            res.status(200).json(cartItems);
        }
    });
}


exports.addProductToCart = (req, res) => {
    const { cartId, productId, quantity } = req.body;
    const cartItem = new CartItem(null, quantity, new Cart(cartId, null), productId);
    
    pool.query('INSERT INTO CartItem (CartID, ProductID, Quantity) VALUES (?, ?, ?)', [cartItem.cartID, cartItem.productID, cartItem.quantity], (error) => {
        if (error) {
            console.error('Error executing the query', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'CartItem added successfully' });
    });
}

exports.removeProductFromCartByProductId = (req, res) => {
    const productId = req.params.productId;
    const cartItem = new CartItem(null, null, null, productId);
    
    pool.query('DELETE FROM CartItem WHERE ProductID = ?', [cartItem.productID], (error) => {
        if (error) {
            console.error('Error executing the query', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'CartItem deleted successfully' });
    });
}

exports.removeAllFromCart = (req, res) => {
    pool.query('DELETE FROM CartItem', [], (error) => {
        if (error) {
            console.error('Error executing the query', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'All Items in CartItem deleted successfully' });
    });
}

exports.updateCartItemQuantity = (req, res) => {
    const cartItemId = req.params.cartItemId;
    const { quantity } = req.body;
    const cartItem = new CartItem(cartItemId, quantity, null, null);
    
    pool.query('UPDATE CartItem SET Quantity = ? WHERE ID = ?', [cartItem.quantity, cartItem.ID], (error) => {
        if (error) {
            console.error('Error executing the query', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
        res.status(201).json({ message: 'CartItem quantity updated successfully' });
    });
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
