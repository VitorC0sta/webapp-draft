const Router = require("express");
const ensureAuthenticated = require("./infra/middlewares/ensureAuthenticated");
const isAdmin = require("./infra/middlewares/isAdmin");
const routes = Router();
const theRoute = require("./modules/capy/routes/capy.routes");
const userRoutes = require("./modules/user/routes/user.routes");
const clientsRoutes = require("./modules/client/routes/client.routes");
const sessionsRoutes = require("./modules/sessions/routes/sessions.routes");
const operationsRoutes = require("./modules/operations/routes/operations.routes");
const vehicleRoutes = require("./modules/vehicles/routes/vehicles.routes");
const adminOperationsRoutes = require("./modules/administrator/operations/routes/adminOperations.routes");
const adminClientRoutes = require("./modules/administrator/client/routes/client.routes");
const adminUserRoutes = require("./modules/administrator/user/routes/user.routes");
const adminVehiclesRoutes = require("./modules/administrator/vehicles/routes/adminVehicles.routes");

routes.use("/", sessionsRoutes);
routes.use("/capy", theRoute);
routes.use(ensureAuthenticated);
routes.use("/user", userRoutes);
routes.use("/client", clientsRoutes);
routes.use("/operation", operationsRoutes);
routes.use("/vehicles", vehicleRoutes);
routes.use(isAdmin);
routes.use("/admin/operation", adminOperationsRoutes);
routes.use("/admin/client", adminClientRoutes);
routes.use("/admin/user", adminUserRoutes);
routes.use("/admin/vehicles", adminVehiclesRoutes);

module.exports = routes;