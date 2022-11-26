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
  async getWallets(id) {
    try {
      return walletModel.find({ associatedUser: id });
    } catch (e) {
      throw e;
    }
  },
  async updateWallet(id, data) {
    try {
      const identifier = { _id: id };
      const update = {
        $set: { name: data.name, description: data.description },
      };
      return walletModel.updateOne(identifier, update);
    } catch (e) {
      throw e;
    }
  },
  async deleteWallet(id) {
    try {
      return walletModel.deleteOne({ _id: id });
    } catch (e) {
      throw e;
    }
  },
};

module.exports = WalletService;
