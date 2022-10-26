const userService = require("../../service/user");

module.exports = {
  async getUsernames(req, res) {
    try {
      const usernames = await userService.getUsernames();
      return res.status(200).json({ usernames });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async getEmails(req, res) {
    try {
      const emails = await userService.getEmails();
      return res.status(200).json({ emails });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
