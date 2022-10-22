const CurrencyService = require("../../service/currency");

module.exports = {
  async getAll(req, res) {
    try {
      const currencies = await CurrencyService.getAllCurrencies();
      return res.status(200).json({ currencies });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async createCurrency(req, res) {
    try {
      const currency = await CurrencyService.createCurrency(req.body);
      return res.status(200).json({ currency });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
