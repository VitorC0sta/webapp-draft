const { Router } = require('express');
const ClientsController = require('../controllers/clients.controller');
const isAdmin = require('../../../infra/middlewares/isAdmin');

const clientsRoutes = Router();

const clientsController = new ClientsController();

clientsRoutes.post("/register", isAdmin, clientsController.create);
clientsRoutes.get("/:id", clientsController.showClient);

module.exports = clientsRoutes;
