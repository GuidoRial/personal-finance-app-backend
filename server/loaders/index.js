const mongooseLoader = require("./mongoose");
const expressLoader = require("./express");

const loader = async () => {
  await mongooseLoader();
  await expressLoader();
};

module.exports = loader;
