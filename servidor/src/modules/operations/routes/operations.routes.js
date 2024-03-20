const { Router } = require("express");
const OperationsController = require("../controllers/operations.controller.js");
const isAdmin = require("../../../infra/middlewares/isAdmin.js");

const operationsRoutes = Router();

const operationsController = new OperationsController()

operationsRoutes.post("/", isAdmin, operationsController.createOperation);
operationsRoutes.get("/:id", operationsController.showOperation);

module.exports = operationsRoutes;