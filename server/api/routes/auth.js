const controllers = require("../controllers");

function authenticationRoutes(app) {
  app.post("/api/auth/login", controllers.auth.authenticate);
  app.post("/api/auth/signup", controllers.auth.signup);
}

module.exports = authenticationRoutes;
