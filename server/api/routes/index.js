const authRoutes = require("./auth");
const currencyRoutes = require("./currency");

const setupRoutes = app => {
  authRoutes(app);
  currencyRoutes(app);
};

module.exports = setupRoutes;
