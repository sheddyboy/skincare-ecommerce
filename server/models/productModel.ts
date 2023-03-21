import { model, Schema } from "mongoose";

const productSchema = new Schema({
  title: String,
  desc: String,
  oldPrice: Number,
  newPrice: Number,
  size: [String],
  productInfo: String,
  ingredients: String,
  shippingInfo: String,
  imageUrl: String,
});

export default model("Product", productSchema);
