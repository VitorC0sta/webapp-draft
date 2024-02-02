const { Router } = require("express");
const ClientsController = require("../controller/clients.controller");

const adminClientRoutes = Router();
const clientsController = new ClientsController();

adminClientRoutes.put("/", clientsController.updateClient);
adminClientRoutes.get("/", clientsController.showClients);
adminClientRoutes.delete("/", clientsController.deleteClient);

module.exports = adminClientRoutes;

