const { Schema, model } = require("mongoose");

const walletSchema = new Schema({
  title: {
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
  walletType: {
    type: String,
    enum: ["cash", "bank account", "crypto"],
    required: true,
  },
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  currency: {
    type: Schema.Types.ObjectId,
    ref: "Currency",
    required: true,
  },
});
const walletModel = model("Wallet", walletSchema, "wallets");

module.exports = walletModel;
