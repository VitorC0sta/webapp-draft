require("dotenv").config()
const { Sequelize } = require('sequelize');

async function databaseConnection() {
  
  const database = new Sequelize('database', 'admin', `${process.env.DB_PASSWORD}`, {
    host: "localhost",
    port: "5432",
    dialect: "postgres",
    logging: false
  })

  try {
    await database.authenticate();
    console.log("Connection has been established successfully\n");
  } catch (err) {
    console.error("Unable to connect: clear", err);
  };

  return database;
}

module.exports = databaseConnection;

