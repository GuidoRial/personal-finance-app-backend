const currencyModel = require("../models/currency");

const currencyService = {
  getAllCurrencies() {
    return currencyModel.find({}).lean();
  },
  createCurrency(currency) {
    return currencyModel.create(currency);
  },
};

module.exports = currencyService;
