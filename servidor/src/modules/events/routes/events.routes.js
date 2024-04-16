const Router = require("express");

const EventsController = require("../controllers/events.controller");

const eventRoutes = Router();

const eventsController = new EventsController();

eventRoutes.get("/", eventsController.showEvents);

module.exports = eventRoutes;