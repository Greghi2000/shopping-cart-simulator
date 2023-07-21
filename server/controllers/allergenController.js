// Import database pool and models
const { pool } = require('../config/db')
const AllergenModel = require('../models/Allergen')

exports.getAllAllergens = (req, res) => {
    pool.query('SELECT * FROM Allergen', (error, results) => {
        if (error) {
            console.error('Error executing the query', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const allergens = results.map(row => new AllergenModel(row.ID, row.AllergenName));
            res.status(200).json(allergens);
        }
    })
}

exports.getAllAllergensNotContainingProductId = (req, res) => {
    const { productId } = req.params;
    const query = `
        SELECT Allergen.* 
        FROM Allergen 
        LEFT JOIN Product_Allergen ON Allergen.ID = Product_Allergen.AllergenID 
        WHERE Product_Allergen.ProductID != ? OR Product_Allergen.ProductID IS NULL
    `

    pool.query(query, [productId], (error, results) => {
        if (error) {
            console.error('Error executing the query', error);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            const allergens = results.map(row => new AllergenModel(row.ID, row.AllergenName));
            res.status(200).json(allergens);
        }
    })
}