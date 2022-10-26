const authRoutes = require("./auth");
const currencyRoutes = require("./currency");
const categoryRoutes = require("./category");
const walletRoutes = require("./wallet");
const userRoutes = require("./user");

const setupRoutes = app => {
  authRoutes(app);
  currencyRoutes(app);
  categoryRoutes(app);
  walletRoutes(app);
  userRoutes(app);
};

module.exports = setupRoutes;
