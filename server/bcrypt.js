const bcrypt = require('bcrypt');

// A higher number of salt rounds provides better security but increases hashing time
const saltRounds = 10;

async function hashPassword(password) {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.error('Error hashing password:', error);
    throw error;
  }
}

module.exports = { hashPassword };