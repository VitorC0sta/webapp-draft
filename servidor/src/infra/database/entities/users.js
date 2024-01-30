const databaseConnection = require("../connection");

const { DataTypes } = require("sequelize");

const Users = databaseConnection.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  administrator: DataTypes.BOOLEAN,
  password: DataTypes.STRING,
  active: DataTypes.BOOLEAN,
  nationalIdNumber: { type: DataTypes.STRING, field: "national_id_number"  },
  createdAt: { type: DataTypes.DATE, field: "created_at" },
  updatedAt: { type: DataTypes.DATE, field: "updated_at" },
  idClient: {
    type: DataTypes.INTEGER,
    field: "id_client",
    references: {
      model: "Clients",
      key: "id",
    },
  },
});

Users.find = async function (columnKey, value) {
  const searchField = {};
  searchField[columnKey] = value;

  return await this.findOne({ where: searchField });
};


module.exports = Users;
