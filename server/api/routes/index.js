const authRoutes = require("./auth");
const walletRoutes = require("./wallet");

const setupRoutes = (app) => {
  authRoutes(app);
  walletRoutes(app);
};

module.exports = setupRoutes;
