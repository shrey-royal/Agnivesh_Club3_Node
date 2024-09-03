const express = require("express");
const router = express.Router();
const categoryController = require("../controller/CategoryController.js")

router.post('/', categoryController.createCategory);

module.exports = router;