const Router = require("express");
const theRoute = require("./the.routes.js");
const userRoutes = require("./user.routes.js");
const clientsRoutes = require("./client.routes.js");

const routes = Router();

routes.use("/theroute", theRoute);
routes.use("/user", userRoutes);
routes.use("/client", clientsRoutes);

module.exports = routes;