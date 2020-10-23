const Size = require("../mongoosemodel/size");

module.exports = {
  async createSize(data) {
    try {
      if (data) {
        var saveData = {};
        if (data._id) {
          saveData = await Size.updateOne({ _id: data._id });
        } else {
          var size = new Size(data);
          saveData = await size.save();
        }
        if (saveData || saveData != null) {
          return saveData;
        }
      }
    } catch (error) {
      return error;
    }
  },

  async getAllSize() {
    try {
      var listSize = await Size.find({});
      if (listSize) {
        return listSize;
      }
    } catch (error) {
      return error;
    }
  },

  async deleteSize(data) {
    try {
      var deletedData = await Size.deleteOne({ _id: data._id });
      console.log("deletedData", deletedData);
      if (deletedData) {
        return deletedData;
      }
    } catch (error) {
      return error;
    }
  },
  async getOneSize(data) {
    try {
      var foundData = await Size.findOne({ _id: data._id });
      if (foundData) {
        return foundData;
      }
    } catch (error) {
      return error;
    }
  },
};
