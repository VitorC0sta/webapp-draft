const { Router } = require('express');
const ClientsController = require('../controllers/clients.controller');

const clientsRoutes = Router();

const clientsController = new ClientsController();

clientsRoutes.use("/register", clientsController.create);

module.exports = clientsRoutes;
