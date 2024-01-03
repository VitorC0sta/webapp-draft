import { Router } from "express";
import { theRoute } from "./the.route.js";
import { userRoutes } from "./user.routes.js";

export const routes = Router();

routes.use("/theroute", theRoute);
routes.use("/user", userRoutes);