const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  categoryType: {
    type: String,
    enum: ["expense", "income", "remittance"],
    required: true,
  },
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const categoryModel = model("Category", categorySchema, "categories");

module.exports = categoryModel;
