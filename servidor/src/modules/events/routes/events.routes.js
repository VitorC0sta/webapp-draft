const { Router } = require("express");

const EventsController = require("../controllers/events.controller");

const eventRoutes = Router();

const eventsController = new EventsController();

eventRoutes.get("/", eventsController.showEvents);
eventRoutes.get("/last_events", eventsController.showLastEvents);
eventRoutes.get("/seven_days_events", eventsController.showLastDaysEvents);

module.exports = eventRoutes;