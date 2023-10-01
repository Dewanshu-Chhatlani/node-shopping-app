const HttpStatusCodes = require("http-status-codes");

const Category = require("../models/category.model");

class CategoriesController {
  list = (req, res) => {
    Category.find()
      .then((docs) => res.status(HttpStatusCodes.StatusCodes.OK).send(docs))
      .catch((err) =>
        res
          .status(HttpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR)
          .send({ message: "Internal Server Error", error: err })
      );
  };

  create = (req, res) => {
    Category.create(req.body)
      .then((doc) => res.status(HttpStatusCodes.StatusCodes.CREATED).send(doc))
      .catch((err) =>
        res
          .status(HttpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR)
          .send({ message: "Internal Server Error", error: err })
      );
  };
}

module.exports = CategoriesController;
