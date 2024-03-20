const { Router } = require("express");

const SessionsController = require("../controllers/sessions.controller");
const sessionsController = new SessionsController();

const sessionRoutes = Router();

sessionRoutes.post("/", sessionsController.authenticate);
sessionRoutes.post("/forgot_password", sessionsController.recoveryPassword);

module.exports = sessionRoutes;