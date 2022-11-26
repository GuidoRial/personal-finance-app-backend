const { Schema, model } = require("mongoose");
const transactionSchema = require("./transaction");

const transactionsSchema = new Schema({
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  data: {
    type: [transactionSchema],
    default: [],
  },
});

const transactionsModel = model("Transactions", transactionsSchema, "transactions");

module.exports = transactionsModel;
