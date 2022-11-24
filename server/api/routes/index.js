const authRoutes = require("./auth");

const setupRoutes = (app) => {
  authRoutes(app);
};

module.exports = setupRoutes;
