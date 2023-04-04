import { model, Schema } from "mongoose";
import slugify from "slugify";
const productSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: String,
    oldPrice: Number,
    newPrice: Number,
    slug: { type: String, required: true, unique: true },
    size: [String],
    featured: {
      type: Boolean,
      default: false,
    },
    productInfo: String,
    ingredients: String,
    shippingInfo: [String],
    imageUrl: String,
  },
  { timestamps: true }
);

productSchema.pre("validate", function (next) {
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

export default model("Product", productSchema);
