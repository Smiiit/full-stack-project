const { Router } = require("express");

const authRouter = Router();
const authController = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");

/**
 * @route POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register", authController.registerUserController);

/**
 * @name POST /api/auth/login
 * @description Login a user with email and password
 * @access Public
 */
authRouter.post("/login", authController.loginUserController);

/**
 * @name GET /api/auth/logout
 * @description Clear token from user cookiee and blacklist tokens
 * @access Public
 */
authRouter.get("/logout", authController.logoutUserController);

/**
 * @name GET /api/auth/get-me
 * @description get logged in user details
 * @access Private
 */
authRouter.get(
  "/get-me",
  authMiddleware.authUser,
  authController.getMeController,
);

module.exports = authRouter;
