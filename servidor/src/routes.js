const Router = require("express");
const theRoute = require("./modules/capy/routes/capy.routes");
const userRoutes = require("./modules/user/routes/user.routes");
const clientsRoutes = require("./modules/client/routes/client.routes");
const sessionsRoutes = require("./modules/sessions/routes/sessions.routes")
const routes = Router();

routes.use("/capy", theRoute);
routes.use("/user", userRoutes);
routes.use("/client", clientsRoutes);
routes.use("/sessions", sessionsRoutes)
module.exports = routes;