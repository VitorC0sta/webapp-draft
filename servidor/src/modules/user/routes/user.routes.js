const Router = require("express");
const UserController = require("../controllers/user.controller.js");

const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", userController.create);

module.exports = userRoutes;