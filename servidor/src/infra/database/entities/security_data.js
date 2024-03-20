const databaseConnection = require("../connection");
const { DataTypes } = require("sequelize");

const SecurityData = databaseConnection.define("Security_Data", {
  id,
  userId: {
    type: DataTypes.INTEGER,
    field: "user_id",
    references: {
      model: "Users",
      key: "id",
    },
  },
  token: { type: DataTypes.STRING },
  expiresIn: { type: DataTypes.DATE, field: "expires_in" },
  wasUsed: { type: DataTypes.DATE, field: "was_used" },
  createdAt: { type: DataTypes.DATE, field: "createdAt" },
  updatedAt: { type: DataTypes.DATE, field: "updatedAt" },
});

module.exports = SecurityData;