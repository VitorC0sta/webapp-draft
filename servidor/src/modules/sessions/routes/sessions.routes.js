const { Router } = require("express");

const SessionsController = require("../controllers/sessions.controller");
const sessionsController = new SessionsController();

const sessionRoutes = Router();

sessionRoutes.post("/", sessionsController.authenticate);
sessionRoutes.post("/forgot_password", sessionsController.sendRecoveryEmail);
sessionRoutes.post("/reset_password/", sessionsController.resetPassword);
module.exports = sessionRoutes;