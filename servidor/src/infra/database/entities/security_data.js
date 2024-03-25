const databaseConnection = require("../connection");
const { DataTypes } = require("sequelize");

const SecurityData = databaseConnection.define("Security_data", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
  wasUsed: { type: DataTypes.BOOLEAN, field: "was_used", defaultValue: false },
  createdAt: { type: DataTypes.DATE, field: "created_at" },
  updatedAt: { type: DataTypes.DATE, field: "updated_at" },
});

module.exports = SecurityData;
