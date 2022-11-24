const { Schema, model } = require("mongoose");

const wallet = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  identifier: {
    identifierType: {
      type: String,
      enum: ["address", "CBU"]
    },
    value: String
  },
  currency: {
    type: String,
    required: true,
  },
  balance: {
    type: Number,
    default: 0,
  },
  associatedUser: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});
const walletModel = model("Wallet", wallet, "wallets");

module.exports = walletModel;
