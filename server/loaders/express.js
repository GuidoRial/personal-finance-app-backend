const express = require("express");
const config = require("../config");
const setupRoutes = require("../api/routes");
const cors = require("cors");

module.exports = () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  setupRoutes(app);
  return new Promise(resolve => {
    app.listen(config.server.port, () => {
      console.log("Server running on port : ", config.server.port);
      resolve(app);
    });
  });
};
