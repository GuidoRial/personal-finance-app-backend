const userService = require("../../service/user");
const WalletService = require("../../service/wallet");

module.exports = {
  async createWallet(req, res) {
    try {
      const wallet = await WalletService.createWallet({
        ...req.body,
        associatedUser: req.user._id,
      });

      const userUpdated = await userService.addWalletToUser(
        wallet.associatedUser,
        wallet._id
      );
      return res.status(200).json({ result: wallet, userUpdated });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async removeWallet(req, res) {
    try {
      const wallet = await WalletService.removeWallet(req.params.walletId);

      const userUpdated = await userService.removeWalletFromUser(
        req.user._id,
        req.params.walletId
      );
      return res.status(200).json({ result: wallet, userUpdated });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async getWallets(req, res) {
    try {
      const wallets = await WalletService.getWallets(req.user._id);
      return res.status(200).json({ result: wallets });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async updateWallet(req, res) {
    try {
      const updatedWallet = await WalletService.updateWallet(
        req.params.id,
        req.body
      );
      return res.status(200).json({ result: updatedWallet });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
