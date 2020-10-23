const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  productName: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  size: {
    type: Schema.Types.ObjectId,
    ref: "Size",
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  stock: {
    type: Number,
  },
},{
    timestamps:true
});
module.exports = mongoose.model("Product", productSchema);
