const Router = require("express");
const theRoute = require("./the.route.js");
const userRoutes = require("./user.routes.js");

const routes = Router();

routes.use("/theroute", theRoute);
routes.use("/user", userRoutes);

module.exports = routes;