require('dotenv').config();
const { Sequelize } = require('sequelize');

const databaseConnection = new Sequelize(
  'database',
  'admin',
  `${process.env.DB_PASSWORD}`,
  {
    host: 'localhost',
    port: '5432',
    dialect: 'postgres',
    logging: true
  }
);

databaseConnection
  .authenticate()
  .then(() => console.log('Connection has been established successfully\n'))
  .catch((err) => console.error('Unable to connect: clear', err));

module.exports = databaseConnection;
