const HttpStatusCodes = require("http-status-codes");

const Category = require("../models/category.model");

const list = (req, res) => {
  Category.find()
    .then((docs) => res.status(HttpStatusCodes.StatusCodes.OK).send(docs))
    .catch((err) =>
      res
        .status(HttpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: "Internal Server Error", error: err })
    );
};

const show = (req, res) => {
  Category.findById(req.params.id)
    .then((doc) => {
      if (doc) {
        res.status(HttpStatusCodes.StatusCodes.OK).send(doc);
      } else {
        res.status(HttpStatusCodes.StatusCodes.NOT_FOUND).send({
          message: "Internal Server Error",
          error: "Resource Not Found",
        });
      }
    })
    .catch((err) =>
      res
        .status(HttpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: "Internal Server Error", error: err })
    );
};

const create = (req, res) => {
  Category.create(req.body)
    .then((doc) => res.status(HttpStatusCodes.StatusCodes.CREATED).send(doc))
    .catch((err) =>
      res
        .status(HttpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: "Internal Server Error", error: err })
    );
};

const update = (req, res) => {
  Category.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((doc) => {
      if (doc) {
        res.status(HttpStatusCodes.StatusCodes.OK).send(doc);
      } else {
        res.status(HttpStatusCodes.StatusCodes.NOT_FOUND).send({
          message: "Internal Server Error",
          error: "Resource Not Found",
        });
      }
    })
    .catch((err) =>
      res
        .status(HttpStatusCodes.StatusCodes.INTERNAL_SERVER_ERROR)
        .send({ message: "Internal Server Error", error: err })
    );
};

const destroy = (req, res) => {
  Category.findByIdAndDelete(req.params.id)
    .then((doc) => {
      if (doc) {
        res.status(HttpStatusCodes.StatusCodes.OK).send({ message: "Deleted" });
      } else {
        res.status(HttpStatusCodes.StatusCodes.NOT_FOUND).send({
          message: "Internal Server Error",
          error: "Resource Not Found",
        });
      }
    })
    .catch((err) => console.log(err));
};

module.exports = {
  list,
  create,
  show,
  update,
  destroy,
};
