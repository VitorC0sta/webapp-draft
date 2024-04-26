const { Router } = require("express");

const EventsController = require("../controllers/events.controller");

const eventRoutes = Router();

const eventsController = new EventsController();

eventRoutes.get("/", eventsController.showEvents);
eventRoutes.get("/last_events", eventsController.showLastEvents);

module.exports = eventRoutes;