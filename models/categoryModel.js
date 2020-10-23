const Category = require("../mongoosemodel/category");

module.exports = {
  async createCategory(data) {
    try {
      if (data) {
        var saveData = {};
        if (data._id) {
          saveData = await Category.updateOne({ _id: data._id });
        } else {
          var category = new Category(data);
          saveData = await category.save();
        }
        console.log("saveData", saveData);
        if (saveData || saveData != null) {
          return saveData;
        }
      }
    } catch (error) {
      return error;
    }
  },

  async getAllCategory() {
    try {
      var listCategory = await Category.find({});
      if (listCategory) {
        return listCategory;
      }
    } catch (error) {
      return error;
    }
  },

  async deleteCategory(data) {
    try {
      var deletedData = await Category.deleteOne({ _id: data._id });
      console.log("deletedData", deletedData);
      if (deletedData) {
        return deletedData;
      }
    } catch (error) {
      return error;
    }
  },
  async getOneCategory(data) {
    try {
      var foundData = await Category.findOne({ _id: data._id });
      console.log("foundData==>", foundData);
      if (foundData) {
        return foundData;
      }
    } catch (error) {
      return error;
    }
  },
};
