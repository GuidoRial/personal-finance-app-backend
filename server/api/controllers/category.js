const categoryService = require("../../service/category");

module.exports = {
  async getAll(req, res) {
    try {
      const { type } = req.query;
      const categories = await categoryService.getCategories(req.user._id, type);
      return res.status(200).json({ categories });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async createCategory(req, res) {
    try {
      let data = {
        title: req.body.title,
        categoryType: req.body.categoryType,
        associatedUser: req.user._id,
      };
      const category = await categoryService.createCategory(data);
      return res.status(200).json({ category });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async editCategory(req, res) {
    try {
      const { id } = req.params;
      let data = {
        title: req.body.title,
        categoryType: req.body.categoryType,
        associatedUser: req.user._id,
      };
      const category = await categoryService.editCategory(id, data);
      return res.status(200).json({ category });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
  async deleteCategory(req, res) {
    try {
      const { id } = req.params;
      const category = await categoryService.deleteCategory(id);
      return res.status(200).json({ category });
    } catch (e) {
      return res.status(400).json({ message: e.message, stack: e.stack });
    }
  },
};
