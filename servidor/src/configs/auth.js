require('dotenv').config()

module.exports = {
  jwt: {
    secret: process.env.SECRET,
    expiresIn: process.env.EXPIRES_IN
  }
};