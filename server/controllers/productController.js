const { pool } = require('../config/db')

exports.getProducts = (req, res) => {
    pool.query('SELECT * FROM Product', (error, results) => {
      if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
  
    res.status(200).json(results);
    });
}

exports.getProductById = (req, res) => {
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
}

exports.addProduct = (req, res) => {
    console.log(req.body)
    const { title, price, description, imageURL } = req.body;
  
    pool.query('INSERT INTO Product (Title, Price, Description, ImageURL) VALUES (?, ?, ?, ?)', [title, price, description, imageURL], (error, results) => {
      if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    
      res.status(201).json({ message: 'Product added successfully' });
    });
}