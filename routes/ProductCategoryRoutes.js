const express = require("express");
const router = express.Router();
const categoryController = require("../controller/CategoryController.js")

router.post('/', categoryController.createCategory);
router.get('/', categoryController.getAllCategory);

module.exports = router;