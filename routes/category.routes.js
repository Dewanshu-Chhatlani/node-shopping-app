const express = require("express");

const router = express.Router();

const CategoriesController = require("../controllers/categories.controller");

router.route("/").get(CategoriesController.list);
router.route("/:id").get(CategoriesController.show);
router.route("/").post(CategoriesController.create);
router.route("/:id").put(CategoriesController.update);
router.route("/:id").delete(CategoriesController.destroy);

module.exports = router;
