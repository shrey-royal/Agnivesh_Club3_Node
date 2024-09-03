const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController.js")

router.get("/", userController.getAllUsersFromDB);
router.get("/:id", userController.getUserById);
router.post("/add", userController.addUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);

module.exports = router;