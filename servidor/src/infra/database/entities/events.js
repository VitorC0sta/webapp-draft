const databaseConnection = require("../connection");
const { DataTypes, Sequelize } = require("sequelize");

const Events = databaseConnection.define("Events", {
  eventName: { type: DataTypes.STRING, field: "event_name" },
  createdAt: {
    type: DataTypes.DATE,
    field: "created_at",
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  },
  idVehicle: {
    type: DataTypes.INTEGER,
    field: "id_vehicle",
    model: "Vehicles",
    key: "id"
  }
},
{
  timestamps: false,
})

module.exports = Events;
