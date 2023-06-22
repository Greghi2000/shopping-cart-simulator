const app = require('./app');
const { connect } = require('./config/db');

// Connect to the database
connect();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});