const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const config = require("../config");
const userService = require("./user");

const AuthService = {
  async authenticate(email, password) {
    const user = await userService.getByEmail(email, { getPassword: true });
    if (!user) return { result: false, message: "Usuario no encontrado" };
    if (await argon2.verify(user.password, password)) {
      const accessToken = this.createSession(user);
      delete user.password;
      return { result: true, accessToken, user };
    } else {
      return { result: false, message: "Mala combinación de usuario y contraseña" };
    }
  },
  createSession(user) {
    const accessToken = jwt.sign(
      {
        _id: user._id.toString(),
        sub: user._id.toString(),
        name: user.name,
      },
      config.sessions.secret
    );

    return accessToken;
  },
  async authorize(_jwt) {
    return jwt.verify(_jwt, config.sessions.secret);
  },
  async signup(_user) {
    try {
      const user = await userService.createUser(_user);
      const accessToken = this.createSession(user);
      delete user.password;
      return { user, accessToken };
    } catch (e) {
      if (e.code === 11000) {
        throw new Error("Ya existe una cuenta asociada a éste correo electrónico");
      }
      throw e;
    }
  },
};

module.exports = AuthService;
