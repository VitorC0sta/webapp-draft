const Router = require("express");
const UserController = require("../controllers/user.controller.js");
const isAdmin = require("../../../infra/middlewares/isAdmin.js");

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", isAdmin, userController.create);
userRoutes.put("/update", userController.update);
module.exports = userRoutes;