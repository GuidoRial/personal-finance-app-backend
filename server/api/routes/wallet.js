const controllers = require("../controllers");
const middlewares = require("../middlewares");

function currencyRoutes(app) {
  app.get("/api/wallets", middlewares.isAuth, controllers.wallet.getAll);
  app.get("/api/wallets/:id", middlewares.isAuth, controllers.wallet.get);
  app.post("/api/wallet", middlewares.isAuth, controllers.wallet.createWallet);
  app.put("/api/wallet/:id", middlewares.isAuth, controllers.wallet.editWallet);
  app.delete("/api/wallet/:id", middlewares.isAuth, controllers.wallet.deleteWallet);
}

module.exports = currencyRoutes;
