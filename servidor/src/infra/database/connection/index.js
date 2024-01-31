const { Sequelize } = require("sequelize");

const databaseConnection = new Sequelize({
  dialect: "postgres",
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: console.log,
});

databaseConnection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => console.error("Unable to connect to the database:", error));

module.exports = databaseConnection;