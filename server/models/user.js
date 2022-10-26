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
    transactions: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true, strict: true }
);

const userModel = model("User", userSchema, "users");

module.exports = userModel;
