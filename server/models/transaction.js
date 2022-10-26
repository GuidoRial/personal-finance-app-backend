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
    type: Schema.Types.ObjectId,
    ref: "Currency",
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  senderWallet: {
    type: Schema.Types.ObjectId,
    ref: "Wallet",
    required: true,
  },
  receiverWallet: {
    type: Schema.Types.ObjectId,
    ref: "Wallet",
    required: true,
  },
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const transactionModel = model("Transaction", transactionSchema, "transactions");

module.exports = transactionModel;
