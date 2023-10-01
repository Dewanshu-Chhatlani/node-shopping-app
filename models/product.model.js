const mongoose = require("mongoose");

const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
  _id: {
    type: ObjectId,
    auto: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category_id: {
    type: ObjectId,
    ref: "Category",
  },
});

const productModel = mongoose.model("Product", productSchema);

module.exports = productModel;
