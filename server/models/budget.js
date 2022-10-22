const { Schema, model } = require("mongoose");

const budgetSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  currency: {
    type: Schema.Types.ObjectId,
    ref: "Currency",
    required: true,
  },
  expenses: [
    {
      plannedMoneyToBeSpent: {
        type: Number,
        required: true,
      },
      actualMoneySpent: {
        type: Number,
        required: true,
      },
      categoryType: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    },
  ],
  income: [
    {
      plannedIncome: {
        type: Number,
        required: true,
      },
      actualIncome: {
        type: Number,
        required: true,
      },
      categoryType: {
        type: Schema.Types.ObjectId,
        ref: "Category",
        required: true,
      },
    },
  ],
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const categoryModel = model("Budget", budgetSchema, "budgets");

module.exports = categoryModel;
