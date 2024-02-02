const { Router } = require("express");
const UserController = require("../controller/user.controller");

const adminUserRoutes = Router();

const userController = new UserController();

adminUserRoutes.get("/", userController.showUsers);

module.exports = adminUserRoutes;