const Router = require("express");
const UserController = require("../controllers/user.controller.js");
const isAdmin = require("../../../infra/middlewares/isAdmin.js");
const uploadConfig = require("../../../config/upload");
const UserAvatarController = require("../controllers/user.avatar.controller.js");
const multer = require("multer");

const userRoutes = Router();
const upload = multer(uploadConfig.MULTER);

const userController = new UserController();
const userAvatarController = new UserAvatarController();

userRoutes.post("/", isAdmin, userController.create);
userRoutes.put("/update", userController.update);
userRoutes.get("/:id", isAdmin, userController.showUser);
//serRoutes.patch("/:id/avatar", uploadConfig.MULTER, upload.single("avatar"), userAvatarController.update);
module.exports = userRoutes;