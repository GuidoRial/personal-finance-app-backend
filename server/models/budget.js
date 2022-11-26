const { Schema, model } = require("mongoose");

const budgetSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const categoryModel = model("Budget", budgetSchema, "budgets");

module.exports = categoryModel;
