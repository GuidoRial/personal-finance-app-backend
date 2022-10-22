const controllers = require("../controllers");
const middlewares = require("../middlewares");

function currencyRoutes(app) {
  app.get("/api/currencies", middlewares.isAuth, controllers.currency.getAll);
  app.post("/api/currency", controllers.currency.createCurrency);
}

module.exports = currencyRoutes;
