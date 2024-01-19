const { Router } = require('express');
const ClientsController = require('../controllers/clients.controller');
const ensureAuthenticated = require('../../../middlewares/ensureAuthenticated');
const isAdmin = require('../../../middlewares/isAdmin');

const clientsRoutes = Router();

const clientsController = new ClientsController();

clientsRoutes.post("/register", isAdmin, clientsController.create);

module.exports = clientsRoutes;
