const { Router } = require("express");
const VehicleController = require("../controller/vehicle.controller");

const adminVehiclesRoutes = Router();

const vehicleController = new VehicleController();

adminVehiclesRoutes.put("/", vehicleController.updateVehicle);

module.exports = adminVehiclesRoutes;