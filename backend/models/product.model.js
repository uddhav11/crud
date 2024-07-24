const mongoose = require("mongoose");

const ProductModel = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "must provide the parameter"],
      trim: true,
      maxlength: [20, "name cannot exceeds 20 caharacter length"]
    },
    completed: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", ProductModel);
module.exports = Product;
