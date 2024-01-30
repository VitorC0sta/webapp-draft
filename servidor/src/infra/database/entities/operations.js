const databaseConnection = require("../connection");

const { DataTypes } = require("sequelize");

const Operations = databaseConnection.define("Operations", {
  active: DataTypes.BOOLEAN,
  operationName: { type: DataTypes.STRING, field: "operation_name"},
  destinationCity: { type: DataTypes.STRING, field: "destination_city"},
  destinationRegion: { type: DataTypes.STRING, field: "destination_region"},
  destinationCountry: { type: DataTypes.STRING, field: "destination_country"},
  createdAt: { type: DataTypes.DATE, field: "created_at" },
  updatedAt: { type: DataTypes.DATE, field: "updated_at" },
  idClient: {
    type: DataTypes.INTEGER,
    field: "id_client",
    references: {
      model: "Clients",
      key: "id",
    },
  }
})

Operations.find = async function (columnKey, value) {
  const searchField = {};
  searchField[columnKey] = value;

  return await this.findOne({ where: searchField });
};

module.exports = Operations;