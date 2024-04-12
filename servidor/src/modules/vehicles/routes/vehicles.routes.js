const { Router } = require("express");
const VehicleController = require("../controllers/vehicles.controller.js");
const isAdmin = require("../../../infra/middlewares/isAdmin.js");

const vehicleController = new VehicleController();
const vehicleRoutes = Router();

vehicleRoutes.post("/", vehicleController.create);
vehicleRoutes.get("/:id", vehicleController.show);
vehicleRoutes.get("/", vehicleController.showVehicles);

module.exports = vehicleRoutes;