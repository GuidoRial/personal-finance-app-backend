const { Schema, model } = require("mongoose");

const holding = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  address: String,
  CBU: String,
  alias: String,
  balance: {
    type: Number,
    required: true,
  },
  isWallet: {
    type: Boolean,
    required: true,
  },
  holdingType: {
    type: String,
    enum: ["cash", "bank account", "crypto", "budgetPlan"],
  },
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  currency: {
    type: String,
    required: true,
  },
});
const walletModel = model("Holding", holding, "holdings");

module.exports = walletModel;
