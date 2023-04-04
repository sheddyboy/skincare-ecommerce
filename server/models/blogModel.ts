import { model, Schema, Types } from "mongoose";
import slugify from "slugify";

const blogSchema = new Schema(
  {
    user_id: {
      type: Types.ObjectId,
      required: true,
    },
    slug: { type: String, required: true, unique: true },
    title: {
      type: String,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    tag: {
      type: String,
      required: true,
    },
    imageUrl: String,
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

blogSchema.pre("validate", function (next) {
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

export default model("Blog", blogSchema);
