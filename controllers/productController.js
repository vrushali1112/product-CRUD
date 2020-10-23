const productModel = require("../models/productModel")

module.exports = function (router) {
    router.post("/createproduct", async (req, res) => {
        try {
          res.status(200).json(await productModel.createProduct(req.body));
        } catch (error) {
          res.status(500).json(error);
        }
      }),
      router.get("/getAllProduct", async (req, res) => {
      try {
        res.status(200).json(await productModel.getAllProduct());
      } catch (error) {
        res.status(500).json(error);
      }
    }),
    router.delete("/deleteProduct", async (req, res) => {
      try {
        res.status(200).json(await productModel.deleteProduct(req.body));
      } catch (error) {
        res.status(500).json(error);
      }
    }),
    router.get("/getOneProduct", async (req, res) => {
      try {
        res.status(200).json(await productModel.getOneProduct(req.body));
      } catch (error) {
        res.status(500).json(error);
      }
    });

}
