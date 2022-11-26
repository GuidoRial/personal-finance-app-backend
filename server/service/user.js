const argon2 = require("argon2");
const userModel = require("../models/user");

const userService = {
  getUserById(id) {
    return userModel.find({ _id: id });
  },
  getByEmail(email, { getPassword } = { getPassword: false }) {
    let projection = { wallets: 0, budgets: 0, savings: 0 };
    if (!getPassword) {
      projection.password = 0;
    }
    return userModel.findOne({ email }, projection).lean();
  },
  async createUser(userData) {
    try {
      if (!userData.password) {
        throw new Error("Debes proveer una contraseña para éste usuario");
      } else {
        const hashedPassword = await argon2.hash(userData.password);
        userData.password = hashedPassword;
      }

      return userModel.create(userData);
    } catch (e) {
      throw e;
    }
  },
  async addWalletToUser(userId, newWalletId) {
    try {
      return userModel.updateOne(
        { _id: userId },
        { $push: { wallets: newWalletId } }
      );
    } catch (e) {
      throw e;
    }
  },
  async removeWalletFromUser(userId, walletId) {
    try {
      return userModel.updateOne(
        { _id: userId },
        { $pull: { wallets: walletId } }
      );
    } catch (e) {
      throw e;
    }
  },
};

module.exports = userService;
