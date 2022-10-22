const argon2 = require("argon2");
const userModel = require("../models/user");

const userService = {
  getByEmail(email, { getPassword } = { getPassword: false }) {
    let projection = {};
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
        console.log(hashedPassword);
        userData.password = hashedPassword;
      }

      return userModel.create(userData);
    } catch (e) {
      throw e;
    }
  },
};

module.exports = userService;
