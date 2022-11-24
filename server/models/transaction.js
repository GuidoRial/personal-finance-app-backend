const { Schema } = require("mongoose");

const transactionSchema = new Schema(
  {
    amount: {
      type: Number,
      required: true,
    },
    currency: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["deposit", "transfer", "withdrawal"],
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
    date: {
      type: Date,
      required: true,
    },
    sender: {
      type: String,
      enum: ["wallet", "saving", "budget"]
    },
    receiver: {
      type: String,
      enum: ["wallet", "saving", "budget"]
    },
  },
  { _id: false }
);

module.exports = transactionSchema