const categoryModel = require("../models/categoryModel");

module.exports = function (router) {
  router.post("/createcategory", async (req, res) => {
    try {
      res.status(200).json(await categoryModel.createCategory(req.body));
    } catch (error) {
      res.status(500).json(error);
    }
  }),
  router.get("/getAllCategory", async (req, res) => {
      console.log("data",res.status)
    try {
      res.status(200).json(await categoryModel.getAllCategory());
    } catch (error) {
      res.status(500).json(error);
    }
  }),
  router.delete("/deleteCategory", async (req, res) => {
  try {
    res.status(200).json(await categoryModel.deleteCategory(req.body));
  } catch (error) {
    res.status(500).json(error);
  }
}),
router.get("/getOneCategory", async (req, res) => {
    try {
      res.status(200).json(await categoryModel.getOneCategory(req.body));
    } catch (error) {
      res.status(500).json(error);
    }
  });
};
