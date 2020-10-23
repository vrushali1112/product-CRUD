const sizeModel = require("../models/sizeModel");

module.exports = function (router) {
  router.post("/createSize", async (req, res) => {
    try {
      res.status(200).json(await sizeModel.createSize(req.body));
    } catch (error) {
      res.status(500).json(error);
    }
  }),
    router.get("/getAllSize", async (req, res) => {
      try {
        res.status(200).json(await sizeModel.getAllSize());
      } catch (error) {
        res.status(500).json(error);
      }
    }),
    router.delete("/deleteSize", async (req, res) => {
      try {
        res.status(200).json(await sizeModel.deleteSize(req.body));
      } catch (error) {
        res.status(500).json(error);
      }
    }),
    router.get("/getOneSize", async (req, res) => {
      try {
        res.status(200).json(await sizeModel.getOneSize(req.body));
      } catch (error) {
        res.status(500).json(error);
      }
    });
};
