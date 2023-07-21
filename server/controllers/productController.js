const { pool } = require('../config/db');
const Product = require('../models/Product');

exports.getProducts = (req, res) => {
    pool.query('SELECT * FROM Product', (error, results) => {
        if (error) {
            console.error('Error executing the query');
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        const products = results.map(productData => new Product(productData.ID, productData.Title, productData.Price, productData.Description, productData.ImageURL));

        res.status(200).json(products);
    });
};

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

        const product = new Product(results[0].ID, results[0].Title, results[0].Price, results[0].Description, results[0].ImageURL);

        res.status(200).json(product);
    });
};

exports.addProduct = (req, res) => {
    console.log(req.body);
    const product = new Product(null, req.body.title, req.body.price, req.body.description, req.body.imageURL);

    pool.query('INSERT INTO Product (Title, Price, Description, ImageURL) VALUES (?, ?, ?, ?)', [product.title, product.price, product.description, product.imageURL], (error, results) => {
        if (error) {
            console.error('Error executing the query');
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        product.ID = results.insertId;
        console.log('This is results.insertedId', results.insertId)

        res.status(201).json(product);
    });
};
