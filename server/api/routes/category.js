const controllers = require("../controllers");
const middlewares = require("../middlewares");

function currencyRoutes(app) {
  app.get("/api/categories", middlewares.isAuth, controllers.category.getAll);
  app.post("/api/category", middlewares.isAuth, controllers.category.createCategory);
  app.put("/api/category/:id", middlewares.isAuth, controllers.category.editCategory);
  app.delete("/api/category/:id", middlewares.isAuth, controllers.category.deleteCategory);
}

module.exports = currencyRoutes;
