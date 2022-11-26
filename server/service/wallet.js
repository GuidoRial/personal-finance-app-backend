const walletModel = require("../models/wallet");

const WalletService = {
  async createWallet(wallet) {
    try {
      const newWallet = walletModel.create(wallet);
      return newWallet;
    } catch (e) {
      throw e;
    }
  },
  async removeWallet(id) {
    try {
      const result = walletModel.deleteOne(id);
      return result;
    } catch (e) {
      throw e;
    }
  },
};

module.exports = WalletService;
