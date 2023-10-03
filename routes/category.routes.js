const express = require("express");

const router = express.Router();

const CategoriesController = require("../controllers/categories.controller");

router.route("/").get(CategoriesController.list);
router.route("/").post(CategoriesController.create);

module.exports = router;
