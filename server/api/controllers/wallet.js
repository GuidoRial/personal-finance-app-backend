const WalletService = require("../../service/wallet");

module.exports = {
  async getAll(req, res) {
    try {
      const userId = req.user._id;
      const currencyId = req.query.currency;
      const type = req.query.type;
      const wallets = await WalletService.getWallets(userId, currencyId, type);
      return res.status(200).json({ wallets });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async get(req, res) {
    try {
      const wallet = await WalletService.getWallet(req.params.id);
      return res.status(200).json({ wallet });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async createWallet(req, res) {
    try {
      let data = {
        ...req.body,
        associatedUser: req.user._id,
      };
      const wallet = await WalletService.createWallet(data);
      return res.status(200).json({ wallet });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async editWallet(req, res) {
    try {
      const { id } = req.params;
      let data = {
        ...req.body,
        associatedUser: req.user._id,
      };
      const wallet = await WalletService.updateWallet(id, data);
      return res.status(200).json({ wallet });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async deleteWallet(req, res) {
    try {
      const { id } = req.params;
      const wallet = await WalletService.deleteWallet(id);
      return res.status(200).json({ wallet });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
