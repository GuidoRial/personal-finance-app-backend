const AuthService = require("../../service/auth");

module.exports = async (req, res, next) => {
  try {
    const jwtPayload = await AuthService.authorize(req.get("Authorization") && req.get("Authorization").split("Bearer ").pop());
    if (!jwtPayload) {
      return res.status(401).end("Unauthorized");
    }
    req.user = jwtPayload;
    return next();
  } catch (e) {
    return res.status(401).json({ e: e.message });
  }
};
