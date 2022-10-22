const { Schema, model } = require("mongoose");

const currencySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

const categoryModel = model("Currency", currencySchema, "currencies");

module.exports = categoryModel;
