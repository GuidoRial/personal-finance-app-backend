const authRoutes = require("./auth");
const currencyRoutes = require("./currency");
const categoryRoutes = require("./category");
const walletRoutes = require("./wallet");

const setupRoutes = app => {
  authRoutes(app);
  currencyRoutes(app);
  categoryRoutes(app);
  walletRoutes(app);
};

module.exports = setupRoutes;
