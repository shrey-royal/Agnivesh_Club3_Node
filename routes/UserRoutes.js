const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController.js")

router.get("/", userController.getAllUsersFromDB);
router.get("/:id", userController.getUserById);

module.exports = router;