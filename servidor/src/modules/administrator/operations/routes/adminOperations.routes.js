const { Router } = require("express");
const OperationsController = require("../controller/operations.controller");

const adminOperationsRoutes = Router();

const operationsController = new OperationsController();

adminOperationsRoutes.get("/", operationsController.showOperations);
adminOperationsRoutes.get("/:id", operationsController.showOperation)


module.exports = adminOperationsRoutes