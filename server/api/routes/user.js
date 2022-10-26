const controllers = require("../controllers");

function userRoutes(app) {
  app.get("/api/users/usernames", controllers.user.getUsernames);
  app.get("/api/users/emails", controllers.user.getEmails);
}

module.exports = userRoutes;
