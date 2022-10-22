const walletModel = require("../models/wallet");

const WalletService = {
  async getWallets(userId, currencyId, type) {
    if (currencyId) {
      return walletModel.find({ $and: [{ associatedUser: userId }, { currency: currencyId }] }).lean();
    } else if (type) {
      return walletModel.find({ $and: [{ associatedUser: userId }, { walletType: type }] }).lean();
    } else {
      return walletModel.find({ associatedUser: userId }).lean();
    }
  },
  async getWallet(id) {
    return walletModel.find({ _id: id });
  },
  async createWallet(wallet) {
    return walletModel.create(wallet);
  },
  async updateWallet(id, wallet) {
    return walletModel.updateOne({ _id: id }, wallet);
  },
  async deleteWallet(id) {
    return walletModel.deleteOne({ _id: id });
  },
};

module.exports = WalletService;
