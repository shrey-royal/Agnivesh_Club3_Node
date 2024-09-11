const express = require("express");
const router = express.Router();
const userController = require("../controller/UserController.js")
const authMiddleware = require("../middleware/AuthMiddleware.js")
const zodMiddleware = require("../middleware/ZodMiddleware.js")
const userValidationSchema = require("../util/UserValidationSchema.js")

router.get("/", authMiddleware.authMiddleWare, userController.getAllUsersFromDB);
router.get("/:id", userController.getUserById);
router.post("/add", zodMiddleware.validateSchema(userValidationSchema), userController.addUser);
router.delete("/:id", userController.deleteUser);
router.put("/:id", userController.updateUser);
router.put("/filter/:age", userController.getUserByAge);

module.exports = router;