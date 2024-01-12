const Router = require("express");
const theRoute = require("./modules/capy/routes/capy.routes.js");
const userRoutes = require("./modules/user/routes/user.routes.js");
const clientsRoutes = require("./modules/client/routes/client.routes.js");

const routes = Router();

routes.use("/capy", theRoute);
routes.use("/user", userRoutes);
routes.use("/client", clientsRoutes);

module.exports = routes;