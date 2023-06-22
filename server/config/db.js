const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  connectionLimit: 50, // adjust as needed
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || 'pw',
  database: process.env.DB_NAME || 'shopping_cart_db'
});

function connect() {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database');
      console.error(err);
      return;
    }
    console.log('Connected to the MySQL database');
    connection.release();
  });
}

module.exports = {
  connect,
  pool
};