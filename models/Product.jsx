const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: String,
  price: String,
  categories: String,
},
  {timestamps:true}
);

const ProductModel = mongoose.model("Products", ProductSchema);
module.exports = ProductModel;
