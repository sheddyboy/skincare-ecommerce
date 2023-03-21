import { model, Schema } from "mongoose";

const treatmentSchema = new Schema({
  title: String,
  desc: String,
  imageUrl: String,
  details: {
    type: [{ title: String, desc: String, price: Number }],
  },
  content: String,
});

export default model("Treatment", treatmentSchema);
