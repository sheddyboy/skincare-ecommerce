import { model, Schema } from "mongoose";
import slugify from "slugify";

const treatmentSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: String,
    imageUrl: String,
    slug: { type: String, required: true, unique: true },
    featured: {
      type: Boolean,
      default: false,
    },
    details: {
      type: [{ title: String, desc: String, price: Number }],
    },
    content: String,
  },
  { timestamps: true }
);

treatmentSchema.pre("validate", function (next) {
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

export default model("Treatment", treatmentSchema);
