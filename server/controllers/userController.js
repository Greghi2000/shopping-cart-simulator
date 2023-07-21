const { pool } = require('../config/db')
const jwt = require('jsonwebtoken');
const { hashPassword } = require('../bcrypt')

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
const secretKey = 'your_secret_key';

exports.authUser = (req, res) => {
    const { username, email, sub } = req.body;

  // Check if the user already exists in the database based on the 'sub' field
  pool.query('SELECT * FROM User WHERE sub = ?', [sub], (error, results) => {
    if (error) {
      console.error('Error executing the query');
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }

    // If a user with the same 'sub' exists, return an error indicating the user is already registered
    if (results.length > 0) {
      return res.status(409).json({ message: 'User already exists' });
    }

    // If the user does not exist, proceed to register the user
    // Assuming you have a function to hash the password securely
    const hashedPassword = hashPassword(req.body.password);

    // Create a new user object
    const newUser = new User(null, username, hashedPassword, email);

    // Save the user to the database
    pool.query('INSERT INTO User SET ?', newUser, (error, result) => {
      if (error) {
        console.error('Error executing the query');
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
      }

      // Return the token to the frontend or perform any other desired actions
      res.status(201).json({ message: 'User registered successfully', token });
    });
  });
};

// exports.userLogout = 