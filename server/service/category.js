const { category } = require("../api/controllers");
const categoryModel = require("../models/category");

const categoryService = {
  async getCategories(userId, type) {
    console.log(userId, type);
    return categoryModel.find({ $and: [{ associatedUser: userId }, { categoryType: type }] }).lean();
  },
  async createCategory(category) {
    return categoryModel.create(category);
  },
  async editCategory(id, category) {
    return categoryModel.updateOne({ _id: id }, category);
  },
  async deleteCategory(id) {
    return categoryModel.deleteOne({ _id: id });
  },
};

module.exports = categoryService;
