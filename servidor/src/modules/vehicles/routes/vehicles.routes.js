const { Router } = require("express");
const VehicleController = require("../controllers/vehicles.controller.js");

const vehicleController = new VehicleController();
const vehicleRoutes = Router();

vehicleRoutes.post("/", vehicleController.create);
vehicleRoutes.get("/", vehicleController.showVehicles);

module.exports = vehicleRoutes;