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
  async deleteWallet(req, res) {
    try {
      const deletedWallet = await WalletService.deleteWallet(req.params.id);

      const userUpdated = await userService.removeWalletFromUser(
        req.user._id,
        req.params.id
      );

      return res.status(200).json({ result: deletedWallet, userUpdated });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async transfer(req, res) {
    try {
      const { receiverWalletId, senderNewBalance, receiverNewBalance } =
        req.body;
      const senderWalletId = req.params.id;

      const walletUpdates = await WalletService.transferFromWalletToWallet(
        senderWalletId,
        receiverWalletId,
        senderNewBalance,
        receiverNewBalance
      );

      return res.status(200).json({ result: walletUpdates });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
