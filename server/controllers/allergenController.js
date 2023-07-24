const { pool } = require('../config/db');
const Allergen = require('../models/Allergen')
const Product = require('../models/Product')

exports.getAllAllergens = (req, res) => {
    pool.query('SELECT * FROM Allergen', (error, results) => {
        if (error) {
            console.error('Error executing the query', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const allergens = results.map(row => new Allergen(row.ID, row.AllergenName));
            res.status(200).json(allergens);
        }
    })
}

exports.getAllProductsNotContainingAllergen = (req, res) => {
    const allergenId = req.params.id;
    let query
    if (allergenId == 9) {
        query = `
            SELECT Product.* 
            FROM Product 
            WHERE Product.ID IN (
                SELECT ProductID FROM Product_Allergen WHERE AllergenID = ?
            )
        `;
    } else {
        query = `
            SELECT Product.* 
            FROM Product 
            WHERE Product.ID NOT IN (
                SELECT ProductID FROM Product_Allergen WHERE AllergenID = ?
            )
        `;
    }

    pool.query(query, [allergenId], (error, results) => {
        if (error) {
            console.error('Error executing the query', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const products = results.map(row => new Product(row.ID, row.Title, row.Price, row.Description, row.ImageURL));
            res.status(200).json(products);
        }
    });
}

exports.getSearchedProducts = (req, res) => {
    const searchParameter = req.query.search;

    const query = `
    SELECT * FROM Product
    WHERE Title LIKE ?
    `;

    pool.query(query, [`%${searchParameter}%`], (error, results) => {
        if (error) {
            console.error('Error executing the query', error)
            res.status(500).json({ error: 'Internal Server Error' })
        } else {
            const products = results.map(row => new Product(row.ID, row.Title, row.Price, row.Description, row.ImageURL));
            res.status(200).json(products)
        }
    })
}