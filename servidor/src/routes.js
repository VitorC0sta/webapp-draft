const Router = require("express");
const theRoute = require("./modules/capy/routes/capy.routes");
const userRoutes = require("./modules/user/routes/user.routes");
const clientsRoutes = require("./modules/client/routes/client.routes");
const sessionsRoutes = require("./modules/sessions/routes/sessions.routes");
const ensureAuthenticated = require("./infra/middlewares/ensureAuthenticated");
const routes = Router();

routes.use("/sessions", sessionsRoutes);
routes.use("/capy", theRoute);
routes.use(ensureAuthenticated);
routes.use("/user", userRoutes);
routes.use("/client", clientsRoutes);
module.exports = routes;