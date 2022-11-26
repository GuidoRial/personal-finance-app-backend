const auth = require("./auth");
const category = require("./category");
const user = require("./user");
const wallet = require("./wallet");

const controllers = {
  auth,
  category,
  user,
  wallet,
};

module.exports = controllers;
