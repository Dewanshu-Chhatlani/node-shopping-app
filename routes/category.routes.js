const express = require("express");

const CategoriesController = require("../controllers/categories.controller");

const router = express.Router();
const categoriesController = new CategoriesController();

router.route("/").get(categoriesController.list);
router.route("/").post(categoriesController.create);

module.exports = router;
