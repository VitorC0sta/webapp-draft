const Router = require("express");
const UserController = require("../controllers/user.controller.js");
const { validateUserCreation } = require("../middlewares/userValidations.js");


const userRoutes = Router();

const userController = new UserController();

userRoutes.post("/", validateUserCreation, userController.create);

module.exports = userRoutes;