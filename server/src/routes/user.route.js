const express = require("express");
const router = express.Router();
const Authenticate = require("../middleware/auth.middleware").Authenticate;

const userController = require("../controllers/user.controller");

router.get("/getUser", Authenticate, userController.getUserProfileHandler);

router.post("/signin", userController.registerHandler);

module.exports = router;
