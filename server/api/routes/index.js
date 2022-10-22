const authRoutes = require("./auth");
const currencyRoutes = require("./currency");
const categoryRoutes = require("./category");

const setupRoutes = app => {
  authRoutes(app);
  currencyRoutes(app);
  categoryRoutes(app);
};

module.exports = setupRoutes;
