const auth = require("./auth");
const currency = require("./currency");
const category = require("./category");
const wallet = require("./wallet");

const controllers = {
  auth,
  currency,
  category,
  wallet,
};

module.exports = controllers;
