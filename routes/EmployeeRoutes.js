const express = require("express");
const router = express.Router();
const employeeController = require("../controller/EmployeeController.js")

router.post("/", employeeController.createEmployee);
router.get("/", employeeController.getAllEmployees);

module.exports = router;