const Router = require("express");
const theRoute = require("./modules/capy/routes/capy.routes");
const userRoutes = require("./modules/user/routes/user.routes");
const clientsRoutes = require("./modules/client/routes/client.routes");
const sessionsRoutes = require("./modules/sessions/routes/sessions.routes");
const operationsRoutes = require("./modules/operations/routes/operations.routes");
const vehicleRoutes = require("./modules/vehicles/routes/vehicles.routes");
const ensureAuthenticated = require("./infra/middlewares/ensureAuthenticated");
const routes = Router();

routes.use("/sessions", sessionsRoutes);
routes.use("/capy", theRoute);
routes.use(ensureAuthenticated);
routes.use("/user", userRoutes);
routes.use("/client", clientsRoutes);
routes.use("/operation", operationsRoutes);
routes.use("/vehicles", vehicleRoutes);
module.exports = routes;