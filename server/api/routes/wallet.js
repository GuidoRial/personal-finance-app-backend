const controllers = require("../controllers");
const middlewares = require("../middlewares");

function walletRoutes(app) {
  app.post("/api/wallet", middlewares.isAuth, controllers.wallet.createWallet);
  app.get("/api/wallets", middlewares.isAuth, controllers.wallet.getWallets);

}

module.exports = walletRoutes;
