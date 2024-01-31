require('dotenv').config();

console.log(process.env.DATABASE_HOST);

module.exports = {
    development: {
      dialect: 'postgres',
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      define: {
        timestamp: true,
        underscored: true
      }
    }
}
