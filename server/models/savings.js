const { Schema, model } = require("mongoose");

const savingsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  currency: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  balanceHistory: {
    type: [
      {
        type: Date,
        currentBalance: Number,
      },
    ],
  },
  target: {
    type: Number,
    required: true,
  },
  bought: {
    type: Boolean,
    default: false,
  },
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  // In the future, add timestamps for values each month
});

const savingsModel = model("Saving", savingsSchema, "savings");

module.exports = savingsModel;
