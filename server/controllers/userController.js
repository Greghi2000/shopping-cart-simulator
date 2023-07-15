const { pool } = require('../config/db')

exports.getAllUsers = (req, res) => {
    pool.query('SELECT * FROM User', (error, results) => {
      if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
      res.status(200).json(results);
    });
}

exports.getUserById = (req, res) => {
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
}

exports.registerUser = (req, res) => {
    console.log(req.body)
    const {username, password, email} = req.body
    pool.query('INSERT INTO User (Username, Password, Email) VALUES (?, ?, ?)', [username, password, email], (error, results) => {
        if (error) {
          console.error('Error executing the query');
          console.error(error);
          return res.status(500).json({ error: 'Internal Server Error' });
        }
      
        res.status(201).json({ message: 'User added successfully' });
    });
}

// exports.userLogout = 