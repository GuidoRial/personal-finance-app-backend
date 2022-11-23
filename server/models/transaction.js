const { Schema, model } = require("mongoose");

const transactionSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  senderHolding: {
    type: Schema.Types.ObjectId,
    ref: "Holding",
    required: true,
  },
  receiverHolding: {
    type: Schema.Types.ObjectId,
    ref: "Holding",
    required: true,
  },
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const transactionModel = model("Transaction", transactionSchema, "transactions");

module.exports = transactionModel;
