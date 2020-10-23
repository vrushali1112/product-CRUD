const Product = require("../mongoosemodel/product");

module.exports = {
  async createProduct(data) {
    try {
      if (data) {
        var saveData = {};
        if (data._id) {
          saveData = await Product.updateOne({ _id: data._id });
        } else {
          var produt = new Product(data);
          saveData = await product.save();
        }
        if (saveData || saveData != null) {
          return saveData;
        }
      }
    } catch (error) {
      return error;
    }
  },
  async getAllProduct() {
    try {
      var listCategory = await Product.find({});
      if (listCategory) {
        return listCategory;
      }
    } catch (error) {
      return error;
    }
  },

  async deleteProduct(data) {
    try {
      var deletedData = await Product.deleteOne({ _id: data._id });
      console.log("deletedData==>", deletedData);
      if (deletedData) {
        return deletedData;
      }
    } catch (error) {
      return error;
    }
  },
  async getOneProduct(data) {
    try {
      var foundData = await Product.findOne({ _id: data._id });
      if (foundData) {
        return foundData;
      }
    } catch (error) {
      return error;
    }
  },
};
