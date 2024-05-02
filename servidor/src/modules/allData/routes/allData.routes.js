const { Router } = require("express");
const AllDataController = require("../controller/allDataController");

const allDataController = new AllDataController();
const allDataRoutes = Router();

allDataRoutes.get("/", allDataController.showAllData);

module.exports = allDataRoutes;