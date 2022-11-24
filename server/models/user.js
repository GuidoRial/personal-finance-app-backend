const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    currencies: {
      type: Array,
      default: ["USD", "USDT", "ARS"]
    },
    wallets: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Wallet",
        },
      ],
      default: [],
    },
    budgets: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Budget",
        },
      ],
      default: [],
    },
    savings: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Saving",
        },
      ],
      default: [],
    },
    transactions: {
      type: Schema.Types.ObjectId,
      ref: "Transactions"
    }
  },
  { timestamps: true, strict: true }
);

const userModel = model("User", userSchema, "users");

module.exports = userModel;
