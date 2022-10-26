const auth = require("./auth");
const currency = require("./currency");
const category = require("./category");
const wallet = require("./wallet");
const user = require("./user");

const controllers = {
  auth,
  currency,
  category,
  wallet,
  user,
};

module.exports = controllers;
