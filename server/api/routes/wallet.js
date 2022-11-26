const controllers = require("../controllers");
const middlewares = require("../middlewares");

function walletRoutes(app) {
  app.post("/api/wallet", middlewares.isAuth, controllers.wallet.createWallet);
  app.get("/api/wallets", middlewares.isAuth, controllers.wallet.getWallets);
  app.put("/api/wallet/:id", middlewares.isAuth, controllers.wallet.updateWallet)
  app.delete("/api/wallet/:id", middlewares.isAuth, controllers.wallet.deleteWallet)

}

module.exports = walletRoutes;
