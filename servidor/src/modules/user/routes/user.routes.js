const Router = require("express");
const UserController = require("../controllers/user.controller.js");
const ensureAuthenticated = require("../../../middlewares/ensureAuthenticated.js");
const isAdmin = require("../../../middlewares/isAdmin.js");

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", ensureAuthenticated, isAdmin, userController.create);

module.exports = userRoutes;