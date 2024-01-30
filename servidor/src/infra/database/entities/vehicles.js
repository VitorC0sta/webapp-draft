const databaseConnection = require("../connection");

const { DataTypes } = require("sequelize");

const Vehicles = databaseConnection.define("Vehicles", {
  vehicleName: { type: DataTypes.STRING, field: "vehicle_name" },
  vehicleColor: { type: DataTypes.STRING, field: "vehicle_color" },
  vehicleModel: { type: DataTypes.STRING, field: "vehicle_model" },
  active: DataTypes.BOOLEAN,
  vehiclePlate: { type: DataTypes.STRING, field: "vehicle_plate" },
  createdAt: { type: DataTypes.DATE, field: "created_at" },
  updatedAt: { type: DataTypes.DATE, field: "updated_at" },
  idOperation: {
    type: DataTypes.INTEGER,
    field: "id_operation",
    references: {
      model: "Operations",
      key: "id"
    }
  }
});

module.exports = Vehicles;