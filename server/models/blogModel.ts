import { model, Schema, Types } from "mongoose";

const blogSchema = new Schema({
  user_id: {
    type: Types.ObjectId,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default model("Blog", blogSchema);
